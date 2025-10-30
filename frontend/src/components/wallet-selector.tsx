"use client"

import { useState } from 'react'
import { WalletConnectButton } from './wallet-connect-button'
import { HashPackButton } from './hashpack-button'
import { Button } from '@/components/ui/button'
import { Wallet, ChevronDown } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

interface WalletSelectorProps {
  className?: string
}

export function WalletSelector({ className }: WalletSelectorProps) {
  const [selectedWallet, setSelectedWallet] = useState<'rainbowkit' | 'hashpack' | null>(null)

  return (
    <div className={className}>
      {!selectedWallet ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="bg-[#dd7e9a] hover:bg-[#c06b8a] text-white px-6 py-3">
              <Wallet className="w-4 h-4 mr-2" />
              Connect Wallet
              <ChevronDown className="w-4 h-4 ml-2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-[#1d1d1d] border-slate-700">
            <DropdownMenuItem
              onClick={() => setSelectedWallet('rainbowkit')}
              className="cursor-pointer hover:bg-slate-800"
            >
              <div className="flex items-center gap-2">
                <Wallet className="w-4 h-4" />
                <span>MetaMask / WalletConnect</span>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setSelectedWallet('hashpack')}
              className="cursor-pointer hover:bg-slate-800"
            >
              <div className="flex items-center gap-2">
                <Wallet className="w-4 h-4" />
                <span>HashPack Wallet</span>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : selectedWallet === 'rainbowkit' ? (
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <WalletConnectButton className={className} />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSelectedWallet(null)}
              className="text-slate-400 hover:text-white"
            >
              Change
            </Button>
          </div>
        </div>
      ) : (
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <HashPackButton className={className} />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSelectedWallet(null)}
              className="text-slate-400 hover:text-white"
            >
              Change
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
