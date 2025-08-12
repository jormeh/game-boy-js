import Overworld from '@levels/Overworld';

export default class LevelManager {
  constructor() {
    this.levels = [Overworld];
    this.timeouts = [];
    this.entities = [];
    this.index = 0;

    this.canvasData = {
      width: undefined,
      height: undefined,
    };
  }

  get currentLevel() {
    return this.levels[this.index];
  }

  get beatGame() {
    return this.index + 1 === this.levels.length;
  }

  get spawnPoints() {
    const { width: canvasW, height: canvasH } = this.canvasData;
    const xBuffer = 0.1;
    const yAboveBuffer = 0.33;
    const yBelowBuffer = 0.1;

    return {
      x: canvasW + canvasW * xBuffer,
      yAbove: -canvasH * yAboveBuffer,
      yBelow: canvasH + canvasH * yBelowBuffer,
    };
  }

  updateCanvasData(canvas) {
    this.canvasData = {
      width: canvas.width,
      height: canvas.height,
    };
  }

  goToNextLevel() {
    this.index += 1;
  }

  resetLevels() {
    this.index = 0;
  }

  startSpawner() {
    const data = this.currentLevel.spawnData;

    data.forEach(({ EntityType, spawnPosition, spawnTimeS }) => {
      const x = this.canvasData.width * spawnPosition.xPercentage;
      const y = this.canvasData.height * spawnPosition.yPercentage;

      const timeout = setTimeout(() => {
        this.entities.push(new EntityType(x, y));
      }, spawnTimeS * 1000);

      this.timeouts.push(timeout);
    });
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
