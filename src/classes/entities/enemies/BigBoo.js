import { Entity } from '..';

export default class BigBoo extends Entity {
  constructor() {
    super(100, 50, 110, 120, 'big-boo', 15, 13);

    this.initial = {
      speed: {
        x: 0,
      },
    };

    this.speed = { ...this.initial.speed };
  }

  move() {}
}
