import { useContext, useEffect, useState } from 'react';
import { GameStateContext } from '@context/GameStateContext';
import GameCanvas from '@components/GameCanvas';
import useSceneTransition from '@hooks/useSceneTransition';
import '@components/ui/Screen/Screen.css';

export default function Screen({ width, height, y }) {
  const { gameState, currentScene } = useContext(GameStateContext);
  const isTransitioning = useSceneTransition(currentScene, gameState);

  const Background = currentScene?.Background;
  const Foreground = currentScene?.Foreground;
  const Transition = currentScene?.Transition;

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
      <GameCanvas />
      {Transition && (
        <Transition isTransitioning={isTransitioning} scene={currentScene} />
      )}
    </div>
  );
}
