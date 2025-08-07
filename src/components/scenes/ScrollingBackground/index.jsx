import '@components/scenes/ScrollingBackground/ScrollingBackground.css';
import '@components/ui/Screen/Screen.css';

export default function ScrollingBackground({ scene, mode }) {
  return (
    <div
      className={`screen__background screen__background--${scene.name} ${
        mode === 'player-died' ||
        mode === 'game-over' ||
        mode === 'passed-level'
          ? 'paused'
          : ''
      }`}
    ></div>
  );
}
