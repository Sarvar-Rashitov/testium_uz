"use client"

import { motion } from "framer-motion"
import { Settings, FileText, Users, Zap, BarChart3, ArrowRight } from "lucide-react"
import { useI18n } from "@/lib/i18n/context"

const stepIcons = [Settings, FileText, Users, Zap, BarChart3]

const getSteps = (t: any) => [
  {
    number: "01",
    title: t.howItWorks.steps.step1,
    description: t.howItWorks.steps.step1Desc,
    icon: Settings,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
  },
  {
    number: "02",
    title: t.howItWorks.steps.step2,
    description: t.howItWorks.steps.step2Desc,
    icon: FileText,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
  },
  {
    number: "03",
    title: t.howItWorks.steps.step3,
    description: t.howItWorks.steps.step3Desc,
    icon: Users,
    color: "from-indigo-500 to-blue-500",
    bgColor: "bg-indigo-500/10",
  },
  {
    number: "04",
    title: t.howItWorks.steps.step4,
    description: t.howItWorks.steps.step4Desc,
    icon: Zap,
    color: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-500/10",
  },
]

export function HowItWorksSection() {
  const { t } = useI18n()
  const steps = getSteps(t)

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-background via-secondary/5 to-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-sm text-blue-400 font-medium mb-4 block uppercase tracking-wider">
            {t.howItWorks.badge}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            {t.howItWorks.title}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent"> {t.howItWorks.titleHighlight}</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            {t.howItWorks.subtitle}
          </p>
        </motion.div>

        {/* Timeline Roadmap */}
        <div className="max-w-5xl mx-auto">
          {/* Desktop Timeline */}
          <div className="hidden md:block">
            {/* Horizontal Line */}
            <div className="absolute left-1/2 top-1/2 h-1 bg-gradient-to-r from-blue-500/20 via-indigo-500/50 to-purple-500/20 -translate-y-1/2" style={{ width: "calc(100% - 40px)", left: "20px" }} />

            {/* Steps Grid */}
            <div className="grid grid-cols-4 gap-6 mb-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative group"
                >
                  {/* Card */}
                  <div className="bg-card border border-border rounded-2xl p-6 h-full hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                    {/* Icon Circle */}
                    <div className={`w-14 h-14 ${step.bgColor} rounded-xl flex items-center justify-center mx-auto mb-4 relative z-10 group-hover:scale-110 transition-transform duration-300`}>
                      <step.icon className="w-7 h-7 text-foreground" />
                    </div>

                    {/* Step Number Badge */}
                    <div className="absolute -top-3 right-4">
                      <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r ${step.color} text-white text-xs font-bold`}>
                        {index + 1}
                      </span>
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-semibold text-foreground mb-3 text-center">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground text-center leading-relaxed">
                      {step.description}
                    </p>

                    {/* Bottom Arrow */}
                    {index < steps.length - 1 && (
                      <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 hidden lg:block">
                        <ArrowRight className="w-6 h-6 text-blue-500/50 group-hover:text-blue-500 transition-colors" />
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative flex gap-4 pb-12 last:pb-0"
              >
                {/* Vertical Line */}
                {index !== steps.length - 1 && (
                  <div className="absolute left-6 top-16 w-px h-full bg-gradient-to-b from-blue-500/50 to-transparent" />
                )}

                {/* Step Circle */}
                <div className="flex-shrink-0 relative">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-sm`}>
                    {index + 1}
                  </div>
                </div>

                {/* Card Content */}
                <div className={`bg-card border border-border rounded-xl p-4 flex-grow hover:border-blue-500/30 transition-all duration-300`}>
                  <h3 className="font-semibold text-foreground mb-1 flex items-center gap-2">
                    <step.icon className="w-4 h-4" />
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16 pt-8 border-t border-border/50"
        >
          <p className="text-muted-foreground mb-6">
            Ready to get started? It takes less than <span className="font-semibold text-foreground">5 minutes</span> to set up.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
