import { MenuSong } from '@assets/audio/music';

export default function playStartupScene(timeouts, audios, setGameState) {
  const sfx = new Audio(`${MenuSong}`);
  const sfxTimeout = setTimeout(() => sfx.play(), 250);
  const transitionTimeout = setTimeout(() => setGameState('disclaimer'), 4000);

  timeouts.push(sfxTimeout, transitionTimeout);
  audios.push(sfx);
}
