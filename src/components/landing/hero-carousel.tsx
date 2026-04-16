'use client';

import type { ReactNode } from 'react';
import { useState, useEffect, useCallback, useRef } from 'react';
import {
  MessageCircle,
  Instagram,
  ChevronDown,
  type LucideIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { ChatPlatformGridShowcase } from './chat-platform-grid-showcase';

/* ------------------------------------------------------------------ */
/*  Feature config                                                     */
/* ------------------------------------------------------------------ */

interface Feature {
  id: string;
  label: string;
  icon: LucideIcon;
  url: string;
  image: string | null;
  isAnimation?: boolean;
  platformIndex?: number;
}

const FEATURES: Feature[] = [
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    icon: MessageCircle,
    url: 'app.sagazchatbot.ai/whatsapp',
    image: null,
    isAnimation: true,
    platformIndex: 0,
  },
  {
    id: 'instagram',
    label: 'Instagram',
    icon: Instagram,
    url: 'app.sagazchatbot.ai/instagram',
    image: null,
    isAnimation: true,
    platformIndex: 1,
  },
];

/* ------------------------------------------------------------------ */
/*  Easing                                                             */
/* ------------------------------------------------------------------ */

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

/* ------------------------------------------------------------------ */
/*  Browser frame chrome                                               */
/* ------------------------------------------------------------------ */

