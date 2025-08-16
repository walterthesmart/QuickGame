
# QuickGame - Full-Stack Blockchain Gaming Platform

A modern, decentralized gaming platform built on Ethereum-compatible networks. QuickGame combines the classic rock-paper-scissors gameplay with blockchain technology to ensure transparency, fairness, and true ownership of game outcomes.

## 🎮 Live Demo

**Smart Contract**: [View on Arbitrum Sepolia](https://sepolia.arbiscan.io/address/0x7296c77Edd04092Fd6a8117c7f797E0680d97fa1)

## 🏗️ Project Structure

This is a full-stack project organized into two main directories:

```
QuickGame/
├── backend/          # Smart contracts and blockchain infrastructure
│   ├── contracts/    # Solidity smart contracts
│   ├── scripts/      # Deployment and utility scripts
│   ├── test/         # Contract tests
│   └── README.md     # Backend documentation
├── frontend/         # Next.js web application
│   ├── src/          # Application source code
│   ├── public/       # Static assets
│   └── README.md     # Frontend documentation
└── README.md         # This file
```

## ✨ Features

### 🎯 Core Gameplay
- **Create Games**: Set custom stakes and choose from multiple game types
- **Join Games**: Browse and join existing games with matching stakes
- **Multiple Formats**: Quick Match, Best of Three, and Championship modes
- **Real-time Updates**: Live game status and move notifications

### 🔗 Blockchain Integration
- **Multi-Network Support**: Arbitrum Sepolia, Linea Sepolia, BSC Testnet
- **Transparent Gameplay**: All moves and outcomes recorded on-chain
- **Automated Payouts**: Smart contract handles prize distribution
- **Provably Fair**: Blockchain ensures game integrity

### 🎨 Modern Frontend
- **Responsive Design**: Optimized for desktop and mobile
- **Web3 Wallet Integration**: Support for MetaMask, WalletConnect, and more
- **Game History**: Track performance and view past results
- **Dark Theme**: Modern, sleek user interface

## 🚀 Quick Start

### Prerequisites
- Node.js (v18+)
- Git
- Web3 wallet (MetaMask recommended)

### Backend Setup (Smart Contracts)

1. **Navigate to backend:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment:**
   ```bash
   cp .env.example .env
   # Edit .env with your private key and RPC URLs
   ```

4. **Deploy contracts:**
   ```bash
   npm run deploy:arbitrum
   ```

### Frontend Setup (Web Application)

1. **Navigate to frontend:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment:**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your WalletConnect Project ID
   ```

4. **Start development server:**
   ```bash
   npm run dev
   ```

5. **Open application:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎮 How to Play

1. **Connect Wallet**: Link your Web3 wallet to the application
2. **Create or Join**: Start a new game or join an existing one
3. **Set Stakes**: Choose your wager amount (minimum 0.0001 ETH)
4. **Make Moves**: Select Rock, Paper, or Scissors
5. **Win Prizes**: Smart contract automatically distributes winnings!

## 🏗️ Architecture

### Backend (Smart Contracts)
- **Hardhat Framework**: Development and testing environment
- **Solidity Contracts**: Game logic and state management
- **Multi-Network Deployment**: Support for multiple EVM chains
- **Comprehensive Testing**: Full test suite with 95%+ coverage

### Frontend (Web Application)
- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling
- **Wagmi + RainbowKit**: Web3 integration layer

## 📋 Smart Contract Addresses

- **Arbitrum Sepolia**: `0x7296c77Edd04092Fd6a8117c7f797E0680d97fa1`
- **Linea Sepolia**: `0x7296c77Edd04092Fd6a8117c7f797E0680d97fa1`
- **BSC Testnet**: `0x7296c77Edd04092Fd6a8117c7f797E0680d97fa1`

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- 📖 **Documentation**: Check the README files in `/backend` and `/frontend`
- 🐛 **Issues**: Report bugs on [GitHub Issues](https://github.com/walterthesmart/QuickGame/issues)
- 💬 **Community**: Join our Discord server
- 📧 **Contact**: Reach out to the development team

---

**Built with ❤️ by the QuickGame Team**




