import { Entity } from '..';

export default class BigBubble extends Entity {
  constructor(x, y) {
    super(x, y, 105, 105, 'big-bubble', 10, 14, 400);

    this.initial = {
      speed: {
        x: 0,
      },
    };

    this.speed = { ...this.initial.speed };
  }

  move() {}
}
