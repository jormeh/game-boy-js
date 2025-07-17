import { useEffect, useRef } from 'react';
import useResizeCanvas from '@hooks/useResizeCanvas';
import '@styles/GameCanvas.css';
import useGameLoop from '@hooks/useGameLoop';

export default function GameCanvas() {
  const canvasRef = useRef(null);

  useGameLoop(canvasRef.current);
  useResizeCanvas(canvasRef.current);

  return <canvas ref={canvasRef} className="screen__canvas"></canvas>;
}
