import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import Header from "@/components/header"
import { NewsProvider } from "@/context/news-context"
import { UserPreferencesProvider } from "@/context/user-preferences-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AstraNova - Real-Time Tech News & AI Insights",
  description: "Stay updated with the latest tech news and AI-powered insights",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <UserPreferencesProvider>
            <NewsProvider>
              <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-1">{children}</main>
                <footer className="py-6 border-t border-border bg-card">
                  <div className="container text-center text-sm text-muted-foreground">
                    © {new Date().getFullYear()} AstraNova. All rights reserved.
                  </div>
                </footer>
              </div>
              <Toaster />
            </NewsProvider>
          </UserPreferencesProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
