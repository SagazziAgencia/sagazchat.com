import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { LANDING_CTA } from './cta-links';
import { ctaMobileFull, ctaPrimary, ctaRow, ctaSecondary } from './cta-styles';
import { HeroChatReplica } from './hero-chat-replica';

export function Hero() {
  return (
    <section
      id="hero"
      className="border-b border-slate-100 bg-[linear-gradient(180deg,#ffffff_0%,#f7fbf8_62%,#ffffff_100%)] pt-[84px] sm:pt-[96px] lg:min-h-screen lg:pt-[104px]"
    >
      <div className="mx-auto flex w-full max-w-[1360px] px-4 pb-10 pt-7 sm:px-6 sm:pb-16 sm:pt-9 lg:min-h-[calc(100svh-150px)] lg:items-center lg:pb-20 lg:pt-10">
        <div className="flex w-full flex-col items-center gap-7 text-center sm:gap-9 lg:gap-10">
          <div className="mx-auto w-full max-w-[980px] space-y-5 sm:space-y-6">
            <p className="hero-kicker mx-auto inline-flex rounded-full border border-primary/20 bg-white px-3 py-1.5 font-[family-name:var(--font-sans)] text-[11px] font-extrabold uppercase tracking-[0.16em] text-primary shadow-sm">
              Atendimento, vendas e equipe no mesmo painel
            </p>

            <h1 className="hero-title mx-auto max-w-[940px] font-[family-name:var(--font-sans)] text-[2rem] font-extrabold leading-[1.03] tracking-[-0.03em] text-[#07111F] sm:text-[3.4rem] lg:text-[4.25rem]">
              <span className="block">Organize o WhatsApp</span>
              <span className="block">atenda melhor</span>
              <span className="block text-primary">e venda mais.</span>
            </h1>

            <p className="hero-subcopy mx-auto max-w-[690px] text-pretty text-[15px] leading-[1.65] text-slate-600 sm:text-[16px] lg:text-[17px]">
              O Sagazchat centraliza WhatsApp, CRM, automações e IA em um só painel para responder mais rápido e transformar conversas em vendas.
            </p>

            <div className="hero-cta mx-auto w-full max-w-[620px]">
              <div className={`${ctaRow} justify-center`}>
                <Button
                  asChild
                  size="lg"
                  className={`${ctaPrimary} ${ctaMobileFull}`}
                >
                  <Link href={LANDING_CTA.pricingAnchor}>
                    <span className="hidden sm:inline">Quero organizar meu WhatsApp</span>
                    <span className="sm:hidden">Organizar WhatsApp</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className={`${ctaSecondary} ${ctaMobileFull} bg-white/80`}
                >
                  <Link href={LANDING_CTA.pricingAnchor}>Ver planos</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="flex w-full justify-center">
            <div className="w-[calc(100vw-8px)] max-w-[1320px] sm:w-full">
              {/* Notebook screen + bezel */}
              <div className="hero-device-shell relative rounded-[16px] bg-[#0a0a0a] p-[5px] pt-[14px] shadow-[0_36px_90px_rgba(15,23,42,0.32)] sm:rounded-[20px] sm:p-[7px] sm:pt-[18px] lg:rounded-[24px] lg:p-[9px] lg:pt-[22px]">
                {/* Camera */}
                <span
                  aria-hidden
                  className="absolute left-1/2 top-[5px] h-[4px] w-[4px] -translate-x-1/2 rounded-full bg-[#3f3f46] ring-[0.5px] ring-[#18181b] sm:top-[7px] sm:h-[5px] sm:w-[5px] lg:top-[9px] lg:h-[6px] lg:w-[6px]"
                />
                {/* Inner screen */}
                <div className="overflow-hidden rounded-[10px] border border-slate-200 bg-white sm:rounded-[12px] lg:rounded-[14px]">
                  <div className="hero-browser-chrome flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-3">
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
              </div>

              {/* Notebook base (hinge + lower body) */}
              <div className="relative mx-auto -mt-[2px] h-[18px] w-full sm:h-[24px] lg:h-[30px]">
                <div className="absolute inset-x-0 top-0 h-full rounded-b-[18px] bg-gradient-to-b from-[#e2e8f0] via-[#94a3b8] to-[#475569] shadow-[0_26px_44px_rgba(15,23,42,0.28)] sm:-inset-x-[2%]" />
                <div className="absolute left-1/2 top-0 h-[4px] w-[100px] -translate-x-1/2 rounded-b-full bg-[#1e293b]/60 sm:w-[140px] lg:w-[180px]" />
              </div>
            </div>
          </div>

          <div className="hero-proof mx-auto max-w-[680px] text-center text-[12px] font-semibold leading-relaxed text-slate-400">
            WhatsApp conectado · CRM visual · Automações, remarketing e IA no mesmo lugar
          </div>
        </div>
      </div>
    </section>
  );
}
