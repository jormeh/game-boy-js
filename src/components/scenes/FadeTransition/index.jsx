import '@components/scenes/FadeTransition/FadeTransition.css';
import '@components/ui/Screen/Screen.css';

export default function FadeTransition({ isTransitioning, scene }) {
  return isTransitioning ? (
    <div
      className="screen__fade screen__fade--visible"
      style={{ animationDuration: `${scene.animationDuration}s` }}
    ></div>
  ) : null;
}
