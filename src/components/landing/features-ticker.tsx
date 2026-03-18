'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { ArrowRight, MonitorSmartphone } from 'lucide-react';
import { AnimateIn } from '@/components/ui/animate-in';
import { cn } from '@/lib/utils';
import { features } from './features-data';

/* ── Integration logos (kept from original) ────────────── */

const integrations = [
  { name: 'Asaas', src: 'https://i.ibb.co/GQMYLsKQ/348d2c8e-6db8-4acd-a9f9-3605f987e5a2.png' },
  { name: 'Kiwify', src: 'https://i.ibb.co/vCCLLmnq/logo-kiwify.png' },
  { name: 'Ticto', src: 'https://i.ibb.co/H0Vf0K9/ticto.png' },
  { name: 'Google Sheets', src: 'https://i.ibb.co/Wpf06JDb/google-sheets-full-logo-1-2.png' },
  { name: 'Hotmart', src: 'https://i.ibb.co/1JTj3ZpR/Logo-hotmart.png' },
  { name: 'n8n', src: 'https://i.ibb.co/9ksTbGtd/N8n-logo-new-svg.png' },
  { name: 'HubSpot', src: 'https://i.ibb.co/N61xCB5C/Hub-Spot-Logo-svg.png' },
  { name: 'Meta', src: 'https://i.ibb.co/ZRxZm8cV/meta.png' },
  { name: 'Pipedrive', src: 'https://cdn.worldvectorlogo.com/logos/pipedrive.svg' },
  { name: 'Make', src: 'https://i.ibb.co/spZt99Qg/make-logo-freelogovectors-net.png' },
  { name: 'Perfect Pay', src: 'https://i.ibb.co/HfL82xyq/payt.png' },
  { name: 'Eduzz', src: 'https://i.ibb.co/W4wcQjhz/eduzz-logo-4.png' },
  { name: 'Kirvano', src: 'https://i.ibb.co/NdhbQh33/Logo-Kirvano-png-name-20230811-28731-1bw3q5f.png' },
  { name: 'Cakto', src: 'https://i.ibb.co/TB75t8Fz/Logo-png-name-20230112-29660-e039kf.png' },
  { name: 'OpenAI', src: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg' },
  { name: 'Lastlink', src: 'https://i.ibb.co/twg0vzNx/IE3ht6-SQf2b-ZBWVc-Gi-PA-gz5ryqqcw78ieafxfvaf.png' },
  { name: 'Agendor', src: 'https://i.ibb.co/8LjZNGSg/Agendor-logo-500x240-max-500x240.png' },
  { name: 'Pipefy', src: 'https://i.ibb.co/whbJnKVP/Pipefy-logo-black.png' },
  { name: 'Loqzz', src: 'https://i.ibb.co/nNfp9Kmt/logzz.png' },
];

/* ── Safe image with fallback ──────────────────────────── */

function SafeImage({
  src,
  alt,
  className,
  sizes,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
}) {
  const [error, setError] = useState(false);
  const isExternalImageUrl = /^https?:\/\//i.test(src);

  useEffect(() => {
    setError(false);
  }, [src]);

  if (error) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-gradient-to-br from-slate-50 to-slate-100 p-8 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/80 shadow-sm ring-1 ring-emerald-100">
          <MonitorSmartphone className="h-7 w-7 text-primary" />
        </div>
        <div>
          <p className="text-lg font-bold text-slate-700">Screenshot</p>
          <p className="mt-1 text-sm text-slate-400">
            {isExternalImageUrl
              ? 'Verifique a URL configurada em features-data.ts'
              : `Adicione a imagem em /public${src}`}
          </p>
        </div>
      </div>
    );
  }

  if (isExternalImageUrl) {
    return (
      <img
        src={src}
        alt={alt}
        className={cn('h-full w-full object-cover object-left-top', className)}
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
      sizes={sizes ?? '(min-width: 1024px) 60vw, 95vw'}
      className={cn('object-cover object-left-top', className)}
      onError={() => setError(true)}
    />
  );
}

/* ── Integrations marquee (between Hero and Showcase) ── */

