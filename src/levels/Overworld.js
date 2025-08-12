import {
  BanzaiBullet,
  BigBoo,
  BigBubble,
  BlueParatroopa,
  BuzzSaw,
  CrazyBoo,
  Eerie,
  FallingBulletBill,
  FlyingHammerBro,
  GreenParatroopa,
  Grinder,
  MeanBoo,
  RedParatroopa,
  RedSuperKoopa,
  RisingBulletBill,
  ShyBoo,
  StraightBulletBill,
  YellowParatroopa,
  YellowSuperKoopa,
} from '@classes/entities/enemies';
import { Instruction, LevelScene, SpawnPosition } from '@classes/scenes';

export default new LevelScene({
  name: 'overworld',
  title: 'The Overworld',
  song: 'overworld',
  spawnData: [
    new Instruction(YellowSuperKoopa, new SpawnPosition(0.5, 0.5), 1),
    new Instruction(YellowParatroopa, new SpawnPosition(0.75, 0.75), 1),
  ],
});
