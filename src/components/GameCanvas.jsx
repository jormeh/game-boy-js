import { useRef } from 'react';
import { useResizeCanvas, useGameLoop } from '@hooks';
import '@styles/GameCanvas.css';

export default function GameCanvas() {
  const canvasRef = useRef(null);

  useGameLoop(canvasRef.current);
  useResizeCanvas(canvasRef.current);

  return <canvas ref={canvasRef} className="screen__canvas"></canvas>;
}
