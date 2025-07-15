export default class TransitionManager {
  constructor() {
    this.timeouts = [];
  }

  play(gameState, setGameState, delay) {
    const timeout = setTimeout(() => setGameState(gameState), delay);
    this.timeouts.push(timeout);
  }

  stop() {
    this.timeouts.forEach((timeout) => clearTimeout(timeout));
  }
}
