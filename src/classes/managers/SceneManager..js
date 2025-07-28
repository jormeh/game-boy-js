import { Transition } from '@classes/scenes';

export default class SceneManager {
  constructor(setGameState, setScene, setTransition) {
    this.timeouts = [];
    this.setGameState = setGameState;
    this.setScene = setScene;
    this.setTransition = setTransition;
  }

  play(scene) {
    this.setScene(scene);
    this.setTransition(new Transition());
  }

  changeMode(targetMode, delayMS) {
    const timeout = setTimeout(() => {
      this.setGameState((previous) => ({ ...previous, mode: targetMode }));
    }, delayMS);

    this.timeouts.push(timeout);
  }

  transition(transition, delayMS = 0) {
    const timeout = setTimeout(() => {
      this.setTransition(transition);
    }, delayMS);

    this.timeouts.push(timeout);
  }

  stop() {
    this.timeouts.forEach((timeout) => clearTimeout(timeout));
  }
}
