"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { ScrollText } from "lucide-react";

export default function TermsPage() {
  const sections = [
    {
      title: "1. Agreement to Terms",
      content:
        "By accessing and using the Testium platform, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the whole of the terms and provision of this agreement, then you may not access or use this service.",
    },
    {
      title: "2. Use License",
      content:
        "Unless otherwise stated, Testium and its licensors own the intellectual property rights for all material on the platform. All rights are reserved. You may view and print pages from the service for personal use, subject to restrictions set in these terms and conditions.",
      items: [
        "Must not republish content from Testium without proper attribution",
        "Must not sell, rent, or sub-license material from the platform",
        "Must not reproduce, duplicate, copy content for commercial purposes",
        "Must not transmit content without Testium's prior written consent",
        "Content may not be accessed for any reason other than personal use",
      ],
    },
    {
      title: "3. Disclaimer",
      content:
        "The materials on Testium's platform are provided on an 'as is' basis. Testium makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.",
    },
    {
      title: "4. Limitations",
      content:
        "In no event shall Testium or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Testium's platform, even if Testium or a Testium authorized representative has been notified orally or in writing of the possibility of such damage.",
    },
    {
      title: "5. Accuracy of Materials",
      content:
        "The materials appearing on Testium's platform could include technical, typographical, or photographic errors. Testium does not warrant that any of the materials on its platform are accurate, complete, or current. Testium may make changes to the materials contained on its platform at any time without notice.",
    },
    {
      title: "6. Materials and Content",
      content:
        "Testium has not reviewed all of the sites linked to its platform and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Testium of the site. Use of any such linked website is at the user's own risk.",
      items: [
        "Users are responsible for the content they submit",
        "Content must not violate any applicable laws or regulations",
        "Content must not contain malware, viruses, or malicious code",
        "Content must not infringe on intellectual property rights",
        "Testium reserves the right to remove any content that violates these terms",
      ],
    },
    {
      title: "7. Modifications",
      content:
        "Testium may revise these terms of service for its platform at any time without notice. By using this platform, you are agreeing to be bound by the then current version of these terms of service.",
    },
    {
      title: "8. Governing Law",
      content:
        "These terms and conditions are governed by and construed in accordance with the laws of Uzbekistan, and you irrevocably submit to the exclusive jurisdiction of the courts located in Tashkent, Uzbekistan.",
    },
    {
      title: "9. User Accounts",
      content:
        "If you create an account on Testium, you are responsible for maintaining the confidentiality of your account information and password. You agree to accept responsibility for all activities that occur under your account.",
      items: [
        "You must provide accurate and complete information during registration",
        "You must not use another user's account without permission",
        "You are responsible for all activities under your account",
        "You must notify us immediately of any unauthorized use of your account",
        "You must not share your password with others",
      ],
    },
    {
      title: "10. Prohibited Activities",
      content: "You are prohibited from:",
      items: [
        "Copying, duplicating, or otherwise reproducing content from Testium",
        "Using automated tools to access or download content from Testium",
        "Engaging in any activity that disrupts or interferes with the platform",
        "Sharing or selling access to Testium accounts or features",
        "Submitting false or misleading information",
        "Engaging in any form of harassment or abuse toward other users",
        "Attempting to gain unauthorized access to any part of the platform",
      ],
    },
    {
      title: "11. Exam Integrity",
      content:
        "Testium exams are designed to provide accurate assessment of knowledge. You agree to:",
      items: [
        "Complete exams under honest conditions without external assistance",
        "Not share exam content or questions with unauthorized parties",
        "Not use unauthorized resources or aids during exams",
        "Accept exam results as assessed by our AI system",
        "Not attempt to manipulate or game the evaluation system",
      ],
    },
    {
      title: "12. Educational Use",
      content:
        "Testium is intended for educational purposes. Results should be used as a learning tool and diagnostic aid, not as the sole measure of academic progress or capability.",
    },
    {
      title: "13. Limitation of Liability",
      content:
        "In no event shall Testium, its directors, employees, or agents be liable to you for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service, even if Testium has been advised of the possibility of such damages.",
    },
    {
      title: "14. Termination",
      content:
        "Testium may terminate or suspend your account and access to the platform immediately, without prior notice or liability, if you breach any of the terms or conditions of this agreement.",
    },
    {
      title: "15. Contact Information",
      content:
        "If you have any questions about these Terms of Service, please contact us at:",
      items: [
        "Email: legal@testium.uz",
        "Address: EduSelf.uz Team, Tashkent, Uzbekistan",
      ],
    },
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
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950 dark:to-blue-950">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <ScrollText className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">
              Legal Agreement
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl font-bold mb-6 text-slate-900 dark:text-white"
          >
            Terms of Service
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl"
          >
            Please read these terms of service carefully before using Testium. By accessing and using our platform, you agree to be bound by these terms.
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {sections.map((section, index) => (
              <motion.div key={index} variants={itemVariants} className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {section.title}
                </h2>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {section.content}
                </p>
                {section.items && (
                  <ul className="space-y-3 ml-4">
                    {section.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex gap-3 text-slate-600 dark:text-slate-300"
                      >
                        <span className="text-blue-600 dark:text-blue-400 font-bold flex-shrink-0">
                          •
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}

            <motion.div
              variants={itemVariants}
              className="mt-16 p-6 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg"
            >
              <p className="text-sm text-slate-600 dark:text-slate-300">
                <strong>Last Updated:</strong> March 2026
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                These terms of service are effective as of the date listed above and will remain in effect except with respect to any changes in their provisions in the future, which will be in effect immediately upon posting.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
