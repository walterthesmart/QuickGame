// API and blockchain-related types

export interface ContractConfig {
  address: `0x${string}`;
  abi: any[];
  networkName: string;
}

export interface NetworkConfig {
  chainId: number;
  name: string;
  rpcUrl: string;
  blockExplorer: string;
}

export interface TransactionResult {
  hash: string;
  status: 'pending' | 'success' | 'failed';
  blockNumber?: number;
}

export interface ErrorResponse {
  message: string;
  code?: string | number;
  details?: any;
}
