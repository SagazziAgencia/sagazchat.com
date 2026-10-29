'use client';

import { useState, type FormEvent } from 'react';
import { Check, Users, ClipboardList, Wrench, PackageCheck, ChevronRight, Send } from 'lucide-react';
import { AnimateIn } from '@/components/ui/animate-in';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ctaMobileFull, ctaPrimary } from './cta-styles';

/*
 * SETUP ASSISTIDO ("A gente monta com você").
 * Decisão do commit 06fae2a mantida: timeline de 4 etapas. Voltou a copy aprovada no título
 * e ganhou formulário curto aqui mesmo (antes os botões só rolavam pra #enterprise).
 *
 * TODO [CONFIRMAR]: prazo de entrega, valor do setup e o que exatamente está incluso. Nada
 * disso está no vault/central de ajuda, então saiu do texto ("até 14 dias", "30 dias de
 * acompanhamento", "integração com CRM/ERP"). Reentra só com fato confirmado.
 */

const BULLETS = ['Implantação conduzida por um especialista, não por documentação.'];

const STEPS = [
  { label: 'Reunião', icon: Users },
  { label: 'Formulário', icon: ClipboardList },
  { label: 'Criação', icon: Wrench },
  { label: 'Entrega', icon: PackageCheck },
];

const ATTENDANTS = ['Só eu', '2 a 5 pessoas', '6 a 15 pessoas', 'Mais de 15 pessoas'];

type Status = 'idle' | 'sent' | 'error';

const fieldClass =
  'h-11 border-slate-300 bg-white text-base text-slate-900 placeholder:text-slate-400 md:text-base';

