'use client';

import { Check } from 'lucide-react';
import Image from 'next/image';
import { AnimateIn } from '@/components/ui/animate-in';
import { LANDING_CTA } from './cta-links';
import { ctaMobileFull, ctaPrimary, ctaRow, ctaSecondaryDark } from './cta-styles';

const BULLETS = [
  'Diagnóstico da operação',
  'Setup personalizado',
  'Plano comercial sob medida',
];

const ENTERPRISE_SETUP_IMAGE =
  '/images/enterprise-setup.png';

export function EnterpriseSection() {
  return (
    <section id="enterprise" className="bg-[#0F172A] py-20">
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

            <div className={`${ctaRow} mt-2 lg:justify-start`}>
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
        </AnimateIn>

        {/* Right — Placeholder visual (fiel ao wireframe) */}
        <AnimateIn from="right" delay={200}>
          <div className="flex justify-center lg:justify-end">
            <div className="relative h-[340px] w-full max-w-[520px] overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-[0_28px_80px_rgba(0,0,0,0.35)]">
              <Image
                src={ENTERPRISE_SETUP_IMAGE}
                alt="Equipe em setup de implantação com notebook"
                fill
                sizes="(min-width: 1024px) 520px, 92vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-slate-950/20 via-slate-950/25 to-slate-950/80" />
              <div className="absolute inset-x-5 bottom-5 rounded-xl border border-white/10 bg-slate-950/80 p-4 backdrop-blur-md">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
                    Setup assistido
                  </span>
                  <span className="rounded-full bg-primary/15 px-2.5 py-1 text-[11px] font-bold text-primary">
                    Empresa
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-[11px] font-medium text-slate-300">
                  <span className="rounded-lg bg-white/5 px-2.5 py-2">Diagnóstico</span>
                  <span className="rounded-lg bg-white/5 px-2.5 py-2">Integrações</span>
                  <span className="rounded-lg bg-white/5 px-2.5 py-2">Treinamento</span>
                </div>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
