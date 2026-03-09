'use client';

import { LifeBuoy, HelpCircle, BookOpen, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const supportItems = [
  {
    icon: <HelpCircle className="w-5 h-5 text-[#92D639]/60" />,
    title: 'FAQ Completo',
    description: 'Respostas para as dúvidas mais comuns sobre a plataforma RespondeZap.',
    linkText: 'Acessar FAQ',
    href: '#',
  },
  {
    icon: <BookOpen className="w-5 h-5 text-[#92D639]/60" />,
    title: 'Base de Conhecimento',
    description: 'Tutoriais e guias para você e seus clientes dominarem a ferramenta.',
    linkText: 'Explorar Materiais',
    href: '#',
  },
  {
    icon: <LifeBuoy className="w-5 h-5 text-[#92D639]/60" />,
    title: 'Suporte Dedicado',
    description: 'Nossa equipe de especialistas está pronta para auxiliar com qualquer questão.',
    linkText: 'Contatar Suporte',
    href: '#',
  },
];

export function SupportSection() {
  return (
    <section className="py-24 text-white section-divider">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-white/30 tracking-wide uppercase mb-4">Suporte e Recursos</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Estamos aqui para <span className="text-gradient">ajudar</span>
          </h2>
          <p className="text-base text-white/40 mt-4 max-w-2xl mx-auto leading-relaxed">
            Conte com nosso suporte dedicado e materiais de apoio em cada passo da jornada.
          </p>
        </div>

        <div className="space-y-4">
          {supportItems.map((item, index) => (
            <Link key={index} href={item.href} className="block group">
              <div className="glass-card p-5 flex flex-col sm:flex-row items-start sm:items-center gap-5 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/[0.12]">
                <div className="w-10 h-10 rounded-lg bg-white/[0.06] flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-bold text-white/80">{item.title}</h3>
                  <p className="text-sm text-white/35 mt-0.5">{item.description}</p>
                </div>
                <div className="flex items-center gap-2 text-[#92D639]/60 font-medium text-sm transition-transform group-hover:translate-x-1 self-start sm:self-center">
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
