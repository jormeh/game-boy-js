export default function playDisclaimerScene(timeouts, setGameState) {
  const transitionTimeout = setTimeout(() => setGameState('off'), 7000);

  timeouts.push(transitionTimeout);
}
