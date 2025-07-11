import DisclaimerOverlay from './foregrounds/DisclaimerOverlay';
import MenuOverlay from './foregrounds/MenuOverlay';

export function Foreground({ gameState }) {
  switch (gameState) {
    case 'disclaimer':
      return <DisclaimerOverlay />;
    case 'menu-start':
      return <MenuOverlay />;
    default:
      return null;
  }
}
