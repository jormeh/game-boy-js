import Scene from './Scene';

export default class TransitionScene extends Scene {
  constructor({
    name,
    Background,
    Foreground = null,
    Transition = null,
    nextState,
    transitionDelay,
  }) {
    super({ name, Background, Foreground, Transition });
    this.nextState = nextState;
    this.transitionDelay = transitionDelay;
  }

  transition(timeouts, setGameState) {
    const timeout = setTimeout(
      () => setGameState(this.nextState),
      this.transitionDelay
    );

    timeouts.push(timeout);
  }
}
