import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ErrorBoundary } from '@/components/ui/error-boundary';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap'
});

export const metadata: Metadata = {
  title: {
    template: '%s | Roua Events',
    default: 'Roua Events - Evenimente Memorabile în Brașov'
  },
  description: 'Roua Events organizează evenimente memorabile în Brașov. Servicii complete pentru nunți, botezuri, evenimente corporate și private. Restaurant și hotel de lux.',
  keywords: ['evenimente Brașov', 'nunți Brașov', 'restaurant Brașov', 'hotel Brașov', 'organizare evenimente', 'catering'],
  authors: [{ name: 'Roua Events' }],
  creator: 'Roua Events',
  publisher: 'Roua Events',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'ro_RO',
    url: 'https://rouaevents.ro',
    siteName: 'Roua Events',
    title: 'Roua Events - Evenimente Memorabile în Brașov',
    description: 'Roua Events organizează evenimente memorabile în Brașov. Servicii complete pentru nunți, botezuri, evenimente corporate și private.',
    images: [
      {
        url: 'https://rouaevents.ro/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Roua Events'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roua Events - Evenimente Memorabile în Brașov',
    description: 'Roua Events organizează evenimente memorabile în Brașov. Servicii complete pentru nunți, botezuri, evenimente corporate și private.',
    images: ['https://rouaevents.ro/og-image.jpg']
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
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro" className={`${inter.variable} ${playfair.variable}`}>
      <body className={inter.className}>
        <ErrorBoundary>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ErrorBoundary>
      </body>
    </html>
  );
}