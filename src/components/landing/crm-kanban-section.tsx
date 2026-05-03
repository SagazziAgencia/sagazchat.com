'use client';

import {
  ArrowRight,
  Check,
  ChevronLeft,
  Plus,
  RotateCw,
  Search,
} from 'lucide-react';
import { AnimateIn } from '@/components/ui/animate-in';
import { ctaMobileFull, ctaPrimary } from './cta-styles';

const BULLETS = [
  'Valor somado por etapa',
  'Prioridade clara para o time',
  'Histórico dentro do card',
  'Leads movidos sem planilha',
];

type CardTag = { label: string; bg: string; text: string; dot: string };

type KanbanColumnType = {
  title: string;
  total: string;
  count: number;
  barColor: string;
  card?: {
    tags: CardTag[];
    name: string;
    value: string;
  };
};

const TAG_QUENTE: CardTag = { label: 'Quente', bg: 'bg-rose-50', text: 'text-rose-600', dot: 'bg-rose-500' };
const TAG_REPOSTA: CardTag = { label: 'Resposta', bg: 'bg-slate-900', text: 'text-white', dot: 'bg-white' };
const TAG_CLIENTE: CardTag = { label: 'Cliente', bg: 'bg-emerald-50', text: 'text-emerald-700', dot: 'bg-emerald-500' };

const COLUMNS: KanbanColumnType[] = [
  { title: 'Prospecção nova', total: 'R$ 0,00', count: 0, barColor: '#3B82F6' },
  {
    title: 'Prospecção Interna',
    total: 'R$ 50,00',
    count: 1,
    barColor: '#3B82F6',
    card: { tags: [TAG_QUENTE, TAG_REPOSTA], name: 'Silvia rase do renan.f...', value: 'R$ 50,00' },
  },
  { title: 'Em orçamento', total: 'R$ 0,00', count: 0, barColor: '#3B82F6' },
  {
    title: 'Fechado',
    total: 'R$ 96,99',
    count: 1,
    barColor: '#3B82F6',
    card: { tags: [TAG_QUENTE, TAG_CLIENTE], name: 'Josiane Krachinski pr...', value: 'R$ 96,99' },
  },
  { title: 'Perdido', total: 'R$ 0,00', count: 0, barColor: '#3B82F6' },
];

/* ─── Empty state illustration ─── */
function EmptyDocIcon() {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-4 mb-2">
      <rect x="14" y="20" width="26" height="32" rx="4" transform="rotate(-10 14 20)" fill="#CBD5E1" stroke="#F1F5F9" strokeWidth="2" />
      <rect x="28" y="16" width="26" height="32" rx="4" transform="rotate(6 28 16)" fill="#94A3B8" stroke="#F1F5F9" strokeWidth="2" />
      <rect x="18" y="14" width="26" height="32" rx="4" fill="#E2E8F0" stroke="#F1F5F9" strokeWidth="2" />
    </svg>
  );
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center gap-1 py-4 text-center">
      <EmptyDocIcon />
      <p className="text-[11px] font-medium text-slate-400">Nenhum card adicionado</p>
    </div>
  );
}

