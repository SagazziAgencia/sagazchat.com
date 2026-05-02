'use client';

import {
  Bot,
  GitBranch,
  Kanban,
  MessagesSquare,
  Repeat2,
  Send,
} from 'lucide-react';
import {
  useLayoutEffect,
  useRef,
  useState,
  type ComponentType,
} from 'react';
import { AnimateIn } from '@/components/ui/animate-in';
import { HeroChatReplica } from '@/components/landing/hero-chat-replica';
import { KanbanMockup } from '@/components/landing/crm-kanban-section';
import { AiChatMockup } from '@/components/landing/ai-chatbot-section';
import { BroadcastMockup } from '@/components/landing/broadcast-section';
import { RemarketingMockup } from '@/components/landing/remarketing-section';

type MockupKey = 'Chat' | 'Fluxos' | 'CRM' | 'IA' | 'Disparos' | 'Remarketing';

type MockupConfig = {
  Component: ComponentType | null;
  /** largura nativa (px) que o mockup foi desenhado pra ocupar */
  nativeWidth: number;
  /** alinhamento horizontal do mockup dentro do slot */
  align?: 'left' | 'center';
};

const MOCKUP_MAP: Record<MockupKey, MockupConfig> = {
  Chat: { Component: HeroChatReplica, nativeWidth: 1100 },
  Fluxos: { Component: null, nativeWidth: 0 },
  CRM: { Component: KanbanMockup, nativeWidth: 1280 },
  IA: { Component: AiChatMockup, nativeWidth: 720 },
  Disparos: { Component: BroadcastMockup, nativeWidth: 820, align: 'center' },
  Remarketing: { Component: RemarketingMockup, nativeWidth: 640 },
};

const BENTO_ROWS = [
  {
    modules: [
      {
        icon: MessagesSquare,
        title: 'Bate-papo ao Vivo',
        description:
          'Histórico, etiquetas e transferências para o time atender sem perder contexto.',
        mockup: 'Chat' as MockupKey,
        large: true,
      },
      {
        icon: GitBranch,
        title: 'Criador de Fluxos',
        description:
          'Menus, condições, IA e integrações em um editor visual fácil de manter.',
        mockup: 'Fluxos' as MockupKey,
        large: false,
      },
    ],
  },
  {
    modules: [
      {
        icon: Kanban,
        title: 'CRM Kanban',
        description:
          'Funil visual com valor por lead, etapas personalizadas e automação.',
        mockup: 'CRM' as MockupKey,
        large: false,
      },
      {
        icon: Bot,
        title: 'Agentes IA',
        description:
          'Agentes treinados na sua base, com áudio transcrito e contexto da conversa.',
        mockup: 'IA' as MockupKey,
        large: true,
      },
    ],
  },
  {
    modules: [
      {
        icon: Send,
        title: 'Disparos em Massa',
        description:
          'Campanhas segmentadas com importação de planilha e intervalo anti-bloqueio.',
        mockup: 'Disparos' as MockupKey,
        large: true,
      },
      {
        icon: Repeat2,
        title: 'Remarketing',
        description:
          'Sequências automáticas para trazer leads frios de volta ao funil.',
        mockup: 'Remarketing' as MockupKey,
        large: false,
      },
    ],
  },
];

function MockupSlot({ mockupKey, large }: { mockupKey: MockupKey; large: boolean }) {
  const { Component, nativeWidth, align = 'left' } = MOCKUP_MAP[mockupKey];
  const slotHeight = large ? 380 : 320;
  const padding = 24;

  const slotRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.5);

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
      className="relative mt-4 overflow-hidden bg-[#EDF2F7]"
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
  let moduleIndex = 0;

  return (
    <section className="bg-white py-20 lg:py-[80px]">
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6">
        {/* Header */}
        <div className="mx-auto max-w-[768px] text-center">
          <AnimateIn>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary font-[family-name:var(--font-display)]">
              Conheça por dentro
            </p>
          </AnimateIn>
          <AnimateIn delay={80}>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-[3rem] font-bold leading-[1.1] tracking-[-0.02em] text-slate-950">
              Sua operação comercial{' '}
              <span className="italic font-medium text-primary">em um só painel.</span>
            </h2>
          </AnimateIn>
          <AnimateIn delay={160}>
            <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-slate-600">
              Atendimento, CRM, IA, disparos e remarketing trabalhando juntos.
            </p>
          </AnimateIn>
        </div>

        {/* Bento Grid */}
        <div className="mt-16 flex flex-col gap-6">
          {BENTO_ROWS.map((row, rowIdx) => (
            <div
              key={rowIdx}
              className="grid grid-cols-1 gap-6 sm:grid-cols-5"
            >
              {row.modules.map((mod) => {
                const Icon = mod.icon;
                const i = moduleIndex++;
                return (
                  <AnimateIn
                    key={mod.title}
                    delay={i * 80}
                    className={mod.large ? 'sm:col-span-3' : 'sm:col-span-2'}
                  >
                    <div className="flex h-full flex-col overflow-hidden rounded-2xl bg-[#F7F9FC] shadow-[0_1px_4px_rgba(0,0,0,0.04)]">
                      <div className="flex flex-col gap-3 p-7 pb-0">
                        <div className="flex items-center gap-2">
                          <Icon className="h-[18px] w-[18px] text-primary" />
                          <h3 className="text-[18px] font-bold text-slate-900">
                            {mod.title}
                          </h3>
                        </div>
                        <p className="max-w-[500px] text-[14px] leading-[1.5] text-slate-500">
                          {mod.description}
                        </p>
                      </div>
                      <MockupSlot mockupKey={mod.mockup} large={mod.large} />
                    </div>
                  </AnimateIn>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
