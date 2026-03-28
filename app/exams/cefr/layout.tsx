import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CEFR Language Assessment Tests & Practice | Testium',
  description: 'Practice CEFR language proficiency tests (A1, A2, B1, B2, C1, C2). AI-powered evaluation for all CEFR levels on testium.uz.',
  keywords: ['CEFR test', 'CEFR practice', 'CEFR levels', 'language proficiency test', 'CEFR exam', 'European language levels'],
  openGraph: {
    title: 'CEFR Language Tests & Practice | Testium',
    description: 'Assessment your language proficiency with CEFR tests. Practice A1, A2, B1, B2, C1, C2 levels with instant evaluation.',
    url: 'https://testium.uz/exams/cefr',
    type: 'website',
  },
  alternates: {
    canonical: 'https://testium.uz/exams/cefr',
  },
}

export default function CEFRLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
