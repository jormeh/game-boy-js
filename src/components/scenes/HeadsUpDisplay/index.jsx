import { HUDCoins, HUDLives, HUDMultiply } from '@assets/ui';
import '@components/scenes/HeadsUpDisplay/HeadsUpDisplay.css';

export default function HeadsUpDisplay({ gameState }) {
  return gameState.mode === 'level-playing' ||
    gameState.mode === 'player-died' ? (
    <div className="screen__hud">
      <div className="screen__hud-lives">
        <img className="screen__hud-life-icon" src={HUDLives} />
        <img className="screen__hud-multiply-icon" src={HUDMultiply} />
        <span className="screen__hud-number">
          {gameState.lives >= 0 ? gameState.lives : 0}
        </span>
      </div>
      <div className="screen__hud-coins">
        <img className="screen__hud-coin-icon" src={HUDCoins} />
        <img className="screen__hud-multiply-icon" src={HUDMultiply} />
        <span className="screen__hud-number">{gameState.coins}</span>
      </div>
    </div>
  ) : null;
}
