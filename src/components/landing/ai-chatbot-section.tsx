'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import {
  ArrowRight,
  ArrowUp,
  Check,
  CheckCheck,
  CircleStop,
  Mic,
  MoreVertical,
  Paperclip,
  Phone,
  Signature,
  Smile,
  Undo2,
  Zap,
} from 'lucide-react';
import { AnimateIn } from '@/components/ui/animate-in';

/* ─── types ─── */
type MsgSender = 'customer' | 'bot';

interface ChatMessage {
  id: number;
  sender: MsgSender;
  text: string;
}

type ScriptStep =
  | { action: 'msg'; sender: MsgSender; text: string; delay: number }
  | { action: 'typing'; sender: MsgSender; duration: number };

/* ─── conversation script — IA responding ─── */
const SCRIPT: ScriptStep[] = [
  { action: 'msg', sender: 'customer', text: 'Oi, quero saber como funciona a IA de vocês', delay: 900 },
  { action: 'typing', sender: 'bot', duration: 1600 },
  { action: 'msg', sender: 'bot', text: 'Olá! 😊 Você cria um agente, treina com sua base de conhecimento — preços, objeções, processos — e ele responde como se fosse da sua equipe.', delay: 0 },
  { action: 'msg', sender: 'customer', text: 'E se o cliente mandar áudio?', delay: 2200 },
  { action: 'typing', sender: 'bot', duration: 1400 },
  { action: 'msg', sender: 'bot', text: 'Transcreve automaticamente e responde em texto. O agente lembra da conversa inteira, então não perde contexto. 🚀', delay: 0 },
  { action: 'msg', sender: 'customer', text: 'Quanto custa?', delay: 2400 },
  { action: 'typing', sender: 'bot', duration: 1200 },
  { action: 'msg', sender: 'bot', text: 'O Basic + IA sai R$ 267/mês com 5 milhões de tokens. O PRO + IA por R$ 347 com 10 milhões e 2 agentes.', delay: 0 },
];

