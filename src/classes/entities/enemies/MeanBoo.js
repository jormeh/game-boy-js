import { Entity } from '..';

export default class MeanBoo extends Entity {
  constructor(x, y) {
    super(x, y, 31, 31, 'mean-boo', 2, 2, 200);

    this.initial = {
      speed: {
        x: 0,
      },
    };

    this.speed = { ...this.initial.speed };
  }

  move() {}
}
