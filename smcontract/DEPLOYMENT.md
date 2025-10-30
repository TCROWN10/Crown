# Deployment Guide for Hedera Network

## Prerequisites

1. Get HBAR tokens for Hedera Testnet from https://portal.hedera.com/faucet
2. Have HBAR on Hedera Testnet for deployment and testing

## Setup

### 1. Set your Hedera private key and account ID in .env file:

```bash
HEDERA_PRIVATE_KEY=your_hedera_private_key
HEDERA_ACCOUNT_ID=your_hedera_account_id
```

### 2. Update the deployer address in the deployment script

Edit `ignition/modules/EventTicketing.ts` and update the `deployerAddress` to your wallet address (the one that will receive platform fees).

## Deploy to Hedera Testnet

```bash
npx hardhat ignition deploy ./ignition/modules/EventTicketing.ts --network hederaTestnet
```

## Deploy to Hedera Mainnet

```bash
npx hardhat ignition deploy ./ignition/modules/EventTicketing.ts --network hederaMainnet
```

## Verify Contracts

After deployment, verify the contracts on HashScan:

### For Hedera Testnet:
```bash
npx hardhat verify --network hederaTestnet <CONTRACT_ADDRESS> <CONSTRUCTOR_ARGS>
```

### For Hedera Mainnet:
```bash
npx hardhat verify --network hederaMainnet <CONTRACT_ADDRESS> <CONSTRUCTOR_ARGS>
```

## Network Information

- **Hedera Testnet**
  - Chain ID: 296
  - RPC: https://testnet.hashio.io/api
  - Explorer: https://hashscan.io/testnet
  - Faucet: https://portal.hedera.com/faucet

- **Hedera Mainnet**
  - Chain ID: 295
  - RPC: https://mainnet.hashio.io/api
  - Explorer: https://hashscan.io/mainnet

## Contract Addresses

### Hedera Testnet (Current)
- **TicketNFT**: `0x03Dd1195E494A16Dd9fc6C6a66966e37F6b93031` ([View on HashScan](https://hashscan.io/testnet/address/0x03Dd1195E494A16Dd9fc6C6a66966e37F6b93031#code))
- **EventTicketing**: `0xe3B26f999bffe5c356C659487E5D44fe14d912EB` ([View on HashScan](https://hashscan.io/testnet/address/0xe3B26f999bffe5c356C659487E5D44fe14d912EB#code))
- **TicketResaleMarket**: `0xc0ABf66a1D3eaf655827e054970150252a561B94` ([View on HashScan](https://hashscan.io/testnet/address/0xc0ABf66a1D3eaf655827e054970150252a561B94#code))

### Legacy Base Sepolia (Deprecated)
- **TicketNFT**: `0x8486E62b5975A4241818b564834A5f51ae2540B6` ([View on BaseScan](https://sepolia.basescan.org/address/0x8486E62b5975A4241818b564834A5f51ae2540B6#code))
- **EventTicketing**: `0xe3D37E5c036CC0bb4E0A170D49cc9212ABc8f985` ([View on BaseScan](https://sepolia.basescan.org/address/0xe3D37E5c036CC0bb4E0A170D49cc9212ABc8f985#code))
- **TicketResaleMarket**: `0x7BEe53CBeF0580Fdd2Bf1794E8111Ee8Fc93ed43` ([View on BaseScan](https://sepolia.basescan.org/address/0x7BEe53CBeF0580Fdd2Bf1794E8111Ee8Fc93ed43#code))

All contracts are verified and ready to use!

### Base Mainnet
- TicketNFT: (Not deployed yet)
- EventTicketing: (Not deployed yet)
- TicketResaleMarket: (Not deployed yet)
