import { Navigation } from "@/components/navigation"
import { TradingContent } from "@/components/trading-content"

export default function TradingPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <TradingContent />
      </main>
    </div>
  )
}
