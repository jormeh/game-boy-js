import { Entity } from '..';

export default class FlyingHammerBro extends Entity {
  constructor() {
    super(100, 100, 70, 42, 'flying-hammer-bro', 25, 3, 200);

    this.initial = {
      speed: {
        x: 0,
      },
    };

    this.speed = { ...this.initial.speed };
  }

  move() {}
}
