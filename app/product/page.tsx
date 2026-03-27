"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FeaturesSection } from "@/components/sections/features"
import { ModulesSection } from "@/components/sections/modules"
import { AIHighlightSection } from "@/components/sections/ai-highlight"
import { CTASection } from "@/components/sections/cta"
import { motion } from "framer-motion"
import { Package } from "lucide-react"

export default function ProductPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-secondary/50 border border-border rounded-full px-4 py-2 mb-8">
              <Package className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-muted-foreground">Product Overview</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              The complete exam
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent"> platform</span>
            </h1>
            
            <p className="text-lg text-muted-foreground text-pretty">
              Everything you need to create, administer, and evaluate exams with the power of AI.
              Built for modern educational institutions.
            </p>
          </motion.div>
        </div>
      </section>

      <FeaturesSection />
      <ModulesSection />
      <AIHighlightSection />
      <CTASection />
      <Footer />
    </main>
  )
}
