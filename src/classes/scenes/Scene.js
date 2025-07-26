export default class Scene {
  constructor({
    name,
    song = '',
    Background,
    Foreground = null,
    Transition = null,
  }) {
    this.name = name;
    this.song = song;
    this.Background = Background;
    this.Foreground = Foreground;
    this.Transition = Transition;
  }
}
