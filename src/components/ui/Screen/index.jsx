import { useContext } from 'react';
import { GameStateContext } from '@context/GameStateContext';
import GameCanvas from '@components/GameCanvas';
import '@components/ui/Screen/Screen.css';
import { TransitionLayer } from '@components/scenes';

export default function Screen({ width, height, y }) {
  const { gameState, currentScene, currentTransition } =
    useContext(GameStateContext);
  const Background = currentScene?.Background;
  const Foreground = currentScene?.Foreground;

  return (
    <div className="screen" style={{ width, height, top: y }}>
      {Background && (
        <Background name={currentScene.name} mode={gameState.mode} />
      )}
      <div className="screen__foreground">
        {Foreground && (
          <Foreground mode={gameState.mode} scene={currentScene} />
        )}
      </div>
      <TransitionLayer transition={currentTransition} />
      <GameCanvas />
    </div>
  );
}
