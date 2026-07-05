"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { useI18n } from "@/lib/i18n/context"
import { LanguageSwitcher } from "@/components/language-switcher"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [hasBanner, setHasBanner] = useState(false)
  const { t } = useI18n()

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/product", label: t.nav.product },
    { href: "/ai-technology", label: t.aiTechnology.nav },
    { href: "/solutions", label: t.nav.solutions },
    { href: "/about", label: t.nav.about },
    { href: "/contact", label: t.nav.contact },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const check = () =>
      setHasBanner(document.documentElement.hasAttribute("data-banner"))
    check()
    const observer = new MutationObserver(check)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-banner"] })
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={cn(
        "fixed left-0 right-0 z-50 transition-all duration-300",
        hasBanner ? "top-9" : "top-0",
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg rotate-6 opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">T</span>
              </div>
            </div>
            <span className="text-xl font-bold text-foreground">EduSelf</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <LanguageSwitcher />
            <Button 
              className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-6"
              asChild
            >
              <a href="https://mymock.eduself.uz" target="_blank" rel="noopener noreferrer">
                {t.nav.demo}
              </a>
            </Button>
            <Button 
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-full px-8 text-base"
              asChild
            >
              <a href="https://mymock.eduself.uz" target="_blank" rel="noopener noreferrer">
                {t.nav.getStarted}
              </a>
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background border-border w-full sm:max-w-md" aria-describedby={undefined}>
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex flex-col gap-8 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-2xl font-medium text-foreground hover:text-muted-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className="flex flex-col gap-3 mt-8">
                    <Button className="w-full bg-foreground text-background font-semibold" asChild>
                      <a href="https://mymock.eduself.uz" target="_blank" rel="noopener noreferrer">
                        {t.nav.demo}
                      </a>
                    </Button>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold" asChild>
                      <a href="https://mymock.eduself.uz" target="_blank" rel="noopener noreferrer">
                        {t.nav.getStarted}
                      </a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  )
}
