import { useEffect } from 'react';

const resize = (canvas, entities) => {
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width;
  canvas.height = rect.height;
  entities.forEach((entity) => entity.scaleValuesToCanvas(canvas));
};

export default function useResizeCanvas(canvas, entities) {
  useEffect(() => {
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;

    resize(canvas, entities);
    const observer = new ResizeObserver(() => resize(canvas, entities));
    observer.observe(canvas);

    return () => observer.disconnect();
  }, [canvas]);
}
