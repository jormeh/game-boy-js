import { Entity } from '..';

export default class Coin extends Entity {
  constructor(x) {
    super(x, 220, 17, 34, 'coin', 2, 2, 200);

    this.initial = {
      speed: {
        x: 0,
      },
    };

    this.speed = { ...this.initial.speed };
  }

  move() {}
}
