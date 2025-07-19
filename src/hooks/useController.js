import { useState, useEffect, useRef } from 'react';

export default function useController() {
  const [controller, setController] = useState({
    isLeftPressed: false,
    isRightPressed: false,
    isUpPressed: false,
    isDownPressed: false,
    isPowerPressed: false,
    isStartPressed: false,
  });

  const isKeyAlreadyPressed = useRef(false);

  useEffect(() => {
    const handleActionButtons = (noramlizedKey, isKeyPressed) => {
      setController((previous) => {
        switch (noramlizedKey) {
          case 'arrowleft':
          case 'a':
            return { ...previous, isLeftPressed: isKeyPressed };
          case 'arrowright':
          case 'd':
            return { ...previous, isRightPressed: isKeyPressed };
          case 'arrowup':
          case 'w':
          case ' ':
            return { ...previous, isUpPressed: isKeyPressed };
          case 'arrowdown':
          case 's':
            return { ...previous, isDownPressed: isKeyPressed };
          default:
            return previous;
        }
      });
    };

    const handleToggleButtons = (noramlizedKey, isKeyPressed) => {
      if (isKeyPressed && isKeyAlreadyPressed.current) return;
      isKeyAlreadyPressed.current = isKeyPressed;

      setController((previous) => {
        switch (noramlizedKey) {
          case 'enter':
            return { ...previous, isPowerPressed: isKeyPressed };
          case 'p':
            return { ...previous, isStartPressed: isKeyPressed };
          default:
            return previous;
        }
      });
    };

    const handleKeyEvent = ({ key, type }) => {
      const normalizedKey = key.toLowerCase();
      const isKeyPressed = type === 'keydown';
      handleActionButtons(normalizedKey, isKeyPressed);
      handleToggleButtons(normalizedKey, isKeyPressed);
    };

    document.addEventListener('keydown', handleKeyEvent);
    document.addEventListener('keyup', handleKeyEvent);

    return () => {
      document.removeEventListener('keydown', handleKeyEvent);
      document.removeEventListener('keyup', handleKeyEvent);
    };
  }, []);

  return [controller, setController];
}
