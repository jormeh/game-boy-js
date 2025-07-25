import { useContext } from 'react';
import { GameStateContext } from '@context/GameStateContext';
import '@styles/ui/Screen.css';
import GameCanvas from '@components/GameCanvas';

export default function Screen({ width, height, y }) {
  const { gameState, currentScene } = useContext(GameStateContext);
  const Background = currentScene?.Background;
  const Foreground = currentScene?.Foreground;
  const Transition = currentScene?.Transition;

  return (
    <div className="screen" style={{ width, height, top: y }}>
      {Background && <Background gameState={gameState} />}
      <div className="screen__foreground">
        {Foreground && <Foreground gameState={gameState} />}
      </div>
      <GameCanvas />
      {Transition && <Transition gameState={gameState} />}
    </div>
  );
}
