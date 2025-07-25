import { useContext, useEffect, useRef } from 'react';
import { GameStateContext } from '@context/GameStateContext';
import { FRAME_DURATION } from '@constants/index';

export default function useGameLoop(canvas) {
  const { gameState, setGameState, isStatePlayable, mario } =
    useContext(GameStateContext);
  const lastTime = useRef(0);
  const animationFrame = useRef(null);

  const loop = (time, ctx) => {
    const delta = time - lastTime.current;

    if (delta >= FRAME_DURATION) {
      lastTime.current = time;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      mario.draw(canvas, ctx);
      mario.move(canvas, gameState, setGameState);
    }

    animationFrame.current = requestAnimationFrame((time) => loop(time, ctx));
  };

  useEffect(() => {
    if (isStatePlayable) {
      const ctx = canvas.getContext('2d');
      animationFrame.current = requestAnimationFrame((time) => loop(time, ctx));
    } else {
      const ctx = canvas?.getContext('2d');
      ctx?.clearRect(0, 0, canvas.width, canvas.height);
      cancelAnimationFrame(animationFrame.current);
    }
  }, [isStatePlayable]);

  return () => {
    cancelAnimationFrame(animationFrame.current);
  };
}
