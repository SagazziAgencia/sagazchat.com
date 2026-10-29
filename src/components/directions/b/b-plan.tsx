import { ArrowRight } from 'lucide-react';
import { getPlan } from '@/components/landing/pricing/plans-data';
import { PRO_PLAN, PRO_PRICE_INT, PRO_REGULAR, PRO_STEP } from '../data';

export function BPlan() {
  const lines = [PRO_STEP.base ?? '', ...PRO_STEP.delta].filter(Boolean);
  return (
    <section id="planos" className="py-20 lg:py-28">
      <div className="mx-auto grid max-w-[1280px] gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <p className="b-mono text-[12px] uppercase tracking-[0.14em] text-[var(--b-green-text)]">Planos</p>
          <h2 className="b-h mt-4 text-[2.5rem] sm:text-[4.2rem] lg:text-[5rem]">
            Comece pelo <span className="underline decoration-[var(--b-green)] decoration-[0.07em] underline-offset-[0.1em]">PRO.</span>
          </h2>
          <p className="mt-6 max-w-[38ch] text-[17px] leading-[1.55] text-[var(--b-mute)]">
            É o plano que a maioria escolhe: volume, integrações e uma call de onboarding para sair vendendo. Cada conexão é um canal ativo da sua operação, como o WhatsApp ou o Instagram.
          </p>
          <a href="/#pricing" className="mt-6 inline-block text-[15px] font-bold underline decoration-2 underline-offset-4 hover:text-[var(--b-green-text)]">
            Compare os 4 planos
          </a>

          <div className="mt-12 max-w-[460px] border-t-[3px] border-[var(--b-ink)] pt-4">
            <p className="b-mono text-[12px] uppercase tracking-[0.14em] text-[var(--b-mute)]">Os outros planos · 1 conexão · 1º mês</p>
            <ul className="b-mono mt-3 space-y-2.5 text-[14px]">
              {([['Basic', 'basic'], ['Basic + IA', 'basicIa'], ['PRO + IA', 'proIa']] as const).map(([n, t]) => (
                <li key={n} className="flex items-baseline gap-2">
                  <span>{n}</span>
                  <span className="b-leader" aria-hidden />
                  <span className="font-medium">R$ {getPlan(t, 1).price.split(',')[0]}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="mx-auto max-w-[640px] -rotate-[0.6deg] drop-shadow-[8px_8px_0_rgba(10,20,16,0.9)] lg:ml-auto lg:mr-0">
            <div className="border-2 border-b-0 border-[var(--b-ink)] bg-white px-6 pb-8 pt-8 sm:px-10">
              <div className="b-mono flex items-center justify-between text-[12px] uppercase tracking-[0.14em] text-[var(--b-mute)]">
                <span>Recibo do plano</span>
                <span className="rounded-[3px] bg-[var(--b-green)] px-2 py-0.5 font-medium text-[var(--b-ink)]">escolha da maioria</span>
              </div>

              <div className="mt-5 flex items-end justify-between gap-4 border-b-2 border-dashed border-[var(--b-ink)] pb-6">
                <div>
                  <p className="text-[2rem] font-extrabold leading-none tracking-tight">PRO</p>
                  <p className="mt-2 text-[14px] text-[var(--b-mute)]">{PRO_STEP.headline} · 1 conexão</p>
                </div>
                <span className="b-mono rounded-[3px] border-2 border-[var(--b-ink)] px-2 py-1 text-[12px] font-medium">−20% no 1º mês</span>
              </div>

              <ul className="b-mono mt-5 space-y-2.5 text-[14px]">
                {lines.map((f, i) => (
                  <li key={f} className="flex items-baseline gap-2">
                    <span className={i === 0 ? 'text-[var(--b-mute)]' : ''}>{i === 0 ? '+ ' : ''}{f}</span>
                    <span className="b-leader" aria-hidden />
                    <span className="text-[var(--b-green-text)]">{i === 0 ? 'incluso' : 'ok'}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 border-t-2 border-dashed border-[var(--b-ink)] pt-6">
                <p className="b-mono text-[12px] uppercase tracking-[0.14em] text-[var(--b-mute)]">Total do 1º mês</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-[1.4rem] font-bold">R$</span>
                  <span className="b-num text-[8rem] sm:text-[10rem]">{PRO_PRICE_INT}</span>
                  <span className="b-num text-[2.6rem] text-[var(--b-mute)]">,00</span>
                </div>
                <p className="b-mono mt-3 text-[14px]">depois {PRO_REGULAR}/mês</p>
              </div>

              <a href={PRO_PLAN.link} target="_blank" rel="noopener noreferrer" className="b-btn b-btn-primary mt-7 w-full justify-between">
                Contratar o PRO <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
              <p className="b-mono mt-4 text-center text-[12px] text-[var(--b-mute)]">Sem fidelidade · cancele quando quiser · migre sem perder dados</p>
            </div>
            <div className="b-zig" aria-hidden />
          </div>
        </div>
      </div>
    </section>
  );
}
