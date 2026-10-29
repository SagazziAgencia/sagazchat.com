'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';
import { AnimateIn } from '@/components/ui/animate-in';

/*
 * Só entra pergunta com fato no vault/central de ajuda.
 * TODO [CONFIRMAR] pra entrar: valor e prazo do setup, regra de cancelamento (imediato ou fim
 * do ciclo, multa, reembolso), formas de pagamento. Hoje não há fonte documentada pra nenhum dos três.
 */
const faqItems = [
  {
    question: 'É WhatsApp oficial ou não oficial? Corro risco de bloqueio?',
    answer:
      'Tem os dois. O WhatsApp por QR Code conecta o número do celular e depende da sessão continuar ativa. O WhatsApp Oficial usa a API da Meta e é mais estável. Nos disparos em massa, o Sagazchat usa intervalo aleatório e pausa por lote pra proteger o número, mas nenhum envio em massa zera o risco: use número dedicado e não misture disparo pesado com atendimento humano sem estratégia.',
  },
  {
    question: 'Qual é o tempo médio para configurar e começar a usar o Sagazchat?',
    answer: 'A base começa rápido: conecte o número, organize a equipe e coloque as funções principais para rodar. Fluxos mais completos dependem da sua regra comercial.',
  },
  {
    question: 'Vocês montam tudo pra mim?',
    answer: 'Sim. Preencha o formulário da seção “A gente monta com você”. Depois vêm reunião, formulário completo, criação e entrega: você participa do começo e do fim, e o meio a gente resolve.',
  },
  {
    question: 'Posso ter múltiplos atendentes usando o mesmo número de WhatsApp?',
    answer: 'Sim. Vários atendentes podem usar o mesmo número com histórico compartilhado, setores e contexto preservado.',
  },
  {
    question: 'A IA responde sozinha? E se o cliente mandar áudio?',
    answer: 'Você cria o agente e treina com a sua base: preços, regras, processos. Ele responde sozinho, transcreve o áudio e usa o contexto da conversa. Você define quando a conversa passa pra um atendente do seu time.',
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
    question: 'Existe contrato de fidelidade?',
    answer: 'Não. Os planos são recorrentes, cobrados por mês, e você não assume período mínimo. A ideia é manter sua operação porque faz sentido, não porque ficou presa.',
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="py-10 sm:py-14 lg:py-24 bg-white text-slate-900 scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <AnimateIn>
          <div className="text-center mb-8 lg:mb-12 flex flex-col items-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary mb-5 font-[family-name:var(--font-sans)]">
              FAQ
            </p>
            <h2 className="font-[family-name:var(--font-sans)] text-3xl sm:text-4xl lg:text-[3rem] font-extrabold tracking-[-0.02em] leading-[1.1] text-slate-950">
              Dúvidas antes de{' '}
              <span className="font-extrabold text-primary">começar.</span>
            </h2>
            <p className="hidden text-[15px] text-slate-600 leading-relaxed mt-5 max-w-xl mx-auto sm:block">
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
