# 🔗 HashPack Wallet Integration

Crown now supports **HashPack Wallet** - the native Hedera wallet, alongside existing wallet options!

## ✅ **What Was Added**

### 1. **HashPack Hook** (`use-hashpack.ts`)
- Detects HashPack browser extension
- Handles wallet connection/disconnection
- Manages account state
- Listens for account changes

### 2. **HashPack Button Component** (`hashpack-button.tsx`)
- Standalone HashPack connect button
- Shows installation prompt if HashPack not found
- Displays connected account
- Handles connect/disconnect actions

### 3. **Wallet Selector Component** (`wallet-selector.tsx`)
- Combined wallet selector
- Choose between RainbowKit (MetaMask/WalletConnect) or HashPack
- Easy wallet switching

## 🚀 **How to Use**

### For Users:
1. **Install HashPack Wallet**:
   - Visit [hashpack.app](https://hashpack.app)
   - Install the browser extension
   - Create/import your Hedera account

2. **Connect to Crown**:
   - Click "Connect Wallet"
   - Select "HashPack Wallet"
   - Approve the connection

### For Developers:
```typescript
// Import the HashPack hook
import { useHashPack } from '@/hooks/use-hashpack'

// Use in your component
const { 
  isHashPackInstalled, 
  isConnected, 
  account, 
  connectHashPack, 
  disconnectHashPack 
} = useHashPack()

// Or use the button component
import { HashPackButton } from '@/components/hashpack-button'
```

## 🎯 **Features**

- ✅ **Native Hedera Support**: Direct integration with Hedera network
- ✅ **Automatic Detection**: Detects if HashPack is installed
- ✅ **Account Management**: Handles connection and disconnection
- ✅ **Error Handling**: User-friendly error messages
- ✅ **Installation Prompt**: Guides users to install HashPack if not found

## 📝 **Current Status**

- ✅ HashPack detection implemented
- ✅ Connection flow implemented
- ✅ Button component created
- ✅ Wallet selector created
- ✅ Documentation updated

## 🔄 **Next Steps**

You can now:
1. Update any component to use `WalletSelector` instead of just `ConnectButton`
2. Or use `HashPackButton` directly for HashPack-only connection
3. Or use `WalletConnectButton` for RainbowKit wallets

## 💡 **Why HashPack?**

- **Native Hedera Wallet**: Built specifically for Hedera Hashgraph
- **Better UX**: Optimized for HBAR transactions
- **Official Support**: Recommended by Hedera for dApps
- **Feature Rich**: Built-in NFT support, staking, and more

## 📚 **Resources**

- [HashPack Wallet](https://hashpack.app)
- [HashPack Documentation](https://docs.hashpack.app)
- [Hedera Documentation](https://docs.hedera.com)

---

**Your Crown platform now supports both HashPack and RainbowKit wallets!** 👑✨

