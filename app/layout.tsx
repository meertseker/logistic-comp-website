import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { getPageMetadata } from '../lib/seo';
import { organizationSchema } from '../lib/schema';
import { GA_TRACKING_ID } from '../lib/analytics';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Reduced weights for better performance
  display: 'swap',
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Reduced weights for better performance
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  ...getPageMetadata({
    title: "ÇNR Lojistik - Lojistik ve Depolama Hizmetleri",
    description: "ÇNR Lojistik - A'dan Z'ye taşımacılık ve gümrük hizmetlerinde standartları belirliyoruz. Modern teknoloji ve deneyimli ekibimizle yanınızdayız.",
    url: 'https://www.cnrlojistikvedepolama.com',
    image: 'https://www.cnrlojistikvedepolama.com/cnr-logo.png',
  }),
  keywords: "lojistik, depolama, taşımacılık, antrepo, çnr lojistik, konteyner taşımacılığı, gümrük işlemleri, ağır yük taşımacılığı, İstanbul lojistik, ihracat konteyner, ithalat konteyner, proje taşımacılığı, ağır nakliye, liman hizmetleri, motat taşımacılığı, plastik atık taşımacılığı, ADR taşıma, tehlikeli madde taşımacılığı, kimyasal madde taşımacılığı, ISO tank taşımacılığı, gümrükleme danışmanlığı, lojistik çözümleri, taşımacılık hizmetleri",
  authors: [{ name: "ÇNR Lojistik" }],
  creator: "ÇNR Lojistik",
  publisher: "ÇNR Lojistik",
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
  icons: {
    icon: '/cnr-logo.png',
    shortcut: '/cnr-logo.png',
    apple: '/cnr-logo.png',
  },
  manifest: '/manifest.json',
  verification: {
    google: 'your-google-verification-code', // TODO: Replace with your actual Google Search Console verification code
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
