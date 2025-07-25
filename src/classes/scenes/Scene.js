export default class Scene {
  constructor({ name, Background, Foreground = null, Transition = null }) {
    this.name = name;
    this.Background = Background;
    this.Foreground = Foreground;
    this.Transition = Transition;
  }
}
