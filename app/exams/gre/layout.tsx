import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GRE Practice Tests & Mock Exams Online | EduSelf',
  description: 'Prepare for GRE with realistic mock exams. Practice verbal, quantitative, and analytical writing sections online with eduself.uz.',
  keywords: ['GRE practice test', 'GRE mock exam', 'GRE online test', 'GRE preparation', 'GRE study guide', 'GRE prep practice'],
  openGraph: {
    title: 'GRE Mock Exams & Practice Tests | EduSelf',
    description: 'Take realistic GRE mock exams. Practice verbal, quantitative, and analytical writing with instant feedback.',
    url: 'https://eduself.uz/exams/gre',
    type: 'website',
  },
  alternates: {
    canonical: 'https://testium.uz/exams/gre',
  },
}

export default function GRELayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
