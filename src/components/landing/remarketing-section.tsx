'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
    RefreshCw,
    ChevronLeft,
    HelpCircle,
    Trash2,
    ChevronDown,
    Plus,
    AlertCircle,
    Send,
    Clock,
    Zap,
    CheckCircle2,
    ArrowRight
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { AnimateIn } from '@/components/ui/animate-in';

export const RemarketingSection = () => {
    const [currentMode, setCurrentMode] = useState('config');
    const [confRow2Visible, setConfRow2Visible] = useState(false);
    const [cursorState, setCursorState] = useState({ top: 200, left: 100, opacity: 0, scale: 1 });
    const [btnAddScale, setBtnAddScale] = useState(1);
    const [progressHeight, setProgressHeight] = useState(0);
    const [stepOpacities, setStepOpacities] = useState([0.4, 0.3, 0.3, 0.3, 0.3]);
    const [step5Translate, setStep5Translate] = useState(true);

    const timeoutsRef = useRef<NodeJS.Timeout[]>([]);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const cycleDuration = 12000;

    const clearAllAnimations = () => {
        timeoutsRef.current.forEach(clearTimeout);
        timeoutsRef.current = [];
    };

    const safeTimeout = (fn: () => void, delay: number) => {
        const id = setTimeout(fn, delay);
        timeoutsRef.current.push(id);
    };

    const runConfigAnimation = () => {
        setConfRow2Visible(false);
        setCursorState(prev => ({ ...prev, opacity: 0 }));

        safeTimeout(() => {
            setCursorState({ top: 220, left: 100, opacity: 1, scale: 1 });
        }, 500);
        safeTimeout(() => {
            setCursorState({ top: 200, left: 60, opacity: 1, scale: 0.8 });
            setBtnAddScale(0.95);
        }, 1000);
        safeTimeout(() => {
            setCursorState(prev => ({ ...prev, scale: 1 }));
            setBtnAddScale(1);
            setConfRow2Visible(true);
        }, 1200);

        safeTimeout(() => { setCursorState(prev => ({ ...prev, opacity: 0 })); }, 2000);
    };

    const runLiveAnimation = () => {
        setStepOpacities([0.4, 0.3, 0.3, 0.3, 0.3]);
        setStep5Translate(true);
        setProgressHeight(0);

        safeTimeout(() => {
            const newOpacities = [...stepOpacities];
            newOpacities[0] = 1;
            setStepOpacities(newOpacities);
            setProgressHeight(100);
        }, 100);

        safeTimeout(() => setStepOpacities(prev => [prev[0], 1, prev[2], prev[3], prev[4]]), 1200);
        safeTimeout(() => setStepOpacities(prev => [prev[0], prev[1], 1, prev[3], prev[4]]), 2800);
        safeTimeout(() => setStepOpacities(prev => [prev[0], prev[1], prev[2], 1, prev[4]]), 4500);
        safeTimeout(() => {
            setStepOpacities(prev => [prev[0], prev[1], prev[2], prev[3], 1]);
            setStep5Translate(false);
        }, 6000);
    };

    const updateView = (mode: string) => {
        clearAllAnimations();
        setCurrentMode(mode);

        if (mode === 'config') {
            runConfigAnimation();
        } else {
            runLiveAnimation();
        }
    };

    const manualToggle = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        const newMode = currentMode === 'config' ? 'live' : 'config';
        updateView(newMode);
        intervalRef.current = setInterval(() => {
            setCurrentMode(prev => {
                const nextMode = prev === 'config' ? 'live' : 'config';
                updateView(nextMode);
                return nextMode;
            });
        }, cycleDuration);
    };

    useEffect(() => {
        updateView('config');
        intervalRef.current = setInterval(() => {
            setCurrentMode(prev => {
                const nextMode = prev === 'config' ? 'live' : 'config';
                updateView(nextMode);
                return nextMode;
            });
        }, cycleDuration);

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
            clearAllAnimations();
        };
    }, []);

    return (
        <section className="py-24 bg-slate-50 text-slate-900 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <div className="space-y-8">
                        <AnimateIn from="left" delay={0}>
                            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
                                Remarketing
                            </p>
                        </AnimateIn>

                        <AnimateIn from="left" delay={100}>
                            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-[3rem] font-bold tracking-tight leading-[1.15] text-slate-900">
                                Cada &quot;não&quot; de hoje pode virar uma <span className="text-primary">venda amanhã.</span>
                            </h2>
                        </AnimateIn>

                        <AnimateIn from="left" delay={200}>
                            <p className="text-base text-slate-600 leading-relaxed">
                                Nem todo mundo compra no primeiro contato — e tudo bem. O remarketing automático reenvia a mensagem certa, no momento certo, para quem já demonstrou interesse. Sem você mover um dedo.
                            </p>
                        </AnimateIn>

                        <AnimateIn from="left" delay={300}>
                            <ul className="space-y-4">
                                {[
                                    "Sua sequência roda sozinha — sem você precisar lembrar de nada.",
                                    "Envio no dia e horário em que o cliente está mais propenso a comprar.",
                                    "O \"talvez depois\" vira venda fechada, automaticamente."
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-700">
                                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                            <CheckCircle2 size={14} />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </AnimateIn>

                        <AnimateIn from="left" delay={400}>
                            <div className="pt-4">
                                <a href="#pricing" className="inline-flex items-center gap-2.5 rounded-xl bg-primary px-8 py-3.5 text-[15px] font-bold text-white shadow-[0_4px_14px_rgba(23,199,90,0.3)] hover:bg-primary/90 hover:shadow-[0_6px_20px_rgba(23,199,90,0.4)] transition-all">
                                    Ver planos
                                    <ArrowRight className="w-5 h-5" />
                                </a>
                            </div>
                        </AnimateIn>
                    </div>

                    {/* Right Content - Mockup Panel */}
                    <AnimateIn from="right" delay={200} duration={700}>
                        <div className="lg:order-2 flex justify-center lg:justify-end">
                            <div className="relative w-full max-w-[520px] bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden flex flex-col min-h-[480px]">

                                {/* Panel Header with Toggle */}
                                <div className="p-5 pb-4 border-b border-slate-200 bg-slate-50">
                                    <div className="bg-slate-200/60 p-1 rounded-lg flex relative cursor-pointer w-64 mx-auto lg:mx-0" onClick={manualToggle}>
                                        <div className="absolute top-1 left-1 w-[calc(50%-4px)] h-[calc(100%-8px)] bg-white rounded-md shadow-sm transition-all duration-500 ease-in-out" style={{ transform: currentMode === 'live' ? 'translateX(100%)' : 'translateX(0)' }}></div>
                                        <button className={cn("flex-1 py-2 text-xs font-bold uppercase tracking-wider text-center relative z-10 transition-colors duration-300", currentMode === 'config' ? 'text-slate-900' : 'text-slate-400')}>Configuração</button>
                                        <button className={cn("flex-1 py-2 text-xs font-bold uppercase tracking-wider text-center relative z-10 transition-colors duration-300", currentMode === 'live' ? 'text-slate-900' : 'text-slate-400')}>Jornada Real</button>
                                    </div>
                                </div>

                                {/* Panel Content */}
                                <div className="relative flex-1 bg-slate-50 overflow-hidden">

                                    {/* Config View */}
                                    <div className={cn("absolute inset-0 flex flex-col transition-all duration-500 ease-out bg-slate-50", currentMode === 'config' ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10 pointer-events-none')}>
                                        <div className="px-6 py-4 flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <ChevronLeft className="w-5 h-5 text-slate-600 cursor-pointer font-bold" />
                                                <h3 className="text-slate-800 text-xl font-medium tracking-tight">Recuperação</h3>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="w-4 h-4 rounded border-2 border-primary"></div>
                                                <span className="text-slate-600 text-xs font-medium">Remarketing fixado</span>
                                                <HelpCircle className="w-4 h-4 text-red-500 cursor-help ml-1" />
                                            </div>
                                        </div>

                                        <div className="mx-4 bg-white rounded-lg shadow-sm border border-slate-200 flex-1 relative overflow-hidden mb-4 flex flex-col">
                                            <div className="grid grid-cols-12 px-6 py-3 border-b border-slate-100 bg-white items-center">
                                                <span className="col-span-4 text-sm font-medium text-slate-700 pl-8">Executar</span>
                                                <span className="col-span-4 text-sm font-medium text-slate-700 text-center">Fluxo</span>
                                                <span className="col-span-2 text-sm font-medium text-slate-700 text-center">Espera</span>
                                                <span className="col-span-2 text-sm font-medium text-slate-700 text-right pr-4">Ações</span>
                                            </div>

                                            <div className="relative p-0 flex-1 overflow-y-auto">

                                                {/* Row 1 */}
                                                <div className="relative z-10 grid grid-cols-12 px-6 py-4 border-b border-slate-50 bg-white items-center group hover:bg-slate-50 transition-colors">
                                                    <div className="absolute left-[39px] top-full h-[calc(100%-1rem)] w-[2px] bg-primary z-0 -translate-y-1/2"></div>
                                                    <div className="col-span-4 flex items-center gap-6">
                                                        <div className="w-4 h-4 rounded-full bg-primary shrink-0 ring-4 ring-white relative z-20"></div>
                                                        <div className="flex flex-col">
                                                            <div className="text-xs text-slate-600 font-medium">Após 1 dia, 21:09 - 21:14</div>
                                                            <div className="text-xs text-slate-400 mt-0.5">Qualquer dia</div>
                                                        </div>
                                                    </div>
                                                    <div className="col-span-4 flex justify-center">
                                                        <div className="flex items-center justify-between w-full px-3 py-2 bg-white hover:bg-slate-50 rounded cursor-pointer transition-colors">
                                                            <span className="text-sm text-slate-800">Apresentação do negócio</span>
                                                            <ChevronDown className="w-3 h-3 text-slate-400" />
                                                        </div>
                                                    </div>
                                                    <div className="col-span-2 text-center text-sm text-slate-600">0</div>
                                                    <div className="col-span-2 flex justify-end pr-4">
                                                        <Trash2 className="w-4 h-4 text-slate-400 hover:text-red-500 cursor-pointer" />
                                                    </div>
                                                </div>

                                                {/* Row 2 (animated) */}
                                                <div className={cn("relative z-10 grid grid-cols-12 px-6 py-4 border-b border-slate-50 bg-white items-center transition-all duration-500", confRow2Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")}>
                                                    <div className="absolute left-[39px] bottom-full h-full w-[2px] bg-primary z-0 translate-y-1/2"></div>
                                                    <div className="absolute left-[39px] top-full h-full w-[2px] bg-primary z-0 -translate-y-1/2"></div>
                                                    <div className="col-span-4 flex items-center gap-6">
                                                        <div className="w-4 h-4 rounded-full bg-primary shrink-0 ring-4 ring-white relative z-20"></div>
                                                        <div className="flex flex-col">
                                                            <div className="text-xs text-slate-600 font-medium">Após 1 dia</div>
                                                            <div className="text-xs text-slate-400 mt-0.5">Seg,Qua,Sex</div>
                                                        </div>
                                                    </div>
                                                    <div className="col-span-4 flex justify-center">
                                                        <div className="flex items-center justify-between w-full px-3 py-2 bg-white hover:bg-slate-50 rounded cursor-pointer transition-colors">
                                                            <span className="text-sm text-slate-800">Dia 2</span>
                                                            <ChevronDown className="w-3 h-3 text-slate-400" />
                                                        </div>
                                                    </div>
                                                    <div className="col-span-2 text-center text-sm text-slate-600">0</div>
                                                    <div className="col-span-2 flex justify-end pr-4">
                                                        <Trash2 className="w-4 h-4 text-slate-400 hover:text-red-500 cursor-pointer" />
                                                    </div>
                                                </div>

                                                {/* Add Button */}
                                                <div className="relative z-10 flex items-center gap-4 px-6 py-4 cursor-pointer transition-transform duration-200 hover:opacity-80" style={{ transform: `scale(${btnAddScale})` }}>
                                                    <div className="absolute left-[39px] bottom-full h-full w-[2px] bg-primary z-0 translate-y-1/2"></div>
                                                    <div className="w-4 h-4 rounded-full bg-primary flex items-center justify-center text-white shrink-0 ring-4 ring-white relative z-20 shadow-sm">
                                                        <Plus className="w-3 h-3 stroke-[3px]" />
                                                    </div>
                                                    <span className="text-sm text-primary font-medium">Adicionar fluxo à sequência</span>
                                                </div>
                                            </div>

                                            {/* Animated Cursor */}
                                            <div className="absolute w-6 h-6 transition-all duration-700 z-50 pointer-events-none drop-shadow-xl" style={{ top: `${cursorState.top}px`, left: `${cursorState.left}px`, opacity: cursorState.opacity, transform: `scale(${cursorState.scale})` }}>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="#1e293b" stroke="white" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Live Journey View */}
                                    <div className={cn("absolute inset-0 bg-white p-4 sm:p-8 sm:pl-12 flex flex-col transition-all duration-500 ease-out", currentMode === 'live' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10 pointer-events-none')}>
                                        <div className="absolute left-[27px] sm:left-[35px] top-8 bottom-20 w-[2px] bg-slate-200 rounded-full overflow-hidden">
                                            <div className="w-full bg-primary" style={{ height: `${progressHeight}%`, transition: 'height 7s linear' }}></div>
                                        </div>
                                        <div className="space-y-6 relative">
                                            <div className="relative transition-opacity duration-500" style={{ opacity: stepOpacities[0] }}>
                                                <div className="absolute -left-[22px] sm:-left-[30px] z-10 w-10 h-10 rounded-full bg-white border-2 border-red-400 text-red-500 flex items-center justify-center shadow-sm">
                                                    <AlertCircle className="w-5 h-5" />
                                                </div>
                                                <div className="pt-1 pl-4">
                                                    <h4 className="text-slate-900 font-bold text-sm">Gatilho Inicial</h4>
                                                    <p className="text-xs text-slate-500">Cliente entrou no funil</p>
                                                </div>
                                            </div>
                                            <div className="relative transition-opacity duration-500" style={{ opacity: stepOpacities[1] }}>
                                                <div className="absolute -left-[22px] sm:-left-[30px] z-10 w-10 h-10 rounded-full bg-white border-2 border-emerald-400 text-emerald-500 flex items-center justify-center shadow-sm">
                                                    <Send className="w-5 h-5 ml-0.5" />
                                                </div>
                                                <div className="pt-1 pl-4">
                                                    <h4 className="text-slate-900 font-bold text-sm">Dia 1: Apresentação do Negócio</h4>
                                                    <p className="text-xs text-slate-500">Enviado às 21:12 (Horário Configurado)</p>
                                                </div>
                                            </div>
                                            <div className="relative transition-opacity duration-500" style={{ opacity: stepOpacities[2] }}>
                                                <div className="absolute -left-[22px] sm:-left-[30px] z-10 w-10 h-10 rounded-full bg-white border-2 border-yellow-400 text-yellow-500 flex items-center justify-center shadow-sm">
                                                    <Clock className="w-5 h-5" />
                                                </div>
                                                <div className="pt-1 pl-4">
                                                    <h4 className="text-slate-900 font-bold text-sm">Aguardando Dia 2</h4>
                                                    <p className="text-xs text-slate-500">Pausa programada de 1 dia</p>
                                                </div>
                                            </div>
                                            <div className="relative transition-opacity duration-500" style={{ opacity: stepOpacities[3] }}>
                                                <div className="absolute -left-[22px] sm:-left-[30px] z-10 w-10 h-10 rounded-full bg-white border-2 border-primary/60 text-primary flex items-center justify-center shadow-sm">
                                                    <Zap className="w-5 h-5" />
                                                </div>
                                                <div className="pt-1 pl-4">
                                                    <h4 className="text-slate-900 font-bold text-sm">Dia 2: Reengajamento</h4>
                                                    <p className="text-xs text-slate-500">Seg, Qua ou Sex (Conforme Regra)</p>
                                                </div>
                                            </div>
                                            <div className="relative transition-all duration-500" style={{ opacity: stepOpacities[4], transform: step5Translate ? 'translateY(0.5rem)' : 'translateY(0)' }}>
                                                <div className="absolute -left-[22px] sm:-left-[30px] z-10 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shadow-md">
                                                    <CheckCircle2 className="w-6 h-6" />
                                                </div>
                                                <div className="pt-2 pl-4">
                                                    <h4 className="text-primary font-bold text-sm">Venda Recuperada!</h4>
                                                    <span className="inline-block mt-1 text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20">+ R$ 297,00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimateIn>
                </div>
            </div>
        </section>
    );
};
