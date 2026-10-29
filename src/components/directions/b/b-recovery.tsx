'use client';

import { ArrowRight, Check } from 'lucide-react';
import { PRICING_URL, WEBHOOK_STEPS } from '../data';
import { useCycle, useInView, useReducedMotion } from '../shared';

const ROW_MS = 2600;

const RECEIPTS: React.ReactNode[] = [
  <>checkout.abandoned <span className="text-[var(--b-mute)]">· via</span> Hotmart, Kiwify <span className="text-[var(--b-mute)]">e +12</span></>,
  <>Maria Silva <span className="text-[var(--b-mute)]">·</span> +55 11 98765-4321 <span className="text-[var(--b-mute)]">·</span> Curso MKT <span className="text-[var(--b-mute)]">·</span> R$ 297,00</>,
  <>&ldquo;Oi Maria! Vi que você não finalizou a compra.&rdquo; <span className="text-[var(--b-mute)]">· enviada às 09:02</span></>,
  <>R$ 297,00 <span className="text-[var(--b-mute)]">· pago em</span> 4min 12s</>,
];

export function BRecovery() {
  const reduced = useReducedMotion();
  const [ref, inView] = useInView<HTMLOListElement>(0.3);
  const running = inView && !reduced;
  const [active] = useCycle(4, ROW_MS, running);

  return (
    <section id="recuperacao" className="border-y-2 border-[var(--b-ink)] bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <h2 className="b-h text-[2.5rem] sm:text-[4.2rem] lg:col-span-8 lg:text-[5.2rem]">
            Recupere vendas <span className="text-[var(--b-green-text)]">antes que esfriem.</span>
          </h2>
          <p className="max-w-[40ch] text-[17px] leading-[1.55] text-[var(--b-mute)] lg:col-span-4 lg:pb-2">
            Abandono de checkout, boleto vencendo ou pagamento recusado viram mensagem automática no WhatsApp.
          </p>
        </div>

        <ol ref={ref} className="mt-12 border-t-[3px] border-[var(--b-ink)] lg:mt-16">
          {WEBHOOK_STEPS.map((s, i) => {
            const on = running ? active === i : i === 3;
            const last = i === 3;
            return (
              <li
                key={s.title}
                className={`relative grid items-center gap-x-8 gap-y-2 border-b-2 border-[var(--b-ink)] px-1 py-6 transition-colors duration-500 sm:px-4 lg:grid-cols-12 lg:py-8 ${
                  last && on ? 'bg-[var(--b-ink)] text-[var(--b-paper)]' : on ? 'bg-[var(--b-tint)]' : ''
                }`}
              >
                {on && running && (
                  <span
                    key={active}
                    className="b-grow absolute inset-x-0 bottom-0 h-[5px] bg-[var(--b-green)]"
                    style={{ animationDuration: `${ROW_MS}ms` }}
                    aria-hidden
                  />
                )}
                <span
                  className={`b-num text-[4.4rem] sm:text-[6rem] lg:col-span-2 lg:text-[7rem] ${
                    on ? (last ? 'text-[var(--b-green)]' : 'text-[var(--b-green-text)]') : 'text-[var(--b-ink)]'
                  }`}
                >
                  0{i + 1}
                </span>
                <div className="lg:col-span-4">
                  <p className="b-mono text-[12px] uppercase tracking-[0.14em] opacity-70">{s.kicker}</p>
                  <h3 className="mt-1 text-[1.6rem] font-extrabold leading-tight tracking-tight sm:text-[2rem]">{s.title}</h3>
                  <p className="mt-1 max-w-[36ch] text-[15px] leading-snug opacity-80">{s.desc}</p>
                </div>
                <p className={`b-mono mt-3 flex items-start gap-2 text-[13px] leading-[1.6] sm:text-[14px] lg:col-span-6 lg:mt-0 lg:justify-end lg:text-right ${last && on ? 'text-[var(--b-paper)]' : ''}`}>
                  {last && <Check className="mt-1 h-4 w-4 shrink-0 text-[var(--b-green)]" strokeWidth={3.5} aria-label="Pago" />}
                  <span>{RECEIPTS[i]}</span>
                </p>
              </li>
            );
          })}
        </ol>

        <div className="mt-10">
          <a href={PRICING_URL} className="b-btn b-btn-primary">Ver planos <ArrowRight className="h-4 w-4" aria-hidden /></a>
        </div>
      </div>
    </section>
  );
}
