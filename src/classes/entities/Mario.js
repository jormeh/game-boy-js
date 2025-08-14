import { MarioDeath } from '@assets/ui';
import { Entity } from '@classes/entities';

export default class Mario extends Entity {
  constructor() {
    super(0, 0, 42, 42, 'mario', 12, 14);

    this.initial = {
      speed: {
        x: 5,
        y: 7,
        gravity: 2.5,
      },
    };

    this.speed = { ...this.initial.speed };

    this.isMovingLeft = false;
    this.isMovingRight = false;
    this.isMovingUp = false;
    this.isDiving = false;
  }

  get frameWidth() {
    return this.sprite.data.frames[this.sprite.index].w;
  }

  get frameHeight() {
    return this.sprite.data.frames[this.sprite.index].h;
  }

  get canMoveLeft() {
    return this.hitbox.x > 0;
  }

  get canMoveUp() {
    return this.hitbox.y > 0;
  }

  canMoveRight(canvasWidth) {
    return this.hitbox.x + this.hitbox.width < canvasWidth;
  }

  pastTutorial(canvasWidth) {
    const { currentFrame, getRenderSize } = this.sprite;
    const width = getRenderSize(currentFrame.w, canvasWidth);
    return this.hitbox.x - width >= canvasWidth;
  }

  hasFallen(canvasWidth, canvasHeight) {
    const { currentFrame, getRenderSize } = this.sprite;
    const height = getRenderSize(currentFrame.h, canvasWidth);
    return this.hitbox.y - height >= canvasHeight;
  }

  resetPosition(canvas) {
    this.hitbox.x = canvas.width * 0.1;
    this.hitbox.y = canvas.height * 0.3;
  }

  move(canvas, gameState) {
    const { height: ch, width: cw } = canvas;

    if (this.isMovingLeft && this.canMoveLeft) {
      this.hitbox.x -= this.speed.x;
    }

    if (this.isMovingRight) {
      if (gameState.mode === 'tutorial-start' || this.canMoveRight(cw)) {
        this.hitbox.x += this.speed.x;
      }
    }

    if (this.isMovingUp && this.canMoveUp) {
      this.hitbox.y -= this.speed.y;
    }

    if (this.isDiving) {
      this.hitbox.y += this.speed.y;
    }

    this.hitbox.y += this.speed.gravity;
  }

  setDeathPosition() {
    const mario = document.getElementById('mario');
    mario.style.left = `${this.position.x + this.hitbox.width / 2}px`;
    mario.style.top = `${this.position.y}px`;
  }
}
