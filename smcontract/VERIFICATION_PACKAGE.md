# Hedera Contract Verification Package

## Contract Information

### 1. TicketNft Contract
- **Address**: `0x03Dd1195E494A16Dd9fc6C6a66966e37F6b93031`
- **Contract Name**: `TicketNft`
- **Constructor Arguments**:
  - `name_`: "Crown Ticket"
  - `symbol_`: "txFT"
  - `imageUri_`: "ipfs://bafybeidjmguiviozpgptmvbkq4mzivq5vp3uktw3fuouzk2i25binmfyxy"

### 2. EventTicketing Contract
- **Address**: `0xe3B26f999bffe5c356C659487E5D44fe14d912EB`
- **Contract Name**: `EventTicketing`
- **Constructor Arguments**:
  - `ticketNftAddress`: `0x03Dd1195E494A16Dd9fc6C6a66966e37F6b93031`
  - `feeRecipient_`: `0x08d0d1572A8a714D90D670Ea344Dd23B1dF565Dd`
  - `feeBps`: `250`

### 3. TicketResaleMarket Contract
- **Address**: `0xc0ABf66a1D3eaf655827e054970150252a561B94`
- **Contract Name**: `TicketResaleMarket`
- **Constructor Arguments**:
  - `eventTicketingAddress`: `0xe3B26f999bffe5c356C659487E5D44fe14d912EB`
  - `ticketNftAddress`: `0x03Dd1195E494A16Dd9fc6C6a66966e37F6b93031`
  - `feeRecipient_`: `0x08d0d1572A8a714D90D670Ea344Dd23B1dF565Dd`
  - `royaltyBps_`: `250`

## Source Code Files

The following Solidity files need to be uploaded for verification:

1. **TicketNft.sol** - Main NFT contract
2. **EventTicketing.sol** - Main event ticketing contract
3. **TicketResaleMarket.sol** - Secondary marketplace contract
4. **Interface.sol** - Interface definitions
5. **Error.sol** - Custom error definitions
6. **EventTicketingLib.sol** - Library for event ticketing logic

## Dependencies

The contracts use OpenZeppelin libraries:
- @openzeppelin/contracts/token/ERC721/ERC721.sol
- @openzeppelin/contracts/access/Ownable.sol
- @openzeppelin/contracts/utils/Strings.sol
- @openzeppelin/contracts/utils/Base64.sol
- @openzeppelin/contracts/utils/ReentrancyGuard.sol
- @openzeppelin/contracts/token/ERC721/IERC721.sol

## Verification Steps

1. Go to https://hashscan.io/testnet
2. Search for each contract address
3. Click "Verify Contract" or "Verify & Publish"
4. Upload all source files
5. Enter constructor arguments exactly as specified above
6. Select compiler version: 0.8.28
7. Submit for verification

## HashScan URLs

- TicketNft: https://hashscan.io/testnet/address/0x03Dd1195E494A16Dd9fc6C6a66966e37F6b93031
- EventTicketing: https://hashscan.io/testnet/address/0xe3B26f999bffe5c356C659487E5D44fe14d912EB
- TicketResaleMarket: https://hashscan.io/testnet/address/0xc0ABf66a1D3eaf655827e054970150252a561B94
