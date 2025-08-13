import { Entity } from '..';

export default class Coin extends Entity {
  constructor(x, y) {
    super(x, y, 17, 34, 'coin', 2, 2, 200);

    this.initial = {
      speed: {
        x: 2,
      },
    };

    this.speed = { ...this.initial.speed };

    this.pattern = 'straight';
  }
}
