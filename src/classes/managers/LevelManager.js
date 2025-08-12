import Overworld from '@levels/Overworld';

export default class LevelManager {
  constructor() {
    this.levels = [Overworld];
    this.timeouts = [];
    this.entities = [];
    this.index = 0;

    this.spawnPoints = {
      x: undefined,
      yAbove: undefined,
      yBelow: undefined,
    };
  }

  get currentLevel() {
    return this.levels[this.index];
  }

  get beatGame() {
    return this.index + 1 === this.levels.length;
  }

  updateSpawnPoints(canvas) {
    const xBuffer = 0.1;
    const yAboveBuffer = 0.33;
    const yBelowBuffer = 0.1;

    this.spawnPoints = {
      x: canvas.width + canvas.width * xBuffer,
      yAbove: -canvas.height * yAboveBuffer,
      yBelow: canvas.height + yBelowBuffer,
    };
  }

  goToNextLevel() {
    this.index += 1;
  }

  resetLevels() {
    this.index = 0;
  }

  startSpawner() {
    this.currentLevel.spawner(this.timeouts, this.entities);
  }

  drawEntities(canvas, ctx, showHitbox) {
    this.entities.forEach((entity) => entity.draw(canvas, ctx, showHitbox));
  }

  moveEntities() {
    this.entities.forEach((entity) => entity.move());
  }

  clearTimeouts() {
    this.timeouts.forEach((timeout) => clearTimeout(timeout));
  }

  clearEntities() {
    this.entities = [];
  }
}
