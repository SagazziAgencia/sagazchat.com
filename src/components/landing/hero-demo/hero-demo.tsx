"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRightLeft,
  ArrowUp,
  BatteryFull,
  Bell,
  BookOpen,
  Bot,
  Check,
  ChevronDown,
  ChevronLeft,
  CircleStop,
  Filter,
  History,
  LayoutDashboard,
  MessageSquareText,
  MoreVertical,
  Paperclip,
  Pencil,
  Phone,
  Plus,
  Radio,
  Search,
  Signature,
  Signal,
  Smile,
  SquareKanban,
  Tag,
  Undo2,
  UserRound,
  Workflow,
  Wifi,
  X,
  Zap,
  CalendarClock,
  File as FileIcon,
  List,
} from "lucide-react";

import {
  AVATAR_BG,
  CARLA,
  CARLA_PREVIEW,
  CARLA_THREAD,
  CONTACTS,
  K_CARLA,
  K_FECHADO,
  K_LEAD,
  K_NEG_AFTER,
  K_NEG_BEFORE,
  K_PERDIDO,
  PAULO_THREAD,
  PRICE,
  QUICK_REPLIES,
  brl,
  sum,
  type Msg,
} from "./data";
import { Timeline, arc, clamp, easeInOutCubic, easeOutCubic, type Pt } from "./engine";
import {
  AiChip,
  AnimatedMoney,
  Avatar,
  CustomerBubble,
  Fx,
  KCardView,
  PaymentCard,
  Pop,
  SentBubble,
  SystemPill,
  TypingBubble,
  arm,
} from "./parts";

/* ───────────────────────── estado da demo ───────────────────────── */
type View = "inbox" | "chat" | "kanban";

interface UI {
  view: View;
  conv: "paulo" | "carla";
  carlaIn: boolean;
  carlaMsgs: number;
  carlaRead: boolean;
  aiTyping: boolean;
  hot: boolean;
  hotTip: boolean;
  transferred: boolean;
  input: string;
  menu: boolean;
  hover: string | null;
  pressed: string | null;
  cardCol: "neg" | "fechado";
  drag: boolean;
  gap: boolean;
  landed: boolean;
  paid: boolean;
  toast: false | "in" | "out";
  step: number;
  curDown: boolean;
  rip: number;
  /** nº de voltas já completas (a partir da 2ª, o retorno ao 1º quadro entra com fade) */
  loop: number;
}

/* Primeiro frame (também é o que o servidor renderiza): caixa cheia + conversa aberta. */
const S0: UI = {
  view: "inbox",
  conv: "paulo",
  carlaIn: false,
  carlaMsgs: 0,
  carlaRead: false,
  aiTyping: false,
  hot: false,
  hotTip: false,
  transferred: false,
  input: "",
  menu: false,
  hover: null,
  pressed: null,
  cardCol: "neg",
  drag: false,
  gap: false,
  landed: false,
  paid: false,
  toast: false,
  step: 0,
  curDown: false,
  rip: 0,
  loop: 0,
};

/* prefers-reduced-motion: quadro parado já composto (IA respondeu, etiqueta, transferência, link). */
const STATIC: UI = {
  ...S0,
  view: "chat",
  conv: "carla",
  carlaIn: true,
  carlaMsgs: 5,
  carlaRead: true,
  hot: true,
  transferred: true,
};

const LOOP_END = 24000;

