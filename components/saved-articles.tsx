"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Trash2, Clock, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useToast } from "@/components/ui/use-toast"

export default function SavedArticles() {
  const { toast } = useToast()
  const [articles, setArticles] = useState([
    {
      id: "1",
      title: "The Future of Quantum Computing: Breaking New Barriers",
      description:
        "Researchers have achieved a significant breakthrough in quantum error correction, potentially accelerating the timeline for practical quantum computers.",
      category: "Quantum Computing",
      publishedAt: "2023-06-15T10:30:00Z",
      readTime: 5,
      imageUrl: "/placeholder.svg?height=100&width=150",
      source: { name: "MIT Technology Review" },
    },
    {
      id: "2",
      title: "AI Models Are Getting Too Big to Train: What's Next?",
      description:
        "As AI models grow exponentially in size, researchers are exploring new techniques to make training more efficient and accessible.",
      category: "AI & ML",
      publishedAt: "2023-06-10T14:45:00Z",
      readTime: 7,
      imageUrl: "/placeholder.svg?height=100&width=150",
      source: { name: "Wired" },
    },
    {
      id: "3",
      title: "The Rise of Decentralized Finance: Beyond Cryptocurrencies",
      description:
        "DeFi applications are expanding beyond simple token exchanges, potentially disrupting traditional financial systems.",
      category: "Blockchain",
      publishedAt: "2023-06-05T09:15:00Z",
      readTime: 6,
      imageUrl: "/placeholder.svg?height=100&width=150",
      source: { name: "CoinDesk" },
    },
  ])

  const removeArticle = (id: string) => {
    setArticles(articles.filter((article) => article.id !== id))
    toast({
      title: "Article removed",
      description: "The article has been removed from your saved items.",
    })
  }

  if (articles.length === 0) {
    return (
      <Card className="p-6 text-center">
        <div className="space-y-3">
          <h3 className="text-lg font-medium">No saved articles</h3>
          <p className="text-muted-foreground">Articles you save will appear here for easy access.</p>
          <Button asChild>
            <Link href="/">Browse Articles</Link>
          </Button>
        </div>
      </Card>
    )
  }

  return (
    <div className="space-y-4">
      {articles.map((article) => (
        <Card key={article.id} className="overflow-hidden">
          <CardContent className="p-4">
            <div className="flex gap-4">
              <div className="relative h-24 w-36 flex-none rounded overflow-hidden">
                <Image src={article.imageUrl || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                    {article.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    {new Date(article.publishedAt).toLocaleDateString()}
                  </span>
                  <span className="text-xs text-muted-foreground flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {article.readTime} min read
                  </span>
                </div>

                <Link href={`/article/${article.id}`}>
                  <h3 className="font-medium hover:text-primary transition-colors">{article.title}</h3>
                </Link>

                <p className="text-sm text-muted-foreground line-clamp-2">{article.description}</p>

                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium">{article.source.name}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0 text-destructive hover:text-destructive hover:bg-destructive/10"
                    onClick={() => removeArticle(article.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                    <span className="sr-only">Remove</span>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
