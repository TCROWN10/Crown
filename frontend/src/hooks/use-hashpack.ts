"use client"

import { useEffect, useState } from 'react'

// HashPack wallet detection and integration
interface HashPackProvider {
  request?: (args: { method: string; params?: unknown[] }) => Promise<unknown>
  on?: (event: string, callback: (accounts: string[]) => void) => void
}

declare global {
  interface Window {
    hashpack?: {
      provider?: HashPackProvider
      isHashPack?: boolean
    }
    hashPack?: {
      provider?: HashPackProvider
      isHashPack?: boolean
    }
  }
}

export function useHashPack() {
  const [isHashPackInstalled, setIsHashPackInstalled] = useState(false)
  const [isConnected, setIsConnected] = useState(false)
  const [account, setAccount] = useState<string | null>(null)

  useEffect(() => {
    // Check if HashPack extension is installed
    const checkHashPack = () => {
      if (typeof window !== 'undefined') {
        const hashpack = window.hashpack || window.hashPack
        setIsHashPackInstalled(!!hashpack)
        
        // Listen for account changes
        if (hashpack?.provider?.on) {
          hashpack.provider.on('accountsChanged', (accounts: string[]) => {
            if (accounts && accounts.length > 0) {
              setAccount(accounts[0] as string)
              setIsConnected(true)
            } else {
              setAccount(null)
              setIsConnected(false)
            }
          })
        }
      }
    }

    checkHashPack()
    
    // Poll for HashPack in case it loads later
    const interval = setInterval(checkHashPack, 1000)
    
    return () => clearInterval(interval)
  }, [])

  const connectHashPack = async () => {
    if (typeof window === 'undefined') return

    try {
      const hashpack = window.hashpack || window.hashPack
      
      if (!hashpack?.provider?.request) {
        throw new Error('HashPack wallet not found. Please install the HashPack extension.')
      }

      // Request connection
      const response = await hashpack.provider.request({
        method: 'eth_requestAccounts',
        params: [],
      }) as string[] | unknown

      const accounts = Array.isArray(response) ? response : []
      
      if (accounts && accounts.length > 0 && typeof accounts[0] === 'string') {
        setAccount(accounts[0])
        setIsConnected(true)
        return accounts[0]
      }
    } catch (error) {
      console.error('HashPack connection error:', error)
      throw error
    }
  }

  const disconnectHashPack = async () => {
    if (typeof window === 'undefined') return

    try {
      const hashpack = window.hashpack || window.hashPack
      
      if (hashpack?.provider?.request) {
        await hashpack.provider.request({
          method: 'eth_accounts',
          params: [],
        })
      }
      
      setAccount(null)
      setIsConnected(false)
    } catch (error) {
      console.error('HashPack disconnect error:', error)
    }
  }

  return {
    isHashPackInstalled,
    isConnected,
    account,
    connectHashPack,
    disconnectHashPack,
  }
}
