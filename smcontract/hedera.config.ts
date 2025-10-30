import { Client, AccountId, PrivateKey, Hbar } from "@hashgraph/sdk";

// Hedera Configuration
export const HEDERA_CONFIG = {
  // Testnet Configuration
  testnet: {
    network: "testnet",
    nodeUrls: [
      "https://testnet.hashio.io/api",
      "https://testnet.hashio.io/api",
      "https://testnet.hashio.io/api"
    ],
    chainId: 296,
    mirrorNodeUrl: "https://testnet.mirrornode.hedera.com",
    explorerUrl: "https://hashscan.io/testnet"
  },
  // Mainnet Configuration
  mainnet: {
    network: "mainnet",
    nodeUrls: [
      "https://mainnet.hashio.io/api",
      "https://mainnet.hashio.io/api",
      "https://mainnet.hashio.io/api"
    ],
    chainId: 295,
    mirrorNodeUrl: "https://mainnet.mirrornode.hedera.com",
    explorerUrl: "https://hashscan.io/mainnet"
  }
};

// Helper function to create Hedera client
export function createHederaClient(network: "testnet" | "mainnet", accountId?: string, privateKey?: string): Client {
  const config = HEDERA_CONFIG[network];
  
  const client = Client.forNetwork(config.nodeUrls);
  
  if (accountId && privateKey) {
    const account = AccountId.fromString(accountId);
    const key = PrivateKey.fromString(privateKey);
    client.setOperator(account, key);
  }
  
  return client;
}

// Helper function to convert HBAR to tinybars
export function hbarToTinybars(hbar: number): number {
  return Math.floor(hbar * 100_000_000);
}

// Helper function to convert tinybars to HBAR
export function tinybarsToHbar(tinybars: number): number {
  return tinybars / 100_000_000;
}

// Default gas settings for Hedera
export const HEDERA_GAS_SETTINGS = {
  gasPrice: 100000000, // 0.1 HBAR in tinybars
  gasLimit: 1000000,   // 1M gas limit
  maxFee: Hbar.from(10) // 10 HBAR max fee
};

// Contract deployment settings
export const DEPLOYMENT_SETTINGS = {
  // Initial HBAR balance for contracts (in HBAR)
  initialBalance: 1,
  // Service fee in basis points (250 = 2.5%)
  serviceFeeBps: 250,
  // Royalty fee in basis points (100 = 1%)
  royaltyFeeBps: 100
};
