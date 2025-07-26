import { useContext } from 'react';
import { GameStateContext } from '@context/GameStateContext';
import GameCanvas from '@components/GameCanvas';
import '@components/ui/Screen/Screen.css';

export default function Screen({ width, height, y }) {
  const {
    gameState: { mode },
    currentScene,
  } = useContext(GameStateContext);

  const Background = currentScene?.Background;
  const Foreground = currentScene?.Foreground;
  const Transition = currentScene?.Transition;

  return (
    <div className="screen" style={{ width, height, top: y }}>
      {Background && <Background name={currentScene.name} mode={mode} />}
      <div className="screen__foreground">
        {Foreground && <Foreground mode={mode} />}
      </div>
      <GameCanvas />
      {Transition && <Transition mode={mode} />}
    </div>
  );
}
