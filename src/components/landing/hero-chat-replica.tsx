"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import {
  AtSign,
  ArrowUp,
  Check,
  CheckCheck,
  ChevronDown,
  ChevronRight,
  CircleStop,
  File,
  Instagram,
  Image as ImageIcon,
  LayoutGrid,
  List,
  MessageSquareMore,
  Mic,
  MoreVertical,
  Music2,
  Paperclip,
  PenOff,
  Pencil,
  Phone,
  Plus,
  Send,
  Signature,
  Smile,
  Undo2,
  Video,
  X,
  Zap,
} from "lucide-react";

/* ─── types ─── */
type MsgSender = "customer" | "agent" | "bot";

interface ChatMessage {
  id: number;
  sender: MsgSender;
  text?: string;
  rich?: "pedido-info" | "endereco-atualizado";
}

type MediaQuickAction = "grid" | "text" | "file" | "audio" | "image" | "video" | "chat";

type ScriptStep =
  | { action: "msg"; sender: MsgSender; text?: string; rich?: ChatMessage["rich"]; delay: number }
  | { action: "typing"; sender: "agent" | "bot"; duration: number }
  | { action: "wait"; quickReplies: string[]; pick: string; autoDelay: number };

/* ─── conversation script ─── */
/* Visitor = agent. Quick replies are agent responses (RIGHT). */
const SCRIPT: ScriptStep[] = [
  { action: "msg", sender: "customer", text: "Oi, quero saber do meu pedido", delay: 900 },
  { action: "wait", quickReplies: ["Qual o número do pedido?", "Olá! Como posso ajudar?", "Um momento..."], pick: "Qual o número do pedido?", autoDelay: 3200 },
  { action: "msg", sender: "customer", text: "#4521", delay: 1400 },
  { action: "typing", sender: "bot", duration: 1600 },
  { action: "msg", sender: "bot", rich: "pedido-info", delay: 0 },
  { action: "msg", sender: "customer", text: "Consigo trocar o endereço?", delay: 2200 },
  { action: "wait", quickReplies: ["Vou atualizar agora!", "Qual o novo endereço?", "Sem problemas!"], pick: "Vou atualizar agora!", autoDelay: 3200 },
  { action: "typing", sender: "bot", duration: 1200 },
  { action: "msg", sender: "bot", rich: "endereco-atualizado", delay: 0 },
  { action: "msg", sender: "customer", text: "Obrigado!", delay: 2000 },
  { action: "wait", quickReplies: ["Precisando, é só chamar! 😊", "Avalie nosso atendimento ⭐", "Bom dia!"], pick: "Precisando, é só chamar! 😊", autoDelay: 3200 },
];

/* ─── quick reply panel data ─── */
const FLOWS_LIST = [
  "Atendimento - boas vindas - Ju...",
  "integração",
  "Atendimento - boas vindas - co...",
  "Atendimento - boas vindas - co...",
  "Setup",
  "Aluguel - copy",
  "Relatório",
  "Distribuir vendedores",
  "Aluguel",
  "Empresa - incluído",
];

