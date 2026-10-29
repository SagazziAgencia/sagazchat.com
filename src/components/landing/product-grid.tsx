'use client';

import Image from 'next/image';
import {
  ArrowRight,
  Bot,
  GitBranch,
  Instagram,
  Kanban,
  MessagesSquare,
  Repeat2,
  Send,
} from 'lucide-react';
import {
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type ComponentType,
} from 'react';
import { AnimateIn } from '@/components/ui/animate-in';
import { ScrollStory } from '@/components/ui/scroll-story';
import { VENDER_TAB_EVENT, type VenderTab } from '@/components/landing/reactivation-section';

type MockupKey = 'Fluxos';

type MockupConfig = {
  Component: ComponentType | null;
  /** largura nativa (px) que o mockup foi desenhado pra ocupar */
  nativeWidth: number;
  /** alinhamento horizontal do mockup dentro do slot */
  align?: 'left' | 'center';
  /** altura nativa (px): no mobile o slot encolhe até a altura real do mockup escalado */
  nativeHeight?: number;
};

/*
 * Esta seção virou o "índice" da página: Chat, IA, Kanban, Disparos e Remarketing já têm
 * seção própria mais abaixo (com mockup animado). Aqui sobra só o que NÃO tem seção
 * própria (o Criador de Fluxos) mais atalhos pra cada módulo.
 * Imagem otimizada: public/images/criador-de-fluxos.webp (era PNG de 3,4 MB no i.ibb.co).
 */
function FlowBuilderMockup() {
  return (
    <Image
      src="/images/criador-de-fluxos.webp"
      alt="Criador de fluxos visual do Sagazchat"
      width={1800}
      height={1018}
      sizes="(min-width: 1024px) 50vw, 100vw"
      className="block h-auto w-full select-none"
    />
  );
}

const MOCKUP_MAP: Record<MockupKey, MockupConfig> = {
  Fluxos: { Component: FlowBuilderMockup, nativeWidth: 1800, nativeHeight: 1018, align: 'center' },
};

type IndexItem = {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
  href: string;
  tab?: VenderTab;
};

const INDEX_ITEMS: IndexItem[] = [
  {
    icon: MessagesSquare,
    title: 'Bate-papo ao Vivo',
    description: 'Histórico, etiquetas e transferências para o time atender sem perder contexto.',
    href: '#canais',
  },
  {
    icon: Instagram,
    title: 'Instagram',
    description: 'Comentou no post, recebeu a oferta no direct.',
    href: '#instagram',
  },
  {
    icon: Bot,
    title: 'Agentes IA',
    description: 'Agentes treinados na sua base, com áudio transcrito e contexto da conversa.',
    href: '#ia',
  },
  {
    icon: Send,
    title: 'Disparos em Massa',
    description: 'Campanhas segmentadas com importação de planilha e intervalo anti-bloqueio.',
    href: '#vender-de-novo',
    tab: 'disparos',
  },
  {
    icon: Repeat2,
    title: 'Remarketing',
    description: 'Sequências automáticas para trazer leads frios de volta ao funil.',
    href: '#vender-de-novo',
    tab: 'remarketing',
  },
  {
    icon: Kanban,
    title: 'CRM Kanban',
    description: 'Funil visual com valor por lead, etapas personalizadas e automação.',
    href: '#vender-de-novo',
    tab: 'kanban',
  },
];

