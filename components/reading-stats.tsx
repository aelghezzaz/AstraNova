"use client"

import { Chart, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Line, LineChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"

export default function ReadingStats() {
  // Mock data - in a real app, this would be fetched from an API
  const data = [
    { day: "Mon", articles: 3, minutes: 15 },
    { day: "Tue", articles: 5, minutes: 25 },
    { day: "Wed", articles: 2, minutes: 10 },
    { day: "Thu", articles: 6, minutes: 30 },
    { day: "Fri", articles: 4, minutes: 20 },
    { day: "Sat", articles: 7, minutes: 35 },
    { day: "Sun", articles: 3, minutes: 15 },
  ]

  return (
    <ChartContainer>
      <Chart>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="day" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="articles"
              stroke="#8884d8"
              strokeWidth={2}
              name="Articles Read"
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="minutes"
              stroke="#82ca9d"
              strokeWidth={2}
              name="Reading Time (min)"
            />
          </LineChart>
        </ResponsiveContainer>
      </Chart>
    </ChartContainer>
  )
}
