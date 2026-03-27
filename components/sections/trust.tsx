"use client"

import { motion } from "framer-motion"
import { useI18n } from "@/lib/i18n/context"

const logos = [
  "Cambridge",
  "Oxford",
  "Stanford",
  "MIT",
  "Harvard",
  "Princeton",
]

export function TrustSection() {
  const { t } = useI18n()

  return (
    <section className="py-20 border-y border-border bg-secondary/20">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground mb-12"
        >
          {t.trust.title}
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {logos.map((logo, index) => (
            <motion.div
              key={logo}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-xl md:text-2xl font-bold text-muted-foreground/50 hover:text-muted-foreground transition-colors"
            >
              {logo}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
