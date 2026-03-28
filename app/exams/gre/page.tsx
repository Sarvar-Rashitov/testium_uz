"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, Zap, BarChart3, Clock, Award } from "lucide-react"

const features = [
  {
    icon: CheckCircle,
    title: "All GRE Sections",
    description: "Verbal reasoning, quantitative reasoning, and analytical writing"
  },
  {
    icon: Zap,
    title: "Instant Scoring",
    description: "Immediate results with detailed score reports and analysis"
  },
  {
    icon: Clock,
    title: "Realistic Format",
    description: "Authentic GRE test format and timing"
  },
  {
    icon: BarChart3,
    title: "Performance Reports",
    description: "Comprehensive analysis of your performance by topic"
  },
  {
    icon: Award,
    title: "Unlimited Practice",
    description: "Take as many full-length or section practices as you need"
  },
]

export default function GREPage() {
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
              <span className="text-sm text-muted-foreground">GRE Preparation</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Excel Your 
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent"> GRE</span>
              with Testium
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground text-pretty max-w-2xl mx-auto mb-8">
              Master GRE with realistic practice exams. Get instant scoring, detailed analysis, and achieve your target GRE score.
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
                  Start GRE Practice
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
              Complete GRE Preparation Solution
            </h2>
            <p className="text-muted-foreground">
              Everything you need to ace the GRE exam
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
              <h2>Why Choose Testium for GRE Preparation?</h2>
              <p>
                Testium provides comprehensive GRE practice resources designed to help you score high on the GRE exam. 
                With unlimited full-length tests and detailed performance analysis, you can effectively prepare for your test date.
              </p>
              
              <ul>
                <li><strong>Full-Length Practice Tests:</strong> Complete GRE mock exams with all sections</li>
                <li><strong>Section-Specific Practice:</strong> Practice verbal, quantitative, and analytical writing separately</li>
                <li><strong>Instant Detailed Feedback:</strong> Get immediate scoring and explanation of each question</li>
                <li><strong>Progress Tracking:</strong> Monitor your improvement across multiple test attempts</li>
                <li><strong>Question Bank:</strong> Practice hundreds of GRE-style questions</li>
              </ul>

              <h3>GRE Test Sections</h3>
              <ul>
                <li><strong>Analytical Writing:</strong> 2 essays, 60 minutes</li>
                <li><strong>Verbal Reasoning:</strong> 2 sections, 60 minutes, 40 questions</li>
                <li><strong>Quantitative Reasoning:</strong> 2 sections, 70 minutes, 40 questions</li>
              </ul>

              <h3>Prepare for GRE Today</h3>
              <p>
                Start your GRE preparation with Testium. Practice with realistic exams, get detailed feedback, and achieve your target GRE score with confidence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
