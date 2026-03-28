import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TOEFL iBT Mock Exams & Practice Tests | Testium',
  description: 'Practice TOEFL iBT online with AI evaluation. Realistic TOEFL mock exams with instant scores and detailed feedback. Prepare for your TOEFL test with testium.uz.',
  keywords: ['TOEFL mock test', 'TOEFL iBT practice', 'TOEFL online exam', 'TOEFL preparation', 'TOEFL practice test', 'TOEFL simulator online'],
  openGraph: {
    title: 'TOEFL iBT Mock Exams & Practice Tests | Testium',
    description: 'Take realistic TOEFL iBT mock exams with AI evaluation. Practice online and improve your TOEFL score.',
    url: 'https://testium.uz/exams/toefl',
    type: 'website',
  },
  alternates: {
    canonical: 'https://testium.uz/exams/toefl',
  },
}

export default function TOEFLLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
