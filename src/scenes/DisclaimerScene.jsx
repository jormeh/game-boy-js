import { TransitionScene } from '@classes/scenes';
import { DisclaimerBackground, DisclaimerForeground } from '@components/scenes';

export default new TransitionScene({
  name: 'disclaimer',
  Background: DisclaimerBackground,
  Foreground: DisclaimerForeground,
  targetMode: 'menu-start',
  modeSwitchDelay: 7000,
});
