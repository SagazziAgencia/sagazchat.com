'use client';

import { Check } from 'lucide-react';
import { AnimateIn } from '@/components/ui/animate-in';

const BULLETS = [
  'Diagnóstico + reunião consultiva',
  'Implementação personalizada',
  'Proposta comercial sob medida',
];

export function EnterpriseSection() {
  return (
    <section className="bg-[#0F172A] py-20">
      <div className="mx-auto grid max-w-[1360px] grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        {/* Left — Copy */}
        <AnimateIn from="left" delay={100}>
          <div className="flex flex-col gap-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary font-[family-name:var(--font-display)]">
              Para empresas
            </p>

            <h2 className="max-w-[560px] font-[family-name:var(--font-display)] text-[2rem] font-bold leading-[1.1] tracking-[-0.02em] text-white sm:text-[2.5rem] lg:text-[2.5rem]">
              Operação sob medida{' '}
              <span className="italic font-medium text-primary">para equipes que precisam de escala.</span>
            </h2>

            <p className="max-w-xl text-[15px] leading-relaxed text-slate-400">
              Consultoria, diagnóstico, setup personalizado e proposta comercial para a sua realidade. Sem tabela fixa — o plano se adapta à operação.
            </p>

            <ul className="flex flex-col gap-3.5">
              {BULLETS.map((bullet) => (
                <li key={bullet} className="flex items-center gap-2.5">
                  <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary">
                    <Check className="h-3 w-3 text-white" strokeWidth={3.5} />
                  </span>
                  <span className="text-[15px] text-white">{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="mt-2 flex flex-wrap gap-4">
              <a
                href="#contato"
                className="inline-flex items-center rounded-[10px] bg-primary px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-primary/90"
              >
                Falar com especialista
              </a>
              <a
                href="#contato"
                className="inline-flex items-center rounded-[10px] border border-slate-600 px-7 py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-white/5"
              >
                Agendar reunião
              </a>
            </div>
          </div>
        </AnimateIn>

        {/* Right — Placeholder visual (fiel ao wireframe) */}
        <AnimateIn from="right" delay={200}>
          <div className="flex justify-center lg:justify-end">
            <div className="flex h-[320px] w-full max-w-[420px] items-center justify-center rounded-2xl border border-slate-700 bg-slate-800">
              <p className="max-w-[280px] text-center text-[16px] leading-snug text-slate-500">
                Proposta comercial
                <br />
                personalizada
              </p>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
