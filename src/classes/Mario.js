import Entity from './Entity';

export default class Mario extends Entity {
  constructor() {
    super(0, 0, 100, 100, 'mario', 0, 0);

    this.speed = { x: 10, y: 10 };
    this.gravity = 1;
    this.drag = 1;

    this.startingLives = 5;
    this.lives = this.startingLives;

    this.isMovingLeft = false;
    this.isMovingRight = false;
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

    if (this.isJumping && this.isInsideTopBound) {
      this.hitbox.y -= this.speed.y;
    }

    if (this.isDiving) {
      this.hitbox.y += this.speed.y;
    }

    if (this.isInsideLeftBound) {
      this.hitbox.x -= this.drag;
    }

    this.hitbox.y += this.gravity;
  }
}
