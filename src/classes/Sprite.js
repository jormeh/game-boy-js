import { SPRITE_SHEET_DATA, SPRITE_SHEET_URL } from '@assets/spritesheet';
import { BASE_CANVAS_WIDTH, SPRITE_SCALE } from '@constants/index';

const SPRITE_SHEET = new Image();
SPRITE_SHEET.src = SPRITE_SHEET_URL;

export default class Sprite {
  constructor(name, offsetX, offsetY, index = 0) {
    this.initial = { offset: { x: offsetX, y: offsetY } };
    this.offset = { x: offsetX, y: offsetY };
    this.index = index;
    this.data = SPRITE_SHEET_DATA.find((sprite) => sprite.name === name);
  }

  getRenderSize(dimension, canvasWidth) {
    return (dimension * SPRITE_SCALE * canvasWidth) / BASE_CANVAS_WIDTH;
  }

  draw(canvas, ctx, x, y) {
    const { data, index, getRenderSize } = this;
    if (Object.keys(data).length === 0) return;
    const frame = data.frames[index];
    ctx.drawImage(
      SPRITE_SHEET,
      frame.x,
      frame.y,
      frame.w,
      frame.h,
      x,
      y,
      getRenderSize(frame.w, canvas.width),
      getRenderSize(frame.h, canvas.width)
    );
  }
}
