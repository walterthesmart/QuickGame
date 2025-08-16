import { abi as lineaAbi, contractAddress as lineaAddress, networkName as lineaNetworkName } from './contractInfoLinea';
import { abi as bscAbi, contractAddress as bscAddress, networkName as bscNetworkName } from './contractInfoBsc';
import { abi as defaultAbi, contractAddress as defaultAddress, networkName as defaultNetworkName } from './contractInfo';

// Linea Sepolia chain ID
const LINEA_SEPOLIA_CHAIN_ID = 59141;
// BSC Testnet chain ID 
const BSC_TESTNET_CHAIN_ID = 97;

export const getContractInfo = (chainId?: number) => {
  switch (chainId) {
    case LINEA_SEPOLIA_CHAIN_ID:
      return {
        abi: lineaAbi,
        contractAddress: lineaAddress,
        networkName: lineaNetworkName
      };
    case BSC_TESTNET_CHAIN_ID:
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