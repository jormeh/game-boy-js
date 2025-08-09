import { SPRITE_SHEET_DATA, SPRITE_SHEET_URL } from '@assets/spritesheet';
import {
  BASE_CANVAS_WIDTH,
  FRAME_DURATION,
  SPRITE_SCALE,
} from '@constants/index';

const SPRITE_SHEET = new Image();
SPRITE_SHEET.src = SPRITE_SHEET_URL;

export default class Sprite {
  constructor(name, offsetX, offsetY, rate = 0, index = 0) {
    this.initial = { offset: { x: offsetX, y: offsetY } };
    this.offset = { x: offsetX, y: offsetY };
    this.rate = rate;
    this.index = index;
    this.time = 0;
    this.data = SPRITE_SHEET_DATA.find((sprite) => sprite.name === name);
    this.numberOfFrames = this.data.frames.length;
    this.hasAnimation = this.numberOfFrames > 1 && this.rate > 0;
  }

  get currentFrame() {
    return this.data.frames[this.index];
  }

  getRenderSize(dimension, canvasWidth) {
    return (dimension * SPRITE_SCALE * canvasWidth) / BASE_CANVAS_WIDTH;
  }

  drawSprite(canvas, ctx, x, y) {
    const frame = this.currentFrame;
    if (!frame) return;

    const renderWidth = this.getRenderSize(frame.w, canvas.width);
    const renderHeight = this.getRenderSize(frame.h, canvas.width);
    const offsetX = this.getRenderSize(frame.ox, canvas.width);
    const offsetY = this.getRenderSize(frame.oy, canvas.width);

    ctx.drawImage(
      SPRITE_SHEET,
      frame.x,
      frame.y,
      frame.w,
      frame.h,
      x + offsetX,
      y + offsetY,
      renderWidth,
      renderHeight
    );
  }

  animateSprite() {
    const { time, rate, index, numberOfFrames } = this;

    if (Math.round(time) % rate === 0) {
      const onLastFrame = index === numberOfFrames - 1;

      if (onLastFrame) {
        this.index = 0;
      } else {
        this.index += 1;
      }
    }

    this.time += FRAME_DURATION;
  }

  draw(canvas, ctx, x, y) {
    this.drawSprite(canvas, ctx, x, y);

    if (this.hasAnimation) {
      this.animateSprite();
    }
  }
}
