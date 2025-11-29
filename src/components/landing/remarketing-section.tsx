'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Network, Zap, DollarSign } from 'lucide-react';

export function RemarketingSection() {
    const [activeStep, setActiveStep] = useState(1);

    useEffect(() => {
        const stepInterval = setInterval(() => {
            setActiveStep((prev) => (prev === 4 ? 1 : prev + 1));
        }, 4500);

        return () => clearInterval(stepInterval);
    }, []);
    
    const PhoneMockupAnimation = () => {
        const notificationsData = [
            { title: "Venda Cartão Depositada!", value: "R$ 347,00", type: "card", time: "07:00" },
            { title: "Venda Pix Gerada!", value: "R$ 175,00", type: "pix", time: "10:30" },
            { title: "Pix Depositado!", value: "R$ 5.000,00", type: "deposit", time: "21:45" },
            { title: "Pix Depositado!", value: "R$ 2.350,00", type: "deposit", time: "11:30" },
            { title: "Venda Pix Gerada!", value: "R$ 89,90", type: "pix", time: "10:30" },
            { title: "Pix Depositado!", value: "R$ 1.200,00", type: "deposit", time: "21:45" },
            { title: "Venda Cartão Depositada!", value: "R$ 450,50", type: "card", time: "07:00" },
        ];
        
        const DepositaLogoSvg = () => (
            <svg className="w-full h-full object-contain" viewBox="0 0 395 395" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 66C1 29.5492 30.5492 0 67 0H328C364.451 0 394 29.5492 394 66V329C394 365.451 364.451 395 328 395H67C30.5492 395 1 365.451 1 329V66Z" fill="url(#paint0_linear_2267_93)"/>
              <path d="M66 394C29.5492 394 3.52371e-07 364.451 7.87042e-07 328L3.89944e-06 67C4.33411e-06 30.5492 29.5492 1 66 1L329 1C365.451 1 395 30.5492 395 67L395 328C395 364.451 365.451 394 329 394L66 394Z" fill="url(#paint1_linear_2267_93)"/>
              <path d="M333.5 214.5C292.5 119 216.5 118 148.5 122.5C79.5 118.5 68.8045 83.6549 62.2216 68.5H209.5C241.1 68.5 265.667 80.8333 274 87C333.6 129 338.5 189.5 333.5 214.5Z" fill="white"/>
              <path d="M119 272L121.001 135.5L62.0011 163.5L61 327H175.501C225.5 307.5 230.5 290 234.5 263.5C214 273 153 272.5 119 272Z" fill="url(#paint2_linear_2267_93)"/>
              <path d="M176 327C292.5 280 291 169 258 143.5C294.5 143.5 325.5 187.5 334 216C330.47 237.822 318.5 280.5 267 311C243.892 325.325 221.489 327 176 327Z" fill="url(#paint3_linear_2267_93)"/>
              <defs>
                <linearGradient id="paint0_linear_2267_93" x1="349.5" y1="26" x2="197.5" y2="395" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FFA700"/>
                  <stop offset="1" stopColor="#FF8000"/>
                </linearGradient>
                <linearGradient id="paint1_linear_2267_93" x1="26" y1="45.5" x2="348" y2="317" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FFDB00"/>
                  <stop offset="1" stopColor="#FF6C00"/>
                </linearGradient>
                <linearGradient id="paint2_linear_2267_93" x1="131.5" y1="122" x2="263.5" y2="260.5" gradientUnits="userSpaceOnUse">
                  <stop offset="0.037148" stopColor="#FFBA00" stopOpacity="0.45"/>
                  <stop offset="0.317308" stopColor="white" stopOpacity="0.82"/>
                  <stop offset="0.723197" stopColor="white"/>
                  <stop offset="0.931722" stopColor="#FF8A01" stopOpacity="0.94"/>
                </linearGradient>
                <linearGradient id="paint3_linear_2267_93" x1="290.5" y1="177.5" x2="221.5" y2="311" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FF9500"/>
                  <stop offset="0.826923" stopColor="white"/>
                </linearGradient>
              </defs>
            </svg>
        );

        const NotificationCard = ({ data, isDarker }: { data: any, isDarker: boolean }) => {
            return (
                <div className={`notification-card animate-enter ${isDarker ? 'darker' : ''}`}>
                    <div className="icon-box">
                        <DepositaLogoSvg />
                    </div>
                    <div className="content">
                        <div className="app-name">Deposita.ai</div>
                        <div className="title">{data.title}</div>
                        <div className="subtitle">Valor: {data.value}</div>
                    </div>
                    <div className="time">{data.time}</div>
                </div>
            );
        };
        
        const [time, setTime] = useState('');
        const [activeNotifications, setActiveNotifications] = useState<any[]>([]);
        const dataIndexRef = useRef(0);
        const timeoutRef = useRef<NodeJS.Timeout | null>(null);

        useEffect(() => {
            const updateClock = () => {
                const now = new Date();
                setTime(now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }));
            };
            updateClock();
            const interval = setInterval(updateClock, 1000);
            return () => clearInterval(interval);
        }, []);

        useEffect(() => {
            const addNotification = () => {
                const currentIndex = dataIndexRef.current;
                const newData = {
                    ...notificationsData[currentIndex],
                    id: Date.now() + Math.random(),
                    isDarker: Math.random() > 0.6
                };

                setActiveNotifications(prev => {
                    const updated = [newData, ...prev];
                    return updated.length > 6 ? updated.slice(0, 6) : updated;
                });

                dataIndexRef.current = (currentIndex + 1) % notificationsData.length;
                
                const delay = Math.random() * 1500 + 1500;
                timeoutRef.current = setTimeout(addNotification, delay);
            };
            
            timeoutRef.current = setTimeout(addNotification, 100);

            return () => {
                if (timeoutRef.current) {
                    clearTimeout(timeoutRef.current);
                }
            };
        }, []);

        return (
            <div className="main-container font-inter">
                <div className="bg-blur"></div>
                <div className="phone-mockup">
                    <div className="notch"></div>
                    <div className="screen">
                        <div className="status-bar">
                            <span>{time}</span>
                            <div className="flex items-center gap-1.5">
                                <svg width="18" height="12" viewBox="0 0 18 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 10C1 9.44772 1.44772 9 2 9C2.55228 9 3 9.44772 3 10V11C3 11.5523 2.55228 12 2 12C1.44772 12 1 11.5523 1 11V10Z" />
                                    <path d="M5 7.5C5 6.94772 5.44772 6.5 6 6.5C6.55228 6.5 7 6.94772 7 7.5V11C7 11.5523 6.55228 12 6 12C5.44772 12 5 11.5523 5 11V7.5Z" />
                                    <path d="M9 5C9 4.44772 9.44772 4 10 4C10.5523 4 11 4.44772 11 5V11C11 11.5523 10.5523 12 10 12C9.44772 12 9 11.5523 9 11V5Z" />
                                    <path d="M13 2.5C13 1.94772 13.4477 1.5 14 1.5C14.5523 1.5 15 1.94772 15 2.5V11C15 11.5523 14.5523 12 14 12C13.4477 12 13 11.5523 13 11V2.5Z" />
                                </svg>
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M9.00004 2.87207C11.9682 2.87207 14.6599 4.02021 16.6369 5.86776C16.9416 6.15252 17.4192 6.13605 17.7039 5.83129C17.9887 5.52652 17.9722 5.04896 17.6675 4.7642C15.4206 2.66442 12.3619 1.37207 9.00004 1.37207C5.63821 1.37207 2.57946 2.66442 0.332617 4.7642C0.0278553 5.04896 0.0113841 5.52652 0.296146 5.83129C0.580907 6.13605 1.05847 6.15252 1.36323 5.86776C3.3402 4.02021 6.03184 2.87207 9.00004 2.87207ZM9.00004 6.27643C10.9575 6.27643 12.7423 7.00947 14.0945 8.21481C14.4124 8.49811 14.4411 8.98616 14.1578 9.30403C13.8745 9.6219 13.3864 9.65063 13.0686 9.36733C11.9904 8.40632 10.5673 7.77643 9.00004 7.77643C7.43275 7.77643 6.00971 8.40632 4.93152 9.36733C4.61365 9.65063 4.12559 9.6219 3.8423 9.30403C3.559 8.98616 3.58773 8.49811 3.90561 8.21481C5.25776 7.00947 7.04259 6.27643 9.00004 6.27643ZM10.5298 11.0805C10.5298 11.9254 9.84483 12.6104 9.00004 12.6104C8.15525 12.6104 7.47025 11.9254 7.47025 11.0805C7.47025 10.2357 8.15525 9.55075 9.00004 9.55075C9.84483 9.55075 10.5298 10.2357 10.5298 11.0805Z" />
                                </svg>
                                <svg width="25" height="12" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                                    <rect x="0.5" y="0.5" width="21" height="11" rx="2.5" stroke="currentColor" strokeOpacity="0.4"/>
                                    <rect x="2" y="2" width="18" height="8" rx="1.5" fill="currentColor"/>
                                    <path d="M23 4C23.5523 4 24 4.44772 24 5V7C24 7.55228 23.5523 8 23 8V4Z" fill="currentColor" fillOpacity="0.4"/>
                                </svg>
                            </div>
                        </div>
                        <div className="notification-feed">
                            {activeNotifications.map((notif) => (
                                <NotificationCard
                                    key={notif.id}
                                    data={notif}
                                    isDarker={notif.isDarker}
                                />
                            ))}
                        </div>
                        <div className="cta-footer">
                            <div className="cta-text">
                                Use <span className="cta-highlight">Deposita.ai</span> com <span className="cta-highlight">Respondechat.ai</span> no seu negócio
                            </div>
                            <div className="home-indicator"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

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
                                    <PhoneMockupAnimation.DepositaLogoSvg />
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
                    
                    <div className="lg:order-2">
                        <PhoneMockupAnimation />
                    </div>
                </div>
            </section>

            <style jsx>{`
                .font-inter { font-family: 'Inter', sans-serif; }
                
                .main-container {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    padding: 20px 0;
                  }
          
                  .phone-mockup {
                    width: 320px;
                    height: 650px;
                    background: #000;
                    border-radius: 50px;
                    padding: 12px;
                    position: relative;
                    box-shadow: 
                      0 0 0 2px #333,
                      0 0 0 4px #1a1a1a,
                      0 30px 60px rgba(0,0,0,0.6),
                      inset 0 0 20px rgba(255,255,255,0.1);
                    z-index: 10;
                    transform: scale(0.85);
                  }

                  @media (min-width: 640px) {
                    .phone-mockup {
                        transform: scale(1);
                    }
                  }
          
                  .notch {
                    position: absolute;
                    top: 22px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 90px;
                    height: 24px;
                    background: #000;
                    border-radius: 12px;
                    z-index: 20;
                  }
          
                  .screen {
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(to bottom, #FF8A00 0%, #151010 50%, #151010 100%);
                    border-radius: 38px;
                    overflow: hidden;
                    position: relative;
                    display: flex;
                    flex-direction: column;
                  }
          
                  .status-bar {
                    height: 44px; 
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 0 24px;
                    padding-top: 4px; 
                    color: white;
                    font-size: 15px;
                    font-weight: 600;
                    z-index: 25;
                    letter-spacing: -0.5px;
                  }
          
                  .notification-feed {
                    flex: 1;
                    padding: 10px 0;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                    align-items: center;
                    mask-image: linear-gradient(to bottom, black 85%, transparent 100%);
                    -webkit-mask-image: linear-gradient(to bottom, black 85%, transparent 100%);
                  }
          
                  .cta-footer {
                    width: 100%;
                    padding: 16px 20px 24px 20px;
                    background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
                    text-align: center;
                    z-index: 30;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 4px;
                  }
          
                  .cta-text {
                    color: rgba(255, 255, 255, 0.9);
                    font-size: 11px;
                    font-weight: 500;
                    letter-spacing: 0.3px;
                    text-shadow: 0 2px 4px rgba(0,0,0,0.5);
                  }
          
                  .cta-highlight {
                    color: #FF8A00;
                    font-weight: 700;
                  }
          
                  .home-indicator {
                    width: 130px;
                    height: 5px;
                    background: rgba(255, 255, 255, 0.3);
                    border-radius: 10px;
                    margin-top: 12px;
                  }
          
                  .notification-card {
                    width: 94%;
                    background: rgba(255, 255, 255, 0.12);
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
                    border-radius: 16px;
                    padding: 10px 12px;
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    color: white;
                    transform-origin: top center;
                  }
          
                  .notification-card.darker {
                    background: rgba(0, 0, 0, 0.25);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                  }
          
                  .icon-box {
                    width: 42px;
                    height: 42px;
                    background: transparent; 
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                    filter: drop-shadow(0 4px 6px rgba(0,0,0,0.3));
                  }
          
                  .content { flex: 1; min-width: 0; }
          
                  .title {
                    font-size: 12px;
                    font-weight: 700;
                    line-height: 1.2;
                    margin-bottom: 2px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                  }
          
                  .app-name {
                    font-size: 9px;
                    text-transform: uppercase;
                    opacity: 0.6;
                    margin-bottom: 2px;
                    font-weight: 600;
                    letter-spacing: 0.5px;
                  }
          
                  .subtitle {
                    font-size: 11px;
                    opacity: 0.9;
                    font-weight: 400;
                  }
          
                  .time {
                    font-size: 10px;
                    opacity: 0.7;
                    align-self: flex-start;
                    margin-top: 2px;
                    white-space: nowrap;
                  }
          
                  @keyframes slideIn {
                    0% { opacity: 0; transform: translateY(-20px) scale(0.95); }
                    100% { opacity: 1; transform: translateY(0) scale(1); }
                  }
          
                  .animate-enter {
                    animation: slideIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
                  }
                   .bg-blur {
                    position: absolute;
                    width: 500px;
                    height: 500px;
                    background: radial-gradient(circle, rgba(255,165,0,0.2) 0%, rgba(0,0,0,0) 70%);
                    z-index: 0;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }
            `}
            </style>
        </div>
    );
}
```