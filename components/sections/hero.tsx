"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { useI18n } from "@/lib/i18n/context"

export function HeroSection() {
  const { t } = useI18n()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/5 via-indigo-500/5 to-purple-500/5 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-secondary/50 border border-border rounded-full px-4 py-2 mb-8"
          >
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-muted-foreground">{t.hero.badge}</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance mb-6"
          >
            <span className="text-foreground">{t.hero.title1}</span>
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              {t.hero.titleHighlight}
            </span>
            <br />
            <span className="text-foreground">{t.hero.title2}</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty"
          >
            {t.hero.subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button 
              size="lg" 
              className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8 py-6 text-base font-medium group"
              asChild
            >
              <a href="https://prep.eduself.uz" target="_blank" rel="noopener noreferrer">
                {t.hero.requestDemo}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-border hover:bg-secondary rounded-full px-8 py-6 text-base font-medium group"
              asChild
            >
              <a href="https://prep.eduself.uz" target="_blank" rel="noopener noreferrer">
                <Play className="mr-2 h-4 w-4" />
                {t.hero.watchDemo}
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 relative"
        >
          <div className="relative max-w-5xl mx-auto">
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 rounded-2xl blur-2xl" />
            
            {/* Dashboard Card */}
            <div className="relative bg-card border border-border rounded-2xl overflow-hidden shadow-2xl">
              {/* Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <div className="flex-1 text-center">
                  <span className="text-xs text-muted-foreground">EduSelf Dashboard</span>
                </div>
              </div>
              
              {/* Dashboard Content */}
              <div className="p-6 md:p-8">
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Left Panel - Stats */}
                  <div className="space-y-4">
                    <div className="bg-secondary/30 rounded-xl p-4 border border-border">
                      <div className="text-xs text-muted-foreground mb-1">Active Exams</div>
                      <div className="text-2xl font-bold text-foreground">24</div>
                      <div className="text-xs text-green-400 mt-1">+12% from last week</div>
                    </div>
                    <div className="bg-secondary/30 rounded-xl p-4 border border-border">
                      <div className="text-xs text-muted-foreground mb-1">Students Online</div>
                      <div className="text-2xl font-bold text-foreground">1,847</div>
                      <div className="text-xs text-blue-400 mt-1">Taking exams now</div>
                    </div>
                  </div>
                  
                  {/* Center Panel - Chart */}
                  <div className="bg-secondary/30 rounded-xl p-4 border border-border">
                    <div className="text-xs text-muted-foreground mb-4">Performance Analytics</div>
                    <div className="flex items-end justify-between h-32 gap-2">
                      {[65, 45, 80, 55, 90, 70, 85].map((height, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-gradient-to-t from-blue-500/80 to-indigo-500/80 rounded-t"
                          style={{ height: `${height}%` }}
                        />
                      ))}
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                      <span>Mon</span>
                      <span>Sun</span>
                    </div>
                  </div>
                  
                  {/* Right Panel - Recent Activity */}
                  <div className="bg-secondary/30 rounded-xl p-4 border border-border">
                    <div className="text-xs text-muted-foreground mb-4">AI Evaluations</div>
                    <div className="space-y-3">
                      {[
                        { name: "IELTS Writing", score: "7.5", status: "Completed" },
                        { name: "TOEFL Reading", score: "28", status: "In Progress" },
                        { name: "SAT Math", score: "780", status: "Completed" },
                      ].map((item) => (
                        <div key={item.name} className="flex items-center justify-between text-sm">
                          <span className="text-foreground">{item.name}</span>
                          <span className="text-blue-400 font-medium">{item.score}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
