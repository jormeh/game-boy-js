import { Entity } from '..';

export default class RedParatroopa extends Entity {
  constructor(x, y) {
    super(x, y, 30, 48, 'red-paratroopa', 5, 9, 200);

    this.initial = {
      speed: {
        x: 3,
      },

      wave: {
        amplitude: 3,
        frequency: 0.08,
      },
    };

    this.speed = { ...this.initial.speed };
    this.wave = { ...this.initial.wave };

    this.pattern = 'wave';
  }
}
