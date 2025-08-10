import { Scene } from '@classes/scenes';
import { CreditsBackground, CreditsForeground } from '@components/scenes';

export default new Scene({
  name: 'credits',
  song: 'credits',
  Background: CreditsBackground,
  Foreground: CreditsForeground,
});
