import { Scene } from '@classes/scenes';
import { MenuForeground, ScrollingBackground } from '@components/scenes';

export default new Scene({
  name: 'menu',
  song: 'menu',
  Background: ScrollingBackground,
  Foreground: MenuForeground,
});
