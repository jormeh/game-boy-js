import Overworld from '@levels/Overworld';

export default class LevelManager {
  constructor() {
    this.levels = [Overworld];
    this.timeouts = [];
    this.entities = [];
    this.index = 0;
  }

  get currentLevel() {
    return this.levels[this.index];
  }

  get beatGame() {
    return this.index + 1 === this.levels.length;
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
