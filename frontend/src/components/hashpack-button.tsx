"use client"

import { Button } from '@/components/ui/button'
import { useHashPack } from '@/hooks/use-hashpack'
import { Wallet } from 'lucide-react'
import { toast } from 'sonner'

interface HashPackButtonProps {
  className?: string
}

export function HashPackButton({ className }: HashPackButtonProps) {
  const { isHashPackInstalled, isConnected, account, connectHashPack, disconnectHashPack } = useHashPack()

  const handleConnect = async () => {
    try {
      if (!isHashPackInstalled) {
        toast.error('HashPack wallet not found. Please install the HashPack extension from hashpack.app')
        window.open('https://hashpack.app', '_blank')
        return
      }

      await connectHashPack()
      toast.success('Connected to HashPack wallet!')
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to connect HashPack wallet'
      toast.error(errorMessage)
    }
  }

  const handleDisconnect = async () => {
    try {
      await disconnectHashPack()
      toast.success('Disconnected from HashPack wallet')
    } catch {
      toast.error('Failed to disconnect HashPack wallet')
    }
  }

  if (!isHashPackInstalled) {
    return (
      <Button
        onClick={handleConnect}
        className={className || 'bg-[#dd7e9a] hover:bg-[#c06b8a] text-white'}
      >
        <Wallet className="w-4 h-4 mr-2" />
        Install HashPack
      </Button>
    )
  }

  if (isConnected && account) {
    return (
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          className="border-green-500 text-green-400"
          disabled
        >
          <Wallet className="w-4 h-4 mr-2" />
          {`${account.slice(0, 6)}...${account.slice(-4)}`}
        </Button>
        <Button
          onClick={handleDisconnect}
          variant="outline"
          className="border-red-500 text-red-400 hover:bg-red-500 hover:text-white"
        >
          Disconnect
        </Button>
      </div>
    )
  }

  return (
    <Button
      onClick={handleConnect}
      className={className || 'bg-[#dd7e9a] hover:bg-[#c06b8a] text-white'}
    >
      <Wallet className="w-4 h-4 mr-2" />
      Connect HashPack
    </Button>
  )
}
