# QuickGame Backend

Smart contract backend for QuickGame - A blockchain-based gaming platform built with Hardhat.

## Overview

This backend contains the smart contracts, deployment scripts, and testing infrastructure for the QuickGame platform. The contracts are designed to run on multiple EVM-compatible networks including Arbitrum Sepolia, Linea Sepolia, and BSC Testnet.

## Features

- **QuickGame Smart Contract**: Core game logic for rock-paper-scissors gameplay
- **Multi-Network Support**: Deploy to Arbitrum Sepolia, Linea Sepolia, and BSC Testnet
- **Comprehensive Testing**: Full test suite with Hardhat and Chai
- **Automated Deployment**: Scripts for deployment and verification
- **Gas Optimization**: Optimized contracts for minimal gas usage

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Git

## Installation

1. **Clone the repository and navigate to backend:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your:
   - Private key (without 0x prefix)
   - RPC URLs for different networks
   - API keys for contract verification

## Configuration

### Environment Variables

- `PRIVATE_KEY`: Your wallet private key for deployment
- `ARBITRUM_SEPOLIA_RPC_URL`: RPC URL for Arbitrum Sepolia
- `LINEA_SEPOLIA_RPC_URL`: RPC URL for Linea Sepolia
- `BSC_TESTNET_RPC_URL`: RPC URL for BSC Testnet
- `ARBISCAN_API_KEY`: API key for Arbitrum contract verification
- `LINEASCAN_API_KEY`: API key for Linea contract verification
- `BSCSCAN_API_KEY`: API key for BSC contract verification

## Usage

### Compile Contracts

```bash
npm run compile
```

### Run Tests

```bash
npm run test
```

### Deploy Contracts

Deploy to Arbitrum Sepolia:
```bash
npm run deploy:arbitrum
```

Deploy to Linea Sepolia:
```bash
npm run deploy:linea
```

Deploy to BSC Testnet:
```bash
npm run deploy:bsc
```

### Verify Contracts

After deployment, verify the contract on the block explorer:
```bash
npm run verify
```

### Local Development

Start a local Hardhat node:
```bash
npm run node
```

Deploy to local network:
```bash
npm run deploy
```

## Project Structure

```
backend/
├── contracts/          # Smart contracts
│   └── QuickGame.sol   # Main game contract
├── scripts/            # Deployment scripts
│   ├── deploy.js       # Main deployment script
│   └── verify.js       # Contract verification script
├── test/               # Test files
│   └── QuickGame.test.js
├── deployments/        # Deployment artifacts (generated)
├── artifacts/          # Compiled contracts (generated)
├── cache/              # Hardhat cache (generated)
├── hardhat.config.js   # Hardhat configuration
├── package.json        # Dependencies and scripts
└── .env.example        # Environment variables template
```

## Smart Contract Details

### QuickGame Contract

The main contract implements:
- Game creation with customizable stakes and game types
- Player joining and move submission
- Automated game resolution and payout
- Game history tracking
- Multi-round game support (Best of 3, Best of 5)

### Game Types

- **Quick Match (0)**: Single round game
- **Best of Three (1)**: First to win 2 rounds
- **Championship (2)**: First to win 3 rounds

### Moves

- **Rock (1)**: Beats Scissors
- **Paper (2)**: Beats Rock
- **Scissors (3)**: Beats Paper

## Testing

The test suite covers:
- Contract deployment
- Game creation and joining
- Move submission and validation
- Game resolution and payouts
- Edge cases and error conditions

Run tests with coverage:
```bash
npm run coverage
```

## Deployment

Deployment automatically:
1. Compiles the contracts
2. Deploys to the specified network
3. Saves deployment information
4. Generates ABI files for the frontend
5. Creates contract configuration files

## Security

- Contracts use OpenZeppelin's security patterns
- ReentrancyGuard protection on critical functions
- Proper access controls and validation
- Comprehensive test coverage

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Run the test suite
6. Submit a pull request

## Troubleshooting

### Common Issues

1. **Deployment fails with "insufficient funds"**
   - Ensure your wallet has enough ETH/BNB for gas fees
   - Check the gas price settings in hardhat.config.js

2. **Contract verification fails**
   - Verify you have the correct API key for the network
   - Ensure the contract was compiled with the same Solidity version

3. **Tests fail**
   - Run `npm run clean` to clear cache
   - Ensure all dependencies are installed

## Support

For support and questions:
- Create an issue on GitHub
- Join our Discord community
- Check the documentation

## License

MIT License - see LICENSE file for details
