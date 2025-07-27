import '@components/scenes/LevelStartForeground/LevelStartForeground.css';

export default function LevelStartForeground({ scene }) {
  return (
    <div className="screen__level-start">
      <p className="screen__level-start-title">{scene.title}</p>
    </div>
  );
}
