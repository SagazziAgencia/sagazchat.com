"use client";

import { useEffect, useRef, useState } from "react";
import { Bot, Check, CheckCheck, Clock, CreditCard, Phone } from "lucide-react";

import { AVATAR_BG, brl, type KCard, type Tone } from "./data";

/* Animações de entrada só valem pra coisas que nascem DEPOIS que a demo começou:
   o que já está no HTML do servidor (primeiro frame) aparece pronto, sem fade. */
let ARMED = false;
export function arm() {
  ARMED = true;
}
function useArmedAtMount() {
  return useState(() => ARMED)[0];
}

export function Fx({ as: Tag = "div", className = "", children }: { as?: "div" | "span"; className?: string; children: React.ReactNode }) {
  const a = useArmedAtMount();
  return <Tag className={`${a ? "hd-fade " : ""}${className}`}>{children}</Tag>;
}

/* ─── Avatar ─── */
export function Avatar({
  initials,
  tone,
  size = "md",
  wa = true,
}: {
  initials: string;
  tone: Tone;
  size?: "sm" | "md" | "lg" | "xl";
  wa?: boolean;
}) {
  const box = { sm: "h-7 w-7 text-[10px] rounded-lg", md: "h-9 w-9 text-[11px] rounded-lg", lg: "h-9 w-9 text-[11px] rounded-full lg:h-9 lg:w-9", xl: "h-[80px] w-[80px] text-[22px] rounded-[20px]" }[size];
  const badge = size === "xl" ? "h-5 w-5" : "h-3.5 w-3.5";
  const icon = size === "xl" ? "h-2.5 w-2.5" : "h-1.5 w-1.5";
  return (
    <div className="relative shrink-0">
      <div className={`flex items-center justify-center font-bold text-white ${AVATAR_BG[tone]} ${box}`}>{initials}</div>
      {wa ? (
        <span className={`absolute -bottom-0.5 -right-0.5 flex items-center justify-center rounded-full bg-[#25D366] ring-[1.5px] ring-white ${badge}`}>
          <Phone className={`fill-white text-white ${icon}`} />
        </span>
      ) : null}
    </div>
  );
}

