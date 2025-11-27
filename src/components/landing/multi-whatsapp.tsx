'use client';

import { CheckCircle, MessageCircle, MoreVertical } from 'lucide-react';
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
  <div className="bg-card border border-border rounded-xl p-4 transition-all duration-300 hover:border-primary/50 hover:-translate-y-1 shadow-sm text-center">
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5 text-red-500"
        >
          <rect width="16" height="16" x="4" y="4" rx="2" />
          <path d="M9 4v16" />
          <path d="M15 4v16" />
          <path d="M4 9h16" />
          <path d="M4 15h16" />
        </svg>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-green-500"></div>
        <MoreVertical className="w-4 h-4 text-muted-foreground" />
      </div>
    </div>
    
    <div className="flex items-center justify-center gap-1.5">
        <MessageCircle className="w-4 h-4 text-muted-foreground" />
        <p className="font-semibold text-foreground">{name}</p>
    </div>

    <Button
      variant="outline"
      size="sm"
      className="w-full text-red-500 border-red-500/50 hover:bg-red-500/10 hover:text-red-500 my-4 h-8 text-xs"
    >
      Desconectar
    </Button>

    <div className="text-center">
      <p className="font-semibold text-sm text-foreground">{role}</p>
      <p className="text-xs text-muted-foreground mt-1">{phone}</p>
      <p className="text-[10px] text-muted-foreground/70 mt-1">{timestamp}</p>
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
                <div className="bg-background/80 backdrop-blur-sm p-6 rounded-b-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <ConnectionCard 
                            name="Iarley"
                            role="Gerente Comercial"
                            phone="+55 (31) 86...950"
                            timestamp="26/11/25 13:21"
                        />
                         <ConnectionCard 
                            name="Ana"
                            role="Suporte N1"
                            phone="+55 (11) 99...123"
                            timestamp="26/11/25 14:05"
                        />
                         <ConnectionCard 
                            name="Pedro"
                            role="Vendas"
                            phone="+55 (21) 97...888"
                            timestamp="26/11/25 12:45"
                        />
                        <ConnectionCard 
                            name="Sofia"
                            role="Financeiro"
                            phone="+55 (41) 96...555"
                            timestamp="26/11/25 10:30"
                        />
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
