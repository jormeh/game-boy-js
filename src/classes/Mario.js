import Entity from './Entity';

export default class Mario extends Entity {
  constructor() {
    super(0, 0, 42, 42, 'mario', 12, 14);

    this.speed = { x: 5, y: 6, jump: 2.5 };
    this.gravity = 2;

    this.startingLives = 5;
    this.lives = this.startingLives;

    this.isMovingLeft = false;
    this.isMovingRight = false;
    this.isMovingUp = false;
    this.isJumping = false;
    this.isDiving = false;
  }

  get isInsideLeftBound() {
    return this.hitbox.x > 0;
  }

  get isInsideTopBound() {
    return this.hitbox.y > 0;
  }

  isInsideRightBound(canvasWidth) {
    return this.hitbox.x + this.hitbox.width < canvasWidth;
  }

  move(canvas) {
    if (this.isMovingLeft && this.isInsideLeftBound) {
      this.hitbox.x -= this.speed.x;
    }

    if (this.isMovingRight && this.isInsideRightBound(canvas.width)) {
      this.hitbox.x += this.speed.x;
    }

    if (this.isMovingUp && this.isInsideTopBound) {
      this.hitbox.y -= this.speed.y;
    }

    if (this.isJumping && this.isInsideTopBound) {
      let count = 0;
      let interval = setInterval(() => {
        if (count > 7) {
          clearInterval(interval);
          this.isJumping = false;
          count = 0;
        } else {
          this.hitbox.y -= this.speed.jump;
        }
        count += 1;
      }, 10);
    }

    if (this.isDiving) {
      this.hitbox.y += this.speed.y;
    }

    this.hitbox.y += this.gravity;
  }
}
