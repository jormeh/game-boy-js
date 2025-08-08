import { useContext, useEffect, useRef } from 'react';
import { GameStateContext } from '@context/GameStateContext';
import { FRAME_DURATION } from '@constants/index';
import { Star } from '@classes/entities';

export default function useGameLoop(canvas) {
  const { gameState, setGameState, isModePlayable, mario, levelManager } =
    useContext(GameStateContext);
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

  const handleCollision = (entity) => {
    if (entity instanceof Star) {
      setGameState((prev) => ({ ...prev, mode: 'passed-level' }));
    }
  };

  const getEntities = () => [mario, ...levelManager.entities];

  const drawEntities = (ctx) =>
    getEntities().forEach((entity) => entity.draw(canvas, ctx));

  const updateEntities = (ctx) => {
    getEntities().forEach((entity) => {
      entity.draw(canvas, ctx, true);
      entity.move(canvas, gameState, setGameState);

      if (isCollidingWithMario(entity)) {
        handleCollision(entity);
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
      drawEntities(ctx);
      cancelAnimationFrame(animationFrame.current);
    } else if (gameState.mode === 'passed-level') {
      ctx?.clearRect(0, 0, canvas.width, canvas.height);
      mario.draw(canvas, ctx);
      cancelAnimationFrame(animationFrame.current);
    } else {
      ctx?.clearRect(0, 0, canvas.width, canvas.height);
      cancelAnimationFrame(animationFrame.current);
    }
  }, [isModePlayable]);

  return () => {
    cancelAnimationFrame(animationFrame.current);
  };
}
