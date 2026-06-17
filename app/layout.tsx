import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { I18nProvider } from '@/lib/i18n/context'
import { ThemeProvider } from '@/components/theme-provider'
import { GalaxyCursor } from '@/components/galaxy-cursor'
import { PromoBanner } from '@/components/promo-banner'
import './globals.css'

const geist = Geist({ 
  subsets: ["latin"],
  variable: '--font-geist'
});
const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-geist-mono'
});

export const metadata: Metadata = {
  title: 'Testium - AI-Powered Mock Exam & Test Preparation Platform',
  description: 'Best AI-powered mock exam platform for IELTS, TOEFL, SAT, GRE & DTM. Simulate real exams, get instant AI evaluation, and improve with advanced analytics.',
  generator: 'Next.js',
  applicationName: 'Testium',
  creator: 'EduSelf.uz',
  keywords: ['mock exam', 'practice test', 'IELTS', 'TOEFL', 'SAT', 'GRE', 'DTM', 'exam preparation', 'online test', 'AI evaluation', 'exam simulator'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://testium.uz',
    siteName: 'Testium',
    title: 'Testium - AI-Powered Mock Exam Platform',
    description: 'Best AI-powered mock exam platform for IELTS, TOEFL, SAT, GRE & DTM. Instant evaluation and advanced analytics.',
    images: [
      {
        url: 'https://testium.uz/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Testium - AI-Powered Mock Exam Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Testium - AI-Powered Mock Exam Platform',
    description: 'Best AI-powered mock exam platform for IELTS, TOEFL, SAT, GRE & DTM',
    creator: '@testium_uz',
    images: ['https://testium.uz/og-image.png'],
  },
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
      {
        url: '/favicon.ico',
        sizes: 'any',
      },
    ],
    apple: '/apple-touch-icon.svg',
    shortcut: '/favicon.ico',
  },
  verification: {
    google: 'google-site-verification-code', // Add your actual code
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  metadataBase: new URL('https://testium.uz'),
  manifest: '/manifest.json',
  alternates: {
    canonical: 'https://testium.uz',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Testium',
    description: 'AI-powered mock exam and test preparation platform',
    url: 'https://testium.uz',
    applicationCategory: 'EducationalApplication',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    creator: {
      '@type': 'Organization',
      name: 'EduSelf.uz',
      url: 'https://eduself.uz',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '250',
      bestRating: '5',
      worstRating: '1',
    },
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          suppressHydrationWarning
        />
      </head>
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}>
        <GalaxyCursor />
        <PromoBanner />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <I18nProvider>
            {children}
          </I18nProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
