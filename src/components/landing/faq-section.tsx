'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';
import { AnimateIn } from '@/components/ui/animate-in';

const faqItems = [
  {
    question: 'Qual é o tempo médio para configurar e começar a usar o Sagazchat?',
    answer: 'A base da operação começa rápido: conectar o número, organizar a equipe e colocar as funções principais para rodar leva poucos minutos. Fluxos mais completos dependem da sua regra comercial, mas a estrutura visual acelera bastante esse processo.',
  },
  {
    question: 'Posso ter múltiplos atendentes usando o mesmo número de WhatsApp?',
    answer: 'Sim. O Sagazchat foi feito para operação em equipe: mais de um atendente pode trabalhar no mesmo número, com histórico compartilhado, organização por setores e contexto preservado na conversa.',
  },
  {
    question: 'Preciso de equipe técnica para montar automações e usar a IA?',
    answer: 'Não para começar. A plataforma foi desenhada para operação comercial e atendimento, com fluxos visuais e configuração guiada. Se quiser levar integrações e cenários avançados mais longe, aí sim pode envolver alguém técnico, mas o uso diário não depende disso.',
  },
  {
    question: 'Como funcionam os webhooks e para que servem?',
    answer: 'Webhook é o gatilho que avisa ao Sagazchat que algo aconteceu em outro sistema. Com isso, você pode recuperar checkout, enviar mensagem pós-venda, atualizar dados do lead ou iniciar um fluxo sem depender de ação manual da equipe.',
  },
  {
    question: 'Existe algum contrato de fidelidade ou posso cancelar quando quiser?',
    answer: 'Não existe fidelidade. Os planos são recorrentes e você pode cancelar quando quiser, sem multa contratual. A ideia é manter sua operação porque faz sentido, não porque ficou presa.',
  },
];

export function FaqSection() {
  return (
    <section className="py-20 lg:py-32 bg-white text-slate-900">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <AnimateIn>
          <div className="text-center mb-12 flex flex-col items-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary mb-4">
              FAQ
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-[3rem] font-bold tracking-tight leading-[1.15] text-slate-900">
              Perguntas Frequentes
            </h2>
            <p className="text-base text-slate-600 mt-4 max-w-2xl mx-auto">
              As objeções mais comuns antes de colocar atendimento e automação para rodar.
            </p>
          </div>
        </AnimateIn>

        <AnimateIn delay={200}>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-2">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-slate-50 border border-slate-200 rounded-xl px-6 transition-colors hover:bg-slate-100"
              >
                <AccordionTrigger className="text-left font-semibold text-base hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pt-2 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        </AnimateIn>
      </div>
    </section>
  );
}


