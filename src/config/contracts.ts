// Contract configuration

import { abi as lineaAbi, contractAddress as lineaAddress, networkName as lineaNetworkName } from '../constants/contractInfoLinea';
import { abi as bscAbi, contractAddress as bscAddress, networkName as bscNetworkName } from '../constants/contractInfoBsc';
import { abi as defaultAbi, contractAddress as defaultAddress, networkName as defaultNetworkName } from '../constants/contractInfo';
import { CHAIN_IDS } from './networks';

export const CONTRACT_ADDRESSES = {
  [CHAIN_IDS.ARBITRUM_SEPOLIA]: defaultAddress,
  [CHAIN_IDS.LINEA_SEPOLIA]: lineaAddress,
  [CHAIN_IDS.BSC_TESTNET]: bscAddress,
} as const;

export const getContractInfo = (chainId?: number) => {
  switch (chainId) {
    case CHAIN_IDS.LINEA_SEPOLIA:
      return {
        abi: lineaAbi,
        contractAddress: lineaAddress,
        networkName: lineaNetworkName
      };
    case CHAIN_IDS.BSC_TESTNET:
      return {
        abi: bscAbi,
        contractAddress: bscAddress,
        networkName: bscNetworkName
      };
    default:
      return {
        abi: defaultAbi,
        contractAddress: defaultAddress,
        networkName: defaultNetworkName
      };
  }
};
