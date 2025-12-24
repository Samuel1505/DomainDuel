import { Navigation } from "@/components/navigation"
import { DerivativesContent } from "@/components/derivatives-content"

export default function DerivativesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <DerivativesContent />
      </main>
    </div>
  )
}
