import { Entity } from '..';

export default class FallingBulletBill extends Entity {
  constructor(x, y) {
    super(x, y, 33, 31, 'falling-bullet-bill', 2, 2);

    this.initial = {
      speed: {
        x: 0,
      },
    };

    this.speed = { ...this.initial.speed };
  }

  move() {}
}
