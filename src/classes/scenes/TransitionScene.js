import Scene from './Scene';

export default class TransitionScene extends Scene {
  constructor({
    name,
    Background,
    Foreground = null,
    Transition = null,
    nextMode,
    transitionDelay,
  }) {
    super({ name, Background, Foreground, Transition });
    this.nextMode = nextMode;
    this.transitionDelay = transitionDelay;
  }

  transition(timeouts, setGameState) {
    const timeout = setTimeout(
      () => setGameState((previous) => ({ ...previous, mode: this.nextMode })),
      this.transitionDelay
    );

    timeouts.push(timeout);
  }
}
