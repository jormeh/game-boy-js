import { Entity } from '.';

export default class Mushroom extends Entity {
  constructor() {
    super(220, 220, 26, 28, '1up-mushroom', 16, 17, 250);

    this.initial = {
      speed: {
        x: 0,
      },
    };

    this.speed = { ...this.initial.speed };
  }

  move() {}
}
