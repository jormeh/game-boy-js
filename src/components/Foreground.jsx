import DisclaimerOverlay from './foregrounds/DisclaimerOverlay';

export function Foreground({ gameState }) {
  switch (gameState) {
    case 'disclaimer':
      return <DisclaimerOverlay />;
    default:
      return null;
  }
}
