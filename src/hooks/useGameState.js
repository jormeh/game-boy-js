import { useState } from 'react';
import { INITIAL_STATE } from '@constants/index';

export default function useGameState() {
  const [state, setState] = useState(INITIAL_STATE);

  const isModePlayable = (mode) => {
    return ['tutorial-start', 'level-playing'].includes(mode);
  };

  return [state, setState, isModePlayable(state.mode)];
}
