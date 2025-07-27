import { useState } from 'react';

export default function useLevels(levelScenesArray) {
  const [index, setIndex] = useState(0);
  const currentLevel = levelScenesArray[index];

  return currentLevel;
}
