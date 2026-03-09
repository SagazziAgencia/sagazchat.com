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
    icon: <FileText size={20} className="text-[#92D639]/60" />,
    title: 'Exporte Membros',
    description: 'Gere planilhas com todos os participantes de um grupo com um único clique.',
  },
  {
    icon: <Eye size={20} className="text-[#92D639]/60" />,
    title: 'Ative para Interação',
    description: 'Escolha quais grupos aparecem no seu painel de bate-papo ao vivo.',
  },
  {
    icon: <AtSign size={20} className="text-[#92D639]/60" />,
    title: 'Mencione Todos',
    description: 'Notifique todos os membros de um grupo de uma só vez em suas mensagens automatizadas.',
  },
  {
    icon: <PlusSquare size={20} className="text-[#92D639]/60" />,
    title: 'Conteúdo Direcionado',
    description: 'Envie textos, áudios, imagens ou vídeos diretamente para grupos específicos via fluxo.',
  },
  {
    icon: <Hourglass size={20} className="text-[#92D639]/60" />,
    title: 'Atraso Inteligente',
    description: 'Programe pausas entre os envios para simular uma comunicação mais natural e humana.',
  },
  {
    icon: <UserCog size={20} className="text-[#92D639]/60" />,
    title: 'Gestão por Assinatura',
    description: 'Adicione ou remova membros automaticamente com base no status da assinatura.',
  },
];

export function GroupManagerSection() {
  return (
    <section className="py-24 relative section-divider">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="space-y-12">
            <div className="space-y-4 text-center max-w-3xl mx-auto">
              <p className="text-sm font-medium text-white/30 tracking-wide uppercase">Gerente de Grupos</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                Grupos do WhatsApp como{' '}
                <span className="text-gradient">comunidades lucrativas</span>
              </h2>
              <p className="text-base text-white/40 leading-relaxed max-w-2xl mx-auto">
                Controle total da comunicação em grupos. Importe, gerencie, exporte membros e automatize interações.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 glass-card p-5">
                  <div className="flex-shrink-0 w-9 h-9 bg-white/[0.06] rounded-lg flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-sm mb-1">{feature.title}</h3>
                    <p className="text-xs text-white/35 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </div>
    </section>
  );
}
