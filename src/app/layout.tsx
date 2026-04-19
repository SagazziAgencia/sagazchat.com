import type { Metadata, Viewport } from 'next';
import { Manrope, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFFFFF' },
    { media: '(prefers-color-scheme: dark)', color: '#0F172A' },
  ],
};

const SITE_URL = 'https://www.sagazchat.com.br';
const SITE_NAME = 'Sagazchat';
const SITE_DESCRIPTION =
  'Automatize atendimento no WhatsApp e Instagram. CRM kanban, disparos em massa, agente IA e multi-atendente em uma plataforma. Sem fidelidade.';
const OG_IMAGE = '/images/desktop-hero.png';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Sagazchat — Automação de WhatsApp, Instagram e CRM para PMEs',
    template: '%s · Sagazchat',
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  generator: 'Next.js',
  keywords: [
    'automação WhatsApp',
    'CRM WhatsApp',
    'chatbot WhatsApp',
    'atendimento Instagram',
    'disparo em massa WhatsApp',
    'WhatsApp Business API',
    'multi-atendente',
    'agente IA WhatsApp',
    'recuperação de vendas',
    'remarketing WhatsApp',
    'Sagazchat',
  ],
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: 'Sagazchat — Automação de WhatsApp, Instagram e CRM',
    description: SITE_DESCRIPTION,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Sagazchat — painel de atendimento no WhatsApp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sagazchat — Automação de WhatsApp, Instagram e CRM',
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  category: 'business',
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: SITE_NAME,
  url: SITE_URL,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description: SITE_DESCRIPTION,
  inLanguage: 'pt-BR',
  offers: {
    '@type': 'Offer',
    priceCurrency: 'BRL',
    price: '117.00',
    availability: 'https://schema.org/InStock',
    url: `${SITE_URL}/#pricing`,
  },
  aggregateRating: undefined,
  publisher: {
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/icon.svg`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className="scroll-smooth">
      <body className={`${manrope.variable} ${spaceGrotesk.variable} ${manrope.className} bg-white text-slate-900 selection:bg-primary/20 selection:text-slate-900`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
