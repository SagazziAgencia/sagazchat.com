'use client';

import React from 'react';
import {
  Users,
  FileText,
  AtSign,
  Hourglass,
  Eye,
  PlusSquare,
  Lock,
  Rocket,
  Star,
  Headphones,
  BrainCircuit,
  FlaskConical,
  Lightbulb,
  Search,
  Download,
  UserCog,
  ArrowRight,
  UserPlus
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  {
    icon: <FileText size={24} className="text-[#92D639]" />,
    title: 'Exporte Membros',
    description: 'Gere planilhas com todos os participantes de um grupo com um único clique.',
  },
  {
    icon: <Eye size={24} className="text-[#92D639]" />,
    title: 'Ative para Interação',
    description: 'Escolha quais grupos aparecem no seu painel de bate-papo ao vivo.',
  },
  {
    icon: <AtSign size={24} className="text-[#92D639]" />,
    title: 'Mencione Todos',
    description: 'Notifique todos os membros de um grupo de uma só vez em suas mensagens automatizadas.',
  },
  {
    icon: <PlusSquare size={24} className="text-[#92D639]" />,
    title: 'Conteúdo Direcionado',
    description: 'Envie textos, áudios, imagens ou vídeos diretamente para grupos específicos via fluxo.',
  },
  {
    icon: <Hourglass size={24} className="text-[#92D6D9]" />,
    title: 'Atraso Inteligente',
    description: 'Programe pausas entre os envios para simular uma comunicação mais natural e humana.',
  },
  {
    icon: <UserCog size={24} className="text-[#92D639]" />,
    title: 'Gestão por Assinatura',
    description: 'Adicione ou remova membros automaticamente com base no status da assinatura.',
  },
];

export function GroupManagerSection() {
  return (
    <section className="py-20 lg:py-32 bg-white text-gray-800 relative bg-pattern">
       <div className="pattern-mask-light"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-1 gap-16 items-center">
          
          {/* Left Column */}
          <div className="space-y-10">
            <div className="space-y-4 text-center">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
                Transforme Grupos do WhatsApp em {' '}
                <span className="text-[#92D639]">Comunidades Lucrativas</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Assuma o controle total da sua comunicação em grupos. Importe, gerencie, exporte membros e automatize interações com o nosso poderoso Gerente de Grupos.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 max-w-4xl mx-auto">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#92D639]/10 rounded-lg flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 flex justify-center">
                <Button size="lg" className="group w-full sm:w-auto relative px-8 py-4 bg-[#92D639] text-black rounded-lg font-bold text-lg hover:bg-[#82c232] transition-all shadow-[0_0_20px_rgba(146,214,57,0.4)] hover:shadow-[0_0_40px_rgba(146,214,57,0.6)] hover:-translate-y-1 h-auto">
                  <UserPlus size={20} />
                  Assinar Agora
                  <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .bg-pattern {
            background-image: radial-gradient(#e5e7eb 1px, transparent 1px);
            background-size: 24px 24px;
        }
        .pattern-mask-light {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle at center, transparent 30%, white 80%);
            pointer-events: none;
            z-index: 0;
        }
        .shadow-soft {
            box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05);
        }
      `}</style>
    </section>
  );
}
