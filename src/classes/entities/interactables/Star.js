import { Entity } from '..';

export default class Star extends Entity {
  constructor(x, y) {
    super(x, y, 26, 28, 'star', 4, 4);

    this.initial = {
      speed: {
        x: 2,
      },
    };

    this.speed = { ...this.initial.speed };

    this.pattern = 'float';
  }
}
