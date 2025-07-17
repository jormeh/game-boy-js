import { useEffect } from 'react';

const resize = (canvas) => {
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width;
  canvas.height = rect.height;
};

export default function useResizeCanvas(canvas) {
  useEffect(() => {
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;

    resize(canvas);
    const observer = new ResizeObserver(() => resize(canvas));
    observer.observe(canvas);

    return () => observer.disconnect();
  }, [canvas]);
}
