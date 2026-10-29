'use client';

import React, { useState, useMemo, useEffect, useRef } from 'react';
import { ArrowRight, Minus, Plus, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { AnimateIn } from '@/components/ui/animate-in';
import { ctaPlanPrimary, ctaPlanSecondary } from './cta-styles';
import { LANDING_CTA } from './cta-links';
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
      '5 acessos simultâneos',
      '1 grupo por slot',
      'Disparos em massa + robôs',
      '15.000 webhooks/mês por conexão',
      '2 kanbans · suporte humano',
    ],
  },
  {
    tier: 'pro',
    seq: '02',
    headline: 'Volume e integrações',
    base: 'Tudo do Basic',
    delta: [
      '30.000 webhooks/mês por conexão',
      '15 acessos simultâneos',
      '3 grupos por slot',
      '5 kanbans · agenda nativa',
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
    delta: ['1 agente IA', '~5 mil mensagens/mês (5M tokens)'],
  },
  {
    tier: 'proIa',
    seq: '04',
    headline: 'Operação inteira no automático',
    base: 'Tudo do PRO',
    delta: ['2 agentes IA', '~10 mil mensagens/mês (10M tokens)'],
  },
];

const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  maximumFractionDigits: 0,
});

function parseCurrency(value: string) {
  return Number(value.replace(/\./g, '').replace(',', '.'));
}

function getPlanPriceDiscount(
  tier: Tier,
  connections: number,
  selectedPlan: { price: string }
) {
  if (connections <= 1) return null;

  const singleConnectionPrice = parseCurrency(getPlan(tier, 1).price);
  const selectedPrice = parseCurrency(selectedPlan.price);
  const referencePrice = singleConnectionPrice * connections;
  const savings = Math.max(referencePrice - selectedPrice, 0);

  if (savings <= 0) return null;

  return {
    referencePrice: currencyFormatter.format(referencePrice),
    savings: currencyFormatter.format(savings),
  };
}

/** "de R$147 no mês seguinte" -> "R$147" (o preço cheio que vale a partir do 2º mês). */
function regularPriceOf(subtext: string) {
  const match = subtext.match(/R\$\s?([\d.]+)/);
  return match ? `R$${match[1]}` : null;
}

