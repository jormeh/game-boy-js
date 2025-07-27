import { useEffect, useRef } from 'react';
import Mario from '@classes/Mario';

export default function useMario(controller, sfxManager, isModePlayable) {
  const mario = useRef(new Mario()).current;

  const spriteEffects = () => {
    if (controller.isUpPressed || controller.isJumpPressed) {
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
    mario.isJumping = controller.isJumpPressed;
    mario.isDiving = controller.isDownPressed;
  };

  const soundEffects = () => {
    if (controller.isJumpPressed) {
      sfxManager.play('jump');
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
    controller.isJumpPressed,
    isModePlayable,
  ]);

  return mario;
}
