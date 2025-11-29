'use client';

import React, { useState, useEffect } from 'react';
import { Network, Zap, DollarSign } from 'lucide-react';
import { PhoneMockupAnimation } from '@/components/landing/phone-mockup-animation';

export function RemarketingSection() {
    const [activeStep, setActiveStep] = useState(1);

    useEffect(() => {
        const stepInterval = setInterval(() => {
            setActiveStep((prev) => (prev % 4) + 1);
        }, 3000);

        return () => clearInterval(stepInterval);
    }, []);
    
    return (
        <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center py-20 px-4 font-sans text-slate-900 selection:bg-green-100 selection:text-green-900 relative overflow-hidden">
            <section className="container mx-auto max-w-7xl relative z-10">
                <div className="text-center mb-12 md:mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm text-[10px] font-bold uppercase tracking-wider text-green-700 mb-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                        💸 Lucro Automático
                    </div>
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                        Transforme Checkouts Abandonados em<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">
                        Dinheiro no Seu Bolso
                        </span>
                    </h2>
                    <p className="text-base md:text-lg text-slate-500 max-w-xl mx-auto font-medium leading-relaxed">
                        Integração nativa entre <strong>Deposita.Ai</strong> e <strong>RespondeZap</strong>. Recupere vendas automaticamente sem mover um dedo.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    <div className="relative space-y-4 w-full max-w-2xl mx-auto lg:order-1">
                        <div className="absolute left-[1.65rem] top-8 bottom-8 w-px bg-slate-200 z-0"></div>
                        <div 
                            className="absolute left-[1.65rem] top-8 w-px bg-green-500 z-0 transition-all duration-1000 ease-in-out"
                            style={{ height: `${Math.min((activeStep - 1) * 33.3, 100)}%` }}
                        ></div>

                        {/* STEP 1 */}
                        <div 
                            onClick={() => setActiveStep(1)}
                            className={`group cursor-pointer relative bg-white rounded-xl p-5 border transition-all duration-300 flex gap-5 items-start z-10 ${activeStep === 1 ? 'border-green-500 shadow-lg shadow-green-900/5 ring-1 ring-green-500/20 scale-[1.02]' : 'border-slate-100 shadow-sm hover:border-slate-200'}`}
                        >
                            <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-500 bg-white border border-slate-50 shadow-sm ${activeStep === 1 ? 'scale-110 border-green-100' : 'grayscale opacity-70'}`}>
                                <div className="w-8 h-8">
                                    <svg viewBox="0 0 395 395" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 66C1 29.5492 30.5492 0 67 0H328C364.451 0 394 29.5492 394 66V329C394 365.451 364.451 395 328 395H67C30.5492 395 1 365.451 1 329V66Z" fill="url(#pma_paint0_linear_2267_93_rm)"/>
                                        <defs>
                                            <linearGradient id="pma_paint0_linear_2267_93_rm" x1="349.5" y1="26" x2="197.5" y2="395" gradientUnits="userSpaceOnUse"><stop stopColor="#FFA700"/><stop offset="1" stopColor="#FF8000"/></linearGradient>
                                        </defs>
                                    </svg>
                                </div>
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

                        {/* STEP 2 */}
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

                        {/* STEP 3 */}
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
                                <div className={`text-[9px] inline-flex items-center gap-2 bg-slate-50 px-2 py-1.5 rounded border border-slate-100 text-slate-500 transition-opacity ${activeStep === 3 ? 'opacity-100' : 'opacity-40'}`}>
                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> "Oi! Segue seu código Pix 👇"
                                </div>
                            </div>
                        </div>

                        {/* STEP 4 */}
                        <div 
                            onClick={() => setActiveStep(4)}
                            className={`group cursor-pointer relative bg-white rounded-xl p-5 border transition-all duration-300 flex gap-5 items-start z-10 ${activeStep === 4 ? 'border-green-500 shadow-lg shadow-green-900/5 ring-1 ring-green-500/20 scale-[1.02]' : 'border-slate-100 shadow-sm hover:border-slate-200'}`}
                        >
                            <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-500 border ${activeStep === 4 ? 'bg-slate-900 text-white border-slate-700 scale-110' : 'bg-slate-50 text-slate-400 border-slate-100'}`}>
                                <DollarSign size={20} />
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
                    
                    <div className="lg:order-2 flex justify-center items-center">
                        <PhoneMockupAnimation />
                    </div>
                </div>
            </section>
        </div>
    );
}
