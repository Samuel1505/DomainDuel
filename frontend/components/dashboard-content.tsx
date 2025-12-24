"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { TrendingUp, Trophy, Coins, Timer, Users, DollarSign, ArrowUpRight, ArrowDownRight, Zap } from "lucide-react"

export function DashboardContent() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent neon-text">
          Welcome to DomainDuel
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Trade domain NFTs, participate in competitive duels, and earn yield in the ultimate Web3 trading experience
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="glass glass-hover">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Portfolio Value</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">$24,580</div>
            <div className="flex items-center text-xs text-green-400">
              <ArrowUpRight className="h-3 w-3 mr-1" />
              +12.5% from last week
            </div>
          </CardContent>
        </Card>

        <Card className="glass glass-hover">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Duels</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-accent">3</div>
            <div className="flex items-center text-xs text-muted-foreground">2 winning, 1 pending</div>
          </CardContent>
        </Card>

        <Card className="glass glass-hover">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Win Rate</CardTitle>
            <Trophy className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-400">78%</div>
            <div className="flex items-center text-xs text-muted-foreground">23 wins, 6 losses</div>
          </CardContent>
        </Card>

        <Card className="glass glass-hover">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Yield Earned</CardTitle>
            <Coins className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">$1,247</div>
            <div className="flex items-center text-xs text-green-400">
              <ArrowUpRight className="h-3 w-3 mr-1" />
              +8.2% APY
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Active Duels */}
        <div className="lg:col-span-2">
          <Card className="glass">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Zap className="h-5 w-5 text-accent" />
                <span>Active Duels</span>
              </CardTitle>
              <CardDescription>Your current competitive trading battles</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                {
                  name: "Premium Domains Duel",
                  participants: 12,
                  prize: "$5,200",
                  timeLeft: "2h 34m",
                  status: "winning",
                },
                {
                  name: "Tech Domains Battle",
                  participants: 8,
                  prize: "$3,100",
                  timeLeft: "5h 12m",
                  status: "winning",
                },
                { name: "Crypto Names Clash", participants: 15, prize: "$7,800", timeLeft: "1d 3h", status: "pending" },
              ].map((duel, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-lg bg-secondary/30 border border-border/50"
                >
                  <div className="space-y-1">
                    <h4 className="font-medium">{duel.name}</h4>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span className="flex items-center">
                        <Users className="h-3 w-3 mr-1" />
                        {duel.participants} traders
                      </span>
                      <span className="flex items-center">
                        <DollarSign className="h-3 w-3 mr-1" />
                        {duel.prize} prize
                      </span>
                      <span className="flex items-center">
                        <Timer className="h-3 w-3 mr-1" />
                        {duel.timeLeft}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant={duel.status === "winning" ? "default" : "secondary"}>
                      {duel.status === "winning" ? "Winning" : "Pending"}
                    </Badge>
                    <Button size="sm" variant="outline">
                      View
                    </Button>
                  </div>
                </div>
              ))}
              <Button className="w-full neon-glow">
                <Zap className="h-4 w-4 mr-2" />
                Join New Duel
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Leaderboard */}
        <div>
          <Card className="glass">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Trophy className="h-5 w-5 text-primary" />
                <span>Leaderboard</span>
              </CardTitle>
              <CardDescription>Top traders this week</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { rank: 1, name: "CryptoKing", profit: "+$12,450", avatar: "🏆" },
                { rank: 2, name: "DomainMaster", profit: "+$9,230", avatar: "🥈" },
                { rank: 3, name: "NFTTrader", profit: "+$7,890", avatar: "🥉" },
                { rank: 4, name: "You", profit: "+$6,120", avatar: "👤" },
                { rank: 5, name: "WebWizard", profit: "+$5,670", avatar: "🧙" },
              ].map((trader) => (
                <div
                  key={trader.rank}
                  className="flex items-center justify-between p-2 rounded-lg hover:bg-secondary/30 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-lg">{trader.avatar}</span>
                    <div>
                      <p className="font-medium text-sm">{trader.name}</p>
                      <p className="text-xs text-muted-foreground">Rank #{trader.rank}</p>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-green-400">{trader.profit}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Portfolio Overview */}
      <Card className="glass">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            <span>Portfolio Overview</span>
          </CardTitle>
          <CardDescription>Your staked domains and performance metrics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { domain: "crypto.eth", value: "$8,500", change: "+15.2%", staked: true },
              { domain: "defi.com", value: "$6,200", change: "+8.7%", staked: true },
              { domain: "nft.org", value: "$4,800", change: "-2.1%", staked: false },
            ].map((item, index) => (
              <div key={index} className="p-4 rounded-lg bg-secondary/30 border border-border/50 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">{item.domain}</h4>
                  {item.staked && (
                    <Badge variant="outline" className="text-xs">
                      Staked
                    </Badge>
                  )}
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Value</span>
                    <span className="font-medium">{item.value}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">24h Change</span>
                    <span
                      className={`text-sm font-medium flex items-center ${
                        item.change.startsWith("+") ? "text-green-400" : "text-red-400"
                      }`}
                    >
                      {item.change.startsWith("+") ? (
                        <ArrowUpRight className="h-3 w-3 mr-1" />
                      ) : (
                        <ArrowDownRight className="h-3 w-3 mr-1" />
                      )}
                      {item.change}
                    </span>
                  </div>
                  <Progress value={Math.random() * 100} className="h-2" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
