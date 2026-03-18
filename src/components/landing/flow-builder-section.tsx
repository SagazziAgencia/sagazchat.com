'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, MessageSquare, MousePointerClick, Settings } from 'lucide-react';

import { AnimateIn } from '@/components/ui/animate-in';
import { cn } from '@/lib/utils';

const screenshots = [
  {
    label: 'Bate-papo ao Vivo',
    src: '/images/desktop-live-chat.png',
    alt: 'Tela de bate-papo ao vivo do Sagazchat',
    placeholderIcon: MessageSquare,
    placeholderTitle: 'Bate-papo ao Vivo',
    placeholderDesc: 'Adicione aqui a tela do atendimento em tempo real dentro do carrossel.',
  },
  {
    label: 'Criador de Fluxo',
    src: '/images/desktop-flowbuilder.png',
    alt: 'Criador de fluxo visual do Sagazchat',
    placeholderIcon: MousePointerClick,
    placeholderTitle: 'Criador de Fluxo Visual',
    placeholderDesc: 'Arraste e solte blocos para montar seu funil de atendimento.',
  },
  {
    label: 'Painel Principal',
    src: '/images/desktop-hero.png',
    alt: 'Painel principal do Sagazchat',
    placeholderIcon: MessageSquare,
    placeholderTitle: 'Painel de Atendimento',
    placeholderDesc: 'Gerencie conversas, equipes e automacoes em uma so tela.',
  },
  {
    label: 'Visao Geral',
    src: '/images/desktop-full.png',
    alt: 'Visao geral da plataforma Sagazchat',
    placeholderIcon: Settings,
    placeholderTitle: 'Visao Geral da Plataforma',
    placeholderDesc: 'Mostre suas telas reais aqui dentro do frame do notebook.',
  },
] as const;

const macbookFrame = {
  src: '/images/macbook-frame.png',
  alt: 'Mockup realista de um MacBook',
  aspectRatioClass: 'aspect-[1610/980]',
  screen: {
    left: '11.5%',
    right: '11.5%',
    top: '8.8%',
    bottom: '24.2%',
  },
} as const;

function ScreenshotPlaceholder({
  icon: Icon,
  title,
  desc,
}: {
  icon: React.ElementType;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-5 bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.14),_transparent_34%),linear-gradient(180deg,#f8fafc_0%,#eef3f8_100%)] p-8 text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-[1.75rem] bg-white/80 shadow-sm ring-1 ring-emerald-100">
        <Icon size={30} className="text-primary" />
      </div>
      <div>
        <p className="text-2xl font-bold text-slate-800">{title}</p>
        <p className="mx-auto mt-2 max-w-lg text-base leading-relaxed text-slate-500">{desc}</p>
      </div>
      <p className="text-xs font-medium uppercase tracking-[0.14em] text-slate-400">
        Adicione screenshots reais em /public/images/
      </p>
    </div>
  );
}

function SafeImage({
  src,
  alt,
  placeholder,
  className,
}: {
  src: string;
  alt: string;
  placeholder: React.ReactNode;
  className?: string;
}) {
  const [error, setError] = useState(false);

  if (error) {
    return <>{placeholder}</>;
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      quality={100}
      sizes="(min-width: 1536px) 1100px, (min-width: 1024px) 76vw, 94vw"
      className={cn('h-full w-full object-contain object-top', className)}
      onError={() => setError(true)}
    />
  );
}

function FrameImage() {
  const [error, setError] = useState(false);

  if (error) {
    return null;
  }

  return (
    <Image
      src={macbookFrame.src}
      alt={macbookFrame.alt}
      fill
      quality={100}
      sizes="(min-width: 1536px) 1100px, (min-width: 1024px) 76vw, 94vw"
      className="h-full w-full object-contain"
      onError={() => setError(true)}
    />
  );
}

