import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock } from "lucide-react"

interface RelatedArticlesProps {
  articleId: string
}

export default function RelatedArticles({ articleId }: RelatedArticlesProps) {
  // Mock data - in a real app, this would be fetched based on the articleId
  const relatedArticles = [
    {
      id: "1",
      title: "Google's New Quantum Processor Achieves Breakthrough in Error Correction",
      category: "Quantum Computing",
      imageUrl: "/placeholder.svg?height=100&width=150",
      readTime: 4,
      source: { name: "TechCrunch" },
    },
    {
      id: "2",
      title: "IBM Announces Partnership with Universities to Advance Quantum Research",
      category: "Quantum Computing",
      imageUrl: "/placeholder.svg?height=100&width=150",
      readTime: 3,
      source: { name: "Wired" },
    },
    {
      id: "3",
      title: "Quantum Computing's Impact on Cryptography: What You Need to Know",
      category: "Cybersecurity",
      imageUrl: "/placeholder.svg?height=100&width=150",
      readTime: 5,
      source: { name: "The Verge" },
    },
  ]

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Related Articles</h3>

      <div className="space-y-4">
        {relatedArticles.map((article) => (
          <Link key={article.id} href={`/article/${article.id}`}>
            <Card className="overflow-hidden hover:bg-muted/50 transition-colors">
              <CardContent className="p-3">
                <div className="flex gap-3">
                  <div className="relative h-16 w-24 flex-none rounded overflow-hidden">
                    <Image
                      src={article.imageUrl || "/placeholder.svg"}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="outline" className="text-xs">
                        {article.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {article.readTime} min
                      </span>
                    </div>
                    <h4 className="text-sm font-medium line-clamp-2">{article.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{article.source.name}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
