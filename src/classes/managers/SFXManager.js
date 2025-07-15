import { Coin, Startup } from '@assets/audio/sfx';

export default class SFXManager {
  constructor() {
    this.currentSounds = [];
    this.audioElements = {
      coin: new Audio(Coin),
      startup: new Audio(Startup),
    };
  }

  play(name) {
    const sfx = this.audioElements[name];
    if (sfx) {
      const clone = sfx.cloneNode();

      const cleanUp = () => {
        const index = this.currentSounds.indexOf(clone);
        if (index > -1) this.currentSounds.splice(index, 1);
      };

      clone.addEventListener('ended', cleanUp);
      clone.play().catch((error) => cleanUp());

      this.currentSounds.push(clone);
    }
  }

  stop() {
    this.currentSounds.forEach((sound) => {
      sound.pause();
      sound.currentTime = 0;
    });
  }
}
