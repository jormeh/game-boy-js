import { Coin, FlyingGoomba, Mushroom, Star } from '@classes/entities';
import { LevelScene } from '@classes/scenes';

export default new LevelScene({
  name: 'overworld',
  title: 'The Overworld',
  song: 'overworld',
  spawner: (timeouts, entities) => {
    const timeout = setTimeout(() => {
      entities.push(new FlyingGoomba());
    }, 0);
    timeouts.push(timeout);
  },
});
