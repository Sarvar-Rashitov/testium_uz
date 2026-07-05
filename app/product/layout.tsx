import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Product Features - AI-Powered Exam Platform | EduSelf',
  description: 'Discover EduSelf\'s powerful features: real exam simulation, AI evaluation, instant results, advanced analytics, multi-exam support, and organization control.',
  keywords: ['exam platform features', 'AI exam evaluation', 'online exam simulator', 'test platform', 'exam software'],
  openGraph: {
    title: 'Product Features - AI-Powered Exam Platform | EduSelf',
    description: 'Discover EduSelf\'s powerful features for modern exam preparation and administration.',
    url: 'https://eduself.uz/product',
    type: 'website',
    images: [
      {
        url: 'https://eduself.uz/og-product.png',
        width: 1200,
        height: 630,
        alt: 'EduSelf Product Features',
      },
    ],
  },
  alternates: {
    canonical: 'https://eduself.uz/product',
  },
}

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
