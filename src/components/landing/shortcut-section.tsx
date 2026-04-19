'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, MonitorSmartphone } from 'lucide-react';
import { AnimateIn } from '@/components/ui/animate-in';

/* ╔═══════════════════════════════════════════════════════════╗
   ║  CONFIGURAÇÃO DA IMAGEM                                   ║
   ║  Troque a URL abaixo pela imagem que quiser.              ║
   ║  Aceita URL externa ou caminho local (/images/xxx.png)    ║
   ╚═══════════════════════════════════════════════════════════╝ */

const SHORTCUT_IMAGE = 'https://i.ibb.co/whwkgZ5j/Captura-de-tela-2026-03-18-180806.png';

/* ── Safe image with fallback ──────────────────────────── */

function SafeImage({ src, alt }: { src: string; alt: string }) {
  const [error, setError] = useState(false);
  const isExternal = /^https?:\/\//i.test(src);

  useEffect(() => {
    setError(false);
  }, [src]);

  if (!src || error) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-gradient-to-br from-slate-50 to-slate-100 p-8 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/80 shadow-sm ring-1 ring-emerald-100">
          <MonitorSmartphone className="h-7 w-7 text-primary" />
        </div>
        <p className="text-lg font-bold text-slate-700">Screenshot</p>
        <p className="mt-1 text-sm text-slate-400">
          {isExternal
            ? 'Verifique a URL configurada em shortcut-section.tsx'
            : 'Configure SHORTCUT_IMAGE em shortcut-section.tsx'}
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
      sizes="(min-width: 1024px) 60vw, 95vw"
      className="object-cover object-left-top"
      onError={() => setError(true)}
    />
  );
}

/* ── Main component ────────────────────────────────────── */

export const ShortcutSection = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">

          {/* Left – Text */}
          <AnimateIn from="left" delay={150}>
            <div className="flex w-full max-w-[34rem] flex-col gap-6">
              <div className="flex items-center gap-2.5">
                <span className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary font-[family-name:var(--font-display)]">
                  Atalhos Inteligentes
                </span>
              </div>

              <h3 className="font-[family-name:var(--font-display)] text-3xl font-bold leading-[1.1] tracking-[-0.02em] text-slate-950 sm:text-4xl lg:text-[3rem]">
                Sua equipe não precisa
                <br />
                <span className="italic font-medium text-primary">recomeçar a mesma conversa do zero.</span>
              </h3>

              <p className="max-w-xl text-[15px] leading-relaxed text-slate-600">
                Atalhos inteligentes tiram peso do atendimento repetitivo. Configure uma vez e qualquer pessoa da equipe envia a resposta certa, com o mesmo padrão e sem perder tempo procurando material.
              </p>

              <ul className="space-y-3">
                {[
                  "Envie texto, áudio, vídeo, PDF ou fluxo completo sem sair da conversa.",
                  "Dispare qualificação, proposta ou follow-up no momento exato do atendimento.",
                  "Padronize a operação: novato ou veterano, a experiência do cliente continua consistente."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                      <CheckCircle2 size={12} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="#pricing"
                className="hidden lg:inline-flex w-fit items-center gap-2.5 rounded-xl bg-primary px-7 py-3.5 text-[15px] font-bold text-white shadow-[0_4px_14px_rgba(23,199,90,0.3)] transition-all hover:bg-primary/90 hover:shadow-[0_6px_20px_rgba(23,199,90,0.4)]"
              >
                Ver planos
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </AnimateIn>

          {/* Right – Image */}
          <AnimateIn from="right" delay={230}>
            <div className="relative h-[360px] overflow-hidden rounded-2xl sm:h-[460px] lg:h-[460px]">
              <SafeImage src={SHORTCUT_IMAGE} alt="Atalhos inteligentes do Sagazchat" />
            </div>
          </AnimateIn>

        </div>

        {/* CTA mobile — appears after image */}
        <div className="mt-8 text-center lg:hidden">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2.5 rounded-xl bg-primary px-7 py-3.5 text-[15px] font-bold text-white shadow-[0_4px_14px_rgba(23,199,90,0.3)] transition-all hover:bg-primary/90 hover:shadow-[0_6px_20px_rgba(23,199,90,0.4)]"
          >
            Ver planos
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};
