import { MenuLogo, MenuMario } from '@assets/ui';
import '@components/scenes/MenuForeground/MenuForeground.css';

export default function MenuForeground({ mode }) {
  return mode === 'menu-start' ? (
    <div className="screen__menu">
      <img className="screen__menu-logo" src={MenuLogo} />
      <img className="screen__menu-mario" src={MenuMario} />
      <p className="screen__menu-start">Press Start</p>
    </div>
  ) : null;
}
