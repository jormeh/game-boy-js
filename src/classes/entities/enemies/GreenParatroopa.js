import { Entity } from '..';

export default class GreenParatroopa extends Entity {
  constructor() {
    super(100, 220, 30, 48, 'green-paratroopa', 5, 9, 200);

    this.initial = {
      speed: {
        x: 0,
      },
    };

    this.speed = { ...this.initial.speed };
  }

  move() {}
}
