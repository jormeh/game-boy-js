import { Entity } from '..';

export default class YellowSuperKoopa extends Entity {
  constructor(x, y) {
    super(x, y, 48, 23, 'yellow-super-koopa', 2, 3);

    this.initial = {
      speed: {
        x: 4,
      },
    };

    this.speed = { ...this.initial.speed };

    this.pattern = 'straight';
  }
}
