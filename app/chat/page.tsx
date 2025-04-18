"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Send, Bot, User, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"
import { useToast } from "@/components/ui/use-toast"
import { Skeleton } from "@/components/ui/skeleton"
import Image from "next/image"

type Message = {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Hello! I'm your AstraNova AI assistant. Ask me about any tech news, trends, or for insights on specific tech topics.",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const { toast } = useToast()

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      // Simulate AI response - in a real app, this would call your AI API
      setTimeout(() => {
        const aiResponse: Message = {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: generateMockResponse(input),
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, aiResponse])
        setIsLoading(false)
      }, 1500)
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to get a response. Please try again.",
        variant: "destructive",
      })
      setIsLoading(false)
    }
  }

  // Mock response generator - replace with actual AI integration
  const generateMockResponse = (query: string): string => {
    const responses = [
      "Based on recent tech news, there's been significant advancement in AI models that can generate more accurate and contextually relevant responses.",
      "The latest market trends show that tech companies focusing on AI and machine learning are seeing substantial growth in their stock prices.",
      "According to recent reports, the semiconductor industry is facing supply chain challenges, which might impact the production of various tech products.",
      "The cybersecurity landscape is evolving rapidly with new threats emerging daily. Companies are investing heavily in advanced security measures.",
      "Recent developments in quantum computing suggest we might see practical applications sooner than previously anticipated.",
    ]

    return responses[Math.floor(Math.random() * responses.length)]
  }

  return (
    <div className="container py-8 max-w-4xl">
      <div className="space-y-4">
        <div className="relative rounded-xl overflow-hidden mb-6">
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-background/95 via-background/70 to-background/20" />
          <Image
            src="/images/tech-hero.png"
            alt="AI Chat Assistant"
            width={1200}
            height={300}
            className="w-full h-[150px] object-cover"
          />
          <div className="absolute inset-0 z-20 flex flex-col justify-center p-6 fade-in">
            <div className="flex items-center gap-2">
              <Bot className="h-6 w-6 text-primary" />
              <h1 className="text-2xl font-bold">AstraNova AI Chat</h1>
            </div>
            <p className="text-muted-foreground mt-1">
              Ask questions about tech news, get insights on market trends, or request summaries of recent developments.
            </p>
          </div>
        </div>

        <Card className="p-4 h-[600px] flex flex-col shadow-sm hover:shadow-md transition-shadow duration-300 rounded-xl">
          <div className="flex-1 overflow-y-auto pr-2 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn("flex items-start gap-3", message.role === "user" ? "justify-end" : "")}
              >
                {message.role === "assistant" && (
                  <Avatar className="h-8 w-8 bg-primary/10">
                    <AvatarFallback className="text-primary">AI</AvatarFallback>
                    <AvatarImage src="/placeholder.svg?height=32&width=32" />
                  </Avatar>
                )}

                <div
                  className={cn(
                    "rounded-2xl px-4 py-2 max-w-[80%]",
                    message.role === "assistant" ? "bg-muted text-foreground" : "bg-primary text-primary-foreground",
                  )}
                >
                  <p className="whitespace-pre-wrap">{message.content}</p>
                  <div className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </div>
                </div>

                {message.role === "user" && (
                  <Avatar className="h-8 w-8 bg-primary">
                    <AvatarFallback>
                      <User className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex items-start gap-3">
                <Avatar className="h-8 w-8 bg-primary/10">
                  <AvatarFallback className="text-primary">AI</AvatarFallback>
                </Avatar>
                <div className="space-y-2 max-w-[80%]">
                  <Skeleton className="h-4 w-[250px] rounded-full" />
                  <Skeleton className="h-4 w-[180px] rounded-full" />
                  <Skeleton className="h-4 w-[220px] rounded-full" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about tech news, trends, or specific topics..."
              className="flex-1 rounded-full"
              disabled={isLoading}
            />
            <Button type="submit" disabled={isLoading || !input.trim()} className="rounded-full">
              <Send className="h-4 w-4" />
              <span className="sr-only">Send</span>
            </Button>
          </form>
        </Card>

        <div className="mt-6 fade-in-delay-1">
          <h2 className="text-lg font-medium mb-3 flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            Suggested Questions
          </h2>
          <div className="flex flex-wrap gap-2">
            {[
              "What are the latest AI advancements?",
              "How is the semiconductor shortage affecting tech?",
              "Summarize recent cybersecurity threats",
              "What's new in quantum computing?",
              "Tech market trends this week",
            ].map((question, i) => (
              <Button
                key={i}
                variant="outline"
                size="sm"
                className="text-sm rounded-full"
                onClick={() => setInput(question)}
              >
                {question}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
