import { createContext, useEffect, useRef, useState } from 'react';
import { MusicManager, SFXManager } from '@classes/managers';
import { useGameState, useController, useMario } from '@hooks';
import SceneManager from '@classes/managers/SceneManager';
import {
  OffScene,
  StartupScene,
  DisclaimerScene,
  MenuScene,
  TutorialScene,
} from '@scenes';

export const GameStateContext = createContext();

export function GameStateProvider({ children }) {
  const [gameState, setGameState, isStatePlayable] = useGameState();
  const [currentScene, setCurrentScene] = useState(OffScene);
  const sceneManager = useRef(new SceneManager()).current;
  const musicManager = useRef(new MusicManager()).current;
  const sfxManager = useRef(new SFXManager()).current;

  const [controller, setController] = useController();
  const mario = useMario(controller, sfxManager, isStatePlayable);

  useEffect(() => {
    const reset = () => {
      sceneManager.stop();
      musicManager.stop();
      sfxManager.stop();
    };

    switch (gameState) {
      case 'startup':
        setCurrentScene(StartupScene);
        sceneManager.transitionScene(currentScene, setGameState);
        sfxManager.play('startup');
        break;
      case 'disclaimer':
        setCurrentScene(DisclaimerScene);
        sceneManager.transitionScene(currentScene, setGameState);
        break;
      case 'menu-start':
        setCurrentScene(MenuScene);
        musicManager.play('menu');
        break;
      case 'menu-exit':
        sceneManager.transitionScene(currentScene, setGameState);
        sfxManager.play('coin');
        break;
      case 'tutorial-start':
        setCurrentScene(TutorialScene);
        musicManager.play('tutorial');
        break;
      case 'tutorial-exit':
        sceneManager.transitionScene(currentScene, setGameState);
        sfxManager.play('coin');
        break;
      case 'level':
        setCurrentScene(OffScene);
        break;
      case 'off':
        setCurrentScene(OffScene);
        break;
      default:
        setCurrentScene(OffScene);
        console.warn(`The following game state doesn't exist: ${gameState}`);
        break;
    }

    return () => reset();
  }, [gameState, currentScene]);

  return (
    <GameStateContext.Provider
      value={{
        gameState,
        setGameState,
        isStatePlayable,
        currentScene,
        mario,
        controller,
        setController,
      }}
    >
      {children}
    </GameStateContext.Provider>
  );
}
