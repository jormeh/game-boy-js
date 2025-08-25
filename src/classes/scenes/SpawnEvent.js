export default class SpawnEvent {
  constructor(EntityType, positionConfig, spawnTimeS) {
    this.EntityType = EntityType;
    this.positionConfig = positionConfig;
    this.spawnTimeS = spawnTimeS;
  }
}
