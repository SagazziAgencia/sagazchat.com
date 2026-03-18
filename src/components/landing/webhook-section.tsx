'use client';

import React, { useState, useEffect } from 'react';
import { Network, Zap, DollarSign, ArrowRight, ShieldCheck } from 'lucide-react';
import { PhoneMockupAnimation } from '@/components/landing/phone-mockup-animation';
import { Button } from '@/components/ui/button';
import { AnimateIn } from '@/components/ui/animate-in';


const ValidapayLogoStep = () => (
    <img src="/images/validapay-logo.png" alt="Validapay" className="w-full h-full object-contain" />
);


export function WebhookSection() {
    const [activeStep, setActiveStep] = useState(1);

    useEffect(() => {
        const stepInterval = setInterval(() => {
            setActiveStep((prev) => (prev % 4) + 1);
        }, 3000);

        return () => clearInterval(stepInterval);
    }, []);

    return (
        <div className="bg-[#F8FAFC] py-16 lg:py-12 lg:min-h-screen lg:flex lg:flex-col lg:justify-center px-4 font-sans text-slate-900 selection:bg-primary/20 selection:text-slate-900 relative overflow-hidden">
            <section className="container mx-auto max-w-7xl relative z-10">
                <AnimateIn delay={0}>
                    <div className="text-center mb-10 lg:mb-6 space-y-3">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary mb-1">
                            Webhooks
                        </p>
                        <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-[3rem] font-bold tracking-tight leading-[1.15] text-slate-900">
                            Transforme Checkouts Abandonados em{' '}
                            <br />
                            <span className="text-primary">
                                Dinheiro no Seu Bolso
                            </span>
                        </h2>
                        <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
                            Integração nativa entre <strong>Validapay</strong> e <strong>Sagazchat</strong>. Recupere vendas automaticamente sem mover um dedo.
                        </p>
                    </div>
                </AnimateIn>

                <div className="flex flex-col lg:flex-row gap-10 lg:gap-10 items-center">
                    <AnimateIn from="left" delay={150} className="w-full lg:w-1/2">
                    <div className="flex flex-col gap-5 lg:gap-3">
                        <div className="relative space-y-4 lg:space-y-2 w-full">
                            <div className="absolute left-[1.65rem] top-8 bottom-8 w-px bg-slate-200 z-0"></div>
                            <div
                                className="absolute left-[1.65rem] top-8 w-px bg-primary z-0 transition-all duration-1000 ease-in-out"
                                style={{ height: `${Math.min((activeStep - 1) * 33.3, 100)}%` }}
                            ></div>

                            {/* STEP 1 */}
                            <div
                                onClick={() => setActiveStep(1)}
                                className={`group cursor-pointer relative bg-white rounded-xl p-5 lg:p-3.5 border transition-all duration-300 flex gap-5 lg:gap-4 items-start z-10 ${activeStep === 1 ? 'border-primary shadow-lg shadow-black/5 ring-1 ring-primary/20 scale-[1.02]' : 'border-slate-100 shadow-sm hover:border-slate-200'}`}
                            >
                                <div className={`w-14 h-14 lg:w-11 lg:h-11 rounded-lg flex items-center justify-center shrink-0 transition-all duration-500 bg-[#020938] border border-[#0A1A5C] shadow-sm ${activeStep !== 1 ? 'grayscale opacity-70' : ''}`}>
                                    <div className="w-12 h-12 lg:w-9 lg:h-9">
                                        <ValidapayLogoStep />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-center mb-1">
                                        <h3 className={`text-base font-bold transition-colors ${activeStep === 1 ? 'text-slate-900' : 'text-slate-500'}`}>1. Checkout Validapay</h3>
                                        {activeStep === 1 && <span className="text-[9px] font-bold text-violet-600 bg-violet-50 px-2 py-0.5 rounded-full">Pendente</span>}
                                    </div>
                                    <p className={`text-sm leading-relaxed ${activeStep === 1 ? 'text-slate-600' : 'text-slate-400'}`}>
                                        O cliente gera um Pix ou Boleto no checkout mas sai sem pagar.
                                    </p>
                                </div>
                            </div>

                            {/* STEP 2 */}
                            <div
                                onClick={() => setActiveStep(2)}
                                className={`group cursor-pointer relative bg-white rounded-xl p-5 lg:p-3.5 border transition-all duration-300 flex gap-5 lg:gap-4 items-start z-10 ${activeStep === 2 ? 'border-primary shadow-lg shadow-black/5 ring-1 ring-primary/20 scale-[1.02]' : 'border-slate-100 shadow-sm hover:border-slate-200'}`}
                            >
                                <div className={`w-12 h-12 lg:w-10 lg:h-10 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-500 border ${activeStep === 2 ? 'bg-emerald-50 text-emerald-600 border-emerald-100 scale-110' : 'bg-slate-50 text-slate-400 border-slate-100'}`}>
                                    <Network size={20} />
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-center mb-1">
                                        <h3 className={`text-base font-bold transition-colors ${activeStep === 2 ? 'text-slate-900' : 'text-slate-500'}`}>2. Envio do Webhook</h3>
                                        {activeStep === 2 && <span className="text-[9px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full animate-pulse">Recebendo...</span>}
                                    </div>
                                    <p className={`text-sm leading-relaxed ${activeStep === 2 ? 'text-slate-600' : 'text-slate-400'}`}>
                                        A plataforma envia os dados (Nome, Telefone) para o Sagazchat instantaneamente.
                                    </p>
                                </div>
                            </div>

                            {/* STEP 3 */}
                            <div
                                onClick={() => setActiveStep(3)}
                                className={`group cursor-pointer relative bg-white rounded-xl p-5 lg:p-3.5 border transition-all duration-300 flex gap-5 lg:gap-4 items-start z-10 ${activeStep === 3 ? 'border-primary shadow-lg shadow-black/5 ring-1 ring-primary/20 scale-[1.02]' : 'border-slate-100 shadow-sm hover:border-slate-200'}`}
                            >
                                <div className={`w-12 h-12 lg:w-10 lg:h-10 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-500 border ${activeStep === 3 ? 'bg-primary/10 text-primary border-primary/20 scale-110' : 'bg-slate-50 text-slate-400 border-slate-100'}`}>
                                    <Zap size={20} />
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-center mb-1">
                                        <h3 className={`text-base font-bold transition-colors ${activeStep === 3 ? 'text-slate-900' : 'text-slate-500'}`}>3. Disparo do Fluxo</h3>
                                        {activeStep === 3 && <span className="text-[9px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">Enviada</span>}
                                    </div>
                                    <p className={`text-sm leading-relaxed mb-2 ${activeStep === 3 ? 'text-slate-600' : 'text-slate-400'}`}>
                                        O Sagazchat envia a mensagem de recuperação no WhatsApp do cliente.
                                    </p>

                                    <div className={`text-xs inline-flex items-center gap-2 bg-slate-50 px-2 py-1.5 rounded-lg border border-slate-100 text-slate-500 transition-opacity ${activeStep === 3 ? 'opacity-100' : 'opacity-40'}`}>
                                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span> "Oi! Segue seu código Pix 👇"
                                    </div>
                                </div>
                            </div>

                            {/* STEP 4 */}
                            <div
                                onClick={() => setActiveStep(4)}
                                className={`group cursor-pointer relative bg-white rounded-xl p-5 lg:p-3.5 border transition-all duration-300 flex gap-5 lg:gap-4 items-start z-10 ${activeStep === 4 ? 'border-primary shadow-lg shadow-black/5 ring-1 ring-primary/20 scale-[1.02]' : 'border-slate-100 shadow-sm hover:border-slate-200'}`}
                            >
                                <div className={`w-12 h-12 lg:w-10 lg:h-10 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-500 border ${activeStep === 4 ? 'bg-primary text-white border-primary scale-110' : 'bg-slate-50 text-slate-400 border-slate-100'}`}>
                                    <DollarSign size={20} />
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-center mb-1">
                                        <h3 className={`text-base font-bold transition-colors ${activeStep === 4 ? 'text-slate-900' : 'text-slate-500'}`}>4. Venda Recuperada</h3>
                                        {activeStep === 4 && <span className="text-[9px] font-bold text-white bg-primary px-2 py-0.5 rounded-full">Sucesso</span>}
                                    </div>
                                    <p className={`text-sm leading-relaxed ${activeStep === 4 ? 'text-slate-600' : 'text-slate-400'}`}>
                                        O cliente paga e você recebe a notificação da Validapay.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full mt-4 lg:mt-2">
                            <a href="#pricing" className="inline-flex items-center gap-2.5 rounded-xl bg-primary px-8 py-3.5 text-[15px] font-bold text-white shadow-[0_4px_14px_rgba(23,199,90,0.3)] hover:bg-primary/90 hover:shadow-[0_6px_20px_rgba(23,199,90,0.4)] transition-all">
                                Ver planos
                                <ArrowRight className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                    </AnimateIn>

                    <AnimateIn from="right" delay={200} duration={700} className="w-full lg:w-1/2">
                    <div className="flex justify-center items-center lg:scale-[0.82] lg:origin-center">
                        <PhoneMockupAnimation />
                    </div>
                    </AnimateIn>
                </div>
            </section>
        </div>
    );
}


