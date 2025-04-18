import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp } from "lucide-react"

export default function TrendingTopics() {
  const trendingTopics = [
    { name: "GPT-5 Rumors", count: 128 },
    { name: "Apple Vision Pro", count: 96 },
    { name: "Quantum Computing", count: 87 },
    { name: "Web3 Development", count: 72 },
    { name: "Cybersecurity", count: 65 },
    { name: "Tech Layoffs", count: 58 },
    { name: "Robotics", count: 43 },
    { name: "Metaverse", count: 39 },
  ]

  return (
    <Card className="shadow-sm hover:shadow-md transition-shadow duration-300">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2">
          <TrendingUp className="h-4 w-4 text-primary" />
          Trending Topics
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {trendingTopics.map((topic, index) => (
            <div key={index} className="flex items-center justify-between group">
              <span className="text-sm group-hover:text-primary transition-colors">{topic.name}</span>
              <Badge variant="secondary" className="text-xs rounded-full">
                {topic.count} articles
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
