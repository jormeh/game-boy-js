import { Entity } from '..';

export default class BigBubble extends Entity {
  constructor() {
    super(100, 100, 105, 105, 'big-bubble', 10, 14, 400);

    this.initial = {
      speed: {
        x: 0,
      },
    };

    this.speed = { ...this.initial.speed };
  }

  move() {}
}
