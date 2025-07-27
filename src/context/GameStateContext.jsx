import { createContext, useEffect, useRef, useState } from 'react';
import { MusicManager, SFXManager } from '@classes/managers';
import { useGameState, useController, useLevels, useMario } from '@hooks';
import SceneManager from '@classes/managers/SceneManager';
import {
  DisclaimerScene,
  MenuScene,
  OffScene,
  StartupScene,
  TutorialScene,
} from '@scenes/index';
import Overworld from '@levels/Overworld';

export const GameStateContext = createContext();

export function GameStateProvider({ children }) {
  const [gameState, setGameState, isModePlayable] = useGameState();
  const [currentScene, setCurrentScene] = useState(OffScene);
  const currentLevel = useLevels([Overworld]);
  const sceneManager = useRef(new SceneManager()).current;
  const musicManager = useRef(new MusicManager()).current;
  const sfxManager = useRef(new SFXManager()).current;

  const [controller, setController] = useController();
  const mario = useMario(
    controller,
    sfxManager,
    gameState,
    setGameState,
    isModePlayable
  );

  useEffect(() => {
    const reset = () => {
      sceneManager.stop();
      sfxManager.stop();
    };

    switch (gameState.mode) {
      case 'startup':
        setCurrentScene(StartupScene);
        sceneManager.transitionScene(currentScene, gameState, setGameState);
        sfxManager.play('startup');
        break;
      case 'disclaimer':
        setCurrentScene(DisclaimerScene);
        sceneManager.transitionScene(currentScene, gameState, setGameState);
        break;
      case 'menu-start':
        setCurrentScene(MenuScene);
        musicManager.play(currentScene.song);
        break;
      case 'menu-exit':
        sceneManager.transitionScene(currentScene, gameState, setGameState);
        musicManager.stop();
        sfxManager.play('coin');
        break;
      case 'tutorial-start':
        setCurrentScene(TutorialScene);
        musicManager.play(currentScene.song);
        break;
      case 'tutorial-exit':
        sceneManager.transitionScene(currentScene, gameState, setGameState);
        musicManager.stop();
        sfxManager.play('correct');
        break;
      case 'level-start':
        setCurrentScene(currentLevel);
        sceneManager.transitionScene(currentScene, gameState, setGameState);
        musicManager.play(currentLevel.song);
        break;
      case 'level-playing':
        console.log('hello');
        break;
      case 'off':
        setCurrentScene(OffScene);
        break;
      default:
        setCurrentScene(OffScene);
        console.warn(`The following game state doesn't exist: ${gameState}`);
        break;
    }

    return reset;
  }, [gameState.mode, currentScene]);

  useEffect(() => {
    switch (gameState.event) {
      case 'mistake':
        setGameState((previous) => ({
          ...previous,
          event: 'idle',
        }));

        sfxManager.play('incorrect');
        break;
    }
  }, [gameState.event]);

  return (
    <GameStateContext.Provider
      value={{
        gameState,
        setGameState,
        isModePlayable,
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
