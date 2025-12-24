"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
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
import { Swords, Timer, Users, DollarSign, Trophy, Zap, Plus, Target, TrendingUp, Clock, Coins } from "lucide-react"

export function DuelArenaContent() {
  const [selectedDuel, setSelectedDuel] = useState<string | null>(null)

  const activeDuels = [
    {
      id: "1",
      name: "Premium Domains Championship",
      participants: 24,
      maxParticipants: 30,
      prizePool: "$15,200",
      timeLeft: "2h 34m",
      entryFee: "$500",
      category: "Premium",
      status: "active",
      myPosition: 3,
      topTrader: "CryptoKing",
      avgReturn: "+12.5%",
    },
    {
      id: "2",
      name: "Tech Domains Battle Royale",
      participants: 18,
      maxParticipants: 25,
      prizePool: "$8,900",
      timeLeft: "5h 12m",
      entryFee: "$300",
      category: "Tech",
      status: "active",
      myPosition: null,
      topTrader: "DomainMaster",
      avgReturn: "+8.7%",
    },
    {
      id: "3",
      name: "Crypto Names Lightning Round",
      participants: 12,
      maxParticipants: 15,
      prizePool: "$4,500",
      timeLeft: "45m",
      entryFee: "$200",
      category: "Crypto",
      status: "ending-soon",
      myPosition: null,
      topTrader: "NFTTrader",
      avgReturn: "+15.2%",
    },
  ]

  const upcomingDuels = [
    {
      id: "4",
      name: "Weekend Warriors Duel",
      participants: 0,
      maxParticipants: 50,
      prizePool: "$25,000",
      startsIn: "1d 12h",
      entryFee: "$750",
      category: "Premium",
      status: "upcoming",
    },
    {
      id: "5",
      name: "Beginner's Luck Challenge",
      participants: 3,
      maxParticipants: 20,
      prizePool: "$2,000",
      startsIn: "6h 30m",
      entryFee: "$100",
      category: "Beginner",
      status: "upcoming",
    },
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent neon-text">
          Duel Arena
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Compete against other traders in real-time domain trading battles
        </p>
      </div>

      {/* Quick Actions */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Dialog>
          <DialogTrigger asChild>
            <Button size="lg" className="neon-glow">
              <Plus className="h-5 w-5 mr-2" />
              Create New Duel
            </Button>
          </DialogTrigger>
          <DialogContent className="glass max-w-md">
            <DialogHeader>
              <DialogTitle>Create New Duel</DialogTitle>
              <DialogDescription>Set up a competitive trading battle</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="duel-name">Duel Name</Label>
                <Input id="duel-name" placeholder="Enter duel name" className="glass" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="entry-fee">Entry Fee (USD)</Label>
                <Input id="entry-fee" type="number" placeholder="500" className="glass" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="duration">Duration</Label>
                <Select>
                  <SelectTrigger className="glass">
                    <SelectValue placeholder="Select duration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1h">1 Hour</SelectItem>
                    <SelectItem value="3h">3 Hours</SelectItem>
                    <SelectItem value="6h">6 Hours</SelectItem>
                    <SelectItem value="12h">12 Hours</SelectItem>
                    <SelectItem value="24h">24 Hours</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="max-participants">Max Participants</Label>
                <Input id="max-participants" type="number" placeholder="20" className="glass" />
              </div>
              <Button className="w-full neon-glow">
                <Swords className="h-4 w-4 mr-2" />
                Create Duel
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        <Button variant="outline" size="lg" className="glass glass-hover bg-transparent">
          <Target className="h-5 w-5 mr-2" />
          Quick Join
        </Button>
      </div>

      {/* Duel Tabs */}
      <Tabs defaultValue="active" className="w-full">
        <TabsList className="grid w-full grid-cols-2 glass">
          <TabsTrigger value="active">Active Duels</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming Duels</TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {activeDuels.map((duel) => (
              <Card key={duel.id} className="glass glass-hover">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{duel.name}</CardTitle>
                    <Badge variant={duel.status === "ending-soon" ? "destructive" : "default"}>
                      {duel.status === "ending-soon" ? "Ending Soon" : "Active"}
                    </Badge>
                  </div>
                  <CardDescription>Category: {duel.category}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Participants Progress */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        Participants
                      </span>
                      <span>
                        {duel.participants}/{duel.maxParticipants}
                      </span>
                    </div>
                    <Progress value={(duel.participants / duel.maxParticipants) * 100} className="h-2" />
                  </div>

                  {/* Duel Stats */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="space-y-1">
                      <div className="flex items-center text-muted-foreground">
                        <DollarSign className="h-3 w-3 mr-1" />
                        Prize Pool
                      </div>
                      <div className="font-semibold text-primary">{duel.prizePool}</div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center text-muted-foreground">
                        <Timer className="h-3 w-3 mr-1" />
                        Time Left
                      </div>
                      <div className="font-semibold">{duel.timeLeft}</div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center text-muted-foreground">
                        <Coins className="h-3 w-3 mr-1" />
                        Entry Fee
                      </div>
                      <div className="font-semibold">{duel.entryFee}</div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center text-muted-foreground">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        Avg Return
                      </div>
                      <div className="font-semibold text-green-400">{duel.avgReturn}</div>
                    </div>
                  </div>

                  {/* Leader Info */}
                  <div className="p-3 rounded-lg bg-secondary/30 border border-border/50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Trophy className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">Leading: {duel.topTrader}</span>
                      </div>
                      {duel.myPosition && (
                        <Badge variant="outline" className="text-xs">
                          You: #{duel.myPosition}
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Action Button */}
                  {duel.myPosition ? (
                    <Button className="w-full bg-transparent" variant="outline">
                      <Zap className="h-4 w-4 mr-2" />
                      View My Position
                    </Button>
                  ) : (
                    <Button className="w-full neon-glow">
                      <Swords className="h-4 w-4 mr-2" />
                      Join Duel
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="upcoming" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {upcomingDuels.map((duel) => (
              <Card key={duel.id} className="glass glass-hover">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{duel.name}</CardTitle>
                    <Badge variant="secondary">Upcoming</Badge>
                  </div>
                  <CardDescription>Category: {duel.category}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Registration Progress */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        Registered
                      </span>
                      <span>
                        {duel.participants}/{duel.maxParticipants}
                      </span>
                    </div>
                    <Progress value={(duel.participants / duel.maxParticipants) * 100} className="h-2" />
                  </div>

                  {/* Duel Info */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="space-y-1">
                      <div className="flex items-center text-muted-foreground">
                        <DollarSign className="h-3 w-3 mr-1" />
                        Prize Pool
                      </div>
                      <div className="font-semibold text-primary">{duel.prizePool}</div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center text-muted-foreground">
                        <Clock className="h-3 w-3 mr-1" />
                        Starts In
                      </div>
                      <div className="font-semibold">{duel.startsIn}</div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center text-muted-foreground">
                        <Coins className="h-3 w-3 mr-1" />
                        Entry Fee
                      </div>
                      <div className="font-semibold">{duel.entryFee}</div>
                    </div>
                  </div>

                  {/* Register Button */}
                  <Button className="w-full neon-glow">
                    <Plus className="h-4 w-4 mr-2" />
                    Register Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* My Active Duels Summary */}
      <Card className="glass">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Zap className="h-5 w-5 text-accent" />
            <span>My Active Duels</span>
          </CardTitle>
          <CardDescription>Your current competitive positions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">3</div>
              <div className="text-sm text-muted-foreground">Active Duels</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-green-400">2</div>
              <div className="text-sm text-muted-foreground">Currently Winning</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-accent">$1,247</div>
              <div className="text-sm text-muted-foreground">Potential Winnings</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
