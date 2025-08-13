import { Entity } from '..';

export default class RedSuperKoopa extends Entity {
  constructor(x, y) {
    super(x, y, 48, 23, 'red-super-koopa', 2, 3);

    this.initial = {
      speed: {
        x: 5,
      },
    };

    this.speed = { ...this.initial.speed };

    this.pattern = 'straight';
  }
}
