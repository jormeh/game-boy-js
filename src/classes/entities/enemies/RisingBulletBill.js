import { Entity } from '..';

export default class RisingBulletBill extends Entity {
  constructor() {
    super(100, 220, 33, 31, 'rising-bullet-bill', 2, 2);

    this.initial = {
      speed: {
        x: 0,
      },
    };

    this.speed = { ...this.initial.speed };
  }

  move() {}
}
