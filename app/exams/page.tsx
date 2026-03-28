"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Zap, Award, BarChart3 } from "lucide-react"

const examTypes = [
  {
    name: 'IELTS',
    description: 'International English Language Testing System',
    href: '/exams/ielts',
    icon: 'graduation',
    keywords: 'mock exam, practice test, band score',
  },
  {
    name: 'TOEFL',
    description: 'Test of English as a Foreign Language iBT',
    href: '/exams/toefl',
    icon: 'zap',
    keywords: 'mock exam, practice test, score 120',
  },
  {
    name: 'SAT',
    description: 'Scholastic Assessment Test for college admissions',
    href: '/exams/sat',
    icon: 'award',
    keywords: 'mock exam, practice test, college prep',
  },
  {
    name: 'GRE',
    description: 'Graduate Record Examination for graduate school',
    href: '/exams/gre',
    icon: 'award',
    keywords: 'mock exam, practice test, graduate prep',
  },
  {
    name: 'DTM',
    description: 'National University Entrance Exam (Uzbekistan)',
    href: '/exams/dtm',
    icon: 'graduation',
    keywords: 'mock exam, practice test, university admission',
  },
  {
    name: 'CEFR',
    description: 'Common European Framework of Reference for Languages',
    href: '/exams/cefr',
    icon: 'award',
    keywords: 'language test, proficiency assessment, all levels',
  },
]

export default function ExamsPage() {
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
              <span className="text-sm text-muted-foreground">All Major Exams</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Complete Exam Preparation 
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent"> Platform</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground text-pretty max-w-2xl mx-auto mb-8">
              Practice IELTS, TOEFL, SAT, GRE, DTM, CEFR and more with AI-powered mock exams. Get instant feedback, detailed analytics, and achieve your target scores.
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
                  Start Practicing Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Exams Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Supported Exams and Assessments
            </h2>
            <p className="text-muted-foreground">
              Choose from a wide range of standardized exams and language assessments
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {examTypes.map((exam, index) => (
              <motion.div
                key={exam.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={exam.href}>
                  <div className="group bg-card border border-border rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300 cursor-pointer h-full hover:shadow-lg hover:shadow-blue-500/10">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-blue-400 transition-colors">
                          {exam.name}
                        </h3>
                        <p className="text-muted-foreground text-sm">{exam.description}</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-blue-400 transition-colors" />
                    </div>
                    
                    <div className="mt-6 pt-6 border-t border-border">
                      <p className="text-xs text-muted-foreground">
                        <Zap className="inline w-3 h-3 mr-1" />
                        {exam.keywords}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Testium */}
      <section className="py-20 border-y border-border bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Why Choose Testium?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Zap,
                title: 'AI-Powered Evaluation',
                desc: 'Instant, accurate evaluation of your answers using advanced AI technology'
              },
              {
                icon: BarChart3,
                title: 'Advanced Analytics',
                desc: 'Detailed performance analysis to identify strengths and weaknesses'
              },
              {
                icon: Award,
                title: 'Score Prediction',
                desc: 'Get accurate predicted scores before taking the actual exam'
              },
            ].map((benefit, i) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Ready to Prepare for Your Exam?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Start practicing with Testium today and get ready for your exam with confidence.
            </p>
            <Button 
              size="lg" 
              className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8 py-6 text-base font-medium group"
              asChild
            >
              <a href="https://prep.testium.uz" target="_blank" rel="noopener noreferrer">
                Start Your Practice
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
