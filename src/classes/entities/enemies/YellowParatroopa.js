import { Entity } from '..';

export default class YellowParatroopa extends Entity {
  constructor(x, y) {
    super(x, y, 30, 48, 'yellow-paratroopa', 5, 9, 200);

    this.initial = {
      speed: {
        x: 1,
      },
      wave: {
        amplitude: 3,
        frequency: 0.1,
      },
    };

    this.speed = { ...this.initial.speed };
    this.wave = { ...this.initial.wave };

    this.pattern = 'sine';
  }
}
