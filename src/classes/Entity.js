import Hitbox from './Hitbox';
import Sprite from './Sprite';

export default class Entity {
  constructor(
    hitboxX,
    hitboxY,
    hitboxW,
    hitboxH,
    spriteName,
    spriteOffsetX,
    spriteOffsetY
  ) {
    this.hitbox = new Hitbox(hitboxX, hitboxY, hitboxW, hitboxH);
    this.sprite = new Sprite(spriteName, spriteOffsetX, spriteOffsetY);
  }

  get position() {
    return {
      x: this.hitbox.x - this.sprite.offset.x,
      y: this.hitbox.y - this.sprite.offset.y,
    };
  }

  draw(canvas, ctx) {
    const { x, y } = this.position;
    this.sprite.draw(canvas, ctx, x, y);
  }
}
