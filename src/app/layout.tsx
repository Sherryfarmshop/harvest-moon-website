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
  title: 'Pasture-Raised Chicken in Charlevoix, MI | Harvest Moon Farm Shop',
  description: 'Reserve pasture-raised chicken for 2027 from Harvest Moon Farm Shop near Charlevoix, Michigan. Locally raised on our Northern Michigan family farm.',
  keywords: 'pasture-raised chicken Northern Michigan, pasture-raised chicken Charlevoix MI, farm-raised chicken near Charlevoix, local pasture-raised chicken Michigan, reserve pasture-raised chicken 2027',
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
