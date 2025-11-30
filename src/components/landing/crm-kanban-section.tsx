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
  Clock,
  UserPlus
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const initialCards: { id: number; name: string; value: number; }[] = [
  // Cards iniciais que já estão na coluna
];

const incomingLeads = [
  { id: 3, name: 'Junior Lima', value: 147.00 },
  { id: 4, name: 'Fernanda Costa', value: 250.00 },
  { id: 5, name: 'Lucas Martins', value: 99.00 },
];

export const CrmKanbanSection = () => {
  const [cards, setCards] = useState(initialCards);
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    let leadIndex = 0;
    let currentTotal = 0;

    const addLead = () => {
      if (leadIndex >= incomingLeads.length) {
        return;
      }
      
      const newLead = incomingLeads[leadIndex];
      
      // Animate the number counting up
      let startValue = currentTotal;
      const endValue = currentTotal + newLead.value;
      const duration = 500;
      const incrementTime = 20;
      const steps = duration / incrementTime;
      const incrementAmount = (endValue - startValue) / steps;
      
      const animationInterval = setInterval(() => {
        startValue += incrementAmount;
        if (startValue >= endValue) {
          setTotalValue(endValue);
          clearInterval(animationInterval);
        } else {
          setTotalValue(startValue);
        }
      }, incrementTime);
      
      // Add card to the list after a short delay
      setTimeout(() => {
         setCards(prevCards => [...prevCards, newLead]);
      }, 100);

      currentTotal = endValue;
      leadIndex++;
    };

    // Start adding leads after an initial delay
    const initialTimeout = setTimeout(() => {
      addLead(); // Add the first lead
      const intervalId = setInterval(() => {
        addLead(); // Add subsequent leads
        if (leadIndex >= incomingLeads.length) {
          clearInterval(intervalId);
        }
      }, 2000); // Interval between new leads

      return () => clearInterval(intervalId);
    }, 1500);

    return () => {
        clearTimeout(initialTimeout);
    };
  }, []);

  return (
    <div className="min-h-screen font-sans text-white selection:bg-[#92D639] selection:text-black relative overflow-x-hidden flex flex-col justify-center">
      
      <div className="absolute inset-0 bg-gradient-to-br from-[#050505] via-[#05100c] to-[#0a2015] z-0"></div>
      <div className="absolute inset-0 bg-[radial-gradient(rgba(146,214,57,0.08)_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none z-0"></div>

      <div className="relative z-10 w-full py-12 lg:py-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            
            <div className="space-y-8 animate-fadeIn text-center order-2 lg:order-1">
                
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#92D639]/10 border border-[#92D639]/30 text-[#92D639] text-[11px] font-bold uppercase tracking-wider">
                    <Layout size={12} fill="currentColor" /> Atualização CRM
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                    Não organize apenas leads. <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#92D639] to-[#baff68]">
                        Organize seu dinheiro.
                    </span>
                </h1>

                <div className="text-lg text-slate-300 leading-relaxed max-w-lg mx-auto lg:border-l-4 border-[#92D639] lg:pl-6 text-center lg:text-left">
                    <p>
                        O novo <strong>CRM Kanban</strong> do RespondeZap faz o cálculo automático de cada etapa do seu funil. Saiba exatamente quanto valor está em negociação e tome decisões baseadas em números reais.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                    <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl sm:bg-transparent sm:p-0">
                        <div className="w-10 h-10 shrink-0 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                            <Calculator className="w-5 h-5 text-[#92D639]" />
                        </div>
                        <div className="text-left">
                            <p className="font-bold text-white leading-none mb-1">Soma Automática</p>
                            <p className="text-xs text-slate-400">Valores atualizados ao arrastar</p>
                        </div>
                    </div>
                    
                    <div className="hidden sm:block w-px h-12 bg-white/10"></div>

                    <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl sm:bg-transparent sm:p-0">
                        <div className="w-10 h-10 shrink-0 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                            <TrendingUp className="w-5 h-5 text-[#92D639]" />
                        </div>
                        <div className="text-left">
                            <p className="font-bold text-white leading-none mb-1">Previsibilidade</p>
                            <p className="text-xs text-slate-400">Controle total do pipeline</p>
                        </div>
                    </div>
                </div>

                <div className="pt-4 flex justify-center">
                    <Button size="lg" className="group w-full sm:w-auto relative px-8 py-4 bg-[#92D639] text-black rounded-lg font-bold text-lg hover:bg-[#82c232] transition-all shadow-[0_0_20px_rgba(146,214,57,0.4)] hover:shadow-[0_0_40px_rgba(146,214,57,0.6)] hover:-translate-y-1 h-auto">
                      <UserPlus size={20} />
                      Assinar Agora
                      <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
            </div>

            <div className="relative flex justify-center order-1 lg:order-2 mb-12 lg:mb-0">
                 
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
                                {cards.length}
                            </div>
                            <Trash2 className="text-black/50 w-4 h-4 cursor-pointer hover:text-black" />
                        </div>
                    </div>

                    {/* Column Body / Cards Area */}
                    <div className="bg-transparent mt-3 rounded-b-xl min-h-[400px] p-0 space-y-3 relative">
                        
                        {cards.map((card) => (
                             <div key={card.id} className="animate-slideInDown relative z-10">
                                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm relative z-10 text-gray-800">
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
                            </div>
                        ))}

                        <div className="border border-dashed border-white/10 rounded-xl p-3 flex items-center justify-center text-slate-500 hover:text-[#92D639] hover:border-[#92D639]/30 hover:bg-white/5 transition-all cursor-pointer">
                            <Plus size={16} />
                        </div>

                    </div>
                 </div>

                 {cards.length > 0 && (
                    <div className="absolute -right-8 top-20 bg-[#1f2c34] p-3 rounded-lg border border-white/10 shadow-xl animate-float hidden lg:block">
                        <div className="flex items-center gap-2 text-[#92D639] text-xs font-bold">
                            <TrendingUp size={14} />
                            + R$ {cards[cards.length - 1].value.toLocaleString('pt-BR', {minimumFractionDigits: 2})}
                        </div>
                    </div>
                 )}

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
