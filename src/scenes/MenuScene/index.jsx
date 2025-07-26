import { TransitionScene } from '@classes/scenes';
import { MenuLogo, MenuMario } from '@assets/ui';
import { FadeTransition, ScrollingBackground } from '@components/scenes';
import '@components/ui/Screen/Screen.css';
import '@scenes/MenuScene/MenuScene.css';

export default new TransitionScene({
  name: 'menu',
  Background: ScrollingBackground,
  Foreground,
  Transition: FadeTransition,
  targetMode: 'tutorial-start',
  triggerMode: 'menu-exit',
  modeSwitchDelay: 2500,
  animationDuration: 1.5,
});

function Foreground({ mode }) {
  return mode === 'menu-start' ? (
    <div className="screen__menu">
      <img className="screen__logo" src={MenuLogo} />
      <img className="screen__mario" src={MenuMario} />
      <p className="screen__start">Press Start</p>
    </div>
  ) : null;
}
