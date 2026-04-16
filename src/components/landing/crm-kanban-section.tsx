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
import { AnimateIn } from '@/components/ui/animate-in';

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
    const animationIntervals: NodeJS.Timeout[] = [];
    let intervalId: NodeJS.Timeout | null = null;
    let initialTimeout: NodeJS.Timeout | null = null;

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

      const animInterval = setInterval(() => {
        startValue += incrementAmount;
        if (startValue >= endValue) {
          setTotalValue(endValue);
          clearInterval(animInterval);
        } else {
          setTotalValue(startValue);
        }
      }, incrementTime);
      animationIntervals.push(animInterval);

      // Add card to the list after a short delay
      setTimeout(() => {
        setCards(prevCards => [...prevCards, newLead]);
      }, 100);

      currentTotal = endValue;
      leadIndex++;
    };

    // Start adding leads after an initial delay
    initialTimeout = setTimeout(() => {
      addLead(); // Add the first lead
      intervalId = setInterval(() => {
        addLead(); // Add subsequent leads
        if (leadIndex >= incomingLeads.length) {
          if (intervalId) clearInterval(intervalId);
        }
      }, 2000); // Interval between new leads
    }, 1500);

    return () => {
      if (initialTimeout) clearTimeout(initialTimeout);
      if (intervalId) clearInterval(intervalId);
      animationIntervals.forEach(clearInterval);
    };
  }, []);

  return (
    <div className="font-sans text-slate-900 relative overflow-x-hidden flex flex-col justify-center py-20 bg-slate-50">

      <div className="relative z-10 w-full py-12 lg:py-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn delay={0}>
          <div className="text-center mb-12">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
              CRM Kanban
            </p>

            <h2 className="font-[family-name:var(--font-display)] mt-4 text-3xl sm:text-4xl lg:text-[3rem] font-bold tracking-tight leading-[1.15] text-slate-900">
              Não acompanhe só conversas.{' '}
              <span className="text-primary">
                Enxergue o pipeline com valor real.
              </span>
            </h2>
          </div>
          </AnimateIn>

          <div className="grid lg:grid-cols-2 gap-8 items-center">

            <AnimateIn from="left" delay={150}>
            <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">

              <div className="text-base text-slate-600 leading-relaxed max-w-lg mx-auto lg:mx-0 lg:border-l-4 border-primary lg:pl-6">
                <p>
                  O <strong>CRM Kanban</strong> do Sagazchat mostra onde cada lead está,
                  quanto cada etapa representa e quais negociações merecem atenção
                  imediata para o time vender com previsibilidade.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl sm:bg-transparent sm:p-0">
                  <div className="w-10 h-10 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Calculator className="w-5 h-5 text-primary" />
                  </div>
                    <div className="text-left">
                      <p className="font-bold text-slate-900 leading-none mb-1">Soma Automática</p>
                      <p className="text-xs text-slate-500">Valores atualizados em cada etapa</p>
                    </div>
                  </div>

                <div className="hidden sm:block w-px h-12 bg-slate-200"></div>

                <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl sm:bg-transparent sm:p-0">
                  <div className="w-10 h-10 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-primary" />
                  </div>
                    <div className="text-left">
                      <p className="font-bold text-slate-900 leading-none mb-1">Previsibilidade</p>
                      <p className="text-xs text-slate-500">Visão clara do que está para fechar</p>
                    </div>
                  </div>
              </div>

              <div className="pt-4 flex justify-center lg:justify-start">
                <a href="#pricing" className="inline-flex items-center gap-2.5 rounded-xl bg-primary px-8 py-3.5 text-[15px] font-bold text-white shadow-[0_4px_14px_rgba(23,199,90,0.3)] hover:bg-primary/90 hover:shadow-[0_6px_20px_rgba(23,199,90,0.4)] transition-all">
                  Ver planos
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
            </AnimateIn>

            <AnimateIn from="right" delay={200} duration={700}>
            <div className="relative flex justify-center order-1 lg:order-2 mb-12 lg:mb-0">

              <div className="w-full max-w-[340px] md:max-w-[380px] bg-white rounded-xl border border-slate-200 shadow-xl overflow-hidden flex flex-col relative p-4">

                {/* Kanban Column Header (The highlight) */}
                <div className="bg-primary rounded-lg p-3 flex items-center justify-between shadow-lg shadow-primary/20 relative overflow-hidden group">
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
                        <p className="text-[10px] text-primary uppercase tracking-wider font-bold mb-2">Lead qualificado</p>
                        <div className="flex justify-between items-center mb-3">
                          <p className="font-bold text-sm text-gray-900 leading-tight">{card.name}</p>
                          <p className="text-gray-800 font-bold text-sm">
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

                  <div className="border border-dashed border-slate-200 rounded-xl p-3 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/30 hover:bg-slate-50 transition-all cursor-pointer">
                    <Plus size={16} />
                  </div>

                </div>
              </div>

              {cards.length > 0 && (
                <div className="absolute -right-8 top-20 bg-white p-3 rounded-lg border border-slate-200 shadow-lg hidden lg:block">
                  <div className="flex items-center gap-2 text-primary text-xs font-bold">
                    <TrendingUp size={14} />
                    + R$ {cards[cards.length - 1].value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </div>
                </div>
              )}

            </div>
            </AnimateIn>

          </div>
        </div>
      </div>
    </div>
  );
};


