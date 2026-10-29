'use client';

import { useEffect, useState } from 'react';
import { ArrowRight, Check, CheckCheck } from 'lucide-react';
import { Logo } from '@/components/brand/logo';
import { AGENDA_URL, PRICING_URL, PRO_PRICE_INT } from '../data';
import { mmss, useCountTo, useInView, useReducedMotion } from '../shared';

const PAID = 297;
const PAID_SECONDS = 252;

export function BHeader() {
  return (
    <header className="border-b-2 border-[var(--b-ink)]">
      <div className="mx-auto flex h-[68px] max-w-[1280px] items-center justify-between px-5 sm:px-8">
        <a href="#top" aria-label="Sagazchat"><Logo height={24} /></a>
        <nav className="hidden items-center gap-8 text-[14px] font-semibold md:flex" aria-label="Seções">
          <a href="#prova" className="hover:underline">A prova</a>
          <a href="#recuperacao" className="hover:underline">Recuperação</a>
          <a href="#planos" className="hover:underline">Planos</a>
        </nav>
        <div className="flex items-center gap-4">
          <a href="https://app.sagazchat.com" className="hidden text-[14px] font-semibold hover:underline sm:inline">Entrar</a>
          <a href={PRICING_URL} className="inline-flex h-10 items-center rounded-[4px] border-2 border-[var(--b-ink)] bg-[var(--b-ink)] px-4 text-[14px] font-bold text-[var(--b-paper)] hover:bg-[var(--b-green)] hover:text-[var(--b-ink)]">
            Ver planos
          </a>
        </div>
      </div>
    </header>
  );
}

