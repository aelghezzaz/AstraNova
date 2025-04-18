"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sparkles, RefreshCw } from "lucide-react"
import { cn } from "@/lib/utils"

interface AiSummaryProps {
  articleId: string
}

export default function AiSummary({ articleId }: AiSummaryProps) {
  const [summary, setSummary] = useState("")
  const [keyPoints, setKeyPoints] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate API call to get AI summary
    const timer = setTimeout(() => {
      setSummary(
        "This article discusses the latest advancements in quantum computing, highlighting how researchers have achieved a significant breakthrough in error correction. The new approach could accelerate the development of practical quantum computers by addressing one of the field's biggest challenges: maintaining quantum coherence. Industry experts suggest this could reduce the timeline for commercially viable quantum computers by several years.",
      )
      setKeyPoints([
        "New error correction technique improves quantum coherence by 45%",
        "Research team combined machine learning with quantum algorithms",
        "Major tech companies are investing heavily in this approach",
        "Commercial applications could arrive 2-3 years earlier than expected",
        "Potential impact on cryptography, drug discovery, and materials science",
      ])
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [articleId])

  const handleRefresh = () => {
    setIsLoading(true)
    // Simulate refreshing the summary
    setTimeout(() => {
      setSummary(
        "The article explores a breakthrough in quantum computing error correction that could significantly accelerate the field's progress. By combining novel algorithmic approaches with specialized hardware, researchers have demonstrated a 45% improvement in quantum coherence time. This advancement addresses one of the primary obstacles to building practical quantum computers and could reshape the timeline for commercial applications.",
      )
      setKeyPoints([
        "Error correction technique combines hardware and software innovations",
        "45% improvement in quantum coherence demonstrated in lab conditions",
        "Could reduce timeline for practical quantum computers by 2-3 years",
        "Major implications for fields requiring complex simulations",
        "Tech industry leaders are rapidly incorporating these findings",
      ])
      setIsLoading(false)
    }, 1500)
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-primary" />
          AI Summary
        </h3>
        <Button variant="ghost" size="sm" className="h-8 w-8" onClick={handleRefresh} disabled={isLoading}>
          <RefreshCw className={cn("h-4 w-4", isLoading && "animate-spin")} />
        </Button>
      </div>

      {isLoading ? (
        <div className="space-y-3">
          <div className="h-4 bg-muted rounded animate-pulse w-full"></div>
          <div className="h-4 bg-muted rounded animate-pulse w-[95%]"></div>
          <div className="h-4 bg-muted rounded animate-pulse w-[90%]"></div>
          <div className="h-4 bg-muted rounded animate-pulse w-[85%]"></div>
        </div>
      ) : (
        <>
          <p className="text-muted-foreground">{summary}</p>

          <div className="space-y-2">
            <h4 className="font-medium">Key Points:</h4>
            <ul className="space-y-1">
              {keyPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-sm">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  )
}
