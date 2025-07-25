import { MenuSong, TutorialSong } from '@assets/audio/music';

export default class MusicManager {
  constructor() {
    this.currentTrack = null;
    this.audioElements = {
      menu: new Audio(MenuSong),
      tutorial: new Audio(TutorialSong),
    };
  }

  reset() {
    if (this.currentTrack) {
      this.currentTrack.pause();
      this.currentTrack.currentTime = 0;
    }
  }

  play(trackName, loop = false) {
    if (this.currentTrack) this.reset();

    const track = this.audioElements[trackName];
    if (track) {
      track.loop = loop;
      track.play();
      this.currentTrack = track;
    } else {
      console.warn(`Could not find track with name ${trackName}.`);
      this.currentTrack = null;
    }
  }

  stop() {
    if (this.currentTrack) {
      this.reset();
      this.currentTrack = null;
    }
  }
}
