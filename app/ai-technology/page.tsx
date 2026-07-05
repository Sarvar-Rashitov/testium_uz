"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useI18n } from "@/lib/i18n/context";
import { motion } from "framer-motion";
import {
  Brain,
  Zap,
  LanguagesIcon,
  Eye,
  TrendingUp,
  Shield,
  Check,
} from "lucide-react";

export default function AITechnologyPage() {
  const { t } = useI18n();
  const [activeCapability, setActiveCapability] = useState(0);

  const aiContent = t.aiTechnology;
  const capabilities = aiContent.capabilities.items;
  const howWorks = aiContent.howWorks.steps;
  const advantages = aiContent.advantages.items;
  const ethics = aiContent.ethics.points;

  const capabilityIcons = [
    <Brain key="0" className="w-8 h-8" />,
    <Zap key="1" className="w-8 h-8" />,
    <Eye key="2" className="w-8 h-8" />,
    <LanguagesIcon key="3" className="w-8 h-8" />,
    <TrendingUp key="4" className="w-8 h-8" />,
    <Shield key="5" className="w-8 h-8" />,
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950 dark:to-blue-950">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800">
              <Zap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                {aiContent.badge}
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-blue-600 to-slate-900 dark:from-blue-100 dark:via-blue-400 dark:to-blue-100 bg-clip-text text-transparent"
          >
            {aiContent.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto"
          >
            {aiContent.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {aiContent.capabilities.title}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              {aiContent.capabilities.subtitle}
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                onMouseEnter={() => setActiveCapability(index)}
                className={`p-6 rounded-xl border-2 transition-all cursor-pointer ${
                  activeCapability === index
                    ? "border-blue-500 bg-blue-50 dark:bg-blue-950/30 shadow-lg shadow-blue-500/20"
                    : "border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-700"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`p-3 rounded-lg transition-colors ${
                      activeCapability === index
                        ? "bg-blue-600 text-white"
                        : "bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400"
                    }`}
                  >
                    {capabilityIcons[index]}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                      {capability.name}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      {capability.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {aiContent.howWorks.title}
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4"
          >
            {howWorks.map((step, index) => (
              <motion.div key={index} variants={itemVariants} className="relative">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 flex items-center justify-center text-white font-bold text-lg mb-4">
                    {index + 1}
                  </div>
                  <div className="flex-1 min-h-24 flex flex-col items-center justify-start">
                    <p className="text-center text-sm font-semibold text-slate-900 dark:text-white mb-2">
                      {step.title}
                    </p>
                    <p className="text-center text-xs text-slate-600 dark:text-slate-400">
                      {step.desc}
                    </p>
                  </div>
                </div>
                {index < howWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-6 -right-2 w-4 h-1 bg-gradient-to-r from-blue-500 to-transparent" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {aiContent.advantages.title}
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group p-6 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 transition-all hover:shadow-lg hover:shadow-blue-500/10 dark:hover:shadow-blue-500/20"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 group-hover:bg-blue-500/20 transition-colors flex-shrink-0">
                    <Check className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                      {advantage.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      {advantage.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Ethics Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {aiContent.ethics.title}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              {aiContent.ethics.description}
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {ethics.map((point, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start gap-4 p-4 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
              >
                <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900/30 flex-shrink-0">
                  <Check className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <p className="text-slate-700 dark:text-slate-200 pt-1">{point}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 rounded-2xl p-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              {t.cta.title} <span className="text-blue-200">{t.cta.titleHighlight}</span>
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              {t.cta.subtitle}
            </p>
            <a
              href="https://prep.eduself.uz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              {t.cta.button}
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
