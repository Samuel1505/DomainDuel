"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Coins,
  TrendingUp,
  Calendar,
  Zap,
  Plus,
  Clock,
  Target,
  Gift,
  ArrowUpRight,
  Lock,
  Unlock,
  Calculator,
} from "lucide-react"

export function YieldFarmingContent() {
  const [selectedTokens, setSelectedTokens] = useState<string[]>([])
  const [stakeAmount, setStakeAmount] = useState("")
  const [stakingPeriod, setStakingPeriod] = useState("30")

  const stakingPools = [
    {
      id: "1",
      name: "Premium Domain Pool",
      token: "DDUEL",
      apy: "24.5%",
      tvl: "$2.4M",
      minStake: "100 DDUEL",
      lockPeriod: "30 days",
      rewards: ["DDUEL", "ETH"],
      multiplier: "2x",
      status: "active",
      userStaked: "1,250 DDUEL",
      userRewards: "45.2 DDUEL",
      nextReward: "2h 15m",
    },
    {
      id: "2",
      name: "Crypto Domains Vault",
      token: "ETH",
      apy: "18.2%",
      tvl: "$5.8M",
      minStake: "0.1 ETH",
      lockPeriod: "60 days",
      rewards: ["DDUEL", "USDC"],
      multiplier: "1.5x",
      status: "active",
      userStaked: "2.5 ETH",
      userRewards: "125.8 DDUEL",
      nextReward: "1h 42m",
    },
    {
      id: "3",
      name: "High-Yield Staking",
      token: "USDC",
      apy: "32.1%",
      tvl: "$1.2M",
      minStake: "500 USDC",
      lockPeriod: "90 days",
      rewards: ["DDUEL"],
      multiplier: "3x",
      status: "active",
      userStaked: null,
      userRewards: null,
      nextReward: null,
    },
    {
      id: "4",
      name: "Liquidity Provider Pool",
      token: "DDUEL-ETH LP",
      apy: "45.7%",
      tvl: "$890K",
      minStake: "10 LP",
      lockPeriod: "14 days",
      rewards: ["DDUEL", "Trading Fees"],
      multiplier: "4x",
      status: "hot",
      userStaked: null,
      userRewards: null,
      nextReward: null,
    },
  ]

  const userTokens = [
    { symbol: "DDUEL", balance: "5,420", value: "$2,710", selected: false },
    { symbol: "ETH", balance: "12.5", value: "$31,250", selected: false },
    { symbol: "USDC", balance: "8,900", value: "$8,900", selected: false },
    { symbol: "DDUEL-ETH LP", balance: "45.2", value: "$4,520", selected: false },
  ]

  const calculateProjectedEarnings = () => {
    const amount = Number.parseFloat(stakeAmount) || 0
    const days = Number.parseInt(stakingPeriod) || 30
    const apy = 0.245 // 24.5% for example
    return ((amount * apy * days) / 365).toFixed(2)
  }

  const toggleTokenSelection = (symbol: string) => {
    setSelectedTokens((prev) => (prev.includes(symbol) ? prev.filter((s) => s !== symbol) : [...prev, symbol]))
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent neon-text">
          Yield Farming
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Stake your tokens and earn passive rewards while supporting the DomainDuel ecosystem
        </p>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="glass glass-hover">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Staked</CardTitle>
            <Coins className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">$38,460</div>
            <div className="flex items-center text-xs text-green-400">
              <ArrowUpRight className="h-3 w-3 mr-1" />
              +12.5% this month
            </div>
          </CardContent>
        </Card>

        <Card className="glass glass-hover">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Rewards</CardTitle>
            <Gift className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-accent">171 DDUEL</div>
            <div className="flex items-center text-xs text-muted-foreground">Worth ~$855</div>
          </CardContent>
        </Card>

        <Card className="glass glass-hover">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average APY</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-400">28.3%</div>
            <div className="flex items-center text-xs text-muted-foreground">Across all pools</div>
          </CardContent>
        </Card>

        <Card className="glass glass-hover">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Next Reward</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">1h 42m</div>
            <div className="flex items-center text-xs text-muted-foreground">Auto-compound enabled</div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Staking Pools */}
        <div className="lg:col-span-2">
          <Card className="glass">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="h-5 w-5" />
                <span>Staking Pools</span>
              </CardTitle>
              <CardDescription>Choose from our high-yield staking opportunities</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {stakingPools.map((pool) => (
                <div
                  key={pool.id}
                  className="p-4 rounded-lg bg-secondary/30 border border-border/50 hover:bg-secondary/50 transition-all duration-200"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                        <Coins className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{pool.name}</h3>
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline" className="text-xs">
                            {pool.token}
                          </Badge>
                          {pool.status === "hot" && (
                            <Badge variant="destructive" className="text-xs">
                              🔥 Hot
                            </Badge>
                          )}
                          <Badge variant="secondary" className="text-xs">
                            {pool.multiplier} Multiplier
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-400">{pool.apy}</div>
                      <div className="text-xs text-muted-foreground">APY</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-4">
                    <div>
                      <div className="text-muted-foreground">TVL</div>
                      <div className="font-medium">{pool.tvl}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Min Stake</div>
                      <div className="font-medium">{pool.minStake}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Lock Period</div>
                      <div className="font-medium flex items-center">
                        <Lock className="h-3 w-3 mr-1" />
                        {pool.lockPeriod}
                      </div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Rewards</div>
                      <div className="font-medium">{pool.rewards.join(", ")}</div>
                    </div>
                  </div>

                  {pool.userStaked ? (
                    <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 mb-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm text-muted-foreground">Your Stake</div>
                          <div className="font-semibold">{pool.userStaked}</div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">Pending Rewards</div>
                          <div className="font-semibold text-green-400">{pool.userRewards}</div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">Next Reward</div>
                          <div className="font-semibold">{pool.nextReward}</div>
                        </div>
                      </div>
                    </div>
                  ) : null}

                  <div className="flex items-center space-x-2">
                    {pool.userStaked ? (
                      <>
                        <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                          <Plus className="h-3 w-3 mr-1" />
                          Add More
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                          <Gift className="h-3 w-3 mr-1" />
                          Claim Rewards
                        </Button>
                        <Button size="sm" variant="outline">
                          <Unlock className="h-3 w-3 mr-1" />
                          Unstake
                        </Button>
                      </>
                    ) : (
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button size="sm" className="w-full neon-glow">
                            <Zap className="h-3 w-3 mr-1" />
                            Stake Now
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="glass max-w-md">
                          <DialogHeader>
                            <DialogTitle>Stake in {pool.name}</DialogTitle>
                            <DialogDescription>Start earning {pool.apy} APY</DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div className="space-y-2">
                              <Label>Amount to Stake</Label>
                              <Input placeholder={`Min: ${pool.minStake}`} className="glass" />
                            </div>
                            <div className="p-3 rounded-lg bg-secondary/30 border border-border/50">
                              <div className="flex items-center justify-between text-sm">
                                <span>Estimated Daily Rewards</span>
                                <span className="font-medium text-green-400">~12.5 DDUEL</span>
                              </div>
                              <div className="flex items-center justify-between text-sm mt-1">
                                <span>Lock Period</span>
                                <span className="font-medium">{pool.lockPeriod}</span>
                              </div>
                            </div>
                            <Button className="w-full neon-glow">
                              <Lock className="h-4 w-4 mr-2" />
                              Confirm Stake
                            </Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* APY Calculator */}
          <Card className="glass">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calculator className="h-5 w-5" />
                <span>APY Calculator</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Stake Amount</Label>
                <Input
                  placeholder="1000"
                  value={stakeAmount}
                  onChange={(e) => setStakeAmount(e.target.value)}
                  className="glass"
                />
              </div>
              <div className="space-y-2">
                <Label>Staking Period (days)</Label>
                <Input
                  placeholder="30"
                  value={stakingPeriod}
                  onChange={(e) => setStakingPeriod(e.target.value)}
                  className="glass"
                />
              </div>
              <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                <div className="text-center">
                  <div className="text-sm text-muted-foreground">Projected Earnings</div>
                  <div className="text-2xl font-bold text-primary">{calculateProjectedEarnings()} DDUEL</div>
                  <div className="text-xs text-muted-foreground">Based on 24.5% APY</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Token Selection */}
          <Card className="glass">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Coins className="h-5 w-5" />
                <span>Your Tokens</span>
              </CardTitle>
              <CardDescription>Select tokens for batch staking</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {userTokens.map((token) => (
                <div key={token.symbol} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-secondary/30">
                  <Checkbox
                    checked={selectedTokens.includes(token.symbol)}
                    onCheckedChange={() => toggleTokenSelection(token.symbol)}
                  />
                  <div className="flex-1">
                    <div className="font-medium">{token.symbol}</div>
                    <div className="text-sm text-muted-foreground">
                      {token.balance} • {token.value}
                    </div>
                  </div>
                </div>
              ))}
              <Button className="w-full mt-4 bg-transparent" variant="outline" disabled={selectedTokens.length === 0}>
                <Zap className="h-4 w-4 mr-2" />
                Batch Stake Selected
              </Button>
            </CardContent>
          </Card>

          {/* Staking History */}
          <Card className="glass">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>Recent Activity</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { action: "Claimed", amount: "45.2 DDUEL", time: "2h ago", type: "reward" },
                { action: "Staked", amount: "500 USDC", time: "1d ago", type: "stake" },
                { action: "Unstaked", amount: "1.2 ETH", time: "3d ago", type: "unstake" },
              ].map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-2 rounded-lg bg-secondary/20">
                  <div className="flex items-center space-x-2">
                    {activity.type === "reward" && <Gift className="h-4 w-4 text-green-400" />}
                    {activity.type === "stake" && <Lock className="h-4 w-4 text-primary" />}
                    {activity.type === "unstake" && <Unlock className="h-4 w-4 text-accent" />}
                    <div>
                      <div className="text-sm font-medium">{activity.action}</div>
                      <div className="text-xs text-muted-foreground">{activity.time}</div>
                    </div>
                  </div>
                  <div className="text-sm font-medium">{activity.amount}</div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
