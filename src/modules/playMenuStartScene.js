export default function playMenuStartScene(audios) {
  const music = new Audio('/src/assets/audio/music/menu-song.mp3');
  music.play();
  audios.push(music);
}
