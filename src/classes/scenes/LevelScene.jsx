import Scene from './Scene';
import { LevelStartForeground, ScrollingBackground } from '@components/scenes';

export default class LevelScene extends Scene {
  constructor({ name, title, song, spawner = () => {} }) {
    super({
      name,
      song,
      Background: ScrollingBackground,
      Foreground: LevelStartForeground,
    });
    this.title = title;
    this.spawner = spawner;
    this.modeSwitchDelay = 1750;
  }

  transition(timeouts, gameState, setGameState) {
    let timeout = null;

    switch (gameState.mode) {
      case 'level-start':
        timeout = setTimeout(() => {
          setGameState((previous) => ({ ...previous, mode: 'level-playing' }));
        }, this.modeSwitchDelay);
        break;
    }

    timeouts.push(timeout);
  }
}
