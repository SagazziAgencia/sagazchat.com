'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { ArrowRight, MonitorSmartphone } from 'lucide-react';
import { AnimateIn } from '@/components/ui/animate-in';

/* ╔═══════════════════════════════════════════════════════════╗
   ║  CONFIGURAÇÃO DA IMAGEM                                   ║
   ║  Troque a URL abaixo pela imagem que quiser.              ║
   ║  Aceita URL externa ou caminho local (/images/xxx.png)    ║
   ╚═══════════════════════════════════════════════════════════╝ */

const MULTI_WHATSAPP_IMAGE = 'https://i.ibb.co/60Y4RGQc/Group-4.png';

const CHANNELS = [
  'WhatsApp — até 10 números simultâneos',
  'Instagram — DMs e comentários automáticos',
  'Histórico unificado por contato',
  'Transferência entre atendentes sem perda',
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
      quality={100}
      sizes="(min-width: 1024px) 50vw, 95vw"
      className="object-cover object-left-top"
      onError={() => setError(true)}
    />
  );
}

/* ── Main component ────────────────────────────────────── */

export function MultiWhatsapp() {
  return (
    <section className="bg-[#F8FAFC] lg:min-h-screen">
      <div className="mx-auto flex min-h-screen max-w-[1360px] flex-col items-center gap-12 px-4 py-20 sm:px-6 lg:flex-row lg:items-center lg:gap-16 lg:py-0">
        {/* Left – Mockup */}
        <AnimateIn from="left" delay={100} className="w-full lg:w-[55%] lg:flex-none">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-200">
            <SafeImage
              src={MULTI_WHATSAPP_IMAGE}
              alt="Painel multicanal do Sagazchat"
            />
          </div>
        </AnimateIn>

        {/* Right – Copy */}
        <AnimateIn from="right" delay={200} className="w-full lg:flex-1">
          <div className="flex flex-col gap-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary font-[family-name:var(--font-display)]">
              Integrações Multicanal
            </p>

            <h2 className="max-w-[520px] font-[family-name:var(--font-display)] text-[2rem] sm:text-[2.5rem] lg:text-[2.5rem] font-bold leading-[1.1] tracking-[-0.02em] text-slate-950">
              Pare de perder contexto{' '}
              <span className="italic font-medium text-primary">entre abas, números e atendentes.</span>
            </h2>

            <p className="max-w-xl text-[15px] leading-relaxed text-slate-600">
              Centralize WhatsApp, Instagram e e-mail em um painel único. Cada conversa tem histórico completo, independente do canal.
            </p>

            <ul className="flex flex-col gap-4 pt-2">
              {CHANNELS.map((ch) => (
                <li key={ch} className="flex items-center gap-3">
                  <span className="h-2 w-2 flex-shrink-0 rounded-sm bg-primary" />
                  <span className="text-[15px] text-slate-900">{ch}</span>
                </li>
              ))}
            </ul>

            <a
              href="#pricing"
              className="mt-4 inline-flex w-fit items-center gap-2.5 rounded-[10px] bg-primary px-8 py-4 text-[15px] font-semibold text-white shadow-[0_4px_14px_rgba(23,199,90,0.25)] transition-all hover:bg-primary/90 hover:shadow-[0_6px_20px_rgba(23,199,90,0.35)]"
            >
              Centralizar minha operação
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
