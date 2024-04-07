/* eslint-disable import-helpers/order-imports */
import type { Metadata, Viewport } from 'next';
import { Inter as FontSans } from 'next/font/google';
import localFont from 'next/font/local';

import { GoogleTagManager } from '@next/third-parties/google'
import { Analytics } from '@vercel/analytics/react';

import { cn } from '@/lib/utils';

import { WEBSITE_HOST_URL } from '@/lib/constants';

import Navbar from '../components/Navbar/Navbar';
import { siteConfig } from '../config';
import { ThemeProvider } from './_components/theme-provider';

import './globals.css';
import { Footer } from './../components/ui/footer';
import StyledComponentsRegistry from './registry';
import GlobalStyle from './../styles/GlobalStyle';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

const fontHeading = localFont({
  src: '../assets/fonts/CalSans-SemiBold.woff2',
  variable: '--font-heading',
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
  },
  description: 'A Glazing Design é uma empresa especializada na concepção e instalação de projetos inteligentes e modernos. Vidro temperado, laminado, box, espelhos. | (61) 9 8669-2775',
  verification: {
    google: 'google',
    yandex: 'yandex',
    yahoo: 'yahoo',
    other: {
      me: ['my-email', 'my-link'],
    },
  },
  manifest: '/manifest.json',
  authors: [{ name: 'AGÊNCIA UP.EXPERT' }],
  metadataBase: new URL(`${siteConfig.url}`),
  openGraph: {
    type: 'website',
    url: `${siteConfig.url}/cover.jpg`,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: 'UP.EXPERT',
    images: [
      {
        url: `${siteConfig.url}/cover.jpg`
      }
    ]
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/cover.jpg`]
  },
  alternates: {
    canonical: WEBSITE_HOST_URL
  },
  keywords: [
    'Vidro temperdo',
    'Vidro laminado',
    'Box para banheiro',
    'Espelho',
    'Guarda corpo de vidro',
    'Pergolado',
    'Vidro para varanda',
    'Glazing design',
    'Pele de vidro',
  ],
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'cyan' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
          fontHeading.variable
        )}
      >
        <div className="max-w-8xl mx-auto space-y-8 px-2 lg:p-8">
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
        <Navbar/>
        <StyledComponentsRegistry>
        <>{children}</>
            </StyledComponentsRegistry>
            <GlobalStyle />
          <Analytics />
          <GoogleTagManager gtmId='GTM-NQ43J9D' />
          <Footer />
        </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
