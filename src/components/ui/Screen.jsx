import { useContext, useEffect, useMemo, useRef } from 'react';
import { GameStateContext } from '@context/GameStateContext';
import { Foreground } from '@components/foregrounds/Foreground';
import { StartupGif } from '@assets/ui';
import '@styles/ui/Screen.css';

function resizeCanvas(canvas, ctx) {
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width;
  canvas.height = rect.height;
}

export default function Screen({ width, height, y }) {
  const { gameState } = useContext(GameStateContext);
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

  const backgroundClassName = useMemo(() => {
    return `screen__background screen__background--${gameState}`;
  }, [gameState]);

  const startUpGifUrl = useMemo(() => {
    return `url(${StartupGif}?${Date.now()})`;
  }, [gameState]);

  return (
    <div className="screen" style={{ width, height, top: y }}>
      <div
        className={backgroundClassName}
        style={
          gameState === 'startup'
            ? {
                backgroundImage: startUpGifUrl,
              }
            : {}
        }
      ></div>
      <div className="screen__foreground">
        <Foreground gameState={gameState} />
      </div>
      <canvas ref={canvasRef} className="screen__canvas"></canvas>
    </div>
  );
}
