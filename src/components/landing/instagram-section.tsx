'use client';

import { useState, useEffect } from 'react';
import {
  ArrowRight,
  Bookmark,
  ChevronLeft,
  Heart,
  Home,
  ImageIcon,
  Mic,
  Phone,
  Search,
  Send,
  User,
  Video,
} from 'lucide-react';
import { AnimateIn } from '@/components/ui/animate-in';

/* Instagram-style script logo */
function InstagramLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 119 35" className={className} fill="currentColor">
      <path d="M7.8 29.2c-2.1 0-3.8-1.7-3.8-3.8V9.6c0-2.1 1.7-3.8 3.8-3.8h103.4c2.1 0 3.8 1.7 3.8 3.8v15.8c0 2.1-1.7 3.8-3.8 3.8H7.8z" fill="none"/>
      <text x="4" y="26" fontFamily="Georgia, 'Times New Roman', serif" fontStyle="italic" fontSize="26" fontWeight="400">Instagram</text>
    </svg>
  );
}

/* Reels icon (clapperboard with play) */
function ReelsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="6" width="18" height="15" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 6l2 4" />
      <path d="M14 6l2 4" />
      <polygon points="10,13 10,18 15,15.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

/* Messenger icon */
function MessengerIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
    </svg>
  );
}

/* Add post icon (square with plus) */
function AddPostIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M12 8v8M8 12h8" />
    </svg>
  );
}

const INSTAGRAM_HIGHLIGHT =
  'font-medium bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] bg-clip-text text-transparent';

const FEATURES = [
  'Nenhum "EU QUERO" fica sem resposta — nem os de domingo às 2h',
  'O lead recebe a oferta antes de sair do seu post',
  'Cada conversa vai pro CRM com a campanha que gerou',
];

