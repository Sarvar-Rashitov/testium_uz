"use client"

import { motion } from "framer-motion"
import { 
  FileText, 
  Cpu, 
  LineChart, 
  Shield, 
  Users 
} from "lucide-react"

const modules = [
  {
    icon: FileText,
    title: "Exam Builder",
    description: "Create custom exams with multiple question types, time limits, and sections.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Cpu,
    title: "AI Grading Engine",
    description: "Advanced AI that evaluates essays, short answers, and complex responses.",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    icon: LineChart,
    title: "Analytics Dashboard",
    description: "Real-time insights into student performance and exam statistics.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Shield,
    title: "Secure Environment",
    description: "Anti-cheating measures including browser lockdown and AI proctoring.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: Users,
    title: "Student Management",
    description: "Organize students, track progress, and manage enrollments easily.",
    gradient: "from-orange-500 to-amber-500",
  },
]

export function ModulesSection() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm text-blue-400 font-medium mb-4 block">Product Modules</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Powerful modules for
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent"> every need</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Each module is designed to work seamlessly together, giving you complete control.
          </p>
        </motion.div>

        {/* Modules Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <motion.div
              key={module.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative ${index === modules.length - 1 && modules.length % 3 === 2 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <div className="relative bg-card border border-border rounded-2xl p-6 md:p-8 hover:border-border/50 transition-all h-full overflow-hidden">
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${module.gradient} opacity-0 group-hover:opacity-5 transition-opacity`} />
                
                <div className={`w-12 h-12 bg-gradient-to-br ${module.gradient} rounded-xl flex items-center justify-center mb-6`}>
                  <module.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{module.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{module.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
