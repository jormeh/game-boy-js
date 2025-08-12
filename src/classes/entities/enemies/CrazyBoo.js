import { Entity } from '..';

export default class CrazyBoo extends Entity {
  constructor(x, y) {
    super(x, y, 31, 31, 'crazy-boo', 2, 2, 200);

    this.initial = {
      speed: {
        x: 0,
      },
    };

    this.speed = { ...this.initial.speed };
  }

  move() {}
}
