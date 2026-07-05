import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - EduSelf AI Exam Platform',
  description: 'Read EduSelf\'s privacy policy. We are committed to protecting your personal data and ensuring your privacy on our platform.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Privacy Policy - EduSelf',
    description: 'Our commitment to your privacy and data protection.',
    url: 'https://eduself.uz/privacy',
    type: 'website',
  },
  alternates: {
    canonical: 'https://eduself.uz/privacy',
  },
}

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
