'use client'

import { useAppKit } from '@reown/appkit/react'
import { useAccount, useDisconnect, useBalance } from 'wagmi'

export function useWallet() {
  const { open } = useAppKit()
  const { address, isConnected, chain } = useAccount()
  const { disconnect } = useDisconnect()
  const { data: balance } = useBalance({
    address: address,
  })

  return {
    address,
    isConnected,
    chain,
    balance,
    openModal: () => open(),
    disconnect,
  }
}