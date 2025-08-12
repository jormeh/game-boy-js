import { Entity } from '..';

export default class BuzzSaw extends Entity {
  constructor(x, y) {
    super(x, y, 32, 58, 'buzz-saw', 2, 0, 100);

    this.initial = {
      speed: {
        x: 0,
      },
    };

    this.speed = { ...this.initial.speed };
  }

  move() {}
}
