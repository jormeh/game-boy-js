import { Entity } from '..';

export default class Eerie extends Entity {
  constructor() {
    super(100, 220, 31, 31, 'eerie', 2, 2, 200);

    this.initial = {
      speed: {
        x: 0,
      },
    };

    this.speed = { ...this.initial.speed };
  }

  move() {}
}
