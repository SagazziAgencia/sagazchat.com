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

const BULLETS = [
  'Soma automática de valores por etapa',
  'Previsibilidade do que está prestes a fechar',
  'Histórico de contato dentro de cada card',
  'Arraste leads entre etapas sem planilha',
];

type CardTag = { label: string; bg: string; text: string; dot: string };

type KanbanColumn = {
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

const COLUMNS: KanbanColumn[] = [
  { title: 'Prospecção nova', total: 'R$ 0,00', count: 0, barColor: '#3B82F6' },
  {
    title: 'Prospecção interna',
    total: 'R$ 5,00',
    count: 1,
    barColor: '#60A5FA',
    card: { tags: [TAG_QUENTE, TAG_REPOSTA], name: 'Silvia reacionaram f...', value: 'R$ 5,00' },
  },
  { title: 'Em orçamento', total: 'R$ 0,00', count: 0, barColor: '#3B82F6' },
  {
    title: 'Fechado',
    total: 'R$ 96,99',
    count: 1,
    barColor: '#17C75A',
    card: { tags: [TAG_QUENTE, TAG_CLIENTE], name: 'Jealano Kevinholzj gr...', value: 'R$ 96,99' },
  },
  { title: 'Perdido', total: 'R$ 0,00', count: 0, barColor: '#475569' },
];

/* ─── Empty state illustration (documento cinza) ─── */
function EmptyDocIcon() {
  return (
    <svg viewBox="0 0 48 56" className="h-12 w-10" aria-hidden>
      <defs>
        <linearGradient id="docGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#E2E8F0" />
          <stop offset="1" stopColor="#CBD5E1" />
        </linearGradient>
      </defs>
      <path
        d="M8 4h24l12 12v32a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4z"
        fill="url(#docGrad)"
      />
      <path d="M32 4v10a2 2 0 0 0 2 2h10" fill="#94A3B8" opacity="0.4" />
      <rect x="11" y="26" width="20" height="2" rx="1" fill="#94A3B8" opacity="0.5" />
      <rect x="11" y="32" width="26" height="2" rx="1" fill="#94A3B8" opacity="0.4" />
      <rect x="11" y="38" width="16" height="2" rx="1" fill="#94A3B8" opacity="0.3" />
    </svg>
  );
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center gap-2 py-8 text-center">
      <EmptyDocIcon />
      <p className="text-[9.5px] leading-tight text-slate-400">Nenhum cartão de nível</p>
    </div>
  );
}