/* ───────────────────────── componente ───────────────────────── */
export function HeroDemo() {
  const [ui, setUi] = useState<UI>(S0);
  const [box, setBox] = useState<{ x: number; y: number; w: number } | null>(null);

  const stageRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const floatRef = useRef<HTMLDivElement>(null);

  const patch = useCallback((p: Partial<UI>) => setUi((s) => ({ ...s, ...p })), []);

  /* mantém o fim da conversa à vista */
  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [ui.carlaMsgs, ui.aiTyping, ui.transferred, ui.conv, ui.view, ui.hot]);

  /* ─── motor ─── */
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setUi(STATIC);
      return;
    }

    /* geometria relativa ao stage; só considera o elemento visível (desktop x celular) */
    const find = (key: string): HTMLElement | null => {
      const all = stage.querySelectorAll<HTMLElement>(`[data-t="${key}"]`);
      for (const el of Array.from(all)) if (el.getClientRects().length > 0) return el;
      return null;
    };
    const rectOf = (key: string) => {
      const el = find(key);
      if (!el) return null;
      const s = stage.getBoundingClientRect();
      const r = el.getBoundingClientRect();
      return { x: r.left - s.left, y: r.top - s.top, w: r.width, h: r.height };
    };
    const pointOf = (key: string, fx: number, fy: number): Pt | null => {
      const r = rectOf(key);
      return r ? { x: r.x + r.w * fx, y: r.y + r.h * fy } : null;
    };

    const cur: Pt = { x: 0, y: 0 };
    const place = (p: Pt) => {
      cur.x = p.x;
      cur.y = p.y;
      const c = cursorRef.current;
      if (c) c.style.transform = `translate3d(${p.x.toFixed(1)}px,${p.y.toFixed(1)}px,0)`;
    };
    const show = (on: boolean) => {
      if (cursorRef.current) cursorRef.current.style.opacity = on ? "1" : "0";
    };

    const tl = new Timeline();

    /* ponteiro até um alvo, em arco */
    const move = (at: number, dur: number, key: string, fx = 0.5, fy = 0.5, bend = 0.16) => {
      let from: Pt = { x: 0, y: 0 };
      tl.tween(
        at,
        dur,
        (p) => {
          const to = pointOf(key, fx, fy);
          if (!to) return;
          place(arc(from, to, easeInOutCubic(p), bend));
        },
        () => {
          from = { ...cur };
        },
      );
    };
    const click = (at: number, key: string) => {
      tl.ev(at, () => setUi((s) => ({ ...s, pressed: key, curDown: true, rip: s.rip + 1 })));
      tl.ev(at + 170, () => patch({ pressed: null, curDown: false }));
    };

    /* ── 1 · chega mensagem nova e o ponteiro abre a conversa ── */
    tl.ev(900, () => patch({ carlaIn: true, carlaMsgs: 1 }));
    tl.ev(1500, () => {
      const r = rectOf("msgs");
      place(r ? { x: r.x + r.w * 0.62, y: r.y + r.h * 0.78 } : { x: 600, y: 420 });
      show(true);
    });
    move(1750, 1250, "inbox-carla", 0.5, 0.5, 0.14);
    tl.ev(3020, () => patch({ hover: "inbox-carla" }));
    click(3330, "inbox-carla");
    tl.ev(3420, () => patch({ view: "chat", conv: "carla", carlaRead: true, hover: null, step: 1 }));
    move(3700, 1000, "msgs", 0.7, 0.8, -0.12);

    /* ── 2 · a IA responde e etiqueta ── */
    tl.ev(4300, () => patch({ aiTyping: true }));
    tl.ev(6100, () => patch({ aiTyping: false, carlaMsgs: 2 }));
    tl.ev(6700, () => patch({ hot: true, hotTip: true }));
    tl.ev(7000, () => patch({ step: 2 }));
    tl.ev(8300, () => patch({ hotTip: false }));

    /* ── 3 · cliente quer fechar, passa pra humano, atalho "/" ── */
    tl.ev(8700, () => patch({ carlaMsgs: 3 }));
    tl.ev(9600, () => patch({ carlaMsgs: 4, transferred: true }));
    tl.ev(10500, () => patch({ input: "/" }));
    tl.ev(10650, () => patch({ menu: true }));
    move(10800, 950, "qr-pay", 0.4, 0.5, 0.12);
    tl.ev(11800, () => patch({ hover: "qr-pay", step: 3 }));
    click(12250, "qr-pay");
    tl.ev(12400, () => patch({ menu: false, input: "", hover: null, carlaMsgs: 5 }));

    /* ── 4 · vai pro Kanban e arrasta o card ── */
    move(13500, 1300, "nav-kanban", 0.5, 0.5, 0.15);
    tl.ev(14850, () => patch({ hover: "nav-kanban" }));
    click(15200, "nav-kanban");
    tl.ev(15330, () => patch({ view: "kanban", hover: null }));
    move(16100, 1000, "card-carla", 0.38, 0.5, -0.13);
    tl.ev(17150, () => patch({ hover: "card-carla" }));

    let grab: { x: number; y: number; w: number } | null = null;
    tl.ev(17450, () => {
      const r = rectOf("card-carla");
      if (!r) return;
      grab = { x: r.x, y: r.y, w: r.w };
      setBox(grab);
      setUi((s) => ({ ...s, drag: true, hover: null, curDown: true }));
    });

    let dFrom = { x: 0, y: 0 };
    let dTo = { x: 0, y: 0 };
    let cStart: Pt = { x: 0, y: 0 };
    let prevX = 0;
    let gapOpen = false;
    tl.tween(
      17600,
      1750,
      (p) => {
        const f = floatRef.current;
        if (!f || !grab) return;
        const e = easeInOutCubic(p);
        const pos = arc(dFrom, dTo, e, -0.22);
        const lift = easeOutCubic(clamp(p / 0.1));
        const settle = clamp((p - 0.9) / 0.1);
        const scale = 1 + 0.035 * lift * (1 - settle * 0.6);
        const vx = pos.x - prevX;
        prevX = pos.x;
        const rot = clamp(vx * 0.22, -3.2, 3.2) * lift * (1 - settle);
        f.style.transform = `translate3d(${pos.x.toFixed(1)}px,${pos.y.toFixed(1)}px,0) rotate(${rot.toFixed(2)}deg) scale(${scale.toFixed(4)})`;
        place({ x: cStart.x + pos.x, y: cStart.y + pos.y });
        if (!gapOpen && p > 0.55) {
          gapOpen = true;
          patch({ gap: true });
        }
        if (p >= 1) {
          setBox(null);
          setUi((s) => ({ ...s, cardCol: "fechado", drag: false, gap: false, landed: true, curDown: false }));
        }
      },
      () => {
        if (!grab) return;
        const slot = rectOf("slot-fechado");
        cStart = { ...cur };
        dFrom = { x: 0, y: 0 };
        dTo = slot ? { x: slot.x - grab.x, y: slot.y - grab.y } : { x: 300, y: 0 };
        prevX = 0;
        gapOpen = false;
      },
    );
    tl.ev(18700, () => patch({ step: 4 }));

    /* ── 5 · pagamento aprovado ── */
    tl.ev(19700, () => patch({ toast: "in", paid: true, step: 5 }));
    move(19900, 900, "col-fechado", 0.78, 0.8, 0.12);
    tl.ev(20800, () => show(false));
    tl.ev(22500, () => patch({ toast: "out" }));
    tl.ev(22900, () => patch({ toast: false }));

    /* volta suave pro primeiro quadro */
    tl.ev(23300, () => {
      setBox(null);
      setUi((s) => ({ ...S0, loop: s.loop + 1 }));
    });
    tl.end = LOOP_END;

    /* ── relógio ── */
    let raf = 0;
    let last = 0;
    let t = 0;
    let visible = false;
    let started = false;

    const frame = (now: number) => {
      const dt = Math.min(now - last, 48);
      last = now;
      if (stage.dataset.hdPause !== "1") t += dt;
      tl.run(t);
      if (t >= tl.end) {
        t = 0;
        tl.reset();
        show(false);
      }
      raf = requestAnimationFrame(frame);
    };
    const resume = () => {
      if (!started || !visible || document.visibilityState === "hidden" || raf) return;
      last = performance.now();
      raf = requestAnimationFrame(frame);
    };
    const halt = () => {
      cancelAnimationFrame(raf);
      raf = 0;
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) resume();
        else halt();
      },
      { threshold: 0.2 },
    );
    io.observe(stage);

    const onVis = () => (document.visibilityState === "hidden" ? halt() : resume());
    document.addEventListener("visibilitychange", onVis);

    /* só começa depois da hidratação, quando o navegador estiver ocioso */
    const begin = () => {
      arm();
      started = true;
      resume();
    };
    let idleId = 0;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    const ric = (window as Window & { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number }).requestIdleCallback;
    if (ric) idleId = ric.call(window, begin, { timeout: 1800 });
    else timeoutId = setTimeout(begin, 900);

    return () => {
      halt();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
      if (idleId) (window as Window & { cancelIdleCallback?: (id: number) => void }).cancelIdleCallback?.(idleId);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [patch]);

  /* ─── derivados ─── */
  const carla = ui.conv === "carla";
  const kanban = ui.view === "kanban";
  const thread: Msg[] = carla ? CARLA_THREAD.slice(0, ui.carlaMsgs) : PAULO_THREAD;

  const negTotal = sum(K_NEG_BEFORE) + sum(K_NEG_AFTER) + (ui.cardCol === "neg" ? PRICE : 0);
  const fechadoTotal = sum(K_FECHADO) + (ui.cardCol === "fechado" ? PRICE : 0);
  const negCount = K_NEG_BEFORE.length + K_NEG_AFTER.length + (ui.cardCol === "neg" ? 1 : 0);
  const fechadoCount = K_FECHADO.length + (ui.cardCol === "fechado" ? 1 : 0);

  const attendant = !carla ? { name: "Ana", ai: true } : ui.transferred ? { name: "Bruno · Vendas", ai: false } : { name: "Ana", ai: true };
  const chatLabel = !carla ? "Cliente" : ui.transferred ? "Vendas" : "Novo contato";

  const reentry = ui.loop > 0 && ui.step === 0 ? "hd-fade" : "";
  const inboxCls = kanban ? "hidden" : ui.view === "inbox" ? `flex ${reentry}` : "hidden lg:flex";
  const chatCls = kanban ? "hidden" : ui.view === "inbox" ? `hidden lg:flex ${reentry}` : "flex hd-pane-m";

  const press = (k: string) => (ui.pressed === k ? "scale-[0.97]" : "");

  return (
    <div
      ref={stageRef}
      data-demo-step={ui.step}
      data-demo-view={ui.view}
      className="hd-stage relative flex h-full select-none flex-col overflow-hidden bg-[#FAFAFA] text-left text-[#0F172A] lg:flex-row"
      {...({ inert: "" } as Record<string, string>)}
    >
      {/* barra de status do celular */}
      <div className="flex shrink-0 items-center justify-between bg-white px-6 pb-1 pt-3 text-[11px] font-bold text-[#0F172A] lg:hidden">
        <span>14:32</span>
        <span className="flex items-center gap-1 text-[#0F172A]">
          <Signal className="h-3 w-3" strokeWidth={2.6} />
          <Wifi className="h-3 w-3" strokeWidth={2.6} />
          <BatteryFull className="h-3.5 w-3.5" strokeWidth={2.2} />
        </span>
      </div>

      {/* ── trilho de navegação (menu recolhido) ── */}
      <nav className="relative z-30 hidden w-[60px] shrink-0 flex-col items-center gap-1 border-r border-[#E5E7EB] bg-white py-3 lg:flex">
        <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-xl bg-[#0F172A]">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
            <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v7a2.5 2.5 0 0 1-2.5 2.5H11l-4 3.5V16h-.5A2.5 2.5 0 0 1 4 13.5v-7Z" fill="#17C75A" />
            <circle cx="9" cy="10" r="1.1" fill="#0F172A" />
            <circle cx="12" cy="10" r="1.1" fill="#0F172A" />
            <circle cx="15" cy="10" r="1.1" fill="#0F172A" />
          </svg>
        </div>
        <RailItem icon={<Bell className="h-[18px] w-[18px]" />} label="Notificações" />
        <RailItem icon={<LayoutDashboard className="h-[18px] w-[18px]" />} label="Dashboard" />
        <RailItem icon={<MessageSquareText className="h-[18px] w-[18px]" />} label="Bate Papo ao vivo" active={!kanban} dot={ui.carlaIn && !ui.carlaRead} />
        <RailItem
          icon={<SquareKanban className="h-[18px] w-[18px]" />}
          label="Kanban's"
          active={kanban}
          target="nav-kanban"
          hovered={ui.hover === "nav-kanban"}
          pressed={ui.pressed === "nav-kanban"}
        />
        <RailItem icon={<Bot className="h-[18px] w-[18px]" />} label="Assistentes IA" />
        <RailItem icon={<Workflow className="h-[18px] w-[18px]" />} label="Fluxos de Conversa" />
        <RailItem icon={<Radio className="h-[18px] w-[18px]" />} label="Transmissão" />
        <RailItem icon={<BookOpen className="h-[18px] w-[18px]" />} label="Base de conhecimento" />
      </nav>

      {/* ── corpo ── */}
      <div className="relative flex min-h-0 min-w-0 flex-1">
        {/* caixa de atendimento */}
        <aside className={`${inboxCls} min-h-0 w-full shrink-0 flex-col border-[#E5E7EB] bg-white lg:w-[316px] lg:border-r`}>
          <div className="shrink-0 border-b border-[#E5E7EB] px-3 pb-2 pt-2.5">
            <div className="mb-2 flex items-center justify-between px-0.5">
              <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#94A3B8]">Caixa de atendimento</span>
              <span className="inline-flex items-center gap-1 rounded-full bg-[#DCFCE7] px-2 py-0.5 text-[10px] font-bold text-[#15803D]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#17C75A]" />
                ao vivo
              </span>
            </div>
            <div className="flex items-center gap-1">
              <div className="flex min-w-0 flex-1 items-center gap-0.5 whitespace-nowrap text-[11px] font-semibold">
                <span className="flex items-center gap-1 rounded-full bg-[#0F172A] px-2 py-1 text-white">
                  Atendente
                  <span className="inline-flex h-[14px] min-w-[14px] items-center justify-center rounded-full bg-white px-1 text-[9px] font-bold text-[#0F172A]">
                    {ui.carlaIn ? 7 : 6}
                  </span>
                </span>
                <span className="flex items-center gap-1 rounded-full px-1.5 py-1 text-[#64748B]">
                  Aguardando
                  <span className="inline-flex h-[14px] min-w-[14px] items-center justify-center rounded-full bg-[#F1F5F9] px-1 text-[9px] font-bold text-[#64748B]">3</span>
                </span>
                <span className="rounded-full px-1.5 py-1 text-[#64748B]">Resolvidos</span>
              </div>
              <MoreVertical className="h-4 w-4 shrink-0 text-[#64748B]" />
            </div>
          </div>

          <div className="shrink-0 px-3 pb-1.5 pt-2.5">
            <div className="flex items-center gap-2 rounded-lg border border-[#E2E8F0] bg-white px-3 py-1.5">
              <span className="flex-1 truncate text-[11px] text-[#94A3B8]">Encontre conversas</span>
              <Search className="h-3.5 w-3.5 text-[#94A3B8]" strokeWidth={2.2} />
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-3 px-3 pb-1.5 pt-1 text-[#64748B]">
            <Tag className="h-4 w-4" />
            <UserRound className="h-4 w-4" />
            <Filter className="h-4 w-4" />
          </div>

          <div className="min-h-0 flex-1 overflow-hidden">
            {/* contato novo: abre espaço no topo da lista */}
            <div className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${ui.carlaIn ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
              <div className="min-h-0 overflow-hidden">
                <ConvRow
                  target="inbox-carla"
                  name={CARLA.name}
                  initials={CARLA.initials}
                  tone={CARLA.tone}
                  label={ui.transferred ? "Vendas" : "Novo contato"}
                  by={CARLA_PREVIEW[ui.carlaMsgs]?.by}
                  preview={CARLA_PREVIEW[ui.carlaMsgs]?.text || CARLA_PREVIEW[1].text}
                  time="agora"
                  unread={ui.carlaIn && !ui.carlaRead ? 1 : 0}
                  selected={carla && !kanban}
                  hovered={ui.hover === "inbox-carla"}
                  pressed={ui.pressed === "inbox-carla"}
                  flash={ui.carlaIn && !ui.carlaRead}
                />
              </div>
            </div>
            {CONTACTS.map((c) => (
              <ConvRow
                key={c.id}
                name={c.name}
                initials={c.initials}
                tone={c.tone}
                label={c.label}
                by={c.by}
                preview={c.preview}
                time={c.time}
                unread={c.unread ?? 0}
                selected={c.id === "paulo" && !carla}
              />
            ))}
          </div>
        </aside>

        {/* conversa */}
        <section className={`${chatCls} relative min-h-0 min-w-0 flex-1 flex-col bg-[#FAFAFA]`}>
          {/* cabeçalho */}
          <div className="shrink-0 border-b border-[#E2E8F0] bg-white">
            <div className="flex items-center justify-between gap-2 px-3 py-2.5 lg:px-4 lg:py-3">
              <div className="flex min-w-0 items-center gap-2.5">
                <ArrowLeft className="h-4 w-4 shrink-0 text-[#64748B] lg:hidden" />
                <Fx key={ui.conv} className="flex min-w-0 items-center gap-2.5">
                  <Avatar initials={carla ? CARLA.initials : "PN"} tone={carla ? CARLA.tone : "teal"} size="lg" />
                  <div className="flex min-w-0 flex-col gap-[3px]">
                    <div className="flex items-center gap-2">
                      <span className="truncate text-[14px] font-semibold">{carla ? CARLA.name : "Paulo Nogueira"}</span>
                      <span className="whitespace-nowrap rounded bg-[#F1F5F9] px-1.5 py-0.5 text-[10px] font-medium text-[#64748B] ring-1 ring-[#E2E8F0] max-lg:hidden">{chatLabel}</span>
                    </div>
                    <p className="flex items-center gap-1 text-[11px] text-[#64748B]">
                      Atendente:
                      <Fx as="span" key={attendant.name} className="inline-flex items-center gap-1 font-semibold text-[#334155]">
                        {attendant.name}
                        {attendant.ai ? <AiChip /> : null}
                      </Fx>
                    </p>
                  </div>
                </Fx>
              </div>
              <div className="flex shrink-0 items-center gap-1.5 lg:gap-2">
                <span className="hidden h-8 w-8 items-center justify-center rounded-lg border border-[#E2E8F0] bg-white text-[#64748B] min-[520px]:inline-flex">
                  <Undo2 className="h-3.5 w-3.5" />
                </span>
                <span className="hidden h-8 w-8 items-center justify-center rounded-lg bg-white text-[#64748B] ring-1 ring-[#E2E8F0] lg:inline-flex">
                  <Zap className="h-4 w-4" />
                </span>
                <span className="flex h-8 w-10 items-center justify-center rounded-lg bg-[#17C75A] shadow-[0_10px_28px_rgba(23,199,90,0.22)]">
                  <Check className="h-4 w-4 text-white" strokeWidth={3} />
                </span>
                <MoreVertical className="hidden h-4 w-4 text-[#64748B] min-[360px]:block" />
              </div>
            </div>
          </div>

          {/* etiquetas */}
          <div className="relative flex shrink-0 items-center gap-2 border-b border-[#E2E8F0] bg-white px-3 py-2 lg:px-4">
            <span className="text-[11px] font-semibold text-[#94A3B8]">Tags</span>
            <span className="h-3.5 w-px bg-[#E2E8F0]" />
            {carla ? (
              <>
                <span className="rounded-xl bg-[#F0F9FF] px-3 py-1 text-[11px] font-semibold text-[#0369A1] ring-1 ring-[#BAE6FD]">Novo contato</span>
                {ui.hot ? (
                  <span className="relative">
                    <span className="hd-pop block rounded-xl bg-[#ECFDF5] px-3 py-1 text-[11px] font-semibold text-[#15803D] ring-1 ring-[#BBF7D0]">Lead quente</span>
                    {ui.hotTip ? (
                      <span className="hd-tip pointer-events-none absolute top-[calc(100%+6px)] z-20 flex max-lg:right-0 lg:left-1/2 lg:-translate-x-1/2 items-center gap-1 whitespace-nowrap rounded-md bg-[#0F172A] px-2 py-1 text-[10px] font-semibold text-white shadow-lg">
                        <Bot className="h-3 w-3 text-[#17C75A]" />
                        Etiqueta adicionada pela Ana
                      </span>
                    ) : null}
                  </span>
                ) : null}
              </>
            ) : (
              <>
                <span className="rounded-xl bg-[#ECFDF5] px-3 py-1 text-[11px] font-semibold text-[#15803D] ring-1 ring-[#BBF7D0]">Cliente</span>
                <span className="hidden rounded-xl bg-[#F8FAFC] px-3 py-1 text-[11px] font-semibold text-[#64748B] ring-1 ring-[#E2E8F0] min-[400px]:inline">Entrega sábado</span>
              </>
            )}
          </div>

          {/* mensagens */}
          <div ref={scrollRef} data-t="msgs" className="min-h-0 flex-1 space-y-2.5 overflow-hidden scroll-smooth px-3 py-3 lg:px-4 lg:py-4">
            <div className="flex justify-center">
              <span className="rounded-full bg-white px-3 py-1 text-[10px] font-semibold text-[#64748B] ring-1 ring-[#E2E8F0]">Hoje</span>
            </div>
            <Fx key={ui.conv} className="space-y-2.5">
              {thread.map((m) => (
                <MessageView key={m.id} m={m} pressed={ui.pressed === "qr-pay"} />
              ))}
              {ui.aiTyping ? <TypingBubble /> : null}
            </Fx>
          </div>

          {/* compositor */}
          <div className="relative shrink-0 bg-white px-3 pb-3 pt-2.5 lg:px-4 lg:pb-4">
            {ui.menu ? (
              <div className="hd-menu absolute bottom-[calc(100%-4px)] left-3 right-3 z-30 overflow-hidden rounded-xl bg-white py-1.5 shadow-[0_18px_40px_rgba(15,23,42,0.22)] ring-1 ring-[#E5E7EB] lg:left-4 lg:right-auto lg:w-[340px]">
                <p className="px-3 pb-1 pt-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#94A3B8]">Respostas rápidas</p>
                {QUICK_REPLIES.map((q) => (
                  <div
                    key={q.key}
                    data-t={`qr-${q.key}`}
                    className={`mx-1.5 flex items-center justify-between gap-3 rounded-lg px-2.5 py-2 transition-[background-color,transform] duration-150 ${
                      ui.hover === `qr-${q.key}` ? "bg-[#ECFDF5]" : ""
                    } ${press(`qr-${q.key}`)}`}
                  >
                    <span className="flex min-w-0 items-center gap-2 text-[12px] font-semibold text-[#111827]">
                      <Zap className={`h-3.5 w-3.5 shrink-0 ${ui.hover === `qr-${q.key}` ? "text-[#17C75A]" : "text-[#94A3B8]"}`} />
                      <span className="truncate">{q.title}</span>
                    </span>
                    <span className="rounded bg-[#F1F5F9] px-1.5 py-0.5 font-mono text-[10px] text-[#64748B]">{q.code}</span>
                  </div>
                ))}
              </div>
            ) : null}

            <div className="rounded-lg border border-[#E2E8F0] bg-white">
              <div className="flex min-h-[34px] items-center px-3 py-2 text-[12px]">
                {ui.input ? (
                  <span className="text-[#0F172A]">
                    {ui.input}
                    <span className="hd-caret ml-px inline-block h-[14px] w-px translate-y-[2px] bg-[#0F172A]" />
                  </span>
                ) : (
                  <span className="truncate text-[#94A3B8]">
                    <span className="lg:hidden">Escreva uma mensagem...</span>
                    <span className="hidden lg:inline">Comece a escrever uma mensagem. Coloque / para acessar os atalhos</span>
                  </span>
                )}
              </div>
              <div className="flex items-center justify-between border-t border-[#EEF2F6] px-3 py-1.5">
                <div className="flex items-center gap-3 text-[#64748B] lg:gap-4">
                  <Smile className="h-[18px] w-[18px]" />
                  <Paperclip className="h-[18px] w-[18px]" />
                  <span className="rounded-md bg-[#D9FDD3] p-1">
                    <Signature className="h-[16px] w-[16px] text-[#16A34A]" />
                  </span>
                  <CircleStop className="hidden h-[18px] w-[18px] min-[360px]:block" />
                  <Zap className={`h-[18px] w-[18px] transition-colors ${ui.menu ? "text-[#17C75A]" : ""}`} />
                </div>
                <span
                  className={`flex h-8 items-center justify-center gap-1.5 rounded-lg px-3 text-[12px] font-semibold transition-colors lg:px-4 ${
                    ui.input.length > 1 ? "bg-[#17C75A] text-white" : "bg-[#E2E8F0] text-[#64748B]"
                  }`}
                >
                  <ArrowUp className="h-3.5 w-3.5" strokeWidth={3} />
                  Enviar
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* dados do contato */}
        <aside className={`${kanban ? "hidden" : `hidden xl:flex ${reentry}`} w-[296px] shrink-0 flex-col border-l border-[#E5E7EB] bg-[#F7F8FA] px-3 py-3`}>
          <div className="flex items-center justify-between text-[#6B7280]">
            <div className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#111827]">
              <X className="h-3.5 w-3.5 text-[#6B7280]" />
              Dados do contato
            </div>
            <Pencil className="h-3.5 w-3.5" />
          </div>
          <Fx key={ui.conv} className="mt-3 flex flex-col items-center gap-1.5">
            <Avatar initials={carla ? CARLA.initials : "PN"} tone={carla ? CARLA.tone : "teal"} size="xl" />
            <p className="text-[14px] font-semibold">{carla ? CARLA.name : "Paulo Nogueira"}</p>
            <p className="text-[10px] text-[#8A94A6]">{carla ? "Criado agora" : "Criado há 3 meses"}</p>
          </Fx>
          <div className="mt-4 space-y-2.5">
            <InfoRow icon={<Phone className="h-3.5 w-3.5" />} label="Canal" value="WhatsApp" />
            <InfoRow icon={<CalendarClock className="h-3.5 w-3.5" />} label="Criado" value={carla ? "agora" : "há 3 meses"} />
            <InfoRow icon={<FileIcon className="h-3.5 w-3.5" />} label="Etiqueta" value={!carla ? "Cliente" : ui.hot ? "Lead quente" : "Novo contato"} flash={carla && ui.hot} />
            <InfoRow icon={<Bot className="h-3.5 w-3.5" />} label="Atendente" value={attendant.name} />
          </div>
          <div className="mt-3 space-y-2.5">
            <Block title="Fluxos" />
            <div className="rounded-xl bg-[#ECECEF] px-3 py-2.5">
              <div className="flex items-center justify-between text-[13px] font-semibold text-[#4B5563]">
                Remarketing
                <ChevronDown className="h-4 w-4 text-[#94A3B8]" />
              </div>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-[11px] text-[#7B8794]">Nenhum selecionado</span>
                <div className="inline-flex items-center gap-2 text-[#6B7280]">
                  <CircleStop className="h-4 w-4" />
                  <List className="h-4 w-4" />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between rounded-xl bg-[#ECECEF] px-3 py-2.5">
              <span className="text-[13px] font-semibold text-[#4B5563]">Observações</span>
              <div className="inline-flex items-center gap-2 text-[#6B7280]">
                <span className="text-[12px] font-semibold">0</span>
                <Plus className="h-4 w-4" />
              </div>
            </div>
            <Block title="Outras informações" />
          </div>
        </aside>

        {/* kanban */}
        <section className={`${kanban ? "flex" : "hidden"} hd-pane absolute inset-0 min-w-0 flex-col bg-white`}>
          <div className="flex shrink-0 items-center justify-between gap-3 px-3 pb-2 pt-3 lg:px-5 lg:pt-4">
            <div className="flex min-w-0 items-center gap-2">
              <ChevronLeft className="h-4 w-4 shrink-0 text-[#0F172A]" strokeWidth={2.6} />
              <span className="truncate font-[family-name:var(--font-display)] text-[18px] font-bold tracking-tight lg:text-[20px]">Vendas</span>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <span className="hidden items-center gap-1.5 rounded-lg bg-[#0F172A] px-3 py-1.5 text-[11px] font-bold text-white lg:inline-flex">
                <SquareKanban className="h-3.5 w-3.5" />
                Criar coluna
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-[#0F172A] px-2.5 py-1.5 text-[11px] font-bold text-white lg:px-3">
                <Plus className="h-3.5 w-3.5" />
                Criar cartão
              </span>
            </div>
          </div>
          <div className="flex shrink-0 items-center px-3 pb-3 lg:px-5">
            <div className="flex w-full items-center gap-2 rounded-lg border border-[#E2E8F0] bg-white px-3 py-1.5 lg:w-[260px]">
              <Search className="h-3.5 w-3.5 text-[#94A3B8]" />
              <span className="text-[11px] text-[#94A3B8]">Procure por nome</span>
            </div>
          </div>

          <div className="flex min-h-0 flex-1 gap-2.5 overflow-hidden px-3 pb-3 lg:gap-3 lg:px-5 lg:pb-4">
            <Column title="Lead novo" bar="#3B82F6" total={sum(K_LEAD)} count={K_LEAD.length} cls="hidden lg:flex">
              {K_LEAD.map((c) => (
                <KCardView key={c.id} card={c} />
              ))}
            </Column>

            <Column title="Negociação" bar="#F59E0B" total={negTotal} count={negCount}>
              {K_NEG_BEFORE.map((c) => (
                <KCardView key={c.id} card={c} />
              ))}
              {ui.cardCol === "neg" ? (
                <div className={`grid transition-[grid-template-rows,opacity,margin] duration-300 ease-out ${ui.drag ? "-mb-2 grid-rows-[0fr] opacity-0" : "grid-rows-[1fr]"}`}>
                  <div className="min-h-0 overflow-hidden">
                    <div data-t="card-carla" className="transition-transform duration-150">
                      <KCardView card={K_CARLA} hover={ui.hover === "card-carla"} />
                    </div>
                  </div>
                </div>
              ) : null}
              {K_NEG_AFTER.map((c) => (
                <KCardView key={c.id} card={c} />
              ))}
            </Column>

            <Column title="Fechado" bar="#17C75A" total={fechadoTotal} count={fechadoCount} animatedTotal highlight={ui.gap} target="col-fechado">
              <div data-t="slot-fechado" className={`grid transition-[grid-template-rows,margin] duration-300 ease-out ${ui.gap || ui.cardCol === "fechado" ? "grid-rows-[1fr]" : "-mb-2 grid-rows-[0fr]"}`}>
                <div className="min-h-0 overflow-hidden">
                  {ui.cardCol === "fechado" ? (
                    <KCardView card={K_CARLA} paid={ui.paid} landed={ui.landed} />
                  ) : (
                    <div className="rounded-xl border-2 border-dashed border-[#17C75A]/50 bg-[#17C75A]/[0.06]">
                      <div className="invisible">
                        <KCardView card={K_CARLA} />
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {K_FECHADO.map((c) => (
                <KCardView key={c.id} card={c} paid={false} />
              ))}
            </Column>

            <Column title="Perdido" bar="#94A3B8" total={sum(K_PERDIDO)} count={K_PERDIDO.length} cls="hidden lg:flex">
              {K_PERDIDO.map((c) => (
                <KCardView key={c.id} card={c} />
              ))}
            </Column>
          </div>
        </section>
      </div>

      {/* navegação do celular */}
      <nav className="relative z-30 flex shrink-0 items-center justify-around border-t border-[#E5E7EB] bg-white px-4 pb-4 pt-2 lg:hidden">
        <TabItem icon={<MessageSquareText className="h-5 w-5" />} label="Conversas" active={!kanban} dot={ui.carlaIn && !ui.carlaRead} />
        <TabItem icon={<SquareKanban className="h-5 w-5" />} label="Kanban" active={kanban} target="nav-kanban" pressed={ui.pressed === "nav-kanban"} />
        <TabItem icon={<Bot className="h-5 w-5" />} label="Assistentes" />
        <TabItem icon={<Workflow className="h-5 w-5" />} label="Fluxos" />
      </nav>

      {/* card sendo arrastado */}
      {box ? (
        <div ref={floatRef} className="pointer-events-none absolute left-0 top-0 z-40 will-change-transform" style={{ left: box.x, top: box.y, width: box.w }}>
          <KCardView card={K_CARLA} lifted />
        </div>
      ) : null}

      {/* aviso de pagamento (webhook) */}
      {ui.toast ? (
        <div
          className={`${ui.toast === "in" ? "hd-toast-in" : "hd-toast-out"} pointer-events-none absolute left-3 right-3 top-12 z-50 lg:left-auto lg:right-5 lg:top-5 lg:w-[372px]`}
        >
          <div className="flex items-center gap-3 rounded-xl bg-[#0F172A] px-3.5 py-3 shadow-[0_20px_44px_rgba(15,23,42,0.35)] ring-1 ring-white/10">
            <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#17C75A]">
              <span className="hd-ping absolute inset-0 rounded-full bg-[#17C75A]" />
              <Check className="relative h-4 w-4 text-white" strokeWidth={3.2} />
            </span>
            <div className="min-w-0 flex-1 leading-tight">
              <p className="whitespace-nowrap text-[13px] font-bold text-white max-lg:text-[12px]">Pagamento aprovado · {brl(PRICE)}</p>
              <p className="mt-0.5 truncate text-[11px] text-slate-300">Kit Premium · Carla Mendes</p>
            </div>
            <span className="shrink-0 rounded-md bg-white/10 px-1.5 py-1 text-[9px] font-bold uppercase tracking-wider text-slate-200 max-lg:hidden">webhook</span>
          </div>
        </div>
      ) : null}

      {/* ponteiro */}
      <div ref={cursorRef} className="hd-cursor pointer-events-none absolute left-0 top-0 z-[60] opacity-0 transition-opacity duration-300">
        {ui.rip > 0 ? <span key={ui.rip} className="hd-ripple absolute left-0 top-0 h-9 w-9 rounded-full bg-[#17C75A]/40" /> : null}
        <svg width="20" height="24" viewBox="0 0 16 20" fill="none" className={`hidden origin-top-left drop-shadow-[0_2px_3px_rgba(15,23,42,0.35)] transition-transform duration-100 lg:block ${ui.curDown ? "scale-90" : ""}`}>
          <path d="M1.5 1l12 7.5-5 1.5-2.5 5.5L1.5 1z" fill="#0F172A" stroke="#fff" strokeWidth="1.3" strokeLinejoin="round" />
        </svg>
        <span className={`absolute -left-3.5 -top-3.5 block h-7 w-7 rounded-full bg-[#0F172A]/25 ring-2 ring-white/90 transition-transform duration-100 lg:hidden ${ui.curDown ? "scale-75" : ""}`} />
      </div>
    </div>
  );
}

/* ───────────────────────── peças de tela ───────────────────────── */
function MessageView({ m, pressed }: { m: Msg; pressed: boolean }) {
  if (m.kind === "customer") return <CustomerBubble text={m.text} time={m.time} />;
  if (m.kind === "ai") return <SentBubble who="Ana" ai text={m.text} time={m.time} />;
  if (m.kind === "system")
    return (
      <SystemPill>
        <ArrowRightLeft className="h-3 w-3 text-[#17C75A]" strokeWidth={2.6} />
        {m.text}
      </SystemPill>
    );
  return (
    <SentBubble who="Bruno" text={m.text} time={m.time}>
      {m.payment ? <PaymentCard pressed={pressed} /> : null}
    </SentBubble>
  );
}

function ConvRow({
  name,
  initials,
  tone,
  label,
  by,
  preview,
  time,
  unread,
  selected,
  hovered,
  pressed,
  flash,
  target,
}: {
  name: string;
  initials: string;
  tone: keyof typeof AVATAR_BG;
  label: string;
  by?: string;
  preview: string;
  time: string;
  unread: number;
  selected?: boolean;
  hovered?: boolean;
  pressed?: boolean;
  flash?: boolean;
  target?: string;
}) {
  return (
    <div
      data-t={target}
      className={`flex w-full items-center gap-2.5 px-3 py-2.5 transition-[background-color,transform] duration-150 ${
        selected ? "bg-[#F1F5F9] ring-1 ring-inset ring-[#E2E8F0]" : hovered ? "bg-[#F8FAFC]" : ""
      } ${pressed ? "scale-[0.985]" : ""} ${flash && !hovered ? "hd-flash" : ""}`}
    >
      <Avatar initials={initials} tone={tone} />
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <div className="flex min-w-0 items-center justify-between gap-2">
          <span className="truncate text-[12px] font-semibold">{name}</span>
          <span className="shrink-0 rounded-md bg-[#F1F5F9] px-1.5 py-0.5 text-[9px] font-medium text-[#64748B]">{label}</span>
        </div>
        <div className="flex min-w-0 items-center justify-between gap-2">
          <span className="min-w-0 truncate text-[11px] text-[#64748B]">
            {by ? <span className="font-semibold text-[#17C75A]">{by}: </span> : null}
            {preview}
          </span>
          <div className="flex shrink-0 items-center gap-1">
            <span className="text-[10px] text-[#94A3B8]">{time}</span>
            <History className="h-3 w-3 text-[#CBD5E1]" />
            {unread ? (
              <Pop key={unread} className="inline-flex h-4 min-w-[16px] items-center justify-center rounded-md bg-[#EF4444] px-1 text-[9px] font-bold text-white">
                {unread}
              </Pop>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

function RailItem({
  icon,
  label,
  active,
  dot,
  target,
  hovered,
  pressed,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  dot?: boolean;
  target?: string;
  hovered?: boolean;
  pressed?: boolean;
}) {
  return (
    <div className="relative">
      <div
        data-t={target}
        className={`relative flex h-9 w-9 items-center justify-center rounded-lg transition-[background-color,transform,color] duration-150 ${
          active ? "bg-[#F1F5F9] text-[#0F172A]" : hovered ? "bg-[#F8FAFC] text-[#0F172A]" : "text-[#64748B]"
        } ${pressed ? "scale-90" : ""}`}
      >
        {icon}
        {dot ? <span className="hd-pop absolute right-1 top-1 h-2 w-2 rounded-full bg-[#EF4444] ring-2 ring-white" /> : null}
      </div>
      {hovered ? (
        <span className="hd-tip pointer-events-none absolute left-[calc(100%+8px)] top-1/2 z-50 -translate-y-1/2 whitespace-nowrap rounded-md bg-[#0F172A] px-2 py-1 text-[11px] font-semibold text-white shadow-lg">
          {label}
        </span>
      ) : null}
    </div>
  );
}

function TabItem({
  icon,
  label,
  active,
  dot,
  target,
  pressed,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  dot?: boolean;
  target?: string;
  pressed?: boolean;
}) {
  return (
    <div data-t={target} className={`relative flex w-16 flex-col items-center gap-0.5 transition-transform duration-100 ${pressed ? "scale-90" : ""} ${active ? "text-[#0F172A]" : "text-[#94A3B8]"}`}>
      <span className={`flex h-7 w-12 items-center justify-center rounded-full transition-colors ${active ? "bg-[#E8F9EE] text-[#15803D]" : ""}`}>{icon}</span>
      <span className="text-[10px] font-semibold">{label}</span>
      {dot ? <span className="hd-pop absolute right-3 top-0 h-2 w-2 rounded-full bg-[#EF4444] ring-2 ring-white" /> : null}
    </div>
  );
}

function InfoRow({ icon, label, value, flash }: { icon: React.ReactNode; label: string; value: string; flash?: boolean }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="inline-flex items-center gap-1.5 text-[12px] text-[#64748B]">
        {icon}
        {label}
      </span>
      <Fx as="span" key={value} className={`text-[12px] ${flash ? "rounded bg-[#ECFDF5] px-1.5 py-0.5 font-semibold text-[#15803D]" : ""}`}>
        {value}
      </Fx>
    </div>
  );
}

function Block({ title }: { title: string }) {
  return (
    <div className="rounded-xl bg-[#ECECEF] px-3 py-2.5">
      <div className="flex items-center justify-between text-[13px] font-semibold text-[#4B5563]">
        {title}
        <ChevronDown className="h-4 w-4 text-[#94A3B8]" />
      </div>
    </div>
  );
}

function Column({
  title,
  bar,
  total,
  count,
  cls = "flex",
  animatedTotal,
  highlight,
  target,
  children,
}: {
  title: string;
  bar: string;
  total: number;
  count: number;
  cls?: string;
  animatedTotal?: boolean;
  highlight?: boolean;
  target?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      data-t={target}
      className={`${cls} min-w-0 flex-col rounded-2xl border bg-[#F4F5F7] p-2 transition-[border-color,background-color] duration-300 max-lg:w-[calc(50%-5px)] max-lg:flex-none lg:flex-1 ${
        highlight ? "border-[#17C75A]/60 bg-[#F0FBF4]" : "border-[#E5E7EB]"
      }`}
    >
      <div className="flex items-center justify-between gap-2 px-1 pb-2 pt-1">
        <div className="flex min-w-0 items-center gap-2">
          <span className="h-8 w-[3px] shrink-0 rounded-full" style={{ background: bar }} />
          <div className="min-w-0 leading-tight">
            <p className="truncate text-[12px] font-bold">{title}</p>
            <p className="text-[10px] text-[#64748B]">{animatedTotal ? <AnimatedMoney value={total} /> : brl(total)}</p>
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-1">
          <span className="flex h-6 min-w-6 items-center justify-center rounded-md bg-white px-1.5 text-[10px] font-bold ring-1 ring-[#E5E7EB]">{count}</span>
          <span className="hidden h-6 w-6 items-center justify-center rounded-md bg-white ring-1 ring-[#E5E7EB] min-[1100px]:flex">
            <Tag className="h-3 w-3 text-[#64748B]" />
          </span>
        </div>
      </div>
      <div className="flex min-h-0 flex-1 flex-col gap-2 overflow-hidden">{children}</div>
    </div>
  );
}
