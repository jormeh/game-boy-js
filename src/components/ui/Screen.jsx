import { useContext, useEffect, useMemo } from 'react';
import { GameStateContext } from '@context/GameStateContext';
import { Foreground } from '@components/foregrounds/Foreground';
import GameCanvas from '@components/GameCanvas';
import { StartupGif } from '@assets/ui';
import '@styles/ui/Screen.css';

export default function Screen({ width, height, y }) {
  const { gameState } = useContext(GameStateContext);

  const backgroundClassName = useMemo(() => {
    return `screen__background screen__background--${gameState}`;
  }, [gameState]);

  const fadeClassName = useMemo(() => {
    return `screen__fade screen__fade--${gameState}`;
  }, [gameState]);

  const startUpGifUrl = useMemo(() => {
    return `url(${StartupGif}?${Date.now()})`;
  }, [gameState]);

  return (
    <div className="screen" style={{ width, height, top: y }}>
      <div
        className={backgroundClassName}
        style={
          gameState === 'startup'
            ? {
                backgroundImage: startUpGifUrl,
              }
            : {}
        }
      ></div>
      <GameCanvas />
      <div className="screen__foreground">
        <Foreground gameState={gameState} />
      </div>
      <div className={fadeClassName}></div>
    </div>
  );
}
