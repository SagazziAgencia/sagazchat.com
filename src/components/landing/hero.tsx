import Link from 'next/link';
import { ArrowRight, PlayCircle } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { AnimateIn } from '@/components/ui/animate-in';
import { ChatPlatformGridShowcase } from './chat-platform-grid-showcase';
import { LANDING_CTA } from './cta-links';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative z-10 overflow-hidden bg-white pb-16 pt-24 border-b border-slate-100 scroll-mt-24 lg:pb-28 lg:pt-28"
    >

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">
          <div className="space-y-5">
            <div className="space-y-2">
              {/* Badge */}
              <AnimateIn delay={0}>
                <div className="inline-flex items-center gap-2.5 rounded-lg border border-emerald-500/20 bg-emerald-50 px-3.5 py-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  <span className="text-[11px] font-semibold tracking-wide text-emerald-700">
                    #1 em Automação para WhatsApp e Instagram
                  </span>
                </div>
              </AnimateIn>

              {/* Headline */}
              <AnimateIn delay={120}>
                <h1 className="font-[family-name:var(--font-display)] text-[1.875rem] font-bold leading-[1.15] tracking-tight text-slate-900 sm:text-[2.25rem] lg:text-[3.25rem]">
                  Pare de perder vendas{' '}
                  <br className="hidden sm:block" />
                  no <span className="text-primary">WhatsApp</span> e{' '}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888]">Instagram</span>
                </h1>
              </AnimateIn>

              {/* Subheadline */}
              <AnimateIn delay={240}>
                <p className="max-w-[34rem] text-base leading-relaxed text-slate-500 lg:text-[1.065rem]">
                  Automatize atendimento com IA no WhatsApp e Instagram Direct.
                  Fluxos inteligentes, CRM integrado — transforme cada conversa
                  em receita.
                </p>
              </AnimateIn>
            </div>

            {/* CTAs */}
            <AnimateIn delay={360}>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="h-12 rounded-lg px-8 text-sm font-semibold bg-primary text-white hover:bg-primary/90 transition-all shadow-[0_4px_14px_rgba(23,199,90,0.25)]">
                  <Link href={LANDING_CTA.pricingAnchor}>
                    Começar agora
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <Button asChild size="lg" variant="outline" className="h-12 rounded-lg border border-slate-200 bg-white px-8 text-sm font-medium text-slate-600 transition-colors hover:border-slate-300 hover:text-slate-900">
                  <Link href={LANDING_CTA.demo}>
                    <PlayCircle className="mr-2 h-4 w-4" />
                    Ver demonstração
                  </Link>
                </Button>
              </div>
            </AnimateIn>

            {/* Trust line */}
            <AnimateIn delay={460}>
              <p className="-mt-1 text-[13px] text-slate-400">
                Setup em 2 minutos &nbsp;•&nbsp; Suporte dedicado &nbsp;•&nbsp; Resultado comprovado
              </p>
            </AnimateIn>

            {/* Social proof */}
            <AnimateIn delay={540}>
              <div className="-mt-1 flex flex-wrap items-center gap-x-4 gap-y-2">
                <div className="flex items-center gap-1.5">
                  <span className="text-sm tracking-wide text-amber-400">★★★★★</span>
                  <span className="text-[13px] font-medium text-slate-500">
                    5.000+ empresas confiam no Sagazchat
                  </span>
                </div>
                <span className="hidden h-4 w-px bg-slate-200 sm:block" />
                <span className="text-[11px] font-medium text-slate-400">
                  Visto no Google &nbsp;•&nbsp; Meta &nbsp;•&nbsp; WhatsApp
                </span>
              </div>
            </AnimateIn>
          </div>

          {/* Phone mockup — mantém animação WhatsApp + Instagram */}
          <AnimateIn delay={300} duration={800}>
            <div className="w-full flex justify-center lg:justify-end">
              <ChatPlatformGridShowcase />
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
