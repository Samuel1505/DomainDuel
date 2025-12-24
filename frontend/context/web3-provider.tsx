'use client'

import { createAppKit } from '@reown/appkit/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { type ReactNode, useState } from 'react'
import { cookieToInitialState, WagmiProvider, type Config } from 'wagmi'
import { baseSepolia } from '@reown/appkit/networks'

import { projectId, wagmiAdapter } from '@/config/wagmi'

// Set up queryClient
const queryClient = new QueryClient()

if (!projectId) {
  throw new Error('Project ID is not defined')
}

// Set up metadata
const metadata = {
  name: 'DomainDuel',
  description: 'Web3 Domain Trading Platform',
  url: 'https://domainduel.app', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/179229932']
}

// Create the modal
const modal = createAppKit({
  adapters: [wagmiAdapter],
  projectId,
  networks: [baseSepolia],
  defaultNetwork: baseSepolia,
  metadata: metadata,
  features: {
    analytics: true,
  },
  themeMode: 'dark',
  themeVariables: {
    '--w3m-accent': 'oklch(0.65 0.25 264)',
    '--w3m-border-radius-master': '12px'
  }
})

function ContextProvider({
  children,
  cookies
}: {
  children: ReactNode
  cookies: string | null
}) {
  const initialState = cookieToInitialState(wagmiAdapter.wagmiConfig as Config, cookies)
  const [queryClientState] = useState(() => new QueryClient())

  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig as Config} initialState={initialState}>
      <QueryClientProvider client={queryClientState}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
}

export default ContextProvider