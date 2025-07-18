import Entity from './Entity';

export default class Mario extends Entity {
  constructor() {
    super(0, 0, 0, 0, 'mario', 0, 0);

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

  move() {
    if (this.isMovingLeft) {
      console.log(this.isMovingLeft);
      this.hitbox.x -= this.speed.x;
    }

    if (this.isMovingRight) {
      this.hitbox.x += this.speed.x;
    }

    if (this.isJumping) {
      this.hitbox.y -= this.speed.y;
    }

    if (this.isDiving) {
      this.hitbox.y += this.speed.y;
    }

    this.hitbox.x -= this.drag;
    this.hitbox.y += this.gravity;
  }
}
