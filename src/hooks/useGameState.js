import { useState } from 'react';

export default function useGameState() {
  const [state, setState] = useState('off');

  const isStatePlayable = (state) => {
    return ['tutorial-start'].includes(state);
  };

  return [state, setState, isStatePlayable(state)];
}
