// Network configuration

export const CHAIN_IDS = {
  ARBITRUM_SEPOLIA: 421614,
  LINEA_SEPOLIA: 59141,
  BSC_TESTNET: 97,
} as const;

export const NETWORK_CONFIGS = {
  [CHAIN_IDS.ARBITRUM_SEPOLIA]: {
    name: 'Arbitrum Sepolia',
    rpcUrl: 'https://sepolia-rollup.arbitrum.io/rpc',
    blockExplorer: 'https://sepolia.arbiscan.io',
    nativeCurrency: {
      name: 'Ethereum',
      symbol: 'ETH',
      decimals: 18,
    },
  },
  [CHAIN_IDS.LINEA_SEPOLIA]: {
    name: 'Linea Sepolia',
    rpcUrl: 'https://rpc.sepolia.linea.build',
    blockExplorer: 'https://sepolia.lineascan.build',
    nativeCurrency: {
      name: 'Ethereum',
      symbol: 'ETH',
      decimals: 18,
    },
  },
  [CHAIN_IDS.BSC_TESTNET]: {
    name: 'BSC Testnet',
    rpcUrl: 'https://data-seed-prebsc-1-s1.binance.org:8545',
    blockExplorer: 'https://testnet.bscscan.com',
    nativeCurrency: {
      name: 'Binance Coin',
      symbol: 'BNB',
      decimals: 18,
    },
  },
} as const;
