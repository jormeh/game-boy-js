import { SPRITE_SHEET_DATA, SPRITE_SHEET_URL } from '@assets/spritesheet';

const SPRITE_SHEET = new Image();
SPRITE_SHEET.src = SPRITE_SHEET_URL;

export default class Sprite {
  constructor(name, offsetX, offsetY, index = 0) {
    this.offset = { x: offsetX, y: offsetY };
    this.index = index;
    this.data = SPRITE_SHEET_DATA.find((sprite) => sprite.name === name);
  }

  scale(canvasWidth) {
    return canvasWidth * 0.0016;
  }

  draw(canvas, ctx, x, y) {
    const { data, index } = this;
    if (Object.keys(data).length === 0) return;
    const frame = data.frames[index];
    const scale = this.scale(canvas.width);
    ctx.drawImage(
      SPRITE_SHEET,
      frame.x,
      frame.y,
      frame.w,
      frame.h,
      x,
      y,
      frame.w * scale,
      frame.h * scale
    );
  }
}
