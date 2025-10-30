// Hedera Testnet Contract Addresses (Deployed)
export const TicketNftAddress = "0x03Dd1195E494A16Dd9fc6C6a66966e37F6b93031" as `0x${string}`
export const EventTicketingAddress = "0xe3B26f999bffe5c356C659487E5D44fe14d912EB" as `0x${string}`
export const TicketResaleMarketAddress = "0xc0ABf66a1D3eaf655827e054970150252a561B94" as `0x${string}`

// Import ABIs from Hardhat artifacts
import TicketNftAbi from './abis/TicketNft.json'
import EventTicketingAbi from './abis/EventTicketing.json'
import TicketResaleMarketAbi from './abis/TicketResaleMarket.json'

// Export ABIs
export { TicketNftAbi, EventTicketingAbi, TicketResaleMarketAbi }
