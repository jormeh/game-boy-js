import { Entity } from '..';

export default class BanzaiBullet extends Entity {
  constructor() {
    super(100, 100, 130, 120, 'banzai-bullet', 10, 10);

    this.initial = {
      speed: {
        x: 0,
      },
    };

    this.speed = { ...this.initial.speed };
  }

  move() {}
}
