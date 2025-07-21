import { BASE_CANVAS_HEIGHT, BASE_CANVAS_WIDTH } from '@constants/index';
import Hitbox from './Hitbox';
import Sprite from './Sprite';
import Mario from './Mario';

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

  scaleValuesToCanvas({ width, height }) {
    const scaleToWidth = (value) => (value * width) / BASE_CANVAS_WIDTH;
    const scaleToHeight = (value) => (value * height) / BASE_CANVAS_HEIGHT;

    this.hitbox.x = scaleToWidth(this.hitbox.initial.x);
    this.hitbox.y = scaleToHeight(this.hitbox.initial.y);
    this.hitbox.width = scaleToWidth(this.hitbox.initial.width);
    this.hitbox.height = scaleToHeight(this.hitbox.initial.height);
    this.sprite.offset.x = scaleToWidth(this.sprite.initial.offset.x);
    this.sprite.offset.y = scaleToHeight(this.sprite.initial.offset.y);
    this.speed.x = scaleToWidth(this.initial.speed.x);
    this.speed.y = scaleToHeight(this.initial.speed.y);

    if (this instanceof Mario) {
      this.speed.jump = scaleToHeight(this.initial.speed.jump);
      this.speed.gravity = scaleToHeight(this.initial.speed.gravity);
    }
  }

  draw(canvas, ctx) {
    const { x, y } = this.position;
    this.sprite.draw(canvas, ctx, x, y);
    ctx.fillStyle = 'rgba(256, 0, 0, 0.8)';
    ctx.fillRect(
      this.hitbox.x,
      this.hitbox.y,
      this.hitbox.width,
      this.hitbox.height
    );
  }
}
