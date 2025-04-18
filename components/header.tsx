"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ModeToggle } from "@/components/mode-toggle"
import { Bell, Search, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Chat", href: "/chat" },
    { label: "Dashboard", href: "/dashboard" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b"
          : "bg-transparent",
      )}
    >
      <div className="container flex h-16 items-center">
        <div className="flex items-center gap-2 mr-4">
          <Link href="/" className="flex items-center gap-1">
            <span className="text-xl font-bold tracking-tight">
              <span className="text-primary">Astra</span>Nova
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "transition-colors hover:text-foreground/80 relative py-1",
                pathname === item.href
                  ? "text-foreground font-medium after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary"
                  : "text-foreground/60",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex-1" />

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-2">
          {isSearchOpen ? (
            <div className="relative w-60">
              <Input
                placeholder="Search news..."
                className="pr-8 rounded-full"
                autoFocus
                onBlur={() => setIsSearchOpen(false)}
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0"
                onClick={() => setIsSearchOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
              <Search className="h-5 w-5" />
            </Button>
          )}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0">3</Badge>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <div className="p-2 text-sm font-medium">Notifications</div>
              <div className="p-4 text-sm text-muted-foreground">
                <div className="space-y-3">
                  <div className="border-l-2 border-primary pl-3 py-1">
                    <p className="font-medium">Breaking: New AI Breakthrough</p>
                    <p className="text-xs text-muted-foreground">5 min ago</p>
                  </div>
                  <div className="border-l-2 border-primary pl-3 py-1">
                    <p className="font-medium">Tech Market Update Available</p>
                    <p className="text-xs text-muted-foreground">1 hour ago</p>
                  </div>
                  <div className="border-l-2 border-primary pl-3 py-1">
                    <p className="font-medium">New Articles in Your Categories</p>
                    <p className="text-xs text-muted-foreground">3 hours ago</p>
                  </div>
                </div>
              </div>
              <DropdownMenuItem className="cursor-pointer justify-center text-center">
                View all notifications
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <ModeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container py-4 space-y-4">
            <div className="relative">
              <Input placeholder="Search news..." className="rounded-full" />
              <Button variant="ghost" size="icon" className="absolute right-0 top-0">
                <Search className="h-4 w-4" />
              </Button>
            </div>
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm transition-colors hover:text-foreground/80",
                    pathname === item.href ? "text-foreground font-medium" : "text-foreground/60",
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center justify-between pt-4 border-t">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0">3</Badge>
                </Button>
                <span className="text-sm">Notifications</span>
              </div>
              <ModeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
