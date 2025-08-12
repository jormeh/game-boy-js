import { AnchoredPosition, FreePosition } from '@classes/scenes';
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

  getSpawnPosition(positionConfig) {
    if (positionConfig instanceof FreePosition) {
      return {
        x: this.canvasData.width * positionConfig.xPercentage,
        y: this.canvasData.height * positionConfig.yPercentage,
      };
    }

    if (positionConfig instanceof AnchoredPosition) {
      const { axisValue, anchorType } = positionConfig;

      const x = anchorType === 'x' ? this.spawnPoints.x : axisValue;
      const y =
        anchorType === 'yBelow' || anchorType === 'yAbove'
          ? this.spawnPoints[anchorType]
          : axisValue;

      return { x, y };
    }
  }

  startSpawner() {
    const data = this.currentLevel.spawnData;

    data.forEach(({ EntityType, positionConfig, spawnTimeS }) => {
      const { x, y } = this.getSpawnPosition(positionConfig);

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

  goToNextLevel() {
    this.index += 1;
  }

  resetLevels() {
    this.index = 0;
  }

  clearTimeouts() {
    this.timeouts.forEach((timeout) => clearTimeout(timeout));
  }

  clearEntities() {
    this.entities = [];
  }
}
