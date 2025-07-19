import { GameStateContext } from '@context/GameStateContext';
import { useContext, useEffect, useRef } from 'react';

const TARGET_FPS = 60;
const FRAME_DURATION = 1000 / TARGET_FPS;

export default function useGameLoop(canvas) {
  const { mario } = useContext(GameStateContext);
  const lastTime = useRef(0);
  const animationFrame = useRef(null);

  const loop = (time, ctx) => {
    const delta = time - lastTime.current;

    if (delta >= FRAME_DURATION) {
      lastTime.current = time;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      mario.draw(canvas, ctx);
      mario.move(canvas);
    }

    animationFrame.current = requestAnimationFrame((time) => loop(time, ctx));
  };

  useEffect(() => {
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    animationFrame.current = requestAnimationFrame((time) => loop(time, ctx));
  }, [canvas]);

  return () => {
    cancelAnimationFrame(animationFrame.current);
  };
}
