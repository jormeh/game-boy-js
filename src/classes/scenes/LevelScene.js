import Scene from './Scene';
import { ScrollingBackground } from '@components/scenes';

export default class LevelScene extends Scene {
  constructor(name, title, song, spawner = () => {}) {
    super(name, title, song);
    this.spawner = spawner;
    this.Background = ScrollingBackground;
  }
}
