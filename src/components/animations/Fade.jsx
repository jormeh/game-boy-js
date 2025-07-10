import { useEffect, useState } from 'react';
import '/src/styles/animations/Fade.css';

export default function Fade({
  duration = 500,
  startFadeOut = 1500,
  children,
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const start = setTimeout(() => setIsVisible(true), 10);
    const end = setTimeout(() => setIsVisible(false), startFadeOut);

    return () => {
      clearTimeout(start);
      clearTimeout(end);
    };
  }, []);

  return (
    <div
      className={`fade ${isVisible ? 'fade--in' : 'fade--out'}`}
      style={{ transition: `opacity ${duration}ms ease-in-out` }}
    >
      {children}
    </div>
  );
}
