import { useEffect, useRef } from 'react';
import '@styles/GameCanvas.css';

const TARGET_FPS = 60;
const FRAME_DURATION = 1000 / TARGET_FPS;
const VIRTUAL_WIDTH = 340;
const VIRTUAL_HEIGHT = 293;

function resizeCanvas(canvas) {
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width;
  canvas.height = rect.height;
}

export default function GameCanvas() {
  const canvasRef = useRef(null);
  const lastRenderTime = useRef(0);
  const animationFrameId = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    ctx.imageSmoothingEnabled = false;

    const handleResize = () => resizeCanvas(canvas);
    handleResize();

    const observer = new ResizeObserver(handleResize);
    observer.observe(canvas);

    function gameLoop(timeStamp) {
      const delta = timeStamp - lastRenderTime.current;

      if (delta >= FRAME_DURATION) {
        lastRenderTime.current = timeStamp;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }

      animationFrameId.current = requestAnimationFrame(gameLoop);
    }

    animationFrameId.current = requestAnimationFrame(gameLoop);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  return <canvas ref={canvasRef} className="screen__canvas"></canvas>;
}
