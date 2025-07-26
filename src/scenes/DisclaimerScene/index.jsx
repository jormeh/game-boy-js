import { TransitionScene } from '@classes/scenes';
import '@components/ui/Screen/Screen.css';
import '@scenes/DisclaimerScene/DisclaimerScene.css';

export default new TransitionScene({
  name: 'disclaimer',
  Background,
  Foreground,
  targetMode: 'menu-start',
  modeSwitchDelay: 7000,
});

function Background() {
  return (
    <div className="screen__background screen__background--disclaimer"></div>
  );
}

function Foreground() {
  return (
    <div className="screen__disclaimer">
      <p className="screen__statement">
        This is a personal, non-commercial fan project created for educational
        purposes. All assets are owned by their respective copyright holders.
        This project is not affiliated with or endorsed by Nintendo.
      </p>
    </div>
  );
}
