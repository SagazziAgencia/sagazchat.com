import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'RespondeZap.ai - Automação Inteligente para WhatsApp',
  description: 'Automatize suas vendas no WhatsApp com inteligência artificial e CRM nativo. Fluxos visuais, multi-atendentes e remarketing automático.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="!scroll-smooth">
      <body className={`${inter.className} bg-[#080808] text-white selection:bg-[#92D639]/30 selection:text-white`}>
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#92D639]/[0.04] rounded-full blur-[150px]" />
        </div>
        <div className="relative z-10">
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}