function BrowserFrame({
  url,
  children,
  className,
}: {
  url: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('overflow-hidden rounded-xl bg-slate-900', className)}>
      <div className="flex items-center gap-2 px-3.5 py-2">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#EF4444]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#F59E0B]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#22C55E]" />
        </div>
        <div className="flex-1 rounded bg-slate-800 px-3 py-0.5">
          <span className="font-mono text-[10px] text-slate-500">{url}</span>
        </div>
      </div>
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Screen content                                                     */
/* ------------------------------------------------------------------ */

function ScreenContent({ feature }: { feature: Feature }) {
  const Icon = feature.icon;

  if (feature.image) {
    return (
      <div className="relative aspect-video">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={feature.image}
          alt={`${feature.label} — Sagazchat`}
          className="h-full w-full object-cover object-top"
        />
      </div>
    );
  }

  return (
    <div className="flex aspect-video flex-col items-center justify-center gap-3 bg-slate-50">
      <Icon className="h-12 w-12 text-slate-200" />
      <span className="text-xs font-medium text-slate-300">
        Screenshot: {feature.label}
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  DOM-direct slide style updates (60 fps, no React re-renders)       */
/* ------------------------------------------------------------------ */

function applySlideStyles(
  elements: (HTMLDivElement | null)[],
  active: number,
  progress: number,
) {
  const len = elements.length;

  for (let i = 0; i < len; i++) {
    const el = elements[i];
    if (!el) continue;

    if (i < active) {
      el.style.opacity = '0';
      el.style.transform = 'scale(1.3)';
      el.style.pointerEvents = 'none';
    } else if (i === active) {
      const scale = 1 + progress * 0.3;
      el.style.transform = `scale(${scale})`;
      el.style.opacity = String(Math.max(0, 1 - progress * 1.5));
      el.style.zIndex = String(len - i);
      el.style.pointerEvents = progress < 0.5 ? 'auto' : 'none';
    } else if (i === active + 1) {
      const ep = easeOutCubic(progress);
      const dir = i % 2 === 0 ? 1 : -1;
      const tx = dir * (1 - ep) * 80;
      const sc = 0.65 + ep * 0.35;
      el.style.transform = `translateX(${tx}%) scale(${sc})`;
      el.style.opacity = String(Math.min(1, progress * 2));
      el.style.zIndex = String(len - i);
      el.style.pointerEvents = 'none';
    } else {
      el.style.opacity = '0';
      el.style.transform = `translateX(${i % 2 === 0 ? 80 : -80}%) scale(0.65)`;
      el.style.pointerEvents = 'none';
    }
  }
}

/* ------------------------------------------------------------------ */
/*  Main immersive carousel                                            */
/* ------------------------------------------------------------------ */

export function HeroCarousel({ children }: { children?: ReactNode }) {
  const outerRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const activeRef = useRef(0);
  const tickingRef = useRef(false);

  const [activeSlide, setActiveSlide] = useState(0);

  /* Scroll-driven animation */
  useEffect(() => {
    const outer = outerRef.current;
    if (!outer) return;

    const onScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;

      requestAnimationFrame(() => {
        tickingRef.current = false;

        const rect = outer.getBoundingClientRect();
        const scrolled = -rect.top;
        const maxScroll = outer.offsetHeight - window.innerHeight;

        if (maxScroll <= 0) return;

        const raw = Math.max(0, Math.min(1, scrolled / maxScroll));
        const total = FEATURES.length - 1;
        const floatSlide = raw * total;
        const idx = Math.min(Math.floor(floatSlide), total);
        const prog = idx < total ? floatSlide - idx : 0;

        applySlideStyles(slideRefs.current, idx, prog);

        if (idx !== activeRef.current) {
          activeRef.current = idx;
          setActiveSlide(idx);
        }
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    applySlideStyles(slideRefs.current, 0, 0);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Click-to-scroll for dots / tabs */
  const goTo = useCallback((i: number) => {
    const outer = outerRef.current;
    if (!outer) return;

    const maxScroll = outer.offsetHeight - window.innerHeight;
    const total = FEATURES.length - 1;
    const targetScroll = total > 0 ? (i / total) * maxScroll : 0;
    const outerTop = outer.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({ top: outerTop + targetScroll, behavior: 'smooth' });
  }, []);

  return (
    <div
      ref={outerRef}
      id="hero"
      style={{ height: `${FEATURES.length * 100}vh` }}
      className="relative scroll-mt-24 border-b border-slate-100 bg-[#FAFBFC]"
    >
      <div className="sticky top-0 flex h-screen items-center px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 pt-16 lg:flex-row lg:items-center lg:gap-12 lg:pt-0">
          {/* Left — Text */}
          {children && (
            <div className="flex-1 text-center lg:text-left">{children}</div>
          )}

          {/* Right — Animation */}
          <div className="flex flex-1 flex-col items-center">
            {/* Slide viewport */}
            <div className="relative aspect-square w-full max-w-[520px] overflow-hidden">
              {FEATURES.map((feature, i) => (
                <div
                  key={feature.id}
                  ref={(el) => {
                    slideRefs.current[i] = el;
                  }}
                  className="absolute inset-0 flex items-center justify-center will-change-[transform,opacity]"
                  style={{ opacity: i === 0 ? 1 : 0 }}
                >
                  {feature.isAnimation ? (
                    <div className="origin-center scale-[0.45] sm:scale-[0.6] lg:scale-[0.85]">
                      <ChatPlatformGridShowcase
                        initialPlatformIndex={feature.platformIndex ?? 0}
                      />
                    </div>
                  ) : (
                    <div className="w-full">
                      <BrowserFrame
                        url={feature.url}
                        className="ring-1 ring-primary/20 shadow-[0_8px_40px_rgba(23,199,90,0.12)]"
                      >
                        <ScreenContent feature={feature} />
                      </BrowserFrame>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Dots */}
            <div className="mt-4 flex justify-center gap-2">
              {FEATURES.map((f, i) => (
                <button
                  key={f.id}
                  onClick={() => goTo(i)}
                  className={cn(
                    'h-2 rounded-full transition-all duration-300',
                    i === activeSlide
                      ? 'w-7 bg-primary'
                      : 'w-2 bg-slate-300 hover:bg-slate-400',
                  )}
                  aria-label={`Slide ${i + 1}: ${f.label}`}
                />
              ))}
            </div>

            {/* Feature tabs */}
            <div className="mt-3 flex flex-wrap justify-center gap-2 sm:gap-4">
              {FEATURES.map((f, i) => {
                const Icon = f.icon;
                return (
                  <button
                    key={f.id}
                    onClick={() => goTo(i)}
                    className={cn(
                      'flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm transition-all duration-300',
                      i === activeSlide
                        ? 'bg-emerald-50 font-semibold text-emerald-700'
                        : 'text-slate-400 hover:text-slate-600',
                    )}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {f.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div
          className={cn(
            'absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 transition-opacity duration-500',
            activeSlide === 0 ? 'opacity-60' : 'opacity-0 pointer-events-none',
          )}
        >
          <span className="text-[11px] font-medium text-slate-400">
            Role para explorar
          </span>
          <ChevronDown className="h-4 w-4 animate-bounce text-slate-400" />
        </div>
      </div>
    </div>
  );
}
