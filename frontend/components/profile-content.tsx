"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Trophy,
  TrendingUp,
  Calendar,
  Target,
  Zap,
  Award,
  BarChart3,
  Activity,
  Wallet,
  Download,
  Share2,
  Settings,
  Star,
  Crown,
  Shield,
  Flame,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
} from "lucide-react"

export function ProfileContent() {
  const [selectedPeriod, setSelectedPeriod] = useState("30d")

  const userStats = {
    username: "CryptoTrader",
    walletAddress: "0x1234...5678",
    joinDate: "March 2023",
    rank: 4,
    totalTrades: 1247,
    winRate: 78.5,
    totalVolume: "$2.4M",
    totalPnL: "+$45,230",
    avgReturn: "+12.8%",
    bestTrade: "+$8,450",
    worstTrade: "-$2,100",
    currentStreak: 12,
    longestStreak: 28,
  }

  const achievements = [
    {
      id: "1",
      name: "First Blood",
      description: "Complete your first trade",
      icon: Target,
      earned: true,
      rarity: "common",
      earnedDate: "2023-03-15",
    },
    {
      id: "2",
      name: "High Roller",
      description: "Execute a trade worth over $10,000",
      icon: Crown,
      earned: true,
      rarity: "rare",
      earnedDate: "2023-04-22",
    },
    {
      id: "3",
      name: "Duel Master",
      description: "Win 10 consecutive duels",
      icon: Zap,
      earned: true,
      rarity: "epic",
      earnedDate: "2023-06-10",
    },
    {
      id: "4",
      name: "Diamond Hands",
      description: "Hold a position for over 90 days",
      icon: Shield,
      earned: true,
      rarity: "legendary",
      earnedDate: "2023-08-05",
    },
    {
      id: "5",
      name: "Yield Farmer",
      description: "Earn $1000 in staking rewards",
      icon: Star,
      earned: true,
      rarity: "uncommon",
      earnedDate: "2023-09-12",
    },
    {
      id: "6",
      name: "Options Wizard",
      description: "Successfully exercise 50 options",
      icon: Flame,
      earned: false,
      rarity: "legendary",
      progress: 32,
      total: 50,
    },
  ]

  const tradingHistory = [
    {
      id: "1",
      type: "buy",
      asset: "crypto.eth",
      amount: "$12,500",
      price: "$12,500",
      date: "2024-01-10",
      pnl: "+$1,250",
      status: "completed",
    },
    {
      id: "2",
      type: "sell",
      asset: "defi.com",
      amount: "$8,900",
      price: "$8,900",
      date: "2024-01-09",
      pnl: "+$890",
      status: "completed",
    },
    {
      id: "3",
      type: "duel",
      asset: "Premium Domains",
      amount: "$5,200",
      price: "Entry Fee: $500",
      date: "2024-01-08",
      pnl: "+$2,100",
      status: "won",
    },
    {
      id: "4",
      type: "stake",
      asset: "DDUEL",
      amount: "1,250 DDUEL",
      price: "$2,500",
      date: "2024-01-07",
      pnl: "+$125",
      status: "active",
    },
    {
      id: "5",
      type: "option",
      asset: "web3.io CALL",
      amount: "$680",
      price: "Strike: $16,000",
      date: "2024-01-06",
      pnl: "+$240",
      status: "exercised",
    },
  ]

  const performanceData = [
    { period: "Jan 2024", pnl: 4250, volume: 125000, trades: 45 },
    { period: "Dec 2023", pnl: 3800, volume: 98000, trades: 38 },
    { period: "Nov 2023", pnl: 5200, volume: 156000, trades: 52 },
    { period: "Oct 2023", pnl: 2100, volume: 87000, trades: 29 },
    { period: "Sep 2023", pnl: 6800, volume: 198000, trades: 61 },
    { period: "Aug 2023", pnl: 3400, volume: 112000, trades: 41 },
  ]

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "legendary":
        return "bg-gradient-to-r from-yellow-500 to-orange-500"
      case "epic":
        return "bg-gradient-to-r from-purple-500 to-pink-500"
      case "rare":
        return "bg-gradient-to-r from-blue-500 to-cyan-500"
      case "uncommon":
        return "bg-gradient-to-r from-green-500 to-emerald-500"
      default:
        return "bg-gradient-to-r from-gray-500 to-slate-500"
    }
  }

  const getTradeTypeIcon = (type: string) => {
    switch (type) {
      case "buy":
        return <ArrowUpRight className="h-4 w-4 text-green-400" />
      case "sell":
        return <ArrowDownRight className="h-4 w-4 text-red-400" />
      case "duel":
        return <Zap className="h-4 w-4 text-accent" />
      case "stake":
        return <Target className="h-4 w-4 text-primary" />
      case "option":
        return <BarChart3 className="h-4 w-4 text-purple-400" />
      default:
        return <Activity className="h-4 w-4" />
    }
  }

  return (
    <div className="space-y-8">
      {/* Profile Header */}
      <Card className="glass">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
            <Avatar className="w-24 h-24">
              <AvatarImage src="/crypto-trader-avatar.png" />
              <AvatarFallback className="text-2xl font-bold bg-gradient-to-br from-primary to-accent text-white">
                CT
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-2">
              <div className="flex items-center space-x-3">
                <h1 className="text-3xl font-bold">{userStats.username}</h1>
                <Badge className="bg-gradient-to-r from-primary to-accent text-white">
                  <Crown className="h-3 w-3 mr-1" />
                  Rank #{userStats.rank}
                </Badge>
              </div>
              <div className="flex items-center space-x-4 text-muted-foreground">
                <span className="flex items-center">
                  <Wallet className="h-4 w-4 mr-1" />
                  {userStats.walletAddress}
                </span>
                <span className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  Joined {userStats.joinDate}
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <Button variant="outline" size="sm" className="glass glass-hover bg-transparent">
                  <Settings className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
                <Button variant="outline" size="sm" className="glass glass-hover bg-transparent">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share Profile
                </Button>
                <Button variant="outline" size="sm" className="glass glass-hover bg-transparent">
                  <Download className="h-4 w-4 mr-2" />
                  Export Data
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <Card className="glass glass-hover">
          <CardContent className="pt-4">
            <div className="text-center space-y-1">
              <div className="text-2xl font-bold text-primary">{userStats.totalTrades.toLocaleString()}</div>
              <div className="text-xs text-muted-foreground">Total Trades</div>
            </div>
          </CardContent>
        </Card>
        <Card className="glass glass-hover">
          <CardContent className="pt-4">
            <div className="text-center space-y-1">
              <div className="text-2xl font-bold text-green-400">{userStats.winRate}%</div>
              <div className="text-xs text-muted-foreground">Win Rate</div>
            </div>
          </CardContent>
        </Card>
        <Card className="glass glass-hover">
          <CardContent className="pt-4">
            <div className="text-center space-y-1">
              <div className="text-2xl font-bold text-accent">{userStats.totalVolume}</div>
              <div className="text-xs text-muted-foreground">Total Volume</div>
            </div>
          </CardContent>
        </Card>
        <Card className="glass glass-hover">
          <CardContent className="pt-4">
            <div className="text-center space-y-1">
              <div className="text-2xl font-bold text-green-400">{userStats.totalPnL}</div>
              <div className="text-xs text-muted-foreground">Total P&L</div>
            </div>
          </CardContent>
        </Card>
        <Card className="glass glass-hover">
          <CardContent className="pt-4">
            <div className="text-center space-y-1">
              <div className="text-2xl font-bold text-primary">{userStats.currentStreak}</div>
              <div className="text-xs text-muted-foreground">Win Streak</div>
            </div>
          </CardContent>
        </Card>
        <Card className="glass glass-hover">
          <CardContent className="pt-4">
            <div className="text-center space-y-1">
              <div className="text-2xl font-bold text-yellow-400">{userStats.avgReturn}</div>
              <div className="text-xs text-muted-foreground">Avg Return</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="analytics" className="w-full">
        <TabsList className="grid w-full grid-cols-3 glass">
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
          <TabsTrigger value="history">Trade History</TabsTrigger>
        </TabsList>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Performance Chart */}
            <div className="lg:col-span-2">
              <Card className="glass">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BarChart3 className="h-5 w-5" />
                    <span>Performance Overview</span>
                  </CardTitle>
                  <CardDescription>Your trading performance over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {performanceData.map((data, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-secondary/30">
                        <div className="flex items-center space-x-4">
                          <div className="text-sm font-medium">{data.period}</div>
                          <Badge variant="outline" className="text-xs">
                            {data.trades} trades
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-4 text-sm">
                          <div>
                            <span className="text-muted-foreground">Volume: </span>
                            <span className="font-medium">${(data.volume / 1000).toFixed(0)}K</span>
                          </div>
                          <div className={`font-bold ${data.pnl > 0 ? "text-green-400" : "text-red-400"}`}>
                            {data.pnl > 0 ? "+" : ""}${data.pnl.toLocaleString()}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Trading Insights */}
            <div className="space-y-6">
              <Card className="glass">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5" />
                    <span>Trading Insights</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Best Trade</span>
                      <span className="font-bold text-green-400">{userStats.bestTrade}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>Worst Trade</span>
                      <span className="font-bold text-red-400">{userStats.worstTrade}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>Longest Streak</span>
                      <span className="font-bold text-primary">{userStats.longestStreak} wins</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Activity className="h-5 w-5" />
                    <span>Activity Summary</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">This Month</span>
                    <span className="font-medium">45 trades</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Active Duels</span>
                    <span className="font-medium">3 ongoing</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Staked Assets</span>
                    <span className="font-medium">$38,460</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Options Positions</span>
                    <span className="font-medium">12 active</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="achievements" className="space-y-6">
          <Card className="glass">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Trophy className="h-5 w-5" />
                <span>Achievements</span>
              </CardTitle>
              <CardDescription>Your trading milestones and accomplishments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {achievements.map((achievement) => (
                  <div
                    key={achievement.id}
                    className={`p-4 rounded-lg border transition-all duration-200 ${
                      achievement.earned
                        ? "bg-secondary/30 border-border/50 hover:bg-secondary/50"
                        : "bg-secondary/10 border-border/20 opacity-60"
                    }`}
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <div
                        className={`w-12 h-12 rounded-lg flex items-center justify-center ${getRarityColor(
                          achievement.rarity,
                        )}`}
                      >
                        <achievement.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">{achievement.name}</h3>
                        <Badge variant="outline" className="text-xs capitalize">
                          {achievement.rarity}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{achievement.description}</p>
                    {achievement.earned ? (
                      <div className="flex items-center text-xs text-green-400">
                        <Award className="h-3 w-3 mr-1" />
                        Earned {achievement.earnedDate}
                      </div>
                    ) : achievement.progress ? (
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span>Progress</span>
                          <span>
                            {achievement.progress}/{achievement.total}
                          </span>
                        </div>
                        <Progress value={(achievement.progress / achievement.total) * 100} className="h-2" />
                      </div>
                    ) : (
                      <div className="text-xs text-muted-foreground">Not earned yet</div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="space-y-6">
          <Card className="glass">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>Trade History</span>
              </CardTitle>
              <CardDescription>Your complete trading activity</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {tradingHistory.map((trade) => (
                  <div
                    key={trade.id}
                    className="flex items-center justify-between p-4 rounded-lg bg-secondary/30 border border-border/50 hover:bg-secondary/50 transition-all duration-200"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center">
                        {getTradeTypeIcon(trade.type)}
                      </div>
                      <div>
                        <div className="font-medium">{trade.asset}</div>
                        <div className="text-sm text-muted-foreground">
                          {trade.type.charAt(0).toUpperCase() + trade.type.slice(1)} • {trade.date}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">{trade.amount}</div>
                      <div className={`text-sm ${trade.pnl.startsWith("+") ? "text-green-400" : "text-red-400"}`}>
                        {trade.pnl}
                      </div>
                    </div>
                    <Badge
                      variant={
                        trade.status === "completed" || trade.status === "won" || trade.status === "exercised"
                          ? "default"
                          : "secondary"
                      }
                      className="text-xs"
                    >
                      {trade.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
