'use client';

import { ArrowRight, Check, CheckCheck, Zap } from 'lucide-react';
import { AnimateIn } from '@/components/ui/animate-in';

/* ─── Copy ─── */
const STEPS = [
  {
    kicker: 'Evento',
    title: 'Plataforma dispara o webhook',
    desc: 'Hotmart, Kiwify, Eduzz ou sua própria integração envia o evento em tempo real.',
  },
  {
    kicker: 'Recepção',
    title: 'Sagazchat recebe os dados na chamada',
    desc: 'Nome, telefone, produto e valor chegam prontos no payload — sem consulta nenhuma.',
  },
  {
    kicker: 'Ação',
    title: 'Fluxo personalizado dispara',
    desc: 'Mensagem contextualizada vai pro WhatsApp do cliente em menos de 5 segundos.',
  },
  {
    kicker: 'Resultado',
    title: 'Venda recuperada',
    desc: 'Lead responde, fecha o pagamento e volta pro funil sem intervenção humana.',
  },
];

/* ─── Visual 1: Webhook disparado ─── */
function VisualWebhook() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-2.5">
      <div className="flex items-center gap-1.5">
        <span className="rounded-md bg-white px-2 py-1 text-[9px] font-bold text-slate-700 shadow-sm ring-1 ring-slate-200">Hotmart</span>
        <span className="rounded-md bg-white px-2 py-1 text-[9px] font-bold text-slate-700 shadow-sm ring-1 ring-slate-200">Kiwify</span>
        <span className="rounded-md bg-white px-2 py-1 text-[9px] font-bold text-slate-500 shadow-sm ring-1 ring-slate-200">+12</span>
      </div>
      <div className="flex flex-col items-center gap-1 text-slate-400">
        <div className="h-4 w-px bg-slate-300" />
        <Zap className="h-4 w-4 fill-amber-400 text-amber-500" />
        <div className="h-4 w-px bg-slate-300" />
      </div>
      <div className="rounded-md bg-slate-900 px-3 py-1.5 font-mono text-[10px] tracking-tight">
        <span className="text-amber-400">POST</span>
        <span className="text-slate-500"> </span>
        <span className="text-emerald-300">/webhook</span>
      </div>
    </div>
  );
}

/* ─── Visual 2: Payload JSON ─── */
function VisualPayload() {
  return (
    <div className="h-full overflow-hidden rounded-lg bg-slate-900 p-2.5 font-mono text-[9.5px] leading-[1.65] shadow-inner">
      <div className="flex items-center gap-1 pb-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
        <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
      </div>
      <div>
        <span className="text-slate-500">{'{'}</span>
      </div>
      <div className="pl-3">
        <span className="text-sky-300">&quot;evento&quot;</span>
        <span className="text-slate-500">: </span>
        <span className="text-amber-200">&quot;checkout.abandoned&quot;</span>
        <span className="text-slate-500">,</span>
      </div>
      <div className="pl-3">
        <span className="text-sky-300">&quot;nome&quot;</span>
        <span className="text-slate-500">: </span>
        <span className="text-amber-200">&quot;Maria Silva&quot;</span>
        <span className="text-slate-500">,</span>
      </div>
      <div className="pl-3">
        <span className="text-sky-300">&quot;telefone&quot;</span>
        <span className="text-slate-500">: </span>
        <span className="text-amber-200">&quot;+5511987654321&quot;</span>
        <span className="text-slate-500">,</span>
      </div>
      <div className="pl-3">
        <span className="text-sky-300">&quot;produto&quot;</span>
        <span className="text-slate-500">: </span>
        <span className="text-amber-200">&quot;Curso MKT&quot;</span>
        <span className="text-slate-500">,</span>
      </div>
      <div className="pl-3">
        <span className="text-sky-300">&quot;valor&quot;</span>
        <span className="text-slate-500">: </span>
        <span className="text-violet-300">297.00</span>
      </div>
      <div>
        <span className="text-slate-500">{'}'}</span>
      </div>
    </div>
  );
}

