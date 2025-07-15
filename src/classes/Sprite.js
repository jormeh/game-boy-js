import { SPRITE_SHEET_DATA, SPRITE_SHEET_URL } from '@assets/spritesheet';

const SPRITE_SHEET = new Image();
SPRITE_SHEET.src = SPRITE_SHEET_URL;

export default class Sprite {
  constructor(data = {}, offset = { x: 0, y: 0 }, index = 0) {
    this.data = data;
    this.offset = offset;
    this.index = index;

    this._name = '';
  }

  set name(value) {
    const data = SPRITE_SHEET_DATA.find(({ name }) => name === value);
    this.data = data;
  }

  draw(ctx, x, y) {
    const { data, width, height, index } = this;
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
      frame.w,
      frame.h
    );
  }
}