function KanbanCard({ card }: { card: NonNullable<KanbanColumn['card']> }) {
  return (
    <div className="space-y-2 rounded-md border border-slate-200 bg-white p-2.5 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
      <div className="flex flex-wrap items-center gap-1">
        {card.tags.map((tag) => (
          <span
            key={tag.label}
            className={`inline-flex items-center gap-1 rounded px-1.5 py-[1px] text-[8px] font-semibold ${tag.bg} ${tag.text}`}
          >
            <span className={`h-[3px] w-[3px] rounded-full ${tag.dot}`} />
            {tag.label}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between gap-2">
        <p className="truncate text-[10px] font-medium text-slate-700">{card.name}</p>
        <p className="whitespace-nowrap text-[10px] font-bold text-slate-900">{card.value}</p>
      </div>
      <div className="flex items-center gap-2 text-[8.5px] text-slate-400">
        <svg viewBox="0 0 24 24" className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
        <span>0/19</span>
        <span>·</span>
        <span>1h</span>
      </div>
    </div>
  );
}

function KanbanColumn({ column }: { column: KanbanColumn }) {
  return (
    <div className="flex w-[150px] flex-shrink-0 flex-col self-stretch overflow-hidden rounded-md border border-slate-200 bg-white">
      {/* Top colored tab */}
      <div className="h-[4px]" style={{ backgroundColor: column.barColor }} />

      {/* Header */}
      <div className="flex items-center justify-between px-2.5 py-2">
        <div className="flex min-w-0 flex-col leading-tight">
          <span className="truncate text-[10px] font-semibold text-slate-800">{column.title}</span>
          <span className="text-[9px] text-slate-400">{column.total}</span>
        </div>
        <div className="flex items-center gap-1.5 text-slate-400">
          <span className="text-[9.5px] font-medium">{column.count}</span>
          <RotateCw className="h-[11px] w-[11px]" strokeWidth={2} />
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col justify-between gap-2 px-2 pb-2">
        <div className="flex flex-col gap-2 pt-1">
          {column.card ? <KanbanCard card={column.card} /> : <EmptyState />}
        </div>
        <button
          type="button"
          className="flex items-center justify-center gap-1 rounded py-1.5 text-[9.5px] font-medium text-slate-400 hover:bg-slate-50 hover:text-primary"
        >
          <Plus className="h-2.5 w-2.5" strokeWidth={2.5} />
          Novo card
        </button>
      </div>
    </div>
  );
}

function KanbanMockup() {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-slate-200 bg-[#F5F6F8] shadow-[0_20px_50px_-12px_rgba(15,23,42,0.15)]">
      {/* Top bar */}
      <div className="flex items-center justify-between border-b border-slate-200 bg-white px-4 py-2.5">
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded-sm bg-slate-900" />
          <ChevronLeft className="h-3.5 w-3.5 text-slate-400" strokeWidth={2.5} />
          <span className="text-[12px] font-semibold text-slate-900">Comercial Dayane</span>
        </div>
        <div className="flex items-center gap-1.5">
          <button className="flex items-center gap-1 rounded bg-slate-900 px-2 py-1 text-[9px] font-semibold text-white">
            <span className="flex h-2 w-2 items-center gap-[1px]">
              <span className="h-full w-[2px] bg-white" />
              <span className="h-full w-[2px] bg-white" />
              <span className="h-full w-[2px] bg-white" />
            </span>
            Criar coluna
          </button>
          <button className="flex items-center gap-1 rounded bg-slate-900 px-2 py-1 text-[9px] font-semibold text-white">
            <Plus className="h-2.5 w-2.5" strokeWidth={3} />
            Criar cartão
          </button>
        </div>
      </div>

      {/* Search row */}
      <div className="flex items-center justify-between border-b border-slate-200 bg-white px-4 py-2">
        <div className="flex items-center gap-2">
          <Search className="h-3 w-3 text-slate-400" strokeWidth={2} />
          <span className="text-[10px] text-slate-400">Procurar por nome</span>
        </div>
        <RotateCw className="h-3 w-3 text-slate-400" strokeWidth={2} />
      </div>

      {/* Board area */}
      <div className="flex min-h-[380px] items-stretch gap-2.5 overflow-x-auto p-3">
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
        <AnimateIn from="left" delay={100} className="order-2 lg:order-1">
          <div className="flex flex-col gap-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
              CRM Kanban
            </p>

            <h2 className="max-w-[560px] font-[family-name:var(--font-display)] text-[2rem] font-extrabold leading-[1.12] tracking-[-0.03em] text-slate-900 sm:text-[2.5rem] lg:text-[2.5rem]">
              Seu pipeline comercial com valor real, não só conversas.
            </h2>

            <p className="max-w-[500px] text-[16px] leading-[1.6] text-slate-500">
              Cada lead entra com valor, cada etapa soma automático. Você vê o que vai fechar antes de fechar — e prioriza o que ainda pode virar venda.
            </p>

            <ul className="flex flex-col gap-3.5">
              {BULLETS.map((bullet) => (
                <li key={bullet} className="flex items-center gap-2.5">
                  <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary">
                    <Check className="h-3 w-3 text-white" strokeWidth={3.5} />
                  </span>
                  <span className="text-[15px] text-slate-700">{bullet}</span>
                </li>
              ))}
            </ul>

            <a
              href="#pricing"
              className="mt-4 inline-flex w-fit items-center gap-2.5 rounded-[10px] bg-primary px-8 py-4 text-[15px] font-semibold text-white shadow-[0_4px_14px_rgba(23,199,90,0.25)] transition-all hover:bg-primary/90 hover:shadow-[0_6px_20px_rgba(23,199,90,0.35)]"
            >
              Ver planos
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </AnimateIn>

        {/* Right — Kanban UI Replica */}
        <AnimateIn from="right" delay={200} duration={700} className="order-1 lg:order-2">
          <KanbanMockup />
        </AnimateIn>
      </div>
    </section>
  );
};
