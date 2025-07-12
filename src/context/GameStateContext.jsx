import { useState, createContext, useEffect } from 'react';
import playStartupScene from '../modules/playStartupScene';
import playDisclaimerScene from '../modules/playDisclaimerScene';
import playMenuStartScene from '../modules/playMenuStartScene';
import playMenuExitScene from '../modules/playMenuExitScene';

export const GameStateContext = createContext();

export function GameStateProvider({ children }) {
  const [gameState, setGameState] = useState('off');

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
    }

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
