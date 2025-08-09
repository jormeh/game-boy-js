import { Mushroom, Star } from '@classes/entities';
import { LevelScene } from '@classes/scenes';

export default new LevelScene({
  name: 'overworld',
  title: 'The Overworld',
  song: 'overworld',
  spawner: (timeouts, entities) => {
    const timeout = setTimeout(() => {
      entities.push(new Star());
      entities.push(new Mushroom());
    }, 0);
    timeouts.push(timeout);
  },
});
