// Game-related utility functions

import { MoveType, GameTypeInfo } from '../types/game';

/**
 * Gets game type information based on the type number
 * @param type - The game type number (0, 1, 2)
 * @returns Game type information object
 */
export function getGameTypeInfo(type: number): GameTypeInfo {
  switch (Number(type)) {
    case 0:
      return {
        name: 'Quick Match',
        rounds: 1,
        icon: null, // Will be filled with actual icon component
      };
    case 1:
      return {
        name: 'Best of Three',
        rounds: 3,
        icon: null,
      };
    case 2:
      return {
        name: 'Championship',
        rounds: 5,
        icon: null,
      };
    default:
      return {
        name: 'Unknown',
        rounds: 0,
        icon: null,
      };
  }
}

/**
 * Gets the move icon emoji based on move number
 * @param move - The move number (1=Rock, 2=Paper, 3=Scissors)
 * @returns Move emoji
 */
export function getMoveIcon(move: number): string {
  switch (Number(move)) {
    case 1:
      return '🗿';
    case 2:
      return '📄';
    case 3:
      return '✂️';
    default:
      return '❓';
  }
}

/**
 * Determines the winner of a round
 * @param move1 - Player 1's move
 * @param move2 - Player 2's move
 * @returns 1 if player 1 wins, 2 if player 2 wins, 0 for tie
 */
export function determineRoundWinner(move1: number, move2: number): number {
  if (move1 === move2) return 0; // Tie
  
  if (
    (move1 === 1 && move2 === 3) || // Rock beats Scissors
    (move1 === 2 && move2 === 1) || // Paper beats Rock
    (move1 === 3 && move2 === 2)    // Scissors beats Paper
  ) {
    return 1; // Player 1 wins
  }
  
  return 2; // Player 2 wins
}

/**
 * Maps move type to number
 * @param move - The move type
 * @returns Move number
 */
export function getMoveNumber(move: MoveType): number {
  const moveMapping = {
    Rock: 1,
    Paper: 2,
    Scissors: 3,
  };
  return moveMapping[move];
}

/**
 * Maps move number to type
 * @param moveNumber - The move number
 * @returns Move type
 */
export function getMoveType(moveNumber: number): MoveType {
  switch (moveNumber) {
    case 1:
      return 'Rock';
    case 2:
      return 'Paper';
    case 3:
      return 'Scissors';
    default:
      return 'Rock';
  }
}
