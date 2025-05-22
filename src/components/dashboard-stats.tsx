"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Shield, CalendarDays, Trophy } from "lucide-react"

export function DashboardStats() {
  const [stats, setStats] = useState({
    members: 78,
    projects: 6,
    events: 4,
    achievements: 12,
  })

  const [loading, setLoading] = useState(true)

  // Simulate loading data
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Randomly update one of the stats occasionally
      const random = Math.random()
      if (random > 0.7) {
        const statToUpdate = Math.floor(random * 4)

        setStats((prev) => {
          const newStats = { ...prev }

          switch (statToUpdate) {
            case 0:
              newStats.members = prev.members + 1
              break
            case 1:
              newStats.projects = prev.projects + (Math.random() > 0.5 ? 1 : 0)
              break
            case 2:
              newStats.events = prev.events + (Math.random() > 0.7 ? 1 : 0)
              break
            case 3:
              newStats.achievements = prev.achievements + (Math.random() > 0.8 ? 1 : 0)
              break
          }

          return newStats
        })
      }
    }, 10000) // Check every 10 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Members</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className={`text-2xl font-bold ${loading ? "animate-pulse bg-muted rounded h-8 w-16" : ""}`}>
            {!loading && stats.members}
          </div>
          <p
            className={`text-xs text-muted-foreground ${loading ? "animate-pulse bg-muted rounded h-4 w-32 mt-1" : ""}`}
          >
            {!loading && "+12 from last month"}
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
          <Shield className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className={`text-2xl font-bold ${loading ? "animate-pulse bg-muted rounded h-8 w-8" : ""}`}>
            {!loading && stats.projects}
          </div>
          <p
            className={`text-xs text-muted-foreground ${loading ? "animate-pulse bg-muted rounded h-4 w-32 mt-1" : ""}`}
          >
            {!loading && "+2 from last month"}
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Upcoming Events</CardTitle>
          <CalendarDays className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className={`text-2xl font-bold ${loading ? "animate-pulse bg-muted rounded h-8 w-8" : ""}`}>
            {!loading && stats.events}
          </div>
          <p
            className={`text-xs text-muted-foreground ${loading ? "animate-pulse bg-muted rounded h-4 w-40 mt-1" : ""}`}
          >
            {!loading && "Next: Capture The Flag"}
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Achievements</CardTitle>
          <Trophy className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className={`text-2xl font-bold ${loading ? "animate-pulse bg-muted rounded h-8 w-8" : ""}`}>
            {!loading && stats.achievements}
          </div>
          <p
            className={`text-xs text-muted-foreground ${loading ? "animate-pulse bg-muted rounded h-4 w-36 mt-1" : ""}`}
          >
            {!loading && "+3 from last semester"}
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
