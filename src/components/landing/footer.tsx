
'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.521.074-.792.372c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871-.118.571-.355 1.758-2.153 2.006-2.875.247-.722.247-1.352.173-1.475z" />
    </svg>
);


export function Footer() {
  return (
    <footer className="bg-[#0A0F13] text-white pt-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="bg-[#11161B] border border-white/10 rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-1 gap-8 items-center">
                <div className="space-y-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold">Fale com um Especialista Agora</h2>
                    <p className="text-gray-400 max-w-lg mx-auto">
                        Clique no botão e seja direcionado para o WhatsApp. Nossa equipe está pronta para tirar suas dúvidas e criar um plano de ação para o seu negócio.
                    </p>
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground h-auto px-6 py-3 text-base font-bold">
                        <WhatsAppIcon className="w-5 h-5 mr-2" />
                        Iniciar Conversa no WhatsApp
                    </Button>
                </div>
            </div>
        </div>

        <div className="py-8 mt-12 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-[#92D639] to-[#7ab828] rounded-lg flex items-center justify-center shadow-lg shadow-[#92D639]/20">
                  <MessageCircle className="text-black w-5 h-5" />
                </div>
                <span className="text-lg font-bold tracking-tight">
                  RESPONDE<span className="text-[#92D639]">ZAP.AI</span>
                </span>
            </div>
            <p className="text-sm text-gray-500 order-3 sm:order-2">© {new Date().getFullYear()} Todos os direitos reservados.</p>
            <div className="flex items-center gap-4 order-2 sm:order-3">
                <Link href="#" className="text-gray-500 hover:text-white"><Facebook size={20} /></Link>
                <Link href="#" className="text-gray-500 hover:text-white"><Instagram size={20} /></Link>
                <Link href="#" className="text-gray-500 hover:text-white"><Linkedin size={20} /></Link>
            </div>
        </div>
      </div>
    </footer>
  );
}
