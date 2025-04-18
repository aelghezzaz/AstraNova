"use client"

import { Chart, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts"

export default function TopicDistributionChart() {
  // Mock data - in a real app, this would be fetched from an API
  const data = [
    { name: "AI & ML", value: 35 },
    { name: "Cybersecurity", value: 20 },
    { name: "Quantum Computing", value: 15 },
    { name: "Blockchain", value: 10 },
    { name: "Cloud Computing", value: 10 },
    { name: "Other", value: 10 },
  ]

  const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#0088FE", "#FFBB28"]

  return (
    <ChartContainer>
      <Chart>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <ChartTooltip content={<ChartTooltipContent />} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </Chart>
    </ChartContainer>
  )
}
