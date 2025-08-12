import { Entity } from '..';

export default class Grinder extends Entity {
  constructor(x, y) {
    super(x, y, 65, 65, 'grinder', 3, 3, 100);

    this.initial = {
      speed: {
        x: 0,
      },
    };

    this.speed = { ...this.initial.speed };
  }

  move() {}
}
