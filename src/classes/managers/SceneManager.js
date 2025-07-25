import { TransitionScene } from '@classes/scenes/index';

export default class SceneManager {
  constructor() {
    this.timeouts = [];
  }

  transitionScene(currentScene, setGameState) {
    if (currentScene instanceof TransitionScene) {
      currentScene.transition(this.timeouts, setGameState);
    } else {
      console.warn(`The '${currentScene.name}' scene cannot transition.`);
    }
  }

  stop() {
    this.timeouts.forEach((timeout) => clearTimeout(timeout));
  }
}
