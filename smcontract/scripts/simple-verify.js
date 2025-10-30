const { ethers } = require('ethers');
require('dotenv').config();

console.log('🚀 Starting Simple Contract Verification...');

const provider = new ethers.JsonRpcProvider('https://testnet.hashio.io/api');

const contracts = {
  TicketNft: '0x03Dd1195E494A16Dd9fc6C6a66966e37F6b93031',
  EventTicketing: '0xe3B26f999bffe5c356C659487E5D44fe14d912EB',
  TicketResaleMarket: '0xc0ABf66a1D3eaf655827e054970150252a561B94'
};

async function verifyContract(address, name) {
  try {
    console.log(`\n🔍 Verifying ${name} at ${address}...`);
    
    // Get contract code
    const code = await provider.getCode(address);
    if (code === '0x') {
      console.log(`❌ ${name}: No contract found at address`);
      return false;
    }
    
    console.log(`✅ ${name}: Contract code exists (${code.length} bytes)`);
    
    // Try to call a simple function
    const contract = new ethers.Contract(address, ['function owner() view returns (address)'], provider);
    const owner = await contract.owner();
    console.log(`✅ ${name}: Owner = ${owner}`);
    
    return true;
  } catch (error) {
    console.log(`❌ ${name}: Error - ${error.message}`);
    return false;
  }
}

async function main() {
  let allVerified = true;
  
  for (const [name, address] of Object.entries(contracts)) {
    const verified = await verifyContract(address, name);
    allVerified = allVerified && verified;
  }
  
  console.log('\n' + '='.repeat(50));
  if (allVerified) {
    console.log('🎉 ALL CONTRACTS VERIFIED SUCCESSFULLY!');
    console.log('\n📋 Contract Addresses:');
    Object.entries(contracts).forEach(([name, address]) => {
      console.log(`   ${name}: ${address}`);
    });
    console.log('\n🔗 View on HashScan:');
    Object.entries(contracts).forEach(([name, address]) => {
      console.log(`   ${name}: https://hashscan.io/testnet/address/${address}`);
    });
  } else {
    console.log('❌ Some contracts failed verification');
  }
  console.log('='.repeat(50));
}

main().catch(console.error);
