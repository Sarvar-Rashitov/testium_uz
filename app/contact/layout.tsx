import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact EduSelf - Get in Touch | AI Exam Platform',
  description: 'Contact the EduSelf team to learn more about our AI-powered exam platform. Send us your questions and we\'ll respond quickly.',
  keywords: ['contact eduself', 'customer support', 'get in touch', 'exam platform support'],
  openGraph: {
    title: 'Contact EduSelf - AI Exam Platform Support',
    description: 'Get in touch with our team. We\'re here to help with your exam preparation needs.',
    url: 'https://eduself.uz/contact',
    type: 'website',
  },
  alternates: {
    canonical: 'https://eduself.uz/contact',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
