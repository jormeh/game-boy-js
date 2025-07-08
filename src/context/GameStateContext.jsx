import { useContext, useState } from 'react';

export const GameStateContext = useContext();

export function GameStateProvider() {
  const [gameState, setGameState] = useState('off');

  return (
    <GameStateContext.Provider value={{ gameState, setGameState }}>
      {children}
    </GameStateContext.Provider>
  );
}
