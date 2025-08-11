import { Entity } from '..';

export default class FlyingGoomba extends Entity {
  constructor() {
    super(100, 220, 30, 32, 'flying-goomba', 19, 19, 200);

    this.initial = {
      speed: {
        x: 0,
      },
    };

    this.speed = { ...this.initial.speed };
  }

  move() {}
}
