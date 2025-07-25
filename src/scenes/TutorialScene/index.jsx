import { TransitionScene } from '@classes/scenes';
import '@scenes/TutorialScene/TutorialScene.css';
import '@components/ui//Screen/Screen.css';

export default new TransitionScene({
  name: 'tutorial',
  Background,
  Foreground,
  Transition,
  nextState: 'level',
  transitionDelay: 2500,
});

function Background() {
  return (
    <div className="screen__background screen__background--tutorial"></div>
  );
}

export function Foreground({ gameState }) {
  return gameState === 'tutorial-start' ? (
    <div className="screen__box">
      <p className="screen__tutorial">
        Press A to jump, B to dive, and D-Pad to move. Exit right when ready!
      </p>
    </div>
  ) : null;
}

function Transition({ gameState }) {
  return gameState === 'tutorial-exit' ? (
    <div className="screen__fade screen__fade--tutorial"></div>
  ) : null;
}
