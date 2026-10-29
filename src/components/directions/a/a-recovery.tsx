'use client';

import { ArrowRight, Check, CheckCheck, Zap } from 'lucide-react';
import { PRICING_URL, WEBHOOK_STEPS } from '../data';
import { mmss, useCountTo, useCycle, useInView, useReducedMotion } from '../shared';

const CELL_MS = 2800;
const PAID_SECONDS = 4 * 60 + 12;

function Cell({
  i, active, className = '', children,
}: { i: number; active: boolean; className?: string; children: React.ReactNode }) {
  const s = WEBHOOK_STEPS[i];
  return (
    <div
      className={`relative flex flex-col overflow-hidden rounded-[18px] border bg-[var(--a-card)] p-6 transition-[border-color,box-shadow] duration-700 sm:p-7 ${className} ${
        active
          ? 'border-[rgba(23,199,90,0.7)] shadow-[0_0_0_1px_rgba(23,199,90,0.25),0_30px_80px_-30px_rgba(23,199,90,0.45)]'
          : 'border-[var(--a-line)]'
      }`}
    >
      <div className="flex items-center justify-between">
        <span className={`a-mono text-[12px] ${active ? 'text-[var(--a-green)]' : 'text-[var(--a-dim)]'}`}>
          0{i + 1} · {s.kicker.toLowerCase()}
        </span>
        {active && <span className="a-pulse h-2 w-2 rounded-full bg-[var(--a-green)]" aria-hidden />}
      </div>
      <h3 className="mt-3 text-[22px] font-bold tracking-tight">{s.title}</h3>
      <p className="mt-1.5 max-w-[34ch] text-[14px] leading-[1.55] text-[var(--a-mute)]">{s.desc}</p>
      <div className="mt-6 flex-1">{children}</div>
    </div>
  );
}

