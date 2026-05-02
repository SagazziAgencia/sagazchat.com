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
    answer: 'A base começa rápido: conecte o número, organize a equipe e coloque as funções principais para rodar. Fluxos mais completos dependem da sua regra comercial.',
  },
  {
    question: 'Posso ter múltiplos atendentes usando o mesmo número de WhatsApp?',
    answer: 'Sim. Vários atendentes podem usar o mesmo número com histórico compartilhado, setores e contexto preservado.',
  },
  {
    question: 'Preciso de equipe técnica para montar automações e usar a IA?',
    answer: 'Não para começar. Os fluxos são visuais e a configuração é guiada. Cenários avançados podem envolver alguém técnico, mas o uso diário não depende disso.',
  },
  {
    question: 'Como funcionam os webhooks e para que servem?',
    answer: 'Webhook avisa ao Sagazchat que algo aconteceu em outro sistema. Assim você recupera checkout, envia pós-venda ou inicia um fluxo sem ação manual.',
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
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary mb-5 font-[family-name:var(--font-display)]">
              FAQ
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-[3rem] font-bold tracking-[-0.02em] leading-[1.1] text-slate-950">
              Dúvidas antes de{' '}
              <span className="italic font-medium text-primary">começar.</span>
            </h2>
            <p className="text-[15px] text-slate-600 leading-relaxed mt-5 max-w-xl mx-auto">
              O que costuma travar antes de colocar atendimento e automação no ar.
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


