#!/bin/bash

# Hedera Contract Verification Script
# This script provides all necessary files and information for HashScan verification

echo "🚀 Hedera Contract Verification Package"
echo "========================================"
echo ""

echo "📋 Contract Information:"
echo "======================="
echo ""
echo "1. TicketNft Contract"
echo "   Address: 0x03Dd1195E494A16Dd9fc6C6a66966e37F6b93031"
echo "   Constructor Args:"
echo "     - name_: \"Crown Ticket\""
echo "     - symbol_: \"txFT\""
echo "     - imageUri_: \"ipfs://bafybeidjmguiviozpgptmvbkq4mzivq5vp3uktw3fuouzk2i25binmfyxy\""
echo ""
echo "2. EventTicketing Contract"
echo "   Address: 0xe3B26f999bffe5c356C659487E5D44fe14d912EB"
echo "   Constructor Args:"
echo "     - ticketNftAddress: 0x03Dd1195E494A16Dd9fc6C6a66966e37F6b93031"
echo "     - feeRecipient_: 0x08d0d1572A8a714D90D670Ea344Dd23B1dF565Dd"
echo "     - feeBps: 250"
echo ""
echo "3. TicketResaleMarket Contract"
echo "   Address: 0xc0ABf66a1D3eaf655827e054970150252a561B94"
echo "   Constructor Args:"
echo "     - eventTicketingAddress: 0xe3B26f999bffe5c356C659487E5D44fe14d912EB"
echo "     - ticketNftAddress: 0x03Dd1195E494A16Dd9fc6C6a66966e37F6b93031"
echo "     - feeRecipient_: 0x08d0d1572A8a714D90D670Ea344Dd23B1dF565Dd"
echo "     - royaltyBps_: 250"
echo ""

echo "📁 Source Files Available:"
echo "=========================="
ls -la verification-files/*.sol
echo ""

echo "📄 Contract Artifacts Available:"
echo "================================"
ls -la verification-files/*.json
echo ""

echo "🔗 HashScan URLs:"
echo "================="
echo "TicketNft: https://hashscan.io/testnet/address/0x03Dd1195E494A16Dd9fc6C6a66966e37F6b93031"
echo "EventTicketing: https://hashscan.io/testnet/address/0xe3B26f999bffe5c356C659487E5D44fe14d912EB"
echo "TicketResaleMarket: https://hashscan.io/testnet/address/0xc0ABf66a1D3eaf655827e054970150252a561B94"
echo ""

echo "📝 Verification Steps:"
echo "======================"
echo "1. Go to https://hashscan.io/testnet"
echo "2. Search for each contract address"
echo "3. Click 'Verify Contract' or 'Verify & Publish'"
echo "4. Upload all .sol files from verification-files/"
echo "5. Enter constructor arguments exactly as shown above"
echo "6. Select compiler version: 0.8.28"
echo "7. Submit for verification"
echo ""

echo "✅ All files ready for verification!"
