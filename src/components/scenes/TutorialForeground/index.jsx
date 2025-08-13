import '@components/scenes/TutorialForeground/TutorialForeground.css';

export default function TutorialForeground({ mode }) {
  return mode === 'tutorial-start' ? (
    <div className="screen__tutorial">
      <p className="screen__tutorial-message">
        Press A to float, B to dive, and D-Pad to move. Exit right when ready!
      </p>
    </div>
  ) : null;
}
