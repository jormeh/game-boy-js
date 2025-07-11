import { useState, createContext, useEffect } from 'react';
import playStartupScene from '../modules/playStartupScene';
import playDisclaimerScene from '../modules/playDisclaimerScene';
import playMenuScene from '../modules/playMenuScene';

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
      case 'menu':
        playMenuScene(timeouts, audios, setGameState);
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
