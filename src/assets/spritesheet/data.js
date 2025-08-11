const SPRITESHEET_DATA = [
  {
    name: '1up-mushroom',
    frames: [
      { x: 665, y: 67, w: 104, h: 82, ox: 0, oy: 0 },
      { x: 288, y: 1, w: 72, h: 56, ox: 15.5, oy: 26 },
    ],
  },
  {
    name: 'banzai-bullet',
    frames: [{ x: 445, y: 513, w: 256, h: 256, ox: 0, oy: 0 }],
  },
  {
    name: 'big-boo',
    frames: [{ x: 703, y: 513, w: 268, h: 256, ox: 0, oy: 0 }],
  },
  {
    name: 'big-bubble',
    frames: [
      { x: 1, y: 513, w: 216, h: 240, ox: 2, oy: 0 },
      { x: 219, y: 513, w: 224, h: 232, ox: 0, oy: 5 },
    ],
  },
  {
    name: 'mean-boo',
    frames: [
      { x: 362, y: 1, w: 64, h: 64, ox: 0, oy: 0 },
      { x: 428, y: 1, w: 64, h: 64, ox: 0, oy: 0 },
    ],
  },
  {
    name: 'crazy-boo',
    frames: [
      { x: 494, y: 1, w: 64, h: 64, ox: 0, oy: 0 },
      { x: 560, y: 1, w: 64, h: 64, ox: 0, oy: 0 },
    ],
  },
  {
    name: 'shy-boo',
    frames: [
      { x: 224, y: 1, w: 62, h: 64, ox: 2, oy: 0 },
      { x: 890, y: 1, w: 65, h: 64, ox: 0, oy: 0 },
    ],
  },
  {
    name: 'rising-bullet-bill',
    frames: [{ x: 692, y: 1, w: 64, h: 64, ox: 0, oy: 0 }],
  },
  {
    name: 'falling-bullet-bill',
    frames: [{ x: 626, y: 1, w: 64, h: 64, ox: 0, oy: 0 }],
  },
  {
    name: 'straight-bullet-bill',
    frames: [{ x: 95, y: 1, w: 65, h: 56, ox: 0, oy: 0 }],
  },
  {
    name: 'buzz-saw',
    frames: [
      { x: 313, y: 181, w: 64, h: 176, ox: 0, oy: -10 },
      { x: 379, y: 181, w: 64, h: 176, ox: 0, oy: -10 },
      { x: 181, y: 181, w: 64, h: 168, ox: 0, oy: 0 },
      { x: 247, y: 181, w: 64, h: 168, ox: 0, oy: 0 },
    ],
  },
  {
    name: 'coin',
    frames: [
      { x: 19, y: 1, w: 32, h: 64, ox: 2, oy: 0 },
      { x: 53, y: 1, w: 40, h: 64, ox: 0, oy: 0 },
      { x: 1, y: 1, w: 16, h: 64, ox: 10, oy: 0 },
    ],
  },
  {
    name: 'eerie',
    frames: [
      { x: 758, y: 1, w: 64, h: 64, ox: 0, oy: 0 },
      { x: 824, y: 1, w: 64, h: 64, ox: 0, oy: 0 },
    ],
  },
  {
    name: 'flying-goomba',
    frames: [
      { x: 657, y: 181, w: 132, h: 96, ox: 0, oy: 0 },
      { x: 791, y: 181, w: 128, h: 100, ox: 0, oy: 0 },
      { x: 283, y: 67, w: 100, h: 60, ox: 18, oy: 30 },
      { x: 189, y: 67, w: 92, h: 64, ox: 18, oy: 30 },
    ],
  },
  {
    name: 'flying-hammer-bro',
    frames: [
      { x: 475, y: 359, w: 176, h: 152, ox: 20, oy: 0 },
      { x: 653, y: 359, w: 216, h: 152, ox: 0, oy: 0 },
    ],
  },
  {
    name: 'grinder',
    frames: [
      { x: 215, y: 359, w: 128, h: 128, ox: 0, oy: 0 },
      { x: 345, y: 359, w: 128, h: 128, ox: 0, oy: 0 },
    ],
  },
  {
    name: 'mario',
    frames: [
      { x: 445, y: 181, w: 96, h: 124, ox: 0, oy: 0 },
      { x: 543, y: 181, w: 112, h: 112, ox: 0, oy: 0 },
      { x: 1, y: 359, w: 116, h: 111, ox: 0, oy: 0 },
      { x: 119, y: 359, w: 94, h: 140, ox: 0, oy: 0 },
    ],
  },
  {
    name: 'red-paratroopa',
    frames: [
      { x: 525, y: 67, w: 68, h: 108, ox: 0, oy: 7 },
      { x: 1, y: 181, w: 88, h: 112, ox: 0, oy: 0 },
    ],
  },
  {
    name: 'green-paratroopa',
    frames: [
      { x: 455, y: 67, w: 68, h: 108, ox: 0, oy: 7 },
      { x: 861, y: 67, w: 88, h: 112, ox: 0, oy: 0 },
    ],
  },
  {
    name: 'blue-paratroopa',
    frames: [
      { x: 385, y: 67, w: 68, h: 108, ox: 0, oy: 7 },
      { x: 771, y: 67, w: 88, h: 112, ox: 0, oy: 0 },
    ],
  },
  {
    name: 'yellow-paratroopa',
    frames: [
      { x: 595, y: 67, w: 68, h: 108, ox: 0, oy: 7 },
      { x: 91, y: 181, w: 88, h: 112, ox: 0, oy: 0 },
    ],
  },
  {
    name: 'star',
    frames: [{ x: 162, y: 1, w: 60, h: 64, ox: 0, oy: 0 }],
  },
  {
    name: 'red-super-koopa',
    frames: [{ x: 1, y: 67, w: 92, h: 52, ox: 0, oy: 0 }],
  },
  {
    name: 'yellow-super-koopa',
    frames: [{ x: 95, y: 67, w: 92, h: 52, ox: 0, oy: 0 }],
  },
];

export default SPRITESHEET_DATA;
