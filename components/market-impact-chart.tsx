"use client"

import { useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Chart,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendItem,
} from "@/components/ui/chart"
import {
  Line,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Area,
  AreaChart,
  BarChart,
  Bar,
} from "recharts"

interface MarketImpactChartProps {
  articleId: string
}

export default function MarketImpactChart({ articleId }: MarketImpactChartProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState<any[]>([])
  const [stockData, setStockData] = useState<any[]>([])
  const [sentimentData, setSentimentData] = useState<any[]>([])

  useEffect(() => {
    // Simulate API call to get market impact data
    const timer = setTimeout(() => {
      // Market trend data
      setData([
        { date: "Jan", quantum: 4000, ai: 2400, blockchain: 2400 },
        { date: "Feb", quantum: 3000, ai: 1398, blockchain: 2210 },
        { date: "Mar", quantum: 2000, ai: 9800, blockchain: 2290 },
        { date: "Apr", quantum: 2780, ai: 3908, blockchain: 2000 },
        { date: "May", quantum: 1890, ai: 4800, blockchain: 2181 },
        { date: "Jun", quantum: 2390, ai: 3800, blockchain: 2500 },
        { date: "Jul", quantum: 3490, ai: 4300, blockchain: 2100 },
      ])

      // Stock price data
      setStockData([
        { date: "Jan", price: 150, volume: 1200 },
        { date: "Feb", price: 145, volume: 1300 },
        { date: "Mar", price: 160, volume: 1500 },
        { date: "Apr", price: 175, volume: 2000 },
        { date: "May", price: 185, volume: 2400 },
        { date: "Jun", price: 190, volume: 1800 },
        { date: "Jul", price: 210, volume: 2200 },
      ])

      // Sentiment data
      setSentimentData([
        { name: "Very Positive", value: 15 },
        { name: "Positive", value: 35 },
        { name: "Neutral", value: 25 },
        { name: "Negative", value: 20 },
        { name: "Very Negative", value: 5 },
      ])

      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [articleId])

  if (isLoading) {
    return (
      <div className="h-[300px] flex items-center justify-center">
        <div className="h-32 w-32 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Market Impact Analysis</h3>

      <Tabs defaultValue="trends">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="trends">Industry Trends</TabsTrigger>
          <TabsTrigger value="stocks">Stock Impact</TabsTrigger>
          <TabsTrigger value="sentiment">Market Sentiment</TabsTrigger>
        </TabsList>

        <TabsContent value="trends" className="pt-4">
          <div className="h-[300px]">
            <ChartContainer>
              <Chart>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line type="monotone" dataKey="quantum" stroke="#8884d8" strokeWidth={2} />
                    <Line type="monotone" dataKey="ai" stroke="#82ca9d" strokeWidth={2} />
                    <Line type="monotone" dataKey="blockchain" stroke="#ffc658" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </Chart>
              <ChartLegend>
                <ChartLegendItem name="Quantum Computing" color="#8884d8" />
                <ChartLegendItem name="AI & ML" color="#82ca9d" />
                <ChartLegendItem name="Blockchain" color="#ffc658" />
              </ChartLegend>
            </ChartContainer>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            This chart shows the industry trends related to the article topic over the past 6 months.
          </p>
        </TabsContent>

        <TabsContent value="stocks" className="pt-4">
          <div className="h-[300px]">
            <ChartContainer>
              <Chart>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={stockData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis yAxisId="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area
                      type="monotone"
                      dataKey="price"
                      yAxisId="left"
                      stroke="#8884d8"
                      fill="#8884d8"
                      fillOpacity={0.3}
                    />
                    <Area
                      type="monotone"
                      dataKey="volume"
                      yAxisId="right"
                      stroke="#82ca9d"
                      fill="#82ca9d"
                      fillOpacity={0.3}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </Chart>
              <ChartLegend>
                <ChartLegendItem name="Stock Price" color="#8884d8" />
                <ChartLegendItem name="Trading Volume" color="#82ca9d" />
              </ChartLegend>
            </ChartContainer>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            This chart shows the stock price and trading volume impact for companies mentioned in the article.
          </p>
        </TabsContent>

        <TabsContent value="sentiment" className="pt-4">
          <div className="h-[300px]">
            <ChartContainer>
              <Chart>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={sentimentData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="value" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </Chart>
            </ChartContainer>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            This chart shows the market sentiment analysis based on social media and news coverage related to the
            article topic.
          </p>
        </TabsContent>
      </Tabs>
    </div>
  )
}
