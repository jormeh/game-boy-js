import { useContext } from 'react';
import {
  DPad,
  Button,
  PowerLight,
  Screen,
  AButton,
  PowerButton,
  BButton,
  StartButton,
  Shell,
} from '@components/ui';
import { GameStateContext } from '@context/GameStateContext';
import '@components/ui/GameBoy/GameBoy.css';

export default function GameBoy() {
  const { gameState, setGameState, controller, setController } =
    useContext(GameStateContext);
  const isGameOn = gameState.mode !== 'off';

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

  return (
    <div className="gameboy">
      <Screen width="84.6%" height="33.6%" y="6.5%" />
      <PowerLight size="2.1%" y="61.2%" isPowerOn={isGameOn} />
      <PowerLight size="2.1%" y="63.5%" isPowerOn={isGameOn} />
      <PowerButton controller={controller} setGameState={setGameState} />
      <AButton setController={setController} />
      <BButton setController={setController} />
      <DPad size="22%" x="15.1%" y="69%" handlers={dPadHandlers} />
      <StartButton
        x={'36.6%'}
        y={'91.8%'}
        controller={controller}
        setGameState={setGameState}
      />
      <StartButton
        x={'56.4%'}
        y={'91.8%'}
        controller={controller}
        setGameState={setGameState}
      />
      <Shell />
    </div>
  );
}
