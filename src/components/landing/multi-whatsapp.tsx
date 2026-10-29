'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { ArrowRight, MonitorSmartphone } from 'lucide-react';
import { AnimateIn } from '@/components/ui/animate-in';
import { ctaDesktopInline, ctaMobileFull, ctaPrimary } from './cta-styles';

/* Imagem otimizada (era PNG de 8,6 MB no i.ibb.co): public/images/canais-painel.webp.
   TODO [CONFIRMAR]: o print é da conta do Iarley e mostra Instagram "indisponível no plano" e
   Messenger "em breve". Recapturar de uma conta com Instagram ativo. */
const MULTI_WHATSAPP_IMAGE = '/images/canais-painel.webp';

/* A promessa acompanha o que existe hoje (central de ajuda: WhatsApp por QR Code, WhatsApp
   Oficial/API Meta e Instagram). Email, Widget e Messenger não entram no texto até confirmar
   disponibilidade por plano. */
const CHANNELS = [
  'WhatsApp por QR Code ou WhatsApp Oficial (API da Meta)',
  'Instagram: direct e comentários',
  'Histórico único por contato',
  'Transferência sem perder contexto',
];

/* ── Safe image with fallback ──────────────────────────── */

function SafeImage({ src, alt }: { src: string; alt: string }) {
  const [error, setError] = useState(false);
  const isExternal = /^https?:\/\//i.test(src);

  useEffect(() => {
    setError(false);
  }, [src]);

  if (error) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-gradient-to-br from-slate-50 to-slate-100 p-8 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/80 shadow-sm ring-1 ring-emerald-100">
          <MonitorSmartphone className="h-7 w-7 text-primary" />
        </div>
        <p className="text-lg font-bold text-slate-700">Screenshot</p>
        <p className="mt-1 text-sm text-slate-400">
          {isExternal
            ? 'Verifique a URL configurada em multi-whatsapp.tsx'
            : `Adicione a imagem em /public${src}`}
        </p>
      </div>
    );
  }

  if (isExternal) {
    return (
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover object-left-top"
        loading="lazy"
        decoding="async"
        onError={() => setError(true)}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      quality={75}
      sizes="(min-width: 1024px) 50vw, 95vw"
      className="object-cover object-left-top"
      onError={() => setError(true)}
    />
  );
}

/* ── Main component ────────────────────────────────────── */

export function MultiWhatsapp() {
  return (
    <section id="canais" className="scroll-mt-20 bg-[#F8FAFC] lg:min-h-screen">
      <div className="mx-auto flex max-w-[1360px] flex-col items-center gap-12 px-4 py-10 sm:px-6 sm:py-14 lg:min-h-screen lg:flex-row lg:items-center lg:gap-16 lg:py-0">
        {/* Left – Mockup */}
        <AnimateIn from="left" delay={100} className="order-2 w-full lg:order-1 lg:w-[55%] lg:flex-none">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-200">
            <SafeImage
              src={MULTI_WHATSAPP_IMAGE}
              alt="Tela de conexões do Sagazchat com WhatsApp, WhatsApp Oficial e Instagram"
            />
          </div>
        </AnimateIn>

        {/* Right – Copy */}
        <AnimateIn from="right" delay={200} className="order-1 w-full lg:order-2 lg:flex-1">
          <div className="flex flex-col gap-7 text-center lg:text-left">
            <div className="space-y-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary font-[family-name:var(--font-sans)]">
                WhatsApp e Instagram
              </p>

              <h2 className="mx-auto max-w-[560px] text-balance font-[family-name:var(--font-sans)] text-[2rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-slate-950 sm:text-[2.5rem] lg:mx-0 lg:text-[2.5rem]">
                WhatsApp e Instagram no mesmo{' '}
                <span className="font-extrabold text-primary">atendimento.</span>
              </h2>

              <p className="mx-auto max-w-xl text-pretty text-[15px] leading-[1.6] text-slate-600 lg:mx-0">
                Centralize os dois. O cliente muda de canal, mas o contexto continua ali.
              </p>
            </div>

            <ul className="flex w-full flex-col gap-4 pt-2 text-left">
              {CHANNELS.map((ch, index) => (
                <li key={ch} className={`flex items-center justify-center gap-3 lg:justify-start ${index > 1 ? 'max-sm:hidden' : ''}`}>
                  <span className="h-2 w-2 flex-shrink-0 rounded-sm bg-primary" />
                  <span className="text-[15px] text-slate-900">{ch}</span>
                </li>
              ))}
            </ul>

            <a
              href="#pricing"
              className={`${ctaPrimary} ${ctaDesktopInline}`}
            >
              Centralizar minha operação
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </AnimateIn>

        <div className="order-3 hidden w-full sm:block lg:hidden">
          <a
            href="#pricing"
            className={`${ctaPrimary} ${ctaMobileFull}`}
          >
            Centralizar minha operação
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
