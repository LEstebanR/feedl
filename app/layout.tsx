import type { Metadata } from 'next';

import { Outfit } from 'next/font/google';

import { FeedbackProvider } from '@/components/feedback-context';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Toaster } from '@/components/ui/sonner';
import { ReactQueryProvider } from '@/lib/react-query';

import './globals.css';

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'LESFeedback - Simple Feedback Management',
    template: '%s | LESFeedback',
  },
  description:
    'Collect, manage, and act on customer feedback with LESFeedback. Simple, intuitive feedback management platform.',
  keywords: ['feedback', 'feedback management', 'customer insights', 'survey'],
  authors: [{ name: 'LES' }],
  creator: 'LES',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://lesfeedback.app',
    siteName: 'LESFeedback',
    title: 'LESFeedback - Simple Feedback Management',
    description:
      'Collect, manage, and act on customer feedback with LESFeedback. Simple, intuitive feedback management platform.',
    images: [
      {
        url: 'https://lesfeedback.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'LESFeedback - Feedback Management Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LESFeedback - Simple Feedback Management',
    description:
      'Collect, manage, and act on customer feedback with LESFeedback.',
    images: ['https://lesfeedback.app/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  manifest: '/site.webmanifest',
  category: 'Business',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'LESFeedback',
              applicationCategory: 'BusinessApplication',
              description:
                'Collect, manage, and act on customer feedback with LESFeedback. Simple, intuitive feedback management platform.',
              url: 'https://lesfeedback.app',
              offers: {
                '@type': 'AggregateOffer',
                lowPrice: '9',
                highPrice: '29',
                priceCurrency: 'USD',
              },
              creator: {
                '@type': 'Person',
                name: 'LES',
              },
            }),
          }}
        />
      </head>
      <body
        className={`${outfit.variable} antialiase grid min-h-dvh grid-rows-[auto_1fr_auto] w-full`}
      >
        <ReactQueryProvider>
          <FeedbackProvider>
            <Header />
            {children}
            <Footer />
          </FeedbackProvider>
          <Toaster />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
