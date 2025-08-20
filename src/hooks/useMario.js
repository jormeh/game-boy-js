import { useEffect, useRef } from 'react';
import { Mario } from '@classes/entities/';

export default function useMario(controller, sfxManager, isModePlayable) {
  const mario = useRef(new Mario()).current;
  const isJumping = useRef(false);

  const spriteEffects = () => {
    if (controller.isUpPressed) {
      mario.sprite.index = 1;
    } else if (controller.isDownPressed) {
      mario.sprite.index = 0;
    } else {
      mario.sprite.index = 2;
    }
  };

  const moveEffects = () => {
    mario.isMovingLeft = controller.isLeftPressed;
    mario.isMovingRight = controller.isRightPressed;
    mario.isMovingUp = controller.isUpPressed;
    mario.isDiving = controller.isDownPressed;
  };

  const soundEffects = () => {
    if (controller.isUpPressed && !isJumping.current) {
      isJumping.current = true;
      sfxManager.play('jump');
    } else if (!controller.isUpPressed) {
      isJumping.current = false;
    }
  };

  useEffect(() => {
    if (!isModePlayable) return;
    spriteEffects();
    moveEffects();
    soundEffects();
  }, [
    controller.isLeftPressed,
    controller.isRightPressed,
    controller.isUpPressed,
    controller.isDownPressed,
    isModePlayable,
  ]);

  return mario;
}
