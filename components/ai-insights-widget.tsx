"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sparkles, RefreshCw } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

export default function AiInsightsWidget() {
  const [isLoading, setIsLoading] = useState(false)

  const insights = [
    {
      title: "AI Market Trend",
      content: "Investment in AI startups has increased by 45% in Q1 2023 compared to the same period last year.",
      category: "Market",
      image: "/images/ai-chip.png",
    },
    {
      title: "Tech Regulation Alert",
      content: "New data privacy regulations in the EU could impact how tech companies handle user information.",
      category: "Regulation",
      image: "/images/cybersecurity.png",
    },
    {
      title: "Innovation Spotlight",
      content: "Breakthrough in quantum computing could lead to practical applications within 3-5 years.",
      category: "Innovation",
      image: "/images/quantum-computer.png",
    },
  ]

  const handleRefresh = () => {
    setIsLoading(true)
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }

  return (
    <Card className="shadow-sm hover:shadow-md transition-shadow duration-300">
      <CardHeader className="pb-3 flex flex-row items-center justify-between">
        <CardTitle className="text-lg flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-primary" />
          AI Insights
        </CardTitle>
        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={handleRefresh} disabled={isLoading}>
          <RefreshCw className={cn("h-4 w-4", isLoading && "animate-spin")} />
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {insights.map((insight, index) => (
          <div key={index} className={`space-y-2 fade-in-delay-${index + 1}`}>
            <div className="flex gap-3">
              <div className="relative h-16 w-24 rounded-md overflow-hidden flex-shrink-0">
                <Image src={insight.image || "/placeholder.svg"} alt={insight.title} fill className="object-cover" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">{insight.title}</h3>
                  <Badge variant="outline" className="text-xs rounded-full">
                    {insight.category}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{insight.content}</p>
              </div>
            </div>
            {index < insights.length - 1 && <hr className="my-2" />}
          </div>
        ))}

        <Button variant="outline" className="w-full text-sm rounded-full" size="sm">
          View All Insights
        </Button>
      </CardContent>
    </Card>
  )
}
