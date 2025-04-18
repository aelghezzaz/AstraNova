import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Suspense } from "react"
import { Skeleton } from "@/components/ui/skeleton"
import UserPreferences from "@/components/user-preferences"
import SavedArticles from "@/components/saved-articles"
import ReadingHistory from "@/components/reading-history"
import TechTrendsChart from "@/components/tech-trends-chart"
import TopicDistributionChart from "@/components/topic-distribution-chart"
import ReadingStats from "@/components/reading-stats"
import Image from "next/image"

export default function DashboardPage() {
  return (
    <div className="container py-8">
      <div className="space-y-6">
        <div className="relative rounded-xl overflow-hidden mb-6">
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-background/95 via-background/70 to-background/20" />
          <Image
            src="/images/tech-hero.png"
            alt="Tech dashboard"
            width={1200}
            height={300}
            className="w-full h-[200px] object-cover"
          />
          <div className="absolute inset-0 z-20 flex flex-col justify-center p-6 fade-in">
            <h1 className="text-3xl font-bold tracking-tight">Your Dashboard</h1>
            <p className="text-muted-foreground mt-1">Personalize your experience and track your reading habits</p>
          </div>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4 md:w-auto rounded-full p-1">
            <TabsTrigger value="overview" className="rounded-full">
              Overview
            </TabsTrigger>
            <TabsTrigger value="saved" className="rounded-full">
              Saved Articles
            </TabsTrigger>
            <TabsTrigger value="history" className="rounded-full">
              Reading History
            </TabsTrigger>
            <TabsTrigger value="preferences" className="rounded-full">
              Preferences
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="shadow-sm hover:shadow-md transition-shadow duration-300 fade-in-delay-1">
                <CardHeader className="pb-2">
                  <CardTitle>Articles Read</CardTitle>
                  <CardDescription>Last 30 days</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">42</div>
                  <p className="text-sm text-muted-foreground mt-1">+12% from last month</p>
                </CardContent>
              </Card>

              <Card className="shadow-sm hover:shadow-md transition-shadow duration-300 fade-in-delay-2">
                <CardHeader className="pb-2">
                  <CardTitle>Reading Time</CardTitle>
                  <CardDescription>Last 30 days</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">3.5 hrs</div>
                  <p className="text-sm text-muted-foreground mt-1">+5% from last month</p>
                </CardContent>
              </Card>

              <Card className="shadow-sm hover:shadow-md transition-shadow duration-300 fade-in-delay-3">
                <CardHeader className="pb-2">
                  <CardTitle>Favorite Category</CardTitle>
                  <CardDescription>Based on reading habits</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">AI</div>
                  <p className="text-sm text-muted-foreground mt-1">15 articles this month</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="md:col-span-1 shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>Reading Activity</CardTitle>
                  <CardDescription>Your reading patterns over time</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px]">
                  <Suspense fallback={<Skeleton className="h-full w-full" />}>
                    <ReadingStats />
                  </Suspense>
                </CardContent>
              </Card>

              <Card className="md:col-span-1 shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>Topic Distribution</CardTitle>
                  <CardDescription>Categories you read most</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px]">
                  <Suspense fallback={<Skeleton className="h-full w-full" />}>
                    <TopicDistributionChart />
                  </Suspense>
                </CardContent>
              </Card>
            </div>

            <Card className="shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardHeader>
                <CardTitle>Tech Trends</CardTitle>
                <CardDescription>Popular topics in your reading history</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <Suspense fallback={<Skeleton className="h-full w-full" />}>
                  <TechTrendsChart />
                </Suspense>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="saved" className="mt-6">
            <Suspense fallback={<ArticlesSkeleton count={6} />}>
              <SavedArticles />
            </Suspense>
          </TabsContent>

          <TabsContent value="history" className="mt-6">
            <Suspense fallback={<ArticlesSkeleton count={10} />}>
              <ReadingHistory />
            </Suspense>
          </TabsContent>

          <TabsContent value="preferences" className="mt-6">
            <UserPreferences />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

function ArticlesSkeleton({ count = 5 }: { count?: number }) {
  return (
    <div className="space-y-4">
      {Array(count)
        .fill(0)
        .map((_, i) => (
          <Card key={i} className="shadow-sm">
            <CardContent className="p-4 flex gap-4">
              <Skeleton className="h-16 w-16 rounded-md" />
              <div className="space-y-2 flex-1">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-4 w-1/4" />
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-4 w-1/4" />
              </div>
            </CardContent>
          </Card>
        ))}
    </div>
  )
}
