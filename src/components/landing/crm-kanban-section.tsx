'use client';

import React, { useState, useEffect } from 'react';
import { 
  Layout, 
  DollarSign, 
  TrendingUp, 
  Calculator, 
  ArrowRight, 
  MoreHorizontal, 
  Plus, 
  Calendar, 
  MessageCircle,
  Clock 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export const CrmKanbanSection = () => {
  const [totalValue, setTotalValue] = useState(3500);
  const [cards, setCards] = useState([
    { id: 1, name: 'Ana Silva', value: 1500, time: '2h', date: 'Hoje' },
    { id: 2, name: 'Roberto Almeida', value: 2000, time: '1d', date: 'Ontem' },
  ]);
  const [showNewCard, setShowNewCard] = useState(false);

  useEffect(() => {
    let animationInterval: NodeJS.Timeout | undefined;
    
    const timer = setTimeout(() => {
      setShowNewCard(true);
      
      let start = 3500;
      const end = 3647;
      const duration = 1000;
      const incrementTime = 20;
      const steps = duration / incrementTime;
      const incrementAmount = (end - start) / steps;

      animationInterval = setInterval(() => {
        start += incrementAmount;
        if (start >= end) {
          setTotalValue(end);
          clearInterval(animationInterval);
        } else {
          setTotalValue(Math.floor(start));
        }
      }, incrementTime);

    }, 1500);

    return () => {
        clearTimeout(timer);
        if (animationInterval) clearInterval(animationInterval);
    };
  }, []);

  return (
    <div className="min-h-screen font-sans text-white selection:bg-[#92D639] selection:text-black relative overflow-x-hidden flex flex-col justify-center">
      
      <div className="absolute inset-0 bg-gradient-to-br from-[#050505] via-[#05100c] to-[#0a2015] z-0"></div>
      <div className="absolute inset-0 bg-[radial-gradient(rgba(146,214,57,0.08)_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none z-0"></div>

      <div className="relative z-10 w-full py-12 lg:py-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-8 animate-fadeIn text-center lg:text-left order-2 lg:order-1">
                
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#92D639]/10 border border-[#92D639]/30 text-[#92D639] text-[11px] font-bold uppercase tracking-wider">
                    <Layout size={12} fill="currentColor" /> Atualização CRM
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                    Não organize apenas leads. <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#92D639] to-[#baff68]">
                        Organize seu dinheiro.
                    </span>
                </h1>

                <div className="text-lg text-slate-300 leading-relaxed max-w-lg mx-auto lg:mx-0 border-l-4 border-[#92D639] pl-6 text-left">
                    <p>
                        O novo <strong>CRM Kanban</strong> do RespondeZap faz o cálculo automático de cada etapa do seu funil. Saiba exatamente quanto valor está em negociação e tome decisões baseadas em números reais.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 pt-4 justify-center lg:justify-start">
                    <div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl sm:bg-transparent sm:p-0">
                        <div className="w-12 h-12 shrink-0 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                            <Calculator className="w-6 h-6 text-[#92D639]" />
                        </div>
                        <div className="text-left">
                            <p className="font-bold text-white text-lg">Soma Automática</p>
                            <p className="text-xs text-slate-400">Valores atualizados ao arrastar</p>
                        </div>
                    </div>
                    
                    <div className="hidden sm:block w-px h-16 bg-white/10"></div>

                    <div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl sm:bg-transparent sm:p-0">
                        <div className="w-12 h-12 shrink-0 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                            <TrendingUp className="w-6 h-6 text-[#92D639]" />
                        </div>
                        <div className="text-left">
                            <p className="font-bold text-white text-lg">Previsibilidade</p>
                            <p className="text-xs text-slate-400">Controle total do pipeline</p>
                        </div>
                    </div>
                </div>

                <div className="pt-4">
                    <Button size="lg" className="group w-full sm:w-auto relative px-8 py-4 bg-[#92D639] text-black rounded-lg font-bold text-lg hover:bg-[#82c232] transition-all shadow-[0_0_20px_rgba(146,214,57,0.4)] hover:shadow-[0_0_40px_rgba(146,214,57,0.6)] hover:-translate-y-1 h-auto">
                      <Layout size={20} />
                      Acessar Meu Kanban
                    </Button>
                </div>
            </div>

            <div className="relative flex justify-center lg:justify-end order-1 lg:order-2 mb-12 lg:mb-0">
                 
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#92D639]/10 rounded-full blur-[80px] -z-10"></div>

                 <div className="w-[340px] md:w-[380px] bg-[#10191f] rounded-3xl border border-white/10 shadow-2xl overflow-hidden flex flex-col relative">
                    
                    <div className="bg-[#1f2c34] p-4 border-b border-white/5 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                             <div className="w-3 h-3 rounded-full bg-red-500"></div>
                             <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                             <div className="w-3 h-3 rounded-full bg-[#92D639]"></div>
                        </div>
                        <div className="text-xs text-slate-400 font-mono">CRM.exe</div>
                    </div>

                    <div className="p-4 pb-0">
                        <div className="bg-[#92D639] rounded-t-xl p-4 shadow-lg shadow-[#92D639]/20 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="font-bold text-black text-lg tracking-wide">Em Negociação</h3>
                                <MoreHorizontal className="text-green-900/50 w-5 h-5 cursor-pointer" />
                            </div>
                            
                            <div className="bg-white/90 rounded-lg p-2 flex items-center justify-between text-green-900 shadow-inner">
                                <span className="text-xs font-bold uppercase tracking-wider opacity-70">Total da Etapa:</span>
                                <div className="flex items-center gap-1 font-mono font-bold text-xl">
                                    <span className="text-sm">R$</span>
                                    {totalValue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                                </div>
                            </div>
                            
                            <div className="absolute top-2 right-10 w-6 h-6 bg-black/20 rounded-full flex items-center justify-center text-xs font-bold text-white">
                                {showNewCard ? 3 : 2}
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#0b141a] m-4 mt-0 rounded-b-xl min-h-[400px] p-3 space-y-3 relative border border-t-0 border-white/5">
                        
                        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '12px 12px'}}></div>

                        {cards.map((card) => (
                            <div key={card.id} className="bg-[#1f2c34] p-4 rounded-xl border border-white/5 hover:border-[#92D639]/50 transition-colors group cursor-grab active:cursor-grabbing shadow-lg relative z-10">
                                <div className="flex justify-between items-start mb-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-slate-700 to-slate-600 flex items-center justify-center font-bold text-xs text-white">
                                            {card.name.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="font-bold text-sm text-white leading-tight">{card.name}</p>
                                            <p className="text-[10px] text-[#92D639] uppercase tracking-wider font-bold mt-0.5">Light Side</p>
                                        </div>
                                    </div>
                                    <p className="font-mono text-[#92D639] font-bold text-sm">
                                        R$ {card.value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                                    </p>
                                </div>
                                
                                <div className="flex justify-between items-center text-slate-500 text-[10px] border-t border-white/5 pt-2 mt-2">
                                    <div className="flex gap-3">
                                        <span className="flex items-center gap-1 hover:text-[#92D639] transition-colors"><MessageCircle size={10} /> WhatsApp</span>
                                        <span className="flex items-center gap-1"><Calendar size={10} /> {card.date}</span>
                                    </div>
                                    <span className="flex items-center gap-1 bg-slate-800 px-1.5 py-0.5 rounded text-slate-400">
                                        <Clock size={10} /> {card.time}
                                    </span>
                                </div>
                            </div>
                        ))}

                        {showNewCard && (
                            <div className="animate-slideInDown relative z-10">
                                <div className="bg-[#1f2c34] p-4 rounded-xl border border-[#92D639] shadow-[0_0_15px_rgba(146,214,57,0.3)] group cursor-pointer relative overflow-hidden">
                                    
                                    <div className="absolute inset-0 bg-[#92D639]/20 animate-pulse rounded-xl pointer-events-none"></div>

                                    <div className="flex justify-between items-start mb-3">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#92D639] to-green-500 flex items-center justify-center font-bold text-xs text-white">
                                                J
                                            </div>
                                            <div>
                                                <p className="font-bold text-sm text-white leading-tight">Junior Lima</p>
                                                <p className="text-[10px] text-[#92D639] uppercase tracking-wider font-bold mt-0.5">Light Side</p>
                                            </div>
                                        </div>
                                        <p className="font-mono text-[#92D639] font-bold text-sm">
                                            R$ 147,00
                                        </p>
                                    </div>
                                    
                                    <div className="flex justify-between items-center text-slate-500 text-[10px] border-t border-white/5 pt-2 mt-2">
                                        <div className="flex gap-3">
                                            <span className="flex items-center gap-1 text-[#92D639]"><MessageCircle size={10} /> 1 nova</span>
                                            <span className="flex items-center gap-1"><Calendar size={10} /> Agora</span>
                                        </div>
                                        <span className="flex items-center gap-1 bg-[#92D639]/20 text-[#92D639] px-1.5 py-0.5 rounded font-bold">
                                            Novo
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="border border-dashed border-white/10 rounded-xl p-3 flex items-center justify-center text-slate-500 hover:text-[#92D639] hover:border-[#92D639]/30 hover:bg-white/5 transition-all cursor-pointer">
                            <Plus size={16} />
                        </div>

                    </div>
                 </div>

                 <div className="absolute -right-8 top-20 bg-[#1f2c34] p-3 rounded-lg border border-white/10 shadow-xl animate-bounce hidden lg:block">
                     <div className="flex items-center gap-2 text-[#92D639] text-xs font-bold">
                         <TrendingUp size={14} />
                         + R$ 147,00
                     </div>
                 </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
