import { useEffect, useRef } from 'react';
import '../styles/Screen.css';

function resizeCanvas(canvas, ctx) {
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width;
  canvas.height = rect.height;
  ctx.fillStyle = '#222';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

export default function Screen({ width, height, y }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    ctx.imageSmoothingEnabled = false;

    const handleResize = () => resizeCanvas(canvas, ctx);
    handleResize();

    const observer = new ResizeObserver(handleResize);
    observer.observe(canvas);

    return () => observer.disconnect();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="canvas"
      className={'screen'}
      style={{ width, height, top: y }}
    ></canvas>
  );
}
