// Hook for watching game contract events

import { useWatchContractEvent } from 'wagmi';

interface UseGameEventsProps {
  contractAddress: `0x${string}`;
  abi: any[];
  onGameCreated?: (gameId: bigint, player1: string, stake: bigint, gameType: number) => void;
  onGameJoined?: (gameId: bigint, player2: string) => void;
  onRoundPlayed?: (gameId: bigint, roundNumber: number, player1Choice: number, player2Choice: number) => void;
  onGameEnded?: (gameId: bigint, winner: string, payout: bigint) => void;
  onPlayerMoved?: (gameId: bigint, player: string, choice: number) => void;
}

export function useGameEvents({
  contractAddress,
  abi,
  onGameCreated,
  onGameJoined,
  onRoundPlayed,
  onGameEnded,
  onPlayerMoved,
}: UseGameEventsProps) {
  // Watch for GameCreated events
  useWatchContractEvent({
    address: contractAddress,
    abi,
    eventName: 'GameCreated',
    onLogs(logs: any[]) {
      logs.forEach((log) => {
        if (onGameCreated) {
          onGameCreated(log.args.gameId, log.args.player1, log.args.stake, log.args.gameType);
        }
      });
    },
  });

  // Watch for GameJoined events
  useWatchContractEvent({
    address: contractAddress,
    abi,
    eventName: 'GameJoined',
    onLogs(logs: any[]) {
      logs.forEach((log) => {
        if (onGameJoined) {
          onGameJoined(log.args.gameId, log.args.player2);
        }
      });
    },
  });

  // Watch for RoundPlayed events
  useWatchContractEvent({
    address: contractAddress,
    abi,
    eventName: 'RoundPlayed',
    onLogs(logs: any[]) {
      logs.forEach((log) => {
        if (onRoundPlayed) {
          onRoundPlayed(
            log.args.gameId,
            log.args.roundNumber,
            log.args.player1Choice,
            log.args.player2Choice
          );
        }
      });
    },
  });

  // Watch for GameEnded events
  useWatchContractEvent({
    address: contractAddress,
    abi,
    eventName: 'GameEnded',
    onLogs(logs: any[]) {
      logs.forEach((log) => {
        if (onGameEnded) {
          onGameEnded(log.args.gameId, log.args.winner, log.args.payout);
        }
      });
    },
  });

  // Watch for PlayerMoved events
  useWatchContractEvent({
    address: contractAddress,
    abi,
    eventName: 'PlayerMoved',
    onLogs(logs: any[]) {
      logs.forEach((log) => {
        if (onPlayerMoved) {
          onPlayerMoved(log.args.gameId, log.args.player, log.args.choice);
        }
      });
    },
  });
}
