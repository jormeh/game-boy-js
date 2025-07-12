import { Coin } from '@assets/audio/sfx';

export default function playMenuExitScene(timeouts, audios, setGameState) {
  const transitionTimeout = setTimeout(
    () => setGameState('tutorial-start'),
    2500
  );
  const sfx = new Audio(Coin);
  sfx.play();

  timeouts.push(transitionTimeout);
  audios.push(sfx);
}
