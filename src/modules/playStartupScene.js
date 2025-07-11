export default function playStartupScene(timeouts, setGameState) {
  const audio = new Audio('src/assets/audio/sfx/startup.mp3');
  const audioTimeout = setTimeout(() => audio.play(), 250);
  const transitionTimeout = setTimeout(() => setGameState('disclaimer'), 4000);
  console.log('hello');
  timeouts.push(audioTimeout, transitionTimeout);
}
