import type * as React from "react"
import { cn } from "@/lib/utils"

const Chart = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={cn("w-full h-full", className)}>{children}</div>
}

const ChartContainer = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>
}

const ChartTooltipContent = ({ label, payload }: { label: string; payload: any[] }) => {
  return (
    <div className="rounded-md border bg-secondary p-2 text-sm">
      <div className="font-bold">{label}</div>
      <ul>
        {payload?.map((item, index) => (
          <li key={index} className="text-muted-foreground">
            {item.name}: {item.value}
          </li>
        ))}
      </ul>
    </div>
  )
}

const ChartTooltip = ({ content }: { content: React.ReactNode }) => {
  return <>{content}</>
}

const ChartLegend = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex items-center gap-2">{children}</div>
}

const ChartLegendItem = ({ name, color }: { name: string; color: string }) => {
  return (
    <div className="flex items-center gap-1">
      <div className="h-2 w-2 rounded-full" style={{ backgroundColor: color }}></div>
      <span className="text-sm">{name}</span>
    </div>
  )
}

export { Chart, ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendItem }
