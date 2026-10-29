import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { LANDING_CTA } from './cta-links';
import { ctaMobileFull, ctaPrimary, ctaRow, ctaSecondary } from './cta-styles';
import { HeroDemo } from './hero-demo/hero-demo';

export function Hero() {
  return (
    <section
      id="hero"
      className="border-b border-slate-100 bg-[linear-gradient(180deg,#ffffff_0%,#f7fbf8_62%,#ffffff_100%)] pt-[84px] sm:pt-[96px] lg:min-h-screen lg:pt-[104px]"
    >
      <div className="mx-auto flex w-full max-w-[1360px] px-4 pb-10 pt-7 sm:px-6 sm:pb-16 sm:pt-9 lg:items-center lg:pb-20 lg:pt-10">
        <div className="flex w-full flex-col items-center gap-7 text-center sm:gap-9 lg:gap-10">
          <div className="mx-auto w-full max-w-[980px] space-y-5 sm:space-y-6">
            <p className="mx-auto inline-flex rounded-full border border-primary/20 bg-white px-3 py-1.5 font-[family-name:var(--font-sans)] text-[11px] font-extrabold uppercase tracking-[0.16em] text-primary shadow-sm">
              Atendimento, vendas e equipe no mesmo painel
            </p>

            <h1 className="mx-auto max-w-[940px] text-balance font-[family-name:var(--font-sans)] text-[2rem] font-extrabold leading-[1.05] tracking-[-0.03em] text-[#07111F] sm:text-[3rem] lg:text-[3.75rem]">
              <span className="block">Cada conversa sem resposta</span>
              <span className="block text-primary">é uma venda que você perde.</span>
            </h1>

            <p className="mx-auto max-w-[690px] text-pretty text-[15px] leading-[1.65] text-slate-600 sm:text-[16px] lg:text-[17px]">
              O Sagazchat centraliza WhatsApp, CRM, automações e IA em um só painel para responder mais rápido e transformar conversas em vendas.
            </p>

            <div className="mx-auto w-full max-w-[620px]">
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
                  <Link href={LANDING_CTA.setupAnchor}>Quero que montem pra mim</Link>
                </Button>
              </div>

              {/* Linha de prova logo abaixo dos CTAs. Preço = 1º mês de 1 conexão Basic (R$147 depois). */}
              {/* TODO [CONFIRMAR]: nº de clientes ativos autorizado pra uso público — se confirmado, entra aqui. */}
              <p className="mt-3.5 text-[13px] font-semibold text-slate-600">
                Sem fidelidade <span aria-hidden="true" className="mx-1.5 text-slate-300">·</span> a partir de R$117 no 1º mês
              </p>
            </div>
          </div>

          {/* Demo do painel: celular até lg, notebook de lg pra cima. Decorativa (aria-hidden + inert). */}
          <div className="flex w-full justify-center">
            <p className="sr-only">
              Demonstração do painel: chega uma mensagem de cliente, a IA responde e etiqueta como lead quente, a conversa passa para um atendente
              que envia o link de pagamento, o card vai para Fechado no Kanban e o pagamento aprovado aparece como aviso.
            </p>
            <div aria-hidden="true" className="w-full max-w-[344px] lg:max-w-[1320px]">
              <div className="relative rounded-[40px] bg-[#0a0a0a] p-[7px] shadow-[0_30px_70px_rgba(15,23,42,0.28)] lg:rounded-[24px] lg:p-[9px] lg:pt-[22px] lg:shadow-[0_36px_90px_rgba(15,23,42,0.32)]">
                {/* Câmera (notebook) */}
                <span className="absolute left-1/2 top-[9px] hidden h-[6px] w-[6px] -translate-x-1/2 rounded-full bg-[#3f3f46] ring-[0.5px] ring-[#18181b] lg:block" />
                {/* Ilha dinâmica (celular) */}
                <span className="absolute left-1/2 top-[15px] z-20 h-[18px] w-[72px] -translate-x-1/2 rounded-full bg-[#0a0a0a] lg:hidden" />
                <div className="overflow-hidden rounded-[33px] border border-slate-200 bg-white lg:rounded-[14px]">
                  <div className="hidden items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-3 lg:flex">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#EF4444]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#F59E0B]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#22C55E]" />
                    <div className="ml-2 flex-1 rounded-md bg-white px-3 py-1 text-[10px] font-medium text-slate-400 ring-1 ring-slate-200">
                      app.sagazchat.com/whatsapp
                    </div>
                  </div>
                  <div className="h-[600px] lg:h-[648px]">
                    <HeroDemo />
                  </div>
                </div>
              </div>

              {/* Base do notebook */}
              <div className="relative mx-auto -mt-[2px] hidden h-[30px] w-full lg:block">
                <div className="absolute -inset-x-[2%] top-0 h-full rounded-b-[18px] bg-gradient-to-b from-[#e2e8f0] via-[#94a3b8] to-[#475569] shadow-[0_26px_44px_rgba(15,23,42,0.28)]" />
                <div className="absolute left-1/2 top-0 h-[4px] w-[180px] -translate-x-1/2 rounded-b-full bg-[#1e293b]/60" />
              </div>
            </div>
          </div>

          <div className="mx-auto hidden max-w-[680px] text-center text-[12px] font-semibold leading-relaxed text-slate-500 sm:block">
            WhatsApp conectado · CRM visual · Automações, remarketing e IA no mesmo lugar
          </div>
        </div>
      </div>
    </section>
  );
}