export function PricingSection() {
  const [connections, setConnections] = useState(1);
  const stripRef = useRef<HTMLOListElement>(null);

  // Mobile: o trilho abre já centralizado no PRO (plano em destaque).
  useEffect(() => {
    const strip = stripRef.current;
    if (!strip || window.innerWidth >= 768) return;
    const rec = strip.querySelector<HTMLElement>('[data-recommended="true"]');
    if (rec) strip.scrollLeft = rec.offsetLeft - (strip.clientWidth - rec.clientWidth) / 2;
  }, []);

  const planFor = useMemo(
    () => (tier: Tier) => getPlan(tier, connections),
    [connections]
  );

  return (
    <section id="pricing" className="bg-[#FAFAF8] py-12 sm:py-16 lg:py-24 relative scroll-mt-16">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <AnimateIn>
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary mb-5 font-[family-name:var(--font-sans)]">
              Planos e Preços
            </p>
            <h2 className="font-[family-name:var(--font-sans)] text-3xl sm:text-4xl lg:text-[3rem] text-balance font-extrabold tracking-[-0.02em] leading-[1.1] text-slate-950 mb-5">
              Comece com a estrutura certa{' '}
              <span className="font-extrabold text-primary">para vender mais.</span>
            </h2>
            <p className="mx-auto max-w-xl text-pretty text-[15px] leading-relaxed text-slate-600">
              Cada conexão é um canal ativo da sua operação, como o WhatsApp ou o Instagram. Escolha a quantidade, veja o preço na hora e ajuste quando crescer.
            </p>
          </div>
        </AnimateIn>

        {/* Controls bar — right above cards */}
        <AnimateIn delay={100}>
          <div className="mb-8 flex flex-col items-center justify-center gap-3 px-1 text-center sm:mb-6">
            <span className="text-[12px] font-medium text-slate-500">
              Quantas conexões sua operação precisa agora?
            </span>
            <div className="flex w-full items-center justify-center gap-3 flex-wrap sm:w-auto">
              <div className="inline-flex items-center gap-2 text-[12px] text-slate-600">
                <span className="font-medium">Conexões</span>
                <div className="flex items-center gap-0 rounded-full border border-slate-300 bg-white overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setConnections((c) => Math.max(1, c - 1))}
                    disabled={connections <= 1}
                    aria-label="Menos um slot de canal"
                    className="w-9 h-9 flex items-center justify-center text-slate-600 hover:bg-slate-100 disabled:text-slate-300 disabled:cursor-not-allowed transition-colors active:scale-90"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <div className="w-9 text-center font-[family-name:var(--font-sans)] font-bold tabular-nums text-[15px] text-slate-900">
                    {connections}
                  </div>
                  <button
                    type="button"
                    onClick={() => setConnections((c) => Math.min(20, c + 1))}
                    disabled={connections >= 20}
                    aria-label="Mais um slot de canal"
                    className="w-9 h-9 flex items-center justify-center text-slate-600 hover:bg-slate-100 disabled:text-slate-300 disabled:cursor-not-allowed transition-colors active:scale-90"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
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

            {/* Mobile: trilho horizontal com snap (abre no PRO). md+: faixa contínua de planos. */}
            <ol
              ref={stripRef}
              className="no-scrollbar relative -mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-4 pt-2 md:mx-0 md:grid md:grid-cols-2 md:gap-0 md:overflow-visible md:px-0 md:pb-0 md:pt-0 lg:grid-cols-4"
            >
              {STEPS.map((step, idx) => {
                const isIaPlan = step.tier === 'basicIa' || step.tier === 'proIa';
                const needsCustomIa = isIaPlan && connections > 5;
                const plan = needsCustomIa ? null : planFor(step.tier);
                const priceDiscount = plan ? getPlanPriceDiscount(step.tier, connections, plan) : null;
                const isRec = step.recommended;
                return (
                  <li
                    key={step.tier}
                    data-recommended={isRec ? 'true' : undefined}
                    className={cn(
                      'relative bg-white p-6 lg:p-7 flex flex-col transition-all group/card',
                      // mobile: cada plano é um cartão do trilho
                      'w-[84%] max-w-[340px] shrink-0 snap-center rounded-2xl border border-slate-200',
                      // md+: faixa contínua com divisórias
                      'md:w-auto md:max-w-none md:shrink md:rounded-none md:border-0 md:border-t',
                      'lg:border-t-0 lg:border-l',
                      'md:even:border-l md:odd:border-l-0 lg:even:border-l',
                      idx === 0 && 'md:rounded-tl-2xl lg:border-l-0 lg:rounded-tl-2xl lg:rounded-bl-2xl lg:rounded-tr-none',
                      idx === 1 && 'md:rounded-tr-2xl lg:rounded-none',
                      idx === 2 && 'md:rounded-bl-2xl lg:rounded-none',
                      idx === STEPS.length - 1 && 'md:rounded-br-2xl lg:rounded-tr-2xl lg:rounded-br-2xl lg:rounded-bl-none',
                      isRec &&
                        'lg:-mt-3 lg:pb-10 lg:shadow-[0_20px_60px_-20px_rgba(23,199,90,0.25)] ring-1 ring-primary/30 lg:rounded-2xl lg:border-l-0 z-10'
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
                      <span className="font-[family-name:var(--font-sans)] font-bold text-[22px] tracking-tight text-slate-950 leading-tight">
                        {tierMeta[step.tier].label}
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
                      {plan ? (
                        <>
                          <span className="mb-2.5 inline-flex rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-bold text-primary">
                            −20% no 1º mês
                          </span>
                          <div className="flex items-baseline gap-1.5">
                            <span className="text-[13px] font-semibold text-slate-600">R$</span>
                            <span className="font-[family-name:var(--font-sans)] font-extrabold text-[40px] tabular-nums leading-none tracking-[-0.02em] text-slate-950">
                              {plan.price.split(',')[0]}
                            </span>
                            <span className="text-[13px] font-semibold text-slate-600">no 1º mês</span>
                          </div>
                          <div className="mt-1.5 text-[13px] leading-tight text-slate-600">
                            depois{' '}
                            <span className="font-semibold text-slate-800 tabular-nums">
                              {regularPriceOf(plan.subtext) ?? plan.subtext}/mês
                            </span>
                          </div>
                          <div className="mb-4 mt-1.5 min-h-[28px] text-[11px] leading-snug text-slate-600">
                            {priceDiscount
                              ? `Economiza ${priceDiscount.savings} frente a ${connections} planos de 1 conexão`
                              : ''}
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="font-[family-name:var(--font-sans)] font-extrabold text-[30px] leading-none tracking-[-0.02em] text-slate-950">
                            Sob consulta
                          </div>
                          <div className="mb-4 mt-2 min-h-[28px] text-[11px] leading-snug text-slate-600">
                            IA acima de 5 slots entra como implantação personalizada
                          </div>
                        </>
                      )}

                      <a
                        href={plan ? plan.link : LANDING_CTA.salesContact}
                        target={plan?.link.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className={isRec ? ctaPlanPrimary : ctaPlanSecondary}
                      >
                        <span>{plan ? 'Contratar' : 'Falar com vendas'}</span>
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
            Sem fidelidade · cancele quando quiser · migre sem perder dados
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
