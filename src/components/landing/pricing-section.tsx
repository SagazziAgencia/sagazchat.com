'use client';

import React, { useState, useMemo } from 'react';
import { ArrowRight, Minus, Plus, Instagram, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { AnimateIn } from '@/components/ui/animate-in';
import {
  getPlan,
  tierMeta,
  type Tier,
} from './pricing/plans-data';

type Step = {
  tier: Tier;
  seq: string;
  headline: string;
  delta: string[];
  base?: string;
  recommended?: boolean;
};

const STEPS: Step[] = [
  {
    tier: 'basic',
    seq: '01',
    headline: 'O básico bem feito',
    delta: [
      'Atendimento multi-atendente',
      'Disparos em massa + robôs',
      '15k webhooks/mês por conexão',
      '2 kanbans · suporte humano',
    ],
  },
  {
    tier: 'pro',
    seq: '02',
    headline: 'Volume e integrações',
    base: 'Tudo do Basic',
    delta: [
      '30k webhooks/mês por conexão',
      '20 acessos simultâneos',
      '5 kanbans · agenda',
      'Integração Post/Put/Get',
      '1 call de onboarding',
    ],
    recommended: true,
  },
  {
    tier: 'basicIa',
    seq: '03',
    headline: 'Agente IA respondendo',
    base: 'Tudo do Basic',
    delta: ['1 agente IA', '5 MM tokens/mês'],
  },
  {
    tier: 'proIa',
    seq: '04',
    headline: 'Operação inteira no automático',
    base: 'Tudo do PRO',
    delta: ['2 agentes IA', '10 MM tokens/mês'],
  },
];

export function PricingSection() {
  const [connections, setConnections] = useState(1);
  const [instagram, setInstagram] = useState(false);

  const planFor = useMemo(
    () => (tier: Tier) => getPlan(tier, connections, instagram),
    [connections, instagram]
  );

  return (
    <section id="pricing" className="bg-[#FAFAF8] py-24 relative">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <AnimateIn>
          <div className="max-w-2xl mb-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary mb-5 font-[family-name:var(--font-display)]">
              Planos e Preços
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-[3rem] font-bold tracking-[-0.02em] leading-[1.1] text-slate-950 mb-5">
              Escolha o plano pela fase{' '}
              <span className="italic font-medium text-primary">da sua operação, não pelo improviso.</span>
            </h2>
            <p className="text-[15px] text-slate-600 leading-relaxed max-w-xl">
              Todos os planos partem da mesma base de automação. Você adiciona IA, Instagram e mais conexões conforme a operação cresce. Sem fidelidade e com cancelamento quando quiser.
            </p>
          </div>
        </AnimateIn>

        {/* Controls bar — right above cards */}
        <AnimateIn delay={100}>
          <div className="flex items-center justify-between gap-4 flex-wrap mb-4 px-1">
            <span className="text-[12px] text-slate-500">
              Ajuste volume e canais para ver o preço do seu plano:
            </span>
            <div className="flex items-center gap-3 flex-wrap">
              <div className="inline-flex items-center gap-2 text-[12px] text-slate-600">
                <span className="font-medium">Conexões</span>
                <div className="flex items-center gap-0 rounded-full border border-slate-300 bg-white overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setConnections((c) => Math.max(1, c - 1))}
                    disabled={connections <= 1}
                    aria-label="Menos uma conexão"
                    className="w-9 h-9 flex items-center justify-center text-slate-600 hover:bg-slate-100 disabled:text-slate-300 disabled:cursor-not-allowed transition-colors active:scale-90"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <div className="w-9 text-center font-[family-name:var(--font-display)] font-bold tabular-nums text-[15px] text-slate-900">
                    {connections}
                  </div>
                  <button
                    type="button"
                    onClick={() => setConnections((c) => Math.min(10, c + 1))}
                    disabled={connections >= 10}
                    aria-label="Mais uma conexão"
                    className="w-9 h-9 flex items-center justify-center text-slate-600 hover:bg-slate-100 disabled:text-slate-300 disabled:cursor-not-allowed transition-colors active:scale-90"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setInstagram((v) => !v)}
                aria-pressed={instagram}
                className={cn(
                  'inline-flex items-center gap-2 px-3.5 py-2 rounded-full border text-[12px] font-medium transition-all active:scale-[0.98]',
                  instagram
                    ? 'bg-slate-950 border-slate-950 text-white'
                    : 'bg-white border-slate-300 text-slate-600 hover:border-slate-400'
                )}
              >
                <Instagram className="w-3.5 h-3.5" />
                {instagram ? 'Instagram incluso' : 'Adicionar Instagram'}
              </button>
            </div>
          </div>
        </AnimateIn>

        {/* Progression strip */}
        <AnimateIn delay={150} duration={800}>
          <div className="relative">
            <div
              aria-hidden
              className="absolute top-[72px] left-8 right-8 h-px hidden lg:block"
              style={{
                backgroundImage: 'linear-gradient(to right, #CBD5E1 50%, transparent 50%)',
                backgroundSize: '8px 1px',
              }}
            />

            <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative">
              {STEPS.map((step, idx) => {
                const plan = planFor(step.tier);
                const isRec = step.recommended;
                return (
                  <li
                    key={step.tier}
                    className={cn(
                      'relative bg-white p-6 lg:p-7 flex flex-col border-t border-slate-200 transition-all group/card',
                      'lg:border-t-0 lg:border-l',
                      'md:even:border-l md:odd:border-l-0 lg:even:border-l',
                      idx === 0 && 'lg:border-l-0 lg:rounded-l-2xl',
                      idx === STEPS.length - 1 && 'lg:rounded-r-2xl',
                      isRec &&
                        'lg:-mt-3 lg:pb-10 lg:shadow-[0_20px_60px_-20px_rgba(23,199,90,0.25)] ring-1 ring-primary/20 lg:rounded-2xl lg:border-l-0 z-10'
                    )}
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className={cn(
                          'w-3 h-3 rounded-full ring-[6px] transition-all',
                          isRec
                            ? 'bg-primary ring-[#FAFAF8] group-hover/card:scale-125'
                            : 'bg-slate-300 ring-[#FAFAF8] group-hover/card:bg-slate-500'
                        )}
                      />
                      <span className="font-mono text-[11px] text-slate-400 tracking-wider">{step.seq}</span>
                    </div>

                    {isRec && (
                      <div className="mb-3 inline-flex w-fit items-center gap-1.5 px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.14em]">
                        Escolha da maioria
                      </div>
                    )}

                    <div className="mb-1">
                      <span className="font-[family-name:var(--font-display)] font-bold text-[22px] tracking-tight text-slate-950 leading-tight">
                        {tierMeta[step.tier].label}
                        {instagram && <span className="text-slate-400"> + IG</span>}
                      </span>
                    </div>
                    <p className="text-[13px] text-slate-500 mb-6 leading-snug">{step.headline}</p>

                    {step.base && (
                      <div className="mb-3 flex items-center gap-2 text-[12px] text-slate-500 font-medium pb-3 border-b border-dashed border-slate-200">
                        <Plus className="w-3 h-3 text-primary" strokeWidth={3} />
                        <span>{step.base}</span>
                      </div>
                    )}

                    <ul className="space-y-2 mb-8 flex-1">
                      {step.delta.map((f, i) => (
                        <li key={i} className="flex items-start gap-2 text-[13px] text-slate-700">
                          <Check className="w-3.5 h-3.5 text-primary mt-1 shrink-0" strokeWidth={3} />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-5 border-t border-slate-100 mt-auto">
                      <div className="flex items-baseline gap-0.5 mb-1">
                        <span className="text-slate-400 text-[11px]">R$</span>
                        <span className="font-[family-name:var(--font-display)] font-bold text-[36px] tabular-nums text-slate-950 leading-none tracking-[-0.02em]">
                          {plan.price.split(',')[0]}
                        </span>
                        <span className="font-[family-name:var(--font-display)] font-bold text-[16px] text-slate-500 tabular-nums">
                          ,{plan.price.split(',')[1]}
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-400 mb-4 leading-tight">{plan.subtext}</div>

                      <a
                        href={plan.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          'group flex items-center justify-between w-full px-4 py-2.5 rounded-xl text-[13px] font-bold transition-all active:scale-[0.98]',
                          isRec
                            ? 'bg-primary text-white hover:bg-primary/90'
                            : 'bg-slate-950 text-white hover:bg-slate-800'
                        )}
                      >
                        <span>Contratar</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" strokeWidth={2.5} />
                      </a>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </AnimateIn>

        <AnimateIn delay={300}>
          <div className="mt-10 text-center text-[12px] text-slate-500">
            Sem fidelidade · cancele a qualquer momento · migre entre planos sem perder dado
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