/* ─── Chip da IA ─── */
export function AiChip({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-0.5 rounded bg-[#ECFDF5] px-1 py-px text-[8px] font-bold uppercase leading-none tracking-wide text-[#15803D] ring-1 ring-[#BBF7D0] ${className}`}>
      <Bot className="h-2 w-2" strokeWidth={2.6} />
      IA
    </span>
  );
}

/* ─── Mensagens ─── */
export function Pop({ className = "", children }: { className?: string; children: React.ReactNode }) {
  const a = useArmedAtMount();
  return <span className={`${a ? "hd-pop " : ""}${className}`}>{children}</span>;
}

export function Stamp({ time, sent }: { time: string; sent?: boolean }) {
  return (
    <span className="ml-2 inline-flex shrink-0 translate-y-[2px] items-center gap-1 text-[9px] text-[#94A3B8]">
      {time}
      {sent ? <CheckCheck className="h-3.5 w-3.5 text-[#17C75A]" /> : <Check className="h-3 w-3" />}
    </span>
  );
}

export function CustomerBubble({ text, time }: { text: string; time: string }) {
  const a = useArmedAtMount();
  return (
    <div className={`${a ? "hd-msg " : ""}flex justify-start`}>
      <div className="max-w-[78%] rounded-[10px] rounded-bl-[2px] bg-white px-3 py-1.5 text-[12px] leading-[1.45] text-[#0F172A] ring-1 ring-[#E2E8F0]">
        <span>{text}</span>
        <Stamp time={time} />
      </div>
    </div>
  );
}

export function SentBubble({
  who,
  ai,
  text,
  time,
  children,
}: {
  who: string;
  ai?: boolean;
  text: string;
  time: string;
  children?: React.ReactNode;
}) {
  const a = useArmedAtMount();
  return (
    <div className={`${a ? "hd-msg " : ""}flex justify-end`}>
      <div className="max-w-[82%] rounded-[10px] rounded-br-[2px] bg-[#F1FDD4] px-3 py-1.5 text-[12px] leading-[1.45] text-[#0F172A] lg:max-w-[74%]">
        <p className="mb-0.5 flex items-center gap-1 text-[11px] font-bold">
          {who}
          {ai ? <AiChip /> : null}
          <span className="font-bold">:</span>
        </p>
        <span>{text}</span>
        {children}
        <Stamp time={time} sent />
      </div>
    </div>
  );
}

export function PaymentCard({ pressed }: { pressed?: boolean }) {
  return (
    <div className="mt-2 w-[200px] max-w-full rounded-lg bg-white p-2.5 shadow-[0_1px_2px_rgba(15,23,42,0.08)] ring-1 ring-[#E2E8F0]">
      <div className="flex items-center gap-2">
        <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#ECFDF5] text-[#15803D]">
          <CreditCard className="h-3.5 w-3.5" />
        </span>
        <div className="min-w-0 leading-tight">
          <p className="truncate text-[11px] font-bold text-[#0F172A]">Kit Premium</p>
          <p className="text-[13px] font-extrabold text-[#0F172A]">{brl(297)}</p>
        </div>
      </div>
      <div className={`mt-2 rounded-md bg-[#17C75A] py-1.5 text-center text-[11px] font-bold text-white transition-transform ${pressed ? "scale-95" : ""}`}>
        Pagar agora
      </div>
    </div>
  );
}

export function SystemPill({ children }: { children: React.ReactNode }) {
  const a = useArmedAtMount();
  return (
    <div className={`${a ? "hd-msg " : ""}flex justify-center`}>
      <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-[10px] font-semibold text-[#475569] shadow-[0_1px_2px_rgba(15,23,42,0.06)] ring-1 ring-[#E2E8F0]">
        {children}
      </span>
    </div>
  );
}

export function TypingBubble() {
  return (
    <div className="hd-msg flex justify-end">
      <div className="flex items-center gap-2 rounded-[10px] rounded-br-[2px] bg-[#F1FDD4] px-3 py-2">
        <span className="text-[10px] font-semibold text-[#15803D]">Ana digitando</span>
        <span className="flex items-center gap-1">
          <span className="typing-dot h-[5px] w-[5px] rounded-full bg-[#15803D]" style={{ animationDelay: "0ms" }} />
          <span className="typing-dot h-[5px] w-[5px] rounded-full bg-[#15803D]" style={{ animationDelay: "150ms" }} />
          <span className="typing-dot h-[5px] w-[5px] rounded-full bg-[#15803D]" style={{ animationDelay: "300ms" }} />
        </span>
      </div>
    </div>
  );
}

/* ─── Kanban ─── */
export function KCardView({
  card,
  paid,
  hover,
  lifted,
  landed,
}: {
  card: KCard;
  paid?: boolean;
  hover?: boolean;
  lifted?: boolean;
  landed?: boolean;
}) {
  return (
    <div
      className={`rounded-xl bg-white p-2.5 ring-1 transition-shadow duration-200 ${
        lifted
          ? "shadow-[0_22px_40px_rgba(15,23,42,0.22)] ring-[#17C75A]/40"
          : hover
            ? "shadow-[0_2px_6px_rgba(15,23,42,0.12)] ring-[#94A3B8]"
            : "shadow-[0_1px_2px_rgba(15,23,42,0.06)] ring-[#E2E8F0]"
      } ${landed ? "hd-land" : ""}`}
    >
      <div className="flex min-h-[18px] items-center justify-between gap-2">
        {card.tag ? (
          <span className={`whitespace-nowrap rounded-md px-1.5 py-0.5 text-[9px] font-bold ring-1 ${card.tag.cls}`}>{card.tag.label}</span>
        ) : (
          <span />
        )}
        {paid ? (
          <span className="hd-pop inline-flex items-center gap-0.5 rounded-md bg-[#17C75A] px-1.5 py-0.5 text-[9px] font-bold text-white">
            <Check className="h-2.5 w-2.5" strokeWidth={3.4} />
            Pago
          </span>
        ) : null}
      </div>
      <div className="mt-1.5 flex items-center gap-2 max-lg:flex-col max-lg:items-start max-lg:gap-0.5">
        <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-[10px] font-bold text-white max-lg:hidden ${AVATAR_BG[card.tone]}`}>
          {card.initials}
        </div>
        <span className="min-w-0 flex-1 truncate text-[12px] font-semibold text-[#0F172A] max-lg:w-full max-lg:flex-none">{card.name}</span>
        <span className="shrink-0 text-[11px] font-bold text-[#0F172A]">{brl(card.value)}</span>
      </div>
      <div className="mt-2 flex items-center justify-between border-t border-[#EEF2F6] pt-2 text-[10px] text-[#94A3B8]">
        <Phone className="h-3 w-3 text-[#25D366]" />
        <span className="inline-flex items-center gap-2">
          <span className="inline-flex items-center gap-0.5">
            <Clock className="h-2.5 w-2.5" /> 0/19
          </span>
          <span className="inline-flex items-center gap-0.5">
            <Clock className="h-2.5 w-2.5" /> {card.age}
          </span>
        </span>
      </div>
    </div>
  );
}

/* Número que "conta" até o novo valor (só ele re-renderiza). */
export function AnimatedMoney({ value }: { value: number }) {
  const [shown, setShown] = useState(value);
  const from = useRef(value);
  const raf = useRef(0);

  useEffect(() => {
    const start = performance.now();
    const a = from.current;
    const b = value;
    if (a === b) return;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / 700);
      const e = 1 - Math.pow(1 - p, 3);
      const v = a + (b - a) * e;
      from.current = v;
      setShown(v);
      if (p < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [value]);

  return <>{brl(shown)}</>;
}
