import { TransitionScene } from '@classes/scenes';
import { MenuLogo, MenuMario } from '@assets/ui';
import '@styles/ui/Screen.css';
import '@scenes/MenuScene/MenuScene.css';

export default new TransitionScene({
  name: 'menu',
  Background,
  Foreground,
  Transition,
  nextState: 'tutorial-start',
  transitionDelay: 2500,
});

function Background() {
  return <div className="screen__background screen__background--menu"></div>;
}

function Foreground({ gameState }) {
  return gameState === 'menu-start' ? (
    <div className="screen__menu">
      <img className="screen__logo" src={MenuLogo} />
      <img className="screen__mario" src={MenuMario} />
      <p className="screen__start">Press Start</p>
    </div>
  ) : null;
}

function Transition({ gameState }) {
  return gameState === 'menu-exit' ? (
    <div className="screen__fade screen__fade--menu"></div>
  ) : null;
}
