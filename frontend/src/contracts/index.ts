// Contract configuration that references backend-generated files

import { CHAIN_IDS } from '../config/networks';

// Import contract artifacts from backend (these will be generated after deployment)
// For now, we'll use the existing contract info as fallback

// Fallback contract configurations (will be replaced by backend-generated files)
import { abi as arbitrumAbi, contractAddress as arbitrumAddress } from '../constants/contractInfo';
import { abi as lineaAbi, contractAddress as lineaAddress } from '../constants/contractInfoLinea';
import { abi as bscAbi, contractAddress as bscAddress } from '../constants/contractInfoBsc';

export interface ContractInfo {
  contractAddress: `0x${string}`;
  abi: any[];
  networkName: string;
  chainId: number;
}

// Contract addresses for different networks
export const CONTRACT_ADDRESSES = {
  [CHAIN_IDS.ARBITRUM_SEPOLIA]: arbitrumAddress,
  [CHAIN_IDS.LINEA_SEPOLIA]: lineaAddress,
  [CHAIN_IDS.BSC_TESTNET]: bscAddress,
} as const;

// Function to get contract info based on chain ID
export const getContractInfo = (chainId?: number): ContractInfo => {
  switch (chainId) {
    case CHAIN_IDS.LINEA_SEPOLIA:
      return {
        contractAddress: lineaAddress,
        abi: lineaAbi,
        networkName: 'Linea Sepolia',
        chainId: CHAIN_IDS.LINEA_SEPOLIA,
      };
    case CHAIN_IDS.BSC_TESTNET:
      return {
        contractAddress: bscAddress,
        abi: bscAbi,
        networkName: 'BSC Testnet',
        chainId: CHAIN_IDS.BSC_TESTNET,
      };
    default:
      return {
        contractAddress: arbitrumAddress,
        abi: arbitrumAbi,
        networkName: 'Arbitrum Sepolia',
        chainId: CHAIN_IDS.ARBITRUM_SEPOLIA,
      };
  }
};

// Function to load contract info from backend-generated files
export const loadContractFromBackend = async (networkName: string): Promise<ContractInfo | null> => {
  try {
    // Try to load from backend-generated contract files
    const response = await fetch(`/contracts/QuickGame-${networkName}.json`);
    if (response.ok) {
      const contractInfo = await response.json();
      return contractInfo;
    }
  } catch (error) {
    console.warn(`Could not load contract info for ${networkName} from backend:`, error);
  }
  return null;
};

// Enhanced function that tries backend first, then falls back to hardcoded values
export const getContractInfoWithBackendFallback = async (chainId?: number): Promise<ContractInfo> => {
  const fallbackInfo = getContractInfo(chainId);
  
  try {
    const backendInfo = await loadContractFromBackend(fallbackInfo.networkName);
    if (backendInfo) {
      return backendInfo;
    }
  } catch (error) {
    console.warn('Failed to load from backend, using fallback:', error);
  }
  
  return fallbackInfo;
};
