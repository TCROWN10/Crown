"use client";

import { RainbowKitProvider, darkTheme, getDefaultConfig, lightTheme } from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { defineChain } from "viem";
import "@rainbow-me/rainbowkit/styles.css";
import { http } from "viem";
import { Toaster } from "sonner";
import { WebSocketErrorHandler } from "@/components/websocket-error-handler";
import { NetworkStatus } from "@/components/network-status";

// Define Hedera Testnet chain with multiple RPC endpoints
const hederaTestnet = defineChain({
  id: 296,
  name: 'Hedera Testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'HBAR',
    symbol: 'HBAR',
  },
  rpcUrls: {
    default: {
      http: [
        'https://testnet.hashio.io/api',
        'https://testnet.hedera.com',
        'https://testnet.dappsworks.org'
      ],
    },
    public: {
      http: [
        'https://testnet.hashio.io/api',
        'https://testnet.hedera.com',
        'https://testnet.dappsworks.org'
      ],
    },
  },
  blockExplorers: {
    default: {
      name: 'HashScan',
      url: 'https://hashscan.io/testnet',
    },
  },
  testnet: true,
});

const config = getDefaultConfig({
    appName: 'Crown Ticket',
    projectId: '1eebe528ca0ce94a99ceaa2e915058d7',
    chains: [hederaTestnet],
    transports: {
      [hederaTestnet.id]: http('https://testnet.hashio.io/api', {
        timeout: 60000,
        retryDelay: 2000,
        retryCount: 5,
        batch: {
          wait: 100,
        },
      })
    },
    ssr: true,
  });

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 5,
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
      refetchOnWindowFocus: false,
      staleTime: 10000,
      networkMode: 'offlineFirst',
    },
    mutations: {
      retry: 3,
      networkMode: 'offlineFirst',
    },
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider 
          modalSize="compact" 
          theme={{
            lightMode: lightTheme(),
            darkMode: darkTheme(),
          }}
          // showRecentTransactions={true}
        >
          <WebSocketErrorHandler />
          <NetworkStatus />
          {children}
          <Toaster position="top-right" richColors />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
