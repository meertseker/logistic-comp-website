import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import { getPageMetadata } from '../lib/seo';
import { organizationSchema } from '../lib/schema';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Add desired weights
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Specify weights used in your design
});

export const metadata: Metadata = {
  ...getPageMetadata({
    title: "Anasayfa ÇNR Lojistik", // Default title for the homepage
    description: "ÇNR Lojistik - A'dan Z'ye taşımacılık ve gümrük hizmetlerinde standartları belirliyoruz. Modern teknoloji ve deneyimli ekibimizle yanınızdayız.",
    url: 'https://yourdomain.com', // TODO: Replace with your actual domain!
    // image: 'https://yourdomain.com/cnr-logo.png', // Optional: specify a default OG image
  }),
  icons: {
    icon: '/cnr-logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
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
