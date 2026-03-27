"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { UseCasesSection } from "@/components/sections/use-cases"
import { CTASection } from "@/components/sections/cta"
import { motion } from "framer-motion"
import { Lightbulb, Check } from "lucide-react"

const examTypes = [
  { name: "IELTS", description: "All 4 modules with AI evaluation for Writing and Speaking" },
  { name: "TOEFL", description: "Complete test simulation with integrated scoring" },
  { name: "CEFR", description: "A1 to C2 level assessments with adaptive testing" },
  { name: "SAT", description: "Math and Evidence-Based Reading and Writing" },
  { name: "GRE", description: "Verbal, Quantitative, and Analytical Writing" },
  { name: "DTM", description: "National university entrance exam preparation" },
  { name: "Teacher Attestation", description: "Professional certification exams" },
  { name: "Custom Exams", description: "Build your own exam formats and types" },
]

export default function SolutionsPage() {
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
              <Lightbulb className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-muted-foreground">Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Solutions for
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent"> every exam type</span>
            </h1>
            
            <p className="text-lg text-muted-foreground text-pretty">
              From standardized tests to custom assessments, Testium supports all your examination needs
              with AI-powered evaluation and real-time analytics.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Exam Types */}
      <section className="py-20 border-y border-border bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Supported Exam Types
            </h2>
            <p className="text-muted-foreground">
              We support a wide range of standardized and custom exam formats.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {examTypes.map((exam, index) => (
              <motion.div
                key={exam.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-card border border-border rounded-xl p-5 hover:border-blue-500/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-lg flex items-center justify-center">
                    <Check className="w-4 h-4 text-blue-400" />
                  </div>
                  <h3 className="font-semibold text-foreground">{exam.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{exam.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <UseCasesSection />
      <CTASection />
      <Footer />
    </main>
  )
}
