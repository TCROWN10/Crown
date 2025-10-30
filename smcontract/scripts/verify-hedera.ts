import { Client, AccountId, PrivateKey, ContractCreateFlow, ContractCallQuery } from "@hashgraph/sdk";
import { ethers } from "ethers";
import fs from "fs";
import path from "path";

// Load environment variables
require('dotenv').config();

const HEDERA_PRIVATE_KEY = process.env.HEDERA_PRIVATE_KEY;
const HEDERA_ACCOUNT_ID = process.env.HEDERA_ACCOUNT_ID;

if (!HEDERA_PRIVATE_KEY || !HEDERA_ACCOUNT_ID) {
  console.error("❌ Missing Hedera credentials in .env file");
  process.exit(1);
}

// Contract addresses from deployment
const CONTRACTS = {
  TicketNft: "0x03Dd1195E494A16Dd9fc6C6a66966e37F6b93031",
  EventTicketing: "0xe3B26f999bffe5c356C659487E5D44fe14d912EB",
  TicketResaleMarket: "0xc0ABf66a1D3eaf655827e054970150252a561B94"
};

// Contract ABIs (simplified for verification)
const TICKET_NFT_ABI = [
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function owner() view returns (address)"
];

const EVENT_TICKETING_ABI = [
  "function owner() view returns (address)",
  "function platformFeeBps() view returns (uint16)",
  "function feeRecipient() view returns (address)"
];

const TICKET_RESALE_MARKET_ABI = [
  "function owner() view returns (address)",
  "function royaltyBps() view returns (uint16)",
  "function feeRecipient() view returns (address)"
];

async function verifyContract(address: string, name: string, abi: any[]) {
  try {
    console.log(`\n🔍 Verifying ${name} contract at ${address}...`);
    
    // Create Hedera client
    const client = Client.forTestnet();
    const account = AccountId.fromString(HEDERA_ACCOUNT_ID!);
    const key = PrivateKey.fromString(HEDERA_PRIVATE_KEY!);
    client.setOperator(account, key);
    
    // Create ethers provider for Hedera
    const provider = new ethers.JsonRpcProvider("https://testnet.hashio.io/api");
    const contract = new ethers.Contract(address, abi, provider);
    
    // Test contract calls
    try {
      const owner = await contract.owner();
      console.log(`✅ ${name} - Owner: ${owner}`);
      
      // Additional verification based on contract type
      if (name === "TicketNft") {
        const contractName = await contract.name();
        const symbol = await contract.symbol();
        console.log(`✅ ${name} - Name: ${contractName}, Symbol: ${symbol}`);
      } else if (name === "EventTicketing") {
        const feeBps = await contract.platformFeeBps();
        const feeRecipient = await contract.feeRecipient();
        console.log(`✅ ${name} - Platform Fee: ${feeBps} bps, Fee Recipient: ${feeRecipient}`);
      } else if (name === "TicketResaleMarket") {
        const royaltyBps = await contract.royaltyBps();
        const feeRecipient = await contract.feeRecipient();
        console.log(`✅ ${name} - Royalty Fee: ${royaltyBps} bps, Fee Recipient: ${feeRecipient}`);
      }
      
      console.log(`✅ ${name} contract is verified and functional!`);
      return true;
    } catch (error) {
      console.log(`❌ ${name} contract verification failed:`, (error as Error).message);
      return false;
    }
    
  } catch (error) {
    console.log(`❌ Error verifying ${name}:`, (error as Error).message);
    return false;
  }
}

async function main() {
  console.log("🚀 Starting Hedera Contract Verification...");
  console.log(`📋 Account ID: ${HEDERA_ACCOUNT_ID}`);
  console.log(`🌐 Network: Hedera Testnet (Chain ID: 296)`);
  
  let allVerified = true;
  
  // Verify each contract
  const ticketNftVerified = await verifyContract(CONTRACTS.TicketNft, "TicketNft", TICKET_NFT_ABI);
  const eventTicketingVerified = await verifyContract(CONTRACTS.EventTicketing, "EventTicketing", EVENT_TICKETING_ABI);
  const ticketResaleMarketVerified = await verifyContract(CONTRACTS.TicketResaleMarket, "TicketResaleMarket", TICKET_RESALE_MARKET_ABI);
  
  allVerified = ticketNftVerified && eventTicketingVerified && ticketResaleMarketVerified;
  
  console.log("\n" + "=".repeat(60));
  if (allVerified) {
    console.log("🎉 ALL CONTRACTS VERIFIED SUCCESSFULLY!");
    console.log("\n📋 Contract Summary:");
    console.log(`   TicketNft: ${CONTRACTS.TicketNft}`);
    console.log(`   EventTicketing: ${CONTRACTS.EventTicketing}`);
    console.log(`   TicketResaleMarket: ${CONTRACTS.TicketResaleMarket}`);
    console.log("\n🔗 View on HashScan:");
    console.log(`   https://hashscan.io/testnet/address/${CONTRACTS.TicketNft}`);
    console.log(`   https://hashscan.io/testnet/address/${CONTRACTS.EventTicketing}`);
    console.log(`   https://hashscan.io/testnet/address/${CONTRACTS.TicketResaleMarket}`);
  } else {
    console.log("❌ Some contracts failed verification. Please check the errors above.");
  }
  console.log("=".repeat(60));
}

main().catch(console.error);
