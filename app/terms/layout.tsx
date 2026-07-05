import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms and Conditions - EduSelf Exam Platform',
  description: 'Read EduSelf\'s terms and conditions. Please review these terms before using our AI-powered exam platform.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Terms and Conditions - EduSelf',
    description: 'Our terms and conditions for using the EduSelf platform.',
    url: 'https://eduself.uz/terms',
    type: 'website',
  },
  alternates: {
    canonical: 'https://eduself.uz/terms',
  },
}

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
