import { useState } from 'react';

export default function useGameState() {
  const [state, setState] = useState({ mode: 'off', event: 'idle' });

  const isModePlayable = (mode) => {
    return ['tutorial-start', 'level-playing'].includes(mode);
  };

  return [state, setState, isModePlayable(state.mode)];
}
