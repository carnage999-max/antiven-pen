import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Antiven Pen® — The Antidote in Your Pocket',
  description:
    'Antiven Pen® delivers immediate antivenom in field conditions. Auto-injector and sublingual strip solutions for snakebite, spider bite, scorpion sting and marine venom emergencies.',
  keywords: [
    'antivenom',
    'snakebite treatment',
    'auto-injector',
    'venom emergency',
    'Antiven Pen',
    'sublingual strips',
  ],
  openGraph: {
    title: 'Antiven Pen® — The Antidote in Your Pocket',
    description:
      'Immediate antivenom delivery when seconds matter. Antiven Pen® and Sublingual Strips for field and clinical use.',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
