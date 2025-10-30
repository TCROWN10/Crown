"use client"

import { useEffect, useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Wifi, WifiOff } from 'lucide-react'

export function NetworkStatus() {
  const [isOnline, setIsOnline] = useState(true)
  const [wsStatus, setWsStatus] = useState<'connecting' | 'connected' | 'disconnected'>('connecting')

  useEffect(() => {
    // Monitor online/offline status
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    // Test WebSocket connection
    const testWebSocket = () => {
      try {
        const ws = new WebSocket('wss://relay.walletconnect.org')
        
        ws.onopen = () => {
          setWsStatus('connected')
          ws.close()
        }
        
        ws.onerror = () => {
          setWsStatus('disconnected')
        }
        
        ws.onclose = () => {
          // Connection closed normally
        }
      } catch {
        setWsStatus('disconnected')
      }
    }

    testWebSocket()
    const interval = setInterval(testWebSocket, 30000) // Test every 30 seconds

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
      clearInterval(interval)
    }
  }, [])

  if (isOnline && wsStatus === 'connected') {
    return null // Don't show anything if everything is working
  }

  return (
    <div className="fixed top-4 right-4 z-50">
      <Badge 
        variant="outline" 
        className={`${
          !isOnline 
            ? 'bg-red-500/20 text-red-400 border-red-500/30' 
            : wsStatus === 'disconnected'
            ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
            : 'bg-green-500/20 text-green-400 border-green-500/30'
        }`}
      >
        {!isOnline ? (
          <>
            <WifiOff className="w-3 h-3 mr-1" />
            Offline
          </>
        ) : wsStatus === 'disconnected' ? (
          <>
            <Wifi className="w-3 h-3 mr-1" />
            WalletConnect Issues
          </>
        ) : (
          <>
            <Wifi className="w-3 h-3 mr-1" />
            Connecting...
          </>
        )}
      </Badge>
    </div>
  )
}
