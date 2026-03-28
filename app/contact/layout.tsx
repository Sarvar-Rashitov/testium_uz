import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Testium - Get in Touch | AI Exam Platform',
  description: 'Contact the Testium team to learn more about our AI-powered exam platform. Send us your questions and we\'ll respond quickly.',
  keywords: ['contact testium', 'customer support', 'get in touch', 'exam platform support'],
  openGraph: {
    title: 'Contact Testium - AI Exam Platform Support',
    description: 'Get in touch with our team. We\'re here to help with your exam preparation needs.',
    url: 'https://testium.uz/contact',
    type: 'website',
  },
  alternates: {
    canonical: 'https://testium.uz/contact',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
