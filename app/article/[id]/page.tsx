import { Suspense } from "react"
import { notFound } from "next/navigation"
import Image from "next/image"
import { Skeleton } from "@/components/ui/skeleton"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Share2, Bookmark, Clock, Calendar, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { getArticleById } from "@/lib/news-service"
import AiSummary from "@/components/ai-summary"
import RelatedArticles from "@/components/related-articles"
import MarketImpactChart from "@/components/market-impact-chart"

interface ArticlePageProps {
  params: {
    id: string
  }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const article = await getArticleById(params.id)

  if (!article) {
    notFound()
  }

  return (
    <div className="container py-8">
      <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-primary mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to news feed
      </Link>

      <article className="max-w-4xl mx-auto">
        <div className="space-y-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="bg-primary/10 text-primary px-2 py-1 rounded-md">{article.category}</span>
              <span className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {new Date(article.publishedAt).toLocaleDateString()}
              </span>
              <span className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {article.readTime} min read
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{article.title}</h1>

            <p className="text-xl text-muted-foreground">{article.description}</p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full overflow-hidden bg-muted">
                  <Image
                    src={article.source.logo || "/placeholder.svg?height=32&width=32"}
                    alt={article.source.name}
                    width={32}
                    height={32}
                  />
                </div>
                <span className="font-medium">{article.source.name}</span>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Bookmark className="h-4 w-4 mr-2" />
                  Save
                </Button>
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>

          <div className="relative aspect-video rounded-lg overflow-hidden">
            <Image
              src={article.imageUrl || "/placeholder.svg?height=500&width=900"}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="article-content">
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </div>
        </div>

        <div className="mt-12 space-y-8">
          <Tabs defaultValue="ai-summary" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="ai-summary">AI Summary</TabsTrigger>
              <TabsTrigger value="market-impact">Market Impact</TabsTrigger>
              <TabsTrigger value="related">Related News</TabsTrigger>
            </TabsList>
            <TabsContent value="ai-summary" className="mt-4">
              <Card className="p-6">
                <Suspense fallback={<Skeleton className="h-[200px] w-full" />}>
                  <AiSummary articleId={article.id} />
                </Suspense>
              </Card>
            </TabsContent>
            <TabsContent value="market-impact" className="mt-4">
              <Card className="p-6">
                <Suspense fallback={<Skeleton className="h-[300px] w-full" />}>
                  <MarketImpactChart articleId={article.id} />
                </Suspense>
              </Card>
            </TabsContent>
            <TabsContent value="related" className="mt-4">
              <Card className="p-6">
                <Suspense fallback={<Skeleton className="h-[300px] w-full" />}>
                  <RelatedArticles articleId={article.id} />
                </Suspense>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </article>
    </div>
  )
}
