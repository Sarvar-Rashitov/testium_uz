"use client"

import { motion } from "framer-motion"
import { GraduationCap, Building2, UserCircle, Target } from "lucide-react"

const useCases = [
  {
    icon: GraduationCap,
    title: "Learning Centers",
    description: "Run standardized mock exams across all branches with centralized analytics and consistent grading.",
    features: ["Multi-branch support", "Centralized reporting", "Brand customization"],
  },
  {
    icon: Building2,
    title: "Universities",
    description: "Conduct large-scale assessments with secure exam environments and detailed performance tracking.",
    features: ["Bulk student import", "Department analytics", "LMS integration"],
  },
  {
    icon: UserCircle,
    title: "Private Tutors",
    description: "Offer professional mock exams to students with automated grading and progress tracking.",
    features: ["Easy setup", "Student portals", "Progress reports"],
  },
  {
    icon: Target,
    title: "Test Prep Centers",
    description: "Simulate real exam conditions for IELTS, TOEFL, SAT and more with adaptive difficulty.",
    features: ["All exam types", "Adaptive testing", "Score predictions"],
  },
]

export function UseCasesSection() {
  return (
    <section className="py-24 md:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm text-blue-400 font-medium mb-4 block">Solutions</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Built for
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent"> every organization</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Whether you&apos;re a small tutoring center or a large university, EduSelf scales with your needs.
          </p>
        </motion.div>

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card border border-border rounded-2xl p-6 md:p-8 hover:border-blue-500/30 transition-colors h-full">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <useCase.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{useCase.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{useCase.description}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {useCase.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs bg-secondary text-muted-foreground px-3 py-1.5 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
