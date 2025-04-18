"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { useToast } from "@/components/ui/use-toast"
import { useUserPreferences } from "@/context/user-preferences-context"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"

export default function UserPreferences() {
  const { toast } = useToast()
  const { selectedCategories, toggleCategory } = useUserPreferences()

  const [preferences, setPreferences] = useState({
    darkMode: true,
    notifications: true,
    emailDigest: true,
    aiSummaries: true,
    readingTime: 5, // minutes
  })

  const handleSave = () => {
    toast({
      title: "Preferences Saved",
      description: "Your preferences have been updated successfully.",
    })
  }

  const handleChange = (key: string, value: boolean | number) => {
    setPreferences((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

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

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Notification Settings</CardTitle>
          <CardDescription>Configure how you want to receive updates</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="notifications">Push Notifications</Label>
              <p className="text-sm text-muted-foreground">Receive alerts for breaking news</p>
            </div>
            <Switch
              id="notifications"
              checked={preferences.notifications}
              onCheckedChange={(checked) => handleChange("notifications", checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="emailDigest">Email Digest</Label>
              <p className="text-sm text-muted-foreground">Receive a daily summary of top stories</p>
            </div>
            <Switch
              id="emailDigest"
              checked={preferences.emailDigest}
              onCheckedChange={(checked) => handleChange("emailDigest", checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="aiSummaries">AI Summaries</Label>
              <p className="text-sm text-muted-foreground">Show AI-generated summaries for articles</p>
            </div>
            <Switch
              id="aiSummaries"
              checked={preferences.aiSummaries}
              onCheckedChange={(checked) => handleChange("aiSummaries", checked)}
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Content Preferences</CardTitle>
          <CardDescription>Customize your news feed and reading experience</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <Label>Minimum Reading Time (minutes)</Label>
            <div className="flex items-center gap-4">
              <Slider
                value={[preferences.readingTime]}
                min={1}
                max={10}
                step={1}
                onValueChange={(value) => handleChange("readingTime", value[0])}
                className="flex-1"
              />
              <span className="w-12 text-center">{preferences.readingTime}</span>
            </div>
            <p className="text-sm text-muted-foreground">Filter articles shorter than this reading time</p>
          </div>

          <div className="space-y-3">
            <Label>Preferred Categories</Label>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((category) => (
                <Badge
                  key={category.id}
                  variant={selectedCategories.includes(category.id) ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => toggleCategory(category.id)}
                >
                  {selectedCategories.includes(category.id) && <X className="h-3 w-3 mr-1" />}
                  {category.name}
                </Badge>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">Select categories to prioritize in your feed</p>
          </div>
        </CardContent>
      </Card>

      <Button onClick={handleSave} className="w-full">
        Save Preferences
      </Button>
    </div>
  )
}
