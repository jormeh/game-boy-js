export default class Instruction {
  constructor(EntityType, spawnPosition, spawnTimeS) {
    this.EntityType = EntityType;
    this.spawnPosition = spawnPosition;
    this.spawnTimeS = spawnTimeS;
  }
}
