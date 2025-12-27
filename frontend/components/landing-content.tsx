"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { 
  ArrowRight, 
  Zap, 
  Shield, 
  TrendingUp, 
  Users, 
  Rocket, 
  Lock, 
  Globe, 
  Code,
  CheckCircle2,
  BarChart3,
  Layers,
  Sparkles,
  Award,
  Target,
  Activity,
  DollarSign,
  Clock,
  Star
} from "lucide-react"

export function LandingContent() {
  return (
    <main className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-linear-to-br from-purple-900/20 via-blue-900/20 to-indigo-900/20" />
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
                  <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Beyond Boundaries
                  </span>
                </h1>

                <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                  Revolutionary Domain NFT Trading with Competitive Duels via DomainDuel
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-500/30 text-white hover:bg-blue-500/10 px-8 py-4 text-lg font-semibold rounded-xl"
                >
                  Watch Demo
                </Button>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div>
                  <div className="text-3xl font-bold text-white">$2.4M+</div>
                  <div className="text-sm text-gray-400">Trading Volume</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">150+</div>
                  <div className="text-sm text-gray-400">Active Traders</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">500+</div>
                  <div className="text-sm text-gray-400">Domains Listed</div>
                </div>
              </div>
            </div>

            {/* Right 3D Illustration */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                {/* 3D Stacked Cards Effect */}
                <div className="relative w-80 h-80">
                  {/* Top Card */}
                  <div className="absolute top-0 right-0 w-48 h-32 glass-card border border-blue-500/30 rounded-2xl transform rotate-12 hover:rotate-6 transition-transform duration-500">
                    <div className="p-6 flex items-center justify-center">
                      <div className="w-12 h-12 bg-linear-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center">
                        <Zap className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 to-transparent rounded-2xl" />
                  </div>

                  {/* Middle Card */}
                  <div className="absolute top-16 right-8 w-48 h-32 glass-card border border-purple-500/30 rounded-2xl transform -rotate-6 hover:rotate-0 transition-transform duration-500">
                    <div className="p-6 flex items-center justify-center">
                      <div className="w-12 h-12 bg-linear-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center">
                        <Shield className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-linear-to-br from-purple-500/10 to-transparent rounded-2xl" />
                  </div>

                  {/* Bottom Card */}
                  <div className="absolute top-32 right-16 w-48 h-32 glass-card border border-indigo-500/30 rounded-2xl transform rotate-3 hover:-rotate-3 transition-transform duration-500">
                    <div className="p-6 flex items-center justify-center">
                      <div className="w-12 h-12 bg-linear-to-br from-indigo-400 to-indigo-600 rounded-xl flex items-center justify-center">
                        <TrendingUp className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-linear-to-br from-indigo-500/10 to-transparent rounded-2xl" />
                  </div>
                </div>

                {/* Glow Effects */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 section-glow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="glass-card border-purple-500/30 text-purple-300 mb-4">
              Platform Metrics
            </Badge>
            <h2 className="text-4xl font-bold text-white mb-4">
              Powering the Future of <span className="gradient-text">Domain Trading</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: DollarSign, label: "Total Value Locked", value: "$4.2M", change: "+23%" },
              { icon: Activity, label: "24h Trading Volume", value: "$127K", change: "+15%" },
              { icon: Users, label: "Active Users", value: "1,234", change: "+12%" },
              { icon: Rocket, label: "Domains Traded", value: "8,450", change: "+34%" }
            ].map((stat, index) => (
              <Card key={index} className="glass-card border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-linear-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <stat.icon className="h-6 w-6 text-blue-400" />
                    </div>
                    <Badge variant="outline" className="border-green-500/30 text-green-400 text-xs">
                      {stat.change}
                    </Badge>
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="glass-card border-blue-500/30 text-blue-300 mb-4">
              Simple Process
            </Badge>
            <h2 className="text-4xl font-bold text-white mb-4">
              How DomainDuel <span className="gradient-text">Works</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Three simple steps to start trading domain NFTs competitively
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-linear-to-r from-blue-500/50 via-purple-500/50 to-indigo-500/50" style={{ width: 'calc(100% - 8rem)', margin: '0 4rem' }} />

            {[
              {
                step: "01",
                title: "Connect Wallet",
                description: "Link your Web3 wallet to access the DomainDuel platform securely",
                icon: Lock
              },
              {
                step: "02",
                title: "Choose Domain",
                description: "Browse our marketplace and select domains to trade or duel",
                icon: Target
              },
              {
                step: "03",
                title: "Start Trading",
                description: "Engage in competitive duels or traditional trading to maximize profits",
                icon: Zap
              }
            ].map((step, index) => (
              <div key={index} className="relative">
                <Card className="glass-card border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 group">
                  <CardContent className="p-8 text-center">
                    <div className="relative inline-block mb-6">
                      <div className="w-16 h-16 bg-linear-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform relative z-10">
                        <step.icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-xs font-bold text-white z-20">
                        {step.step}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Alternating Rows */}
      <section className="relative py-20 section-glow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="glass-card border-purple-500/30 text-purple-300 mb-4">
              Core Features
            </Badge>
            <h2 className="text-4xl font-bold text-white mb-4">
              Everything You Need to <span className="gradient-text">Trade Domains</span>
            </h2>
          </div>

          <div className="space-y-24">
            {/* Feature 1 - Duel Trading */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-block">
                  <Badge variant="outline" className="border-blue-500/30 text-blue-300">
                    Competitive Trading
                  </Badge>
                </div>
                <h3 className="text-3xl font-bold text-white">
                  Duel Trading Platform
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Engage in competitive peer-to-peer domain trading with real-time market dynamics. Challenge other traders, set your stakes, and win valuable domain NFTs through strategic duels.
                </p>
                <ul className="space-y-3">
                  {[
                    "Real-time competitive bidding",
                    "Smart contract-based escrow",
                    "Transparent outcome verification",
                    "Instant settlement and transfer"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <CheckCircle2 className="h-5 w-5 text-blue-400 mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button className="bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Start Dueling
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="relative">
                <div className="glass-card border border-blue-500/20 rounded-2xl p-8 hover:border-blue-500/40 transition-all duration-300">
                  <img 
                    src="/illustrations/blockchain-network-1.svg" 
                    alt="Blockchain network visualization"
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl" />
              </div>
            </div>

            {/* Feature 2 - Yield Farming */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative">
                <div className="glass-card border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/40 transition-all duration-300">
                  <img 
                    src="https://pixabay.com/get/gd82db6ae9eb09e7eddd19dafe0b236ba64825d238bb14d1db4487f248145a25b0463aa7460766d598384dcb44c3cb9bb.svg" 
                    alt="Growth chart trending upward with data visualization"
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl" />
              </div>
              <div className="order-1 lg:order-2 space-y-6">
                <div className="inline-block">
                  <Badge variant="outline" className="border-purple-500/30 text-purple-300">
                    Passive Income
                  </Badge>
                </div>
                <h3 className="text-3xl font-bold text-white">
                  Yield Farming & Staking
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Stake domain NFTs for rewards through fractionalization of premium assets. Earn passive income while maintaining exposure to valuable domain portfolios.
                </p>
                <ul className="space-y-3">
                  {[
                    "Fractional ownership of premium domains",
                    "Competitive APY rates",
                    "Flexible staking periods",
                    "Automated reward distribution"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <CheckCircle2 className="h-5 w-5 text-purple-400 mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
                  Start Farming
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Feature 3 - Derivatives */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-block">
                  <Badge variant="outline" className="border-indigo-500/30 text-indigo-300">
                    Advanced Trading
                  </Badge>
                </div>
                <h3 className="text-3xl font-bold text-white">
                  Domain Derivatives Trading
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Advanced options trading backed by domain asset verification systems. Hedge your positions, speculate on domain values, and create sophisticated trading strategies.
                </p>
                <ul className="space-y-3">
                  {[
                    "Call and put options on domain NFTs",
                    "Verified asset backing",
                    "Multiple expiry dates",
                    "Leverage trading capabilities"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <CheckCircle2 className="h-5 w-5 text-indigo-400 mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700">
                  Explore Derivatives
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="relative">
                <div className="glass-card border border-indigo-500/20 rounded-2xl p-8 hover:border-indigo-500/40 transition-all duration-300">
                  <img 
                    src="https://pixabay.com/get/gb70194d5eadca7d83f77cfbdbc6374bc002f3d3dcd52d4a2afbd95db3ff4370162f25c2f54aa001135b379ac5a8a7c40.svg" 
                    alt="cryptocurrency trading dashboard with charts and graphs"
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section - Bento Grid */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="glass-card border-blue-500/30 text-blue-300 mb-4">
              Why Choose Us
            </Badge>
            <h2 className="text-4xl font-bold text-white mb-4">
              Built for <span className="gradient-text">Modern Traders</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: "Secure & Audited",
                description: "Smart contracts audited by leading security firms",
                color: "blue"
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Instant settlements on high-performance blockchain",
                color: "purple"
              },
              {
                icon: Globe,
                title: "Global Marketplace",
                description: "Trade domains from anywhere in the world 24/7",
                color: "indigo"
              },
              {
                icon: BarChart3,
                title: "Real-Time Analytics",
                description: "Advanced charts and market insights",
                color: "blue"
              },
              {
                icon: Layers,
                title: "Multi-Chain Support",
                description: "Trade across multiple blockchain networks",
                color: "purple"
              },
              {
                icon: Code,
                title: "Open Source",
                description: "Transparent and community-driven development",
                color: "indigo"
              }
            ].map((benefit, index) => (
              <Card key={index} className="glass-card border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 bg-gradient-to-br from-${benefit.color}-500/20 to-${benefit.color}-600/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <benefit.icon className={`h-6 w-6 text-${benefit.color}-400`} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-20 section-glow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="glass-card border-purple-500/30 text-purple-300 mb-4">
              User Stories
            </Badge>
            <h2 className="text-4xl font-bold text-white mb-4">
              Trusted by <span className="gradient-text">Domain Traders</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Alex Chen",
                role: "Domain Investor",
                image: "https://i.pravatar.cc/150?u=alex",
                quote: "DomainDuel transformed my domain trading strategy. The duel feature adds an exciting competitive edge.",
                rating: 5
              },
              {
                name: "Sarah Mitchell",
                role: "NFT Collector",
                image: "https://i.pravatar.cc/150?u=sarah",
                quote: "Best platform for domain NFTs. The yield farming feature generates consistent passive income.",
                rating: 5
              },
              {
                name: "Marcus Rodriguez",
                role: "Crypto Trader",
                image: "https://i.pravatar.cc/150?u=marcus",
                quote: "Advanced derivatives trading with domain NFTs? Genius! This platform is ahead of its time.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="glass-card border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Live Activity Feed */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="glass-card border-blue-500/30 text-blue-300 mb-4">
              Recent Activity
            </Badge>
            <h2 className="text-4xl font-bold text-white mb-4">
              <span className="gradient-text">Live</span> Trading Activity
            </h2>
          </div>

          <Card className="glass-card border-blue-500/20">
            <CardContent className="p-6">
              <div className="space-y-4">
                {[
                  { user: "0x742d...3a5e", action: "won duel for", domain: "crypto.eth", value: "2.5 ETH", time: "2 min ago" },
                  { user: "0x8f1c...9b2d", action: "staked", domain: "defi.eth", value: "1.8 ETH", time: "5 min ago" },
                  { user: "0x3e5a...7c1f", action: "listed", domain: "nft.eth", value: "5.0 ETH", time: "8 min ago" },
                  { user: "0x9d2b...4e8a", action: "bought option on", domain: "web3.eth", value: "0.3 ETH", time: "12 min ago" },
                  { user: "0x5c7e...1a9f", action: "claimed rewards from", domain: "dao.eth", value: "0.7 ETH", time: "15 min ago" }
                ].map((activity, index) => (
                  <div key={index} className="flex items-center justify-between p-4 glass-card border border-blue-500/10 rounded-xl hover:border-blue-500/30 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center">
                        <Activity className="h-5 w-5 text-blue-400" />
                      </div>
                      <div>
                        <div className="text-white">
                          <span className="font-mono text-sm text-blue-400">{activity.user}</span>
                          {" "}<span className="text-gray-400">{activity.action}</span>{" "}
                          <span className="font-semibold">{activity.domain}</span>
                        </div>
                        <div className="text-sm text-gray-500">{activity.time}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-green-400">{activity.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Ecosystem Partners */}
      <section className="relative py-20 section-glow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="glass-card border-purple-500/30 text-purple-300 mb-4">
              Ecosystem
            </Badge>
            <h2 className="text-4xl font-bold text-white mb-4">
              Integrated with Leading <span className="gradient-text">Platforms</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {["Ethereum", "Polygon", "Arbitrum", "Optimism", "ENS", "Unstoppable", "MetaMask", "WalletConnect"].map((partner, index) => (
              <div key={index} className="glass-card border-blue-500/10 rounded-xl p-6 flex items-center justify-center hover:border-blue-500/30 transition-all duration-300 group">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <Sparkles className="h-6 w-6 text-blue-400" />
                  </div>
                  <div className="text-white font-semibold">{partner}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="glass-card border-blue-500/30 text-blue-300 mb-4">
              FAQ
            </Badge>
            <h2 className="text-4xl font-bold text-white mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </div>

          <Card className="glass-card border-blue-500/20">
            <CardContent className="p-8">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-white text-lg">
                    What is DomainDuel?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    DomainDuel is a revolutionary blockchain-based platform that enables competitive domain NFT trading through duels, yield farming, and derivatives. We combine traditional domain trading with exciting competitive mechanics.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-white text-lg">
                    How does duel trading work?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    Duel trading allows two parties to compete for domain ownership. Both parties stake their tokens, and through a smart contract-based mechanism, the winner takes the domain NFT. All outcomes are transparent and verifiable on-chain.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-white text-lg">
                    What are the fees?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    We charge a competitive 2.5% platform fee on successful trades. Duel winners pay a 3% fee, while yield farming has no entry fees but a 10% performance fee on rewards.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-white text-lg">
                    Is my wallet secure?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    Yes! We never have custody of your assets. All transactions are executed through audited smart contracts. We support industry-standard wallets like MetaMask and WalletConnect.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-white text-lg">
                    Which blockchains do you support?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    Currently, we support Ethereum mainnet, Polygon, Arbitrum, and Optimism. We're constantly evaluating new chains to add based on community demand.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-white text-lg">
                    How do I get started?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    Simply connect your Web3 wallet, browse available domains, and start trading! No KYC required for basic features. Premium features may require additional verification.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-20 section-glow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-card border border-blue-500/20 rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-indigo-500/10" />
            <div className="relative z-10">
              <Badge variant="outline" className="glass-card border-blue-500/30 text-blue-300 mb-6">
                Join Now
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to <span className="gradient-text">Revolutionize</span> Domain Trading?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of traders already earning on DomainDuel. Start your journey today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Launch App
                  <Rocket className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-500/30 text-white hover:bg-blue-500/10 px-8 py-6 text-lg font-semibold rounded-xl"
                >
                  Read Documentation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 border-t border-border/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-white font-bold text-xl mb-4">DomainDuel</h3>
              <p className="text-gray-400 text-sm mb-4">
                The future of competitive domain NFT trading.
              </p>
              <div className="flex space-x-4">
                {["Twitter", "Discord", "Telegram"].map((social, index) => (
                  <div key={index} className="w-10 h-10 glass-card border-blue-500/20 rounded-lg flex items-center justify-center hover:border-blue-500/40 transition-colors cursor-pointer">
                    <Globe className="h-4 w-4 text-blue-400" />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="hover:text-blue-400 cursor-pointer transition-colors">Duel Trading</li>
                <li className="hover:text-blue-400 cursor-pointer transition-colors">Yield Farming</li>
                <li className="hover:text-blue-400 cursor-pointer transition-colors">Derivatives</li>
                <li className="hover:text-blue-400 cursor-pointer transition-colors">Analytics</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="hover:text-blue-400 cursor-pointer transition-colors">Documentation</li>
                <li className="hover:text-blue-400 cursor-pointer transition-colors">API Reference</li>
                <li className="hover:text-blue-400 cursor-pointer transition-colors">Blog</li>
                <li className="hover:text-blue-400 cursor-pointer transition-colors">Community</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="hover:text-blue-400 cursor-pointer transition-colors">About Us</li>
                <li className="hover:text-blue-400 cursor-pointer transition-colors">Careers</li>
                <li className="hover:text-blue-400 cursor-pointer transition-colors">Terms</li>
                <li className="hover:text-blue-400 cursor-pointer transition-colors">Privacy</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border/30 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 DomainDuel. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Award className="h-4 w-4 text-blue-400" />
              <span>Audited by leading security firms</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}