import { SPRITE_SHEET_URL } from '@assets/spritesheet';

import {
  CreditsSong,
  GameOverSong,
  MenuSong,
  OverworldSong,
  TutorialSong,
} from '@assets/audio/music';

import {
  CoinSFX,
  CorrectSFX,
  CourseClearSFX,
  DiedSFX,
  GetALifeSFX,
  IncorrectSFX,
  IrisSFX,
  JumpSFX,
  StartupSFX,
} from '@assets/audio/sfx';

import {
  BackgroundCredits,
  BackgroundMenu,
  BackgroundOverworld,
  BackgroundTutorial,
} from '@assets/images';

import {
  GameBoyLogo,
  GameBoyShell,
  HUDCoins,
  HUDLives,
  MarioDeath,
  MenuLogo,
  MenuMario,
  StartupGif,
} from '@assets/ui';

export const BASE_CANVAS_WIDTH = 340.09;
export const BASE_CANVAS_HEIGHT = 293.66;
export const TARGET_FPS = 60;
export const FRAME_DURATION = 1000 / TARGET_FPS;
export const SPRITE_SCALE = 0.55;

export const INITIAL_STATE = {
  mode: 'off',
  event: 'idle',
  initialLives: 4,
  lives: 4,
  coins: 0,
};

export const BACKGROUNDS = [
  BackgroundCredits,
  BackgroundMenu,
  BackgroundOverworld,
  BackgroundTutorial,
];

export const IMAGES = [
  SPRITE_SHEET_URL,
  GameBoyLogo,
  GameBoyShell,
  HUDCoins,
  HUDLives,
  MarioDeath,
  MenuLogo,
  MenuMario,
  StartupGif,
];

export const AUDIO = [
  CreditsSong,
  GameOverSong,
  MenuSong,
  OverworldSong,
  TutorialSong,
  CoinSFX,
  CorrectSFX,
  CourseClearSFX,
  DiedSFX,
  GetALifeSFX,
  IncorrectSFX,
  IrisSFX,
  JumpSFX,
  StartupSFX,
];
