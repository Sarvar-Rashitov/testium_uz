import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SAT Practice Tests & Mock Exams Online | Testium',
  description: 'Practice SAT online with realistic mock exams and instant evaluation. Prepare for SAT math and evidence-based reading & writing with testium.uz.',
  keywords: ['SAT practice test', 'SAT mock exam', 'SAT online test', 'SAT preparation', 'SAT study', 'SAT prep practice'],
  openGraph: {
    title: 'SAT Mock Exams & Practice Tests | Testium',
    description: 'Take realistic SAT mock exams online. Practice math and evidence-based reading & writing with instant feedback.',
    url: 'https://testium.uz/exams/sat',
    type: 'website',
  },
  alternates: {
    canonical: 'https://testium.uz/exams/sat',
  },
}

export default function SATLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
