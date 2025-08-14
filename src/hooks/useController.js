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

  const actionKeyMap = useRef({
    arrowleft: 'isLeftPressed',
    a: 'isLeftPressed',
    arrowright: 'isRightPressed',
    d: 'isRightPressed',
    arrowup: 'isUpPressed',
    w: 'isUpPressed',
    ' ': 'isUpPressed',
    arrowdown: 'isDownPressed',
    s: 'isDownPressed',
  }).current;

  const toggleKeyMap = useRef({
    p: 'isPowerPressed',
    enter: 'isStartPressed',
  }).current;

  const isKeyAlreadyPressed = useRef(false);

  useEffect(() => {
    const handleKeyEvent = (event) => {
      const key = event.key.toLowerCase();
      const isKeyPressed = event.type === 'keydown';
      const isKeyAction = key in actionKeyMap;
      const isKeyToggle = key in toggleKeyMap;

      if (!isKeyAction && !isKeyToggle) return;
      const mappedKey = actionKeyMap[key] || toggleKeyMap[key];

      if (isKeyToggle) {
        if (isKeyPressed && isKeyAlreadyPressed.current) return;
        isKeyAlreadyPressed.current = isKeyPressed;
      }

      setController((previous) => {
        if (previous[mappedKey] === isKeyPressed) return previous;
        return { ...previous, [mappedKey]: isKeyPressed };
      });
    };

    document.addEventListener('keydown', handleKeyEvent);
    document.addEventListener('keyup', handleKeyEvent);

    return () => {
      document.removeEventListener('keydown', handleKeyEvent);
      document.removeEventListener('keyup', handleKeyEvent);
    };
  });

  return [controller, setController];
}
