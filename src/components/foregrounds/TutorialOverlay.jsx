import '@styles/foregrounds/TutorialOverlay.css';

export default function TutorialOverlay() {
  return (
    <div className="screen__box">
      <p className="screen__tutorial">
        Press A to jump, B to dive, and D-Pad to move. Exit right when ready!
      </p>
    </div>
  );
}
