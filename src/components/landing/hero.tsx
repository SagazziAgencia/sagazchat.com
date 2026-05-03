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
      className="border-b border-slate-100 bg-white pt-[74px] sm:pt-[84px] lg:min-h-screen lg:pt-[88px]"
    >
      <div className="mx-auto flex w-full max-w-[1360px] px-4 pb-10 pt-4 sm:px-6 sm:pb-20 sm:pt-8 lg:min-h-[calc(100svh-130px)] lg:items-center lg:pb-24 lg:pt-10">
        <div className="flex w-full flex-col items-center gap-6 text-center sm:gap-10 lg:gap-12">
          <div className="mx-auto w-full max-w-[1080px] space-y-4 sm:space-y-6">
            <AnimateIn delay={0}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500 sm:text-[12px]">
                ATENDIMENTO, CRM E AUTOMAÇÕES PARA VENDER MAIS
              </p>
            </AnimateIn>

            <AnimateIn delay={120}>
              <h1 className="text-balance font-[family-name:var(--font-display)] text-[2rem] leading-[1.08] tracking-[-0.02em] text-slate-900 sm:text-[2.5rem] lg:text-[2.75rem]">
                <span className="block">
                  <span className="block font-medium lg:whitespace-nowrap">
                    Pare de perder <span className="font-black">lucro</span> em conversas espalhadas.
                  </span>
                  <span className="mt-2 block font-medium italic text-primary lg:whitespace-nowrap">
                    Centralize sua operação e <span className="font-black">venda mais no WhatsApp</span>.
                  </span>
                </span>
              </h1>
            </AnimateIn>

            <AnimateIn delay={240}>
              <p className="mx-auto max-w-[680px] text-pretty text-[14px] leading-[1.55] text-slate-600 sm:text-[15px] lg:text-[16px]">
                Atendimento ao vivo, CRM Kanban, fluxos, transmissões, remarketing, agenda e IA em um só painel para responder rápido e transformar conversas em vendas.
              </p>
            </AnimateIn>

          </div>

          <AnimateIn delay={180} className="flex w-full justify-center">
            <div className="w-[calc(100vw-8px)] max-w-[1080px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_28px_72px_rgba(15,23,42,0.14)] sm:w-full">
              <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#EF4444]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#F59E0B]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#22C55E]" />
                <div className="ml-2 flex-1 rounded-md bg-white px-3 py-1 text-[10px] font-medium text-slate-400 ring-1 ring-slate-200">
                  app.sagazchat.com/whatsapp
                </div>
              </div>
              <div className="h-[270px] min-[390px]:h-[290px] sm:h-[420px] lg:h-[540px]">
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
                  <span className="hidden sm:inline">Quero organizar minhas vendas</span>
                  <span className="sm:hidden">Quero vender mais</span>
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
              WhatsApp + Instagram · CRM visual · Automações, remarketing e IA no mesmo lugar
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
