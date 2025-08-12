import { Entity } from '..';

export default class Eerie extends Entity {
  constructor(x, y) {
    super(x, y, 31, 31, 'eerie', 2, 2, 200);

    this.initial = {
      speed: {
        x: 0,
      },
    };

    this.speed = { ...this.initial.speed };
  }

  move() {}
}
