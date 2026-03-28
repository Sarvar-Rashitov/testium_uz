import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms and Conditions - Testium Exam Platform',
  description: 'Read Testium\'s terms and conditions. Please review these terms before using our AI-powered exam platform.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Terms and Conditions - Testium',
    description: 'Our terms and conditions for using the Testium platform.',
    url: 'https://testium.uz/terms',
    type: 'website',
  },
  alternates: {
    canonical: 'https://testium.uz/terms',
  },
}

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
