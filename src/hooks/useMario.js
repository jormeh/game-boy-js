import Mario from '@classes/Mario';
import { useEffect, useRef } from 'react';

export default function useMario(controller, sfxManager) {
  const mario = useRef(new Mario()).current;
  const { isLeftPressed, isRightPressed, isUpPressed, isDownPressed } =
    controller;

  const spriteEffects = () => {
    if (isUpPressed) {
      mario.sprite.index = 1;
    } else if (isDownPressed) {
      mario.sprite.index = 0;
    } else {
      mario.sprite.index = 2;
    }
  };

  const moveEffects = () => {
    mario.isMovingLeft = isLeftPressed;
    mario.isMovingRight = isRightPressed;
    mario.isJumping = isUpPressed;
    mario.isDiving = isDownPressed;
  };

  const soundEffects = () => {
    if (isUpPressed) {
      sfxManager.play('jump');
    }
  };

  useEffect(() => {
    spriteEffects();
    moveEffects();
    soundEffects();
  }, [isLeftPressed, isRightPressed, isUpPressed, isDownPressed]);

  return mario;
}
