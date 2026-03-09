'use client';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { InteractiveChat } from './interactive-chat';

export function Hero() {
  return (
    <section className="relative z-10 pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          <div className="text-center lg:text-left">
            <div className="animate-fade-in-up">
              <p className="text-sm font-medium text-white/40 tracking-wide uppercase mb-6">
                Automação inteligente para WhatsApp
              </p>

              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.1] tracking-tight">
                Transforme conversas em{' '}
                <span className="text-gradient">vendas previsíveis</span>
              </h1>

              <p className="mt-6 text-lg text-white/50 max-w-lg mx-auto lg:mx-0 leading-relaxed font-normal">
                Automatize atendimento, qualifique leads e escale vendas com IA, CRM nativo e fluxos visuais.
                Tudo em uma plataforma.
              </p>
            </div>

            <div className="animate-fade-in-up flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-10" style={{ animationDelay: '100ms' }}>
              <Button size="lg" className="group relative px-7 py-3.5 bg-[#92D639] text-black rounded-xl font-semibold text-base hover:bg-[#a3e048] transition-all h-auto">
                Começar Agora
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
              </Button>
              <Button size="lg" variant="ghost" className="px-7 py-3.5 rounded-xl text-white/70 font-medium hover:text-white hover:bg-white/[0.04] transition-all h-auto gap-2">
                <Play className="w-4 h-4 fill-current" />
                Ver demonstração
              </Button>
            </div>

            <div className="animate-fade-in-up pt-10 flex items-center justify-center lg:justify-start gap-6 text-sm text-white/40" style={{ animationDelay: '200ms' }}>
              <div className="flex -space-x-2">
                {[1,2,3,4,5].map(i => (
                  <div key={i} className="w-7 h-7 rounded-full border-2 border-[#080808] bg-white/10 flex items-center justify-center text-[10px] font-bold text-white/60 overflow-hidden">
                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i+45}`} alt="" className="opacity-80" />
                  </div>
                ))}
              </div>
              <p className="text-white/40">
                Usado por <span className="text-white/70 font-medium">+1.000 empresas</span>
              </p>
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
