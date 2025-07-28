import { Scene } from '@classes/scenes';
import { DisclaimerBackground, DisclaimerForeground } from '@components/scenes';

export default new Scene({
  name: 'disclaimer',
  Background: DisclaimerBackground,
  Foreground: DisclaimerForeground,
});
