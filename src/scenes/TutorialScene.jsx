import { Scene } from '@classes/scenes';
import { ScrollingBackground, TutorialForeground } from '@components/scenes';

export default new Scene({
  name: 'tutorial',
  song: 'tutorial',
  Background: ScrollingBackground,
  Foreground: TutorialForeground,
});
