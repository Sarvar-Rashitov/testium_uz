import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DTM Practice Tests - National University Entrance Exam | Testium',
  description: 'Prepare for DTM exam with realistic mock tests and AI evaluation. Practice online for Uzbekistan national university entrance exam on testium.uz.',
  keywords: ['DTM exam', 'DTM practice test', 'DTM preparation', 'university entrance exam', 'DTM mock exam', 'DTM online test'],
  openGraph: {
    title: 'DTM Practice Tests & Mock Exams | Testium',
    description: 'Prepare for DTM national university entrance exam with realistic practice tests and instant evaluation.',
    url: 'https://testium.uz/exams/dtm',
    type: 'website',
  },
  alternates: {
    canonical: 'https://testium.uz/exams/dtm',
  },
}

export default function DTMLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
