import { Entity } from '..';

export default class StraightBulletBill extends Entity {
  constructor(x, y) {
    super(x, y, 33, 31, 'straight-bullet-bill', 2, 0);

    this.initial = {
      speed: {
        x: 0,
      },
    };

    this.speed = { ...this.initial.speed };
  }

  move() {}
}
