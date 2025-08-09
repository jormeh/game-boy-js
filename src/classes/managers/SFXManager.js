import {
  CoinSFX,
  CorrectSFX,
  CourseClearSFX,
  DiedSFX,
  GetALifeSFX,
  IncorrectSFX,
  IrisSFX,
  JumpSFX,
  StartupSFX,
} from '@assets/audio/sfx';

export default class SFXManager {
  constructor() {
    this.timeouts = [];
    this.currentSounds = [];
    this.audioElements = {
      coin: new Audio(CoinSFX),
      correct: new Audio(CorrectSFX),
      'course-clear': new Audio(CourseClearSFX),
      died: new Audio(DiedSFX),
      'get-a-life': new Audio(GetALifeSFX),
      incorrect: new Audio(IncorrectSFX),
      iris: new Audio(IrisSFX),
      jump: new Audio(JumpSFX),
      startup: new Audio(StartupSFX),
    };
  }

  play(name, allowOverlap = false, delayMS = 0) {
    let sound = this.audioElements[name];

    if (sound) {
      sound = allowOverlap ? sound.cloneNode() : sound;
      sound.currentTime = allowOverlap ? sound.currentTime : 0;

      const cleanUp = () => {
        const index = this.currentSounds.indexOf(sound);
        if (index > -1) this.currentSounds.splice(index, 1);
      };

      sound.addEventListener('ended', cleanUp);

      const timeout = setTimeout(
        () => sound.play().catch((error) => cleanUp()),
        delayMS
      );

      this.timeouts.push(timeout);
      this.currentSounds.push(sound);
    }
  }

  stop() {
    this.timeouts.forEach((timeout) => clearTimeout(timeout));
    this.currentSounds.forEach((sound) => {
      sound.pause();
      sound.currentTime = 0;
    });
  }
}
