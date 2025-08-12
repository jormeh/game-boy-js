import Scene from './Scene';
import { ScrollingBackground } from '@components/scenes';

export default class LevelScene extends Scene {
  constructor({ name, title, song, spawnData }) {
    super({ name, title, song });
    this.spawnData = spawnData;
    this.Background = ScrollingBackground;
  }
}
