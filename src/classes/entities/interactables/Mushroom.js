import { Entity } from '..';

export default class Mushroom extends Entity {
  constructor(x, y) {
    super(x, y, 26, 28, '1up-mushroom', 16, 17, 250);

    this.initial = {
      speed: {
        x: 3,
      },
    };

    this.speed = { ...this.initial.speed };

    this.pattern = 'straight';
  }
}
