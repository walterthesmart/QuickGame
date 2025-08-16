// Environment configuration

export const ENV = {
  // Application
  APP_NAME: process.env.NEXT_PUBLIC_APP_NAME || 'QuickGame',
  APP_VERSION: process.env.NEXT_PUBLIC_APP_VERSION || '1.0.0',
  
  // Network
  DEFAULT_CHAIN_ID: parseInt(process.env.NEXT_PUBLIC_DEFAULT_CHAIN_ID || '421614'),
  ENABLE_TESTNETS: process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true',
  
  // Contract Addresses
  CONTRACT_ADDRESSES: {
    ARBITRUM_SEPOLIA: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS_ARBITRUM_SEPOLIA as `0x${string}` || '0x7296c77Edd04092Fd6a8117c7f797E0680d97fa1',
    LINEA_SEPOLIA: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS_LINEA_SEPOLIA as `0x${string}` || '0x7296c77Edd04092Fd6a8117c7f797E0680d97fa1',
    BSC_TESTNET: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS_BSC_TESTNET as `0x${string}` || '0x7296c77Edd04092Fd6a8117c7f797E0680d97fa1',
  },
  
  // RPC URLs
  RPC_URLS: {
    ARBITRUM_SEPOLIA: process.env.NEXT_PUBLIC_ARBITRUM_SEPOLIA_RPC_URL || 'https://sepolia-rollup.arbitrum.io/rpc',
    LINEA_SEPOLIA: process.env.NEXT_PUBLIC_LINEA_SEPOLIA_RPC_URL || 'https://rpc.sepolia.linea.build',
    BSC_TESTNET: process.env.NEXT_PUBLIC_BSC_TESTNET_RPC_URL || 'https://data-seed-prebsc-1-s1.binance.org:8545',
  },
  
  // External Services
  WALLETCONNECT_PROJECT_ID: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || '',
  GOOGLE_ANALYTICS_ID: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || '',
  SENTRY_DSN: process.env.NEXT_PUBLIC_SENTRY_DSN || '',
  
  // Feature Flags
  FEATURES: {
    GAME_HISTORY: process.env.NEXT_PUBLIC_ENABLE_GAME_HISTORY !== 'false',
    LEADERBOARD: process.env.NEXT_PUBLIC_ENABLE_LEADERBOARD !== 'false',
    NOTIFICATIONS: process.env.NEXT_PUBLIC_ENABLE_NOTIFICATIONS !== 'false',
  },
  
  // Development
  DEBUG_MODE: process.env.NEXT_PUBLIC_DEBUG_MODE === 'true',
  SHOW_TESTNET_WARNING: process.env.NEXT_PUBLIC_SHOW_TESTNET_WARNING !== 'false',
  IS_DEVELOPMENT: process.env.NODE_ENV === 'development',
  IS_PRODUCTION: process.env.NODE_ENV === 'production',
} as const;

// Validation function to check required environment variables
export const validateEnv = () => {
  const requiredVars = [
    'NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID',
  ];
  
  const missingVars = requiredVars.filter(varName => !process.env[varName]);
  
  if (missingVars.length > 0) {
    console.warn('Missing required environment variables:', missingVars);
    if (ENV.IS_PRODUCTION) {
      throw new Error(`Missing required environment variables: ${missingVars.join(', ')}`);
    }
  }
};

// Auto-validate on import in production
if (ENV.IS_PRODUCTION) {
  validateEnv();
}
