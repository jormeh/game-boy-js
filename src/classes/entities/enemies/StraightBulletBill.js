import { Entity } from '..';

export default class StraightBulletBill extends Entity {
  constructor() {
    super(100, 220, 33, 31, 'straight-bullet-bill', 2, 0);

    this.initial = {
      speed: {
        x: 0,
      },
    };

    this.speed = { ...this.initial.speed };
  }

  move() {}
}
