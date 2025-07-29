import { createContext, useEffect, useRef, useState } from 'react';
import { MusicManager, SFXManager } from '@classes/managers';
import {
  useGameState,
  useController,
  useLevels,
  useMario,
  useSceneManager,
} from '@hooks';
import {
  DisclaimerScene,
  MenuScene,
  OffScene,
  StartupScene,
  TutorialScene,
} from '@scenes/index';
import Overworld from '@levels/Overworld';
import { Transition } from '@classes/scenes';

export const GameStateContext = createContext();

useSceneManager;

export function GameStateProvider({ children }) {
  const [gameState, setGameState, isModePlayable] = useGameState();

  const [sceneManager, currentScene, currentTransition] =
    useSceneManager(setGameState);
  const musicManager = useRef(new MusicManager()).current;
  const sfxManager = useRef(new SFXManager()).current;

  const currentLevel = useLevels([Overworld]);
  const [controller, setController] = useController();
  const mario = useMario(controller, sfxManager, isModePlayable);

  useEffect(() => {
    const resetManagers = (stopMusic = true) => {
      sceneManager.stop();
      if (stopMusic) musicManager.stop();
      sfxManager.stop();
    };

    switch (gameState.mode) {
      case 'startup':
        sceneManager.play(StartupScene);
        sceneManager.changeMode('disclaimer', 4500);
        sceneManager.transition(new Transition('fade', 1), 3250);
        sfxManager.play('startup');
        break;
      case 'disclaimer':
        sceneManager.play(DisclaimerScene);
        sceneManager.changeMode('menu-start', 7000);
        break;
      case 'menu-start':
        sceneManager.play(MenuScene);
        musicManager.play(currentScene.song);
        break;
      case 'menu-exit':
        sceneManager.changeMode('tutorial-start', 2500);
        sceneManager.transition(new Transition('fade', 1.5));
        sfxManager.play('coin');
        break;
      case 'tutorial-start':
        sceneManager.play(TutorialScene);
        musicManager.play(currentScene.song);
        break;
      case 'tutorial-exit':
        sceneManager.changeMode('level-start', 2500);
        sceneManager.transition(new Transition('fade', 1.5));
        sfxManager.play('correct');
        break;
      case 'level-start':
        sceneManager.play(currentLevel);
        sceneManager.changeMode('level-playing', 1900);
        sceneManager.transition(
          new Transition('overlay', 0.25, 1.75, currentLevel.title)
        );
        musicManager.play(currentLevel.song);
        break;
      case 'level-playing':
        console.log('playing...');
        break;
      case 'player-died':
        if (gameState.lives >= 0) {
          sceneManager.changeMode('level-start', 4000);
          sceneManager.transition(new Transition('fade', 0.5, 3.2));
        } else {
          sceneManager.changeMode('game-over', 4000);
        }

        sfxManager.play('died');
        break;
      case 'game-over':
        sceneManager.changeMode('menu-start', 8500);
        sceneManager.transition(new Transition('slide', 3, 0, 'game over'));
        musicManager.play('game-over');

        setGameState((previous) => ({
          ...previous,
          lives: previous.initialLives,
        }));

        break;
      case 'off':
      default:
        sceneManager.play(OffScene);
        resetManagers();
        break;
    }

    return () => {
      if (gameState.mode === 'level-start') {
        resetManagers(false);
      } else {
        resetManagers();
      }
    };
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
        currentTransition,
        mario,
        controller,
        setController,
      }}
    >
      {children}
    </GameStateContext.Provider>
  );
}
