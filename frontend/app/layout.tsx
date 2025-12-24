import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { headers } from "next/headers"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import ContextProvider from "@/context/web3-provider"

export const metadata: Metadata = {
  title: "DomainDuel - Web3 Domain Trading Platform",
  description: "Trade domain NFTs, participate in duels, and earn yield in the ultimate Web3 trading experience",
  generator: "v0.app",
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const cookies = (await headers()).get("cookie")

  return (
    <html lang="en" className="dark">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <ContextProvider cookies={cookies}>
          <Navigation />
          <Suspense fallback={null}>{children}</Suspense>
        </ContextProvider>
        <Analytics />
      </body>
    </html>
  )
}