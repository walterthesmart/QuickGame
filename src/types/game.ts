// Game-related types and interfaces

export interface Game {
  choices: number[];
  gameId: bigint; 
  gameType: number;
  isActive: boolean;
  lastPlayerMove: string;
  player1Moves: number[];
  player2Moves: number[];
  players: string[];
  roundsPlayed: number;
  scores: number[];
  stake: bigint; 
}

export type MoveType = 'Rock' | 'Paper' | 'Scissors';

export type GameType = 'OneRound' | 'BestOfThree' | 'BestOfFive';

export interface GameTypeInfo {
  name: string;
  rounds: number;
  icon: React.ReactNode;
  bgColor?: string;
}

export interface MoveColor {
  bg: string;
  text: string;
  iconBg: string;
}
