import { ArrowRight, Check, Plus } from 'lucide-react';
import { PRO_PLAN, PRO_PRICE_INT, PRO_REGULAR, PRO_STEP } from '../data';

export function APlan() {
  return (
    <section id="planos" className="relative overflow-hidden border-t border-[var(--a-line)] py-20 lg:py-28">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[900px] -translate-x-1/2"
        style={{ background: 'radial-gradient(closest-side, rgba(23,199,90,0.14), transparent)' }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="a-mono text-[12px] text-[var(--a-green)]">planos</p>
            <h2 className="a-display mt-4 text-[2.2rem] sm:text-[3.2rem] lg:text-[3.8rem]">
              Comece pelo plano <span className="text-[var(--a-green)]">que a maioria escolhe.</span>
            </h2>
          </div>
          <p className="max-w-[44ch] text-[16px] leading-[1.6] text-[var(--a-mute)] lg:col-span-5 lg:pb-2">
            Cada conexão é um canal ativo da sua operação, como o WhatsApp ou o Instagram. Veja o preço na hora e ajuste quando crescer.
          </p>
        </div>

        <div className="a-beam mt-12 grid overflow-hidden lg:grid-cols-12">
          <div className="flex flex-col justify-between gap-10 p-7 sm:p-10 lg:col-span-5 lg:border-r lg:border-[var(--a-line)]">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[28px] font-extrabold tracking-tight">PRO</span>
                <span className="a-mono rounded-full bg-[rgba(23,199,90,0.14)] px-2.5 py-1 text-[11px] font-medium text-[var(--a-green)]">escolha da maioria</span>
              </div>
              <p className="mt-1 text-[14px] text-[var(--a-mute)]">{PRO_STEP.headline}</p>
            </div>

            <div>
              <span className="a-mono inline-flex rounded-full border border-[rgba(23,199,90,0.4)] px-2.5 py-1 text-[11px] text-[var(--a-green)]">−20% no 1º mês</span>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-[18px] font-semibold text-[var(--a-mute)]">R$</span>
                <span className="text-[6.2rem] font-extrabold leading-[0.85] tracking-[-0.06em] tabular-nums sm:text-[7.4rem]">{PRO_PRICE_INT}</span>
                <span className="text-[15px] font-semibold text-[var(--a-mute)]">no 1º mês</span>
              </div>
              <p className="mt-3 text-[15px] text-[var(--a-mute)]">
                depois <span className="font-semibold text-white tabular-nums">{PRO_REGULAR}/mês</span> · 1 conexão
              </p>
              <a
                href={PRO_PLAN.link}
                target="_blank"
                rel="noopener noreferrer"
                className="a-btn-primary mt-7 inline-flex h-[54px] w-full items-center justify-between rounded-[10px] px-5 text-[15px] font-bold"
              >
                Contratar o PRO <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
              <p className="a-mono mt-3 text-[12px] text-[var(--a-dim)]">Sem fidelidade · cancele quando quiser · migre sem perder dados</p>
            </div>
          </div>

          <div className="flex flex-col p-7 sm:p-10 lg:col-span-7">
            <p className="flex items-center gap-2 border-b border-dashed border-[var(--a-line)] pb-4 text-[14px] font-medium text-[var(--a-mute)]">
              <Plus className="h-4 w-4 text-[var(--a-green)]" strokeWidth={3} aria-hidden /> {PRO_STEP.base}
            </p>
            <ul className="mt-8 grid flex-1 content-start gap-x-8 gap-y-7 sm:grid-cols-2 [&>li]:text-[16px]">
              {PRO_STEP.delta.map((f) => (
                <li key={f} className="flex items-start gap-3 text-[15px] leading-snug">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[rgba(23,199,90,0.16)]">
                    <Check className="h-3 w-3 text-[var(--a-green)]" strokeWidth={3.5} aria-hidden />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <p className="mt-10 border-t border-dashed border-[var(--a-line)] pt-5 text-[14px] text-[var(--a-mute)]">
              Precisa de agente de IA respondendo?{' '}
              <a href="/#pricing" className="font-semibold text-white underline decoration-[var(--a-green)] underline-offset-4">Compare os 4 planos</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
