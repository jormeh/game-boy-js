import { MenuLogo, MenuMario } from '@assets/ui';
import '@styles/foregrounds/MenuOverlay.css';

export default function MenuOverlay() {
  return (
    <div className="screen__menu">
      <img className="screen__logo" src={MenuLogo} />
      <img className="screen__mario" src={MenuMario} />
      <p className="screen__text">Press Start</p>
    </div>
  );
}