export function IntegrationsTicker() {
  return (
    <section className="relative z-20 overflow-hidden border-y border-slate-100 bg-gradient-to-b from-slate-50/80 to-white py-8 sm:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-5">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
          +19 integrações nativas com suas ferramentas favoritas
        </p>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-20 bg-gradient-to-r from-slate-50/80 via-slate-50/60 to-transparent sm:w-32" />
        <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-20 bg-gradient-to-l from-white via-white/60 to-transparent sm:w-32" />

        <div className="flex w-max animate-marquee">
          {[...integrations, ...integrations].map((item, i) => (
            <div
              key={`${item.name}-${i}`}
              className="mx-6 flex shrink-0 items-center justify-center sm:mx-8"
            >
              <div className="relative h-9 w-24 grayscale opacity-40 transition-all duration-300 hover:opacity-100 hover:grayscale-0 sm:h-10 sm:w-28">
                <Image
                  src={item.src}
                  alt={item.name}
                  fill
                  quality={100}
                  sizes="112px"
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Feature Showcase component ────────────────────────── */

export function FeaturesTicker() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      {/* ── Header ── */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <AnimateIn>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5">
              <MonitorSmartphone className="h-4 w-4 text-primary" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
                Conheça por dentro
              </span>
            </div>
          </AnimateIn>

          <AnimateIn delay={100}>
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl lg:text-[3rem]">
              Veja como a plataforma{' '}
              <span className="text-primary">funciona.</span>
            </h2>
          </AnimateIn>

          <AnimateIn delay={200}>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Explore cada funcionalidade e descubra como o Sagazchat pode
              transformar o atendimento da sua empresa.
            </p>
          </AnimateIn>
        </div>
      </div>

      {/* ── Feature Showcase: stacked rows ── */}
      <div className="mx-auto mt-14 max-w-[90rem] px-4 sm:mt-16 sm:px-6 lg:px-8">
        <div className="space-y-12 lg:space-y-16">
          {features.map((feature, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={feature.label}
                className={cn(
                  'grid grid-cols-1 items-center gap-8 py-2 lg:gap-16',
                  isReversed
                    ? 'lg:grid-cols-[minmax(0,1.32fr)_minmax(280px,0.68fr)] xl:grid-cols-[minmax(0,1.36fr)_minmax(300px,0.64fr)]'
                    : 'lg:grid-cols-[minmax(280px,0.68fr)_minmax(0,1.32fr)] xl:grid-cols-[minmax(300px,0.64fr)_minmax(0,1.36fr)]'
                )}
              >
                <AnimateIn
                  className={cn(
                    isReversed
                      ? 'lg:order-2 lg:pr-8 xl:pr-12'
                      : 'lg:order-1 lg:pl-8 xl:pl-12'
                  )}
                  from={isReversed ? 'right' : 'left'}
                  delay={150 + index * 80}
                >
                  <div
                    className={cn(
                      'flex w-full max-w-[34rem] flex-col gap-6',
                      isReversed ? 'lg:ml-auto' : ''
                    )}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="h-2 w-2 rounded-full bg-primary" />
                      <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
                        {feature.label}
                      </span>
                    </div>

                    <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:text-3xl">
                      {feature.title}
                    </h3>

                    <p className="max-w-xl text-base leading-relaxed text-slate-600">
                      {feature.description}
                    </p>

                    <a
                      href="#pricing"
                      className="inline-flex w-fit items-center gap-2.5 rounded-xl bg-primary px-7 py-3.5 text-[15px] font-bold text-white shadow-[0_4px_14px_rgba(23,199,90,0.3)] transition-all hover:bg-primary/90 hover:shadow-[0_6px_20px_rgba(23,199,90,0.4)]"
                    >
                      Saiba mais
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </AnimateIn>

                <AnimateIn
                  className={isReversed ? 'lg:order-1' : 'lg:order-2'}
                  from={isReversed ? 'left' : 'right'}
                  delay={230 + index * 80}
                >
                  <div className="relative h-[360px] overflow-hidden rounded-2xl sm:h-[460px] lg:h-[580px] xl:h-[620px]">
                    <SafeImage src={feature.imageUrl} alt={feature.label} />
                  </div>
                </AnimateIn>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
