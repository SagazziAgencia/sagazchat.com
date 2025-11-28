'use client';

import React, { useState, useEffect } from 'react';
import { ShoppingCart, Zap, ArrowRight, Wallet, BellRing, Battery, Wifi, Server, Network, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';


// Componente Logo Deposita.ai (SVG Puro)
const DepositaLogo = ({ className = "w-10 h-10" }) => (
    <div className={`${className} rounded-lg bg-gradient-to-br from-[#FFC107] to-[#FF5722] flex items-center justify-center shadow-md shrink-0`}>
        <svg viewBox="0 0 24 24" className="w-3/5 h-3/5 text-white fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 4v16h6.5c4.5 0 8.5-3.5 8.5-8s-4-8-8.5-8H7zm2.5 2.5h3.5c3.2 0 5.5 2.2 5.5 5.5s-2.3 5.5-5.5 5.5H9.5V6.5z" />
        </svg>
    </div>
);


const NotificationCard = ({
    logo,
    title,
    message,
    time,
    className,
    isHighlighted = false
  }: {
    logo: React.ReactNode;
    title: string;
    message: React.ReactNode;
    time: string;
    className?: string;
    isHighlighted?: boolean;
  }) => {
    return (
      <div
        className={cn(
          "bg-[#1C1C1E]/80 backdrop-blur-md rounded-2xl p-3.5 shadow-2xl border border-white/10 ring-1 ring-black/5 w-64",
          "transition-all duration-500",
          isHighlighted ? 'scale-105 shadow-green-500/20' : 'scale-90 opacity-40',
          className
        )}
      >
        <div className="flex items-start gap-3">
          {logo}
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-baseline mb-0.5">
              <h4 className="text-sm font-bold text-white truncate">{title}</h4>
              <span className="text-[10px] text-white/50">{time}</span>
            </div>
            {message}
          </div>
        </div>
      </div>
    );
  };

export function RemarketingSection() {
    const [activeStep, setActiveStep] = useState(1);


    // Animação automática dos passos
    useEffect(() => {
        const interval = setInterval(() => {
        setActiveStep((prev) => (prev === 4 ? 1 : prev + 1));
        }, 4500); 
        return () => clearInterval(interval);
    }, []);


    return (
        <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center py-20 px-4 font-sans text-slate-900 selection:bg-green-100 selection:text-green-900">
        
        <section className="container mx-auto max-w-7xl">
            
            {/* Cabeçalho Compacto */}
            <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm text-[10px] font-bold uppercase tracking-wider text-green-700 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                Fluxo Automático
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Recuperação via <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">
                Webhook em Tempo Real
                </span>
            </h2>
            <p className="text-base text-slate-500 max-w-xl mx-auto font-medium leading-relaxed">
                Integração nativa entre <strong>Deposita.Ai</strong> e <strong>RespondeZap</strong>. Recupere vendas automaticamente sem mover um dedo.
            </p>
            </div>

            {/* LAYOUT 2 COLUNAS COMPACTO */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center relative">
                
                {/* COLUNA ESQUERDA: LISTA DE PASSOS (Mais Clean) */}
                <div className="relative space-y-4 order-2 lg:order-1">
                    
                    {/* Linha Conectora Vertical */}
                    <div className="absolute left-[1.65rem] top-8 bottom-8 w-px bg-slate-200 z-0"></div>
                    
                    {/* Barra de Progresso Vertical Ativa */}
                    <div 
                        className="absolute left-[1.65rem] top-8 w-px bg-green-500 z-0 transition-all duration-1000 ease-in-out"
                        style={{ height: `${Math.min((activeStep - 1) * 33.3, 100)}%` }}
                    ></div>

                    {/* PASSO 1: PLATAFORMA */}
                    <div 
                        onClick={() => setActiveStep(1)}
                        className={`group cursor-pointer relative bg-white rounded-xl p-5 border transition-all duration-300 flex gap-5 items-start z-10 ${activeStep === 1 ? 'border-green-500 shadow-lg shadow-green-900/5 ring-1 ring-green-500/20 scale-[1.02]' : 'border-slate-100 shadow-sm hover:border-slate-200'}`}
                    >
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-500 bg-white border border-slate-50 shadow-sm ${activeStep === 1 ? 'scale-110 border-green-100' : 'grayscale opacity-70'}`}>
                            <DepositaLogo className="w-8 h-8 shadow-none" />
                        </div>
                        
                        <div className="flex-1">
                            <div className="flex justify-between items-center mb-1">
                                <h3 className={`text-base font-bold transition-colors ${activeStep === 1 ? 'text-slate-900' : 'text-slate-500'}`}>1. Checkout Deposita.Ai</h3>
                                {activeStep === 1 && <span className="text-[9px] font-bold text-orange-500 bg-orange-50 px-2 py-0.5 rounded-full">Pendente</span>}
                            </div>
                            <p className={`text-xs leading-relaxed ${activeStep === 1 ? 'text-slate-600' : 'text-slate-400'}`}>
                                O cliente gera um Pix ou Boleto no checkout mas sai sem pagar.
                            </p>
                        </div>
                    </div>

                    {/* PASSO 2: WEBHOOK */}
                    <div 
                        onClick={() => setActiveStep(2)}
                        className={`group cursor-pointer relative bg-white rounded-xl p-5 border transition-all duration-300 flex gap-5 items-start z-10 ${activeStep === 2 ? 'border-green-500 shadow-lg shadow-green-900/5 ring-1 ring-green-500/20 scale-[1.02]' : 'border-slate-100 shadow-sm hover:border-slate-200'}`}
                    >
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-500 border ${activeStep === 2 ? 'bg-blue-50 text-blue-600 border-blue-100 scale-110' : 'bg-slate-50 text-slate-400 border-slate-100'}`}>
                            <Network size={20} />
                        </div>
                        
                        <div className="flex-1">
                            <div className="flex justify-between items-center mb-1">
                                <h3 className={`text-base font-bold transition-colors ${activeStep === 2 ? 'text-slate-900' : 'text-slate-500'}`}>2. Envio do Webhook</h3>
                                {activeStep === 2 && <span className="text-[9px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full animate-pulse">Recebendo...</span>}
                            </div>
                            <p className={`text-xs leading-relaxed ${activeStep === 2 ? 'text-slate-600' : 'text-slate-400'}`}>
                                A plataforma envia os dados (Nome, Telefone) para o RespondeZap instantaneamente.
                            </p>
                        </div>
                    </div>

                    {/* PASSO 3: FLUXO */}
                    <div 
                        onClick={() => setActiveStep(3)}
                        className={`group cursor-pointer relative bg-white rounded-xl p-5 border transition-all duration-300 flex gap-5 items-start z-10 ${activeStep === 3 ? 'border-green-500 shadow-lg shadow-green-900/5 ring-1 ring-green-500/20 scale-[1.02]' : 'border-slate-100 shadow-sm hover:border-slate-200'}`}
                    >
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-500 border ${activeStep === 3 ? 'bg-green-50 text-green-600 border-green-100 scale-110' : 'bg-slate-50 text-slate-400 border-slate-100'}`}>
                            <Zap size={20} />
                        </div>
                        
                        <div className="flex-1">
                            <div className="flex justify-between items-center mb-1">
                                <h3 className={`text-base font-bold transition-colors ${activeStep === 3 ? 'text-slate-900' : 'text-slate-500'}`}>3. Disparo do Fluxo</h3>
                                {activeStep === 3 && <span className="text-[9px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">Enviada</span>}
                            </div>
                            <p className={`text-xs leading-relaxed mb-2 ${activeStep === 3 ? 'text-slate-600' : 'text-slate-400'}`}>
                                O RespondeZap envia a mensagem de recuperação no WhatsApp do cliente.
                            </p>
                            {/* Mini Chat Compacto */}
                            <div className={`text-[9px] inline-flex items-center gap-2 bg-slate-50 px-2 py-1.5 rounded border border-slate-100 text-slate-500 transition-opacity ${activeStep === 3 ? 'opacity-100' : 'opacity-40'}`}>
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> "Oi! Segue seu código Pix 👇"
                            </div>
                        </div>
                    </div>

                    {/* PASSO 4: SUCESSO */}
                    <div 
                        onClick={() => setActiveStep(4)}
                        className={`group cursor-pointer relative bg-white rounded-xl p-5 border transition-all duration-300 flex gap-5 items-start z-10 ${activeStep === 4 ? 'border-green-500 shadow-lg shadow-green-900/5 ring-1 ring-green-500/20 scale-[1.02]' : 'border-slate-100 shadow-sm hover:border-slate-200'}`}
                    >
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-500 border ${activeStep === 4 ? 'bg-slate-900 text-white border-slate-700 scale-110' : 'bg-slate-50 text-slate-400 border-slate-100'}`}>
                            <BellRing size={20} />
                        </div>
                        
                        <div className="flex-1">
                            <div className="flex justify-between items-center mb-1">
                                <h3 className={`text-base font-bold transition-colors ${activeStep === 4 ? 'text-slate-900' : 'text-slate-500'}`}>4. Venda Recuperada</h3>
                                {activeStep === 4 && <span className="text-[9px] font-bold text-white bg-green-500 px-2 py-0.5 rounded-full">Sucesso</span>}
                            </div>
                            <p className={`text-xs leading-relaxed ${activeStep === 4 ? 'text-slate-600' : 'text-slate-400'}`}>
                                O cliente paga e você recebe a notificação da Deposita.Ai.
                            </p>
                        </div>
                    </div>
                </div>

                {/* COLUNA DIREITA: ANIMAÇÃO DE NOTIFICAÇÕES */}
                <div className="hidden lg:flex justify-center items-center h-[500px] relative order-1 lg:order-2 perspective-1000">
                    
                    <NotificationCard
                        isHighlighted={activeStep === 4}
                        className="z-10"
                        logo={<DepositaLogo className="w-10 h-10 shadow-none" />}
                        title="Pix Depositado!"
                        time="Agora"
                        message={
                        <>
                            <p className="text-xs text-white/80">Valor: <span className="font-bold text-white">R$ 197,00</span></p>
                            <div className="mt-2 flex items-center gap-1.5">
                            <span className="text-[9px] font-bold bg-green-500 text-white px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                                <CheckCircle2 size={10} className="fill-white text-green-500"/> RECUPERADA
                            </span>
                            </div>
                        </>
                        }
                    />

                    {/* Notificações de fundo para dar volume */}
                    <NotificationCard
                        logo={<div className="w-10 h-10 rounded-lg bg-blue-500/80 flex items-center justify-center"><Zap size={20} className="text-white"/></div>}
                        title="Novo Lead"
                        time="1m"
                        message={<p className="text-xs text-white/60">Lead do anúncio 'Promoção Dia das Mães'</p>}
                        className="absolute top-[15%] left-[5%] animate-float"
                        isHighlighted={false}
                    />
                    <NotificationCard
                        logo={<div className="w-10 h-10 rounded-lg bg-red-500/80 flex items-center justify-center"><ShoppingCart size={20} className="text-white"/></div>}
                        title="Carrinho Abandonado"
                        time="3m"
                        message={<p className="text-xs text-white/60">Cliente 'Maria' (...'9876')</p>}
                        className="absolute top-[10%] right-[10%] animate-float"
                        style={{animationDelay: '-2s'}}
                        isHighlighted={false}
                    />
                     <NotificationCard
                        logo={<div className="w-10 h-10 rounded-lg bg-purple-500/80 flex items-center justify-center"><Wallet size={20} className="text-white"/></div>}
                        title="Pagamento Confirmado"
                        time="8m"
                        message={<p className="text-xs text-white/60">Pedido #1234 - R$ 97,00</p>}
                        className="absolute bottom-[20%] right-[2%] animate-float"
                        style={{animationDelay: '-4s'}}
                        isHighlighted={false}
                    />
                    <NotificationCard
                        logo={<div className="w-10 h-10 rounded-lg bg-gray-500/80 flex items-center justify-center"><Server size={20} className="text-white"/></div>}
                        title="Webhook Recebido"
                        time="12m"
                        message={<p className="text-xs text-white/60">Origem: 'Landing Page'</p>}
                        className="absolute bottom-[15%] left-[8%] animate-float"
                        style={{animationDelay: '-1s'}}
                        isHighlighted={false}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#92D639]/20 to-[#92D639]/5 rounded-3xl blur-3xl opacity-40 -z-10 transform translate-y-4"></div>

                </div>

            </div>

            {/* CTA Final */}
            <div className="text-center mt-16 col-span-full">
                <button className="group bg-slate-900 hover:bg-slate-800 text-white px-8 py-3.5 rounded-xl font-bold text-base transition-all shadow-xl shadow-slate-900/20 hover:-translate-y-1 inline-flex items-center gap-2">
                    Integrar Agora
                    <ArrowRight size={18} className="text-green-400 group-hover:translate-x-1 transition-transform"/>
                </button>
                <p className="mt-3 text-xs text-slate-400 font-medium">Configuração simples em 2 minutos • Sem cartão de crédito</p>
            </div>

        </section>
        </div>
    );
};
