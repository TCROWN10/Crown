# 👑 Crown - Decentralized Event Ticketing Platform

Crown is a next-generation event ticketing platform built on Hedera Hashgraph, leveraging blockchain technology to provide secure, transparent, and fraud-proof NFT tickets.

## 🌟 Features

- **NFT-Based Tickets**: Each ticket is a unique, verifiable NFT on the Hedera blockchain
- **Resellable Marketplace**: Trade tickets freely on the decentralized marketplace
- **Fraud-Proof**: Blockchain technology ensures authenticity and prevents counterfeiting
- **Low Fees**: Leverage Hedera's low and fixed transaction fees
- **Fast Transactions**: 10k+ TPS with instant finality
- **HBAR Integration**: Native support for HBAR payments

## 🏗️ Architecture

### Frontend
- **Framework**: Next.js 15 with React
- **Blockchain Integration**: Wagmi + RainbowKit
- **Network**: Hedera Testnet
- **Styling**: Tailwind CSS

### Smart Contracts
- **Platform**: Hedera Hashgraph (EVM-compatible)
- **Language**: Solidity 0.8.28
- **Framework**: Hardhat
- **Contracts**:
  - `TicketNft.sol` - ERC721 NFT ticket contract
  - `EventTicketing.sol` - Event creation and management
  - `TicketResaleMarket.sol` - Secondary marketplace

## 📋 Prerequisites

- Node.js 18+ and npm
- Hedera Testnet account with HBAR
- MetaMask or compatible wallet

## 🚀 Getting Started

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Visit `http://localhost:3000` to view the application.

### Smart Contract Setup

```bash
cd smcontract
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your Hedera credentials

# Compile contracts
npx hardhat compile

# Deploy to Hedera Testnet
npm run deploy:hedera:testnet
```

## 📁 Project Structure

```
Crown/
├── frontend/          # Next.js frontend application
│   ├── src/
│   │   ├── app/      # Next.js app router pages
│   │   ├── components/  # React components
│   │   ├── hooks/    # Custom React hooks
│   │   └── lib/      # Utilities and ABIs
│   └── public/       # Static assets
│
└── smcontract/       # Smart contracts
    ├── contracts/    # Solidity source files
    ├── scripts/      # Deployment scripts
    └── ignition/     # Hardhat Ignition modules
```

## 🔗 Deployed Contracts (Hedera Testnet)

- **TicketNft**: `0x03Dd1195E494A16Dd9fc6C6a66966e37F6b93031`
- **EventTicketing**: `0xe3B26f999bffe5c356C659487E5D44fe14d912EB`
- **TicketResaleMarket**: `0xc0ABf66a1D3eaf655827e054970150252a561B94`

**Block Explorer**: [HashScan Testnet](https://hashscan.io/testnet)

## 🛠️ Development

### Frontend Development
```bash
cd frontend
npm run dev        # Start development server
npm run build      # Build for production
npm run lint       # Run ESLint
```

### Smart Contract Development
```bash
cd smcontract
npx hardhat compile      # Compile contracts
npx hardhat test         # Run tests
npx hardhat node         # Start local node
```

## 📚 Resources

- [Hedera Documentation](https://docs.hedera.com/hedera)
- [Hardhat Documentation](https://hardhat.org/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Wagmi Documentation](https://wagmi.sh)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License.

## 👑 Built with Crown

The future of event ticketing is here. Secure, transparent, and decentralized.