function MockupSlot({ mockupKey, large }: { mockupKey: MockupKey; large: boolean }) {
  const { Component, nativeWidth, nativeHeight, align = 'left' } = MOCKUP_MAP[mockupKey];
  const maxHeight = large ? 380 : 320;
  const padding = 24;

  const slotRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.5);
  const slotHeight = nativeHeight
    ? Math.min(maxHeight, Math.round(padding * 2 + scale * nativeHeight))
    : maxHeight;

  useLayoutEffect(() => {
    if (!Component || !slotRef.current) return;
    const el = slotRef.current;

    const update = () => {
      const available = el.clientWidth - padding * 2;
      if (available > 0 && nativeWidth > 0) {
        setScale(available / nativeWidth);
      }
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, [Component, nativeWidth]);

  if (!Component) {
    return (
      <div
        className="mt-4 flex items-center justify-center bg-[#EDF2F7]"
        style={{ height: slotHeight }}
      >
        <span className="text-[12px] text-slate-400">[Mockup {mockupKey}]</span>
      </div>
    );
  }

  return (
    <div
      ref={slotRef}
      className="product-motion-mockup relative mt-4 overflow-hidden bg-[#EDF2F7]"
      style={{ height: slotHeight }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute origin-top-left"
        style={{
          top: padding,
          left: padding,
          width: nativeWidth,
          transform: `scale(${scale})`,
          display: align === 'center' ? 'flex' : 'block',
          justifyContent: align === 'center' ? 'center' : undefined,
        }}
      >
        <Component />
      </div>
    </div>
  );
}

export function ProductGrid() {
  const goTo = (tab?: VenderTab) => {
    if (tab) window.dispatchEvent(new CustomEvent(VENDER_TAB_EVENT, { detail: tab }));
  };

  return (
    <ScrollStory
      as="section"
      id="produto"
      className="product-scroll-story scroll-mt-20 bg-white py-10 sm:py-14 lg:py-[80px]"
    >
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6">
        {/* Header */}
        <div className="mx-auto max-w-[768px] text-center">
          <AnimateIn>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary font-[family-name:var(--font-sans)]">
              Conheça por dentro
            </p>
          </AnimateIn>
          <AnimateIn delay={80}>
            <h2 className="mt-3 font-[family-name:var(--font-sans)] text-3xl sm:text-4xl lg:text-[3rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-slate-950">
              Sua operação comercial{' '}
              <span className="font-extrabold text-primary">em um só painel.</span>
            </h2>
          </AnimateIn>
          <AnimateIn delay={160}>
            <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-slate-600">
              Atendimento, CRM, IA, disparos e remarketing trabalhando juntos.
            </p>
          </AnimateIn>
        </div>

        {/* Criador de Fluxos + índice dos módulos */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-14 sm:grid-cols-5">
          <AnimateIn className="sm:col-span-3">
            <div
              className="product-motion-card flex h-full flex-col overflow-hidden rounded-2xl bg-[#F7F9FC] shadow-[0_1px_4px_rgba(0,0,0,0.04)]"
              style={{ '--motion-index': 0 } as CSSProperties}
            >
              <div className="flex flex-col gap-3 p-6 pb-0 sm:p-7 sm:pb-0">
                <div className="flex items-center gap-2">
                  <GitBranch className="h-[18px] w-[18px] text-primary" />
                  <h3 className="text-[18px] font-bold text-slate-900">Criador de Fluxos</h3>
                </div>
                <p className="max-w-[500px] text-[14px] leading-[1.5] text-slate-600">
                  Menus, condições, IA e integrações em um editor visual fácil de manter.
                </p>
              </div>
              <MockupSlot mockupKey="Fluxos" large />
            </div>
          </AnimateIn>

          <AnimateIn delay={100} className="sm:col-span-2">
            <nav
              aria-label="Módulos do Sagazchat"
              className="product-motion-card flex h-full flex-col justify-center rounded-2xl bg-[#F7F9FC] p-2 shadow-[0_1px_4px_rgba(0,0,0,0.04)]"
              style={{ '--motion-index': 1 } as CSSProperties}
            >
              {INDEX_ITEMS.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.title}
                    href={item.href}
                    onClick={() => goTo(item.tab)}
                    className="group flex min-h-[56px] items-center gap-3 rounded-xl px-4 py-2.5 transition-colors hover:bg-white focus-visible:bg-white"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-primary ring-1 ring-slate-200 transition-colors group-hover:bg-primary/10">
                      <Icon className="h-[18px] w-[18px]" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-[15px] font-bold text-slate-900">{item.title}</span>
                      <span className="hidden text-[12.5px] leading-snug text-slate-600 lg:block">
                        {item.description}
                      </span>
                    </span>
                    <ArrowRight className="h-4 w-4 shrink-0 text-slate-400 transition-all group-hover:translate-x-0.5 group-hover:text-primary" />
                  </a>
                );
              })}
            </nav>
          </AnimateIn>
        </div>
      </div>
    </ScrollStory>
  );
}
