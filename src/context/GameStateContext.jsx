import { useState, createContext, useEffect, useMemo } from 'react';
import {
  playStartupScene,
  playDisclaimerScene,
  playMenuStartScene,
  playMenuExitScene,
  playTutorialStartScene,
} from '@scenes';
import MusicManager from '@classes/managers/MusicManager';

export const GameStateContext = createContext();

export function GameStateProvider({ children }) {
  const [gameState, setGameState] = useState('off');
  const musicManager = useMemo(() => new MusicManager(), []);

  useEffect(() => {
    const timeouts = [];
    const audios = [];

    switch (gameState) {
      case 'startup':
        playStartupScene(timeouts, audios, setGameState);
        break;
      case 'disclaimer':
        playDisclaimerScene(timeouts, setGameState);
        break;
      case 'menu-start':
        playMenuStartScene(audios);
        break;
      case 'menu-exit':
        playMenuExitScene(timeouts, audios, setGameState);
        break;
      case 'tutorial-start':
        playTutorialStartScene(audios, setGameState);
        break;
      default:
        musicManager.stop();
        break;
    }

    musicManager.play(gameState);

    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout));
      audios.forEach((audio) => {
        audio.pause();
        audio.currentTime = 0;
      });
    };
  }, [gameState]);

  return (
    <GameStateContext.Provider value={{ gameState, setGameState }}>
      {children}
    </GameStateContext.Provider>
  );
}
