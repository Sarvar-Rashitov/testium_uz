import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About EduSelf - AI Education Technology Company',
  description: 'Learn about EduSelf, an AI-powered educational technology company dedicated to transforming exam preparation through artificial intelligence and innovation.',
  keywords: ['about eduself', 'education technology', 'AI education', 'exam preparation company', 'EduSelf.uz'],
  openGraph: {
    title: 'About EduSelf - AI Education Technology',
    description: 'Making education smarter with AI. Learn our mission, vision, and team behind EduSelf.',
    url: 'https://testium.uz/about',
    type: 'website',
    images: [
      {
        url: 'https://testium.uz/og-about.png',
        width: 1200,
        height: 630,
        alt: 'About Testium',
      },
    ],
  },
  alternates: {
    canonical: 'https://testium.uz/about',
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
