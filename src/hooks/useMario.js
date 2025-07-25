import { useEffect, useRef } from 'react';
import Mario from '@classes/Mario';

export default function useMario(controller, sfxManager, isModePlayable) {
  const mario = useRef(new Mario()).current;
  const {
    isLeftPressed,
    isRightPressed,
    isUpPressed,
    isDownPressed,
    isJumpPressed,
  } = controller;

  const spriteEffects = () => {
    if (isUpPressed || isJumpPressed) {
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
    mario.isMovingUp = isUpPressed;
    mario.isJumping = isJumpPressed;
    mario.isDiving = isDownPressed;
  };

  const soundEffects = () => {
    if (isJumpPressed) {
      sfxManager.play('jump');
    }
  };

  useEffect(() => {
    if (!isModePlayable) return;
    spriteEffects();
    moveEffects();
    soundEffects();
  }, [
    isLeftPressed,
    isRightPressed,
    isUpPressed,
    isDownPressed,
    isJumpPressed,
    isModePlayable,
  ]);

  return mario;
}
