'use client';

import { Check, Users, ClipboardList, Wrench, PackageCheck, ChevronRight } from 'lucide-react';
import { AnimateIn } from '@/components/ui/animate-in';
import { LANDING_CTA } from './cta-links';
import { ctaMobileFull, ctaPrimary, ctaRow, ctaSecondaryDark } from './cta-styles';

const BULLETS = [
  'Implantação conduzida por um especialista, não por documentação.',
  'Integrações sob medida com seu CRM, ERP ou planilhas.',
  'Treinamento ao vivo do time + 30 dias de acompanhamento.',
];

const STEPS = [
  { label: 'Reunião', icon: Users },
  { label: 'Formulário', icon: ClipboardList },
  { label: 'Criação', icon: Wrench },
  { label: 'Entrega', icon: PackageCheck },
];

export function EnterpriseSection() {
  return (
    <section id="enterprise" className="bg-[#0F172A] py-20">
      <div className="mx-auto grid max-w-[1360px] grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        {/* Left — Copy */}
        <AnimateIn from="left" delay={100}>
          <div className="flex flex-col gap-6 text-center lg:text-left">
            <div className="space-y-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary font-[family-name:var(--font-sans)]">
                Plano Enterprise
              </p>

              <h2 className="mx-auto max-w-[560px] text-balance font-[family-name:var(--font-sans)] text-[2rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-white sm:text-[2.5rem] lg:mx-0 lg:text-[2.5rem]">
                A gente monta o Sagaz{' '}
                <span className="font-extrabold text-primary">dentro da sua operação.</span>
              </h2>

              <p className="mx-auto max-w-xl text-pretty text-[15px] leading-[1.6] text-slate-400 lg:mx-0">
                Da primeira reunião à entrega: a gente cuida do briefing, monta as automações e entrega tudo pronto pra rodar — sem você virar especialista em automação.
              </p>
            </div>

            <ul className="flex w-full flex-col gap-3.5 text-left">
              {BULLETS.map((bullet) => (
                <li key={bullet} className="flex items-start justify-center gap-2.5 lg:justify-start">
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary">
                    <Check className="h-3 w-3 text-white" strokeWidth={3.5} />
                  </span>
                  <span className="text-[15px] leading-[1.5] text-white">{bullet}</span>
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

        {/* Right — Etapas do processo */}
        <AnimateIn from="right" delay={200}>
          <div className="relative">
            <div className="absolute -inset-px -z-10 rounded-2xl bg-gradient-to-br from-primary/15 via-transparent to-transparent blur-2xl" />
            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 shadow-[0_28px_80px_rgba(0,0,0,0.35)] backdrop-blur-sm sm:p-8">
              <div className="mb-6 flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                  Como funciona
                </span>
                <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-[11px] font-bold text-primary">
                  até 14 dias
                </span>
              </div>

              <ol className="flex items-center justify-between gap-2">
                {STEPS.map((step, idx) => {
                  const Icon = step.icon;
                  return (
                    <li key={step.label} className="contents">
                      <div className="flex flex-1 flex-col items-center gap-2.5">
                        <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary sm:h-14 sm:w-14">
                          <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.75} />
                        </span>
                        <span className="text-[12px] font-semibold text-white sm:text-[13px]">
                          {step.label}
                        </span>
                      </div>
                      {idx < STEPS.length - 1 && (
                        <ChevronRight
                          className="h-4 w-4 flex-shrink-0 text-slate-600 sm:h-5 sm:w-5"
                          strokeWidth={2}
                          aria-hidden
                        />
                      )}
                    </li>
                  );
                })}
              </ol>

              <p className="mt-6 text-center text-[13px] leading-[1.5] text-slate-400">
                Você participa do começo e do fim. O meio a gente resolve.
              </p>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
