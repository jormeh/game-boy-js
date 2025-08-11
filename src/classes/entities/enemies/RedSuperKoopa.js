import { Entity } from '..';

export default class RedSuperKoopa extends Entity {
  constructor() {
    super(100, 220, 48, 23, 'red-super-koopa', 2, 3);

    this.initial = {
      speed: {
        x: 0,
      },
    };

    this.speed = { ...this.initial.speed };
  }

  move() {}
}
