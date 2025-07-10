import Fade from '../animations/Fade';
import '/src/styles/foregrounds/DisclaimerOverlay.css';

export default function DisclaimerOverlay() {
  return (
    <div className="screen__disclaimer">
      <Fade duration={1000} startFadeOut={5500}>
        <p className="screen__disclaimer-text">
          This is a personal, non-commercial fan project created for educational
          purposes. All assets are owned by their respective copyright holders.
          This project is not affiliated with or endorsed by Nintendo.
        </p>
      </Fade>
    </div>
  );
}
