import { TransitionScene } from '@classes/scenes';
import { FadeTransition, ScrollingBackground } from '@components/scenes';
import '@scenes/TutorialScene/TutorialScene.css';
import '@components/ui//Screen/Screen.css';

export default new TransitionScene({
  name: 'tutorial',
  Background: ScrollingBackground,
  Foreground,
  Transition: FadeTransition,
  targetMode: 'level',
  triggerMode: 'tutorial-exit',
  modeSwitchDelay: 2500,
  animationDuration: 1.5,
});

export function Foreground({ mode }) {
  return mode === 'tutorial-start' ? (
    <div className="screen__box">
      <p className="screen__tutorial">
        Press A to jump, B to dive, and D-Pad to move. Exit right when ready!
      </p>
    </div>
  ) : null;
}
