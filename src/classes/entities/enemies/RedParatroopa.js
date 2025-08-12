import { Entity } from '..';

export default class RedParatroopa extends Entity {
  constructor(x, y) {
    super(x, y, 30, 48, 'red-paratroopa', 5, 9, 200);

    this.initial = {
      speed: {
        x: 0,
      },
    };

    this.speed = { ...this.initial.speed };
  }

  move() {}
}
