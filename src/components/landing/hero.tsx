import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { AnimateIn } from '@/components/ui/animate-in';
import { LANDING_CTA } from './cta-links';
import { HeroChatReplica } from './hero-chat-replica';

export function Hero() {
  return (
    <section
      id="hero"
      className="border-b border-slate-100 bg-white px-6 pt-[80px] sm:px-8 sm:pt-[84px] lg:px-24 lg:pt-[88px]"
    >
      <div className="mx-auto flex w-full max-w-[1320px] pb-16 pt-6 sm:pb-20 sm:pt-8 lg:pb-24 lg:pt-10">
        <div className="flex w-full flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
          <div className="flex-1 space-y-6 lg:min-w-[520px] xl:min-w-[580px]">
            <AnimateIn delay={0}>
              <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                Para empresas que querem escalar sem perder dinheiro
              </p>
            </AnimateIn>

            <AnimateIn delay={120}>
              <h1 className="font-[family-name:var(--font-display)] text-[2.1rem] leading-[1.04] tracking-[-0.045em] text-slate-900 sm:text-[2.9rem] lg:text-[46px] lg:leading-[1.08]">
                <span className="block font-medium">
                  Você tem <span className="font-black">funil,</span>{' '}
                  <span className="font-black">organização</span> e{' '}
                  <span className="font-black">qualificação automática?</span>
                </span>
                <span className="mt-2 block font-medium text-primary">
                  Se não, <span className="font-black">tá perdendo vendas.</span>
                </span>
              </h1>
            </AnimateIn>

            <AnimateIn delay={240}>
              <p className="max-w-[620px] text-[15px] leading-[1.65] text-slate-500 lg:text-[17px]">
                Centralize canais, organize atendimentos e acompanhe cada oportunidade em um só lugar para responder melhor e vender mais.
              </p>
            </AnimateIn>

            <AnimateIn delay={360}>
              <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="h-[54px] rounded-lg bg-primary px-9 text-[15px] font-semibold text-white shadow-[0_4px_14px_rgba(23,199,90,0.25)] transition-all hover:bg-primary/90"
                >
                  <Link href={LANDING_CTA.pricingAnchor}>
                    Quero ver funcionando
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-[54px] rounded-lg border-slate-300 px-9 text-[15px] font-semibold text-slate-900 transition-all hover:border-slate-400 hover:bg-slate-50"
                >
                  <Link href={LANDING_CTA.pricingAnchor}>Ver planos</Link>
                </Button>
              </div>
            </AnimateIn>

            <AnimateIn delay={460}>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[12px] font-medium text-slate-400 sm:text-[13px] lg:justify-start">
                <span>Sem fidelidade</span>
                <span className="h-1 w-1 rounded-full bg-slate-300" />
                <span>Onboarding guiado</span>
                <span className="h-1 w-1 rounded-full bg-slate-300" />
                <span>+19 integrações nativas</span>
              </div>
            </AnimateIn>

            <AnimateIn delay={520}>
              <div className="text-[13px] font-medium text-slate-500">
                Integra com Hotmart, Kiwify, Meta, Google Sheets, n8n e mais
              </div>
            </AnimateIn>
          </div>

          <AnimateIn delay={180} className="flex w-full justify-center lg:w-[min(820px,calc(100vw-800px))] lg:flex-none lg:justify-end">
            <div className="w-full max-w-[660px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_28px_72px_rgba(15,23,42,0.14)] lg:max-w-none lg:translate-x-[80px]">
              <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#EF4444]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#F59E0B]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#22C55E]" />
                <div className="ml-2 flex-1 rounded-md bg-white px-3 py-1 text-[10px] font-medium text-slate-400 ring-1 ring-slate-200">
                  app.sagazchatbot.ai/whatsapp
                </div>
              </div>
              <div className="aspect-[4/5] lg:h-[540px] lg:aspect-auto">
                <HeroChatReplica />
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
