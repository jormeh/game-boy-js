import Entity from './Entity';

export default class Mario extends Entity {
  constructor() {
    super(0, 0, 42, 42, 'mario', 12, 14);

    this.initial = {
      speed: {
        x: 5,
        y: 6,
        jump: 2.5,
        gravity: 2,
      },

      lives: 5,
    };

    this.speed = { ...this.initial.speed };
    this.lives = this.initial.lives;

    this.isMovingLeft = false;
    this.isMovingRight = false;
    this.isMovingUp = false;
    this.isJumping = false;
    this.isDiving = false;
  }

  get frameWidth() {
    return this.sprite.data.frames[this.sprite.index].w;
  }

  get frameHeight() {
    return this.sprite.data.frames[this.sprite.index].h;
  }

  get canMoveLeft() {
    return this.hitbox.x > 0;
  }

  get canMoveUp() {
    return this.hitbox.y > 0;
  }

  canMoveRight(canvasWidth) {
    return this.hitbox.x + this.hitbox.width < canvasWidth;
  }

  pastTutorial(canvasWidth) {
    const { currentFrame, getRenderSize } = this.sprite;
    const width = getRenderSize(currentFrame.w, canvasWidth);
    return this.hitbox.x - width >= canvasWidth;
  }

  hasFallen(canvasWidth, canvasHeight) {
    const { currentFrame, getRenderSize } = this.sprite;
    const height = getRenderSize(currentFrame.h, canvasWidth);
    return this.hitbox.y - height >= canvasHeight;
  }

  resetPosition(canvas) {
    this.hitbox.x = canvas.width * 0.1;
    this.hitbox.y = canvas.height * 0.3;
  }

  jump() {
    let count = 0;
    let interval = setInterval(() => {
      if (count > 7) {
        clearInterval(interval);
        this.isJumping = false;
        count = 0;
      } else {
        this.hitbox.y -= this.speed.jump;
      }
      count += 1;
    }, 10);
  }

  move(canvas, gameState, setGameState) {
    const { height: ch, width: cw } = canvas;
    const inTutorial = gameState.mode === 'tutorial-start';

    if (this.isMovingLeft && this.canMoveLeft) {
      this.hitbox.x -= this.speed.x;
    }

    if (this.isMovingRight) {
      if (inTutorial || this.canMoveRight(cw)) {
        this.hitbox.x += this.speed.x;
      }

      if (this.pastTutorial(cw)) {
        setGameState((previous) => ({
          ...previous,
          mode: 'tutorial-exit',
        }));

        this.resetPosition(canvas);
      }
    }

    if (this.isMovingUp && this.canMoveUp) {
      this.hitbox.y -= this.speed.y;
    }

    if (this.isJumping && this.canMoveUp) {
      this.jump();
    }

    if (this.isDiving) {
      this.hitbox.y += this.speed.y;
    }

    if (this.hasFallen(cw, ch)) {
      if (inTutorial) {
        setGameState((previous) => ({
          ...previous,
          event: 'mistake',
        }));

        this.resetPosition(canvas);
      }
    }

    this.hitbox.y += this.speed.gravity;
  }
}
