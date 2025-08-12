import { Entity } from '..';

export default class ShyBoo extends Entity {
  constructor(x, y) {
    super(x, y, 31, 31, 'shy-boo', 2, 2, 200);

    this.initial = {
      speed: {
        x: 0,
      },
    };

    this.speed = { ...this.initial.speed };
  }

  move() {}
}
