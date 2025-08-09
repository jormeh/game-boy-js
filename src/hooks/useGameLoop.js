import { useContext, useEffect, useRef } from 'react';
import { GameStateContext } from '@context/GameStateContext';
import { FRAME_DURATION } from '@constants/index';
import { Coin, Mushroom, Star } from '@classes/entities';

export default function useGameLoop(canvas) {
  const {
    gameState,
    setGameState,
    isModePlayable,
    mario,
    levelManager,
    sfxManager,
  } = useContext(GameStateContext);
  const lastTime = useRef(0);
  const animationFrame = useRef(null);

  const checkMarioStatus = (mario) => {
    if (mario.pastTutorial(canvas.width)) {
      setGameState((previous) => ({
        ...previous,
        mode: 'tutorial-exit',
      }));
    }

    if (mario.hasFallen(canvas.width, canvas.height)) {
      if (gameState.mode === 'tutorial-start') {
        mario.resetPosition(canvas);
        sfxManager.play('incorrect');
      } else {
        setGameState((previous) => ({
          ...previous,
          lives: previous.lives - 1,
          mode: 'player-died',
        }));
      }
    }
  };

  const collisionDetected = (mario, entity) => {
    const { x: ex1, y: ey1, width: ew, height: eh } = entity.hitbox;
    const { x: mx1, y: my1, width: mw, height: mh } = mario.hitbox;

    const [ex2, mx2] = [ex1 + ew, mx1 + mw];
    const [ey2, my2] = [ey1 + eh, my1 + mh];

    return !(ex1 >= mx2 || ey1 >= my2 || ex2 <= mx1 || ey2 <= my1);
  };

  const handleCollision = (entity, index) => {
    if (entity instanceof Star) {
      setGameState((previous) => ({ ...previous, mode: 'passed-level' }));
    } else if (entity instanceof Mushroom) {
      setGameState((previous) => ({ ...previous, lives: previous.lives + 1 }));
      sfxManager.play('get-a-life');
      levelManager.entities.splice(index, 1);
    } else if (entity instanceof Coin) {
      setGameState((previous) => ({ ...previous, coins: previous.coins + 1 }));
      sfxManager.play('coin', true);
      levelManager.entities.splice(index, 1);
    } else {
      setGameState((previous) => ({
        ...previous,
        lives: previous.lives - 1,
        mode: 'player-died',
      }));
    }
  };

  function checkForCollision(mario, entities) {
    entities.forEach((entity, index) => {
      if (collisionDetected(mario, entity)) {
        handleCollision(entity, index);
      }
    });
  }

  const updateEntities = (ctx) => {
    levelManager.drawEntities(canvas, ctx);
    levelManager.moveEntities();
    mario.move(canvas, gameState);
    mario.draw(canvas, ctx);
    checkMarioStatus(mario);
    checkForCollision(mario, levelManager.entities);
  };

  const loop = (time, ctx) => {
    const delta = time - lastTime.current;

    if (delta >= FRAME_DURATION) {
      lastTime.current = time;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      updateEntities(ctx);
    }

    animationFrame.current = requestAnimationFrame((time) => loop(time, ctx));
  };

  useEffect(() => {
    const ctx = canvas?.getContext('2d');

    if (isModePlayable) {
      mario.resetPosition(canvas);
      animationFrame.current = requestAnimationFrame((time) => loop(time, ctx));
    } else if (gameState.mode === 'player-died') {
      ctx?.clearRect(0, 0, canvas.width, canvas.height);
      mario.setDeathPosition();
      levelManager.drawEntities(canvas, ctx);
      cancelAnimationFrame(animationFrame.current);
    } else if (gameState.mode === 'passed-level') {
      ctx?.clearRect(0, 0, canvas.width, canvas.height);
      mario.draw(canvas, ctx);
      cancelAnimationFrame(animationFrame.current);
    } else {
      ctx?.clearRect(0, 0, canvas.width, canvas.height);
      cancelAnimationFrame(animationFrame.current);
    }
  }, [gameState.mode]);

  return () => {
    cancelAnimationFrame(animationFrame.current);
  };
}
