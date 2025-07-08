import { useContext, useState, createContext } from 'react';

export const GameStateContext = createContext();

export function GameStateProvider({ children }) {
  const [gameState, setGameState] = useState('off');

  return (
    <GameStateContext.Provider value={{ gameState, setGameState }}>
      {children}
    </GameStateContext.Provider>
  );
}
