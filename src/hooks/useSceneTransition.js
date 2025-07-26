import { useState, useEffect } from 'react';

export default function useSceneTransition(currentScene, gameState) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  useEffect(() => {
    const resetTimeout = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
        setIsTransitioning(false);
        setTimeoutId(null);
      }
    };

    if (currentScene?.Transition && !currentScene.triggerMode) {
      resetTimeout();
      const id = setTimeout(
        () => setIsTransitioning(true),
        currentScene.visualStartDelay
      );

      setTimeoutId(id);
    }

    return resetTimeout;
  }, [currentScene]);

  useEffect(() => {
    if (currentScene.triggerMode === gameState.mode) {
      setIsTransitioning(true);
    }

    return () => setIsTransitioning(false);
  }, [currentScene, gameState.mode]);

  return isTransitioning;
}
