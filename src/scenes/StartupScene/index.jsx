import { useMemo } from 'react';
import { StartupGif } from '@assets/ui';
import { TransitionScene } from '@classes/scenes';
import { FadeTransition } from '@components/scenes';
import '@scenes/StartupScene/StartupScene.css';
import '@components/ui/Screen/Screen.css';

export default new TransitionScene({
  name: 'startup',
  Background,
  Transition: FadeTransition,
  targetMode: 'disclaimer',
  modeSwitchDelay: 4500,
  visualStartDelay: 3250,
  animationDuration: 1,
});

function Background({ mode }) {
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
