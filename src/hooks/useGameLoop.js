import { useContext, useEffect, useRef } from 'react';
import { GameStateContext } from '@context/GameStateContext';
import { FRAME_DURATION } from '@constants/index';
import { Mushroom, Star } from '@classes/entities';

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

  const collisionDetected = (mario, entity) => {
    const { x: ex1, y: ey1, width: ew, height: eh } = entity.hitbox;
    const { x: mx1, y: my1, width: mw, height: mh } = mario.hitbox;

    const [ex2, mx2] = [ex1 + ew, mx1 + mw];
    const [ey2, my2] = [ey1 + eh, my1 + mh];

    return !(ex1 >= mx2 || ey1 >= my2 || ex2 <= mx1 || ey2 <= my1);
  };

  const isCollidingWithMario = (entity) =>
    entity !== mario && collisionDetected(mario, entity);

  const handleCollision = (entity, index) => {
    if (entity instanceof Star) {
      setGameState((previous) => ({ ...previous, mode: 'passed-level' }));
    } else if (entity instanceof Mushroom) {
      setGameState((previous) => ({ ...previous, lives: previous.lives + 1 }));
      sfxManager.play('get-a-life');
      levelManager.entities.splice(index, 1);
    }
  };

  const getEntities = () => [mario, ...levelManager.entities];

  const updateEntities = (ctx) => {
    getEntities().forEach((entity, index) => {
      entity.draw(canvas, ctx, true);
      entity.move(canvas, gameState, setGameState);

      if (isCollidingWithMario(entity)) {
        const indexMinusMario = index - 1;
        handleCollision(entity, indexMinusMario);
      }
    });
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
