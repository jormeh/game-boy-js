import { useState, useEffect, useRef } from 'react';

export default function useGameController() {
  const isPressed = useRef(false);
  const [controller, setController] = useState({
    isLeftPressed: false,
    isRightPressed: false,
    isUpPressed: false,
    isDownPressed: false,
    isPowerPressed: false,
    isStartPressed: false,
  });

  useEffect(() => {
    function handleKeyEvent({ key, type }) {
      const isKeyDown = type === 'keydown';

      if (isKeyDown && isPressed.current) return;
      isPressed.current = isKeyDown;

      const normalizedKey = key.toLowerCase();

      setController((previous) => {
        switch (normalizedKey) {
          case 'arrowleft':
          case 'a':
            return { ...previous, isLeftPressed: isPressed.current };
          case 'arrowright':
          case 'd':
            return { ...previous, isRightPressed: isPressed.current };
          case 'arrowup':
          case 'w':
          case ' ':
            return { ...previous, isUpPressed: isPressed.current };
          case 'arrowdown':
          case 's':
            return { ...previous, isDownPressed: isPressed.current };
          case 'p':
            return { ...previous, isStartPressed: isPressed.current };
          case 'enter':
            return { ...previous, isPowerPressed: isPressed.current };
          default:
            return previous;
        }
      });
    }

    document.addEventListener('keydown', handleKeyEvent);
    document.addEventListener('keyup', handleKeyEvent);

    return () => {
      document.removeEventListener('keydown', handleKeyEvent);
      document.removeEventListener('keyup', handleKeyEvent);
    };
  }, []);

  return controller;
}
