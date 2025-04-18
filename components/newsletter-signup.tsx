"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, CheckCircle } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import Image from "next/image"

export default function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubscribed(true)
      toast({
        title: "Subscribed!",
        description: "You've been added to our newsletter.",
      })
    }, 1500)
  }

  if (isSubscribed) {
    return (
      <Card className="shadow-sm hover:shadow-md transition-shadow duration-300">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-green-500" />
            Subscribed!
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative h-32 w-full mb-3 rounded-md overflow-hidden">
            <Image src="/images/tech-hero.png" alt="Newsletter subscription confirmed" fill className="object-cover" />
          </div>
          <p className="text-sm text-muted-foreground">
            Thank you for subscribing to the AstraNova newsletter. You'll receive the latest updates soon!
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="shadow-sm hover:shadow-md transition-shadow duration-300">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2">
          <Mail className="h-4 w-4 text-primary" />
          Newsletter
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative h-32 w-full mb-3 rounded-md overflow-hidden">
          <Image src="/images/tech-hero.png" alt="Tech newsletter subscription" fill className="object-cover" />
        </div>
        <form onSubmit={handleSubmit} className="space-y-3">
          <p className="text-sm text-muted-foreground">
            Get the latest tech news and insights delivered to your inbox.
          </p>
          <Input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="rounded-full"
          />
          <Button type="submit" className="w-full rounded-full" disabled={isSubmitting || !email}>
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
