import { YellowParatroopa, YellowSuperKoopa } from '@classes/entities/enemies';
import {
  AnchoredPosition,
  FreePosition,
  Instruction,
  LevelScene,
} from '@classes/scenes';

export default new LevelScene({
  name: 'overworld',
  title: 'The Overworld',
  song: 'overworld',
  spawnData: [
    new Instruction(YellowSuperKoopa, new FreePosition(0.5, 0.5), 1),
    new Instruction(YellowParatroopa, new AnchoredPosition('x', 0.75), 1),
  ],
});
