'use client';

import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import { Instagram, MoreHorizontal, Phone, Send, Video } from 'lucide-react';

type BubbleSide = 'left' | 'right';

type Bubble = {
  side: BubbleSide;
  text: string;
  time: string;
};

type PlatformTheme = {
  id: 'whatsapp' | 'instagram';
  platform: string;
  subtitle: string;
  icon: ReactNode;
  headerClass: string;
  headerTextClass: string;
  headerSubTextClass: string;
  bodyClass: string;
  incomingBubbleClass: string;
  outgoingBubbleClass: string;
  inputShellClass: string;
  inputClass: string;
  sendButtonClass: string;
  messages: Bubble[];
};

function WhatsAppLogo() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
      <path d="M.057 24l1.687-6.163A11.867 11.867 0 0 1 .157 11.89C.16 5.335 5.495 0 12.05 0c3.18 0 6.167 1.24 8.412 3.488a11.82 11.82 0 0 1 3.48 8.414c-.003 6.556-5.338 11.891-11.894 11.891a11.9 11.9 0 0 1-5.688-1.448L.057 24Zm6.597-3.807a9.86 9.86 0 0 0 5.392 1.592c5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.88-9.892-5.453 0-9.888 4.434-9.89 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981Zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.199 0-.521.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871-.118.571-.355 1.758-2.153 2.006-2.875.247-.722.247-1.352.173-1.475Z" />
    </svg>
  );
}

const THEMES: PlatformTheme[] = [
  {
    id: 'whatsapp',
    platform: 'WhatsApp',
    subtitle: 'online',
    icon: <WhatsAppLogo />,
    headerClass: 'bg-[#00a884] text-white',
    headerTextClass: 'text-white',
    headerSubTextClass: 'text-white/85',
    bodyClass:
      "bg-[#efe7dd] bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.045)_1px,transparent_0)] [background-size:14px_14px]",
    incomingBubbleClass: 'bg-white text-slate-800 rounded-tl-sm',
    outgoingBubbleClass: 'bg-[#d9fdd3] text-slate-800 rounded-tr-sm',
    inputShellClass: 'border-t border-slate-200 bg-white/95',
    inputClass: 'bg-slate-100 text-slate-400',
    sendButtonClass: 'bg-emerald-500 text-white',
    messages: [
      { side: 'left', text: 'Oi! Vi que vocês usam IA, como funciona?', time: '10:01' },
      { side: 'right', text: 'Olá! Nossa IA atende seus clientes 24h por dia, tira dúvidas e até fecha vendas sozinha. Quer ver um exemplo?', time: '10:01' },
      { side: 'left', text: 'Quero sim! Ela consegue vender meus cursos?', time: '10:02' },
      { side: 'right', text: 'Com certeza! Vou te enviar o link do nosso case de sucesso.', time: '10:03' },
    ],
  },
  {
    id: 'instagram',
    platform: 'Instagram Direct',
    subtitle: 'online',
    icon: <Instagram className="h-4 w-4" />,
    headerClass: 'bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white',
    headerTextClass: 'text-white',
    headerSubTextClass: 'text-white/85',
    bodyClass: 'bg-white',
    incomingBubbleClass: 'bg-slate-100 text-slate-800 border border-slate-200 rounded-tl-sm',
    outgoingBubbleClass: 'bg-white text-slate-800 border border-slate-200 rounded-tr-sm',
    inputShellClass: 'border-t border-slate-200 bg-white/95',
    inputClass: 'bg-slate-100 text-slate-400',
    sendButtonClass: 'bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white',
    messages: [
      { side: 'right', text: 'Oi! Vi seu comentario na publicacao e te chamei por aqui 😊', time: '10:01' },
      { side: 'right', text: 'Quer que eu te mostre valores e como funciona?', time: '10:01' },
      { side: 'left', text: 'Quero sim! Eu comentei \"eu quero\" no post.', time: '10:02' },
      { side: 'right', text: 'Perfeito. Posso te enviar o link e depois falar no WhatsApp.', time: '10:03' },
    ],
  },
];

