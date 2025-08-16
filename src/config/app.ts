// Application configuration

export const APP_CONFIG = {
  name: 'QuickGame',
  description: 'Challenge players worldwide in the ultimate QuickGame experience',
  version: '1.0.0',
  author: 'QuickGame Team',
  
  // URLs
  website: 'https://quickgame.example.com',
  github: 'https://github.com/walterthesmart/QuickGame',
  
  // Social links
  social: {
    twitter: 'https://twitter.com/quickgame',
    discord: 'https://discord.gg/quickgame',
    telegram: 'https://t.me/quickgame',
  },
  
  // Game settings
  game: {
    defaultStake: '0.001', // ETH
    maxStake: '1.0', // ETH
    minStake: '0.0001', // ETH
    gameTypes: [
      { id: 0, name: 'Quick Match', rounds: 1 },
      { id: 1, name: 'Best of Three', rounds: 3 },
      { id: 2, name: 'Championship', rounds: 5 },
    ],
  },
  
  // UI settings
  ui: {
    theme: 'dark',
    animations: true,
    notifications: true,
  },
} as const;

export const GAME_CONSTANTS = {
  MOVES: {
    ROCK: 1,
    PAPER: 2,
    SCISSORS: 3,
  },
  GAME_TYPES: {
    ONE_ROUND: 0,
    BEST_OF_THREE: 1,
    BEST_OF_FIVE: 2,
  },
} as const;
