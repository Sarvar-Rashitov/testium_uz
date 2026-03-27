"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";

export default function PrivacyPage() {
  const sections = [
    {
      title: "1. Introduction",
      content:
        "Testium (\"we\", \"us\", or \"our\") operates the Testium exam preparation platform. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our service and the choices you have associated with that data.",
    },
    {
      title: "2. Information Collection and Use",
      content:
        "We collect several different types of information for various purposes to provide and improve our service to you.",
      items: [
        "Personal Information: Name, email address, phone number, organization details, and academic preferences",
        "Usage Data: Information about how you access and use the platform, including IP address, browser type, pages visited, and time spent",
        "Exam Data: Your exam responses, scores, and feedback for improving our evaluation algorithms",
        "Cookies: We use cookies to enhance your user experience and track usage patterns",
      ],
    },
    {
      title: "3. Use of Data",
      content: "Testium uses the collected data for various purposes:",
      items: [
        "To provide and maintain our service",
        "To notify you about changes to our service",
        "To allow you to participate in interactive features of our platform",
        "To provide customer support",
        "To gather analysis and feedback to improve our service",
        "To monitor the usage of our service",
        "To detect, prevent and address technical issues and fraud",
      ],
    },
    {
      title: "4. Security of Data",
      content:
        "The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.",
      items: [
        "Enterprise-grade encryption for data transmission",
        "Secure password hashing and storage",
        "Regular security audits and penetration testing",
        "Limited access to personal data restricted to authorized personnel",
        "GDPR and international data protection compliance",
      ],
    },
    {
      title: "5. Data Retention",
      content:
        "Testium will retain your Personal Data only for as long as necessary for the purposes set out in this Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply with our legal obligations.",
    },
    {
      title: "6. Transfer of Data",
      content:
        "Your information, including Personal Data, may be transferred to and maintained on computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction.",
    },
    {
      title: "7. AI and Machine Learning",
      content:
        "Our AI evaluation system processes exam responses to provide feedback. We use machine learning to continuously improve our models. All AI processing is conducted with privacy-first architecture, and your responses are only used for:",
      items: [
        "Providing personalized feedback on your exam",
        "Improving our evaluation algorithms (anonymized data)",
        "Generating analytics for educational insights",
      ],
    },
    {
      title: "8. Children's Privacy",
      content:
        "Our service does not address any person under the age of 13. We do not knowingly collect Personal Data from children under 13. If we discover that a child under 13 has provided us with Personal Data, we will delete such information immediately.",
    },
    {
      title: "9. Changes to This Privacy Policy",
      content:
        "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the 'effective date' at the top of this Privacy Policy.",
    },
    {
      title: "10. Contact Us",
      content: "If you have any questions about this Privacy Policy, please contact us at:",
      items: [
        "Email: privacy@testium.uz",
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
            <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">
              Your Privacy Matters
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl font-bold mb-6 text-slate-900 dark:text-white"
          >
            Privacy Policy
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl"
          >
            We are committed to protecting your privacy and ensuring you understand our practices. This policy explains how we collect, use, and safeguard your information.
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
                This privacy policy is effective as of the date listed above and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately upon posting to the platform.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
