'use client';

import { CheckCircle, Plus, MessageCircle } from 'lucide-react';

const ConnectionCard = ({
  department,
  name,
  role,
  phone,
}: {
  department: string;
  name: string;
  role: string;
  phone: string;
}) => (
  <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:border-[#92D639]/50 hover:-translate-y-1">
    <div className="flex items-start justify-between">
      <div className="flex items-center gap-3">
        <div className="bg-white/5 p-2 rounded-lg">
          <MessageCircle className="w-5 h-5 text-[#92D639]" />
        </div>
        <div>
          <p className="font-bold text-white">{department}</p>
          <p className="text-xs text-gray-400">
            {name} &bull; {role}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></div>
      </div>
    </div>
    <div className="mt-4 text-gray-300 font-mono text-sm tracking-wider">
      {phone}
    </div>
  </div>
);

export function MultiWhatsapp() {
  return (
    <section className="py-20 lg:py-32 bg-[#0A0A0B] relative">
      <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle at center, #111 2px, transparent 2px)', backgroundSize: '20px 20px'}}></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Múltiplos WhatsApps.
              <br />
              <span className="text-[#92D639]">Uma única tela.</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
              Centralize Comercial, Suporte e Financeiro. Elimine a
              desorganização de celulares físicos e tenha auditoria completa da
              sua operação em tempo real.
            </p>
            <div className="space-y-3 pt-4">
              <div className="flex items-center gap-3 text-gray-300">
                <CheckCircle className="w-5 h-5 text-[#92D639]" />
                <span>Gestão centralizada de equipes.</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <CheckCircle className="w-5 h-5 text-[#92D639]" />
                <span>Auditoria e segurança das conversas.</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <CheckCircle className="w-5 h-5 text-[#92D639]" />
                <span>Redução de custos com aparelhos.</span>
              </div>
            </div>
          </div>
          <div className="relative animate-fade-in-up" style={{animationDelay: '200ms'}}>
            <div className="bg-[#111111] border border-white/10 rounded-2xl shadow-2xl p-1.5">
                <div className="bg-black/20 p-4 rounded-t-lg">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-red-500"></span>
                            <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                            <span className="w-3 h-3 rounded-full bg-green-500"></span>
                        </div>
                        <div className="text-xs text-gray-500 font-mono bg-white/5 px-3 py-1 rounded-md">
                            painel.respondezap.ai
                        </div>
                    </div>
                </div>
                <div className="p-6">
                    <h3 className="text-xl font-bold text-white">Conexões Ativas</h3>
                    <p className="text-gray-400 text-sm mt-1">Gerencie os números da sua equipe</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                        <ConnectionCard 
                            department="Comercial"
                            name="Iarley"
                            role="Gerente"
                            phone="+55 31 98...950"
                        />
                         <ConnectionCard 
                            department="Suporte N1"
                            name="Ana"
                            role="Nível 1"
                            phone="+55 11 99...123"
                        />
                         <ConnectionCard 
                            department="Financeiro"
                            name="Sofia"
                            role="Cobrança"
                            phone="+55 41 96...555"
                        />
                        <div className="bg-[#1A1A1A] border-2 border-dashed border-white/10 rounded-2xl flex flex-col items-center justify-center text-gray-400 hover:border-[#92D639] hover:text-white transition-all cursor-pointer">
                            <Plus className="w-8 h-8"/>
                            <p className="mt-2 text-sm font-medium">Adicionar Setor</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
