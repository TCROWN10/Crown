import type { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-network-helpers";
import { vars } from "hardhat/config";
import "dotenv/config";

const PRIVATE_KEY = vars.has("PRIVATE_KEY_2") ? vars.get("PRIVATE_KEY_2") : "0x0000000000000000000000000000000000000000000000000000000000000000";
const API_KEY = vars.has("ETHERSCAN_API_KEY") ? vars.get("ETHERSCAN_API_KEY") : "";
const HEDERA_PRIVATE_KEY = process.env.HEDERA_PRIVATE_KEY || "0x0000000000000000000000000000000000000000000000000000000000000000";
const HEDERA_ACCOUNT_ID = process.env.HEDERA_ACCOUNT_ID || "";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.28",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
      viaIR: true, // <--- This enables the Yul Intermediate Representation
    },
  },
  networks: {
    // Hedera Testnet (Primary)
    hederaTestnet: {
      url: "https://testnet.hashio.io/api",
      accounts: [HEDERA_PRIVATE_KEY],
      chainId: 296,
      gasPrice: 100000000, // 0.1 HBAR in tinybars
    },
    // Hedera Mainnet (Primary)
    hederaMainnet: {
      url: "https://mainnet.hashio.io/api",
      accounts: [HEDERA_PRIVATE_KEY],
      chainId: 295,
      gasPrice: 100000000, // 0.1 HBAR in tinybars
    },
    // Legacy networks (kept for compatibility)
    kairos: {
      url: "https://public-en-kairos.node.kaia.io",
      accounts: [PRIVATE_KEY],
    },
    // Base Sepolia (testnet)
    baseSepolia: {
      url: "https://sepolia.base.org",
      accounts: [PRIVATE_KEY],
      chainId: 84532,
    },
    // Base Mainnet
    base: {
      url: "https://mainnet.base.org",
      accounts: [PRIVATE_KEY],
      chainId: 8453,
    },
  },
  etherscan: {
    apiKey: API_KEY,
    customChains: [
      {
        network: "kairos",
        chainId: 1001,
        urls: {
          apiURL: "https://kairos-api.kaiascan.io/hardhat-verify",
          browserURL: "https://kairos.kaiascan.io",
        }
      },
      {
        network: "baseSepolia",
        chainId: 84532,
        urls: {
          apiURL: "https://api-sepolia.basescan.org/api",
          browserURL: "https://sepolia.basescan.org",
        }
      },
      {
        network: "base",
        chainId: 8453,
        urls: {
          apiURL: "https://api.basescan.org/api",
          browserURL: "https://basescan.org",
        }
      },
      {
        network: "hederaTestnet",
        chainId: 296,
        urls: {
          apiURL: "https://testnet.hashio.io/api",
          browserURL: "https://hashscan.io/testnet",
        }
      },
      {
        network: "hederaMainnet",
        chainId: 295,
        urls: {
          apiURL: "https://mainnet.hashio.io/api",
          browserURL: "https://hashscan.io/mainnet",
        }
      },
    ]
  },
  sourcify: {
    enabled: false,
  },
};

export default config;


// https://kairos.kaiascan.io/
