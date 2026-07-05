"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Sparkles, Brain, Zap, Scale } from "lucide-react"

const aiFeatures = [
  {
    icon: Brain,
    title: "No Manual Checking",
    description: "AI handles all evaluations automatically, freeing up valuable instructor time.",
  },
  {
    icon: Check,
    title: "Writing Support",
    description: "Advanced NLP evaluates essays, long answers, and complex written responses.",
  },
  {
    icon: Scale,
    title: "Consistent Scoring",
    description: "Eliminates human bias with standardized, objective grading criteria.",
  },
  {
    icon: Zap,
    title: "Infinitely Scalable",
    description: "Grade thousands of exams simultaneously without performance degradation.",
  },
]

export function AIHighlightSection() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-background via-blue-950/10 to-background border-y border-border relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-400 font-medium">AI-Powered</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Fully AI-powered
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent"> evaluation</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Our advanced AI engine evaluates all answer types with unprecedented accuracy. 
              From multiple choice to complex essays, EduSelf delivers instant, unbiased results.
            </p>

            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:from-blue-600 hover:to-indigo-600 rounded-full px-8 group"
            >
              Learn More
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>

          {/* Right Content - Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {aiFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-blue-500/30 transition-colors"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
