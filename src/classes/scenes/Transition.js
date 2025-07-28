export default class Transition {
  constructor(
    classModifier = 'none',
    animationDurationS = 0,
    animationDelayS = 0,
    text = ''
  ) {
    this.classModifier = classModifier;
    this.animationDurationS = `${animationDurationS}s`;
    this.animationDelayS = `${animationDelayS}s`;
    this.text = text;
  }
}
