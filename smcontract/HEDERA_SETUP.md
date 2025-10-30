# Hedera Deployment Guide

## Required Environment Variables

To deploy your Crown project on Hedera, you need to create a `.env` file in the `smcontract` directory with the following variables:

### 1. HEDERA_PRIVATE_KEY
- **What it is**: Your Hedera account's private key
- **Format**: DER-encoded private key (starts with `302e020100300506032b657004220420`)
- **How to get it**: 
  1. Go to [Hedera Portal](https://portal.hedera.com/)
  2. Create an account or import existing
  3. Export your private key

### 2. HEDERA_ACCOUNT_ID
- **What it is**: Your Hedera account identifier
- **Format**: `0.0.1234567` (account.shard.realm.number)
- **How to get it**: 
  1. From Hedera Portal dashboard
  2. Or from HashScan explorer when you create an account

## Step-by-Step Setup

### Step 1: Create Hedera Account
1. Visit [Hedera Portal](https://portal.hedera.com/)
2. Click "Create Account" or "Import Account"
3. Save your **Account ID** and **Private Key** securely

### Step 2: Get Testnet HBAR
1. Go to [Hedera Testnet Faucet](https://portal.hedera.com/faucet)
2. Enter your Account ID
3. Request testnet HBAR (free)

### Step 3: Create .env File
```bash
cd /Users/MAC/Desktop/Crown/smcontract
cp .env.example .env
```

### Step 4: Edit .env File
Replace the placeholder values with your actual credentials:
```env
HEDERA_PRIVATE_KEY=302e020100300506032b657004220420YOUR_ACTUAL_PRIVATE_KEY
HEDERA_ACCOUNT_ID=0.0.YOUR_ACTUAL_ACCOUNT_ID
```

### Step 5: Deploy Contracts
```bash
npm run deploy:hedera:testnet
```

## Security Notes

⚠️ **IMPORTANT SECURITY WARNINGS:**
- Never commit your `.env` file to version control
- Keep your private keys secure
- Use testnet for development, mainnet for production
- Consider using a hardware wallet for mainnet

## Troubleshooting

### Common Issues:

1. **"Insufficient balance"**
   - Get more testnet HBAR from the faucet
   - Check your account ID is correct

2. **"Invalid private key"**
   - Ensure private key is DER-encoded format
   - Check for extra spaces or characters

3. **"Account not found"**
   - Verify your Account ID format (0.0.1234567)
   - Make sure account exists on testnet

## Network Information

- **Hedera Testnet**: Chain ID 296
- **Hedera Mainnet**: Chain ID 295
- **Explorer**: [HashScan](https://hashscan.io/)
- **Mirror Node**: [Mirror Node API](https://docs.hedera.com/hedera/mirror-node-api/)

## Next Steps After Deployment

1. Update contract addresses in `abiAndAddress.ts`
2. Test your contracts on Hedera testnet
3. Update frontend to use Hedera network
4. Deploy to mainnet when ready for production
