'use client';

import { LifeBuoy, HelpCircle, BookOpen, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const supportItems = [
  {
    icon: <HelpCircle className="w-6 h-6 text-primary" />,
    title: 'FAQ Completo',
    description: 'Respostas para as dúvidas mais comuns sobre a plataforma Sagazchat.',
    linkText: 'Acessar FAQ',
    href: '#',
  },
  {
    icon: <BookOpen className="w-6 h-6 text-primary" />,
    title: 'Base de Conhecimento',
    description: 'Tutoriais e guias para você e seus clientes dominarem a ferramenta.',
    linkText: 'Explorar Materiais',
    href: '#',
  },
  {
    icon: <LifeBuoy className="w-6 h-6 text-primary" />,
    title: 'Suporte Dedicado',
    description: 'Nossa equipe de especialistas está pronta para auxiliar com qualquer questão.',
    linkText: 'Contatar Suporte',
    href: '#',
  },
];

export function SupportSection() {
  return (
    <section className="py-20 lg:py-32 bg-[#0A0F13] text-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary mb-6">
            Suporte
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-[3rem] font-bold tracking-tight leading-[1.15] text-white">
            Suporte e Recursos
          </h2>
          <p className="text-base text-slate-400 leading-relaxed mt-4 max-w-2xl mx-auto">
            Estamos aqui para ajudar você em cada passo da jornada. Conte com nosso suporte dedicado e materiais de apoio.
          </p>
        </div>

        <div className="space-y-6">
          {supportItems.map((item, index) => (
            <Link key={index} href={item.href} className="block group">
              <div className="bg-card border border-white/10 rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-6 transition-all duration-300 hover:bg-white/5 hover:border-primary/50 hover:-translate-y-1">
                <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="text-gray-400 mt-1">{item.description}</p>
                </div>
                <div className="flex items-center gap-2 text-primary font-semibold text-sm transition-transform group-hover:translate-x-1 self-start sm:self-center mt-4 sm:mt-0">
                  {item.linkText}
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}


