"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import {
  TrendingUp,
  Search,
  Filter,
  Zap,
  ShoppingCart,
  BarChart3,
  Globe,
  Calendar,
  Shield,
  ArrowUpRight,
  ArrowDownRight,
  Eye,
  Heart,
} from "lucide-react"

export function TradingContent() {
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null)
  const [priceRange, setPriceRange] = useState([0, 50000])
  const [slippageProtection, setSlippageProtection] = useState(true)

  const domains = [
    {
      id: "1",
      name: "crypto.eth",
      price: "$12,500",
      change24h: "+15.2%",
      volume24h: "$45,200",
      expiry: "2025-12-15",
      registrar: "ENS",
      category: "Crypto",
      rarity: "Legendary",
      lastSale: "$10,800",
      bids: 12,
      watchers: 45,
      verified: true,
    },
    {
      id: "2",
      name: "defi.com",
      price: "$8,900",
      change24h: "+8.7%",
      volume24h: "$23,100",
      expiry: "2026-03-22",
      registrar: "GoDaddy",
      category: "Finance",
      rarity: "Epic",
      lastSale: "$8,200",
      bids: 8,
      watchers: 32,
      verified: true,
    },
    {
      id: "3",
      name: "nft.org",
      price: "$6,750",
      change24h: "-2.1%",
      volume24h: "$18,900",
      expiry: "2025-08-10",
      registrar: "Namecheap",
      category: "Tech",
      rarity: "Rare",
      lastSale: "$6,900",
      bids: 5,
      watchers: 28,
      verified: false,
    },
    {
      id: "4",
      name: "web3.io",
      price: "$15,200",
      change24h: "+22.3%",
      volume24h: "$67,800",
      expiry: "2027-01-05",
      registrar: "ENS",
      category: "Tech",
      rarity: "Legendary",
      lastSale: "$12,400",
      bids: 18,
      watchers: 67,
      verified: true,
    },
    {
      id: "5",
      name: "dao.eth",
      price: "$4,200",
      change24h: "+5.4%",
      volume24h: "$12,600",
      expiry: "2025-11-30",
      registrar: "ENS",
      category: "Crypto",
      rarity: "Uncommon",
      lastSale: "$3,980",
      bids: 3,
      watchers: 19,
      verified: true,
    },
    {
      id: "6",
      name: "metaverse.com",
      price: "$9,800",
      change24h: "+11.8%",
      volume24h: "$31,400",
      expiry: "2026-06-18",
      registrar: "GoDaddy",
      category: "Gaming",
      rarity: "Epic",
      lastSale: "$8,750",
      bids: 14,
      watchers: 41,
      verified: true,
    },
  ]

  const orderBook = [
    { type: "buy", price: "$12,400", amount: "1", total: "$12,400" },
    { type: "buy", price: "$12,300", amount: "2", total: "$24,600" },
    { type: "buy", price: "$12,200", amount: "1", total: "$12,200" },
    { type: "sell", price: "$12,600", amount: "1", total: "$12,600" },
    { type: "sell", price: "$12,700", amount: "3", total: "$38,100" },
    { type: "sell", price: "$12,800", amount: "1", total: "$12,800" },
  ]

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "Legendary":
        return "bg-gradient-to-r from-yellow-500 to-orange-500"
      case "Epic":
        return "bg-gradient-to-r from-purple-500 to-pink-500"
      case "Rare":
        return "bg-gradient-to-r from-blue-500 to-cyan-500"
      case "Uncommon":
        return "bg-gradient-to-r from-green-500 to-emerald-500"
      default:
        return "bg-gradient-to-r from-gray-500 to-slate-500"
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent neon-text">
          Domain Trading
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Trade premium domain NFTs with advanced analytics and real-time market data
        </p>
      </div>

      {/* Trading Controls */}
      <Card className="glass">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Filter className="h-5 w-5" />
            <span>Market Filters</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="space-y-2">
              <Label htmlFor="search">Search Domains</Label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input id="search" placeholder="Search by name..." className="pl-10 glass" />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Category</Label>
              <Select>
                <SelectTrigger className="glass">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="crypto">Crypto</SelectItem>
                  <SelectItem value="tech">Tech</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                  <SelectItem value="gaming">Gaming</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Registrar</Label>
              <Select>
                <SelectTrigger className="glass">
                  <SelectValue placeholder="All Registrars" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Registrars</SelectItem>
                  <SelectItem value="ens">ENS</SelectItem>
                  <SelectItem value="godaddy">GoDaddy</SelectItem>
                  <SelectItem value="namecheap">Namecheap</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Sort By</Label>
              <Select>
                <SelectTrigger className="glass">
                  <SelectValue placeholder="Price: High to Low" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="price-desc">Price: High to Low</SelectItem>
                  <SelectItem value="price-asc">Price: Low to High</SelectItem>
                  <SelectItem value="volume-desc">Volume: High to Low</SelectItem>
                  <SelectItem value="change-desc">Change: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="mt-4 space-y-2">
            <Label>
              Price Range: ${priceRange[0].toLocaleString()} - ${priceRange[1].toLocaleString()}
            </Label>
            <Slider value={priceRange} onValueChange={setPriceRange} max={50000} step={500} className="w-full" />
          </div>
        </CardContent>
      </Card>

      {/* Main Trading Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Domain Marketplace */}
        <div className="lg:col-span-2">
          <Card className="glass">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center space-x-2">
                  <Globe className="h-5 w-5" />
                  <span>Domain Marketplace</span>
                </span>
                <Badge variant="outline">{domains.length} domains</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {domains.map((domain) => (
                  <div
                    key={domain.id}
                    className="p-4 rounded-lg bg-secondary/30 border border-border/50 hover:bg-secondary/50 transition-all duration-200 cursor-pointer"
                    onClick={() => setSelectedDomain(domain.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="relative">
                          <div
                            className={`w-12 h-12 rounded-lg ${getRarityColor(domain.rarity)} flex items-center justify-center`}
                          >
                            <Globe className="h-6 w-6 text-white" />
                          </div>
                          {domain.verified && <Shield className="absolute -top-1 -right-1 h-4 w-4 text-green-400" />}
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{domain.name}</h3>
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <Badge variant="outline" className="text-xs">
                              {domain.category}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {domain.rarity}
                            </Badge>
                            <span>{domain.registrar}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right space-y-1">
                        <div className="text-2xl font-bold text-primary">{domain.price}</div>
                        <div
                          className={`text-sm flex items-center ${
                            domain.change24h.startsWith("+") ? "text-green-400" : "text-red-400"
                          }`}
                        >
                          {domain.change24h.startsWith("+") ? (
                            <ArrowUpRight className="h-3 w-3 mr-1" />
                          ) : (
                            <ArrowDownRight className="h-3 w-3 mr-1" />
                          )}
                          {domain.change24h}
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 grid grid-cols-4 gap-4 text-sm">
                      <div>
                        <div className="text-muted-foreground">24h Volume</div>
                        <div className="font-medium">{domain.volume24h}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Last Sale</div>
                        <div className="font-medium">{domain.lastSale}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Bids</div>
                        <div className="font-medium flex items-center">
                          <ShoppingCart className="h-3 w-3 mr-1" />
                          {domain.bids}
                        </div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Watchers</div>
                        <div className="font-medium flex items-center">
                          <Eye className="h-3 w-3 mr-1" />
                          {domain.watchers}
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <span>Expires: {domain.expiry}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button size="sm" variant="outline">
                          <Heart className="h-3 w-3 mr-1" />
                          Watch
                        </Button>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button size="sm" className="neon-glow">
                              <Zap className="h-3 w-3 mr-1" />
                              Buy Now
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="glass max-w-md">
                            <DialogHeader>
                              <DialogTitle>Buy {domain.name}</DialogTitle>
                              <DialogDescription>Complete your purchase with slippage protection</DialogDescription>
                            </DialogHeader>
                            <div className="space-y-4">
                              <div className="p-4 rounded-lg bg-secondary/30 border border-border/50">
                                <div className="flex items-center justify-between">
                                  <span>Domain Price</span>
                                  <span className="font-bold">{domain.price}</span>
                                </div>
                                <div className="flex items-center justify-between mt-2">
                                  <span>Gas Fee (Est.)</span>
                                  <span>$45</span>
                                </div>
                                <div className="flex items-center justify-between mt-2 pt-2 border-t border-border/50">
                                  <span className="font-semibold">Total</span>
                                  <span className="font-bold text-primary">
                                    $
                                    {(
                                      Number.parseInt(domain.price.replace("$", "").replace(",", "")) + 45
                                    ).toLocaleString()}
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-center justify-between">
                                <Label htmlFor="slippage">Slippage Protection</Label>
                                <Switch
                                  id="slippage"
                                  checked={slippageProtection}
                                  onCheckedChange={setSlippageProtection}
                                />
                              </div>
                              <Button className="w-full neon-glow">
                                <Zap className="h-4 w-4 mr-2" />
                                Confirm Purchase
                              </Button>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Order Book & Trading Panel */}
        <div className="space-y-6">
          {/* Order Book */}
          <Card className="glass">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BarChart3 className="h-5 w-5" />
                <span>Order Book</span>
              </CardTitle>
              <CardDescription>crypto.eth trading pairs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="grid grid-cols-3 gap-2 text-xs text-muted-foreground font-medium">
                  <span>Price</span>
                  <span>Amount</span>
                  <span>Total</span>
                </div>
                {orderBook.map((order, index) => (
                  <div
                    key={index}
                    className={`grid grid-cols-3 gap-2 text-sm py-1 px-2 rounded ${
                      order.type === "buy" ? "bg-green-500/10" : "bg-red-500/10"
                    }`}
                  >
                    <span className={order.type === "buy" ? "text-green-400" : "text-red-400"}>{order.price}</span>
                    <span>{order.amount}</span>
                    <span>{order.total}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Trade */}
          <Card className="glass">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5" />
                <span>Quick Trade</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="buy" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="buy">Buy</TabsTrigger>
                  <TabsTrigger value="sell">Sell</TabsTrigger>
                </TabsList>
                <TabsContent value="buy" className="space-y-4">
                  <div className="space-y-2">
                    <Label>Amount (USD)</Label>
                    <Input placeholder="1000" className="glass" />
                  </div>
                  <div className="space-y-2">
                    <Label>Price per domain</Label>
                    <Input placeholder="12,500" className="glass" />
                  </div>
                  <Button className="w-full neon-glow">
                    <ArrowUpRight className="h-4 w-4 mr-2" />
                    Place Buy Order
                  </Button>
                </TabsContent>
                <TabsContent value="sell" className="space-y-4">
                  <div className="space-y-2">
                    <Label>Select Domain</Label>
                    <Select>
                      <SelectTrigger className="glass">
                        <SelectValue placeholder="Choose domain" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="crypto.eth">crypto.eth</SelectItem>
                        <SelectItem value="defi.com">defi.com</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Asking Price</Label>
                    <Input placeholder="13,000" className="glass" />
                  </div>
                  <Button className="w-full bg-transparent" variant="outline">
                    <ArrowDownRight className="h-4 w-4 mr-2" />
                    Place Sell Order
                  </Button>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Market Stats */}
          <Card className="glass">
            <CardHeader>
              <CardTitle>Market Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">24h Volume</span>
                <span className="font-medium">$2.4M</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Active Traders</span>
                <span className="font-medium">1,247</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Avg. Price</span>
                <span className="font-medium">$8,950</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Market Cap</span>
                <span className="font-medium">$45.2M</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
