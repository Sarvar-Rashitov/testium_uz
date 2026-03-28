"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, Zap, BarChart3, Clock, Award } from "lucide-react"

const features = [
  {
    icon: CheckCircle,
    title: "All CEFR Levels",
    description: "Practice from A1 (beginner) to C2 (proficiency) levels"
  },
  {
    icon: Zap,
    title: "AI Evaluation",
    description: "Adaptive testing with AI-powered assessment"
  },
  {
    icon: Clock,
    title: "Adaptive Tests",
    description: "Tests adapt to your level for accurate assessment"
  },
  {
    icon: BarChart3,
    title: "Level Reports",
    description: "Detailed proficiency level reporting and certification"
  },
  {
    icon: Award,
    title: "Multiple Languages",
    description: "Assess proficiency across various languages"
  },
]

export default function CEFRPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-secondary/50 border border-border rounded-full px-4 py-2 mb-8">
              <Award className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-muted-foreground">CEFR Assessment</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Master 
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent"> CEFR Levels</span>
              with Testium
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground text-pretty max-w-2xl mx-auto mb-8">
              Assess your language proficiency with CEFR tests. Practice all levels from A1 to C2 with adaptive testing and AI evaluation.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button 
                size="lg" 
                className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8 py-6"
                asChild
              >
                <a href="https://prep.testium.uz" target="_blank" rel="noopener noreferrer">
                  Start CEFR Assessment
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 border-y border-border bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Complete CEFR Assessment Solution
            </h2>
            <p className="text-muted-foreground">
              Comprehensive language proficiency testing from A1 to C2
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card border border-border rounded-xl p-6 hover:border-blue-500/30 transition-colors"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-invert max-w-none"
            >
              <h2>Why Choose Testium for CEFR Assessment?</h2>
              <p>
                Testium provides comprehensive CEFR language proficiency assessments aligned with the European framework. 
                Whether you need to assess your language level, prepare for certification, or track your progress, Testium is your ideal solution.
              </p>
              
              <ul>
                <li><strong>All 6 CEFR Levels:</strong> A1, A2, B1, B2, C1, and C2 assessments</li>
                <li><strong>Adaptive Testing:</strong> Tests that adjust to your proficiency level</li>
                <li><strong>Comprehensive Skills:</strong> Evaluate reading, writing, listening, and speaking</li>
                <li><strong>Accurate Placement:</strong> Determine your true language level</li>
                <li><strong>Progress Tracking:</strong> Monitor your language learning journey</li>
              </ul>

              <h3>CEFR Proficiency Levels</h3>
              <ul>
                <li><strong>A1:</strong> Elementary - Beginner level</li>
                <li><strong>A2:</strong> Elementary - Pre-intermediate level</li>
                <li><strong>B1:</strong> Intermediate - Upper-intermediate level</li>
                <li><strong>B2:</strong> Upper-intermediate - Advanced level</li>
                <li><strong>C1:</strong> Advanced - Proficiency level</li>
                <li><strong>C2:</strong> Mastery - Native-like proficiency</li>
              </ul>

              <h3>Start Your CEFR Assessment Today</h3>
              <p>
                Begin with Testium and assess your language proficiency accurately. Get detailed feedback on your level and continue improving with targeted practice.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