export function ARecovery() {
  const reduced = useReducedMotion();
  const [ref, inView] = useInView<HTMLDivElement>(0.3);
  const running = inView && !reduced;
  const [active] = useCycle(4, CELL_MS, running);
  const elapsed = useCountTo(PAID_SECONDS, 2000, running && active === 3);
  const paid = !(running && active === 3 && elapsed < PAID_SECONDS);
  const play = (i: number) => (running && active === i ? 'a-run' : '');

  return (
    <section id="recuperacao" className="relative border-t border-[var(--a-line)] bg-[var(--a-bg)] py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="a-mono text-[12px] text-[var(--a-green)]">recuperação de venda</p>
            <h2 className="a-display mt-4 text-[2.2rem] sm:text-[3.2rem] lg:text-[3.8rem]">
              Recupere vendas <span className="text-[var(--a-mute)]">antes que esfriem.</span>
            </h2>
          </div>
          <p className="max-w-[44ch] text-[16px] leading-[1.6] text-[var(--a-mute)] lg:col-span-5 lg:pb-2">
            Abandono de checkout, boleto vencendo ou pagamento recusado viram mensagem automática no WhatsApp.
          </p>
        </div>

        <div ref={ref} className="mt-12 grid gap-4 lg:grid-cols-12 lg:gap-5">
          {/* 01 evento */}
          <Cell i={0} active={running && active === 0} className="lg:col-span-5">
            <div className="flex h-full flex-col justify-end gap-3">
              <div className="flex flex-wrap items-center gap-2">
                {['Hotmart', 'Kiwify', '+12'].map((n) => (
                  <span key={n} className="rounded-[6px] border border-[var(--a-line)] bg-white/[0.05] px-2.5 py-1 text-[12px] font-semibold">{n}</span>
                ))}
                <span className="h-px flex-1 bg-gradient-to-r from-[var(--a-line)] to-[var(--a-green)]" aria-hidden />
                <Zap className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden />
              </div>
              <div className="a-mono inline-flex w-fit items-center gap-2 rounded-[8px] border border-[var(--a-line)] bg-[#070d19] px-3.5 py-2.5 text-[13px]">
                <span className="text-amber-300">POST</span>
                <span className="text-emerald-300">/webhook</span>
              </div>
            </div>
          </Cell>

          {/* 02 payload */}
          <Cell i={1} active={running && active === 1} className="lg:col-span-7">
            <div className={`a-mono rounded-[10px] border border-[var(--a-line)] bg-[#070d19] p-4 text-[13px] leading-[1.8] ${play(1)}`}>
              {[
                ['evento', '"checkout.abandoned"', 'text-amber-200'],
                ['nome', '"Maria Silva"', 'text-amber-200'],
                ['telefone', '"+5511987654321"', 'text-amber-200'],
                ['produto', '"Curso MKT"', 'text-amber-200'],
                ['valor', '297.00', 'text-violet-300'],
              ].map(([k, v, c], idx, arr) => (
                <div key={k} className="a-line pl-4" style={{ animationDelay: `${idx * 160}ms` }}>
                  <span className="text-sky-300">&quot;{k}&quot;</span>
                  <span className="text-slate-500">: </span>
                  <span className={c}>{v}</span>
                  <span className="text-slate-500">{idx < arr.length - 1 ? ',' : ''}</span>
                </div>
              ))}
            </div>
          </Cell>

          {/* 03 mensagem */}
          <Cell i={2} active={running && active === 2} className="lg:col-span-7">
            <div className={`flex flex-col gap-2 rounded-[12px] bg-[#0b141a] p-4 ${play(2)}`}>
              <div className="a-bubble ml-auto max-w-[82%] rounded-[10px] rounded-br-[2px] bg-[#005c4b] px-3 py-2 text-[14px] leading-snug text-white" style={{ animationDelay: '0ms' }}>
                Oi Maria! Vi que você não finalizou. Posso te ajudar?
                <span className="ml-2 inline-flex items-center gap-1 text-[10px] text-white/70">09:02 <CheckCheck className="h-3 w-3" aria-hidden /></span>
              </div>
              <div className="a-bubble mr-auto max-w-[78%] rounded-[10px] rounded-bl-[2px] bg-[#202c33] px-3 py-2 text-[14px] leading-snug text-white" style={{ animationDelay: '700ms' }}>
                Sim! Tem parcelamento?
                <span className="ml-2 text-[10px] text-white/60">09:02</span>
              </div>
              <div className="a-bubble ml-auto max-w-[82%] rounded-[10px] rounded-br-[2px] bg-[#005c4b] px-3 py-2 text-[14px] leading-snug text-white" style={{ animationDelay: '1400ms' }}>
                10x de R$ 29,70 no cartão. Te mando o link agora.
                <span className="ml-2 inline-flex items-center gap-1 text-[10px] text-white/70">09:02 <CheckCheck className="h-3 w-3" aria-hidden /></span>
              </div>
            </div>
          </Cell>

          {/* 04 resultado */}
          <Cell i={3} active={running && active === 3} className="lg:col-span-5">
            <div className={`flex h-full flex-col justify-end ${play(3)}`}>
              <div className="flex items-center gap-3">
                <span className={`a-stamp inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--a-green)] text-[var(--a-green-ink)] ${paid ? '' : 'opacity-30'}`}>
                  <Check className="h-5 w-5" strokeWidth={3} aria-label="Pago" />
                </span>
                <span className="a-mono text-[13px] text-[var(--a-mute)]">
                  {paid ? 'Pago em 4min 12s' : `aguardando · ${mmss(elapsed)}`}
                </span>
              </div>
              <p className="mt-3 text-[3.4rem] font-extrabold leading-none tracking-[-0.05em] tabular-nums sm:text-[4.4rem]">
                R$ 297<span className="text-[var(--a-mute)]">,00</span>
              </p>
            </div>
          </Cell>
        </div>

        <div className="mt-10 flex justify-start">
          <a href={PRICING_URL} className="a-btn-primary inline-flex h-[52px] items-center gap-2 rounded-[10px] px-6 text-[15px] font-bold">
            Ver planos <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}
