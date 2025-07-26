import '@components/scenes/ScrollingBackground/ScrollingBackground.css';
import '@components/ui/Screen/Screen.css';

export default function ScrollingBackground({ name }) {
  return (
    <div className={`screen__background screen__background--${name}`}></div>
  );
}
