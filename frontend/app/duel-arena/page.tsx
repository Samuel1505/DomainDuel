import { Navigation } from "@/components/navigation"
import { DuelArenaContent } from "@/components/duel-arena-content"

export default function DuelArenaPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <DuelArenaContent />
      </main>
    </div>
  )
}
