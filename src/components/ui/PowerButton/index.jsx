import { PowerIcon } from '@components/icons';
import { Button } from '..';
import { useEffect } from 'react';

export default function PowerButton({ controller, setGameState }) {
  const togglePower = () => {
    setGameState((previous) => ({
      ...previous,
      mode: previous.mode === 'off' ? 'startup' : 'off',
    }));
  };

  useEffect(() => {
    if (controller.isPowerPressed) togglePower();
  }, [controller.isPowerPressed]);

  return (
    <Button
      size="6.8%"
      x="46.6%"
      y="63.3%"
      isToggle={true}
      onPressStart={togglePower}
    >
      <PowerIcon size="60%" />
    </Button>
  );
}
