'use client';

import {
  CheckCircle,
  MessageCircle,
  MoreVertical,
  Layers,
  BarChartBig,
  Briefcase,
  Eye,
  ArrowRight,
  Bot,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const ConnectionCard = ({
  name,
  role,
  phone,
  timestamp,
}: {
  name: string;
  role: string;
  phone: string;
  timestamp: string;
}) => (
    <div className="bg-white border border-gray-200 rounded-lg p-3 flex flex-col items-center text-center group hover:border-gray-300 hover:shadow-sm transition-all">
        <div className="w-full flex justify-between items-start mb-1">
            <Bot className="text-gray-400 w-3 h-3" />
            <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <MoreVertical className="text-gray-400 w-3 h-3" />
            </div>
        </div>
        <div className="flex items-center gap-2 mb-2">
            <MessageCircle className="w-4 h-4 text-gray-800" />
            <span className="font-bold text-gray-800 text-sm">{name}</span>
        </div>
        <Button
            variant="outline"
            className="w-full py-1 mb-2 border-red-200 text-red-500 hover:bg-red-50 text-[10px] h-auto bg-transparent"
        >
            Desconectar
        </Button>
        <div className="text-center">
            <div className="font-bold text-xs text-gray-800">{role}</div>
            <div className="text-[10px] text-gray-500 mt-0.5 font-mono">{phone}</div>
            <div className="text-[10px] text-gray-400 mt-0.5">{timestamp}</div>
        </div>
    </div>
);

const BenefitCard = ({
  icon,
  title,
  children,
  iconBg,
  iconColor,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  iconBg: string;
  iconColor: string;
}) => (
    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all hover:border-green-200 group h-full">
        <div className={`w-10 h-10 rounded-lg ${iconBg} flex items-center justify-center ${iconColor} mb-3`}>
            {icon}
        </div>
        <h4 className="font-bold text-gray-900 text-base mb-1">{title}</h4>
        <p className="text-xs text-gray-500 leading-relaxed">{children}</p>
    </div>
);


export function MultiWhatsapp() {
  return (
    <section className="py-20 lg:py-32 bg-white relative">
      <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle at center, #ddd 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center gap-12">
        
        {/* TOPO: Texto Centralizado */}
        <div className="text-center max-w-4xl mx-auto mb-8">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1] mb-4 text-gray-900">
                Múltiplos WhatsApps.<br/>
                <span className="text-green-600">Uma única tela.</span>
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                Centralize seu <span className="font-bold text-gray-800">time comercial</span> em uma <span className="font-bold text-gray-800">única tela</span>. Monitore atendimentos, elimine gargalos e transforme seu WhatsApp em uma <span className="font-bold text-gray-800">máquina de lucro previsível</span>.
            </p>
        </div>

        {/* ABAIXO: Grid de 2 Colunas */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center justify-center">

            {/* COLUNA 1 (ESQUERDA): Mockup do App */}
            <div className="relative w-full flex justify-center lg:justify-end order-2 lg:order-1 animate-fade-in-up">
                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-1.5 shadow-xl backdrop-blur-lg w-full max-w-[500px]">
                    <div className="bg-gray-100 p-4 rounded-t-lg">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                                <span className="w-3 h-3 rounded-full bg-green-500"></span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-b-lg">
                        <div className="mb-4">
                            <h2 className="text-xl font-bold text-gray-900 mb-1">Conexões Ativas</h2>
                            <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full border border-green-200">
                                Gerencie os números da sua equipe
                            </span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <ConnectionCard name="Iarley" role="Gerente Comercial" phone="+55 (31) 86...950" timestamp="26/11/25 13:21" />
                            <ConnectionCard name="Ana" role="Suporte N1" phone="+55 (11) 99...123" timestamp="26/11/25 14:05" />
                            <ConnectionCard name="Pedro" role="Vendas" phone="+55 (21) 97...888" timestamp="26/11/25 12:45" />
                            <ConnectionCard name="Sofia" role="Financeiro" phone="+55 (41) 96...555" timestamp="26/11/25 10:30" />
                        </div>
                    </div>
                </div>
            </div>

            {/* COLUNA 2 (DIREITA): 4 Benefícios em Grid + CTA */}
            <div className="flex flex-col gap-8 order-1 lg:order-2 w-full max-w-[500px] lg:max-w-none mx-auto animate-fade-in-up" style={{animationDelay: '200ms'}}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4"> 
                    <BenefitCard icon={<Layers />} title="Fim da Mistura de Conversas" iconBg="bg-green-100" iconColor="text-green-600">
                        Cada departamento tem seu espaço. Separe vendas de suporte e mantenha tudo organizado.
                    </BenefitCard>
                    <BenefitCard icon={<BarChartBig />} title="Decisões Baseadas em Dados" iconBg="bg-gray-100" iconColor="text-gray-500">
                        Com tudo centralizado, veja gargalos, tempos de resposta e performance real da equipe.
                    </BenefitCard>
                    <BenefitCard icon={<Briefcase />} title="Profissionalismo Total" iconBg="bg-emerald-100" iconColor="text-emerald-500">
                        Transmita confiança. Uma operação organizada reflete profissionalismo e aumenta o fechamento.
                    </BenefitCard>
                    <BenefitCard icon={<Eye />} title="Auditoria em Tempo Real" iconBg="bg-purple-100" iconColor="text-purple-500">
                        Monitore o que sua equipe fala. Corrija erros na hora e garanta o padrão de qualidade do seu atendimento.
                    </BenefitCard>
                </div>
                <div className="w-full">
                    <Button size="lg" className="w-full group relative h-auto px-8 py-4 bg-green-600 text-white rounded-xl font-bold text-base hover:bg-green-700 transition-all shadow-lg shadow-green-500/20 hover:shadow-xl hover:shadow-green-500/30 hover:-translate-y-1">
                        Começar Agora
                        <ArrowRight className="inline-block ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <p className="text-gray-500 text-xs mt-3 text-center flex items-center justify-center gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-green-600" /> 7 dias grátis sem compromisso.
                    </p>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
}
