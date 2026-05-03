'use client';

import React, { useEffect, useState } from 'react';
import { ArrowRight, Check, CheckCircle2, Megaphone, Users, Zap } from 'lucide-react';
import { AnimateIn } from '@/components/ui/animate-in';
import { ctaMobileFull, ctaPrimary } from './cta-styles';

const BULLETS = [
  'Segmentação por etiqueta ou lista',
  'Agendamento com data e hora',
  'Intervalos para proteger o número',
  'Importação de CSV e XLSX',
];

const progressSteps = [
  { label: 'Fluxo selecionado', state: 'done' as const },
  { label: 'Lista importada (847 leads)', state: 'done' as const },
  { label: 'Agendado: Hoje às 14:00', state: 'done' as const },
  { label: 'Disparando... 423/847', state: 'active' as const },
];

export function BroadcastMockup() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 80);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-[420px]">
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 bg-white px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
              <Megaphone size={18} className="text-primary" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-800">Black Friday 2025</div>
              <div className="text-[11px] text-slate-400">Transmissão ativa</div>
            </div>
          </div>
          <div className="flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1">
            <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            <span className="text-[10px] font-bold text-emerald-600">AO VIVO</span>
          </div>
        </div>

        {/* Config Summary */}
        <div className="space-y-3 p-5">
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-slate-100 bg-white p-3">
              <div className="mb-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">Fluxo</div>
              <div className="flex items-center gap-1.5 text-sm font-bold text-slate-700">
                <Zap size={12} className="text-primary" /> Oferta Relâmpago
              </div>
            </div>
            <div className="rounded-xl border border-slate-100 bg-white p-3">
              <div className="mb-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">Público</div>
              <div className="flex items-center gap-1.5 text-sm font-bold text-slate-700">
                <Users size={12} className="text-emerald-600" /> 847 leads
              </div>
            </div>
          </div>

          {/* Progress */}
          <div className="rounded-xl border border-slate-100 bg-white p-4">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-600">Progresso</span>
              <span className="text-xs font-bold text-primary">{Math.round(progress / 2)}%</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-gradient-to-r from-primary to-[#baff68] transition-all duration-300"
                style={{ width: `${progress / 2}%` }}
              />
            </div>
          </div>

          {/* Steps */}
          <div className="space-y-2">
            {progressSteps.map((step, i) => (
              <div key={i} className="flex items-center gap-3 rounded-lg border border-slate-100 bg-white px-3 py-2.5">
                {step.state === 'done' ? (
                  <CheckCircle2 size={16} className="shrink-0 text-primary" />
                ) : (
                  <div className="h-4 w-4 shrink-0 animate-spin rounded-full border-2 border-primary border-t-transparent" />
                )}
                <span className={`text-xs font-medium ${step.state === 'done' ? 'text-slate-500' : 'font-bold text-slate-800'}`}>
                  {step.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export const BroadcastSection = () => {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto grid max-w-[1360px] grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        {/* Left — Mockup */}
        <AnimateIn from="left" delay={150} duration={700} className="order-2 lg:order-1">
          <div className="flex justify-center lg:justify-start">
            <BroadcastMockup />
          </div>
        </AnimateIn>

        {/* Right — Copy */}
        <AnimateIn from="right" delay={200} className="order-1 lg:order-2">
          <div className="flex flex-col gap-6 text-center lg:text-left">
            <div className="space-y-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary font-[family-name:var(--font-display)]">
                Disparos em massa
              </p>

              <h2 className="mx-auto max-w-[560px] text-balance font-[family-name:var(--font-display)] text-[2rem] font-bold leading-[1.1] tracking-[-0.02em] text-slate-950 sm:text-[2.5rem] lg:mx-0 lg:text-[2.5rem]">
                Dispare campanhas{' '}
                <span className="italic font-medium text-primary">sem bagunçar a operação.</span>
              </h2>

              <p className="mx-auto max-w-xl text-pretty text-[15px] leading-[1.6] text-slate-600 lg:mx-0">
                Segmente a base, agende o envio e controle o ritmo para reativar contatos com segurança.
              </p>
            </div>

            <ul className="flex w-full flex-col gap-3.5 text-left">
              {BULLETS.map((bullet) => (
                <li key={bullet} className="flex items-center justify-center gap-2.5 lg:justify-start">
                  <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary">
                    <Check className="h-3 w-3 text-white" strokeWidth={3.5} />
                  </span>
                  <span className="text-[15px] text-slate-700">{bullet}</span>
                </li>
              ))}
            </ul>

            <a
              href="#pricing"
              className={`${ctaPrimary} mt-2 hidden lg:inline-flex`}
            >
              Ver planos
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </AnimateIn>

        <div className="order-3 lg:hidden">
          <a
            href="#pricing"
            className={`${ctaPrimary} ${ctaMobileFull}`}
          >
            Ver planos
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
