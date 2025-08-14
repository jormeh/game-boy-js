import { useEffect } from 'react';

export default function useWindowHeight() {
  useEffect(() => {
    const setWindowHeight = () => {
      document.documentElement.style.setProperty(
        '--window-height',
        `${window.innerHeight}px`
      );
    };

    setWindowHeight();

    window.addEventListener('resize', setWindowHeight);

    return () => window.removeEventListener('resize', setWindowHeight);
  });
}
