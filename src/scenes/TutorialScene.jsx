import { TransitionScene } from '@classes/scenes';
import {
  FadeTransition,
  ScrollingBackground,
  TutorialForeground,
} from '@components/scenes';

export default new TransitionScene({
  name: 'tutorial',
  song: 'tutorial',
  Background: ScrollingBackground,
  Foreground: TutorialForeground,
  Transition: FadeTransition,
  targetMode: 'level-start',
  triggerMode: 'tutorial-exit',
  modeSwitchDelay: 2500,
  animationDuration: 1.5,
});
