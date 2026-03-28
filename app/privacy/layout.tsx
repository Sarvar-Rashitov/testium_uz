import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - Testium AI Exam Platform',
  description: 'Read Testium\'s privacy policy. We are committed to protecting your personal data and ensuring your privacy on our platform.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Privacy Policy - Testium',
    description: 'Our commitment to your privacy and data protection.',
    url: 'https://testium.uz/privacy',
    type: 'website',
  },
  alternates: {
    canonical: 'https://testium.uz/privacy',
  },
}

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
