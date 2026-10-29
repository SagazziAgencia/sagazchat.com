'use client';

import { useCallback, useEffect, useRef, useState, type ComponentType } from 'react';
import { ArrowRight, Check, Kanban, Repeat2, Send } from 'lucide-react';
import { AnimateIn } from '@/components/ui/animate-in';
import { ScrollStory } from '@/components/ui/scroll-story';
import { cn } from '@/lib/utils';
import { BroadcastMockup } from './broadcast-section';
import { KanbanMockup } from './crm-kanban-section';
import { RemarketingMockup } from './remarketing-section';
import { ctaMobileFull, ctaPrimary } from './cta-styles';

/*
 * "Vender de novo": funde Disparos + Remarketing + CRM Kanban numa seção só.
 * Os três mockups animados e o texto de cada um são os mesmos das seções antigas
 * (broadcast-section, remarketing-section, crm-kanban-section) — só mudou o empacotamento:
 * abas em vez de 3 seções empilhadas (~3.700px a menos no mobile).
 * O índice de "Conheça por dentro" abre a aba certa pelo evento VENDER_TAB_EVENT.
 */

export type VenderTab = 'disparos' | 'remarketing' | 'kanban';
export const VENDER_TAB_EVENT = 'sagaz:vender-tab';

type TabConfig = {
  id: VenderTab;
  label: string;
  icon: ComponentType<{ className?: string }>;
  kicker: string;
  title: string;
  highlight: string;
  description: string;
  bullets: string[];
  Mockup: ComponentType;
};

const TABS: TabConfig[] = [
  {
    id: 'disparos',
    label: 'Disparos em massa',
    icon: Send,
    kicker: 'Disparos em massa',
    title: 'Dispare campanhas',
    highlight: 'sem bagunçar a operação.',
    description:
      'Segmente a base, agende o envio e controle o ritmo para reativar contatos com segurança.',
    bullets: [
      'Segmentação por etiqueta ou lista',
      'Agendamento com data e hora',
      'Intervalos para proteger o número',
      'Importação de CSV e XLSX',
    ],
    Mockup: BroadcastMockup,
  },
  {
    id: 'remarketing',
    label: 'Remarketing',
    icon: Repeat2,
    kicker: 'Remarketing',
    title: 'Lead frio ainda pode voltar.',
    highlight: 'No timing certo.',
    description:
      'Configure a sequência uma vez. O Sagazchat cobra, espera e reativa sem depender da memória do time.',
    bullets: [
      'Sequência automática após a última ação.',
      'Dias e horários definidos por regra.',
      'O “depois eu vejo” volta para o funil.',
    ],
    Mockup: RemarketingMockup,
  },
  {
    id: 'kanban',
    label: 'CRM Kanban',
    icon: Kanban,
    kicker: 'CRM Kanban',
    title: 'Veja quais conversas',
    highlight: 'podem virar receita.',
    description:
      'Cada lead entra com valor. O time enxerga prioridade, etapa e potencial de venda.',
    bullets: [
      'Valor somado por etapa',
      'Prioridade clara para o time',
      'Histórico dentro do card',
      'Leads movidos sem planilha',
    ],
    Mockup: KanbanMockup,
  },
];

const AUTO_ADVANCE_MS = 9000;

