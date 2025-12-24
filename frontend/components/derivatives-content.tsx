"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  Calendar,
  Target,
  Zap,
  Plus,
  Eye,
  AlertTriangle,
  DollarSign,
  Clock,
  Activity,
  ArrowUpRight,
  Calculator,
} from "lucide-react"

export function DerivativesContent() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [optionType, setOptionType] = useState<"call" | "put">("call")

  const activeOptions = [
    {
      id: "1",
      underlying: "crypto.eth",
      type: "call",
      strikePrice: "$15,000",
      premium: "$450",
      expiry: "2024-01-15",
      daysToExpiry: 23,
      currentPrice: "$12,500",
      impliedVolatility: "45.2%",
      delta: "0.65",
      gamma: "0.12",
      theta: "-2.1",
      vega: "8.4",
      pnl: "+$125",
      pnlPercent: "+27.8%",
      status: "in-the-money",
      volume: "1.2K",
      openInterest: "3.4K",
    },
    {
      id: "2",
      underlying: "defi.com",
      type: "put",
      strikePrice: "$8,000",
      premium: "$320",
      expiry: "2024-02-01",
      daysToExpiry: 40,
      currentPrice: "$8,900",
      impliedVolatility: "38.7%",
      delta: "-0.42",
      gamma: "0.08",
      theta: "-1.8",
      vega: "6.2",
      pnl: "-$85",
      pnlPercent: "-26.6%",
      status: "out-of-the-money",
      volume: "890",
      openInterest: "2.1K",
    },
    {
      id: "3",
      underlying: "web3.io",
      type: "call",
      strikePrice: "$16,000",
      premium: "$680",
      expiry: "2024-01-30",
      daysToExpiry: 38,
      currentPrice: "$15,200",
      impliedVolatility: "52.1%",
      delta: "0.48",
      gamma: "0.15",
      theta: "-3.2",
      vega: "12.1",
      pnl: "+$240",
      pnlPercent: "+35.3%",
      status: "near-the-money",
      volume: "2.1K",
      openInterest: "5.8K",
    },
  ]

  const marketplaceOptions = [
    {
      id: "4",
      underlying: "nft.org",
      type: "call",
      strikePrice: "$7,500",
      premium: "$280",
      expiry: "2024-02-15",
      daysToExpiry: 55,
      currentPrice: "$6,750",
      impliedVolatility: "41.3%",
      seller: "0x1234...5678",
      volume: "450",
      openInterest: "1.2K",
    },
    {
      id: "5",
      underlying: "dao.eth",
      type: "put",
      strikePrice: "$4,000",
      premium: "$180",
      expiry: "2024-01-20",
      daysToExpiry: 28,
      currentPrice: "$4,200",
      impliedVolatility: "35.8%",
      seller: "0xabcd...efgh",
      volume: "320",
      openInterest: "890",
    },
    {
      id: "6",
      underlying: "metaverse.com",
      type: "call",
      strikePrice: "$12,000",
      premium: "$520",
      expiry: "2024-03-01",
      daysToExpiry: 68,
      currentPrice: "$9,800",
      impliedVolatility: "48.9%",
      seller: "0x9876...5432",
      volume: "780",
      openInterest: "2.3K",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "in-the-money":
        return "text-green-400"
      case "out-of-the-money":
        return "text-red-400"
      case "near-the-money":
        return "text-yellow-400"
      default:
        return "text-muted-foreground"
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "in-the-money":
        return <Badge className="bg-green-500/20 text-green-400 border-green-500/30">ITM</Badge>
      case "out-of-the-money":
        return <Badge className="bg-red-500/20 text-red-400 border-red-500/30">OTM</Badge>
      case "near-the-money":
        return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">NTM</Badge>
      default:
        return <Badge variant="outline">Unknown</Badge>
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent neon-text">
          Derivatives Trading
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Trade domain options and advanced derivatives with sophisticated risk management tools
        </p>
      </div>

      {/* Portfolio Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="glass glass-hover">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Portfolio Value</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">$8,450</div>
            <div className="flex items-center text-xs text-green-400">
              <ArrowUpRight className="h-3 w-3 mr-1" />
              +18.5% total P&L
            </div>
          </CardContent>
        </Card>

        <Card className="glass glass-hover">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Positions</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-accent">12</div>
            <div className="flex items-center text-xs text-muted-foreground">8 calls, 4 puts</div>
          </CardContent>
        </Card>

        <Card className="glass glass-hover">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. IV</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-400">42.1%</div>
            <div className="flex items-center text-xs text-muted-foreground">Implied Volatility</div>
          </CardContent>
        </Card>

        <Card className="glass glass-hover">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Theta Decay</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-400">-$12.4</div>
            <div className="flex items-center text-xs text-muted-foreground">Daily time decay</div>
          </CardContent>
        </Card>
      </div>

      {/* Main Trading Interface */}
      <Tabs defaultValue="portfolio" className="w-full">
        <TabsList className="grid w-full grid-cols-3 glass">
          <TabsTrigger value="portfolio">My Portfolio</TabsTrigger>
          <TabsTrigger value="marketplace">Marketplace</TabsTrigger>
          <TabsTrigger value="create">Create Option</TabsTrigger>
        </TabsList>

        <TabsContent value="portfolio" className="space-y-6">
          <Card className="glass">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BarChart3 className="h-5 w-5" />
                <span>Active Positions</span>
              </CardTitle>
              <CardDescription>Your current derivatives portfolio</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activeOptions.map((option) => (
                  <div
                    key={option.id}
                    className="p-4 rounded-lg bg-secondary/30 border border-border/50 hover:bg-secondary/50 transition-all duration-200"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                          {option.type === "call" ? (
                            <TrendingUp className="h-5 w-5 text-white" />
                          ) : (
                            <TrendingDown className="h-5 w-5 text-white" />
                          )}
                        </div>
                        <div>
                          <h3 className="font-semibold">
                            {option.underlying} {option.type.toUpperCase()}
                          </h3>
                          <div className="flex items-center space-x-2">
                            <Badge variant="outline" className="text-xs">
                              Strike: {option.strikePrice}
                            </Badge>
                            {getStatusBadge(option.status)}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div
                          className={`text-lg font-bold ${
                            option.pnl.startsWith("+") ? "text-green-400" : "text-red-400"
                          }`}
                        >
                          {option.pnl}
                        </div>
                        <div
                          className={`text-sm ${option.pnlPercent.startsWith("+") ? "text-green-400" : "text-red-400"}`}
                        >
                          {option.pnlPercent}
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-6 gap-4 text-sm mb-4">
                      <div>
                        <div className="text-muted-foreground">Current Price</div>
                        <div className="font-medium">{option.currentPrice}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Premium Paid</div>
                        <div className="font-medium">{option.premium}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Days to Expiry</div>
                        <div className="font-medium flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {option.daysToExpiry}
                        </div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Delta</div>
                        <div className="font-medium">{option.delta}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Theta</div>
                        <div className="font-medium text-red-400">{option.theta}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">IV</div>
                        <div className="font-medium">{option.impliedVolatility}</div>
                      </div>
                    </div>

                    <div className="mb-3">
                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                        <span>Time to Expiry</span>
                        <span>{option.daysToExpiry} days</span>
                      </div>
                      <Progress value={(option.daysToExpiry / 90) * 100} className="h-2" />
                    </div>

                    <div className="flex items-center space-x-2">
                      <Button size="sm" variant="outline" className="bg-transparent">
                        <Eye className="h-3 w-3 mr-1" />
                        View Details
                      </Button>
                      <Button size="sm" variant="outline" className="bg-transparent">
                        <DollarSign className="h-3 w-3 mr-1" />
                        Sell
                      </Button>
                      <Button size="sm" variant="outline" className="bg-transparent">
                        <Zap className="h-3 w-3 mr-1" />
                        Exercise
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="marketplace" className="space-y-6">
          <Card className="glass">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="h-5 w-5" />
                <span>Options Marketplace</span>
              </CardTitle>
              <CardDescription>Buy options created by other traders</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {marketplaceOptions.map((option) => (
                  <div
                    key={option.id}
                    className="p-4 rounded-lg bg-secondary/30 border border-border/50 hover:bg-secondary/50 transition-all duration-200"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center">
                          {option.type === "call" ? (
                            <TrendingUp className="h-5 w-5 text-white" />
                          ) : (
                            <TrendingDown className="h-5 w-5 text-white" />
                          )}
                        </div>
                        <div>
                          <h3 className="font-semibold">
                            {option.underlying} {option.type.toUpperCase()}
                          </h3>
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <span>by {option.seller}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">{option.premium}</div>
                        <div className="text-xs text-muted-foreground">Premium</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm mb-4">
                      <div>
                        <div className="text-muted-foreground">Strike Price</div>
                        <div className="font-medium">{option.strikePrice}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Current Price</div>
                        <div className="font-medium">{option.currentPrice}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Days to Expiry</div>
                        <div className="font-medium">{option.daysToExpiry}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Volume</div>
                        <div className="font-medium">{option.volume}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Open Interest</div>
                        <div className="font-medium">{option.openInterest}</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Button size="sm" className="neon-glow">
                        <Zap className="h-3 w-3 mr-1" />
                        Buy Option
                      </Button>
                      <Button size="sm" variant="outline" className="bg-transparent">
                        <Eye className="h-3 w-3 mr-1" />
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="create" className="space-y-6">
          <Card className="glass">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Plus className="h-5 w-5" />
                <span>Create New Option</span>
              </CardTitle>
              <CardDescription>Write options and earn premium income</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Underlying Asset</Label>
                    <Select>
                      <SelectTrigger className="glass">
                        <SelectValue placeholder="Select domain" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="crypto.eth">crypto.eth</SelectItem>
                        <SelectItem value="defi.com">defi.com</SelectItem>
                        <SelectItem value="web3.io">web3.io</SelectItem>
                        <SelectItem value="nft.org">nft.org</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Option Type</Label>
                    <div className="flex space-x-2">
                      <Button
                        variant={optionType === "call" ? "default" : "outline"}
                        onClick={() => setOptionType("call")}
                        className="flex-1"
                      >
                        <TrendingUp className="h-4 w-4 mr-2" />
                        Call
                      </Button>
                      <Button
                        variant={optionType === "put" ? "default" : "outline"}
                        onClick={() => setOptionType("put")}
                        className="flex-1"
                      >
                        <TrendingDown className="h-4 w-4 mr-2" />
                        Put
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Strike Price (USD)</Label>
                    <Input placeholder="15,000" className="glass" />
                  </div>

                  <div className="space-y-2">
                    <Label>Premium (USD)</Label>
                    <Input placeholder="500" className="glass" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Expiration Date</Label>
                    <Select>
                      <SelectTrigger className="glass">
                        <SelectValue placeholder="Select expiry" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="7d">7 Days</SelectItem>
                        <SelectItem value="14d">14 Days</SelectItem>
                        <SelectItem value="30d">30 Days</SelectItem>
                        <SelectItem value="60d">60 Days</SelectItem>
                        <SelectItem value="90d">90 Days</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Collateral Required</Label>
                    <div className="p-3 rounded-lg bg-secondary/30 border border-border/50">
                      <div className="text-lg font-semibold text-primary">$15,000</div>
                      <div className="text-sm text-muted-foreground">Required to secure this {optionType} option</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                    <div className="flex items-start space-x-2">
                      <AlertTriangle className="h-5 w-5 text-yellow-400 mt-0.5" />
                      <div>
                        <div className="font-medium text-yellow-400">Risk Warning</div>
                        <div className="text-sm text-muted-foreground">
                          Writing options involves unlimited risk. Ensure you understand the risks before proceeding.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Button className="flex-1 neon-glow">
                  <Plus className="h-4 w-4 mr-2" />
                  Create Option
                </Button>
                <Button variant="outline" className="flex-1 bg-transparent">
                  <Calculator className="h-4 w-4 mr-2" />
                  Calculate Greeks
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Risk Metrics */}
      <Card className="glass">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertTriangle className="h-5 w-5" />
            <span>Portfolio Risk Metrics</span>
          </CardTitle>
          <CardDescription>Monitor your derivatives exposure and risk parameters</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center space-y-2">
              <div className="text-2xl font-bold text-green-400">+0.85</div>
              <div className="text-sm text-muted-foreground">Portfolio Delta</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-2xl font-bold text-blue-400">+0.12</div>
              <div className="text-sm text-muted-foreground">Portfolio Gamma</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-2xl font-bold text-red-400">-12.4</div>
              <div className="text-sm text-muted-foreground">Portfolio Theta</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-2xl font-bold text-purple-400">+28.7</div>
              <div className="text-sm text-muted-foreground">Portfolio Vega</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
