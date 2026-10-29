'use client';

import { useEffect, useState, type ReactNode } from 'react';
import { CheckCheck, Search } from 'lucide-react';
import { Logo } from '@/components/brand/logo';
import { Avatar } from './c-bits';
import { PRO_PRICE_INT } from '../data';

const CHATS = [
  { id: 'inicio', name: 'Sagazchat', preview: 'Cada conversa sem resposta é uma venda que você perde.', time: 'agora', tone: 'bg-[var(--c-green)] text-[var(--c-ink)]', label: 'S' },
  { id: 'recuperacao', name: 'Recuperação de venda', preview: 'R$ 297,00 · pago em 4min 12s', time: '09:06', tone: 'bg-[#0b1a12] text-white', label: 'R$' },
  { id: 'planos', name: 'Planos', preview: `PRO · R$${PRO_PRICE_INT} no 1º mês`, time: '09:07', tone: 'bg-[#c9f2d4] text-[#0b4d24]', label: 'P' },
];

export function CShell({ children }: { children: ReactNode }) {
  const [current, setCurrent] = useState('inicio');

  useEffect(() => {
    const els = CHATS.map((c) => document.getElementById(c.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setCurrent(e.target.id));
      },
      { rootMargin: '-40% 0px -55% 0px' },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const active = CHATS.find((c) => c.id === current) ?? CHATS[0];

  return (
    <div className="lg:grid lg:grid-cols-[380px_1fr]">
      {/* Lista de conversas = navegação */}
      <aside className="hidden border-r border-[var(--c-line)] bg-[var(--c-pane)] lg:block">
        <div className="sticky top-0 flex h-screen flex-col">
          <div className="flex h-[68px] items-center justify-between px-5">
            <a href="#inicio" aria-label="Sagazchat"><Logo height={24} /></a>
            <a href="https://app.sagazchat.com" className="text-[13px] font-bold text-[var(--c-green-text)] hover:underline">Entrar</a>
          </div>
          <div className="px-4 pb-3">
            <div className="flex items-center gap-2 rounded-[10px] bg-[var(--c-head)] px-3 py-2.5 text-[14px] text-[var(--c-mute)]">
              <Search className="h-4 w-4" aria-hidden /> Pesquisar ou começar uma nova conversa
            </div>
          </div>
          <nav aria-label="Seções" className="flex-1 overflow-y-auto">
            {CHATS.map((c) => (
              <a key={c.id} href={`#${c.id}`} aria-current={current === c.id} className="c-chat-item flex items-center gap-3 px-4 py-3.5">
                <Avatar label={c.label} tone={c.tone} size={48} />
                <span className="min-w-0 flex-1 border-b border-[var(--c-line)] pb-3.5">
                  <span className="flex items-baseline justify-between gap-2">
                    <span className="truncate text-[16px] font-bold">{c.name}</span>
                    <span className="shrink-0 text-[12px] text-[var(--c-mute)]">{c.time}</span>
                  </span>
                  <span className="mt-0.5 flex items-center gap-1 text-[13px] text-[var(--c-mute)]">
                    <CheckCheck className="h-3.5 w-3.5 shrink-0 text-[#1d8fe0]" aria-hidden />
                    <span className="truncate">{c.preview}</span>
                  </span>
                </span>
              </a>
            ))}
          </nav>
          <p className="border-t border-[var(--c-line)] px-5 py-4 text-[12px] leading-snug text-[var(--c-mute)]">
            Sem fidelidade. Cancele quando quiser e migre sem perder dados.
          </p>
        </div>
      </aside>

      <div className="min-w-0">
        {/* Cabeçalho da conversa */}
        <div className="sticky top-0 z-30 border-b border-[var(--c-line)] bg-[var(--c-head)]">
          <div className="flex h-[64px] items-center gap-3 px-4 sm:px-6 lg:h-[68px]">
            <a href="#inicio" className="lg:hidden" aria-label="Sagazchat"><Logo height={20} /></a>
            <span className="hidden items-center gap-3 lg:flex">
              <Avatar label={active.label} tone={active.tone} size={42} />
              <span className="leading-tight">
                <span className="block text-[16px] font-bold">{active.name}</span>
                <span className="block text-[13px] text-[var(--c-green-text)]">online · responde na hora</span>
              </span>
            </span>
            <nav aria-label="Seções" className="ml-auto flex items-center gap-1.5 lg:hidden">
              {CHATS.map((c) => (
                <a key={c.id} href={`#${c.id}`} aria-current={current === c.id} className={`rounded-full px-3 py-1.5 text-[12px] font-bold ${current === c.id ? 'bg-[#c9f2d4] text-[#0b4d24]' : 'bg-white text-[var(--c-mute)]'}`}>
                  {c.id === 'inicio' ? 'Início' : c.id === 'recuperacao' ? 'Recuperação' : 'Planos'}
                </a>
              ))}
            </nav>
            <a href="#planos" className="ml-auto hidden h-10 items-center rounded-full bg-[var(--c-green)] px-5 text-[14px] font-extrabold text-[var(--c-ink)] hover:bg-[#2bdc6f] lg:inline-flex">
              Ver planos
            </a>
          </div>
        </div>
        <div className="c-doodle">{children}</div>
      </div>
    </div>
  );
}
