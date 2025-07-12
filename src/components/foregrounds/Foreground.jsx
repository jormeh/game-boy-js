import DisclaimerOverlay from './DisclaimerOverlay';
import MenuOverlay from './MenuOverlay';
import TutorialOverlay from './TutorialOverlay';

export function Foreground({ gameState }) {
  switch (gameState) {
    case 'disclaimer':
      return <DisclaimerOverlay />;
    case 'menu-start':
      return <MenuOverlay />;
    case 'tutorial-start':
      return <TutorialOverlay />;
    default:
      return null;
  }
}
