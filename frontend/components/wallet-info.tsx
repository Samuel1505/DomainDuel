'use client'

import { useWallet } from '@/hooks/use-wallet'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export function WalletInfo() {
  const { address, isConnected, chain, balance, openModal, disconnect } = useWallet()

  if (!isConnected) {
    return (
      <Card className="p-6 glass glass-hover">
        <div className="text-center space-y-4">
          <h3 className="text-lg font-semibold">Connect Your Wallet</h3>
          <p className="text-muted-foreground text-sm">
            Connect your wallet to start trading domains on Base Sepolia
          </p>
          <Button onClick={openModal} className="w-full">
            Connect Wallet
          </Button>
        </div>
      </Card>
    )
  }

  return (
    <Card className="p-6 glass glass-hover">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Wallet Connected</h3>
          <Button variant="outline" size="sm" onClick={() => disconnect()}>
            Disconnect
          </Button>
        </div>
        
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Address:</span>
            <span className="font-mono">
              {address?.slice(0, 6)}...{address?.slice(-4)}
            </span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-muted-foreground">Network:</span>
            <span>{chain?.name || 'Unknown'}</span>
          </div>
          
          {balance && (
            <div className="flex justify-between">
              <span className="text-muted-foreground">Balance:</span>
              <span>
                {parseFloat(balance.formatted).toFixed(4)} {balance.symbol}
              </span>
            </div>
          )}
        </div>
      </div>
    </Card>
  )
}