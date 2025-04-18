"use client"

import {
  Chart,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendItem,
} from "@/components/ui/chart"
import { Line, LineChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"

export default function TechTrendsChart() {
  // Mock data - in a real app, this would be fetched from an API
  const data = [
    { month: "Jan", ai: 65, quantum: 28, blockchain: 40, cybersecurity: 55 },
    { month: "Feb", ai: 59, quantum: 30, blockchain: 38, cybersecurity: 58 },
    { month: "Mar", ai: 80, quantum: 32, blockchain: 35, cybersecurity: 60 },
    { month: "Apr", ai: 81, quantum: 47, blockchain: 30, cybersecurity: 62 },
    { month: "May", ai: 76, quantum: 52, blockchain: 32, cybersecurity: 58 },
    { month: "Jun", ai: 85, quantum: 58, blockchain: 35, cybersecurity: 55 },
  ]

  return (
    <ChartContainer>
      <Chart>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Line type="monotone" dataKey="ai" stroke="#8884d8" strokeWidth={2} name="AI & ML" />
            <Line type="monotone" dataKey="quantum" stroke="#82ca9d" strokeWidth={2} name="Quantum Computing" />
            <Line type="monotone" dataKey="blockchain" stroke="#ffc658" strokeWidth={2} name="Blockchain" />
            <Line type="monotone" dataKey="cybersecurity" stroke="#ff8042" strokeWidth={2} name="Cybersecurity" />
          </LineChart>
        </ResponsiveContainer>
      </Chart>
      <ChartLegend>
        <ChartLegendItem name="AI & ML" color="#8884d8" />
        <ChartLegendItem name="Quantum Computing" color="#82ca9d" />
        <ChartLegendItem name="Blockchain" color="#ffc658" />
        <ChartLegendItem name="Cybersecurity" color="#ff8042" />
      </ChartLegend>
    </ChartContainer>
  )
}
