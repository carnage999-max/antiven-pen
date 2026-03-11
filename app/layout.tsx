import type { Metadata, Viewport } from 'next';
import './globals.css';

const siteConfig = {
  name: 'Antiven Pen®',
  url: 'https://antiven.com',
  ogImage: 'https://antiven.com/images/single-pen-close-up.png',
  description: 'The world\'s first field-ready antivenom auto-injector. Antiven Pen® provides rapid neutralisation for snake bites, spider bites, scorpion stings, and marine venom when seconds matter.',
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Antiven Pen® — The Antidote in Your Pocket',
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'antivenom',
    'snakebite treatment',
    'spider bite first aid',
    'scorpion sting antidote',
    'auto-injector',
    'venom emergency',
    'Antiven Pen',
    'emergency medical device',
    'rapid antivenom delivery',
    'sublingual strips',
  ],
  authors: [{ name: 'Antiven Research Group' }],
  creator: 'Antiven Pen®',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: siteConfig.url,
    title: 'Antiven Pen® — Life-Saving Antivenom Technology',
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [{
      url: siteConfig.ogImage,
      width: 1200,
      height: 630,
      alt: 'Antiven Pen® Auto-Injector Product Illustration',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Antiven Pen® — The Antidote in Your Pocket',
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@antivenpen',
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
  alternates: {
    canonical: '/',
  },
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Antiven Pen®',
              url: siteConfig.url,
              logo: `${siteConfig.url}/images/anti-ven-pen-icon.png`,
              contactPoint: {
                '@type': 'ContactPoint',
                email: 'info@antiven.com',
                contactType: 'Customer Service',
              },
              description: siteConfig.description,
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Antiven Pen®',
              url: siteConfig.url,
              potentialAction: {
                '@type': 'SearchAction',
                target: `${siteConfig.url}/?s={search_term_string}`,
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
