import { Card, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Calendar, MessageSquare, Share2, Bookmark } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { getNews } from "@/lib/news-service"

export default async function NewsFeed() {
  const articles = await getNews()

  return (
    <div className="space-y-8">
      {articles.map((article, index) => (
        <Card
          key={article.id}
          className={`overflow-hidden card-transition fade-in-delay-${(index % 3) + 1} shadow-sm hover:shadow-md`}
        >
          <div className="md:flex">
            <div className="relative h-48 md:h-auto md:w-1/3 md:flex-none">
              <Image
                src={article.imageUrl || "/placeholder.svg?height=300&width=400"}
                alt={article.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 rounded-full">
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

              <Link href={`/article/${article.id}`} className="group">
                <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {article.title}
                </h2>
              </Link>

              <p className="text-muted-foreground line-clamp-2 mb-4">{article.description}</p>

              <div className="flex items-center mt-auto">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full overflow-hidden bg-muted">
                    <Image
                      src={article.source.logo || "/placeholder.svg?height=24&width=24"}
                      alt={article.source.name}
                      width={24}
                      height={24}
                    />
                  </div>
                  <span className="text-sm font-medium">{article.source.name}</span>
                </div>

                <div className="ml-auto flex items-center gap-1">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MessageSquare className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Share2 className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Bookmark className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <CardFooter className="bg-muted/40 p-3 flex justify-between">
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="text-xs rounded-full">
                AI Analysis
              </Badge>
              <span className="text-xs text-muted-foreground">{article.aiInsight}</span>
            </div>
            <Link href={`/article/${article.id}`}>
              <Button size="sm" variant="default" className="rounded-full">
                Read More
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
