"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ReadingHistory() {
  const [articles] = useState([
    {
      id: "1",
      title: "The Future of Quantum Computing: Breaking New Barriers",
      category: "Quantum Computing",
      publishedAt: "2023-06-15T10:30:00Z",
      readTime: 5,
      readAt: "2023-06-15T14:30:00Z",
      imageUrl: "/placeholder.svg?height=80&width=120",
      source: { name: "MIT Technology Review" },
    },
    {
      id: "2",
      title: "AI Models Are Getting Too Big to Train: What's Next?",
      category: "AI & ML",
      publishedAt: "2023-06-10T14:45:00Z",
      readTime: 7,
      readAt: "2023-06-12T09:15:00Z",
      imageUrl: "/placeholder.svg?height=80&width=120",
      source: { name: "Wired" },
    },
    {
      id: "3",
      title: "The Rise of Decentralized Finance: Beyond Cryptocurrencies",
      category: "Blockchain",
      publishedAt: "2023-06-05T09:15:00Z",
      readTime: 6,
      readAt: "2023-06-07T18:45:00Z",
      imageUrl: "/placeholder.svg?height=80&width=120",
      source: { name: "CoinDesk" },
    },
    {
      id: "4",
      title: "Cybersecurity in the Age of Quantum Computing",
      category: "Cybersecurity",
      publishedAt: "2023-05-28T11:20:00Z",
      readTime: 8,
      readAt: "2023-05-30T12:10:00Z",
      imageUrl: "/placeholder.svg?height=80&width=120",
      source: { name: "Dark Reading" },
    },
    {
      id: "5",
      title: "The Next Generation of Mobile Processors",
      category: "Hardware",
      publishedAt: "2023-05-20T08:45:00Z",
      readTime: 4,
      readAt: "2023-05-22T07:30:00Z",
      imageUrl: "/placeholder.svg?height=80&width=120",
      source: { name: "AnandTech" },
    },
  ])

  const today = new Date()
  const yesterday = new Date(today)
  yesterday.setDate(yesterday.getDate() - 1)
  const lastWeek = new Date(today)
  lastWeek.setDate(lastWeek.getDate() - 7)

  const todayArticles = articles.filter((article) => {
    const readDate = new Date(article.readAt)
    return readDate.toDateString() === today.toDateString()
  })

  const yesterdayArticles = articles.filter((article) => {
    const readDate = new Date(article.readAt)
    return readDate.toDateString() === yesterday.toDateString()
  })

  const olderArticles = articles.filter((article) => {
    const readDate = new Date(article.readAt)
    return readDate < lastWeek
  })

  const renderArticleList = (articleList: typeof articles) => (
    <div className="space-y-3">
      {articleList.map((article) => (
        <Card key={article.id} className="overflow-hidden">
          <CardContent className="p-3">
            <div className="flex gap-3">
              <div className="relative h-16 w-24 flex-none rounded overflow-hidden">
                <Image src={article.imageUrl || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant="outline" className="text-xs">
                    {article.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {article.readTime} min
                  </span>
                </div>
                <Link href={`/article/${article.id}`}>
                  <h4 className="text-sm font-medium truncate hover:text-primary transition-colors">{article.title}</h4>
                </Link>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-xs text-muted-foreground">{article.source.name}</span>
                  <Button variant="ghost" size="sm" className="h-6 w-6 p-0" asChild>
                    <Link href={`/article/${article.id}`}>
                      <ArrowRight className="h-3 w-3" />
                      <span className="sr-only">Read again</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )

  return (
    <Tabs defaultValue="all">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="all">All History</TabsTrigger>
        <TabsTrigger value="today">Today</TabsTrigger>
        <TabsTrigger value="yesterday">Yesterday</TabsTrigger>
      </TabsList>

      <TabsContent value="all" className="mt-4 space-y-6">
        {articles.length > 0 ? (
          renderArticleList(articles)
        ) : (
          <Card className="p-6 text-center">
            <div className="space-y-3">
              <h3 className="text-lg font-medium">No reading history</h3>
              <p className="text-muted-foreground">Articles you read will appear here.</p>
              <Button asChild>
                <Link href="/">Browse Articles</Link>
              </Button>
            </div>
          </Card>
        )}
      </TabsContent>

      <TabsContent value="today" className="mt-4 space-y-6">
        {todayArticles.length > 0 ? (
          renderArticleList(todayArticles)
        ) : (
          <Card className="p-6 text-center">
            <div className="space-y-3">
              <h3 className="text-lg font-medium">No articles read today</h3>
              <p className="text-muted-foreground">Articles you read today will appear here.</p>
              <Button asChild>
                <Link href="/">Browse Articles</Link>
              </Button>
            </div>
          </Card>
        )}
      </TabsContent>

      <TabsContent value="yesterday" className="mt-4 space-y-6">
        {yesterdayArticles.length > 0 ? (
          renderArticleList(yesterdayArticles)
        ) : (
          <Card className="p-6 text-center">
            <div className="space-y-3">
              <h3 className="text-lg font-medium">No articles read yesterday</h3>
              <p className="text-muted-foreground">Articles you read yesterday will appear here.</p>
              <Button asChild>
                <Link href="/">Browse Articles</Link>
              </Button>
            </div>
          </Card>
        )}
      </TabsContent>
    </Tabs>
  )
}
