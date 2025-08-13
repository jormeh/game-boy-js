import { Entity } from '..';

export default class FlyingGoomba extends Entity {
  constructor(x, y) {
    super(x, y, 30, 32, 'flying-goomba', 19, 19, 200);

    this.initial = {
      speed: {
        x: 2,
      },

      wave: {
        amplitude: 1,
        frequency: 0.1,
      },
    };

    this.speed = { ...this.initial.speed };
    this.wave = { ...this.initial.wave };

    this.pattern = 'wave';
  }
}
