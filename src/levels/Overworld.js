import { Coin, Mushroom, Star } from '@classes/entities';
import { LevelScene } from '@classes/scenes';

export default new LevelScene({
  name: 'overworld',
  title: 'The Overworld',
  song: 'overworld',
  spawner: (timeouts, entities) => {
    const timeout = setTimeout(() => {
      entities.push(new Star());
      entities.push(new Mushroom());
      entities.push(new Coin(10));
      entities.push(new Coin(30));
      entities.push(new Coin(50));
    }, 0);
    timeouts.push(timeout);
  },
});
