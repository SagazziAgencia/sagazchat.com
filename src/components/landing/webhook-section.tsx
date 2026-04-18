'use client';

import { useState, useEffect } from 'react';
import {
  ArrowRight,
  Check,
  CheckCheck,
  ChevronLeft,
  Mic,
  MoreVertical,
  Paperclip,
  Phone,
  Smile,
} from 'lucide-react';
import { AnimateIn } from '@/components/ui/animate-in';

/* ─── helpers ─── */
function getTime() {
  const now = new Date();
  return `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
}

/* ─── Steps (left) ─── */
const STEPS = [
  'Evento chega via webhook (Hotmart, Kiwify, etc.)',
  'Sagazchat identifica o contato e contexto',
  'Fluxo personalizado é disparado automaticamente',
  'Lead reengajado converte sem intervenção manual',
];

/* ─── Slide 0: Checkout abandonado — phone mockup ─── */
function SlideCheckout({ time }: { time: string }) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-3">
      <div className="text-center">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-amber-600">Webhook recebido</p>
        <p className="mt-1 text-[16px] font-bold text-slate-900">Checkout abandonado</p>
      </div>
      {/* Phone */}
      <div className="w-[260px] sm:w-[280px] shrink-0">
        <div className="relative rounded-[36px] bg-black p-[6px] shadow-[0_0_0_2px_#333,0_0_0_4px_#1a1a1a,0_20px_50px_rgba(0,0,0,0.15)]">
          <div className="absolute left-1/2 top-[10px] z-20 h-[18px] w-[72px] -translate-x-1/2 rounded-xl bg-black" />
          <div className="overflow-hidden rounded-[30px] bg-white">
            {/* Status bar */}
            <div className="flex h-8 items-center justify-between bg-slate-50 px-5 text-[10px] font-semibold text-slate-600">
              <span>{time}</span>
              <div className="flex items-center gap-1.5">
                <svg width="14" height="10" viewBox="0 0 18 12" fill="currentColor"><path d="M1 10C1 9.45 1.45 9 2 9s1 .45 1 1v1c0 .55-.45 1-1 1s-1-.45-1-1v-1Z" /><path d="M5 7.5C5 6.95 5.45 6.5 6 6.5s1 .45 1 1V11c0 .55-.45 1-1 1s-1-.45-1-1V7.5Z" /><path d="M9 5c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1V5Z" /><path d="M13 2.5c0-.55.45-1 1-1s1 .45 1 1V11c0 .55-.45 1-1 1s-1-.45-1-1V2.5Z" /></svg>
                <svg width="18" height="10" viewBox="0 0 25 12" fill="none"><rect x="0.5" y="0.5" width="21" height="11" rx="2.5" stroke="currentColor" strokeOpacity="0.4" /><rect x="2" y="2" width="18" height="8" rx="1.5" fill="currentColor" /><path d="M23 4C23.5523 4 24 4.44772 24 5V7C24 7.55228 23.5523 8 23 8V4Z" fill="currentColor" fillOpacity="0.4" /></svg>
              </div>
            </div>
            {/* Checkout header */}
            <div className="border-b border-slate-200 bg-slate-50 px-4 py-2.5">
              <div className="flex items-center gap-2">
                <ChevronLeft className="h-4 w-4 text-slate-400" />
                <span className="text-[13px] font-semibold text-slate-700">Checkout</span>
              </div>
            </div>
            {/* Checkout form */}
            <div className="space-y-2.5 px-5 py-4">
              <div className="text-[13px] font-bold text-slate-800">Curso de Marketing Digital</div>
              <div className="text-[16px] font-bold text-primary">R$ 297,00</div>
              <div className="h-px bg-slate-100" />
              <div>
                <div className="mb-1 flex items-center gap-1 text-[10px] text-slate-400">Nome</div>
                <div className="rounded-md bg-slate-50 px-3 py-2 text-[12px] text-slate-700 ring-1 ring-slate-200">Maria Silva</div>
              </div>
              <div>
                <div className="mb-1 flex items-center gap-1 text-[10px] text-slate-400">
                  WhatsApp
                  <Check className="h-2.5 w-2.5 text-emerald-500" strokeWidth={3} />
                </div>
                <div className="rounded-md bg-emerald-50/60 px-3 py-2 text-[12px] text-slate-700 ring-1 ring-emerald-200">+55 11 98765-4321</div>
              </div>
              <div>
                <div className="mb-1 text-[10px] text-slate-400">Email</div>
                <div className="rounded-md bg-slate-50 px-3 py-2 text-[12px] text-slate-700 ring-1 ring-slate-200">
                  maria@gmail.c<span className="inline-block h-[12px] w-px animate-pulse bg-slate-800" />
                </div>
              </div>
              <div className="mt-2 rounded-lg bg-primary py-2.5 text-center text-[13px] font-semibold text-white">
                Finalizar Compra
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Slide 1: Contato identificado — platform card ─── */
function SlideIdentified() {
  return (
    <div className="flex h-full flex-col justify-center gap-5">
      <div className="text-center">
        <p className="text-[12px] font-semibold uppercase tracking-wider text-blue-600">Contato identificado</p>
        <p className="mt-1 text-[18px] font-bold text-slate-900">Maria Silva</p>
      </div>
      <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
        <div className="flex items-center gap-4 pb-5">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-[14px] font-bold text-white">MS</div>
          <div>
            <p className="text-[16px] font-semibold text-slate-900">Maria Silva</p>
            <p className="text-[13px] text-slate-400">+55 11 9****-4321</p>
          </div>
          <span className="ml-auto rounded-full bg-amber-100 px-3 py-1.5 text-[12px] font-medium text-amber-700">Lead quente</span>
        </div>
        <div className="h-px bg-slate-100" />
        <div className="flex flex-col gap-3.5 pt-5">
          <div className="flex justify-between">
            <span className="text-[14px] text-slate-400">Evento</span>
            <span className="text-[14px] font-medium text-slate-700">Checkout abandonado</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[14px] text-slate-400">Plataforma</span>
            <span className="text-[14px] font-medium text-slate-700">Hotmart</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[14px] text-slate-400">Produto</span>
            <span className="text-[14px] font-medium text-slate-700">Curso de Marketing Digital</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[14px] text-slate-400">Último contato</span>
            <span className="text-[14px] font-medium text-slate-700">3 dias atrás</span>
          </div>
        </div>
        <div className="mt-5 rounded-lg bg-emerald-50 px-4 py-2.5 text-[13px] text-emerald-700">
          <span className="font-semibold">Fluxo selecionado:</span> Recuperação de checkout
        </div>
      </div>
    </div>
  );
}

/* ─── Slide 2: Mensagem disparada — mini platform chat ─── */
function SlideSent({ time }: { time: string }) {
  return (
    <div className="flex h-full flex-col justify-center gap-5">
      <div className="text-center">
        <p className="text-[12px] font-semibold uppercase tracking-wider text-emerald-600">Mensagem disparada</p>
        <p className="mt-1 text-[18px] font-bold text-slate-900">Recuperação automática em {'<'} 5s</p>
      </div>
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-[#FAFAFA] shadow-sm">
        {/* Header */}
        <div className="flex items-center gap-3 border-b border-slate-200 bg-white px-5 py-3">
          <div className="relative h-9 w-9 shrink-0">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-500 text-[11px] font-bold text-white">MS</div>
            <span className="absolute -bottom-0.5 -right-0.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#25D366] ring-[1.5px] ring-white">
              <Phone className="h-2 w-2 fill-white text-white" />
            </span>
          </div>
          <div>
            <span className="text-[14px] font-semibold text-slate-900">Maria Silva</span>
            <p className="text-[11px] text-slate-400">Bot — Recupera (Vendas)</p>
          </div>
        </div>
        {/* Messages */}
        <div className="space-y-3 px-5 py-4">
          {/* System event */}
          <div className="flex justify-center">
            <span className="rounded-lg bg-amber-50 px-3 py-1.5 text-[12px] font-medium text-amber-700">
              ⚡ Checkout abandonado — Hotmart
            </span>
          </div>
          {/* Bot message */}
          <div className="flex justify-end">
            <div className="max-w-[80%] rounded-[10px] rounded-br-[2px] bg-[#F1FDD4] px-3.5 py-2 text-[13px] text-slate-900">
              Oi Maria! Vi que você não finalizou a compra do Curso de Marketing. Posso ajudar? 😊
              <span className="ml-2 inline-flex items-center gap-0.5 text-[10px] text-slate-400">
                {time} <CheckCheck className="h-3.5 w-3.5" />
              </span>
            </div>
          </div>
          {/* Customer response */}
          <div className="flex justify-start">
            <div className="max-w-[80%] rounded-[10px] rounded-bl-[2px] bg-white px-3.5 py-2 text-[13px] text-slate-900 ring-1 ring-slate-200">
              Sim! Tem parcelamento?
              <span className="ml-2 text-[10px] text-slate-400">{time}</span>
            </div>
          </div>
          {/* Bot closing */}
          <div className="flex justify-end">
            <div className="max-w-[80%] rounded-[10px] rounded-br-[2px] bg-[#F1FDD4] px-3.5 py-2 text-[13px] text-slate-900">
              Parcela em 12x de R$ 29,75! Te mandei o link com desconto 🎯
              <span className="ml-2 inline-flex items-center gap-0.5 text-[10px] text-slate-400">
                {time} <CheckCheck className="h-3.5 w-3.5" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Slide 3: Venda recuperada ─── */
function SlideRecovered() {
  return (
    <div className="flex h-full flex-col justify-center gap-5">
      <div className="text-center">
        <p className="text-[12px] font-semibold uppercase tracking-wider text-emerald-600">Venda recuperada</p>
        <p className="mt-1 text-[18px] font-bold text-slate-900">Sem intervenção humana</p>
      </div>
      <div className="rounded-2xl border border-emerald-200 bg-gradient-to-b from-emerald-50 to-white p-7 shadow-sm">
        <div className="mb-5 flex items-center justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
            <Check className="h-8 w-8 text-emerald-600" strokeWidth={3} />
          </div>
        </div>
        <p className="mb-5 text-center text-[32px] font-bold text-slate-900">R$ 297,00</p>
        <div className="h-px bg-emerald-100" />
        <div className="flex flex-col gap-3.5 pt-5">
          <div className="flex justify-between">
            <span className="text-[14px] text-slate-400">Forma</span>
            <span className="text-[14px] font-medium text-slate-700">12x de R$ 29,75</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[14px] text-slate-400">Tempo total</span>
            <span className="text-[14px] font-medium text-emerald-600">4 min 12s</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[14px] text-slate-400">Intervenção humana</span>
            <span className="text-[14px] font-medium text-slate-700">Nenhuma</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[14px] text-slate-400">Canal</span>
            <span className="text-[14px] font-medium text-slate-700">WhatsApp</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Main Section ─── */
export function WebhookSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [time] = useState(getTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 5500);
    return () => clearInterval(interval);
  }, []);

  const slides = [
    <SlideCheckout key="checkout" time={time} />,
    <SlideIdentified key="identified" />,
    <SlideSent key="sent" time={time} />,
    <SlideRecovered key="recovered" />,
  ];

  return (
    <section className="bg-white px-6 sm:px-8 lg:px-24 lg:min-h-screen">
      <div className="mx-auto flex min-h-screen max-w-[1320px] flex-col items-center gap-12 py-20 lg:flex-row lg:items-center lg:gap-16 lg:py-0">
        {/* Left – Copy */}
        <AnimateIn from="left" delay={100} className="w-full lg:flex-1">
          <div className="flex flex-col gap-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
              Webhooks e Recuperação
            </p>

            <h2 className="max-w-[500px] font-[family-name:var(--font-display)] text-[1.85rem] font-extrabold leading-[1.15] tracking-[-0.03em] text-slate-900 sm:text-[2.5rem] lg:text-[36px]">
              Recupere vendas que saíram do seu funil.
            </h2>

            <p className="max-w-[460px] text-[15px] leading-[1.6] text-slate-500">
              Automação baseada em eventos: abandono de checkout, pagamento
              recusado, boleto vencendo. Cada evento dispara o fluxo certo, na
              hora certa.
            </p>

            {/* Animated steps */}
            <div className="relative flex flex-col gap-5 pt-2">
              <div className="absolute bottom-5 left-[13px] top-5 w-px bg-slate-200" />
              <div
                className="absolute left-[13px] top-5 w-px bg-primary transition-all duration-700 ease-in-out"
                style={{ height: `${(activeStep / 3) * 90}%` }}
              />

              {STEPS.map((step, i) => {
                const isActive = i <= activeStep;
                const isCurrent = i === activeStep;
                return (
                  <div key={step} className="relative flex items-center gap-4">
                    <span
                      className={`relative z-10 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-[12px] font-bold transition-all duration-500 ${
                        isActive
                          ? 'bg-primary text-white shadow-[0_0_12px_rgba(23,199,90,0.3)]'
                          : 'bg-slate-200 text-slate-500'
                      } ${isCurrent ? 'scale-110' : 'scale-100'}`}
                    >
                      {i + 1}
                    </span>
                    <span
                      className={`text-[14px] transition-colors duration-500 ${
                        isActive ? 'text-slate-900' : 'text-slate-400'
                      }`}
                    >
                      {step}
                    </span>
                  </div>
                );
              })}
            </div>

            <a
              href="#pricing"
              className="mt-4 inline-flex w-fit items-center gap-2.5 rounded-[10px] bg-primary px-8 py-4 text-[15px] font-semibold text-white shadow-[0_4px_14px_rgba(23,199,90,0.25)] transition-all hover:bg-primary/90 hover:shadow-[0_6px_20px_rgba(23,199,90,0.35)]"
            >
              Ver planos
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </AnimateIn>

        {/* Right – Visual Carousel */}
        <AnimateIn from="right" delay={200} className="w-full lg:w-[55%] lg:flex-none">
          <div className="relative w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 h-[480px] sm:h-[500px] lg:h-[520px]">
            {slides.map((slide, i) => (
              <div
                key={i}
                className={`absolute inset-0 p-6 transition-all duration-500 ${
                  i === activeStep
                    ? 'translate-y-0 scale-100 opacity-100'
                    : 'pointer-events-none translate-y-4 scale-[0.97] opacity-0'
                }`}
              >
                {slide}
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="mt-5 flex justify-center gap-2">
            {STEPS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveStep(i)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  i === activeStep ? 'w-6 bg-primary' : 'w-2 bg-slate-200'
                }`}
              />
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
