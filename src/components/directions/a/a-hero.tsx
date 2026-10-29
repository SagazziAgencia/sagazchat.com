'use client';

import { ArrowRight } from 'lucide-react';
import { Logo } from '@/components/brand/logo';
import { HeroChatReplica } from '@/components/landing/hero-chat-replica';
import { AGENDA_URL, PRICING_URL, PRO_PRICE_INT } from '../data';
import { useCycle, useInView, useReducedMotion } from '../shared';

const STATES = [
  { k: 'Chega', t: 'O lead escreve e entra na fila de atendimento.' },
  { k: 'Etiqueta', t: 'Lead quente e número do pedido ficam marcados na conversa.' },
  { k: 'Responde', t: 'A resposta pronta sai com um clique, sem digitar de novo.' },
  { k: 'Passa pro humano', t: 'Dados, fluxos e histórico ficam ao lado de quem atende.' },
];
const STEP_MS = 3200;

export function AHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between px-5 sm:px-8">
        <a href="#top" aria-label="Sagazchat">
          <Logo variant="white" height={24} />
        </a>
        <nav className="hidden items-center gap-8 text-[14px] font-medium text-[var(--a-mute)] md:flex" aria-label="Seções">
          <a href="#produto" className="hover:text-white">Produto</a>
          <a href="#recuperacao" className="hover:text-white">Recuperação</a>
          <a href="#planos" className="hover:text-white">Planos</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href="https://app.sagazchat.com" className="a-btn-ghost hidden h-10 items-center rounded-[8px] px-4 text-[14px] font-semibold sm:inline-flex">
            Entrar
          </a>
          <a href={PRICING_URL} className="a-btn-primary inline-flex h-10 items-center rounded-[8px] px-4 text-[14px] font-bold">
            Ver planos
          </a>
        </div>
      </div>
    </header>
  );
}

export function AHero() {
  const reduced = useReducedMotion();
  const [ref, inView] = useInView<HTMLDivElement>(0.2);
  const [active] = useCycle(STATES.length, STEP_MS, inView && !reduced);

  const on = (i: number) => (reduced ? false : active === i);

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="a-dots pointer-events-none absolute inset-0" aria-hidden />
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[640px] w-[640px] rounded-full"
        style={{ background: 'radial-gradient(closest-side, rgba(23,199,90,0.20), transparent)' }}
        aria-hidden
      />
      <AHeader />

      <div className="relative mx-auto max-w-[1280px] px-5 pb-16 pt-[112px] sm:px-8 sm:pt-[136px] lg:pb-24">
        <div className="grid items-end gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-8 xl:col-span-9">
            <p className="a-mono mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--a-line)] bg-white/[0.04] px-3 py-1.5 text-[12px] font-medium text-[var(--a-mute)]">
              <span className="a-pulse h-1.5 w-1.5 rounded-full bg-[var(--a-green)]" aria-hidden />
              atendimento no ar agora
            </p>
            <h1 className="a-display text-[2.6rem] sm:text-[4.2rem] lg:text-[4.9rem]">
              Cada conversa sem resposta é{' '}
              <span className="text-[var(--a-green)]">uma venda que você perde.</span>
            </h1>
          </div>
          <div className="lg:col-span-4 lg:pb-3 xl:col-span-3">
            <p className="text-[16px] leading-[1.6] text-[var(--a-mute)] sm:text-[17px]">
              O Sagazchat atende na hora, sem parecer robô, e passa para a sua equipe quando o cliente quer fechar. WhatsApp, Instagram e CRM no mesmo painel.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a href={PRICING_URL} className="a-btn-primary inline-flex h-[52px] items-center justify-center gap-2 whitespace-nowrap rounded-[10px] px-6 text-[15px] font-bold">
                Escolher meu plano <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
              <a href={AGENDA_URL} className="a-btn-ghost inline-flex h-[52px] items-center justify-center whitespace-nowrap rounded-[10px] px-6 text-[15px] font-semibold">
                Quero que montem pra mim
              </a>
            </div>
            <p className="a-mono mt-4 text-[12px] text-[var(--a-dim)]">Sem fidelidade · PRO a partir de R${PRO_PRICE_INT} no 1º mês</p>
          </div>
        </div>

        {/* Palco: o painel real, com cada estado acendendo na vez */}
        <div id="produto" ref={ref} className={`mt-12 lg:mt-16 ${reduced ? 'a-static' : ''}`}>
          <div className="relative rounded-[18px] border border-[var(--a-line)] bg-[var(--a-bg2)] p-2 shadow-[0_60px_140px_-30px_rgba(23,199,90,0.28),0_30px_80px_-20px_rgba(0,0,0,0.6)] sm:p-2.5">
            <div className="a-mono flex items-center gap-2 px-3 pb-2 pt-1 text-[11px] text-[var(--a-dim)]">
              <span className="h-2 w-2 rounded-full bg-white/15" /><span className="h-2 w-2 rounded-full bg-white/15" /><span className="h-2 w-2 rounded-full bg-white/15" />
              <span className="ml-2">app.sagazchat.com/whatsapp</span>
            </div>
            <div className="relative h-[430px] overflow-hidden rounded-[10px] sm:h-[560px] lg:h-[660px]">
              <HeroChatReplica />
              {/* regiões: fila · cabeçalho+tags · conversa · contato */}
              <div className="a-region hidden bottom-0 left-0 top-0 w-[340px] lg:block" data-on={on(0)} aria-hidden />
              <div className="a-region left-0 right-0 top-0 h-[104px] lg:left-[340px] xl:right-[312px]" data-on={on(1)} aria-hidden />
              <div className="a-region bottom-0 left-0 right-0 top-[106px] lg:left-[340px] xl:right-[312px]" data-on={on(2)} aria-hidden />
              <div className="a-region hidden bottom-0 right-0 top-0 w-[312px] xl:block" data-on={on(3)} aria-hidden />
            </div>
          </div>

          <ol className="mt-5 grid grid-cols-2 gap-x-5 gap-y-5 lg:grid-cols-4">
            {STATES.map((s, i) => {
              const isOn = on(i);
              return (
                <li key={s.k} className="relative pt-4">
                  <span className="absolute inset-x-0 top-0 h-px bg-[var(--a-line)]" />
                  {isOn && (
                    <span
                      key={active}
                      className="a-progress absolute inset-x-0 top-0 h-[2px] bg-[var(--a-green)]"
                      style={{ animationDuration: `${STEP_MS}ms` }}
                    />
                  )}
                  <span className={`a-mono text-[12px] ${isOn ? 'text-[var(--a-green)]' : 'text-[var(--a-dim)]'}`}>0{i + 1}</span>
                  <p className={`mt-1 text-[16px] font-bold tracking-tight ${isOn ? 'text-white' : 'text-[var(--a-text)]'}`}>{s.k}</p>
                  <p className="mt-1 text-[13px] leading-[1.5] text-[var(--a-mute)]">{s.t}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
