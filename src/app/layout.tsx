import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'RespondeZap.ai - Sua Máquina de Vendas Automática',
  description: 'Automatize suas vendas no WhatsApp com a inteligência artificial e CRM nativo do RespondeZap.ai.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="!scroll-smooth">
      <body className={`${inter.className} bg-[#050505] text-white selection:bg-[#92D639] selection:text-black`}>
        <div className="fixed inset-0 z-0 pointer-events-none">
            <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[60%] h-[50%] bg-[#92D639]/10 rounded-full blur-[120px]" />
            <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[40%] h-[40%] bg-[#92D639]/5 rounded-full blur-[100px]" />
        </div>
        <div className="relative z-10">
            {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}
