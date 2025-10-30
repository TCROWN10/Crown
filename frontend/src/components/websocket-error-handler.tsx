"use client"

import { useEffect } from 'react'

export function WebSocketErrorHandler() {
  useEffect(() => {
    // Suppress WebSocket connection errors in console
    const originalError = console.error
    console.error = (...args) => {
      const message = args[0]?.toString() || ''
      
      // Filter out WalletConnect WebSocket errors
      if (
        message.includes('WebSocket connection to') ||
        message.includes('wss://relay.walletconnect.org') ||
        message.includes('ERR_NAME_NOT_RESOLVED') ||
        message.includes('Analytics SDK')
      ) {
        // Don't log these errors to console
        return
      }
      
      // Log other errors normally
      originalError.apply(console, args)
    }

    // Cleanup function
    return () => {
      console.error = originalError
    }
  }, [])

  return null
}