/* ─── helpers ─── */
function getTime() {
  const now = new Date();
  return `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
}

let msgId = 0;
function nextId() {
  return ++msgId;
}

/* ─── sub-components ─── */
function TypingDots({ sender }: { sender: MsgSender }) {
  const isCustomer = sender === "customer";
  return (
    <div className={`flex ${isCustomer ? "justify-start" : "justify-end"}`}>
      <div
        className={`flex items-center gap-1 rounded-[10px] px-4 py-2.5 ${
          isCustomer
            ? "rounded-bl-[2px] bg-white ring-1 ring-[#E2E8F0]"
            : "rounded-br-[2px] bg-[#F1FDD4]"
        }`}
      >
        <span className="typing-dot h-[6px] w-[6px] rounded-full bg-[#94A3B8]" style={{ animationDelay: "0ms" }} />
        <span className="typing-dot h-[6px] w-[6px] rounded-full bg-[#94A3B8]" style={{ animationDelay: "150ms" }} />
        <span className="typing-dot h-[6px] w-[6px] rounded-full bg-[#94A3B8]" style={{ animationDelay: "300ms" }} />
      </div>
    </div>
  );
}

function MessageBubble({ msg, time }: { msg: ChatMessage; time: string }) {
  const isCustomer = msg.sender === "customer";

  if (msg.rich === "pedido-info") {
    return (
      <div className="chat-msg flex justify-end">
        <div className="max-w-[85%] rounded-[10px] rounded-br-[2px] bg-[#F1FDD4] px-3 py-1.5 text-[10px] leading-[1.55] text-[#0F172A]">
          <p className="font-semibold">Pedido #4521</p>
          <p>- Status: Em transporte</p>
          <p>- Previsão: 18/04</p>
          <p>- Transportadora: Jadlog</p>
          <Timestamp time={time} sent />
        </div>
      </div>
    );
  }

  if (msg.rich === "endereco-atualizado") {
    return (
      <div className="chat-msg flex justify-end">
        <div className="max-w-[85%] rounded-[10px] rounded-br-[2px] bg-[#F1FDD4] px-3 py-1.5 text-[10px] leading-[1.55] text-[#0F172A]">
          <p className="font-semibold">Endereço atualizado!</p>
          <p>Novo endereço salvo com sucesso.</p>
          <p className="mt-0.5">Precisa de mais alguma coisa?</p>
          <Timestamp time={time} sent />
        </div>
      </div>
    );
  }

  if (isCustomer) {
    return (
      <div className="chat-msg flex justify-start">
        <div className="max-w-[70%] rounded-[10px] rounded-bl-[2px] bg-white px-3 py-1.5 text-[12px] text-[#0F172A] ring-1 ring-[#E2E8F0]">
          <span>{msg.text}</span>
          <Timestamp time={time} />
        </div>
      </div>
    );
  }

  return (
    <div className="chat-msg flex justify-end">
      <div className="max-w-[70%] rounded-[10px] rounded-br-[2px] bg-[#F1FDD4] px-3 py-1.5 text-[12px] text-[#0F172A]">
        <span>{msg.text}</span>
        <Timestamp time={time} sent />
      </div>
    </div>
  );
}

function Timestamp({ time, sent }: { time: string; sent?: boolean }) {
  return (
    <span className="ml-2 inline-flex shrink-0 items-center gap-1 text-[9px] text-[#94A3B8]">
      {time}
      {sent ? <CheckCheck className="h-3.5 w-3.5" /> : <Check className="h-3 w-3" />}
    </span>
  );
}

function ContactInfoRow({
  icon,
  label,
  value,
  mutedValue = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  mutedValue?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="inline-flex items-center gap-1.5 text-[12px] text-[#64748B]">
        {icon}
        {label}
      </span>
      <span className={`text-[12px] ${mutedValue ? "text-[#7B8794]" : "text-[#0F172A]"}`}>{value}</span>
    </div>
  );
}

function FlowNodeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <rect x="1.5" y="2" width="4" height="4" rx="0.6" stroke="currentColor" strokeWidth="1.3" />
      <rect x="1.5" y="10" width="4" height="4" rx="0.6" stroke="currentColor" strokeWidth="1.3" />
      <rect x="10.5" y="10" width="4" height="4" rx="0.6" stroke="currentColor" strokeWidth="1.3" />
      <path d="M5.5 4h3v8h2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ── Quick Reply Sidebar Panel ── */
function QuickReplyPanel({
  tab,
  onTabChange,
  onClose,
  messages,
  flows,
  onPickMessage,
  onPickFlow,
}: {
  tab: "mensagens" | "fluxos";
  onTabChange: (t: "mensagens" | "fluxos") => void;
  onClose: () => void;
  messages: string[];
  flows: string[];
  onPickMessage: (text: string) => void;
  onPickFlow: (text: string) => void;
}) {
  const [activeMedia, setActiveMedia] = useState<MediaQuickAction>("grid");

  const mediaBtnClass = (isActive: boolean) =>
    `inline-flex h-9 w-9 items-center justify-center rounded-[11px] border transition-colors ${
      isActive
        ? "border-[#17C75A] bg-[#17C75A] text-white"
        : "border-[#D0D4DA] bg-[#F7F8FA] text-[#111827] hover:bg-[#EEF1F5]"
    }`;

  const mediaItems: Record<MediaQuickAction, string[]> = {
    grid: messages.length > 0 ? messages : ["Teste"],
    text: ["Mensagem de boas-vindas", "Confirmação de pedido", "Retorno de suporte"],
    file: ["Contrato comercial.pdf", "Tabela de preços.xlsx", "Apresentação institucional.pptx"],
    audio: ["Áudio - Boas-vindas", "Áudio - Follow-up", "Áudio - Encerramento"],
    image: ["Imagem - Oferta da semana", "Imagem - Catálogo", "Imagem - Before/After"],
    video: ["Vídeo - Demonstração", "Vídeo - Prova social", "Vídeo - Tutorial rápido"],
    chat: ["Atalho - Primeiro contato", "Atalho - Recuperação", "Atalho - Fechamento"],
  };

  const currentItems = mediaItems[activeMedia];

  useEffect(() => {
    if (tab === "mensagens") {
      setActiveMedia("grid");
    }
  }, [tab]);

  const renderTemplateIcon = (media: MediaQuickAction) => {
    switch (media) {
      case "text":
        return <span className="text-[10px] font-semibold leading-none text-[#737373]">Tt</span>;
      case "file":
        return <File className="h-4 w-4 shrink-0 text-[#737373]" />;
      case "audio":
        return <Music2 className="h-4 w-4 shrink-0 text-[#737373]" strokeWidth={2.4} />;
      case "image":
      case "grid":
        return <ImageIcon className="h-4 w-4 shrink-0 text-[#737373]" />;
      case "video":
        return <Video className="h-4 w-4 shrink-0 text-[#737373]" />;
      case "chat":
        return <MessageSquareMore className="h-4 w-4 shrink-0 text-[#737373]" />;
      default:
        return <ImageIcon className="h-4 w-4 shrink-0 text-[#737373]" />;
    }
  };

  return (
    <div className="flex h-full flex-col bg-[#F7F8FA]">
      {/* Header */}
      <div className="border-b border-[#D6DBE1] px-3 pb-2 pt-3">
        <div className="flex items-center justify-between">
          <span className="text-[14px] font-semibold text-[#0F172A]">Iarley Silva</span>
          <div className="inline-flex items-center gap-3 text-[#525A67]">
            <PenOff className="h-4 w-4" />
            <button onClick={onClose} className="text-[#525A67]">
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
        <p className="mt-0.5 text-[10px] text-[#8A94A6]">Criado em 02/04/2026</p>
      </div>

      {/* Tabs */}
      <div className="mx-3 mt-4 flex overflow-hidden rounded-xl bg-[#D0D3D7] p-0.5">
        <button
          onClick={() => onTabChange("mensagens")}
          className={`flex-1 rounded-[10px] px-3 py-1.5 text-[12px] font-medium transition-colors ${
            tab === "mensagens" ? "bg-[#08090B] text-white" : "text-[#30343A]"
          }`}
        >
          Mensagens
        </button>
        <button
          onClick={() => onTabChange("fluxos")}
          className={`flex-1 rounded-[10px] px-3 py-1.5 text-[12px] font-medium transition-colors ${
            tab === "fluxos" ? "bg-[#08090B] text-white" : "text-[#30343A]"
          }`}
        >
          Fluxos
        </button>
      </div>

      {/* Content */}
      <div className="mt-4 min-h-0 flex-1 overflow-x-hidden overflow-y-auto px-3">
        {tab === "mensagens" ? (
          <div key="mensagens-pane">
            {/* Media type icons bar */}
            <div className="flex items-center gap-2 border-b border-[#D6DBE1] pb-3">
              <button
                type="button"
                onClick={() => setActiveMedia("grid")}
                className={mediaBtnClass(activeMedia === "grid")}
                aria-label="Formato grade"
              >
                <LayoutGrid className="h-4 w-4" strokeWidth={2.4} />
              </button>
              <button
                type="button"
                onClick={() => setActiveMedia("text")}
                className={mediaBtnClass(activeMedia === "text")}
                aria-label="Texto"
              >
                <span className="text-[14px] font-semibold leading-none">Tt</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveMedia("file")}
                className={mediaBtnClass(activeMedia === "file")}
                aria-label="Arquivo"
              >
                <File className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => setActiveMedia("audio")}
                className={mediaBtnClass(activeMedia === "audio")}
                aria-label="Áudio"
              >
                <Music2 className="h-4 w-4" strokeWidth={2.4} />
              </button>
              <button
                type="button"
                onClick={() => setActiveMedia("image")}
                className={mediaBtnClass(activeMedia === "image")}
                aria-label="Imagem"
              >
                <ImageIcon className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => setActiveMedia("video")}
                className={mediaBtnClass(activeMedia === "video")}
                aria-label="Vídeo"
              >
                <Video className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => setActiveMedia("chat")}
                className={mediaBtnClass(activeMedia === "chat")}
                aria-label="Mensagem"
              >
                <MessageSquareMore className="h-4 w-4" />
              </button>
            </div>

            {/* Message templates */}
            <div className="mt-2 space-y-1">
              {currentItems.map((msg, idx) => (
                <button
                  key={`${activeMedia}-${msg}`}
                  data-qr-idx={idx}
                  onClick={() => onPickMessage(msg)}
                  className="flex w-full items-center justify-between px-0.5 py-1.5 text-left"
                >
                  <span className="flex items-center gap-2 truncate text-[13px] font-semibold text-[#111827]">
                    {renderTemplateIcon(activeMedia)}
                    <span className="truncate">{msg}</span>
                  </span>
                  <Send className="h-4 w-4 shrink-0 text-[#777777]" strokeWidth={2.2} />
                </button>
              ))}
            </div>
          </div>
        ) : (
          /* Flows list */
          <div key="fluxos-pane" className="space-y-2">
            {flows.map((flow) => (
              <button
                key={flow}
                onClick={() => onPickFlow(flow)}
                className="flex w-full items-center justify-between px-0.5 py-1 text-left"
              >
                <span className="flex items-center gap-2 truncate text-[13px] font-semibold text-[#1D1F24]">
                  <FlowNodeIcon className="h-4 w-4 shrink-0 text-[#1D1F24]" />
                  <span className="truncate">{flow}</span>
                </span>
                <ChevronRight className="h-6 w-6 shrink-0 text-[#747474]" strokeWidth={3.1} />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── main component ─── */
export function HeroChatReplica() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [typing, setTyping] = useState<MsgSender | null>(null);
  const [quickReplies, setQuickReplies] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [inputEnabled, setInputEnabled] = useState(false);
  const [time] = useState(getTime);

  /* sidebar state */
  const [sidebarMode, setSidebarMode] = useState<"contact" | "quick-reply">("contact");
  const [qrTab, setQrTab] = useState<"mensagens" | "fluxos">("mensagens");

  /* cursor state */
  const containerRef = useRef<HTMLDivElement>(null);
  const [cursor, setCursor] = useState<{ x: number; y: number; clicking: boolean } | null>(null);
  const cursorTimersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const chatRef = useRef<HTMLDivElement>(null);
  const stepRef = useRef(0);
  const waitingRef = useRef(false);
  const autoTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const mountedRef = useRef(true);

  /* auto-scroll */
  const scrollToBottom = useCallback(() => {
    requestAnimationFrame(() => {
      if (chatRef.current) {
        chatRef.current.scrollTop = chatRef.current.scrollHeight;
      }
    });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, typing, scrollToBottom]);

  /* cursor helpers */
  const clearCursorTimers = useCallback(() => {
    cursorTimersRef.current.forEach(clearTimeout);
    cursorTimersRef.current = [];
  }, []);

  const moveCursorTo = useCallback((selector: string) => {
    if (!containerRef.current) return;
    const el = containerRef.current.querySelector(selector) as HTMLElement | null;
    if (!el) return;
    const cr = containerRef.current.getBoundingClientRect();
    const er = el.getBoundingClientRect();
    setCursor({
      x: er.left - cr.left + er.width * 0.6,
      y: er.top - cr.top + er.height * 0.5,
      clicking: false,
    });
  }, []);

  const doCursorClick = useCallback(() => {
    setCursor((prev) => (prev ? { ...prev, clicking: true } : null));
    const t = setTimeout(() => setCursor((prev) => (prev ? { ...prev, clicking: false } : null)), 400);
    cursorTimersRef.current.push(t);
  }, []);

  /* add message helper */
  const addMessage = useCallback((sender: MsgSender, text?: string, rich?: ChatMessage["rich"]) => {
    setMessages((prev) => [...prev, { id: nextId(), sender, text, rich }]);
  }, []);

  /* ref to hold processStep for cross-referencing with resetAndRestart */
  const processStepRef = useRef<() => void>(() => {});

  /* reset everything and restart loop */
  const resetAndRestart = useCallback(() => {
    if (!mountedRef.current) return;
    setMessages([]);
    setTyping(null);
    setQuickReplies([]);
    setInputValue("");
    setInputEnabled(false);
    setSidebarMode("contact");
    setQrTab("mensagens");
    setCursor(null);
    clearCursorTimers();
    stepRef.current = 0;
    waitingRef.current = false;
    if (autoTimerRef.current) {
      clearTimeout(autoTimerRef.current);
      autoTimerRef.current = null;
    }
    setTimeout(() => {
      if (mountedRef.current) processStepRef.current();
    }, 800);
  }, [clearCursorTimers]);

  /* process a single script step */
  const processStep = useCallback(() => {
    if (!mountedRef.current) return;
    const idx = stepRef.current;
    if (idx >= SCRIPT.length) {
      // Loop: wait 3s then restart
      setTimeout(() => resetAndRestart(), 3000);
      return;
    }

    const step = SCRIPT[idx];

    if (step.action === "msg") {
      setTimeout(() => {
        if (!mountedRef.current) return;
        addMessage(step.sender, step.text, step.rich);
        stepRef.current++;
        setTimeout(() => processStep(), 50);
      }, step.delay);
    } else if (step.action === "typing") {
      // Silent pause (no visual indicator)
      setTimeout(() => {
        if (!mountedRef.current) return;
        stepRef.current++;
        setTimeout(() => processStep(), 50);
      }, step.duration);
    } else if (step.action === "wait") {
      waitingRef.current = true;
      setQuickReplies(step.quickReplies);
      setInputEnabled(true);
      setSidebarMode("quick-reply");
      setQrTab("mensagens");

      const pickIdx = step.quickReplies.indexOf(step.pick);

      // Cursor: move to QR item
      const ct1 = setTimeout(() => {
        if (!mountedRef.current || !waitingRef.current) return;
        moveCursorTo(`[data-qr-idx="${pickIdx}"]`);
      }, step.autoDelay - 1400);

      // Cursor: click effect
      const ct2 = setTimeout(() => {
        if (!mountedRef.current || !waitingRef.current) return;
        doCursorClick();
      }, step.autoDelay - 600);

      cursorTimersRef.current.push(ct1, ct2);

      autoTimerRef.current = setTimeout(() => {
        if (!mountedRef.current || !waitingRef.current) return;
        setCursor(null);
        clearCursorTimers();
        handleAgentSend(step.pick);
      }, step.autoDelay);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addMessage, resetAndRestart, moveCursorTo, doCursorClick, clearCursorTimers]);

  // keep ref in sync
  processStepRef.current = processStep;

  /* handle agent sending (quick reply pick, typed, or auto-advance) — always RIGHT */
  const handleAgentSend = useCallback(
    (text: string) => {
      if (autoTimerRef.current) {
        clearTimeout(autoTimerRef.current);
        autoTimerRef.current = null;
      }
      setCursor(null);
      clearCursorTimers();
      waitingRef.current = false;
      setQuickReplies([]);
      setInputEnabled(false);
      setInputValue("");
      setSidebarMode("contact");

      addMessage("agent", text);
      stepRef.current++;
      setTimeout(() => processStep(), 600);
    },
    [addMessage, processStep, clearCursorTimers]
  );

  /* handle free-text after script ends — agent side (RIGHT) */
  const handleFreeInput = useCallback(
    (text: string) => {
      addMessage("agent", text);
      setInputValue("");
      setSidebarMode("contact");

      // Simulate customer responding
      setTyping("bot");
      setTimeout(() => {
        if (!mountedRef.current) return;
        setTyping(null);
        addMessage("customer", "Entendi, obrigado!");
        setTimeout(() => {
          if (!mountedRef.current) return;
          setQuickReplies(["Precisando, é só chamar!", "Avaliar atendimento ⭐", "Até mais!"]);
          setSidebarMode("quick-reply");
          setQrTab("mensagens");
        }, 600);
      }, 1400);
    },
    [addMessage]
  );

  /* send handler */
  const handleSend = useCallback(() => {
    const text = inputValue.trim();
    if (!text) return;

    if (waitingRef.current) {
      handleAgentSend(text);
    } else {
      handleFreeInput(text);
    }
  }, [inputValue, handleAgentSend, handleFreeInput]);

  /* pick from quick reply panel */
  const handlePanelPick = useCallback(
    (text: string) => {
      if (waitingRef.current) {
        handleAgentSend(text);
      } else {
        handleFreeInput(text);
      }
    },
    [handleAgentSend, handleFreeInput]
  );

  /* start script on mount */
  useEffect(() => {
    mountedRef.current = true;
    const timer = setTimeout(() => processStep(), 700);
    return () => {
      mountedRef.current = false;
      clearTimeout(timer);
      if (autoTimerRef.current) clearTimeout(autoTimerRef.current);
      clearCursorTimers();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={containerRef} className="relative flex h-full overflow-hidden bg-[#FAFAFA]">
      {/* ── Cursor overlay ── */}
      {cursor && (
        <div
          className="pointer-events-none absolute z-50 transition-all duration-500 ease-out"
          style={{ left: cursor.x, top: cursor.y }}
        >
          {cursor.clicking && (
            <span className="absolute left-0 top-0 h-6 w-6 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-primary/30" />
          )}
          <svg
            width="16"
            height="20"
            viewBox="0 0 16 20"
            fill="none"
            className="drop-shadow-md"
          >
            <path
              d="M1.5 1l12 7.5-5 1.5-2.5 5.5L1.5 1z"
              fill="white"
              stroke="#1e293b"
              strokeWidth="1.3"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}

      {/* ── Chat area ── */}
      <div className="flex min-w-0 flex-1 flex-col overflow-hidden bg-[#FAFAFA]">
        {/* Header */}
        <div className="flex shrink-0 items-center justify-between border-b border-[#E2E8F0] bg-white px-4 py-3">
          <div className="flex items-center gap-2.5">
            <div className="relative h-9 w-9 shrink-0">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500 text-[11px] font-bold text-white">
                IS
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#25D366] ring-[1.5px] ring-white">
                <Phone className="h-2 w-2 fill-white text-white" />
              </span>
            </div>
            <div className="flex flex-col gap-[3px]">
              <div className="flex items-center gap-2">
                <span className="text-[14px] font-semibold text-[#0F172A]">Iarley Silva</span>
                <span className="rounded bg-[#F1F5F9] px-1.5 py-0.5 text-[10px] font-medium text-[#64748B] ring-1 ring-[#E2E8F0]">
                  Iarley
                </span>
              </div>
              <p className="text-[11px] text-[#64748B]">Atendente: Iarley</p>
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <Undo2 className="h-4 w-4 text-[#64748B]" />
            <button
              onClick={() => setSidebarMode(sidebarMode === "quick-reply" ? "contact" : "quick-reply")}
              className={`rounded p-0.5 transition-colors ${sidebarMode === "quick-reply" ? "bg-[#D9FDD3]" : ""}`}
            >
              <Zap className={`h-4 w-4 ${sidebarMode === "quick-reply" ? "text-[#17C75A]" : "text-[#64748B]"}`} />
            </button>
            <span className="flex items-center justify-center rounded-lg bg-[#17C75A] px-3 py-1.5">
              <Check className="h-4 w-4 text-white" strokeWidth={3} />
            </span>
            <MoreVertical className="h-4 w-4 text-[#64748B]" />
          </div>
        </div>

        {/* Tags bar */}
        <div className="flex shrink-0 items-center gap-2 border-b border-[#E2E8F0] bg-white px-4 py-2">
          <span className="text-[11px] font-semibold text-[#94A3B8]">Tags</span>
          <span className="h-3.5 w-px bg-[#E2E8F0]" />
          <span className="rounded-xl bg-[#F8FAFC] px-3 py-1 text-[11px] text-[#94A3B8]">Etiquetas</span>
        </div>

        {/* Messages */}
        <div ref={chatRef} className="min-h-0 flex-1 space-y-2.5 overflow-y-auto px-4 py-4 scroll-smooth">
          {messages.map((msg) => (
            <MessageBubble key={msg.id} msg={msg} time={time} />
          ))}
          {/* typing dots removed — doesn't exist in real product */}
        </div>

        {/* Input bar */}
        <div className="shrink-0 bg-white px-4 pb-4 pt-3">
          <div className="flex items-center gap-4 rounded-lg border border-[#E2E8F0] px-3 py-2">
            <div className="flex items-center gap-4 text-[#64748B]">
              <Smile className="h-[18px] w-[18px]" />
              <Paperclip className="h-[18px] w-[18px]" />
              <span className="flex items-center justify-center rounded-md bg-[#D9FDD3] p-1.5">
                <Signature className="h-[18px] w-[18px] text-[#16A34A]" />
              </span>
              <CircleStop className="h-[18px] w-[18px]" />
              <button onClick={() => setSidebarMode(sidebarMode === "quick-reply" ? "contact" : "quick-reply")}>
                <Zap
                  className={`h-[18px] w-[18px] transition-colors ${sidebarMode === "quick-reply" ? "text-[#17C75A]" : "text-[#64748B]"}`}
                />
              </button>
            </div>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && inputEnabled) handleSend();
              }}
              placeholder="Escreva uma mensagem..."
              className="flex-1 truncate bg-transparent text-[11px] text-[#0F172A] placeholder-[#CBD5E1] outline-none"
              disabled={!inputEnabled}
            />
            <Mic className="h-[18px] w-[18px] shrink-0 text-[#64748B]" />
            <button
              onClick={handleSend}
              disabled={!inputEnabled || !inputValue.trim()}
              className={`flex shrink-0 items-center gap-1.5 rounded-lg px-4 py-2 text-[12px] font-semibold transition-colors ${
                inputEnabled && inputValue.trim() ? "bg-[#17C75A] text-white" : "bg-[#E2E8F0] text-[#64748B]"
              }`}
            >
              <ArrowUp className="h-3.5 w-3.5" strokeWidth={3} />
              Enviar
            </button>
          </div>
        </div>
      </div>

      {/* ── Sidebar — toggles between contact info and quick reply panel ── */}
      <aside className="hidden w-[312px] shrink-0 overflow-hidden border-l border-[#E5E7EB] bg-[#F7F8FA] xl:block">
        {sidebarMode === "quick-reply" ? (
          <QuickReplyPanel
            tab={qrTab}
            onTabChange={setQrTab}
            onClose={() => setSidebarMode("contact")}
            messages={quickReplies.length > 0 ? quickReplies : ["Teste"]}
            flows={FLOWS_LIST}
            onPickMessage={handlePanelPick}
            onPickFlow={handlePanelPick}
          />
        ) : (
          <div className="flex h-full flex-col px-3 py-3">
            <div className="flex items-center justify-between text-[#6B7280]">
              <div className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#111827]">
                <X className="h-3.5 w-3.5 text-[#6B7280]" />
                Dados do contato
              </div>
              <Pencil className="h-3.5 w-3.5" />
            </div>

            <div className="mt-3 flex flex-col items-center gap-1.5">
              <div className="relative h-[80px] w-[80px]">
                <div
                  className="h-full w-full rounded-[20px] bg-cover bg-center"
                  style={{ backgroundImage: "url('/images/contact-iarley.png')" }}
                />
                <span className="absolute bottom-0 right-0 flex h-5 w-5 items-center justify-center rounded-full bg-[#25D366] ring-2 ring-[#F7F8FA]">
                  <Phone className="h-2.5 w-2.5 fill-white text-white" />
                </span>
              </div>
              <p className="text-[14px] font-semibold text-[#0F172A]">Iarley Silva</p>
              <p className="text-[10px] text-[#8A94A6]">Criado em 02/04/2026</p>
            </div>

            <div className="mt-4 space-y-2.5">
              <ContactInfoRow icon={<Phone className="h-3.5 w-3.5" />} label="Telefone" value="+55 (98) 81201979" />
              <ContactInfoRow icon={<AtSign className="h-3.5 w-3.5" />} label="E-mail" value="Não informado" mutedValue />
              <ContactInfoRow icon={<Instagram className="h-3.5 w-3.5" />} label="Instagram" value="Não informado" mutedValue />
            </div>

            <div className="mt-3 space-y-2.5">
              <div className="rounded-xl bg-[#ECECEF] px-3 py-2.5">
                <div className="flex items-center justify-between text-[13px] font-semibold text-[#4B5563]">
                  Fluxos
                  <ChevronDown className="h-4 w-4 text-[#6B7280]" />
                </div>
              </div>

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

              <div className="flex items-center justify-between rounded-xl bg-[#ECECEF] px-3 py-2.5">
                <span className="text-[13px] font-semibold text-[#4B5563]">Outras informações</span>
                <ChevronDown className="h-4 w-4 text-[#D1D5DB]" />
              </div>
            </div>
          </div>
        )}
      </aside>
    </div>
  );
}
