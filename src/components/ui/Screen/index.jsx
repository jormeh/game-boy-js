import { useContext } from 'react';
import { GameStateContext } from '@context/GameStateContext';
import GameCanvas from '@components/GameCanvas';
import '@components/ui/Screen/Screen.css';
import { HeadsUpDisplay, TransitionLayer } from '@components/scenes';

export default function Screen({ width, height, y }) {
  const { gameState, currentScene, currentTransition } =
    useContext(GameStateContext);
  const Background = currentScene?.Background;
  const Foreground = currentScene?.Foreground;

  return (
    <div className="screen" style={{ width, height, top: y }}>
      {Background && <Background scene={currentScene} mode={gameState.mode} />}
      <div className="screen__foreground">
        {Foreground && (
          <Foreground mode={gameState.mode} scene={currentScene} />
        )}
      </div>
      <GameCanvas />
      <HeadsUpDisplay gameState={gameState} />
      <TransitionLayer transition={currentTransition} />
    </div>
  );
}
