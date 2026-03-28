"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, Zap, BarChart3, Clock, Award } from "lucide-react"

const features = [
  {
    icon: CheckCircle,
    title: "All TOEFL Sections",
    description: "Reading, Listening, Speaking, and Writing - complete TOEFL iBT simulation"
  },
  {
    icon: Zap,
    title: "AI Evaluation",
    description: "Advanced AI for evaluating your Speaking and Writing responses"
  },
  {
    icon: Clock,
    title: "TOEFL-Style Interface",
    description: "Authentic TOEFL iBT test interface with accurate timing"
  },
  {
    icon: BarChart3,
    title: "Score Analytics",
    description: "Get your predicted TOEFL score out of 120"
  },
  {
    icon: Award,
    title: "Study Materials",
    description: "Comprehensive resources to improve your TOEFL performance"
  },
]

export default function TOEFLPage() {
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
              <span className="text-sm text-muted-foreground">TOEFL Preparation</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Master 
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent"> TOEFL iBT</span>
              with Testium
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground text-pretty max-w-2xl mx-auto mb-8">
              Take unlimited TOEFL iBT mock exams with AI-powered evaluation. Practice all sections with authentic test conditions, instant feedback, and score prediction.
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
                  Start TOEFL Practice
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
              Complete TOEFL Preparation Solution
            </h2>
            <p className="text-muted-foreground">
              Everything you need to achieve your TOEFL score goals
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
              <h2>Why Choose Testium for TOEFL Practice?</h2>
              <p>
                Testium offers a comprehensive TOEFL practice platform perfect for students preparing for the TOEFL iBT exam. 
                Get realistic practice with instant feedback and accurate score predictions.
              </p>
              
              <ul>
                <li><strong>Authentic iBT Format:</strong> Full-length TOEFL iBT exams mimicking the real test</li>
                <li><strong>AI Scoring:</strong> Advanced AI evaluates Speaking and Writing responses</li>
                <li><strong>Unlimited Practice:</strong> Take as many practice tests as you need</li>
                <li><strong>Score Tracking:</strong> Monitor your progress toward your goal score</li>
                <li><strong>Detailed Feedback:</strong> Get specific insights on your performance</li>
              </ul>

              <h3>TOEFL iBT Sections</h3>
              <ul>
                <li><strong>Reading:</strong> 30-40 questions, 54-72 minutes</li>
                <li><strong>Listening:</strong> 28-39 questions, 41-57 minutes</li>
                <li><strong>Speaking:</strong> 4-6 tasks, 16-20 minutes (AI-evaluated)</li>
                <li><strong>Writing:</strong> 2 tasks, 50 minutes (AI-evaluated)</li>
              </ul>

              <h3>Start Preparing for TOEFL Today</h3>
              <p>
                Begin your TOEFL preparation with Testium and achieve your target score. Our platform combines authentic practice with advanced AI evaluation to help you succeed.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
