"use client";

import { useEffect, useRef, useState } from "react";
import {
  CalendarClock,
  ChevronDown,
  ChevronLeft,
  Filter,
  GitBranch,
  History,
  MessageSquareX,
  MoreVertical,
  Phone,
  Search,
  Tag,
  Trash2,
  UserRound,
} from "lucide-react";

type ConversationItem = {
  id: string;
  name: string;
  initials: string;
  avatarTone: "emerald" | "sky" | "amber" | "violet" | "rose" | "indigo" | "teal";
  preview: string;
  agentPrefix?: string;
  time: string;
  label?: string;
  unread?: number;
  selected?: boolean;
};

const CONVERSATIONS: ConversationItem[] = [
  { id: "iarley", name: "Iarley Silva", initials: "IS", avatarTone: "emerald", preview: "Obrigado!", time: "agora", label: "Iarley", selected: true },
  { id: "marina", name: "Marina Costa", initials: "MC", avatarTone: "violet", preview: "Recebi o boleto?", time: "3m", label: "Comercial", unread: 2 },
  { id: "felipe", name: "Felipe Andrade", initials: "FA", avatarTone: "sky", agentPrefix: "ana", preview: "Te mando o link agora", time: "8m", label: "Suporte" },
  { id: "camila", name: "Camila Rocha", initials: "CR", avatarTone: "amber", preview: "Bom dia! Preciso atualizar meu cadastro", time: "12m", label: "Cliente", unread: 1 },
  { id: "renata", name: "Renata Souza", initials: "RS", avatarTone: "rose", preview: "Foto", time: "35m", label: "Comercial", unread: 3 },
  { id: "bruno", name: "Bruno Lima", initials: "BL", avatarTone: "indigo", agentPrefix: "ana", preview: "Pode ser amanhã às 14h", time: "1hora", label: "VIP" },
  { id: "daniel", name: "Daniel Pereira", initials: "DP", avatarTone: "teal", agentPrefix: "iarley", preview: "Tudo certo, obrigado!", time: "2horas", label: "Suporte" },
];

const AVATAR_BG: Record<ConversationItem["avatarTone"], string> = {
  emerald: "bg-emerald-500",
  sky: "bg-sky-500",
  amber: "bg-amber-500",
  violet: "bg-violet-500",
  rose: "bg-rose-500",
  indigo: "bg-indigo-500",
  teal: "bg-teal-500",
};

