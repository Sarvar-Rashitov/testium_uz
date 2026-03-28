import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Solutions - IELTS, TOEFL, SAT, GRE & DTM Exams | Testium',
  description: 'Testium supports IELTS, TOEFL, SAT, GRE, CEFR, DTM and custom exams. AI-powered evaluation for all major standardized tests and educational assessments.',
  keywords: ['IELTS practice test', 'TOEFL mock exam', 'SAT prep', 'GRE practice', 'DTM exam', 'mock exams online', 'practice tests', 'exam preparation'],
  openGraph: {
    title: 'Solutions - IELTS, TOEFL, SAT, GRE & DTM | Testium',
    description: 'Complete exam solutions for IELTS, TOEFL, SAT, GRE, CEFR, DTM and custom exams with AI evaluation.',
    url: 'https://testium.uz/solutions',
    type: 'website',
    images: [
      {
        url: 'https://testium.uz/og-solutions.png',
        width: 1200,
        height: 630,
        alt: 'Testium Exam Solutions',
      },
    ],
  },
  alternates: {
    canonical: 'https://testium.uz/solutions',
  },
}

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