export function BHero() {
  const reduced = useReducedMotion();
  const [ref, inView] = useInView<HTMLDivElement>(0.35);
  const running = inView && !reduced;
  const [phase, setPhase] = useState(5);

  useEffect(() => {
    if (!running) { setPhase(5); return; }
    const timers: ReturnType<typeof setTimeout>[] = [];
    const at = (ms: number, fn: () => void) => timers.push(setTimeout(fn, ms));
    const play = () => {
      setPhase(0);
      at(500, () => setPhase(1));
      at(1900, () => setPhase(2));
      at(3300, () => setPhase(3));
      at(5000, () => setPhase(4));
      at(13000, play);
    };
    play();
    return () => timers.forEach(clearTimeout);
  }, [running]);

  const counting = running && phase === 4;
  const rawMoney = useCountTo(PAID, 1900, counting);
  const rawSecs = useCountTo(PAID_SECONDS, 1900, counting);
  const waiting = running && phase < 4;
  const money = waiting ? 0 : rawMoney;
  const secs = waiting ? 0 : rawSecs;
  const paid = !waiting && money >= PAID;
  const show = (n: number) => phase >= n;

  return (
    <section id="top" className="relative">
      <BHeader />
      <div className="mx-auto max-w-[1280px] px-5 pb-16 pt-8 sm:px-8 sm:pt-10 lg:pb-24">
        <p className="b-mono text-[12px] uppercase tracking-[0.14em] text-[var(--b-green-text)]">Atendimento e vendas no WhatsApp</p>
        <h1 className="b-h mt-5 max-w-[16ch] text-[2.7rem] sm:max-w-[20ch] sm:text-[4.6rem] lg:max-w-none lg:text-[5.3rem]">
          Cada conversa sem resposta é <span className="underline decoration-[var(--b-green)] decoration-[0.07em] underline-offset-[0.1em]">uma venda que você perde.</span>
        </h1>

        <div className="mt-8 grid gap-6 lg:grid-cols-12 lg:items-start">
          <p className="max-w-[46ch] text-[18px] leading-[1.55] text-[var(--b-mute)] lg:col-span-5">
            O Sagazchat atende na hora, sem parecer robô, e passa para a sua equipe quando o cliente quer fechar. Veja uma venda voltando em minutos.
          </p>
          <div className="lg:col-span-7 lg:flex lg:justify-end">
            <div className="flex flex-col gap-4 sm:flex-row">
              <a href={PRICING_URL} className="b-btn b-btn-primary">Escolher meu plano <ArrowRight className="h-4 w-4" aria-hidden /></a>
              <a href={AGENDA_URL} className="b-btn b-btn-ghost">Quero que montem pra mim</a>
            </div>
          </div>
        </div>
        <p className="b-mono mt-4 text-[12px] text-[var(--b-mute)] lg:text-right">Sem fidelidade · PRO a partir de R${PRO_PRICE_INT} no 1º mês</p>

        {/* A prova: a conversa gera o número */}
        <div id="prova" ref={ref} className="mt-10 grid border-t-[3px] border-[var(--b-ink)] lg:mt-10 lg:grid-cols-12">
          <div className="border-b-2 border-[var(--b-ink)] py-6 lg:col-span-4 lg:border-b-0 lg:border-r-2 lg:py-8 lg:pr-8">
            <p className="b-mono mb-4 flex items-center justify-between text-[12px] uppercase tracking-[0.12em] text-[var(--b-mute)]">
              <span>Conversa · checkout abandonado</span>
              <span>09:02</span>
            </p>
            <div className="flex min-h-[250px] flex-col gap-2.5">
              {show(1) && (
                <div className="b-msg ml-auto max-w-[88%] rounded-[10px] rounded-br-[2px] bg-[#F1FDD4] px-3.5 py-2 text-[15px] leading-snug ring-1 ring-[rgba(10,20,16,0.12)]">
                  Oi Maria! Vi que você não finalizou a compra do Curso MKT.
                  <span className="ml-2 inline-flex items-center gap-1 text-[11px] text-[var(--b-mute)]">09:02 <CheckCheck className="h-3.5 w-3.5" aria-hidden /></span>
                </div>
              )}
              {show(2) && (
                <div className="b-msg mr-auto max-w-[80%] rounded-[10px] rounded-bl-[2px] bg-white px-3.5 py-2 text-[15px] leading-snug ring-1 ring-[rgba(10,20,16,0.14)]">
                  Sim! Tem parcelamento?
                  <span className="ml-2 text-[11px] text-[var(--b-mute)]">09:03</span>
                </div>
              )}
              {show(3) && (
                <div className="b-msg ml-auto max-w-[88%] rounded-[10px] rounded-br-[2px] bg-[#F1FDD4] px-3.5 py-2 text-[15px] leading-snug ring-1 ring-[rgba(10,20,16,0.12)]">
                  10x de R$ 29,70. Te mando o link agora.
                  <span className="ml-2 inline-flex items-center gap-1 text-[11px] text-[var(--b-mute)]">09:03 <CheckCheck className="h-3.5 w-3.5" aria-hidden /></span>
                </div>
              )}
              {show(4) && (
                <div className="b-msg mt-1 inline-flex w-fit items-center gap-2 self-center rounded-[4px] border-2 border-[var(--b-ink)] bg-[var(--b-green)] px-3 py-1.5 text-[13px] font-bold">
                  <Check className="h-4 w-4" strokeWidth={3.5} aria-hidden /> Pagamento confirmado
                </div>
              )}
            </div>
          </div>

          <div className="relative py-6 lg:col-span-8 lg:py-8 lg:pl-10">
            <p className="b-mono flex items-center justify-between text-[12px] uppercase tracking-[0.12em] text-[var(--b-mute)]">
              <span>Venda recuperada</span>
              <span className="tabular-nums">{paid ? 'pago em 4min 12s' : `tempo · ${mmss(secs)}`}</span>
            </p>
            <p
              className={`b-num mt-5 text-[6.6rem] sm:text-[11rem] lg:text-[15.5rem] ${money === 0 ? 'b-ghost' : ''}`}
              aria-label="R$ 297,00"
            >
              R$&nbsp;{money}
              <span className="text-[0.38em] text-[var(--b-mute)]">,00</span>
            </p>
            {/* linha do tempo 00:00 -> 04:12 */}
            <div className="mt-7">
              <div className="relative h-[10px] border-2 border-[var(--b-ink)] bg-white">
                <span
                  className="absolute inset-y-0 left-0 bg-[var(--b-green)] transition-[width] duration-200"
                  style={{ width: `${(secs / PAID_SECONDS) * 100}%` }}
                />
              </div>
              <div className="b-mono mt-2 flex justify-between text-[12px] text-[var(--b-mute)]">
                <span>00:00 · evento</span><span>04:12 · pago</span>
              </div>
            </div>
            <dl className="mt-8 grid grid-cols-3 gap-4 border-t-2 border-[var(--b-ink)] pt-5">
              {[['3', 'mensagens'], ['4min 12s', 'do aviso ao pagamento'], ['0', 'trabalho manual']].map(([n, l]) => (
                <div key={l}>
                  <dt className="text-[1.7rem] font-extrabold leading-none tracking-tight tabular-nums sm:text-[2.4rem]">{n}</dt>
                  <dd className="mt-1.5 text-[13px] leading-tight text-[var(--b-mute)]">{l}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