/* ─── Visual 3: Mensagem WhatsApp ─── */
function VisualMessage() {
  return (
    <div className="flex h-full flex-col justify-center gap-1.5">
      <div className="flex justify-end">
        <div className="max-w-[90%] rounded-[8px] rounded-br-[2px] bg-[#F1FDD4] px-2.5 py-1.5 text-[10.5px] leading-snug text-slate-900 shadow-sm">
          Oi Maria! Vi que você não finalizou 😊
          <span className="ml-1 inline-flex items-center gap-0.5 text-[8px] text-slate-400">
            09:02
            <CheckCheck className="h-2.5 w-2.5" />
          </span>
        </div>
      </div>
      <div className="flex justify-start">
        <div className="max-w-[85%] rounded-[8px] rounded-bl-[2px] bg-white px-2.5 py-1.5 text-[10.5px] leading-snug text-slate-900 shadow-sm ring-1 ring-slate-200">
          Sim! Tem parcelamento?
          <span className="ml-1 text-[8px] text-slate-400">09:02</span>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="max-w-[90%] rounded-[8px] rounded-br-[2px] bg-[#F1FDD4] px-2.5 py-1.5 text-[10.5px] leading-snug text-slate-900 shadow-sm">
          12x de R$ 29,75 🎯
          <span className="ml-1 inline-flex items-center gap-0.5 text-[8px] text-slate-400">
            09:02
            <CheckCheck className="h-2.5 w-2.5" />
          </span>
        </div>
      </div>
    </div>
  );
}

/* ─── Visual 4: Venda recuperada ─── */
function VisualRecovered() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-2">
      <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100">
        <div className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-20" />
        <Check className="relative h-7 w-7 text-emerald-600" strokeWidth={3} />
      </div>
      <p className="font-[family-name:var(--font-display)] text-[22px] font-extrabold tracking-tight text-slate-900">
        R$ 297,00
      </p>
      <div className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-0.5 text-[10px] font-medium text-emerald-700 ring-1 ring-emerald-200">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
        Pago em 4min 12s
      </div>
    </div>
  );
}

const VISUALS = [VisualWebhook, VisualPayload, VisualMessage, VisualRecovered];

/* ─── Main Section ─── */
export function WebhookSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6">
        {/* Header centered */}
        <AnimateIn>
          <div className="mx-auto flex max-w-[720px] flex-col items-center gap-5 text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary font-[family-name:var(--font-display)]">
              Webhooks e Recuperação
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-[3rem] font-bold leading-[1.1] tracking-[-0.02em] text-slate-950">
              Recupere vendas{' '}
              <span className="italic font-medium text-primary">que saíram do seu funil.</span>
            </h2>
            <p className="max-w-xl text-[15px] leading-relaxed text-slate-600">
              Automação baseada em eventos: abandono de checkout, pagamento recusado, boleto vencendo. Cada evento dispara o fluxo certo, na hora certa.
            </p>
          </div>
        </AnimateIn>

        {/* Horizontal steps */}
        <div className="relative mt-14 lg:mt-20">
          {/* Desktop connector line — dashed, subtle */}
          <div
            className="pointer-events-none absolute left-0 right-0 top-[104px] hidden lg:block"
            aria-hidden="true"
          >
            <svg width="100%" height="2" className="text-slate-300">
              <line x1="12.5%" y1="1" x2="87.5%" y2="1" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
            </svg>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {STEPS.map((step, i) => {
              const Visual = VISUALS[i];
              return (
                <AnimateIn key={i} delay={i * 120}>
                  <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_20px_40px_-15px_rgba(23,199,90,0.18)]">
                    {/* Visual area */}
                    <div className="relative aspect-[5/4] border-b border-slate-100 bg-gradient-to-b from-slate-50 to-white">
                      {/* Step number badge */}
                      <span className="absolute left-4 top-4 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white text-[12px] font-bold text-slate-900 shadow-[0_2px_8px_rgba(15,23,42,0.08)] ring-1 ring-slate-200">
                        {String(i + 1).padStart(2, '0').slice(-1)}
                      </span>
                      {/* Visual content */}
                      <div className="absolute inset-0 px-5 pb-5 pt-12">
                        <Visual />
                      </div>
                    </div>
                    {/* Text area */}
                    <div className="flex flex-1 flex-col gap-2 p-5">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-primary">
                        {step.kicker}
                      </p>
                      <h3 className="text-[16px] font-bold leading-[1.3] tracking-tight text-slate-900">
                        {step.title}
                      </h3>
                      <p className="text-[13px] leading-[1.55] text-slate-500">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </AnimateIn>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <AnimateIn delay={500}>
          <div className="mt-12 flex justify-center lg:mt-16">
            <a
              href="#pricing"
              className="inline-flex items-center gap-2.5 rounded-[10px] bg-primary px-8 py-4 text-[15px] font-semibold text-white shadow-[0_4px_14px_rgba(23,199,90,0.25)] transition-all hover:bg-primary/90 hover:shadow-[0_6px_20px_rgba(23,199,90,0.35)]"
            >
              Ver planos
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
