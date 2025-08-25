import { BASE_CANVAS_HEIGHT, BASE_CANVAS_WIDTH } from '@constants/index';
import { Hitbox, Sprite, Mario } from '@classes/entities';

export default class Entity {
  constructor(
    hitboxX,
    hitboxY,
    hitboxW,
    hitboxH,
    spriteName,
    spriteOffsetX,
    spriteOffsetY,
    spriteRate
  ) {
    this.hitbox = new Hitbox(hitboxX, hitboxY, hitboxW, hitboxH);

    this.sprite = new Sprite(
      spriteName,
      spriteOffsetX,
      spriteOffsetY,
      spriteRate
    );

    this.time = 0;
    this.pattern = null;
  }

  // ===== Movement Helpers =====
  static sineWave(amplitude, frequency, time) {
    return Math.sin(time * frequency) * amplitude;
  }

  // ===== Pattern Implementations =====
  static patterns = {
    wave(entity) {
      entity.hitbox.x -= entity.speed.x;
      entity.hitbox.y += Entity.sineWave(
        entity.wave.amplitude,
        entity.wave.frequency,
        entity.time
      );
      entity.time++;
    },

    straight(entity) {
      entity.hitbox.x -= entity.speed.x;
    },

    float(entity, canvas) {
      if (entity.hitbox.x > canvas.width * 0.8) {
        this.straight(entity);
      }
    },

    diagonalUp(entity) {
      entity.hitbox.x -= entity.speed.x;
      entity.hitbox.y -= entity.speed.y;
    },

    diagonalDown(entity) {
      entity.hitbox.x -= entity.speed.x;
      entity.hitbox.y += entity.speed.y;
    },
  };

  // ===== Unified move method =====
  move(canvas) {
    if (this.pattern && Entity.patterns[this.pattern]) {
      Entity.patterns[this.pattern](this, canvas);
    }
  }

  // ===== Scaling =====
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

    if (this.wave) {
      this.wave.amplitude = scaleToHeight(this.initial.wave.amplitude);
      this.wave.frequency = scaleToHeight(this.initial.wave.frequency);
    }

    if (this instanceof Mario) {
      this.speed.gravity = scaleToHeight(this.initial.speed.gravity);
    }
  }

  get position() {
    return {
      x: this.hitbox.x - this.sprite.offset.x,
      y: this.hitbox.y - this.sprite.offset.y,
    };
  }

  draw(canvas, ctx, showHitbox = false) {
    const { x, y } = this.position;
    this.sprite.draw(canvas, ctx, x, y);

    if (showHitbox) {
      ctx.fillStyle = 'rgba(256, 0, 0, 0.8)';
      ctx.fillRect(
        this.hitbox.x,
        this.hitbox.y,
        this.hitbox.width,
        this.hitbox.height
      );
    }
  }
}
