import { Entity } from '..';

export default class FlyingHammerBro extends Entity {
  constructor(x, y) {
    super(x, y, 70, 42, 'flying-hammer-bro', 25, 3, 200);

    this.initial = {
      speed: {
        x: 0,
      },
    };

    this.speed = { ...this.initial.speed };
  }

  move() {}
}
