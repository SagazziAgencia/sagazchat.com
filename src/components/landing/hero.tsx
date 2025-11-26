'use client';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { InteractiveChat } from './interactive-chat';

export function Hero() {
  return (
    <section className="relative z-10 pt-20 pb-20 lg:pt-28 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="text-center lg:text-left animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#92D639]/10 border border-[#92D639]/30 text-[#92D639] text-xs font-bold uppercase tracking-wide mx-auto lg:mx-0 hover:bg-[#92D639]/20 transition-colors cursor-default">
              <TrendingUp className="w-3 h-3" />
              <span>Líder em Vendas no WhatsApp</span>
            </div>

            <h1 className="mt-8 text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
              Sua Máquina de <br/>
              <span className="text-[#92D639]">
                Vendas Automática.
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Comece agora dominando o <strong>WhatsApp com IA e CRM Nativo</strong>.
              <br/>
              <span className="text-sm mt-3 block text-gray-500 font-medium bg-white/5 border border-white/5 rounded-lg py-2 px-4 inline-block">
                🚀 <span className="text-[#92D639] uppercase text-xs font-bold tracking-wider mr-1">Em Breve:</span>
                Instagram • Messenger • Gmail • API Oficial
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-8">
              <Button size="lg" className="group relative px-8 py-4 bg-[#92D639] text-black rounded-lg font-bold text-lg hover:bg-[#82c232] transition-all shadow-[0_0_20px_rgba(146,214,57,0.4)] hover:shadow-[0_0_40px_rgba(146,214,57,0.6)] hover:-translate-y-1 h-auto">
                COMEÇAR AGORA
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-4 rounded-lg border-gray-600 text-gray-300 font-medium hover:border-[#92D639] hover:text-white transition-all bg-white/5 backdrop-blur-sm h-auto">
                Ver na Prática
              </Button>
            </div>

            <div className="pt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-sm text-gray-500">
              <div className="flex -space-x-2">
                 {[1,2,3,4].map(i => (
                   <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0A0A0B] bg-gray-700 flex items-center justify-center text-xs font-bold text-white overflow-hidden">
                     <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i+45}`} alt="User" />
                   </div>
                 ))}
              </div>
              <p>Validado por <span className="text-white font-bold">+1.000 empresas</span> que batem meta.</p>
            </div>
          </div>

          <div className="relative">
            <InteractiveChat />
          </div>

        </div>
      </div>
    </section>
  );
}
