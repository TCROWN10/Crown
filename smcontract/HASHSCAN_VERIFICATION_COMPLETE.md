# Hedera HashScan Contract Verification Guide

## Contract Information & Constructor Arguments

### 1. TicketNft Contract
- **Address**: `0x03Dd1195E494A16Dd9fc6C6a66966e37F6b93031`
- **Contract Name**: `TicketNft`
- **Source File**: `contracts/TicketNft.sol`
- **Constructor Arguments** (exact from deployment):
  - `name_`: "Crown Ticket"
  - `symbol_`: "txFT" 
  - `imageUri_`: "ipfs://bafybeidjmguiviozpgptmvbkq4mzivq5vp3uktw3fuouzk2i25binmfyxy"

### 2. EventTicketing Contract
- **Address**: `0xe3B26f999bffe5c356C659487E5D44fe14d912EB`
- **Contract Name**: `EventTicketing`
- **Source File**: `contracts/EventTicketing.sol`
- **Constructor Arguments** (exact from deployment):
  - `ticketNftAddress`: `0x03Dd1195E494A16Dd9fc6C6a66966e37F6b93031`
  - `feeRecipient_`: `0x08d0d1572A8a714D90D670Ea344Dd23B1dF565Dd`
  - `feeBps`: `250` (2.5%)

### 3. TicketResaleMarket Contract
- **Address**: `0xc0ABf66a1D3eaf655827e054970150252a561B94`
- **Contract Name**: `TicketResaleMarket`
- **Source File**: `contracts/TicketResaleMarket.sol`
- **Constructor Arguments** (exact from deployment):
  - `eventTicketingAddress`: `0xe3B26f999bffe5c356C659487E5D44fe14d912EB`
  - `ticketNftAddress`: `0x03Dd1195E494A16Dd9fc6C6a66966e37F6b93031`
  - `feeRecipient_`: `0x08d0d1572A8a714D90D670Ea344Dd23B1dF565Dd`
  - `royaltyBps_`: `250` (2.5%)

## How to Verify on HashScan

### Method 1: Manual Verification
1. **Go to HashScan Testnet**: https://hashscan.io/testnet
2. **Search for your contract address**
3. **Click "Verify Contract"** (if available)
4. **Upload the source code** from the files below
5. **Enter constructor arguments** as specified above

### Method 2: Using Hardhat Verify (if supported)
```bash
# For TicketNft
npx hardhat verify --network hederaTestnet 0x03Dd1195E494A16Dd9fc6C6a66966e37F6b93031 "Crown Ticket" "txFT" "ipfs://bafybeidjmguiviozpgptmvbkq4mzivq5vp3uktw3fuouzk2i25binmfyxy"

# For EventTicketing
npx hardhat verify --network hederaTestnet 0xe3B26f999bffe5c356C659487E5D44fe14d912EB 0x03Dd1195E494A16Dd9fc6C6a66966e37F6b93031 0x08d0d1572A8a714D90D670Ea344Dd23B1dF565Dd 250

# For TicketResaleMarket
npx hardhat verify --network hederaTestnet 0xc0ABf66a1D3eaf655827e054970150252a561B94 0xe3B26f999bffe5c356C659487E5D44fe14d912EB 0x03Dd1195E494A16Dd9fc6C6a66966e37F6b93031 0x08d0d1572A8a714D90D670Ea344Dd23B1dF565Dd 250
```

## Source Code Files

The source code files are located in:
- `/Users/MAC/Desktop/Crown/smcontract/contracts/TicketNft.sol`
- `/Users/MAC/Desktop/Crown/smcontract/contracts/EventTicketing.sol`
- `/Users/MAC/Desktop/Crown/smcontract/contracts/TicketResaleMarket.sol`

## Contract URLs on HashScan

- **TicketNft**: https://hashscan.io/testnet/address/0x03Dd1195E494A16Dd9fc6C6a66966e37F6b93031
- **EventTicketing**: https://hashscan.io/testnet/address/0xe3B26f999bffe5c356C659487E5D44fe14d912EB
- **TicketResaleMarket**: https://hashscan.io/testnet/address/0xc0ABf66a1D3eaf655827e054970150252a561B94

## Important Notes

1. **Constructor Arguments**: The arguments above are the EXACT values used during deployment
2. **Fee Recipient**: `0x08d0d1572A8a714D90D670Ea344Dd23B1dF565Dd` (this appears to be a different address than your account)
3. **IPFS URI**: The image URI uses IPFS instead of a regular HTTP URL
4. **Fee Values**: Both EventTicketing and TicketResaleMarket use 250 basis points (2.5%) for fees

## Verification Status

✅ **Contracts Deployed**: All three contracts are successfully deployed
❌ **Source Code Verified**: Not yet verified on HashScan (ABI not visible)
🔄 **Next Step**: Manual verification on HashScan using the information above
