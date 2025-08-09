import { createContext, useEffect, useRef, useState } from 'react';
import { LevelManager, MusicManager, SFXManager } from '@classes/managers';
import { useGameState, useController, useMario, useSceneManager } from '@hooks';
import {
  DisclaimerScene,
  MenuScene,
  OffScene,
  StartupScene,
  TutorialScene,
} from '@scenes/index';
import { Transition } from '@classes/scenes';
import { INITIAL_STATE } from '@constants/index';

export const GameStateContext = createContext();

export function GameStateProvider({ children }) {
  const [gameState, setGameState, isModePlayable] = useGameState();

  const [sceneManager, currentScene, currentTransition] =
    useSceneManager(setGameState);

  const levelManager = useRef(new LevelManager()).current;
  const musicManager = useRef(new MusicManager()).current;
  const sfxManager = useRef(new SFXManager()).current;
  const [controller, setController] = useController();
  const mario = useMario(controller, sfxManager, isModePlayable);

  useEffect(() => {
    const resetManagers = () => {
      sceneManager.stop();
      sfxManager.stop();
      levelManager.clearTimeouts();

      if (gameState.mode !== 'level-start') {
        musicManager.stop();
      }
    };

    switch (gameState.mode) {
      case 'startup':
        sceneManager.render(StartupScene);
        sceneManager.changeMode('disclaimer', 4500);
        sceneManager.transition(new Transition('fade', 1), 3250);
        sfxManager.play('startup');
        break;
      case 'disclaimer':
        sceneManager.render(DisclaimerScene);
        sceneManager.changeMode('menu-start', 7000);
        break;
      case 'menu-start':
        sceneManager.render(MenuScene);
        musicManager.play(currentScene.song);
        break;
      case 'menu-exit':
        sceneManager.changeMode('tutorial-start', 2500);
        sceneManager.transition(new Transition('fade', 1.5));
        sfxManager.play('coin');
        break;
      case 'tutorial-start':
        sceneManager.render(TutorialScene);
        levelManager.clearEntities();
        musicManager.play(currentScene.song);
        break;
      case 'tutorial-exit':
        sceneManager.changeMode('level-start', 2500);
        sceneManager.transition(new Transition('fade', 1.5));
        sfxManager.play('correct');
        break;
      case 'level-start':
        const levelScene = levelManager.currentLevel;
        sceneManager.render(levelScene);
        sceneManager.changeMode('level-playing', 1900);
        sceneManager.transition(
          new Transition('overlay', 0.25, 1.75, levelScene.title)
        );
        musicManager.play(levelScene.song);
        break;
      case 'level-playing':
        levelManager.clearEntities();
        levelManager.startSpawner();
        break;
      case 'passed-level':
        if (levelManager.beatGame) {
          sceneManager.changeMode('credits', 10000);
        } else {
          sceneManager.changeMode('level-start', 10000);
          levelManager.goToNextLevel();
        }

        sceneManager.transition(
          new Transition('fade', 1, 0, 'course complete')
        );
        sfxManager.play('course-clear');

        sceneManager.transition(new Transition('slide'), 8200);
        sfxManager.play('iris', false, 8200);
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
        sceneManager.transition(new Transition('curtain', 2, 0, 'game over'));
        levelManager.clearEntities();
        levelManager.resetLevels();
        musicManager.play('game-over');

        setGameState((previous) => ({
          ...previous,
          lives: previous.initialLives,
          coins: 0,
        }));

        break;
      case 'credits':
        levelManager.clearEntities();
        levelManager.resetLevels();
        break;
      case 'off':
      default:
        sceneManager.render(OffScene);
        levelManager.clearEntities();
        levelManager.resetLevels();
        setGameState(INITIAL_STATE);
        break;
    }

    return resetManagers;
  }, [gameState.mode, currentScene]);

  return (
    <GameStateContext.Provider
      value={{
        gameState,
        setGameState,
        isModePlayable,
        currentScene,
        currentTransition,
        levelManager,
        sfxManager,
        mario,
        controller,
        setController,
      }}
    >
      {children}
    </GameStateContext.Provider>
  );
}
