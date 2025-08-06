import { Entity } from '.';

export default class Star extends Entity {
  constructor() {
    super(100, 100, 26, 28, 'star', 4, 4);

    this.initial = {
      speed: {
        x: 0,
      },
    };

    this.speed = { ...this.initial.speed };
  }

  move() {}
}
