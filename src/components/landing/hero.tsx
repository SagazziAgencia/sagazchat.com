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
      className="border-b border-slate-100 bg-white pt-[80px] sm:pt-[84px] lg:min-h-screen lg:pt-[88px]"
    >
      <div className="mx-auto flex w-full max-w-[1360px] px-4 pb-16 pt-6 sm:px-6 sm:pb-20 sm:pt-8 lg:min-h-[calc(100svh-130px)] lg:items-center lg:pb-24 lg:pt-10">
        <div className="flex w-full flex-col gap-12 lg:flex-row lg:items-center lg:gap-10">
          <div className="flex-1 space-y-6 lg:min-w-[560px] xl:min-w-[610px]">
            <AnimateIn delay={0}>
              <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                PARA EMPRESAS QUE QUEREM ESCALAR SEM PERDER DINHEIRO
              </p>
            </AnimateIn>

            <AnimateIn delay={120}>
              <h1 className="font-[family-name:var(--font-display)] text-[1.9rem] leading-[1.08] tracking-[-0.04em] text-slate-900 sm:text-[2.55rem] lg:text-[44px] lg:leading-[1.1]">
                <span className="block font-medium lg:whitespace-nowrap">Sem CRM e automação,</span>
                <span className="mt-1 block font-medium lg:whitespace-nowrap">
                  você <span className="font-black">perde vendas</span> todo dia.
                </span>
                <span className="mt-1 block font-medium text-primary lg:whitespace-nowrap">
                  Com <span className="font-black">Sagazchat</span>, isso muda.
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
              <div className="text-[12px] font-medium text-slate-400">
                Sem fidelidade · Onboarding guiado · +19 integrações nativas
              </div>
            </AnimateIn>
          </div>

          <AnimateIn delay={180} className="flex w-full justify-center lg:w-[min(820px,calc(100vw-800px))] lg:flex-none lg:justify-end">
            <div className="w-full max-w-[660px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_28px_72px_rgba(15,23,42,0.14)] lg:max-w-none lg:translate-x-[20px]">
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
