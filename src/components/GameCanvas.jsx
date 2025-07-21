import { useContext, useRef } from 'react';
import { useResizeCanvas, useGameLoop } from '@hooks';
import { GameStateContext } from '@context/GameStateContext';
import '@styles/GameCanvas.css';

export default function GameCanvas() {
  const { mario } = useContext(GameStateContext);
  const canvasRef = useRef(null);

  useGameLoop(canvasRef.current);
  useResizeCanvas(canvasRef.current, [mario]);

  return <canvas ref={canvasRef} className="screen__canvas"></canvas>;
}
