import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IELTS Mock Exams & Practice Tests Online | Testium',
  description: 'Practice IELTS exams online with AI evaluation. Realistic IELTS mock tests with instant scoring and detailed feedback. Prepare for your IELTS exam with testium.uz.',
  keywords: ['IELTS mock exam', 'IELTS practice test', 'IELTS online test', 'IELTS preparation', 'IELTS simulator', 'practice IELTS online', 'free IELTS mock test'],
  openGraph: {
    title: 'IELTS Mock Exams Online | AI-Powered Practice Tests | Testium',
    description: 'Take realistic IELTS mock exams online with AI evaluation. Get instant scores and detailed feedback to improve your IELTS performance.',
    url: 'https://testium.uz/exams/ielts',
    type: 'website',
    images: [
      {
        url: 'https://testium.uz/og-ielts.png',
        width: 1200,
        height: 630,
        alt: 'IELTS Mock Exams',
      },
    ],
  },
  alternates: {
    canonical: 'https://testium.uz/exams/ielts',
  },
}

export default function IELTSLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