const CHAT_START_DELAY_MS = 700;
const TYPING_BEFORE_MESSAGE_MS = 900;
const MESSAGE_READING_DELAY_INCOMING_MS = 1500;
const MESSAGE_READING_DELAY_OUTGOING_MS = 1300;
const CHAT_LOOP_PAUSE_MS = 2200;
const PHONE_SWITCH_INTERVAL_MS = 11000;

function usePrefersReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(mediaQuery.matches);
    update();
    mediaQuery.addEventListener('change', update);
    return () => mediaQuery.removeEventListener('change', update);
  }, []);

  return reducedMotion;
}

function useChatPlayback(messages: Bubble[], isActive: boolean) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [visibleCount, setVisibleCount] = useState(prefersReducedMotion ? messages.length : 0);
  const [typingSide, setTypingSide] = useState<BubbleSide | null>(null);

  useEffect(() => {
    if (prefersReducedMotion || !isActive) {
      setVisibleCount(messages.length);
      setTypingSide(null);
      return;
    }

    const timeouts: number[] = [];

    const scheduleLoop = () => {
      setVisibleCount(0);
      setTypingSide(null);

      let elapsed = CHAT_START_DELAY_MS;

      messages.forEach((message, index) => {
        timeouts.push(
          window.setTimeout(() => {
            setTypingSide(message.side);
          }, elapsed),
        );
        elapsed += TYPING_BEFORE_MESSAGE_MS;

        timeouts.push(
          window.setTimeout(() => {
            setTypingSide(null);
            setVisibleCount(index + 1);
          }, elapsed),
        );
        elapsed +=
          message.side === 'left'
            ? MESSAGE_READING_DELAY_INCOMING_MS
            : MESSAGE_READING_DELAY_OUTGOING_MS;
      });

      timeouts.push(window.setTimeout(scheduleLoop, elapsed + CHAT_LOOP_PAUSE_MS));
    };

    scheduleLoop();

    return () => {
      timeouts.forEach((id) => window.clearTimeout(id));
    };
  }, [isActive, messages, prefersReducedMotion]);

  return {
    visibleMessages: messages.slice(0, visibleCount),
    typingSide,
    prefersReducedMotion,
  };
}

function TypingBubble({
  side,
  bubbleClass,
  prefersReducedMotion,
}: {
  side: BubbleSide;
  bubbleClass: string;
  prefersReducedMotion: boolean;
}) {
  return (
    <div className={`flex ${side === 'right' ? 'justify-end' : 'justify-start'}`}>
      <div className={`rounded-xl px-3 py-2 shadow-sm ${bubbleClass}`}>
        <div className="flex gap-1">
          <span
            className={`h-1.5 w-1.5 rounded-full bg-slate-400 ${
              prefersReducedMotion ? '' : 'animate-bounce [animation-delay:-0.2s]'
            }`}
          />
          <span
            className={`h-1.5 w-1.5 rounded-full bg-slate-400 ${
              prefersReducedMotion ? '' : 'animate-bounce [animation-delay:-0.1s]'
            }`}
          />
          <span
            className={`h-1.5 w-1.5 rounded-full bg-slate-400 ${
              prefersReducedMotion ? '' : 'animate-bounce'
            }`}
          />
        </div>
      </div>
    </div>
  );
}

function MessageBubble({
  bubble,
  incomingClass,
  outgoingClass,
}: {
  bubble: Bubble;
  incomingClass: string;
  outgoingClass: string;
}) {
  const outgoing = bubble.side === 'right';

  return (
    <div className={`flex ${outgoing ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[84%] rounded-xl px-3 py-2 text-[11px] leading-4 shadow-sm ${
          outgoing ? outgoingClass : incomingClass
        }`}
      >
        <p>{bubble.text}</p>
        <div className="mt-1 text-right text-[9px] opacity-60">{bubble.time}</div>
      </div>
    </div>
  );
}

