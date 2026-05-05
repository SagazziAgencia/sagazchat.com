import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { AnimateIn } from '@/components/ui/animate-in';
import { LANDING_CTA } from './cta-links';
import { ctaMobileFull, ctaPrimary, ctaRow, ctaSecondary } from './cta-styles';
import { HeroChatReplica } from './hero-chat-replica';

export function Hero() {
  return (
    <section
      id="hero"
      className="border-b border-slate-100 bg-white pt-[92px] sm:pt-[108px] lg:min-h-screen lg:pt-[118px]"
    >
      <div className="mx-auto flex w-full max-w-[1360px] px-4 pb-10 pt-8 sm:px-6 sm:pb-20 sm:pt-10 lg:min-h-[calc(100svh-170px)] lg:items-center lg:pb-24 lg:pt-14">
        <div className="flex w-full flex-col items-center gap-6 text-center sm:gap-10 lg:gap-12">
          <div className="mx-auto w-full max-w-[1080px] space-y-4 sm:space-y-6">
            <AnimateIn delay={0}>
              <p className="font-[family-name:var(--font-display)] text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                Atendimento centralizado
              </p>
            </AnimateIn>

            <AnimateIn delay={120}>
              <h1 className="text-balance font-[family-name:var(--font-display)] text-[2rem] leading-[1.08] tracking-[-0.02em] text-slate-900 sm:text-[2.5rem] lg:text-[2.75rem]">
                <span className="block">
                  <span className="block font-medium lg:whitespace-nowrap">
                    Quando o atendimento fica bagunçado,
                  </span>
                  <span className="mt-2 block font-medium italic text-primary lg:whitespace-nowrap">
                    seu time perde vendas e sua empresa perde dinheiro.
                  </span>
                </span>
              </h1>
            </AnimateIn>

            <AnimateIn delay={240}>
              <p className="mx-auto max-w-[680px] text-pretty text-[14px] leading-[1.55] text-slate-600 sm:text-[15px] lg:text-[16px]">
                O Sagazchat centraliza WhatsApp, Instagram, CRM, automações e IA em um só painel para responder mais rápido e transformar conversas em vendas.
              </p>
            </AnimateIn>

          </div>

          <AnimateIn delay={180} className="flex w-full justify-center">
            <div className="w-[calc(100vw-8px)] max-w-[1296px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_28px_72px_rgba(15,23,42,0.14)] sm:w-full">
              <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#EF4444]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#F59E0B]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#22C55E]" />
                <div className="ml-2 flex-1 rounded-md bg-white px-3 py-1 text-[10px] font-medium text-slate-400 ring-1 ring-slate-200">
                  app.sagazchat.com/whatsapp
                </div>
              </div>
              <div className="h-[324px] min-[390px]:h-[348px] sm:h-[504px] lg:h-[648px]">
                <HeroChatReplica />
              </div>
            </div>
          </AnimateIn>

          <AnimateIn delay={360} className="w-full max-w-[620px]">
            <div className={ctaRow}>
              <Button
                asChild
                size="lg"
                className={`${ctaPrimary} ${ctaMobileFull}`}
              >
                <Link href={LANDING_CTA.pricingAnchor}>
                  <span className="hidden sm:inline">Quero recuperar vendas</span>
                  <span className="sm:hidden">Recuperar vendas</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className={`${ctaSecondary} ${ctaMobileFull}`}
              >
                <Link href={LANDING_CTA.pricingAnchor}>Ver planos</Link>
              </Button>
            </div>
          </AnimateIn>

          <AnimateIn delay={460}>
            <div className="mx-auto max-w-[680px] text-[12px] font-medium leading-relaxed text-slate-400">
              5 canais em slots livres · CRM visual · Automações, remarketing e IA no mesmo lugar
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
