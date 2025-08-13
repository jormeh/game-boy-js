import { useEffect } from 'react';
import { Button } from '..';

export default function StartButton({ x, y, controller, setGameState }) {
  const toggleStart = () => {
    setGameState((previous) => ({
      ...previous,
      mode: previous.mode === 'menu-start' ? 'menu-exit' : previous.mode,
    }));
  };

  useEffect(() => {
    if (controller.isStartPressed) toggleStart();
  }, [controller.isStartPressed]);

  return (
    <Button
      size="6.8%"
      x={x}
      y={y}
      isToggle={true}
      onPressStart={toggleStart}
    />
  );
}
