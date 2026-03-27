"use client"

import { motion } from "framer-motion"
import { 
  Monitor, 
  Brain, 
  Zap, 
  BarChart3, 
  Layers, 
  Settings 
} from "lucide-react"

const features = [
  {
    icon: Monitor,
    title: "Real Exam Simulation",
    description: "IELTS-like interface with timer, sections, and authentic exam UX that prepares students for the real thing.",
  },
  {
    icon: Brain,
    title: "AI Evaluation System",
    description: "All answers are automatically checked by our advanced AI, ensuring fair and unbiased scoring every time.",
  },
  {
    icon: Zap,
    title: "Real-Time Results",
    description: "Instant scores after submission with live monitoring capabilities for administrators and instructors.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Comprehensive student performance tracking with weakness detection and personalized improvement suggestions.",
  },
  {
    icon: Layers,
    title: "Multi-Exam Support",
    description: "Support for IELTS, TOEFL, SAT, GRE, CEFR, DTM, and custom exam types all in one platform.",
  },
  {
    icon: Settings,
    title: "Organization Control",
    description: "Easy exam creation, student management, and comprehensive result tracking from a single dashboard.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 md:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm text-blue-400 font-medium mb-4 block">Features</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Everything you need to run
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent"> modern exams</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Powerful features designed to streamline your exam process and deliver exceptional results.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity" />
              <div className="relative bg-card border border-border rounded-2xl p-6 md:p-8 hover:border-blue-500/30 transition-colors h-full">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
