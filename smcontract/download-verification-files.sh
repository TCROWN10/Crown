#!/bin/bash

echo "📁 Hedera Contract Verification Files"
echo "======================================"
echo ""
echo "Individual JSON files created for easy download:"
echo ""

# List the verification JSON files
echo "✅ TicketNft-verification.json"
echo "   Contract: TicketNft"
echo "   Address: 0x03Dd1195E494A16Dd9fc6C6a66966e37F6b93031"
echo "   Constructor Args: [\"Crown Ticket\", \"txFT\", \"ipfs://bafybeidjmguiviozpgptmvbkq4mzivq5vp3uktw3fuouzk2i25binmfyxy\"]"
echo ""

echo "✅ EventTicketing-verification.json"
echo "   Contract: EventTicketing"
echo "   Address: 0xe3B26f999bffe5c356C659487E5D44fe14d912EB"
echo "   Constructor Args: [\"0x03Dd1195E494A16Dd9fc6C6a66966e37F6b93031\", \"0x08d0d1572A8a714D90D670Ea344Dd23B1dF565Dd\", 250]"
echo ""

echo "✅ TicketResaleMarket-verification.json"
echo "   Contract: TicketResaleMarket"
echo "   Address: 0xc0ABf66a1D3eaf655827e054970150252a561B94"
echo "   Constructor Args: [\"0xe3B26f999bffe5c356C659487E5D44fe14d912EB\", \"0x03Dd1195E494A16Dd9fc6C6a66966e37F6b93031\", \"0x08d0d1572A8a714D90D670Ea344Dd23B1dF565Dd\", 250]"
echo ""

echo "📂 File Locations:"
echo "=================="
echo "$(pwd)/TicketNft-verification.json"
echo "$(pwd)/EventTicketing-verification.json"
echo "$(pwd)/TicketResaleMarket-verification.json"
echo ""

echo "📋 How to Use:"
echo "=============="
echo "1. Download each JSON file"
echo "2. Go to https://hashscan.io/testnet"
echo "3. Search for each contract address"
echo "4. Click 'Verify Contract'"
echo "5. Upload the corresponding JSON file"
echo "6. Upload the source .sol files from verification-files/ directory"
echo "7. Submit for verification"
echo ""

echo "🎯 Ready for Hedera Contract Verification!"
