import { SceneManager } from '@classes/managers';
import { Transition } from '@classes/scenes';
import { OffScene } from '@scenes/index';
import { useState } from 'react';

export default function useSceneManager(setGameState) {
  const [currentScene, setScene] = useState(OffScene);
  const [currentTransition, setTransition] = useState(new Transition());

  return [
    new SceneManager(setGameState, setScene, setTransition),
    currentScene,
    currentTransition,
  ];
}
