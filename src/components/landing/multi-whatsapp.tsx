'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  MessageCircle,
  Instagram,
  Mail,
  Shield,
  ArrowRight,
  MonitorSmartphone,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { AnimateIn } from '@/components/ui/animate-in';

/* ╔═══════════════════════════════════════════════════════════╗
   ║  CONFIGURAÇÃO DA IMAGEM                                   ║
   ║  Troque a URL abaixo pela imagem que quiser.              ║
   ║  Aceita URL externa ou caminho local (/images/xxx.png)    ║
   ╚═══════════════════════════════════════════════════════════╝ */

const MULTI_WHATSAPP_IMAGE = 'https://i.ibb.co/60Y4RGQc/Group-4.png';

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
      sizes="(min-width: 1024px) 60vw, 95vw"
      className="object-cover object-left-top"
      onError={() => setError(true)}
    />
  );
}

/* ── Main component ────────────────────────────────────── */

export function MultiWhatsapp() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Header ── */}
        <div className="mx-auto max-w-3xl text-center mb-14 sm:mb-16">
          <AnimateIn>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary mb-6">
              Integrações Multicanal
            </p>
          </AnimateIn>

          <AnimateIn delay={100}>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-[3rem] font-bold tracking-tight leading-[1.15] mb-4 text-slate-900">
              Todos os canais.{' '}
              <span className="text-primary">Uma única plataforma.</span>
            </h2>
          </AnimateIn>

          <AnimateIn delay={200}>
            <p className="text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Conecte{' '}
              <span className="font-bold text-gray-800">WhatsApp, WhatsApp Business API, Instagram, e-mail</span>{' '}
              e mais canais em um só lugar. Centralize toda a comunicação da sua equipe e nunca perca uma oportunidade.
            </p>
          </AnimateIn>
        </div>

        {/* ── Content: Image Left + Cards Right ── */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1.32fr)_minmax(280px,0.68fr)] lg:gap-16 xl:grid-cols-[minmax(0,1.36fr)_minmax(300px,0.64fr)]">

          {/* Left – Image */}
          <AnimateIn from="left" delay={150}>
            <div className="relative h-[360px] overflow-hidden rounded-2xl sm:h-[460px] lg:h-[580px] xl:h-[620px]">
              <SafeImage
                src={MULTI_WHATSAPP_IMAGE}
                alt="Múltiplos WhatsApps em uma única tela"
              />
            </div>
          </AnimateIn>

          {/* Right – Benefits + CTA */}
          <AnimateIn from="right" delay={250}>
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-2.5">
                <span className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
                  Canais conectados
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <BenefitCard
                  icon={<MessageCircle />}
                  title="WhatsApp & API Oficial"
                  iconBg="bg-primary/10"
                  iconColor="text-primary"
                >
                  Conecte múltiplos números WhatsApp e a API oficial do WhatsApp
                  Business na mesma plataforma.
                </BenefitCard>
                <BenefitCard
                  icon={<Instagram />}
                  title="Instagram Direct"
                  iconBg="bg-pink-50"
                  iconColor="text-pink-600"
                >
                  Responda mensagens do Instagram Direct sem sair da plataforma.
                  Centralize o atendimento das suas redes sociais.
                </BenefitCard>
                <BenefitCard
                  icon={<Mail />}
                  title="E-mail Integrado"
                  iconBg="bg-blue-50"
                  iconColor="text-blue-600"
                >
                  Gerencie e-mails junto com seus outros canais. Uma caixa de
                  entrada unificada para toda a equipe.
                </BenefitCard>
                <BenefitCard
                  icon={<Shield />}
                  title="Controle Total"
                  iconBg="bg-lime-100"
                  iconColor="text-lime-700"
                >
                  Monitore todos os canais em tempo real. Audite conversas,
                  acompanhe métricas e garanta qualidade no atendimento.
                </BenefitCard>
              </div>

              <a
                href="#pricing"
                className="inline-flex w-fit items-center gap-2.5 rounded-xl bg-primary px-7 py-3.5 text-[15px] font-bold text-white shadow-[0_4px_14px_rgba(23,199,90,0.3)] transition-all hover:bg-primary/90 hover:shadow-[0_6px_20px_rgba(23,199,90,0.4)]"
              >
                Ver planos
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

/* ── Benefit Card ──────────────────────────────────────── */

const BenefitCard = ({
  icon,
  title,
  children,
  iconBg,
  iconColor,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  iconBg: string;
  iconColor: string;
}) => (
  <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition-all hover:border-primary/30 hover:shadow-md h-full">
    <div
      className={cn(
        'mb-3 flex h-10 w-10 items-center justify-center rounded-lg',
        iconBg,
        iconColor
      )}
    >
      {icon}
    </div>
    <h4 className="mb-1 text-base font-bold text-gray-900">{title}</h4>
    <p className="text-xs leading-relaxed text-gray-500">{children}</p>
  </div>
);
