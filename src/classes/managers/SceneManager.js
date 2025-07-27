import { LevelScene, TransitionScene } from '@classes/scenes/index';

export default class SceneManager {
  constructor() {
    this.timeouts = [];
  }

  transitionScene(currentScene, gameState, setGameState) {
    if (
      currentScene instanceof TransitionScene ||
      currentScene instanceof LevelScene
    ) {
      currentScene.transition(this.timeouts, gameState, setGameState);
    }
  }

  stop() {
    this.timeouts.forEach((timeout) => clearTimeout(timeout));
  }
}
