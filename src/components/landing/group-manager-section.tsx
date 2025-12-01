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
    icon: <Hourglass size={24} className="text-[#92D639]" />,
    title: 'Atraso Inteligente',
    description: 'Programe pausas entre os envios para simular uma comunicação mais natural e humana.',
  },
];

const groups = [
    { icon: <Rocket size={16} />, name: 'Lançamento Alpha', size: 7, status: 'active' },
    { icon: <Star size={16} />, name: 'Clientes VIP', size: 4, status: 'active' },
    { icon: <Headphones size={16} />, name: 'Suporte - Nível 1', size: 3, status: 'active' },
    { icon: <BrainCircuit size={16} />, name: 'Mentoria Semanal', size: 2, status: 'active' },
    { icon: <FlaskConical size={16} />, name: 'Equipe de Testes', size: 2, status: 'active' },
    { icon: <Lightbulb size={16} />, name: 'Brainstorm de Ideias', size: 2, status: 'active' },
];

export function GroupManagerSection() {
  return (
    <section className="py-20 lg:py-32 bg-white text-gray-800 relative bg-pattern">
       <div className="pattern-mask-light"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column */}
          <div className="space-y-10">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
                Transforme Grupos do WhatsApp em {' '}
                <span className="text-[#92D639]">Comunidades Lucrativas</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Assuma o controle total da sua comunicação em grupos. Importe, gerencie, exporte membros e automatize interações com o nosso poderoso Gerente de Grupos.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
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

            <div className="bg-[#92D639]/10 border-l-4 border-[#92D639] p-6 rounded-r-lg text-gray-700">
                <div className="flex items-center gap-2 mb-3">
                    <Lock size={16} className="text-[#82c232]" />
                    <h4 className="font-bold text-base">Limites por Plano</h4>
                </div>
                <ul className="list-disc list-inside text-sm space-y-2 text-gray-600">
                    <li><span className="font-semibold">Plano Basic:</span> Pode ativar <span className="font-bold text-gray-800">1 grupo</span> por vez.</li>
                    <li><span className="font-semibold">Plano Pro:</span> Pode ativar até <span className="font-bold text-gray-800">3 grupos</span> simultaneamente.</li>
                </ul>
                <p className="text-xs text-gray-500 mt-3">Para ativar um novo grupo, desative um grupo em uso se o limite do seu plano for atingido.</p>
            </div>
          </div>

          {/* Right Column */}
          <div className="bg-white border border-gray-200/80 rounded-2xl shadow-soft hover:shadow-lg transition-shadow duration-300 w-full animate-fade-in-up" style={{animationDelay: '150ms'}}>
            <div className="px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-4 border-b border-gray-100">
                <div className="flex items-center gap-3 text-lg font-bold text-gray-700">
                    <Users size={22} />
                    <span>Gerente de Grupos</span>
                </div>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                    <div className="relative flex-1 sm:flex-auto">
                        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                        <input type="text" placeholder="Pesquisar..." className="w-full bg-gray-50 border border-gray-200 rounded-lg py-2 pl-9 pr-3 text-sm focus:ring-2 focus:ring-[#92D639]/50 focus:border-[#92D639] outline-none transition" />
                    </div>
                    <Button className="bg-[#92D639] text-black font-bold hover:bg-[#82c232] h-10 px-4">
                        Carregar grupos
                    </Button>
                </div>
            </div>

            <div className="overflow-x-auto">
                 <table className="w-full text-sm text-left">
                    <thead className="text-xs text-gray-500 uppercase bg-gray-50/50">
                        <tr>
                            <th scope="col" className="px-6 py-3">Nome</th>
                            <th scope="col" className="px-6 py-3 text-center">Tamanho</th>
                            <th scope="col" className="px-6 py-3 text-center">Status</th>
                            <th scope="col" className="px-6 py-3">WhatsApp</th>
                            <th scope="col" className="px-6 py-3 text-right">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {groups.map((group, index) => (
                            <tr key={index} className="bg-white border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 font-medium text-gray-800 whitespace-nowrap flex items-center gap-3">
                                    <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
                                        {group.icon}
                                    </div>
                                    {group.name}
                                </td>
                                <td className="px-6 py-4 text-center text-gray-600 flex items-center justify-center gap-2">
                                    {group.size} <Download size={14} className="text-gray-400" />
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <span className="w-2.5 h-2.5 bg-green-500 rounded-full inline-block"></span>
                                </td>
                                <td className="px-6 py-4 text-gray-600">
                                    Vendas
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <a href="#" className="font-medium text-[#92D639] hover:underline">Ativar</a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
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
