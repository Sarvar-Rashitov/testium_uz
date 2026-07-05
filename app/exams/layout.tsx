import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mock Exams & Practice Tests for All Major Exams | EduSelf',
  description: 'Practice IELTS, TOEFL, SAT, GRE, DTM, CEFR and more with EduSelf. AI-powered mock exams and practice tests with instant evaluation and analytics.',
  keywords: ['mock exams', 'practice tests online', 'exam preparation', 'IELTS TOEFL SAT GRE', 'online exam simulator', 'test preparation platform'],
  openGraph: {
    title: 'Mock Exams & Practice Tests | EduSelf',
    description: 'Comprehensive exam preparation platform with mock tests for IELTS, TOEFL, SAT, GRE, DTM, CEFR and more.',
    url: 'https://eduself.uz/exams',
    type: 'website',
    images: [
      {
        url: 'https://eduself.uz/og-exams.png',
        width: 1200,
        height: 630,
        alt: 'Mock Exams Platform',
      },
    ],
  },
  alternates: {
    canonical: 'https://eduself.uz/exams',
  },
}

export default function ExamsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
