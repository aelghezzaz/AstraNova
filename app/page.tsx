import { Suspense } from "react"
import NewsFeed from "@/components/news-feed"
import CategorySelector from "@/components/category-selector"
import TrendingTopics from "@/components/trending-topics"
import { Skeleton } from "@/components/ui/skeleton"
import AiInsightsWidget from "@/components/ai-insights-widget"
import NewsletterSignup from "@/components/newsletter-signup"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="container py-8">
      <div className="flex flex-col gap-8">
        {/* Hero Section with Image */}
        <section className="relative rounded-xl overflow-hidden">
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-background/95 via-background/70 to-background/30" />
          <Image
            src="/images/tech-hero.png"
            alt="Tech news and insights"
            width={1200}
            height={500}
            className="w-full h-[300px] md:h-[500px] object-cover"
            priority
          />
          <div className="absolute inset-0 z-20 flex flex-col justify-center p-8 fade-in">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-2xl leading-tight">
              <span className="text-primary">Astra</span>Nova
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mt-4 leading-relaxed">
              Stay updated with the latest tech news, AI-powered insights, and market trends
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Button size="lg" className="rounded-full">
                <Link href="/dashboard">Explore Dashboard</Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full">
                <Link href="/chat" className="flex items-center gap-2">
                  Chat with AI <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3 space-y-6">
            <div className="sticky top-24">
              <CategorySelector />
              <div className="mt-8">
                <Suspense fallback={<Skeleton className="h-[300px] w-full" />}>
                  <TrendingTopics />
                </Suspense>
              </div>
              <div className="mt-8">
                <NewsletterSignup />
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <Suspense fallback={<NewsFeedSkeleton />}>
              <NewsFeed />
            </Suspense>
          </div>

          <div className="lg:col-span-3">
            <div className="sticky top-24">
              <Suspense fallback={<Skeleton className="h-[400px] w-full" />}>
                <AiInsightsWidget />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function NewsFeedSkeleton() {
  return (
    <div className="space-y-6">
      {Array(5)
        .fill(0)
        .map((_, i) => (
          <div key={i} className="border rounded-lg p-4 space-y-3">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-24 w-full" />
            <div className="flex justify-between">
              <Skeleton className="h-4 w-[100px]" />
              <Skeleton className="h-4 w-[70px]" />
            </div>
          </div>
        ))}
    </div>
  )
}
