import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Testium - AI Education Technology Company',
  description: 'Learn about Testium, an AI-powered educational technology company dedicated to transforming exam preparation through artificial intelligence and innovation.',
  keywords: ['about testium', 'education technology', 'AI education', 'exam preparation company', 'EduSelf.uz'],
  openGraph: {
    title: 'About Testium - AI Education Technology',
    description: 'Making education smarter with AI. Learn our mission, vision, and team behind Testium.',
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
