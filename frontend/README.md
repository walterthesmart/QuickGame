# QuickGame Frontend

Modern Next.js frontend for QuickGame - A blockchain-based gaming platform.

## Overview

This frontend provides a sleek, responsive interface for the QuickGame platform. Built with Next.js, TypeScript, and Tailwind CSS, it offers seamless Web3 integration through Wagmi and RainbowKit.

## Features

- **Modern UI/UX**: Clean, responsive design with Tailwind CSS
- **Web3 Integration**: Seamless wallet connection with RainbowKit
- **Multi-Network Support**: Arbitrum Sepolia, Linea Sepolia, BSC Testnet
- **Real-time Updates**: Live game state updates and notifications
- **Game History**: Track your gaming performance and statistics
- **Mobile Responsive**: Optimized for all device sizes

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Git
- A Web3 wallet (MetaMask, WalletConnect, etc.)

## Installation

1. **Navigate to frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` and configure:
   - WalletConnect Project ID
   - Contract addresses (updated after backend deployment)
   - Feature flags and settings

## Configuration

### Environment Variables

#### Required
- `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID`: Your WalletConnect project ID

#### Optional
- `NEXT_PUBLIC_CONTRACT_ADDRESS_*`: Contract addresses for different networks
- `NEXT_PUBLIC_*_RPC_URL`: Custom RPC URLs
- `NEXT_PUBLIC_ENABLE_*`: Feature flags
- `NEXT_PUBLIC_DEBUG_MODE`: Enable debug logging

### WalletConnect Setup

1. Visit [WalletConnect Cloud](https://cloud.walletconnect.com/)
2. Create a new project
3. Copy the Project ID to your `.env.local`

## Usage

### Development

Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building

Build for production:
```bash
npm run build
```

Start production server:
```bash
npm start
```

### Linting

Run ESLint:
```bash
npm run lint
```

## Project Structure

```
frontend/
├── src/
│   ├── components/         # React components
│   │   ├── ui/            # Reusable UI components
│   │   ├── game/          # Game-specific components
│   │   └── layout/        # Layout components
│   ├── pages/             # Next.js pages
│   ├── hooks/             # Custom React hooks
│   ├── utils/             # Utility functions
│   ├── types/             # TypeScript type definitions
│   ├── config/            # Configuration files
│   ├── constants/         # Contract ABIs and constants
│   ├── contracts/         # Contract integration
│   └── styles/            # Global styles
├── public/                # Static assets
│   ├── images/           # Image files
│   └── icons/            # Icon files
├── package.json          # Dependencies and scripts
├── next.config.js        # Next.js configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## Key Components

### Game Components
- **CreateGame**: Interface for creating new games
- **JoinGame**: Browse and join existing games
- **GameSearchCard**: Display game information and join options

### Layout Components
- **Layout**: Main application layout with navigation

### Hooks
- **useGameEvents**: Listen to contract events
- **useLocalStorage**: Persist data locally
- **useDebounce**: Debounce user inputs

## Web3 Integration

### Supported Networks

- **Arbitrum Sepolia** (Chain ID: 421614)
- **Linea Sepolia** (Chain ID: 59141)
- **BSC Testnet** (Chain ID: 97)

### Wallet Support

- MetaMask
- WalletConnect
- Coinbase Wallet
- Rainbow Wallet
- And more through RainbowKit

## Game Features

### Game Types
- **Quick Match**: Single round game
- **Best of Three**: First to win 2 rounds
- **Championship**: First to win 3 rounds

### Gameplay
1. Connect your wallet
2. Create a game or join an existing one
3. Make your move (Rock, Paper, or Scissors)
4. Wait for your opponent
5. See the results and claim your winnings!

## Styling

The application uses:
- **Tailwind CSS**: Utility-first CSS framework
- **Custom Components**: Reusable styled components
- **Responsive Design**: Mobile-first approach
- **Dark Theme**: Modern dark color scheme

## State Management

- **React State**: Local component state
- **Custom Hooks**: Shared state logic
- **Local Storage**: Persist user preferences
- **Wagmi**: Web3 state management

## Performance

- **Next.js Optimization**: Automatic code splitting and optimization
- **Image Optimization**: Next.js Image component
- **Bundle Analysis**: Analyze bundle size with `npm run analyze`

## Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Heroku

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Troubleshooting

### Common Issues

1. **Wallet connection fails**
   - Check WalletConnect Project ID
   - Ensure wallet is on the correct network

2. **Contract interactions fail**
   - Verify contract addresses are correct
   - Check network configuration
   - Ensure sufficient gas fees

3. **Build errors**
   - Clear Next.js cache: `rm -rf .next`
   - Reinstall dependencies: `rm -rf node_modules && npm install`

## Support

For support and questions:
- Create an issue on GitHub
- Join our Discord community
- Check the documentation

## License

MIT License - see LICENSE file for details
