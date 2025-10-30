# Hedera HashScan Contract Verification Guide

## Contract Information

### 1. TicketNft Contract
- **Address**: `0x03Dd1195E494A16Dd9fc6C6a66966e37F6b93031`
- **Contract Name**: `TicketNft`
- **Source File**: `contracts/TicketNft.sol`
- **Constructor Arguments**: 
  - `name_`: "Crown Ticket"
  - `symbol_`: "txFT" 
  - `imageUri_`: "https://example.com/ticket-image.png"

### 2. EventTicketing Contract
- **Address**: `0xe3B26f999bffe5c356C659487E5D44fe14d912EB`
- **Contract Name**: `EventTicketing`
- **Source File**: `contracts/EventTicketing.sol`
- **Constructor Arguments**:
  - `ticketNftAddress`: `0x03Dd1195E494A16Dd9fc6C6a66966e37F6b93031`
  - `feeRecipient_`: `0x87bC576575ff9fA1f582dCF6c052dE9a9A4313c7`
  - `feeBps`: `250` (2.5%)

### 3. TicketResaleMarket Contract
- **Address**: `0xc0ABf66a1D3eaf655827e054970150252a561B94`
- **Contract Name**: `TicketResaleMarket`
- **Source File**: `contracts/TicketResaleMarket.sol`
- **Constructor Arguments**:
  - `eventTicketingAddress`: `0xe3B26f999bffe5c356C659487E5D44fe14d912EB`
  - `ticketNftAddress`: `0x03Dd1195E494A16Dd9fc6C6a66966e37F6b93031`
  - `feeRecipient_`: `0x87bC576575ff9fA1f582dCF6c052dE9a9A4313c7`
  - `royaltyBps_`: `100` (1%)

## How to Verify on HashScan

1. **Go to HashScan Testnet**: https://hashscan.io/testnet
2. **Search for your contract address**
3. **Click "Verify Contract"** (if available)
4. **Upload the source code** from the files below
5. **Enter constructor arguments** as specified above

## Source Code Files

The source code files are located in:
- `/Users/MAC/Desktop/Crown/smcontract/contracts/TicketNft.sol`
- `/Users/MAC/Desktop/Crown/smcontract/contracts/EventTicketing.sol`
- `/Users/MAC/Desktop/Crown/smcontract/contracts/TicketResaleMarket.sol`

## Alternative: Use Hardhat Verify Plugin

If HashScan supports it, you can also try:
```bash
npx hardhat verify --network hederaTestnet <CONTRACT_ADDRESS> <CONSTRUCTOR_ARGS>
```

## Contract URLs on HashScan

- **TicketNft**: https://hashscan.io/testnet/address/0x03Dd1195E494A16Dd9fc6C6a66966e37F6b93031
- **EventTicketing**: https://hashscan.io/testnet/address/0xe3B26f999bffe5c356C659487E5D44fe14d912EB
- **TicketResaleMarket**: https://hashscan.io/testnet/address/0xc0ABf66a1D3eaf655827e054970150252a561B94
