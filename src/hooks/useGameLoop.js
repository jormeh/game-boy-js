import { useContext, useEffect, useRef } from 'react';
import { GameStateContext } from '@context/GameStateContext';
import { FRAME_DURATION } from '@constants/index';

export default function useGameLoop(canvas) {
  const { gameState, setGameState, isModePlayable, mario, levelManager } =
    useContext(GameStateContext);
  const lastTime = useRef(0);
  const animationFrame = useRef(null);

  const getEntities = () => [mario, ...levelManager.entities];

  const loop = (time, ctx) => {
    const delta = time - lastTime.current;

    if (delta >= FRAME_DURATION) {
      lastTime.current = time;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const entities = getEntities();
      entities.forEach((entity) => {
        entity.draw(canvas, ctx, false);
        entity.move(canvas, gameState, setGameState);
      });
    }

    animationFrame.current = requestAnimationFrame((time) => loop(time, ctx));
  };

  useEffect(() => {
    const ctx = canvas?.getContext('2d');

    if (isModePlayable) {
      mario.resetPosition(canvas);
      animationFrame.current = requestAnimationFrame((time) => loop(time, ctx));
    } else if (gameState.mode === 'player-died') {
      const entities = getEntities();
      entities.forEach((entity) => entity.draw(canvas, ctx, false));
      cancelAnimationFrame(animationFrame.current);
    } else {
      ctx?.clearRect(0, 0, canvas.width, canvas.height);
      cancelAnimationFrame(animationFrame.current);
    }
  }, [isModePlayable, gameState]);

  return () => {
    cancelAnimationFrame(animationFrame.current);
  };
}