function KanbanCard({ card }: { card: NonNullable<KanbanColumnType['card']> }) {
  return (
    <div className="flex flex-col gap-2.5 rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
      <div className="flex items-start justify-between gap-2">
        <div className="h-6 w-6 flex-shrink-0 overflow-hidden rounded-full bg-slate-200">
          <div className="h-full w-full bg-gradient-to-tr from-slate-400 to-slate-300" />
        </div>
        <div className="flex flex-wrap justify-end gap-1.5">
          {card.tags.map((tag) => (
            <span
              key={tag.label}
              className={`inline-flex items-center gap-1 rounded-md px-1.5 py-[2px] text-[8px] font-semibold ${tag.bg} ${tag.text}`}
            >
              <span className={`h-1.5 w-1.5 rounded-full ${tag.dot}`} />
              {tag.label}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between gap-2">
        <p className="truncate text-[11px] font-bold text-slate-800">{card.name}</p>
        <p className="whitespace-nowrap text-[11px] font-bold text-slate-800">{card.value}</p>
      </div>

      <div className="flex items-center gap-3 text-[10px] font-medium text-slate-400">
        <div className="flex items-center gap-1">
          <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        </div>
        <div className="flex items-center gap-1">
          <Check className="h-3 w-3" strokeWidth={3} />
          <span>0/19</span>
        </div>
        <div className="flex items-center gap-1">
          <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.5">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <span>1h</span>
        </div>
      </div>
    </div>
  );
}

function KanbanColumn({ column }: { column: KanbanColumnType }) {
  return (
    <div className="flex w-[240px] flex-shrink-0 flex-col self-stretch overflow-hidden rounded-2xl bg-[#F1F5F9] p-3">
      {/* Header */}
      <div className="mb-4 flex items-start justify-between">
        <div className="flex gap-2.5">
          {/* Vertical Bar */}
          <div className="h-6 w-1 rounded-full" style={{ backgroundColor: column.barColor }} />
          <div className="flex min-w-0 flex-col leading-tight">
            <span className="truncate text-[12px] font-bold text-slate-900">{column.title}</span>
            <span className="text-[10px] text-slate-500">{column.total}</span>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="flex h-[22px] w-[22px] items-center justify-center rounded-full bg-white text-[10px] font-bold text-slate-700 shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
            {column.count}
          </span>
          <div className="flex h-[22px] w-[22px] items-center justify-center rounded-full bg-white shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
            <svg viewBox="0 0 24 24" className="h-3 w-3 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
              <line x1="7" y1="7" x2="7.01" y2="7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-2">
        {column.card ? <KanbanCard card={column.card} /> : <EmptyState />}
        
        <button
          type="button"
          className="mt-3 flex items-center justify-center gap-1.5 rounded-lg py-1.5 text-[11px] font-medium text-slate-400 hover:text-slate-700"
        >
          <Plus className="h-3 w-3" strokeWidth={2.5} />
          Novo card
        </button>
      </div>
    </div>
  );
}

export function KanbanMockup() {
  return (
    <div
      role="img"
      aria-label="Prévia do CRM Kanban do Sagazchat com colunas de pipeline"
      className="w-full overflow-hidden rounded-[20px] bg-white shadow-[0_20px_50px_-12px_rgba(15,23,42,0.15)] ring-1 ring-slate-200">
      {/* Top bar */}
      <div className="flex items-center justify-between px-5 py-4">
        <div className="flex items-center gap-2">
          <ChevronLeft className="h-4 w-4 text-slate-800" strokeWidth={3} />
          <span className="text-[14px] font-bold text-slate-900">Comercial Dayane</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 rounded-md bg-slate-900 px-3 py-1.5 text-[11px] font-bold text-white transition-colors hover:bg-slate-800">
            <span className="flex h-2.5 w-2.5 items-center gap-[1px]">
              <span className="h-full w-[2px] rounded-sm bg-white" />
              <span className="h-full w-[2px] rounded-sm bg-white" />
              <span className="h-full w-[2px] rounded-sm bg-white" />
            </span>
            Criar coluna
          </button>
          <button className="flex items-center gap-1.5 rounded-md bg-slate-900 px-3 py-1.5 text-[11px] font-bold text-white transition-colors hover:bg-slate-800">
            <Plus className="h-3 w-3" strokeWidth={3} />
            Criar cartão
          </button>
        </div>
      </div>

      {/* Search row */}
      <div className="flex items-center justify-between px-5 pb-4">
        <div className="flex h-9 w-[260px] items-center gap-2 rounded-xl bg-[#F1F5F9] px-3">
          <Search className="h-3.5 w-3.5 text-slate-400" strokeWidth={2.5} />
          <input 
            type="text" 
            placeholder="Procure por nome" 
            className="w-full bg-transparent text-[11px] font-medium text-slate-600 outline-none placeholder:text-slate-400"
            disabled
          />
        </div>
        <button className="flex h-9 w-9 items-center justify-center rounded-xl bg-white shadow-[0_1px_3px_rgba(0,0,0,0.05)] ring-1 ring-slate-200">
          <RotateCw className="h-3.5 w-3.5 text-slate-400" strokeWidth={2.5} />
        </button>
      </div>

      {/* Board area */}
      <div className="flex min-h-[460px] items-stretch gap-4 overflow-x-auto p-5 pt-0">
        {COLUMNS.map((col) => (
          <KanbanColumn key={col.title} column={col} />
        ))}
      </div>
    </div>
  );
}

export const CrmKanbanSection = () => {
  return (
    <section className="bg-slate-50 py-20 md:py-28">
      <div className="mx-auto grid max-w-[1360px] grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        {/* Left — Copy */}
        <AnimateIn from="left" delay={100}>
          <div className="flex flex-col gap-6 text-center lg:text-left">
            <div className="space-y-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary font-[family-name:var(--font-display)]">
                CRM Kanban
              </p>

              <h2 className="mx-auto max-w-[560px] text-balance font-[family-name:var(--font-display)] text-[2rem] font-bold leading-[1.1] tracking-[-0.02em] text-slate-950 sm:text-[2.5rem] lg:mx-0 lg:text-[2.5rem]">
                Veja quais conversas{' '}
                <span className="italic font-medium text-primary">podem virar receita.</span>
              </h2>

              <p className="mx-auto max-w-xl text-pretty text-[15px] leading-[1.6] text-slate-600 lg:mx-0">
                Cada lead entra com valor. O time enxerga prioridade, etapa e potencial de venda.
              </p>
            </div>

            <ul className="flex w-full flex-col gap-3.5 text-left">
              {BULLETS.map((bullet) => (
                <li key={bullet} className="flex items-center justify-center gap-2.5 lg:justify-start">
                  <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary">
                    <Check className="h-3 w-3 text-white" strokeWidth={3.5} />
                  </span>
                  <span className="text-[15px] text-slate-700">{bullet}</span>
                </li>
              ))}
            </ul>

            <a
              href="#pricing"
              className={`${ctaPrimary} mt-2 hidden lg:inline-flex`}
            >
              Ver planos
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </AnimateIn>

        {/* Right — Kanban UI Replica */}
        <AnimateIn from="right" delay={200} duration={700}>
          <KanbanMockup />
        </AnimateIn>

        <div className="lg:hidden">
          <a
            href="#pricing"
            className={`${ctaPrimary} ${ctaMobileFull}`}
          >
            Ver planos
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
