import { useMemo } from 'react';
import { StartupGif } from '@assets/ui';
import '@components/scenes/StartupBackground/StartupBackground.css';
import '@components/ui/Screen/Screen.css';

export default function StartupBackground({ mode }) {
  const startUpGifUrl = useMemo(() => {
    return `url(${StartupGif}?${Date.now()})`;
  }, [mode]);

  return (
    <div
      className="screen__background screen__background--startup"
      style={{ backgroundImage: startUpGifUrl }}
    ></div>
  );
}