function PhoneMockupChat({
  theme,
  isActive,
}: {
  theme: PlatformTheme;
  isActive: boolean;
}) {
  const { visibleMessages, typingSide, prefersReducedMotion } = useChatPlayback(
    theme.messages,
    isActive,
  );

  return (
    <div className="relative">
      <div
        className={`relative h-[560px] w-[286px] rounded-[1.75rem] border-[5px] border-slate-900 bg-slate-900 p-[2px] shadow-[0_0_0_1px_#1f2937,0_0_0_2px_#0f172a,0_40px_80px_-40px_rgba(2,6,23,0.5)] transition-all duration-300 ${
          isActive ? 'sm:-translate-y-1' : 'opacity-95'
        }`}
      >
        <div className={`absolute inset-0 rounded-[1.6rem] ${isActive ? 'ring-1 ring-emerald-400/20' : 'ring-1 ring-white/5'}`} />
        <div className="relative h-full w-full overflow-hidden rounded-[1.45rem] bg-white">
          <div className="absolute left-1/2 top-0 z-30 h-7 w-32 -translate-x-1/2 rounded-b-2xl bg-slate-900" />

          <div className={`flex items-center justify-between gap-2 px-3 pb-2 pt-8 ${theme.headerClass}`}>
            <div className="flex min-w-0 items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-full border border-white/25 bg-white/15">
                {theme.icon}
              </div>
              <div className="min-w-0">
                <p className={`truncate text-[11px] font-semibold ${theme.headerTextClass}`}>
                  {theme.platform}
                </p>
                <p className={`truncate text-[9px] ${theme.headerSubTextClass}`}>{theme.subtitle}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 opacity-90">
              <Video className="h-3.5 w-3.5" />
              <Phone className="h-3.5 w-3.5" />
              <MoreHorizontal className="h-3.5 w-3.5" />
            </div>
          </div>

          <div className={`h-[426px] overflow-hidden p-3 ${theme.bodyClass}`}>
            <div className="space-y-2">
              {visibleMessages.map((bubble, i) => (
                <MessageBubble
                  key={`${theme.id}-${i}`}
                  bubble={bubble}
                  incomingClass={theme.incomingBubbleClass}
                  outgoingClass={theme.outgoingBubbleClass}
                />
              ))}

              {typingSide && (
                <TypingBubble
                  side={typingSide}
                  bubbleClass={typingSide === 'right' ? theme.outgoingBubbleClass : theme.incomingBubbleClass}
                  prefersReducedMotion={prefersReducedMotion}
                />
              )}
            </div>
          </div>

          <div className={`flex items-center gap-2 px-2.5 py-2 ${theme.inputShellClass}`}>
            <div className={`h-7 flex-1 rounded-full px-3 py-1.5 text-[10px] ${theme.inputClass}`}>
              Mensagem...
            </div>
            <div
              className={`flex h-7 w-7 items-center justify-center rounded-full shadow-sm ${theme.sendButtonClass}`}
            >
              <Send className="h-3.5 w-3.5 fill-current" />
            </div>
          </div>

          <div className="absolute bottom-2 left-1/2 h-1.5 w-28 -translate-x-1/2 rounded-full bg-slate-900/10" />
        </div>
      </div>
    </div>
  );
}

export function ChatPlatformGridShowcase() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [activePhoneIndex, setActivePhoneIndex] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const interval = window.setInterval(() => {
      setActivePhoneIndex((prev) => (prev + 1) % THEMES.length);
    }, PHONE_SWITCH_INTERVAL_MS);

    return () => window.clearInterval(interval);
  }, [prefersReducedMotion]);

  const activeTheme = THEMES[activePhoneIndex] ?? THEMES[0];

  return (
    <div className="relative w-full max-w-[560px]">
      <div className="pointer-events-none absolute -left-8 top-8 h-44 w-44 rounded-full bg-emerald-50/80 blur-3xl" />
      <div className="pointer-events-none absolute -right-8 top-16 h-44 w-44 rounded-full bg-emerald-50/60 blur-3xl" />
      <div className="pointer-events-none absolute inset-x-12 bottom-1 h-10 rounded-full bg-slate-900/10 blur-2xl" />
      <div className="relative flex min-h-[590px] items-end justify-center">
        <PhoneMockupChat
          key={activeTheme.id}
          theme={activeTheme}
          isActive={true}
        />
      </div>
    </div>
  );
}
