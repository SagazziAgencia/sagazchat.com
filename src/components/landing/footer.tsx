'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Logo } from '../brand/logo';
import { AnimateIn } from '@/components/ui/animate-in';
import { LANDING_CTA } from './cta-links';
import { ctaMobileFull, ctaPrimary } from './cta-styles';

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.521.074-.792.372c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871-.118.571-.355 1.758-2.153 2.006-2.875.247-.722.247-1.352.173-1.475z" />
  </svg>
);


export function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-20">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6">
        <AnimateIn from="scale" duration={700}>
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 sm:p-8 lg:p-12 overflow-hidden">
          <div className="grid lg:grid-cols-1 gap-8 items-center">
            <div className="space-y-6 text-center">
              <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-[3rem] text-balance font-bold tracking-[-0.02em] leading-[1.1] text-white">
                Tire o atendimento{' '}
                <span className="italic font-medium text-primary">do improviso.</span>
              </h2>
              <p className="text-[15px] text-slate-400 text-pretty leading-relaxed max-w-xl mx-auto">
                Escolha um plano e comece com WhatsApp, CRM e automações no mesmo lugar.
              </p>
              <Button asChild size="lg" className={`${ctaPrimary} ${ctaMobileFull}`}>
                <Link href={LANDING_CTA.salesContact}>
                  <WhatsAppIcon className="w-5 h-5 shrink-0" />
                  <span>Ver planos e começar</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
        </AnimateIn>

        <AnimateIn delay={200}>
        <div className="py-8 mt-12 border-t border-slate-700 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-6 text-center md:text-left">
          <div className="flex items-center gap-2">
            <Logo variant="white" height={24} />
          </div>
          <div className="flex flex-col items-center gap-2 order-last md:order-none">
            <p className="text-sm text-slate-400">© {new Date().getFullYear()} Sagazchat. Todos os direitos reservados.</p>
            <div className="flex items-center gap-4 text-xs text-slate-500">
              <Link href="#" className="hover:text-white transition-colors">Termos de Uso</Link>
              <span>•</span>
              <Link href="#" className="hover:text-white transition-colors">Política de Privacidade</Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Facebook" className="text-slate-400 hover:text-white transition-colors p-2.5"><Facebook size={20} /></a>
            <a href="#" aria-label="Instagram" className="text-slate-400 hover:text-white transition-colors p-2.5"><Instagram size={20} /></a>
            <a href="#" aria-label="LinkedIn" className="text-slate-400 hover:text-white transition-colors p-2.5"><Linkedin size={20} /></a>
          </div>
        </div>
        </AnimateIn>
      </div>
    </footer>
  );
}


