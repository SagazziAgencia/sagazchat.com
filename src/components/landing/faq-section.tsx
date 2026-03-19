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
    answer: 'A configuração inicial é super rápida! Em menos de 10 minutos, você consegue conectar seu número de WhatsApp e começar a usar as funcionalidades básicas. Para criar fluxos de automação mais complexos, o tempo pode variar, mas nossa interface intuitiva de arrastar e soltar torna o processo muito ágil.',
  },
  {
    question: 'Posso ter múltiplos atendentes usando o mesmo número de WhatsApp?',
    answer: 'Sim! Esse é um dos nossos maiores diferenciais. Nossa plataforma foi projetada para equipes, permitindo que vários atendentes acessem a mesma caixa de entrada, colaborem em conversas e atendam clientes simultaneamente, tudo a partir de um único número de WhatsApp.',
  },
  {
    question: 'Como a inteligência artificial ajuda a qualificar os leads?',
    answer: 'Nossa IA pode ser configurada para fazer perguntas-chave aos seus leads assim que eles entram em contato. Com base nas respostas, a IA qualifica o lead, aplica etiquetas (ex: "Lead Quente", "Curioso") e o encaminha automaticamente para o vendedor ou departamento correto, otimizando o tempo da sua equipe.',
  },
  {
    question: 'Como funcionam os webhooks e para que servem?',
    answer: 'Webhooks são como "notificações automáticas" entre sistemas. Por exemplo, quando uma venda é aprovada na sua plataforma de pagamento (Hotmart, Kiwify, etc.), ela envia um webhook para o Sagazchat, que pode então iniciar um fluxo automático para enviar os dados de acesso ao cliente, tudo sem intervenção manual.',
  },
  {
    question: 'Existe algum contrato de fidelidade ou posso cancelar quando quiser?',
    answer: 'Não há contrato de fidelidade. Nossos planos são baseados em assinaturas mensais e você tem total liberdade para cancelar a qualquer momento, sem taxas ou multas. Acreditamos na qualidade do nosso produto para manter você como nosso cliente.',
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
              Tirando todas as suas dúvidas para você tomar a melhor decisão.
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


