'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Forward } from 'lucide-react';
import { AGENDA_URL, PRICING_URL, PRO_PRICE_INT } from '../data';
import { useInView, useReducedMotion } from '../shared';
import { Avatar, Chip, Ticks, Typing } from './c-bits';

type Item =
  | { k: 'in'; text: string; time: string }
  | { k: 'out'; text: string; time: string; who: 'bot' | 'ana'; typing: true }
  | { k: 'chip'; tone: 'green' | 'ink'; text: string };

const THREAD: Item[] = [
  { k: 'in', text: 'Oi, vocês entregam hoje?', time: '09:14' },
  { k: 'out', text: 'Entregamos hoje até as 18h. Qual é o seu CEP?', time: '09:14', who: 'bot', typing: true },
  { k: 'in', text: '01310-100', time: '09:14' },
  { k: 'chip', tone: 'green', text: 'Etiqueta aplicada: Lead quente' },
  { k: 'out', text: 'Chega ainda hoje. Quer fechar o pedido agora?', time: '09:15', who: 'bot', typing: true },
  { k: 'in', text: 'Quero falar com uma pessoa', time: '09:15' },
  { k: 'chip', tone: 'ink', text: 'Atendimento passado para Ana · equipe de vendas' },
  { k: 'out', text: 'Oi, Marina! Aqui é a Ana. Vou fechar o seu pedido agora.', time: '09:16', who: 'ana', typing: true },
];

function LiveThread() {
  const reduced = useReducedMotion();
  const [ref, inView] = useInView<HTMLDivElement>(0.3);
  const running = inView && !reduced;
  const [shown, setShown] = useState(THREAD.length);
  const [typing, setTyping] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!running) { setShown(THREAD.length); setTyping(false); return; }
    const timers: ReturnType<typeof setTimeout>[] = [];
    const at = (ms: number, fn: () => void) => timers.push(setTimeout(fn, ms));
    const play = () => {
      setShown(0);
      setTyping(false);
      let t = 600;
      THREAD.forEach((it, i) => {
        if (it.k === 'out') {
          at(t, () => setTyping(true));
          t += 1300;
          at(t, () => { setTyping(false); setShown(i + 1); });
        } else {
          at(t, () => setShown(i + 1));
        }
        t += it.k === 'chip' ? 1100 : 1000;
      });
      at(t + 6000, play);
    };
    play();
    return () => timers.forEach(clearTimeout);
  }, [running]);

  const nextOut = THREAD[shown]?.k === 'out';

  return (
    <div ref={ref} className="c-in w-full max-w-[560px] overflow-hidden p-0 ring-1 ring-[var(--c-line)]">
      <div className="flex items-center gap-2 px-4 pb-2 pt-3 text-[12px] font-bold italic text-[var(--c-mute)]">
        <Forward className="h-3.5 w-3.5" aria-hidden /> Encaminhada · atendimento ao vivo
      </div>
      <div className="flex items-center gap-3 border-y border-[var(--c-line)] bg-[var(--c-head)] px-4 py-2.5">
        <Avatar label="MC" tone="bg-violet-500 text-white" size={36} />
        <span className="leading-tight">
          <span className="block text-[15px] font-bold">Marina Costa</span>
          <span className="block text-[12px] text-[var(--c-mute)]">WhatsApp · Atendente: Ana</span>
        </span>
        <span className="ml-auto rounded-full bg-[#c9f2d4] px-2.5 py-1 text-[11px] font-bold text-[#0b4d24]">ao vivo</span>
      </div>
      <div ref={boxRef} className="c-doodle flex min-h-[440px] flex-col justify-end gap-2.5 px-3.5 py-4 sm:px-4" style={{ backgroundColor: '#d3e0d7' }}>
        {THREAD.slice(0, shown).map((it, i) => {
          if (it.k === 'chip') return <Chip key={i} tone={it.tone}>{it.text}</Chip>;
          if (it.k === 'in')
            return (
              <div key={i} className="c-pop c-in max-w-[82%] self-start px-3.5 py-2 text-[15px] leading-snug">
                {it.text}<Ticks time={it.time} />
              </div>
            );
          return (
            <div key={i} className="c-pop c-pop-r c-out max-w-[86%] self-end px-3.5 py-2 text-[15px] leading-snug">
              {it.who === 'ana' && <span className="mb-0.5 block text-[12px] font-extrabold text-[var(--c-green-text)]">Ana · equipe de vendas</span>}
              {it.text}<Ticks time={it.time} out />
            </div>
          );
        })}
        {typing && nextOut && <div className="self-end"><Typing out /></div>}
      </div>
    </div>
  );
}

export function CHero() {
  return (
    <section id="inicio" className="scroll-mt-16 px-4 pb-16 pt-6 sm:px-6 lg:px-12 lg:pb-24 lg:pt-10">
      <div className="mx-auto flex max-w-[900px] flex-col gap-3 lg:mx-0">
        <Chip>Hoje</Chip>

        <div className="c-in c-pop max-w-[860px] px-5 py-5 sm:px-8 sm:py-7">
          <p className="mb-3 text-[13px] font-extrabold text-[var(--c-green-text)]">Sagazchat</p>
          <h1 className="c-title text-[2.5rem] sm:text-[4.4rem] lg:text-[5.2rem]">
            Cada conversa sem resposta é uma venda que você perde.
          </h1>
          <p className="mt-2 text-right"><Ticks time="09:13" /></p>
        </div>

        <div className="c-in c-pop max-w-[640px] px-5 py-4 text-[17px] leading-[1.5] sm:text-[18px]" style={{ animationDelay: '120ms' }}>
          O Sagazchat atende na hora, sem parecer robô, e passa para a sua equipe quando o cliente quer fechar. WhatsApp, Instagram e CRM no mesmo painel.
          <Ticks time="09:13" />
        </div>

        <div className="c-in c-pop w-full max-w-[420px] p-2" style={{ animationDelay: '240ms' }}>
          <p className="px-3 pb-2.5 pt-2 text-[16px] leading-snug">Quer começar agora ou prefere que a gente monte para você?</p>
          <div className="flex flex-col gap-1.5">
            <a href={PRICING_URL} className="c-btn c-btn-solid">Escolher meu plano <ArrowRight className="h-4 w-4" aria-hidden /></a>
            <a href={AGENDA_URL} className="c-btn">Quero que montem pra mim</a>
          </div>
          <p className="px-3 pb-1.5 pt-2.5 text-[12px] text-[var(--c-mute)]">Sem fidelidade · PRO a partir de R${PRO_PRICE_INT} no 1º mês</p>
        </div>

        <div className="mt-6"><Chip tone="green">Veja um atendimento acontecendo</Chip></div>
        <LiveThread />
      </div>
    </section>
  );
}