/* ─── helpers ─── */
function getTime() {
  const now = new Date();
  return `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
}

let msgId = 100;
function nextId() {
  return ++msgId;
}

/* ─── sub-components ─── */
function TypingDots({ sender }: { sender: MsgSender }) {
  const isCustomer = sender === 'customer';
  return (
    <div className={`flex ${isCustomer ? 'justify-start' : 'justify-end'}`}>
      <div
        className={`flex items-center gap-1 rounded-[10px] px-4 py-2.5 ${
          isCustomer
            ? 'rounded-bl-[2px] bg-white ring-1 ring-[#E2E8F0]'
            : 'rounded-br-[2px] bg-[#F1FDD4]'
        }`}
      >
        <span className="typing-dot h-[6px] w-[6px] rounded-full bg-[#94A3B8]" style={{ animationDelay: '0ms' }} />
        <span className="typing-dot h-[6px] w-[6px] rounded-full bg-[#94A3B8]" style={{ animationDelay: '150ms' }} />
        <span className="typing-dot h-[6px] w-[6px] rounded-full bg-[#94A3B8]" style={{ animationDelay: '300ms' }} />
      </div>
    </div>
  );
}

function MessageBubble({ msg, time }: { msg: ChatMessage; time: string }) {
  const isCustomer = msg.sender === 'customer';

  if (isCustomer) {
    return (
      <div className="chat-msg flex justify-start">
        <div className="max-w-[70%] rounded-[10px] rounded-bl-[2px] bg-white px-3 py-1.5 text-[12px] text-[#0F172A] ring-1 ring-[#E2E8F0]">
          <span>{msg.text}</span>
          <span className="ml-2 inline-flex shrink-0 items-center gap-1 text-[9px] text-[#94A3B8]">
            {time}
            <Check className="h-3 w-3" />
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="chat-msg flex justify-end">
      <div className="max-w-[70%] rounded-[10px] rounded-br-[2px] bg-[#F1FDD4] px-3 py-1.5 text-[12px] text-[#0F172A]">
        <span>{msg.text}</span>
        <span className="ml-2 inline-flex shrink-0 items-center gap-1 text-[9px] text-[#94A3B8]">
          {time}
          <CheckCheck className="h-3.5 w-3.5" />
        </span>
      </div>
    </div>
  );
}

/* ─── features ─── */
const FEATURES = [
  'Agentes com personalidade — treinados na sua base de conhecimento',
  'Transcreve áudio e responde em texto, sem perder contexto',
  'Transfere pro humano certo quando a conversa precisa de decisão',
];

/* ─── main component ─── */
export const AiChatbotSection = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [typing, setTyping] = useState<MsgSender | null>(null);
  const [time] = useState(getTime);
  const chatRef = useRef<HTMLDivElement>(null);
  const stepRef = useRef(0);
  const mountedRef = useRef(true);

  const scrollToBottom = useCallback(() => {
    requestAnimationFrame(() => {
      if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight;
    });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, typing, scrollToBottom]);

  const addMessage = useCallback((sender: MsgSender, text: string) => {
    setMessages((prev) => [...prev, { id: nextId(), sender, text }]);
  }, []);

  const processStep = useCallback(() => {
    if (!mountedRef.current) return;
    const idx = stepRef.current;
    if (idx >= SCRIPT.length) {
      setTimeout(() => {
        if (!mountedRef.current) return;
        setMessages([]);
        setTyping(null);
        stepRef.current = 0;
        setTimeout(() => processStep(), 800);
      }, 3000);
      return;
    }

    const step = SCRIPT[idx];

    if (step.action === 'msg') {
      setTimeout(() => {
        if (!mountedRef.current) return;
        setTyping(null);
        addMessage(step.sender, step.text);
        stepRef.current++;
        setTimeout(() => processStep(), 50);
      }, step.delay);
    } else if (step.action === 'typing') {
      setTyping(step.sender);
      setTimeout(() => {
        if (!mountedRef.current) return;
        stepRef.current++;
        setTimeout(() => processStep(), 50);
      }, step.duration);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addMessage]);

  useEffect(() => {
    mountedRef.current = true;
    const timer = setTimeout(() => processStep(), 700);
    return () => {
      mountedRef.current = false;
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="bg-[#F8FAFC] lg:min-h-screen">
      <div className="mx-auto flex min-h-screen max-w-[1360px] flex-col items-center gap-12 px-4 py-20 sm:px-6 lg:flex-row lg:items-center lg:gap-16 lg:py-0">
        {/* Left – Platform Chat Mockup */}
        <AnimateIn from="left" delay={100} className="w-full lg:w-[55%] lg:flex-none">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-200">
            <div className="absolute inset-0 flex flex-col bg-[#FAFAFA]">
              {/* Header */}
              <div className="flex shrink-0 items-center justify-between border-b border-[#E2E8F0] bg-white px-4 py-3">
                <div className="flex items-center gap-2.5">
                  <div className="relative h-9 w-9 shrink-0">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500 text-[11px] font-bold text-white">
                      LC
                    </div>
                    <span className="absolute -bottom-0.5 -right-0.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#25D366] ring-[1.5px] ring-white">
                      <Phone className="h-2 w-2 fill-white text-white" />
                    </span>
                  </div>
                  <div className="flex flex-col gap-[3px]">
                    <div className="flex items-center gap-2">
                      <span className="text-[14px] font-semibold text-[#0F172A]">Lead Curioso</span>
                      <span className="rounded bg-[#F1F5F9] px-1.5 py-0.5 text-[10px] font-medium text-[#64748B] ring-1 ring-[#E2E8F0]">
                        Novo
                      </span>
                    </div>
                    <p className="text-[11px] text-[#64748B]">Atendente: IA — Ana (Vendas)</p>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <Undo2 className="h-4 w-4 text-[#64748B]" />
                  <Zap className="h-4 w-4 text-[#17C75A]" />
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
                <span className="rounded-xl bg-[#ECFDF5] px-3 py-1 text-[11px] font-medium text-[#059669]">IA ativa</span>
              </div>

              {/* Messages */}
              <div ref={chatRef} className="min-h-0 flex-1 space-y-2.5 overflow-y-auto px-4 py-4 scroll-smooth">
                {messages.map((msg) => (
                  <MessageBubble key={msg.id} msg={msg} time={time} />
                ))}
                {typing && <TypingDots sender={typing} />}
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
                    <Zap className="h-[18px] w-[18px]" />
                  </div>
                  <span className="flex-1 truncate text-[11px] text-[#CBD5E1]">Escreva uma mensagem...</span>
                  <Mic className="h-[18px] w-[18px] shrink-0 text-[#64748B]" />
                  <span className="flex shrink-0 items-center gap-1.5 rounded-lg bg-[#E2E8F0] px-4 py-2 text-[12px] font-semibold text-[#64748B]">
                    <ArrowUp className="h-3.5 w-3.5" strokeWidth={3} />
                    Enviar
                  </span>
                </div>
              </div>
            </div>
          </div>
        </AnimateIn>

        {/* Right – Copy */}
        <AnimateIn from="right" delay={200} className="w-full lg:flex-1">
          <div className="flex flex-col gap-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
              Inteligência Artificial
            </p>

            <h2 className="max-w-[520px] font-[family-name:var(--font-display)] text-[1.85rem] font-extrabold leading-[1.15] tracking-[-0.03em] text-slate-900 sm:text-[2.5rem] lg:text-[36px]">
              Seu time não precisa responder toda mensagem. Só as que importam.
            </h2>

            <p className="max-w-[460px] text-[16px] leading-[1.65] text-slate-500">
              A IA do Sagazchat conhece seus preços, responde objeções e qualifica o lead. O humano só entra pra fechar.
            </p>

            <ul className="flex flex-col gap-4 pt-2">
              {FEATURES.map((feat) => (
                <li key={feat} className="flex items-center gap-3">
                  <span className="h-2 w-2 flex-shrink-0 rounded-sm bg-primary" />
                  <span className="text-[15px] text-slate-900">{feat}</span>
                </li>
              ))}
            </ul>

            <a
              href="#pricing"
              className="mt-4 inline-flex w-fit items-center gap-2.5 rounded-[10px] bg-primary px-8 py-4 text-[15px] font-semibold text-white shadow-[0_4px_14px_rgba(23,199,90,0.25)] transition-all hover:bg-primary/90 hover:shadow-[0_6px_20px_rgba(23,199,90,0.35)]"
            >
              Ver planos com IA
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
};
