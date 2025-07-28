export default class Scene {
  constructor({ name, title = '', song = '', Background, Foreground = null }) {
    this.name = name;
    this.title = title;
    this.song = song;
    this.Background = Background;
    this.Foreground = Foreground;
  }
}