export function InstagramSection() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white">
      <div className="mx-auto flex w-full max-w-[1360px] px-4 pb-16 pt-6 sm:px-6 sm:pb-20 sm:pt-8 lg:min-h-[calc(100svh-130px)] lg:items-center lg:pb-24 lg:pt-10">
        <div className="flex w-full flex-col gap-12 lg:flex-row lg:items-center lg:gap-12">
          {/* Left – Copy */}
          <AnimateIn from="left" delay={100} className="w-full lg:w-[40%] lg:flex-none">
            <div className="space-y-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#C13584]">
              Instagram
            </p>

            <h2 className="max-w-[620px] font-[family-name:var(--font-display)] text-3xl font-semibold leading-[1.15] tracking-tight text-slate-800 sm:text-4xl lg:text-[3rem]">
              Você não precisa estar online pra vender no{' '}
              <span className={INSTAGRAM_HIGHLIGHT}>direct</span>.
            </h2>

            <p className="max-w-[460px] text-[16px] leading-[1.65] text-slate-500">
              O Sagazchat manda a oferta em 3 segundos pra cada comentário. 24h por dia.
            </p>

            <ul className="flex flex-col gap-4 pt-2">
              {FEATURES.map((feat, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#DD2A7B]" />
                  <span className="text-[15px] text-slate-700">{feat}</span>
                </li>
              ))}
            </ul>

            <a
              href="#pricing"
              className="mt-4 inline-flex w-fit items-center gap-2.5 rounded-[10px] bg-primary px-8 py-4 text-[15px] font-semibold text-white shadow-[0_4px_14px_rgba(23,199,90,0.25)] transition-all hover:bg-primary/90 hover:shadow-[0_6px_20px_rgba(23,199,90,0.35)]"
            >
              Quero automatizar meu Instagram
              <ArrowRight className="h-4 w-4" />
            </a>
            </div>
          </AnimateIn>

          {/* Right – Two Phones: Feed + DM */}
          <AnimateIn
            from="right"
            delay={200}
            className="flex w-full justify-center lg:flex-1 lg:justify-end"
          >
            <div className="relative flex items-center gap-4">
              {/* ── Phone 1: Instagram Feed ── */}
              <div className="relative w-[260px] flex-none">
                <div className="relative flex h-[540px] w-full flex-col overflow-hidden rounded-[1.5rem] border-[3px] border-slate-700 bg-black shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                  {/* Status bar + Dynamic Island */}
                  <div className="relative flex items-center justify-between bg-black px-4 pb-0.5 pt-2">
                    <span className="text-[8px] font-semibold text-white">9:41</span>
                    <div className="absolute left-1/2 top-1.5 h-[16px] w-[70px] -translate-x-1/2 rounded-full bg-black ring-1 ring-slate-700" />
                    <div className="flex items-center gap-0.5">
                      <svg width="10" height="8" viewBox="0 0 14 10" className="text-white">
                        <rect x="0" y="7" width="2.5" height="3" rx="0.5" fill="currentColor"/>
                        <rect x="3.5" y="5" width="2.5" height="5" rx="0.5" fill="currentColor"/>
                        <rect x="7" y="2.5" width="2.5" height="7.5" rx="0.5" fill="currentColor"/>
                        <rect x="10.5" y="0" width="2.5" height="10" rx="0.5" fill="currentColor"/>
                      </svg>
                      <svg width="16" height="8" viewBox="0 0 22 10" className="ml-0.5 text-white">
                        <rect x="0" y="0.5" width="18" height="9" rx="2" stroke="currentColor" strokeWidth="1" fill="none"/>
                        <rect x="1.5" y="2" width="13" height="6" rx="1" fill="currentColor"/>
                        <rect x="19" y="3" width="2" height="4" rx="0.5" fill="currentColor"/>
                      </svg>
                    </div>
                  </div>

                  {/* Instagram header — logo left, icons right */}
                  <div className="flex items-center justify-between bg-black px-3 pb-2 pt-1">
                    <InstagramLogo className="h-[18px] w-auto text-white" />
                    <div className="flex items-center gap-3">
                      <Heart className="h-[17px] w-[17px] text-white" />
                      <MessengerIcon className="h-[17px] w-[17px] text-white" />
                    </div>
                  </div>

                  {/* Post */}
                  <div className="flex-1 overflow-hidden bg-black">
                    {/* Post header */}
                    <div className="flex items-center gap-2 px-3 py-1.5">
                      <div className="rounded-full bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] p-[1.5px]">
                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-[7px] font-bold text-white">SC</div>
                      </div>
                      <div className="flex-1">
                        <span className="text-[10px] font-semibold text-white">sagazchat</span>
                      </div>
                      <svg viewBox="0 0 24 24" className="h-4 w-4 text-white" fill="currentColor">
                        <circle cx="5" cy="12" r="1.5" />
                        <circle cx="12" cy="12" r="1.5" />
                        <circle cx="19" cy="12" r="1.5" />
                      </svg>
                    </div>

                    {/* Post image — square ratio */}
                    <div className="flex aspect-square w-full items-center justify-center bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900">
                      <p className="px-6 text-center text-[12px] font-bold leading-tight text-emerald-200">
                        Aumente suas vendas!<br/>
                        Comente &quot;EU QUERO&quot;
                      </p>
                    </div>

                    {/* Post actions */}
                    <div className="flex justify-between px-3 py-2 text-white">
                      <div className="flex items-center gap-3">
                        <Heart className="h-[18px] w-[18px] fill-red-500 text-red-500" />
                        <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.6">
                          <path d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z" strokeLinejoin="round" />
                        </svg>
                        <Send className="h-[17px] w-[17px] -rotate-12" />
                      </div>
                      <Bookmark className="h-[18px] w-[18px]" />
                    </div>

                    {/* Likes */}
                    <div className="px-3">
                      <p className="text-[10px] font-semibold text-white">1.248 curtidas</p>
                    </div>

                    {/* Comments */}
                    <div className="space-y-1 px-3 pt-1.5">
                      <div className={`transition-all duration-500 ${step >= 1 ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'}`}>
                        <p className="text-[10px] text-slate-200">
                          <span className="mr-1 font-semibold text-white">lead_curioso</span>EU QUERO! 🙋‍♀️
                        </p>
                        <p className="mt-0.5 text-[8px] text-slate-500">2 min · Responder</p>
                      </div>

                      <div className={`transition-all delay-300 duration-500 ${step >= 2 ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'}`}>
                        <p className="text-[10px] text-slate-200">
                          <span className="mr-1 font-semibold text-white">sagazchat</span>
                          <span className="font-semibold text-blue-400">@lead_curioso</span> Te chamei no direct! 🚀
                        </p>
                        <p className="mt-0.5 text-[8px] text-slate-500">Agora · Responder</p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom tab bar */}
                  <div className="flex items-center justify-around border-t border-slate-800 bg-black px-2 py-2">
                    <Home className="h-[18px] w-[18px] fill-white text-white" />
                    <Search className="h-[18px] w-[18px] text-slate-400" />
                    <AddPostIcon className="h-[18px] w-[18px] text-slate-400" />
                    <ReelsIcon className="h-[18px] w-[18px] text-slate-400" />
                    <div className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-slate-600 text-[6px] font-bold text-white">
                      <User className="h-3 w-3" />
                    </div>
                  </div>

                  {/* Home indicator */}
                  <div className="flex justify-center bg-black pb-1.5 pt-0.5">
                    <div className="h-[3px] w-[72px] rounded-full bg-slate-500" />
                  </div>
                </div>
              </div>

              {/* ── Badge "3s" entre os phones ── */}
              <div className={`flex flex-col items-center gap-1.5 transition-all duration-500 ${step >= 2 ? 'opacity-100' : 'opacity-0'}`}>
                <div className="h-8 w-px bg-gradient-to-b from-transparent via-slate-300 to-transparent" />
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-[11px] font-bold text-white shadow-[0_4px_12px_rgba(23,199,90,0.3)]">
                  3s
                </div>
                <div className="h-8 w-px bg-gradient-to-b from-transparent via-slate-300 to-transparent" />
              </div>

              {/* ── Phone 2: Instagram DM ── */}
              <div className="relative w-[260px] flex-none">
                <div className="relative flex h-[540px] w-full flex-col overflow-hidden rounded-[1.5rem] border-[3px] border-slate-700 bg-black shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                  {/* Status bar + Dynamic Island */}
                  <div className="relative flex items-center justify-between bg-black px-4 pb-0.5 pt-2">
                    <span className="text-[8px] font-semibold text-white">9:41</span>
                    <div className="absolute left-1/2 top-1.5 h-[16px] w-[70px] -translate-x-1/2 rounded-full bg-black ring-1 ring-slate-700" />
                    <div className="flex items-center gap-0.5">
                      <svg width="10" height="8" viewBox="0 0 14 10" className="text-white">
                        <rect x="0" y="7" width="2.5" height="3" rx="0.5" fill="currentColor"/>
                        <rect x="3.5" y="5" width="2.5" height="5" rx="0.5" fill="currentColor"/>
                        <rect x="7" y="2.5" width="2.5" height="7.5" rx="0.5" fill="currentColor"/>
                        <rect x="10.5" y="0" width="2.5" height="10" rx="0.5" fill="currentColor"/>
                      </svg>
                      <svg width="16" height="8" viewBox="0 0 22 10" className="ml-0.5 text-white">
                        <rect x="0" y="0.5" width="18" height="9" rx="2" stroke="currentColor" strokeWidth="1" fill="none"/>
                        <rect x="1.5" y="2" width="13" height="6" rx="1" fill="currentColor"/>
                        <rect x="19" y="3" width="2" height="4" rx="0.5" fill="currentColor"/>
                      </svg>
                    </div>
                  </div>

                  {/* DM header — back, avatar, name, call icons */}
                  <div className="flex items-center gap-2 border-b border-slate-800 bg-black px-2 pb-2 pt-1">
                    <ChevronLeft className="h-5 w-5 flex-shrink-0 text-white" />
                    <div className="relative">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-[7px] font-bold text-white">SC</div>
                      <div className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-[1.5px] border-black bg-green-500" />
                    </div>
                    <div className="flex-1">
                      <p className="text-[10px] font-semibold text-white">sagazchat</p>
                      <p className="text-[7px] text-slate-400">Ativo(a) agora</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-4 w-4 text-white" />
                      <Video className="h-4 w-4 text-white" />
                    </div>
                  </div>

                  {/* DM conversation */}
                  <div className="flex flex-1 flex-col justify-end gap-2 bg-black p-3">
                    {/* Bot greeting */}
                    <div className={`flex items-end gap-1.5 transition-all duration-500 ${step >= 1 ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'}`}>
                      <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary text-[6px] font-bold text-white">SC</div>
                      <div className="max-w-[80%] rounded-2xl rounded-bl-sm bg-slate-800 px-3 py-2">
                        <p className="text-[10px] leading-relaxed text-slate-200">
                          Oi! Vi que você comentou no nosso post 👋
                        </p>
                      </div>
                    </div>

                    {/* Bot offer */}
                    <div className={`flex items-end gap-1.5 transition-all duration-500 ${step >= 2 ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'}`}>
                      <div className="w-5 flex-shrink-0" />
                      <div className="max-w-[80%] rounded-2xl rounded-bl-sm bg-slate-800 px-3 py-2">
                        <p className="text-[10px] leading-relaxed text-slate-200">
                          Aqui está seu cupom com <span className="font-semibold text-primary">15% off</span>:
                        </p>
                        <div className="mt-1.5 rounded-lg bg-slate-700/60 px-2.5 py-1.5">
                          <p className="text-[9px] font-medium text-blue-400 underline">loja.com/oferta-exclusiva</p>
                        </div>
                      </div>
                    </div>

                    {/* User reply — Instagram gradient for sent messages */}
                    <div className={`flex justify-end transition-all duration-500 ${step >= 3 ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'}`}>
                      <div className="max-w-[80%] rounded-2xl rounded-br-sm bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] px-3 py-2">
                        <p className="text-[10px] text-white">Opa, quero sim! Como funciona?</p>
                      </div>
                    </div>

                    {/* Typing indicator */}
                    <div className={`flex items-end gap-1.5 transition-all duration-500 ${step >= 3 ? 'opacity-100' : 'opacity-0'}`}>
                      <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary text-[6px] font-bold text-white">SC</div>
                      <div className="rounded-2xl rounded-bl-sm bg-slate-800 px-3 py-2.5">
                        <div className="flex gap-1">
                          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400" style={{ animationDelay: '0ms' }} />
                          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400" style={{ animationDelay: '150ms' }} />
                          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400" style={{ animationDelay: '300ms' }} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* DM input bar — camera, text, mic, gallery */}
                  <div className="flex items-center gap-2 border-t border-slate-800 bg-black px-2.5 py-2">
                    <svg viewBox="0 0 24 24" className="h-5 w-5 flex-shrink-0 text-blue-500" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="9" />
                      <circle cx="12" cy="12" r="3.5" />
                    </svg>
                    <div className="flex flex-1 items-center rounded-full border border-slate-700 px-3 py-1.5">
                      <span className="flex-1 text-[9px] text-slate-500">Mensagem...</span>
                      <div className="flex items-center gap-2">
                        <Mic className="h-3.5 w-3.5 text-slate-400" />
                        <ImageIcon className="h-3.5 w-3.5 text-slate-400" />
                      </div>
                    </div>
                  </div>

                  {/* Home indicator */}
                  <div className="flex justify-center bg-black pb-1.5 pt-0.5">
                    <div className="h-[3px] w-[72px] rounded-full bg-slate-500" />
                  </div>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
