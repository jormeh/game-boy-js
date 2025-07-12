import { MenuSong } from '@assets/audio/music';

export default function playMenuStartScene(audios) {
  const music = new Audio(`${MenuSong}`);
  music.play();
  audios.push(music);
}
