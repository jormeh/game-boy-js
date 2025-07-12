import { TutorialSong } from '@assets/audio/music';

export default function playTutorialStartScene(audios, setGameState) {
  const music = new Audio(TutorialSong);
  music.play();
}
