export default function playMenuScene(timeouts, audios, setGameState) {
  const music = new Audio('/src/assets/audio/music/menu-song.mp3');
  music.play();

  audios.push(music);
}
