'use client';

import React, { useState, useEffect } from 'react';
import { Network, Zap, DollarSign } from 'lucide-react';
import { PhoneMockupAnimation } from '@/components/landing/phone-mockup-animation';

const DepositaLogoSvgStep = () => (
    <svg viewBox="0 0 395 395" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-contain">
        <defs>
            <linearGradient id="pma_paint0_linear_step" x1="349.5" y1="26" x2="197.5" y2="395" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFA700"/>
                <stop offset="1" stopColor="#FF8000"/>
            </linearGradient>
            <linearGradient id="pma_paint1_linear_step" x1="26" y1="45.5" x2="348" y2="317" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFDB00"/>
                <stop offset="1" stopColor="#FF6C00"/>
            </linearGradient>
            <linearGradient id="pma_paint2_linear_step" x1="131.5" y1="122" x2="263.5" y2="260.5" gradientUnits="userSpaceOnUse">
                <stop offset="0.037148" stopColor="#FFBA00" stopOpacity="0.45"/>
                <stop offset="0.317308" stopColor="white" stopOpacity="0.82"/>
                <stop offset="0.723197" stopColor="white"/>
                <stop offset="0.931722" stopColor="#FF8A01" stopOpacity="0.94"/>
            </linearGradient>
            <linearGradient id="pma_paint3_linear_step" x1="290.5" y1="177.5" x2="221.5" y2="311" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FF9500"/>
                <stop offset="0.826923" stopColor="white"/>
            </linearGradient>
        </defs>
        <path d="M1 66C1 29.5492 30.5492 0 67 0H328C364.451 0 394 29.5492 394 66V329C394 365.451 364.451 395 328 395H67C30.5492 395 1 365.451 1 329V66Z" fill="url(#pma_paint0_linear_step)"/>
        <path d="M66 394C29.5492 394 0 364.451 0 328L0 67C0 30.5492 29.5492 1 66 1L329 1C365.451 1 395 30.5492 395 67L395 328C395 364.451 365.451 394 329 394L66 394Z" fill="url(#pma_paint1_linear_step)"/>
        <path d="M333.5 214.5C292.5 119 216.5 118 148.5 122.5C79.5 118.5 68.8045 83.6549 62.2216 68.5H209.5C241.1 68.5 265.667 80.8333 274 87C333.6 129 338.5 189.5 333.5 214.5Z" fill="white"/>
        <path d="M119 272L121.001 135.5L62.0011 163.5L61 327H175.501C225.5 307.5 230.5 290 234.5 263.5C214 273 153 272.5 119 272Z" fill="url(#pma_paint2_linear_step)"/>
        <path d="M176 327C292.5 280 291 169 258 143.5C294.5 143.5 325.5 187.5 334 216C330.47 237.822 318.5 280.5 267 311C243.892 325.325 221.489 327 176 327Z" fill="url(#pma_paint3_linear_step)"/>
    </svg>
);


export function RemarketingSection() {
    const [activeStep, setActiveStep] = useState(1);

    useEffect(() => {
        const stepInterval = setInterval(() => {
            setActiveStep((prev) => (prev % 4) + 1);
        }, 3000);

        return () => clearInterval(stepInterval);
    }, []);
    
    return (
        <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center py-20 px-4 font-sans text-slate-900 selection:bg-green-100 selection:text-green-900 relative overflow-hidden bg-pattern">
             <div className="pattern-mask"></div>
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
                             <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 transition-all duration-500 bg-white border border-slate-50 shadow-sm ${activeStep === 1 ? 'scale-110' : 'grayscale opacity-70'}`}>
                                <div className="w-8 h-8">
                                    <DepositaLogoSvgStep />
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
             <style jsx>{`
                .bg-pattern {
                    background-image: radial-gradient(circle at center, #F8FAFC, #F8FAFC), radial-gradient(circle at center, #e2e8f0 0.5px, transparent 0.5px);
                    background-size: 100% 100%, 16px 16px;
                }
                .pattern-mask {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: radial-gradient(circle at 50% 50%, transparent 40%, #F8FAFC 70%);
                    pointer-events: none;
                }
            `}</style>
        </div>
    );
}

    