import { TransitionScene } from '@classes/scenes';
import {
  FadeTransition,
  MenuForeground,
  ScrollingBackground,
} from '@components/scenes';

export default new TransitionScene({
  name: 'menu',
  song: 'menu',
  Background: ScrollingBackground,
  Foreground: MenuForeground,
  Transition: FadeTransition,
  targetMode: 'tutorial-start',
  triggerMode: 'menu-exit',
  modeSwitchDelay: 2500,
  animationDuration: 1.5,
});