export function EnterpriseSection() {
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // TODO [CONFIRMAR destino do lead]: ainda não existe endpoint/planilha/WhatsApp pra receber
    // este formulário. Até definir, nada é enviado: em dev mostra "Recebido" pra validar o
    // visual; em produção avisa que o envio está indisponível em vez de fingir que chegou.
    if (process.env.NODE_ENV !== 'production') {
      setStatus('sent');
    } else {
      setStatus('error');
    }
  };

  return (
    <section id="setup" className="scroll-mt-20 bg-[#0F172A] py-10 sm:py-14 lg:py-20">
      <div className="mx-auto grid max-w-[1360px] grid-cols-1 items-start gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-16">
        {/* Left — Copy + etapas */}
        <AnimateIn from="left" delay={100}>
          <div className="flex flex-col gap-6 text-center lg:text-left">
            <div className="space-y-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand font-[family-name:var(--font-sans)]">
                Setup feito pra você
              </p>

              <h2 className="mx-auto max-w-[560px] text-balance font-[family-name:var(--font-sans)] text-[2rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-white sm:text-[2.5rem] lg:mx-0 lg:text-[2.5rem]">
                Não quer configurar sozinho?{' '}
                <span className="font-extrabold text-brand">A gente monta com você.</span>
              </h2>

              <p className="mx-auto max-w-xl text-pretty text-[15px] leading-[1.6] text-slate-300 lg:mx-0">
                Da primeira reunião à entrega: a gente cuida do briefing, monta as automações e entrega tudo pronto pra rodar, sem você virar especialista em automação.
              </p>
            </div>

            <ul className="flex w-full flex-col gap-3.5 text-left">
              {BULLETS.map((bullet) => (
                <li key={bullet} className="flex items-start justify-center gap-2.5 max-sm:hidden lg:justify-start">
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary">
                    <Check className="h-3 w-3 text-white" strokeWidth={3.5} />
                  </span>
                  <span className="text-[15px] leading-[1.5] text-white">{bullet}</span>
                </li>
              ))}
            </ul>

            {/* Timeline de 4 etapas (mantida) */}
            <div className="relative">
              <div className="absolute -inset-px -z-10 rounded-2xl bg-gradient-to-br from-brand/15 via-transparent to-transparent blur-2xl" />
              <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 shadow-[0_28px_80px_rgba(0,0,0,0.35)] backdrop-blur-sm sm:p-6">
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand">
                    Como funciona
                  </span>
                  <span className="rounded-full border border-brand/30 bg-brand/10 px-2.5 py-1 text-[11px] font-bold text-brand">
                    4 etapas
                  </span>
                </div>

                <ol className="flex items-center justify-between gap-1 sm:gap-2">
                  {STEPS.map((step, idx) => {
                    const Icon = step.icon;
                    return (
                      <li key={step.label} className="contents">
                        <div className="flex flex-1 flex-col items-center gap-2.5">
                          <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-brand/30 bg-brand/10 text-brand sm:h-14 sm:w-14">
                            <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.75} />
                          </span>
                          <span className="text-[12px] font-semibold text-white sm:text-[13px]">
                            {step.label}
                          </span>
                        </div>
                        {idx < STEPS.length - 1 && (
                          <ChevronRight
                            className="h-4 w-4 flex-shrink-0 text-slate-500 sm:h-5 sm:w-5"
                            strokeWidth={2}
                            aria-hidden
                          />
                        )}
                      </li>
                    );
                  })}
                </ol>

                <p className="mt-5 text-center text-[13px] leading-[1.5] text-slate-300">
                  Você participa do começo e do fim. O meio a gente resolve.
                </p>
              </div>
            </div>
          </div>
        </AnimateIn>

        {/* Right — Formulário curto */}
        <AnimateIn from="right" delay={200}>
          <div className="rounded-2xl bg-white p-6 shadow-[0_28px_80px_rgba(0,0,0,0.35)] sm:p-8">
            {status === 'sent' ? (
              <div role="status" className="flex flex-col items-center gap-3 py-10 text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="h-7 w-7" strokeWidth={3} />
                </span>
                <p className="font-[family-name:var(--font-sans)] text-xl font-extrabold text-slate-950">Recebido</p>
                <p className="max-w-xs text-[14px] leading-relaxed text-slate-600">
                  Estado de teste (só aparece em desenvolvimento): o envio real ainda não tem destino.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <h3 className="font-[family-name:var(--font-sans)] text-xl font-extrabold tracking-tight text-slate-950">
                    Conta o básico
                  </h3>
                  <p className="mt-1 text-[14px] leading-relaxed text-slate-600">
                    Só o essencial. Reunião e formulário completo vêm na sequência.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="setup-nome" className="text-[13px] font-semibold text-slate-800">Nome</Label>
                    <Input id="setup-nome" name="nome" required autoComplete="name" className={fieldClass} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="setup-whatsapp" className="text-[13px] font-semibold text-slate-800">WhatsApp</Label>
                    <Input
                      id="setup-whatsapp"
                      name="whatsapp"
                      type="tel"
                      inputMode="tel"
                      required
                      autoComplete="tel"
                      placeholder="(00) 00000-0000"
                      className={fieldClass}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="setup-segmento" className="text-[13px] font-semibold text-slate-800">Segmento</Label>
                    <Input
                      id="setup-segmento"
                      name="segmento"
                      required
                      placeholder="Ex.: clínica"
                      className={fieldClass}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="setup-atendentes" className="text-[13px] font-semibold text-slate-800">Quem atende hoje</Label>
                    <select
                      id="setup-atendentes"
                      name="atendentes"
                      required
                      defaultValue=""
                      className={`${fieldClass} rounded-md border px-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`}
                    >
                      <option value="" disabled>Escolha</option>
                      {ATTENDANTS.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="setup-automatizar" className="text-[13px] font-semibold text-slate-800">
                    O que você quer automatizar
                  </Label>
                  <Textarea
                    id="setup-automatizar"
                    name="automatizar"
                    required
                    rows={3}
                    placeholder="Ex.: responder preço, agendar horário, cobrar quem não pagou"
                    className="min-h-[88px] border-slate-300 bg-white text-base text-slate-900 placeholder:text-slate-400 md:text-base"
                  />
                </div>

                <button type="submit" className={`${ctaPrimary} ${ctaMobileFull} mt-1 w-full`}>
                  <Send className="h-4 w-4" />
                  Quero que montem pra mim
                </button>

                {status === 'error' && (
                  <p role="alert" className="text-center text-[13px] font-medium text-red-700">
                    O envio por aqui ainda não está ativo. Tente de novo em breve.
                  </p>
                )}
              </form>
            )}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