export function ReactivationSection() {
  const [active, setActive] = useState<VenderTab>('disparos');
  const [auto, setAuto] = useState(true);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const select = useCallback((id: VenderTab, manual = true) => {
    setActive(id);
    if (manual) setAuto(false);
  }, []);

  // Atalhos do índice "Conheça por dentro".
  useEffect(() => {
    const onTab = (event: Event) => {
      const id = (event as CustomEvent<VenderTab>).detail;
      if (TABS.some((t) => t.id === id)) select(id);
    };
    window.addEventListener(VENDER_TAB_EVENT, onTab);
    return () => window.removeEventListener(VENDER_TAB_EVENT, onTab);
  }, [select]);

  // Só avança sozinho enquanto a seção está na tela e o visitante não escolheu uma aba.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold: 0.35,
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!auto || !inView) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;
    const timer = setInterval(() => {
      setActive((current) => TABS[(TABS.findIndex((t) => t.id === current) + 1) % TABS.length].id);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [auto, inView]);

  const tab = TABS.find((t) => t.id === active) ?? TABS[0];
  const Mockup = tab.Mockup;

  return (
    <ScrollStory
      as="section"
      id="vender-de-novo"
      className="kanban-scroll-story scroll-mt-20 bg-slate-50 py-10 sm:py-14 lg:py-24"
    >
      <div ref={sectionRef} className="mx-auto max-w-[1360px] px-4 sm:px-6">
        <AnimateIn>
          <div className="mx-auto max-w-[720px] text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary font-[family-name:var(--font-sans)]">
              Vender de novo
            </p>
            <h2 className="mt-3 text-balance font-[family-name:var(--font-sans)] text-3xl font-extrabold leading-[1.1] tracking-[-0.02em] text-slate-950 sm:text-4xl lg:text-[3rem]">
              Conversa parada é{' '}
              <span className="font-extrabold text-primary">venda esperando.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-[15px] leading-relaxed text-slate-600">
              Dispare pra sua base, traga o lead frio de volta e veja quanto cada conversa vale.
            </p>
          </div>
        </AnimateIn>

        {/* Abas */}
        <AnimateIn delay={120}>
          <div
            role="tablist"
            aria-label="Como vender de novo"
            className="no-scrollbar mx-auto mt-8 flex w-full max-w-[640px] gap-1 overflow-x-auto rounded-2xl bg-white p-1.5 shadow-[0_1px_4px_rgba(0,0,0,0.06)] ring-1 ring-slate-200"
          >
            {TABS.map((t) => {
              const Icon = t.icon;
              const selected = t.id === active;
              return (
                <button
                  key={t.id}
                  type="button"
                  role="tab"
                  id={`vender-tab-${t.id}`}
                  aria-selected={selected}
                  aria-controls="vender-panel"
                  onClick={() => select(t.id)}
                  className={cn(
                    'flex min-h-[44px] flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-xl px-3 text-[13px] font-semibold transition-all sm:px-4 sm:text-sm',
                    selected
                      ? 'bg-primary text-white shadow-sm'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  )}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  <span className="hidden min-[420px]:inline">{t.label}</span>
                  <span className="min-[420px]:hidden">{t.label.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>
        </AnimateIn>

        {/* Painel da aba ativa */}
        <div
          id="vender-panel"
          role="tabpanel"
          aria-labelledby={`vender-tab-${tab.id}`}
          key={tab.id}
          className="animate-fadeIn mt-10 grid grid-cols-1 items-center gap-10 lg:mt-14 lg:min-h-[600px] lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-14"
          onMouseEnter={() => setAuto(false)}
        >
          <div className="flex flex-col gap-5 text-center lg:text-left">
            <h3 className="mx-auto max-w-[520px] text-balance font-[family-name:var(--font-sans)] text-[1.75rem] font-extrabold leading-[1.12] tracking-[-0.02em] text-slate-950 sm:text-[2.1rem] lg:mx-0">
              {tab.title} <span className="font-extrabold text-primary">{tab.highlight}</span>
            </h3>
            <p className="mx-auto max-w-xl text-pretty text-[15px] leading-[1.6] text-slate-600 lg:mx-0">
              {tab.description}
            </p>
            <ul className="flex w-full flex-col gap-3 text-left">
              {tab.bullets.map((bullet) => (
                <li key={bullet} className="flex items-center justify-center gap-2.5 lg:justify-start">
                  <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary">
                    <Check className="h-3 w-3 text-white" strokeWidth={3.5} />
                  </span>
                  <span className="text-[15px] text-slate-700">{bullet}</span>
                </li>
              ))}
            </ul>
            <a href="#pricing" className={`${ctaPrimary} ${ctaMobileFull} mt-1 max-lg:hidden lg:w-fit`}>
              Ver planos
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mx-auto flex w-full min-w-0 max-w-[calc(100vw-32px)] justify-center lg:max-w-none">
            <div className={cn('w-full min-w-0', tab.id === 'disparos' && 'flex justify-center')}>
              <Mockup />
            </div>
          </div>
        </div>
      </div>
    </ScrollStory>
  );
}
