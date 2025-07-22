import { createContext, useEffect, useRef } from 'react';
import { TransitionManager, MusicManager, SFXManager } from '@classes/managers';
import { useGameState, useController, useMario } from '@hooks';

export const GameStateContext = createContext();

export function GameStateProvider({ children }) {
  const [gameState, setGameState, isStatePlayable] = useGameState();

  const transitionManager = useRef(new TransitionManager()).current;
  const musicManager = useRef(new MusicManager()).current;
  const sfxManager = useRef(new SFXManager()).current;

  const [controller, setController] = useController();
  const mario = useMario(controller, sfxManager);

  useEffect(() => {
    function reset() {
      transitionManager.stop();
      musicManager.stop();
      sfxManager.stop();
    }

    switch (gameState) {
      case 'startup':
        transitionManager.play('disclaimer', setGameState, 4000);
        sfxManager.play('startup');
        break;
      case 'disclaimer':
        transitionManager.play('menu-start', setGameState, 7000);
        break;
      case 'menu-start':
        musicManager.play(gameState);
        break;
      case 'menu-exit':
        transitionManager.play('tutorial-start', setGameState, 2500);
        sfxManager.play('coin');
        break;
      case 'tutorial-start':
        musicManager.play(gameState);
        break;
      case 'off':
        reset();
        break;
      default:
        console.warn(`The following game state doesn't exist: ${gameState}`);
        break;
    }

    return () => reset();
  }, [gameState]);

  return (
    <GameStateContext.Provider
      value={{ gameState, setGameState, mario, controller, setController }}
    >
      {children}
    </GameStateContext.Provider>
  );
}
