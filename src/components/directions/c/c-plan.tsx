import { ArrowRight, Check, Plus } from 'lucide-react';
import { PRO_PLAN, PRO_PRICE_INT, PRO_REGULAR, PRO_STEP } from '../data';
import { Chip, Ticks } from './c-bits';

export function CPlan() {
  return (
    <section id="planos" className="scroll-mt-16 px-4 pb-24 pt-6 sm:px-6 lg:px-12 lg:pb-32 lg:pt-10">
      <div className="mx-auto flex max-w-[900px] flex-col gap-3 lg:mx-0">
        <Chip>Planos</Chip>

        <div className="c-in c-pop max-w-[780px] px-5 py-5 sm:px-8 sm:py-7">
          <p className="mb-3 text-[13px] font-extrabold text-[var(--c-green-text)]">Sagazchat</p>
          <h2 className="c-title text-[2.2rem] sm:text-[3.8rem] lg:text-[4.4rem]">Comece pelo plano que a maioria escolhe.</h2>
          <p className="mt-4 max-w-[46ch] text-[17px] leading-[1.5] text-[var(--c-mute)]">
            Cada conexão é um canal ativo da sua operação, como o WhatsApp ou o Instagram. Veja o preço na hora e ajuste quando crescer.
          </p>
          <p className="mt-2 text-right"><Ticks time="09:07" /></p>
        </div>

        {/* mensagem de catálogo: o plano como cartão de produto no chat */}
        <div className="c-in c-pop w-full max-w-[560px] overflow-hidden p-0">
          <div className="flex items-center justify-between gap-3 bg-[var(--c-ink)] px-6 py-4 text-white">
            <span className="text-[1.9rem] font-extrabold leading-none tracking-tight">PRO</span>
            <span className="rounded-full bg-[var(--c-green)] px-3 py-1 text-[12px] font-extrabold text-[var(--c-ink)]">escolha da maioria</span>
          </div>
          <div className="px-6 pb-2 pt-5">
            <p className="text-[14px] text-[var(--c-mute)]">{PRO_STEP.headline} · 1 conexão</p>
            <span className="mt-3 inline-flex rounded-full bg-[#e3f8e9] px-2.5 py-1 text-[12px] font-extrabold text-[#0b4d24]">−20% no 1º mês</span>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-[1.3rem] font-bold">R$</span>
              <span className="text-[6.4rem] font-extrabold leading-[0.9] tracking-[-0.06em] tabular-nums">{PRO_PRICE_INT}</span>
              <span className="text-[15px] font-bold text-[var(--c-mute)]">no 1º mês</span>
            </div>
            <p className="mt-2 text-[15px] text-[var(--c-mute)]">depois <strong className="text-[var(--c-ink)]">{PRO_REGULAR}/mês</strong></p>
          </div>
          <ul className="mx-6 mt-4 divide-y divide-[var(--c-line)] border-t border-[var(--c-line)]">
            <li className="flex items-center gap-2.5 py-2.5 text-[14px] font-bold text-[var(--c-mute)]">
              <Plus className="h-4 w-4 text-[var(--c-green-text)]" strokeWidth={3} aria-hidden /> {PRO_STEP.base}
            </li>
            {PRO_STEP.delta.map((f) => (
              <li key={f} className="flex items-center gap-2.5 py-2.5 text-[15px]">
                <Check className="h-4 w-4 shrink-0 text-[var(--c-green-text)]" strokeWidth={3.5} aria-hidden /> {f}
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-1.5 p-2 pt-4">
            <a href={PRO_PLAN.link} target="_blank" rel="noopener noreferrer" className="c-btn c-btn-solid">Contratar o PRO <ArrowRight className="h-4 w-4" aria-hidden /></a>
            <a href="/#pricing" className="c-btn">Comparar os 4 planos</a>
          </div>
          <p className="px-5 pb-3 pt-1 text-[12px] text-[var(--c-mute)]">Sem fidelidade · cancele quando quiser · migre sem perder dados<Ticks time="09:07" /></p>
        </div>
      </div>
    </section>
  );
}
