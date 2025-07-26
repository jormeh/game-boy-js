import { TransitionScene } from '@classes/scenes';
import { FadeTransition, StartupBackground } from '@components/scenes';

export default new TransitionScene({
  name: 'startup',
  Background: StartupBackground,
  Transition: FadeTransition,
  targetMode: 'disclaimer',
  modeSwitchDelay: 4500,
  visualStartDelay: 3250,
  animationDuration: 1,
});
