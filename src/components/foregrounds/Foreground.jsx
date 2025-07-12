import DisclaimerOverlay from './DisclaimerOverlay';
import MenuOverlay from './MenuOverlay';

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
