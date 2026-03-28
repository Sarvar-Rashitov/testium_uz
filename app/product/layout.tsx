import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Product Features - AI-Powered Exam Platform | Testium',
  description: 'Discover Testium\'s powerful features: real exam simulation, AI evaluation, instant results, advanced analytics, multi-exam support, and organization control.',
  keywords: ['exam platform features', 'AI exam evaluation', 'online exam simulator', 'test platform', 'exam software'],
  openGraph: {
    title: 'Product Features - AI-Powered Exam Platform | Testium',
    description: 'Discover Testium\'s powerful features for modern exam preparation and administration.',
    url: 'https://testium.uz/product',
    type: 'website',
    images: [
      {
        url: 'https://testium.uz/og-product.png',
        width: 1200,
        height: 630,
        alt: 'Testium Product Features',
      },
    ],
  },
  alternates: {
    canonical: 'https://testium.uz/product',
  },
}

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
