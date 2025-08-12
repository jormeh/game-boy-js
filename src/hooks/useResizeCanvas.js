import { useContext, useEffect } from 'react';
import { GameStateContext } from '@context/GameStateContext';

const resize = (canvas, mario, levelManager) => {
  const rect = canvas.getBoundingClientRect();

  canvas.width = rect.width;
  canvas.height = rect.height;
  levelManager.updateCanvasData(canvas);

  const entities = [mario, ...levelManager.entities];
  entities.forEach((entity) => entity.scaleValuesToCanvas(canvas));
};

export default function useResizeCanvas(canvas) {
  const { mario, levelManager } = useContext(GameStateContext);

  useEffect(() => {
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;

    const handler = () => resize(canvas, mario, levelManager);

    handler();
    const observer = new ResizeObserver(handler);
    observer.observe(canvas);

    return () => observer.disconnect();
  }, [canvas]);
}
