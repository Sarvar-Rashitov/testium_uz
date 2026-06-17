"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { X, ExternalLink } from "lucide-react"

const promos = [
  {
    id: 1,
    label: "🎓 EduSelf.uz",
    description: "O'zbekistonning eng yaxshi online ta'lim platformasi",
    href: "https://eduself.uz",
    cta: "Batafsil →",
    color: "from-blue-600/20 to-indigo-600/20",
    accent: "text-blue-400",
  },
  {
    id: 2,
    label: "🤖 FinFlow AI Bot",
    description: "Shaxsiy moliyaviy AI menejer — Telegramda",
    href: "https://t.me/finflowuz_robot",
    cta: "Bot ochish →",
    color: "from-emerald-600/20 to-teal-600/20",
    accent: "text-emerald-400",
  },
  {
    id: 3,
    label: "💻 IPE School",
    description: "IT ga ixtisoslashgan professional o'quv markaz",
    href: "https://ipeschool.uz",
    cta: "Ko'rish →",
    color: "from-violet-600/20 to-purple-600/20",
    accent: "text-violet-400",
  },
]

const STORAGE_KEY = "promo_banner_closed"

export function PromoBanner() {
  const [visible, setVisible] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const closed = sessionStorage.getItem(STORAGE_KEY)
    if (!closed) {
      setVisible(true)
      document.documentElement.setAttribute("data-banner", "1")
    }
  }, [])

  // Auto-rotate every 4 seconds
  useEffect(() => {
    if (!visible) return
    const interval = setInterval(() => {
      setFading(true)
      setTimeout(() => {
        setCurrentIndex((i) => (i + 1) % promos.length)
        setFading(false)
      }, 300)
    }, 4000)
    return () => clearInterval(interval)
  }, [visible])

  const handleClose = () => {
    setVisible(false)
    sessionStorage.setItem(STORAGE_KEY, "1")
    document.documentElement.removeAttribute("data-banner")
  }

  if (!visible) return null

  const promo = promos[currentIndex]

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-[60] bg-background/95 backdrop-blur-sm border-b border-border/50 bg-gradient-to-r ${promo.color} transition-colors duration-500`}
    >
      <div className="container mx-auto px-4 relative">
        <div
          className={`flex items-center justify-center gap-3 h-9 text-sm transition-opacity duration-300 ${fading ? "opacity-0" : "opacity-100"}`}
        >
          {/* Dot indicators */}
          <div className="hidden sm:flex items-center gap-1 mr-1">
            {promos.map((_p, i: number) => (
              <button
                key={i}
                onClick={() => { setFading(true); setTimeout(() => { setCurrentIndex(i); setFading(false) }, 300) }}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === currentIndex ? `bg-current ${promo.accent}` : "bg-muted-foreground/30"}`}
                aria-label={`Promo ${i + 1}`}
              />
            ))}
          </div>

          <span className={`font-semibold ${promo.accent} text-xs sm:text-sm`}>
            {promo.label}
          </span>
          <span className="text-muted-foreground hidden sm:inline text-xs">—</span>
          <span className="text-muted-foreground text-xs hidden sm:inline">
            {promo.description}
          </span>
          <Link
            href={promo.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${promo.accent} hover:underline text-xs font-medium flex items-center gap-0.5 shrink-0`}
          >
            {promo.cta}
            <ExternalLink className="w-3 h-3" />
          </Link>
        </div>

        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors p-1 rounded"
          aria-label="Yopish"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  )
}
