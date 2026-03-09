'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import Link from 'next/link';

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.521.074-.792.372c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871-.118.571-.355 1.758-2.153 2.006-2.875.247-.722.247-1.352.173-1.475z" />
    </svg>
);


export function Footer() {
  return (
    <footer className="text-white pt-24 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="glass-card p-8 lg:p-12">
            <div className="text-center space-y-6">
                <p className="text-sm font-medium text-white/30 tracking-wide uppercase">Fale Conosco</p>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                    Fale com um <span className="text-gradient">especialista</span>
                </h2>
                <p className="text-base text-white/40 max-w-lg mx-auto leading-relaxed">
                    Clique no botão e seja direcionado para o WhatsApp. Nossa equipe está pronta para tirar suas dúvidas.
                </p>
                <Button size="lg" className="bg-[#92D639] hover:bg-[#82c232] text-black h-auto px-6 py-3 text-sm font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(146,214,57,0.3)] hover:shadow-[0_0_30px_rgba(146,214,57,0.5)]">
                    <WhatsAppIcon className="w-5 h-5 mr-2" />
                    Iniciar Conversa no WhatsApp
                </Button>
            </div>
        </div>

        <div className="py-8 mt-12 border-t border-white/[0.06] flex flex-col md:flex-row justify-between items-center gap-8 md:gap-6 text-center md:text-left">
            <div className="flex items-center gap-2">
                <div className="w-7 h-7 bg-gradient-to-br from-[#92D639] to-[#7ab828] rounded-lg flex items-center justify-center">
                  <MessageCircle className="text-black w-4 h-4" />
                </div>
                <span className="text-sm font-bold tracking-tight text-white/60">
                  RespondeZap
                </span>
            </div>
            <p className="text-xs text-white/25 order-last md:order-none">&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
            <div className="flex items-center gap-4">
                <Link href="#" className="text-white/25 hover:text-white/60 transition-colors"><Facebook size={18} /></Link>
                <Link href="#" className="text-white/25 hover:text-white/60 transition-colors"><Instagram size={18} /></Link>
                <Link href="#" className="text-white/25 hover:text-white/60 transition-colors"><Linkedin size={18} /></Link>
            </div>
        </div>
      </div>
    </footer>
  );
}
