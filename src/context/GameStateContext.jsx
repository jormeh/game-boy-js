import { useState, createContext, useEffect } from 'react';
import playStartupScene from '../modules/playStartupScene';
import playDisclaimerScene from '../modules/playDisclaimerScene';

export const GameStateContext = createContext();

export function GameStateProvider({ children }) {
  const [gameState, setGameState] = useState('off');

  useEffect(() => {
    const timeouts = [];

    switch (gameState) {
      case 'startup':
        playStartupScene(timeouts, setGameState);
      case 'disclaimer':
        playDisclaimerScene(timeouts, setGameState);
    }

    return () => timeouts.forEach((timeout) => clearTimeout(timeout));
  }, [gameState]);

  return (
    <GameStateContext.Provider value={{ gameState, setGameState }}>
      {children}
    </GameStateContext.Provider>
  );
}
