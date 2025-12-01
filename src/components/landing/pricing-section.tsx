'use client';

import { CheckCircle, Zap, ArrowRight, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import React, { useState, useMemo } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const basicPlansData = [
  { id: 'basic1', connections: 1, name: 'Plano Basic', price: '117,00', priceSuffix: '/1º mês', subtext: 'de R$147 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/OB58ED24A', savings: null },
  { id: 'basic2', connections: 2, name: 'Basic - 2 Conexões', price: '194,00', priceSuffix: '/1º mês', subtext: 'de R$244 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/OFB41DC15', savings: 'ECONOMIA: R$ 50,00/mês' },
  { id: 'basic3', connections: 3, name: 'Basic - 3 Conexões', price: '255,00', priceSuffix: '/1º mês', subtext: 'de R$321 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/O2E96CAB8', savings: 'ECONOMIA: R$ 120,00/mês' },
  { id: 'basic4', connections: 4, name: 'Basic - 4 Conexões', price: '316,00', priceSuffix: '/1º mês', subtext: 'de R$398 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/O46C49D66', savings: 'ECONOMIA: R$ 190,00/mês' },
  { id: 'basic5', connections: 5, name: 'Basic - 5 Conexões', price: '370,00', priceSuffix: '/1º mês', subtext: 'de R$465 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/O93D60F58', savings: 'ECONOMIA: R$ 270,00/mês' },
  { id: 'basic6', connections: 6, name: 'Basic - 6 Conexões', price: '423,00', priceSuffix: '/1º mês', subtext: 'de R$532 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/O8ACD3E19', savings: 'ECONOMIA: R$ 350,00/mês' },
  { id: 'basic7', connections: 7, name: 'Basic - 7 Conexões', price: '476,00', priceSuffix: '/1º mês', subtext: 'de R$599 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/O37D3E178', savings: 'ECONOMIA: R$ 430,00/mês' },
  { id: 'basic8', connections: 8, name: 'Basic - 8 Conexões', price: '530,00', priceSuffix: '/1º mês', subtext: 'de R$666 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/O5AF4CEB8', savings: 'ECONOMIA: R$ 510,00/mês' },
  { id: 'basic9', connections: 9, name: 'Basic - 9 Conexões', price: '583,00', priceSuffix: '/1º mês', subtext: 'de R$733 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/O4B825F56', savings: 'ECONOMIA: R$ 590,00/mês' },
  { id: 'basic10', connections: 10, name: 'Basic - 10 Conexões', price: '636,00', priceSuffix: '/1º mês', subtext: 'de R$800 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/OFCE07F45', savings: 'ECONOMIA: R$ 670,00/mês' },
];

const basicPlanFeatures = [
  { text: 'Número(s) de whatsapp conectado(s)', key: 'connections' },
  { text: '{value} Webhook mensais', key: 'webhooks', base: 15000 },
  { text: '{value} Acessos simultâneos', key: 'access', base: 10 },
  { text: '{value} Departamentos', key: 'departments', base: 10 },
  { text: '{value} Grupo(s) de WhatsApp', key: 'groups', base: 1 },
  { text: '2 Kanban(s)', key: 'kanbans' },
  { text: 'Disparos em massa ilimitados', key: 'mass-shooting' },
  { text: 'Etiquetas ilimitadas', key: 'tags' },
  { text: 'Mensagens ilimitadas', key: 'messages' },
  { text: 'Robos ilimitados', key: 'bots' },
  { text: 'Campanhas ilimitadas', key: 'campaigns' },
  { text: 'Video Aulas semanais', key: 'classes' },
  { text: 'Suporte humanizado', key: 'support' },
  { text: '20% de comissão', key: 'commission' },
];

const otherPlansData = [
  {
    name: 'Plano PRO',
    price: '157,00',
    priceSuffix: '/1º mês',
    subtext: 'de R$197 no mês seguinte',
    features: [
      '1 Número de whatsapp conectado',
      '30.000 Webhook mensais',
      'Função Integração (Post, Put, Get)',
      '20 Acessos simultâneos',
      '20 Departamentos',
      '3 Grupos de WhatsApp',
      '1 Agenda',
      '5 Kanbans',
      'Disparos em massa ilimitados',
      'Etiquetas ilimitadas',
      'Mensagens ilimitadas',
      'Robos ilimitados',
      'Campanhas ilimitadas',
      'Video Aulas semanais',
      'Suporte humanizado',
      '1 Call',
      '20% de comissão',
    ],
    isRecommended: true,
    link: 'https://checkout.sagazchatbot.com.br/O3491F181',
  },
  {
    name: 'Plano Basic + IA',
    price: '217,00',
    priceSuffix: '/1º mês',
    subtext: 'de R$267 no mês seguinte',
    features: [
      '1 Número de whatsapp conectado',
      '1 Agente IA',
      '15.000 Webhook mensais',
      '5MM Tokens',
      '10 Acessos simultâneos',
      '10 Departamentos',
      '1 Grupo de WhatsApp',
      '2 Kanbans',
      'Disparos em massa ilimitados',
      'Etiquetas ilimitadas',
      'Mensagens ilimitadas',
      'Robos ilimitados',
      'Campanhas ilimitadas',
      'Video Aulas semanais',
      'Suporte humanizado',
    ],
    isRecommended: false,
    link: 'https://checkout.sagazchatbot.com.br/OC9149ECD',
  },
  {
    name: 'Plano PRO + IA',
    price: '297,00',
    priceSuffix: '/mês',
    subtext: 'de R$347 no mês seguinte',
    features: [
      '1 Número de whatsapp conectado',
      '2 Agentes IA',
      '30.000 Webhook mensais',
      'Função Integração (Post, Put, Get)',
      '10 MM Tokens',
      '20 Acessos simultâneos',
      '20 Departamentos',
      '3 Grupos de WhatsApp',
      '1 Agenda',
      '5 Kanbans',
      'Disparos em massa ilimitados',
      'Etiquetas ilimitadas',
      'Mensagens ilimitadas',
      'Robos ilimitados',
      'Campanhas ilimitadas',
      'Video Aulas semanais',
      'Suporte humanizado',
      '1 Call',
    ],
    isRecommended: false,
    link: 'https://checkout.sagazchatbot.com.br/OE75E3464',
  },
];


export function PricingSection() {
  const [selectedPlanId, setSelectedPlanId] = useState(basicPlansData[0].id);

  const selectedBasicPlan = useMemo(() => {
    return basicPlansData.find(p => p.id === selectedPlanId) || basicPlansData[0];
  }, [selectedPlanId]);

  const formatNumber = (num: number) => new Intl.NumberFormat('pt-BR').format(num);

  return (
    <section id="pricing" className="py-20 bg-[#050505] text-white">
       <div className="absolute inset-0 bg-[radial-gradient(rgba(146,214,57,0.04)_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none z-0"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Encontre o plano perfeito para você
          </h2>
          <p className="text-lg text-gray-400 mt-4">
            Comece pequeno ou vá com tudo. Temos a opção certa para cada fase do seu negócio.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 items-start">
          
          {/* Plano Basic Interativo */}
          <div
            className='bg-card rounded-2xl p-6 flex flex-col h-full border-2 transition-all duration-300 border-white/10 shadow-lg hover:shadow-xl hover:-translate-y-2'
          >
            <div className="flex-grow pt-8">
              <h3 className="text-xl font-bold text-white mb-2">{selectedBasicPlan.name}</h3>
              
              <div className="mb-4">
                <span className="text-4xl font-extrabold text-white">R${selectedBasicPlan.price}</span>
                <span className="text-lg font-medium text-gray-400">{selectedBasicPlan.priceSuffix}</span>
                <p className="text-xs text-gray-500">{selectedBasicPlan.subtext}</p>
              </div>

              <div className="mb-4">
                <label className="text-sm font-medium text-gray-300 block mb-2">Número de Conexões:</label>
                <Select value={selectedPlanId} onValueChange={setSelectedPlanId}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecione..." />
                  </SelectTrigger>
                  <SelectContent>
                    {basicPlansData.map(plan => (
                      <SelectItem key={plan.id} value={plan.id}>
                        {plan.connections} Conexão(ões)
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {selectedBasicPlan.savings && (
                <div className="my-4 p-3 bg-primary/10 rounded-lg text-center">
                  <p className="font-bold text-primary flex items-center justify-center gap-2 text-sm">
                    <Zap className="h-4 w-4"/> {selectedBasicPlan.savings}
                  </p>
                </div>
              )}

              <Button
                asChild
                size="lg"
                className="group w-full relative font-bold text-base h-11 mb-6 bg-[#92D639] text-black rounded-lg hover:bg-[#82c232] transition-all shadow-[0_0_20px_rgba(146,214,57,0.4)] hover:shadow-[0_0_40px_rgba(146,214,57,0.6)] hover:-translate-y-1"
              >
                <a href={selectedBasicPlan.link} target="_blank" rel="noopener noreferrer">
                  <UserPlus size={20} />
                  Assinar Agora
                  <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              
              <div className="border-t my-4 border-white/10"></div>
              
              <ul className="space-y-3 text-sm">
                {basicPlanFeatures.map((feature) => {
                  let featureText: React.ReactNode;
                  if (feature.key === 'connections') {
                    featureText = `${selectedBasicPlan.connections} ${feature.text}`;
                  } else if (feature.base) {
                    const totalValue = feature.base * selectedBasicPlan.connections;
                    featureText = feature.text.replace('{value}', formatNumber(totalValue));
                  } else {
                    featureText = feature.text;
                  }
                  
                  return (
                    <li key={feature.key} className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-400">{featureText}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Outros Planos */}
          {otherPlansData.map((plan, index) => (
            <div
              key={index}
              className={cn(
                'bg-card rounded-2xl p-6 flex flex-col h-full border-2 transition-all duration-300',
                plan.isRecommended
                  ? 'border-primary lg:scale-105 shadow-2xl shadow-primary/10'
                  : 'border-white/10 shadow-lg hover:shadow-xl hover:-translate-y-2'
              )}
            >
              {plan.isRecommended && (
                <div className="text-center mb-4">
                  <span className="bg-primary text-primary-foreground text-xs font-bold py-1 px-4 rounded-full">
                    RECOMENDADO
                  </span>
                </div>
              )}
              <div className={cn("flex-grow", !plan.isRecommended && "pt-8")}>
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                
                <div className="mb-4">
                  <span className="text-4xl font-extrabold text-white">R${plan.price}</span>
                  <span className="text-lg font-medium text-gray-400">{plan.priceSuffix}</span>
                  <p className="text-xs text-gray-500">{plan.subtext}</p>
                </div>

                <Button
                  asChild
                  size="lg"
                  className="group w-full relative font-bold text-base h-11 mb-6 bg-[#92D639] text-black rounded-lg hover:bg-[#82c232] transition-all shadow-[0_0_20px_rgba(146,214,57,0.4)] hover:shadow-[0_0_40px_rgba(146,214,57,0.6)] hover:-translate-y-1"
                >
                  <a href={plan.link} target="_blank" rel="noopener noreferrer">
                    <UserPlus size={20} />
                    Assinar Agora
                    <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                
                <div className="border-t my-4 border-white/10"></div>
                
                <ul className="space-y-3 text-sm">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}