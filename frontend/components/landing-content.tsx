import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Zap, Shield, TrendingUp } from "lucide-react"

export function LandingContent() {
  return (
    <main className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-indigo-900/20" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <Badge variant="outline" className="glass-card border-blue-500/30 text-blue-300">
                150+ domain traders
              </Badge>

              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Trading domains
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Beyond Boundaries
                  </span>
                </h1>

                <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                  Revolutionary Domain NFT Trading with Competitive Duels via DomainDuel
                </p>
              </div>

              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Right 3D Illustration */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                {/* 3D Stacked Cards Effect */}
                <div className="relative w-80 h-80">
                  {/* Top Card */}
                  <div className="absolute top-0 right-0 w-48 h-32 glass-card border border-blue-500/30 rounded-2xl transform rotate-12 hover:rotate-6 transition-transform duration-500">
                    <div className="p-6 flex items-center justify-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center">
                        <Zap className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded-2xl" />
                  </div>

                  {/* Middle Card */}
                  <div className="absolute top-16 right-8 w-48 h-32 glass-card border border-purple-500/30 rounded-2xl transform -rotate-6 hover:rotate-0 transition-transform duration-500">
                    <div className="p-6 flex items-center justify-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center">
                        <Shield className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent rounded-2xl" />
                  </div>

                  {/* Bottom Card */}
                  <div className="absolute top-32 right-16 w-48 h-32 glass-card border border-indigo-500/30 rounded-2xl transform rotate-3 hover:-rotate-3 transition-transform duration-500">
                    <div className="p-6 flex items-center justify-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-xl flex items-center justify-center">
                        <TrendingUp className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-2xl" />
                  </div>
                </div>

                {/* Glow Effects */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Duel Trading */}
            <Card className="glass-card border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Duel Trading</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Competitive peer-to-peer domain trading with real-time market dynamics
                </p>
              </CardContent>
            </Card>

            {/* Yield Farming */}
            <Card className="glass-card border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Yield Farming</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Stake domain NFTs for rewards through fractionalization of premium assets
                </p>
              </CardContent>
            </Card>

            {/* Derivatives */}
            <Card className="glass-card border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Derivatives</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Advanced options trading backed by domain asset verification systems
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
