export default function playDisclaimerScene(timeouts, setGameState) {
  const transitionTimeout = setTimeout(() => setGameState('menu-start'), 7000);

  timeouts.push(transitionTimeout);
}
