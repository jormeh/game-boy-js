import { useState, useEffect, useRef } from 'react';

export default function useInput() {
  const [controller, setController] = useState({
    isLeftPressed: false,
    isRightPressed: false,
    isUpPressed: false,
    isDownPressed: false,
    isPowerPressed: false,
    isStartPressed: false,
  });

  const isPressed = useRef(false);

  useEffect(() => {
    function handleKeyEvent({ key, type }) {
      const isKeyDown = type === 'keydown';

      if (isKeyDown && isPressed.current) return;
      isPressed.current = isKeyDown;

      const normalizedKey = key.toLowerCase();

      setController((previous) => {
        switch (normalizedKey) {
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
