import { useMemo } from 'react';
import { StartupGif } from '@assets/ui';
import { TransitionScene } from '@classes/scenes';
import '@scenes/StartupScene/StartupScene.css';
import '@components/ui/Screen/Screen.css';

export default new TransitionScene({
  name: 'startup',
  Background,
  Transition,
  nextState: 'disclaimer',
  transitionDelay: 4500,
});

function Background({ gameState }) {
  const startUpGifUrl = useMemo(() => {
    return `url(${StartupGif}?${Date.now()})`;
  }, [gameState]);

  return (
    <div
      className="screen__background screen__background--startup"
      style={{ backgroundImage: startUpGifUrl }}
    ></div>
  );
}

function Transition() {
  return <div className="screen__fade screen__fade--startup"></div>;
}
