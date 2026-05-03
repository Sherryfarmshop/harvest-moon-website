import type { Metadata } from 'next';
import { Playfair_Display, Lora, Source_Sans_3 } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
});

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Harvest Moon Farm Shop | Northern Michigan Farm Market near Charlevoix',
  description:
    'A cozy Northern Michigan farm market near Charlevoix. Farm fresh eggs, seasonal produce, curated farm boxes, gathered goods, and peaceful farm stays. Stop in, slow down, and take a little piece of the farm home.',
  keywords:
    'Northern Michigan farm shop, Charlevoix farm market, farm fresh eggs, farm stay Charlevoix, gathered goods, farm boxes, US-31 Charlevoix',
  openGraph: {
    title: 'Harvest Moon Farm Shop',
    description:
      'A cozy Northern Michigan farm market near Charlevoix. Farm fresh eggs, curated farm boxes, and peaceful farm stays.',
    type: 'website',
    locale: 'en_US',
    images: [{ url: '/images/website-hero.jpg', width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${lora.variable} ${sourceSans.variable}`}
    >
      <body className="font-source antialiased">{children}</body>
    </html>
  );
}
