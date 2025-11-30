'use client';

import React, { useState, useEffect } from 'react';
import { 
  Layout, 
  Trash2,
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
  const [totalValue, setTotalValue] = useState(0);
  const [cards, setCards] = useState([
    // This card is designed to be hidden initially and will be replaced by the animated one.
    // { id: 1, name: 'Ana Silva', value: 1500, time: '2h', date: 'Hoje' },
    // { id: 2, name: 'Roberto Almeida', value: 2000, time: '1d', date: 'Ontem' },
  ]);
  const [showNewCard, setShowNewCard] = useState(false);

  useEffect(() => {
    let animationInterval: NodeJS.Timeout | undefined;
    
    const timer = setTimeout(() => {
      setShowNewCard(true);
      
      let start = 0;
      const end = 147;
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

                 <div className="w-[340px] md:w-[380px] bg-[#10191f]/50 rounded-xl border border-white/10 shadow-2xl overflow-hidden flex flex-col relative p-4 backdrop-blur-sm">
                    
                    {/* Kanban Column Header (The highlight) */}
                    <div className="bg-[#92D639] rounded-lg p-3 flex items-center justify-between shadow-lg shadow-[#92D639]/20 relative overflow-hidden group">
                        <h3 className="font-bold text-black text-sm tracking-wide">Lead interessado</h3>
                        <div className="flex items-center gap-2">
                            <div className="bg-black/20 text-white text-[11px] font-bold px-2 py-0.5 rounded-md">
                                R$ {totalValue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                            </div>
                            <div className="bg-black/20 text-white text-[11px] font-bold w-5 h-5 flex items-center justify-center rounded-md">
                                {showNewCard ? 1 : 0}
                            </div>
                            <Trash2 className="text-black/50 w-4 h-4 cursor-pointer hover:text-black" />
                        </div>
                    </div>

                    {/* Column Body / Cards Area */}
                    <div className="bg-transparent mt-3 rounded-b-xl min-h-[400px] p-0 space-y-3 relative">
                        
                        {cards.map((card) => (
                             <div key={card.id} className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm relative z-10 text-gray-800">
                                <p className="text-[10px] text-blue-500 uppercase tracking-wider font-bold mb-2">LIGHT SIDE</p>
                                <div className="flex justify-between items-center mb-3">
                                    <p className="font-bold text-sm text-gray-900 leading-tight">{card.name}</p>
                                    <p className="font-mono text-gray-800 font-bold text-sm">
                                        R$ {card.value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                                    </p>
                                </div>
                                <div className="border-t border-gray-200 pt-2 flex items-center text-gray-500 text-xs gap-4">
                                    <MessageCircle size={14} />
                                    <span className="flex items-center gap-1"><Clock size={12} /> 0/19</span>
                                    <span className="flex items-center gap-1"><Clock size={12} /> 489d</span>
                                </div>
                            </div>
                        ))}

                        {showNewCard && (
                            <div className="animate-slideInDown relative z-10">
                                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm relative z-10 text-gray-800">
                                    <p className="text-[10px] text-blue-500 uppercase tracking-wider font-bold mb-2">LIGHT SIDE</p>
                                    <div className="flex justify-between items-center mb-3">
                                        <p className="font-bold text-sm text-gray-900 leading-tight">Junior Lima</p>
                                        <p className="font-mono text-gray-800 font-bold text-sm">
                                            R$ 147,00
                                        </p>
                                    </div>
                                    <div className="border-t border-gray-200 pt-2 flex items-center text-gray-500 text-xs gap-4">
                                        <MessageCircle size={14} />
                                        <span className="flex items-center gap-1"><Clock size={12} /> 0/19</span>
                                        <span className="flex items-center gap-1"><Clock size={12} /> 489d</span>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="border border-dashed border-white/10 rounded-xl p-3 flex items-center justify-center text-slate-500 hover:text-[#92D639] hover:border-[#92D639]/30 hover:bg-white/5 transition-all cursor-pointer">
                            <Plus size={16} />
                        </div>

                    </div>
                 </div>

                 <div className="absolute -right-8 top-20 bg-[#1f2c34] p-3 rounded-lg border border-white/10 shadow-xl animate-float hidden lg:block">
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
