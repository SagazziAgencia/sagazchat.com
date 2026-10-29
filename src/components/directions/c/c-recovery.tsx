'use client';

import { useEffect, useState } from 'react';
import { ArrowRight, Check, Zap } from 'lucide-react';
import { PRICING_URL, WEBHOOK_STEPS } from '../data';
import { mmss, useCountTo, useInView, useReducedMotion } from '../shared';
import { Chip, Ticks, Typing } from './c-bits';

const FINAL = 7;

export function CRecovery() {
  const reduced = useReducedMotion();
  const [ref, inView] = useInView<HTMLDivElement>(0.25);
  const running = inView && !reduced;
  const [step, setStep] = useState(FINAL);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    if (!running) { setStep(FINAL); setTyping(false); return; }
    const timers: ReturnType<typeof setTimeout>[] = [];
    const at = (ms: number, fn: () => void) => timers.push(setTimeout(fn, ms));
    const play = () => {
      setStep(0); setTyping(false);
      at(500, () => setStep(1)); // evento
      at(1700, () => setStep(2)); // dados
      at(2900, () => setTyping(true));
      at(4000, () => { setTyping(false); setStep(3); }); // msg enviada
      at(5200, () => setStep(4)); // cliente responde
      at(6300, () => setStep(5)); // msg link
      at(7700, () => setStep(6)); // pagamento
      at(9800, () => setStep(7)); // final
      at(17000, play);
    };
    play();
    return () => timers.forEach(clearTimeout);
  }, [running]);

  const counting = running && step === 6;
  const rawS = useCountTo(252, 1800, counting);
  const waiting = running && step < 6;
  const secs = waiting ? 0 : rawS;
  const paid = secs >= 252;
  const s = (n: number) => step >= n;
  const [e0, e1, e2, e3] = WEBHOOK_STEPS;

  return (
    <section id="recuperacao" ref={ref} className="scroll-mt-16 px-4 pb-16 pt-6 sm:px-6 lg:px-12 lg:pb-24 lg:pt-10">
      <div className="mx-auto flex max-w-[900px] flex-col gap-3 lg:mx-0">
        <Chip>Recuperação de venda</Chip>

        <div className="c-in c-pop max-w-[820px] px-5 py-5 sm:px-8 sm:py-7">
          <p className="mb-3 text-[13px] font-extrabold text-[var(--c-green-text)]">Sagazchat</p>
          <h2 className="c-title text-[2.2rem] sm:text-[3.8rem] lg:text-[4.4rem]">Recupere vendas antes que esfriem.</h2>
          <p className="mt-4 max-w-[46ch] text-[17px] leading-[1.5] text-[var(--c-mute)]">
            Abandono de checkout, boleto vencendo ou pagamento recusado viram mensagem automática no WhatsApp.
          </p>
          <p className="mt-2 text-right"><Ticks time="09:01" /></p>
        </div>

        {/* 01 evento · 02 dados — mensagens do sistema */}
        {s(1) && (
          <div className="c-pop flex max-w-[560px] items-start gap-3 self-start rounded-[16px] border border-dashed border-[rgba(11,26,18,0.3)] bg-white/80 px-4 py-3">
            <Zap className="mt-0.5 h-4 w-4 shrink-0 fill-amber-400 text-amber-500" aria-hidden />
            <div className="text-[14px] leading-snug">
              <p className="font-extrabold">{e0.title}</p>
              <p className="font-mono text-[12.5px] text-[var(--c-mute)]">POST /webhook · checkout.abandoned · Hotmart</p>
            </div>
          </div>
        )}
        {s(2) && (
          <div className="c-pop max-w-[560px] self-start rounded-[16px] border border-dashed border-[rgba(11,26,18,0.3)] bg-white/80 px-4 py-3 text-[14px] leading-snug">
            <p className="font-extrabold">{e1.title}</p>
            <p className="mt-1 font-mono text-[12.5px] leading-[1.7] text-[var(--c-mute)]">
              nome: Maria Silva<br />telefone: +55 11 98765-4321<br />produto: Curso MKT · valor: R$ 297,00
            </p>
          </div>
        )}

        {/* 03 ação — a conversa com a cliente */}
        {(s(3) || typing) && <div className="mt-2"><Chip tone="green">{e2.title}: {e2.desc.toLowerCase().replace(/\.$/, '')}</Chip></div>}
        {typing && !s(3) && <div className="self-end"><Typing out /></div>}
        {s(3) && (
          <div className="c-pop c-pop-r c-out max-w-[420px] self-end px-3.5 py-2 text-[16px] leading-snug">
            Oi Maria! Vi que você não finalizou a compra do Curso MKT. Posso te ajudar?<Ticks time="09:02" out />
          </div>
        )}
        {s(4) && (
          <div className="c-pop c-in max-w-[320px] self-start px-3.5 py-2 text-[16px] leading-snug">
            Sim! Tem parcelamento?<Ticks time="09:03" />
          </div>
        )}
        {s(5) && (
          <div className="c-pop c-pop-r c-out max-w-[420px] self-end px-3.5 py-2 text-[16px] leading-snug">
            10x de R$ 29,70. Te mando o link agora.<Ticks time="09:03" out />
          </div>
        )}

        {/* 04 resultado — cartão de pagamento */}
        {s(6) && (
          <div className="c-pop mt-2 w-full max-w-[460px] self-start overflow-hidden rounded-[20px] bg-white shadow-[0_1px_0_rgba(11,26,18,0.12),0_24px_60px_-24px_rgba(11,26,18,0.35)]">
            <div className="flex items-center gap-2 bg-[var(--c-green)] px-5 py-3 text-[14px] font-extrabold text-[var(--c-ink)]">
              <span className={`inline-flex h-6 w-6 items-center justify-center rounded-full bg-[var(--c-ink)] text-[var(--c-green)] ${paid ? 'c-stamp' : 'opacity-40'}`}>
                <Check className="h-4 w-4" strokeWidth={3.5} aria-label="Pago" />
              </span>
              {e3.title}
            </div>
            <div className="px-5 pb-5 pt-4">
              <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-[var(--c-mute)]">Pagamento confirmado</p>
              <p className="mt-1 text-[4.2rem] font-extrabold leading-none tracking-[-0.05em] tabular-nums">
                R$ 297<span className="text-[var(--c-mute)]">,00</span>
              </p>
              <p className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#e3f8e9] px-3 py-1 text-[13px] font-bold text-[#0b4d24] tabular-nums">
                {paid ? 'Pago em 4min 12s' : `tempo · ${mmss(secs)}`}
              </p>
              <p className="mt-3 text-[14px] leading-snug text-[var(--c-mute)]">{e3.desc}</p>
            </div>
          </div>
        )}

        <div className="c-in c-pop mt-3 w-full max-w-[380px] p-2">
          <a href={PRICING_URL} className="c-btn c-btn-solid">Ver planos <ArrowRight className="h-4 w-4" aria-hidden /></a>
        </div>
      </div>
    </section>
  );
}
