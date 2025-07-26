import Scene from './Scene';

export default class TransitionScene extends Scene {
  constructor({
    name,
    song,
    Background,
    Foreground = null,
    Transition = null,
    targetMode,
    triggerMode = '',
    visualStartDelay = 0,
    modeSwitchDelay,
    animationDuration,
  }) {
    super({ name, song, Background, Foreground, Transition });
    this.targetMode = targetMode;
    this.triggerMode = triggerMode;
    this.visualStartDelay = visualStartDelay;
    this.modeSwitchDelay = modeSwitchDelay;
    this.animationDuration = animationDuration;
    this.isTransitioning = false;
  }

  transition(timeouts, setGameState) {
    const timeout = setTimeout(() => {
      setGameState((previous) => ({ ...previous, mode: this.targetMode }));
    }, this.modeSwitchDelay);

    timeouts.push(timeout);
  }
}
