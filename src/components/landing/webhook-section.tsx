'use client';

import React, { useState, useEffect } from 'react';
import { Network, Zap, DollarSign, ArrowRight, ShieldCheck } from 'lucide-react';
import { PhoneMockupAnimation } from '@/components/landing/phone-mockup-animation';
import { Button } from '@/components/ui/button';
import { AnimateIn } from '@/components/ui/animate-in';


const DepositaLogoSvgStep = () => (
    <svg viewBox="0 0 395 395" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-contain">
        <defs>
            <linearGradient id="pma_paint0_linear_step" x1="349.5" y1="26" x2="197.5" y2="395" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFA700" />
                <stop offset="1" stopColor="#FF8000" />
            </linearGradient>
            <linearGradient id="pma_paint1_linear_step" x1="26" y1="45.5" x2="348" y2="317" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFDB00" />
                <stop offset="1" stopColor="#FF6C00" />
            </linearGradient>
            <linearGradient id="pma_paint2_linear_step" x1="131.5" y1="122" x2="263.5" y2="260.5" gradientUnits="userSpaceOnUse">
                <stop offset="0.037148" stopColor="#FFBA00" stopOpacity="0.45" />
                <stop offset="0.317308" stopColor="white" stopOpacity="0.82" />
                <stop offset="0.723197" stopColor="white" />
                <stop offset="0.931722" stopColor="#FF8A01" stopOpacity="0.94" />
            </linearGradient>
            <linearGradient id="pma_paint3_linear_step" x1="290.5" y1="177.5" x2="221.5" y2="311" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FF9500" />
                <stop offset="0.826923" stopColor="white" />
            </linearGradient>
        </defs>
        <path d="M1 66C1 29.5492 30.5492 0 67 0H328C364.451 0 394 29.5492 394 66V329C394 365.451 364.451 395 328 395H67C30.5492 395 1 365.451 1 329V66Z" fill="url(#pma_paint0_linear_step)" />
        <path d="M66 394C29.5492 394 0 364.451 0 328L0 67C0 30.5492 29.5492 1 66 1L329 1C365.451 1 395 30.5492 395 67L395 328C395 364.451 365.451 394 329 394L66 394Z" fill="url(#pma_paint1_linear_step)" />
        <path d="M333.5 214.5C292.5 119 216.5 118 148.5 122.5C79.5 118.5 68.8045 83.6549 62.2216 68.5H209.5C241.1 68.5 265.667 80.8333 274 87C333.6 129 338.5 189.5 333.5 214.5Z" fill="white" />
        <path d="M119 272L121.001 135.5L62.0011 163.5L61 327H175.501C225.5 307.5 230.5 290 234.5 263.5C214 273 153 272.5 119 272Z" fill="url(#pma_paint2_linear_step)" />
        <path d="M176 327C292.5 280 291 169 258 143.5C294.5 143.5 325.5 187.5 334 216C330.47 237.822 318.5 280.5 267 311C243.892 325.325 221.489 327 176 327Z" fill="url(#pma_paint3_linear_step)" />
    </svg>
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
        <div className="bg-[#F8FAFC] py-20 lg:py-32 px-4 font-sans text-slate-900 selection:bg-primary/20 selection:text-slate-900 relative overflow-hidden">
            <section className="container mx-auto max-w-7xl relative z-10">
                <AnimateIn delay={0}>
                    <div className="text-center mb-12 md:mb-16 space-y-4">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary mb-1">
                            Webhooks
                        </p>
                        <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-[3rem] font-bold tracking-tight leading-[1.15] text-slate-900">
                            Transforme Checkouts Abandonados em<br />
                            <span className="text-primary">
                                Dinheiro no Seu Bolso
                            </span>
                        </h2>
                        <p className="text-base text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
                            Integração nativa entre <strong>Deposita.Ai</strong> e <strong>Sagazchat</strong>. Recupere vendas automaticamente sem mover um dedo.
                        </p>
                    </div>
                </AnimateIn>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
                    <AnimateIn from="left" delay={150}>
                    <div className="w-full lg:w-1/2 flex flex-col gap-8">
                        <div className="relative space-y-4 w-full">
                            <div className="absolute left-[1.65rem] top-8 bottom-8 w-px bg-slate-200 z-0"></div>
                            <div
                                className="absolute left-[1.65rem] top-8 w-px bg-primary z-0 transition-all duration-1000 ease-in-out"
                                style={{ height: `${Math.min((activeStep - 1) * 33.3, 100)}%` }}
                            ></div>

                            {/* STEP 1 */}
                            <div
                                onClick={() => setActiveStep(1)}
                                className={`group cursor-pointer relative bg-white rounded-xl p-5 border transition-all duration-300 flex gap-5 items-start z-10 ${activeStep === 1 ? 'border-primary shadow-lg shadow-black/5 ring-1 ring-primary/20 scale-[1.02]' : 'border-slate-100 shadow-sm hover:border-slate-200'}`}
                            >
                                <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 transition-all duration-500 bg-white border border-slate-50 shadow-sm ${activeStep !== 1 ? 'grayscale opacity-70' : ''}`}>
                                    <div className="w-8 h-8">
                                        <DepositaLogoSvgStep />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-center mb-1">
                                        <h3 className={`text-base font-bold transition-colors ${activeStep === 1 ? 'text-slate-900' : 'text-slate-500'}`}>1. Checkout Deposita.Ai</h3>
                                        {activeStep === 1 && <span className="text-[9px] font-bold text-orange-500 bg-orange-50 px-2 py-0.5 rounded-full">Pendente</span>}
                                    </div>
                                    <p className={`text-sm leading-relaxed ${activeStep === 1 ? 'text-slate-600' : 'text-slate-400'}`}>
                                        O cliente gera um Pix ou Boleto no checkout mas sai sem pagar.
                                    </p>
                                </div>
                            </div>

                            {/* STEP 2 */}
                            <div
                                onClick={() => setActiveStep(2)}
                                className={`group cursor-pointer relative bg-white rounded-xl p-5 border transition-all duration-300 flex gap-5 items-start z-10 ${activeStep === 2 ? 'border-primary shadow-lg shadow-black/5 ring-1 ring-primary/20 scale-[1.02]' : 'border-slate-100 shadow-sm hover:border-slate-200'}`}
                            >
                                <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-500 border ${activeStep === 2 ? 'bg-emerald-50 text-emerald-600 border-emerald-100 scale-110' : 'bg-slate-50 text-slate-400 border-slate-100'}`}>
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
                                className={`group cursor-pointer relative bg-white rounded-xl p-5 border transition-all duration-300 flex gap-5 items-start z-10 ${activeStep === 3 ? 'border-primary shadow-lg shadow-black/5 ring-1 ring-primary/20 scale-[1.02]' : 'border-slate-100 shadow-sm hover:border-slate-200'}`}
                            >
                                <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-500 border ${activeStep === 3 ? 'bg-primary/10 text-primary border-primary/20 scale-110' : 'bg-slate-50 text-slate-400 border-slate-100'}`}>
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
                                className={`group cursor-pointer relative bg-white rounded-xl p-5 border transition-all duration-300 flex gap-5 items-start z-10 ${activeStep === 4 ? 'border-primary shadow-lg shadow-black/5 ring-1 ring-primary/20 scale-[1.02]' : 'border-slate-100 shadow-sm hover:border-slate-200'}`}
                            >
                                <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-500 border ${activeStep === 4 ? 'bg-primary text-white border-primary scale-110' : 'bg-slate-50 text-slate-400 border-slate-100'}`}>
                                    <DollarSign size={20} />
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-center mb-1">
                                        <h3 className={`text-base font-bold transition-colors ${activeStep === 4 ? 'text-slate-900' : 'text-slate-500'}`}>4. Venda Recuperada</h3>
                                        {activeStep === 4 && <span className="text-[9px] font-bold text-white bg-primary px-2 py-0.5 rounded-full">Sucesso</span>}
                                    </div>
                                    <p className={`text-sm leading-relaxed ${activeStep === 4 ? 'text-slate-600' : 'text-slate-400'}`}>
                                        O cliente paga e você recebe a notificação da Deposita.Ai.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full mt-4">
                            <a href="#pricing" className="inline-flex items-center gap-2.5 rounded-xl bg-primary px-8 py-3.5 text-[15px] font-bold text-white shadow-[0_4px_14px_rgba(23,199,90,0.3)] hover:bg-primary/90 hover:shadow-[0_6px_20px_rgba(23,199,90,0.4)] transition-all">
                                Ver planos
                                <ArrowRight className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                    </AnimateIn>

                    <AnimateIn from="right" delay={200} duration={700}>
                    <div className="w-full lg:w-1/2 flex justify-center items-center">
                        <PhoneMockupAnimation />
                    </div>
                    </AnimateIn>
                </div>
            </section>
        </div>
    );
}


