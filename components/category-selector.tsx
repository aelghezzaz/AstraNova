"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { useUserPreferences } from "@/context/user-preferences-context"

const CATEGORIES = [
  { id: "ai", name: "AI & ML" },
  { id: "blockchain", name: "Blockchain" },
  { id: "cloud", name: "Cloud Computing" },
  { id: "cybersecurity", name: "Cybersecurity" },
  { id: "data", name: "Data Science" },
  { id: "devops", name: "DevOps" },
  { id: "iot", name: "IoT" },
  { id: "mobile", name: "Mobile" },
  { id: "robotics", name: "Robotics" },
  { id: "startups", name: "Startups" },
  { id: "web", name: "Web Dev" },
]

export default function CategorySelector() {
  const { selectedCategories, toggleCategory } = useUserPreferences()
  const [showAll, setShowAll] = useState(false)

  const displayCategories = showAll ? CATEGORIES : CATEGORIES.slice(0, 6)

  return (
    <Card className="shadow-sm hover:shadow-md transition-shadow duration-300">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">Categories</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {displayCategories.map((category) => {
            const isSelected = selectedCategories.includes(category.id)
            return (
              <Badge
                key={category.id}
                variant={isSelected ? "default" : "outline"}
                className={cn(
                  "cursor-pointer hover:bg-primary/90 transition-colors rounded-full",
                  isSelected ? "bg-primary text-primary-foreground" : "hover:text-primary-foreground",
                )}
                onClick={() => toggleCategory(category.id)}
              >
                {isSelected && <Check className="mr-1 h-3 w-3" />}
                {category.name}
              </Badge>
            )
          })}
        </div>

        {CATEGORIES.length > 6 && (
          <Button
            variant="ghost"
            size="sm"
            className="w-full text-xs rounded-full"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "Show More"}
          </Button>
        )}
      </CardContent>
    </Card>
  )
}