export function ConversationQueue() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (menuRef.current?.contains(target) || menuButtonRef.current?.contains(target)) {
        return;
      }
      setMenuOpen(false);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  return (
    <aside className="hero-replica-queue relative z-30 hidden h-full w-[340px] shrink-0 flex-col overflow-visible border-r border-[#E5E7EB] bg-white lg:flex">
      {/* Tabs bar */}
      <div className="shrink-0 border-b border-[#E5E7EB] bg-white px-2 py-2">
        <div className="mb-2 flex items-center justify-between px-1">
          <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#94A3B8]">
            Caixa de atendimento
          </span>
          <span className="rounded-full bg-[#DCFCE7] px-2 py-0.5 text-[10px] font-bold text-[#15803D]">
            ao vivo
          </span>
        </div>
        <div className="flex items-center gap-1">
        <button
          type="button"
          aria-label="Recolher menu"
          className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#0F172A] text-white"
        >
          <ChevronLeft className="h-3.5 w-3.5" strokeWidth={2.5} />
        </button>

        <div className="flex min-w-0 flex-1 items-center gap-0.5 whitespace-nowrap text-[11px] font-semibold">
          <button
            type="button"
            className="flex items-center gap-1 rounded-full bg-[#0F172A] px-2 py-1 text-white"
          >
            Atendente
            <span className="inline-flex h-[14px] min-w-[14px] items-center justify-center rounded-full bg-white px-1 text-[9px] font-bold text-[#0F172A]">
              6
            </span>
          </button>
          <button
            type="button"
            className="flex items-center gap-1 rounded-full px-1.5 py-1 text-[#64748B]"
          >
            Aguardando
            <span className="inline-flex h-[14px] min-w-[14px] items-center justify-center rounded-full bg-[#F1F5F9] px-1 text-[9px] font-bold text-[#64748B]">
              3
            </span>
          </button>
          <button
            type="button"
            className="rounded-full px-1.5 py-1 text-[#64748B]"
          >
            Resolvidos
          </button>
        </div>

        <button
          type="button"
          aria-label="Mais opções"
          className="flex h-6 w-6 shrink-0 items-center justify-center text-[#64748B]"
        >
            <MoreVertical className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="shrink-0 px-3 pb-2 pt-3">
        <div className="flex items-center gap-2 rounded-lg border border-[#E2E8F0] bg-white px-3 py-1.5">
          <span className="flex-1 truncate text-[11px] text-[#94A3B8]">Encontre conversas</span>
          <Search className="h-3.5 w-3.5 text-[#94A3B8]" strokeWidth={2.2} />
        </div>
      </div>

      {/* Filter icons */}
      <div className="flex shrink-0 items-center gap-3 px-3 pb-2 pt-1 text-[#64748B]">
        <button type="button" aria-label="Filtrar por etiqueta">
          <Tag className="h-4 w-4" />
        </button>
        <button type="button" aria-label="Filtrar por atendente">
          <UserRound className="h-4 w-4" />
        </button>
        <button type="button" aria-label="Filtros gerais">
          <Filter className="h-4 w-4" />
        </button>
      </div>

      {/* List */}
      <div className="min-h-0 flex-1 overflow-y-auto">
        {CONVERSATIONS.map((c) => (
          <div
            key={c.id}
            className={`flex w-full items-center gap-2.5 px-3 py-2.5 text-left transition-colors ${
              c.selected ? "bg-[#F8FAFC] ring-1 ring-inset ring-[#E2E8F0]" : "hover:bg-[#F8FAFC]"
            }`}
          >
            <div className="relative shrink-0">
              <div
                className={`flex h-9 w-9 items-center justify-center rounded-lg text-[11px] font-bold text-white ${AVATAR_BG[c.avatarTone]}`}
              >
                {c.initials}
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#25D366] ring-[1.5px] ring-white">
                <Phone className="h-1.5 w-1.5 fill-white text-white" />
              </span>
            </div>

            <div className="flex min-w-0 flex-1 flex-col gap-1">
              <div className="flex min-w-0 items-center justify-between gap-2">
                <span className="truncate text-[12px] font-semibold text-[#0F172A]">{c.name}</span>
                {c.label ? (
                  <span className="shrink-0 rounded-md bg-[#F1F5F9] px-1.5 py-0.5 text-[9px] font-medium text-[#64748B]">
                    {c.label}
                  </span>
                ) : null}
              </div>

              <div className="flex min-w-0 items-center justify-between gap-2">
                <div className="flex min-w-0 items-center gap-1 text-[11px] text-[#64748B]">
                  <span className="min-w-0 truncate">
                    {c.agentPrefix ? (
                      <span className="font-semibold text-[#17C75A]">{c.agentPrefix}: </span>
                    ) : null}
                    {c.preview}
                  </span>
                </div>
                <div className="flex shrink-0 items-center gap-1">
                  <span className="text-[10px] text-[#94A3B8]">{c.time}</span>
                  <History className="h-3 w-3 text-[#CBD5E1]" />
                  {c.selected ? (
                    <button
                      ref={menuButtonRef}
                      type="button"
                      aria-label="Abrir opções da conversa"
                      aria-expanded={menuOpen}
                      onClick={() => setMenuOpen((open) => !open)}
                      className="flex h-5 w-5 items-center justify-center rounded-md text-[#94A3B8] transition-colors hover:bg-[#E2E8F0] hover:text-[#475569]"
                    >
                      <ChevronDown className="h-3.5 w-3.5" strokeWidth={2.4} />
                    </button>
                  ) : null}
                  {c.unread ? (
                    <span className="inline-flex h-4 min-w-[16px] items-center justify-center rounded-md bg-[#EF4444] px-1 text-[9px] font-bold text-white">
                      {c.unread}
                    </span>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {menuOpen ? (
        <div
          ref={menuRef}
          className="hero-queue-menu-preview absolute left-[250px] top-[150px] z-40 hidden w-[260px] rounded-[10px] bg-white py-3 text-[13px] font-medium text-[#5F6875] shadow-[0_18px_32px_rgba(15,23,42,0.22)] ring-1 ring-[#E5E7EB] xl:block"
        >
          <button type="button" className="flex w-full items-center gap-3 px-6 py-2 text-left hover:bg-[#F8FAFC]">
            <GitBranch className="h-4 w-4 text-[#6B7280]" />
            Enviar fluxo
          </button>
          <button type="button" className="flex w-full items-center gap-3 px-6 py-2 text-left hover:bg-[#F8FAFC]">
            <CalendarClock className="h-4 w-4 text-[#6B7280]" />
            Remarketing
          </button>
          <button type="button" className="flex w-full items-center gap-3 px-6 py-2 text-left hover:bg-[#F8FAFC]">
            <CalendarClock className="h-4 w-4 text-[#6B7280]" />
            Agendar mensagem
          </button>
          <button type="button" className="flex w-full items-center gap-3 px-6 py-2 text-left hover:bg-[#F8FAFC]">
            <UserRound className="h-4 w-4 text-[#6B7280]" />
            Transferir contato
          </button>
          <button type="button" disabled className="flex w-full items-center gap-3 px-6 py-2 text-left text-[#C6CBD2]">
            <MessageSquareX className="h-4 w-4" />
            Marcar como não lida
          </button>
          <button type="button" className="flex w-full items-center gap-3 px-6 py-2 text-left hover:bg-[#F8FAFC]">
            <MessageSquareX className="h-4 w-4 text-[#6B7280]" />
            Fechar conversa
          </button>
          <div className="my-2 h-px bg-[#E5E7EB]" />
          <button type="button" className="flex w-full items-center gap-3 px-6 py-2 text-left hover:bg-[#F8FAFC]">
            <Trash2 className="h-4 w-4 text-[#6B7280]" />
            Deletar conversa
          </button>
        </div>
      ) : null}

    </aside>
  );
}
