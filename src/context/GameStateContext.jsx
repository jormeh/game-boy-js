import { useContext, useState, createContext, useEffect } from 'react';

export const GameStateContext = createContext();

export function GameStateProvider({ children }) {
  const [gameState, setGameState] = useState('off');

  useEffect(() => {
    if (gameState === 'startup') {
      const audio = new Audio('src/assets/audio/sfx/startup.mp3');
      setTimeout(() => audio.play(), 250);
    }
  }, [gameState]);

  useEffect(() => {
    if (gameState === 'startup') {
      setTimeout(() => setGameState('disclaimer'), 4000);
    } else if (gameState === 'disclaimer') {
      setTimeout(() => setGameState(`off`), 6500);
    }
  });

  return (
    <GameStateContext.Provider value={{ gameState, setGameState }}>
      {children}
    </GameStateContext.Provider>
  );
}
