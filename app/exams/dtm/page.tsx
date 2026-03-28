"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, Zap, BarChart3, Clock, Award } from "lucide-react"

const features = [
  {
    icon: CheckCircle,
    title: "DTM Entry Format",
    description: "Authentic DTM exam format matching the official national entrance exam"
  },
  {
    icon: Zap,
    title: "Instant Evaluation",
    description: "AI-powered evaluation with instant scoring and feedback"
  },
  {
    icon: Clock,
    title: "Full Coverage",
    description: "All subjects covered in the DTM national entrance exam"
  },
  {
    icon: BarChart3,
    title: "Detailed Analytics",
    description: "Comprehensive performance analysis by subject area"
  },
  {
    icon: Award,
    title: "Unlimited Tests",
    description: "Practice unlimited mock exams to prepare effectively"
  },
]

export default function DTMPage() {
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
              <span className="text-sm text-muted-foreground">DTM Preparation</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Master Your 
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent"> DTM Exam</span>
              with Testium
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground text-pretty max-w-2xl mx-auto mb-8">
              Prepare for the DTM national university entrance exam with realistic mock tests, AI evaluation, and detailed performance analytics.
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
                  Start DTM Practice
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
              Complete DTM Preparation Solution
            </h2>
            <p className="text-muted-foreground">
              Everything you need to succeed in the DTM national entrance exam
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
              <h2>Why Choose Testium for DTM Preparation?</h2>
              <p>
                Testium provides specialized DTM practice exams designed specifically for the Uzbek national university entrance exam. 
                Our platform offers authentic exam conditions, instant evaluation, and detailed performance insights to help you achieve your goals.
              </p>
              
              <ul>
                <li><strong>Authentic DTM Format:</strong> Exact replication of the official DTM exam structure</li>
                <li><strong>Comprehensive Coverage:</strong> All subjects included in the DTM exam</li>
                <li><strong>AI Evaluation:</strong> Instant scoring and feedback on your performance</li>
                <li><strong>Progress Tracking:</strong> Monitor your improvement over multiple test attempts</li>
                <li><strong>Subject-Specific Practice:</strong> Practice individual subjects to target weak areas</li>
              </ul>

              <h3>DTM Exam Preparation Benefits</h3>
              <ul>
                <li>Familiarize yourself with the exact exam format and types of questions</li>
                <li>Practice in authentic test conditions to reduce exam anxiety</li>
                <li>Identify your weak areas and focus your preparation</li>
                <li>Get accurate scoring to know your readiness for the actual exam</li>
                <li>Build confidence through realistic practice</li>
              </ul>

              <h3>Start Preparing for DTM Today</h3>
              <p>
                Begin your DTM preparation with Testium. Practice with authentic exams, get instant feedback, and achieve your target score for university admission.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
