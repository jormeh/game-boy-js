import { useEffect, useRef } from 'react';
import '@styles/GameCanvas.css';

function resizeCanvas(canvas) {
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width;
  canvas.height = rect.height;
}

export default function GameCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    ctx.imageSmoothingEnabled = false;

    const handleResize = () => resizeCanvas(canvas);
    handleResize();

    const observer = new ResizeObserver(handleResize);
    observer.observe(canvas);

    return () => observer.disconnect();
  }, []);

  return <canvas ref={canvasRef} className="screen__canvas"></canvas>;
}
