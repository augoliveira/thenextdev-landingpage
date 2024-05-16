/* eslint-disable import-helpers/order-imports */
import type { Metadata, Viewport } from 'next';
import Script from 'next/script'
import { Inter as FontSans } from 'next/font/google';
import localFont from 'next/font/local';

import { GoogleTagManager } from '@next/third-parties/google'
import { Analytics } from '@vercel/analytics/react';
import Byline from './../components/ui/byline';
import { AddressBar } from './../components/ui/address-bar';

import clsx from "clsx";

import { WEBSITE_HOST_URL } from '@/lib/constants';


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
  authors: [{ name: 'Glazing Design' }],
  metadataBase: new URL(`${siteConfig.url}`),
  openGraph: {
    type: 'website',
    url: `${siteConfig.url}/cover.jpg`,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: 'Glazing Design',
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
    <html suppressHydrationWarning lang="Pt-BR" className="[color-scheme:dark]">
      <Script strategy='afterInteractive'>{`
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:3553114,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}
      </Script>
      <body className={clsx(
					"min-h-screen bg-background font-sans antialiased bg-gray-600 overflow-y-scroll bg-hero-image bg-cover bg-center bg-no-repeat pb-36",
					fontSans.variable
				)}>
        <div className="mx-auto max-w-8xl space-y-8 px-2 pt-20 lg:py-8 lg:px-8">
          <div className="rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
              
                  <StyledComponentsRegistry>
                      <div className="mx-auto max-w-8xl space-y-8 px-2 pt-20 lg:py-8 lg:px-8">
                        <div className="rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
                          <div className="rounded-t-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
                              <div className="rounded-t-lg bg-gradient-to-r from-bodyColor to-[#66a900]">
                                  <AddressBar />
                              </div>
                          </div>
                              {children}
                            <div className="rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
                              <div className="rounded-lg bg-black/30 backdrop-blur-xl">
                                  <Footer />
                              </div> 
                            </div> 
                        </div>
                      </div>
                  </StyledComponentsRegistry>
                <GlobalStyle />
              <Analytics />
            <GoogleTagManager gtmId='GTM-NQ43J9D' />
          </ThemeProvider>
        </div>
        </div>
      </body>
    </html>
  );
}
