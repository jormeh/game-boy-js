import { Coin, Jump, Startup } from '@assets/audio/sfx';

export default class SFXManager {
  constructor() {
    this.currentSounds = [];
    this.audioElements = {
      coin: new Audio(Coin),
      startup: new Audio(Startup),
      jump: new Audio(Jump),
    };
  }

  play(name, allowOverlap = false) {
    let sound = this.audioElements[name];

    if (sound) {
      sound = allowOverlap ? sound.cloneNode() : sound;
      sound.currentTime = allowOverlap ? sound.currentTime : 0;

      const cleanUp = () => {
        const index = this.currentSounds.indexOf(sound);
        if (index > -1) this.currentSounds.splice(index, 1);
      };

      sound.addEventListener('ended', cleanUp);
      sound.play().catch((error) => cleanUp());

      this.currentSounds.push(sound);
    }
  }

  stop() {
    this.currentSounds.forEach((sound) => {
      sound.pause();
      sound.currentTime = 0;
    });
  }
}
