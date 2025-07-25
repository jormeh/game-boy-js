import { useContext, useEffect } from 'react';
import { DPad, Button, PowerLight, Screen } from '@components/ui';
import { LetterAIcon, LetterBIcon, PowerIcon } from '@components/icons';
import { GameBoyShell } from '@assets/ui';
import { GameStateContext } from '@context/GameStateContext';
import '@components/ui/GameBoy/GameBoy.css';

export default function GameBoy() {
  const { gameState, setGameState, controller, setController } =
    useContext(GameStateContext);
  const isGameOn = gameState.mode !== 'off';

  const togglePower = () => {
    setGameState((previous) => ({
      ...previous,
      mode: previous.mode === 'off' ? 'startup' : 'off',
    }));
  };

  const toggleStart = () => {
    setGameState((previous) => ({
      ...previous,
      mode: previous.mode === 'menu-start' ? 'menu-exit' : previous.mode,
    }));
  };

  const pressStartA = () => {
    setController((previous) => ({ ...previous, isJumpPressed: true }));
  };

  const pressEndA = () => {
    setController((previous) => ({ ...previous, isJumpPressed: false }));
  };

  const pressStartB = () => {
    setController((previous) => ({ ...previous, isDownPressed: true }));
  };

  const pressEndB = () => {
    setController((previous) => ({ ...previous, isDownPressed: false }));
  };

  const pressStartLeft = () => {
    setController((previous) => ({ ...previous, isLeftPressed: true }));
  };

  const pressEndLeft = () => {
    setController((previous) => ({ ...previous, isLeftPressed: false }));
  };

  const pressStartRight = () => {
    setController((previous) => ({ ...previous, isRightPressed: true }));
  };

  const pressEndRight = () => {
    setController((previous) => ({ ...previous, isRightPressed: false }));
  };

  const pressStartUp = () => {
    setController((previous) => ({ ...previous, isUpPressed: true }));
  };

  const pressEndUp = () => {
    setController((previous) => ({ ...previous, isUpPressed: false }));
  };

  const pressStartDown = () => {
    setController((previous) => ({ ...previous, isDownPressed: true }));
  };

  const pressEndDown = () => {
    setController((previous) => ({ ...previous, isDownPressed: false }));
  };

  const dPadHandlers = {
    up: { start: pressStartUp, end: pressEndUp },
    left: { start: pressStartLeft, end: pressEndLeft },
    right: { start: pressStartRight, end: pressEndRight },
    down: { start: pressStartDown, end: pressEndDown },
  };

  useEffect(() => {
    if (controller.isPowerPressed) togglePower();
    if (controller.isStartPressed) toggleStart();
  }, [controller.isPowerPressed, controller.isStartPressed]);

  return (
    <div className="gameboy">
      <Screen width="84.6%" height="33.6%" y="6.5%" />
      <PowerLight size="2.1%" y="61.2%" isPowerOn={isGameOn} />
      <PowerLight size="2.1%" y="63.5%" isPowerOn={isGameOn} />
      <Button
        size="6.8%"
        x="46.6%"
        y="63.3%"
        isToggle={true}
        onPressStart={togglePower}
      >
        <PowerIcon size="60%" />
      </Button>
      <Button
        size="14%"
        x="77.5%"
        y="67.6%"
        onPressStart={pressStartA}
        onPressEnd={pressEndA}
      >
        <LetterAIcon size="50%" />
      </Button>
      <Button
        size="14%"
        x="58.1%"
        y="70.1%"
        onPressStart={pressStartB}
        onPressEnd={pressEndB}
      >
        <LetterBIcon size="40%" />
      </Button>
      <DPad size="22%" x="15.1%" y="69%" handlers={dPadHandlers} />
      <Button
        size="6.8%"
        x="36.6%"
        y="91.8%"
        isToggle={true}
        onPressStart={toggleStart}
      />
      <Button
        mode="toggle"
        size="6.8%"
        x="56.4%"
        y="91.8%"
        isToggle={true}
        onPressStart={toggleStart}
      />
      <img className="gameboy__shell" src={GameBoyShell} />
    </div>
  );
}
