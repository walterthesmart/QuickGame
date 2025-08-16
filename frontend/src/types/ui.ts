// UI component prop types and interfaces

import { Game } from './game';

export interface GameSearchCardProps {
  game: Game | undefined;
  onJoinGame: (gameId: bigint, stake: bigint) => void;
  isLoading: boolean;
  userAddress: `0x${string}` | undefined;
}

export interface GameHistoryCardProps {
  game: Game;
  userAddress: `0x${string}` | undefined;
}

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}
