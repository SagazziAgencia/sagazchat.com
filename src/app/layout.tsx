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
};

export const metadata: Metadata = {
  title: 'Sagazchat - Sua Máquina de Vendas Automática',
  description: 'Automatize suas vendas no WhatsApp com a inteligência artificial e CRM nativo do Sagazchat.',
  icons: {
    icon: '/icon.svg',
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
        {children}
        <Toaster />
      </body>
    </html>
  );
}
