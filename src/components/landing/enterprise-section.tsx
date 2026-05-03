'use client';

import { Check } from 'lucide-react';
import { AnimateIn } from '@/components/ui/animate-in';
import { LANDING_CTA } from './cta-links';
import { ctaMobileFull, ctaPrimary, ctaRow, ctaSecondaryDark } from './cta-styles';

const BULLETS = [
  'Diagnóstico da operação',
  'Setup personalizado',
  'Plano comercial sob medida',
];

export function EnterpriseSection() {
  return (
    <section className="bg-[#0F172A] py-20">
      <div className="mx-auto grid max-w-[1360px] grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        {/* Left — Copy */}
        <AnimateIn from="left" delay={100}>
          <div className="flex flex-col gap-6 text-center lg:text-left">
            <div className="space-y-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary font-[family-name:var(--font-display)]">
                Para empresas
              </p>

              <h2 className="mx-auto max-w-[560px] text-balance font-[family-name:var(--font-display)] text-[2rem] font-bold leading-[1.1] tracking-[-0.02em] text-white sm:text-[2.5rem] lg:mx-0 lg:text-[2.5rem]">
                Mais volume,{' '}
                <span className="italic font-medium text-primary">menos improviso.</span>
              </h2>

              <p className="mx-auto max-w-xl text-pretty text-[15px] leading-[1.6] text-slate-400 lg:mx-0">
                Para equipes com regras, integrações ou volume que pedem uma implantação mais próxima.
              </p>
            </div>

            <ul className="flex w-full flex-col gap-3.5 text-left">
              {BULLETS.map((bullet) => (
                <li key={bullet} className="flex items-center justify-center gap-2.5 lg:justify-start">
                  <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary">
                    <Check className="h-3 w-3 text-white" strokeWidth={3.5} />
                  </span>
                  <span className="text-[15px] text-white">{bullet}</span>
                </li>
              ))}
            </ul>

            <div className={`${ctaRow} mt-2 hidden lg:flex`}>
              <a
                href={LANDING_CTA.salesContact}
                className={ctaPrimary}
              >
                Falar com especialista
              </a>
              <a
                href={LANDING_CTA.salesContact}
                className={ctaSecondaryDark}
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

        <div className="lg:hidden">
          <div className={ctaRow}>
            <a
              href={LANDING_CTA.salesContact}
              className={`${ctaPrimary} ${ctaMobileFull}`}
            >
              Falar com especialista
            </a>
            <a
              href={LANDING_CTA.salesContact}
              className={`${ctaSecondaryDark} ${ctaMobileFull}`}
            >
              Agendar reunião
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
