import Hitbox from './Hitbox';
import Sprite from './Sprite';

export default class Entity {
  constructor() {
    this.hitbox = new Hitbox();
    this.sprite = new Sprite();
  }

  get position() {
    return {
      x: this.hitbox.x - this.sprite.offset.x,
      y: this.hitbox.y - this.sprite.offset.y,
    };
  }

  draw(ctx) {
    const { x, y } = this.position;
    this.sprite.draw(ctx, x, y);
  }
}