export const FlowBuilderSection = () => {
  const [active, setActive] = useState(0);
  const totalSlides = screenshots.length;
  const previousIndex = (active - 1 + totalSlides) % totalSlides;
  const nextIndex = (active + 1) % totalSlides;

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActive((current) => (current + 1) % totalSlides);
    }, 4500);

    return () => window.clearInterval(interval);
  }, [totalSlides]);

  const goToSlide = (index: number) => {
    setActive((index + totalSlides) % totalSlides);
  };

  return (
    <section id="features" className="overflow-hidden bg-white py-24 text-slate-900 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <AnimateIn delay={0}>
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
            Construtor Visual
          </p>
        </AnimateIn>

        <AnimateIn delay={120}>
          <h2 className="mt-6 font-[family-name:var(--font-display)] text-3xl font-bold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl lg:text-[3rem]">
            Crie fluxos de atendimento{' '}
            <span className="text-primary">sem escrever código.</span>
          </h2>
        </AnimateIn>

        <AnimateIn delay={220}>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Interface de arrastar e soltar com mais de 20 blocos, integrações e automações para montar funis completos dentro do SagazChat.
          </p>
        </AnimateIn>
      </div>

      <AnimateIn delay={200} duration={700}>
        <div className="mx-auto mt-14 max-w-[74rem] px-4 sm:mt-16 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="pointer-events-none absolute left-[-6%] top-1/2 z-0 hidden w-[24%] -translate-y-1/2 overflow-hidden rounded-[1.75rem] border border-slate-200/60 bg-white/60 opacity-95 shadow-[0_22px_60px_-40px_rgba(15,23,42,0.35)] blur-[3px] lg:block">
              <div className="absolute inset-0 z-10 bg-gradient-to-r from-white via-white/70 to-white/15" />
              <SafeImage
                src={screenshots[previousIndex].src}
                alt={screenshots[previousIndex].alt}
                className="scale-[1.04] object-cover"
                placeholder={
                  <ScreenshotPlaceholder
                    icon={screenshots[previousIndex].placeholderIcon}
                    title={screenshots[previousIndex].placeholderTitle}
                    desc={screenshots[previousIndex].placeholderDesc}
                  />
                }
              />
            </div>

            <div className="pointer-events-none absolute right-[-6%] top-1/2 z-0 hidden w-[24%] -translate-y-1/2 overflow-hidden rounded-[1.75rem] border border-slate-200/60 bg-white/60 opacity-95 shadow-[0_22px_60px_-40px_rgba(15,23,42,0.35)] blur-[3px] lg:block">
              <div className="absolute inset-0 z-10 bg-gradient-to-l from-white via-white/70 to-white/15" />
              <SafeImage
                src={screenshots[nextIndex].src}
                alt={screenshots[nextIndex].alt}
                className="scale-[1.04] object-cover"
                placeholder={
                  <ScreenshotPlaceholder
                    icon={screenshots[nextIndex].placeholderIcon}
                    title={screenshots[nextIndex].placeholderTitle}
                    desc={screenshots[nextIndex].placeholderDesc}
                  />
                }
              />
            </div>

            <button
              type="button"
              onClick={() => goToSlide(active - 1)}
              aria-label="Imagem anterior"
              className="absolute left-0 top-[42%] z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/96 text-slate-700 shadow-lg backdrop-blur transition hover:bg-white lg:flex"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={() => goToSlide(active + 1)}
              aria-label="Próxima imagem"
              className="absolute right-0 top-[42%] z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/96 text-slate-700 shadow-lg backdrop-blur transition hover:bg-white lg:flex"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <div className={cn('relative mx-auto w-full', macbookFrame.aspectRatioClass)}>
              <div
                className="absolute z-0 overflow-hidden rounded-[0.8rem] bg-white shadow-[0_24px_60px_-42px_rgba(15,23,42,0.4)]"
                style={{
                  left: macbookFrame.screen.left,
                  right: macbookFrame.screen.right,
                  top: macbookFrame.screen.top,
                  bottom: macbookFrame.screen.bottom,
                }}
              >
                {screenshots.map((screenshot, index) => (
                  <div
                    key={screenshot.label}
                    className={cn(
                      'absolute inset-0 transition-opacity duration-500',
                      active === index ? 'opacity-100' : 'pointer-events-none opacity-0'
                    )}
                  >
                    <SafeImage
                      src={screenshot.src}
                      alt={screenshot.alt}
                      placeholder={
                        <ScreenshotPlaceholder
                          icon={screenshot.placeholderIcon}
                          title={screenshot.placeholderTitle}
                          desc={screenshot.placeholderDesc}
                        />
                      }
                    />
                  </div>
                ))}
              </div>

              <div className="absolute inset-0 z-10">
                <FrameImage />
              </div>
            </div>

            <div className="mt-6 flex items-center justify-center gap-2">
              {screenshots.map((screenshot, index) => (
                <button
                  key={screenshot.label}
                  type="button"
                  onClick={() => goToSlide(index)}
                  aria-label={`Slide ${index + 1}`}
                  className={cn(
                    'h-2.5 rounded-full transition-all',
                    active === index ? 'w-10 bg-primary' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </AnimateIn>
    </section>
  );
};
