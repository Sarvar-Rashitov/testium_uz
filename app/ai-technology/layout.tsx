import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'EduSelf AI Technology - Advanced Artificial Intelligence for Exams',
  description: 'Explore how EduSelf\'s proprietary AI engine delivers human-quality exam evaluation with instant feedback. NLP, machine learning, and bias detection.',
  keywords: ['AI exam evaluation', 'artificial intelligence education', 'NLP exam grading', 'machine learning assessment', 'automated exam evaluation'],
  openGraph: {
    title: 'EduSelf AI Technology - Advanced Artificial Intelligence',
    description: 'Discover our proprietary AI engine that powers accurate exam evaluation and instant feedback.',
    url: 'https://eduself.uz/ai-technology',
    type: 'website',
    images: [
      {
        url: 'https://eduself.uz/og-ai-technology.png',
        width: 1200,
        height: 630,
        alt: 'EduSelf AI Technology',
      },
    ],
  },
  alternates: {
    canonical: 'https://eduself.uz/ai-technology',
  },
}

export default function AITechnologyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
