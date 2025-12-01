'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { 
    RefreshCw, 
    PlayCircle, 
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
    UserPlus,
    ArrowRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

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
            setCursorState(prev => ({...prev, scale: 1}));
            setBtnAddScale(1);
            setConfRow2Visible(true);
        }, 1200);

        safeTimeout(() => { setCursorState(prev => ({ ...prev, opacity: 0 })); }, 2000);
    }

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
    }

    const updateView = (mode: string) => {
        clearAllAnimations();
        setCurrentMode(mode);

        if (mode === 'config') {
            runConfigAnimation();
        } else {
            runLiveAnimation();
        }
    }
    
    const manualToggle = () => {
        if(intervalRef.current) clearInterval(intervalRef.current);
        const newMode = currentMode === 'config' ? 'live' : 'config';
        updateView(newMode);
        intervalRef.current = setInterval(() => {
            setCurrentMode(prev => {
                const nextMode = prev === 'config' ? 'live' : 'config';
                updateView(nextMode);
                return nextMode;
            });
        }, cycleDuration);
    }
    
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
            if(intervalRef.current) clearInterval(intervalRef.current);
            clearAllAnimations();
        };
    }, []);

    return (
        <>
            <style jsx>{`
                .transition-custom { transition: all 0.5s ease-out; }
                .custom-checkbox {
                    appearance: none;
                    background-color: transparent;
                    margin: 0;
                    font: inherit;
                    color: currentColor;
                    width: 1.15em;
                    height: 1.15em;
                    border: 2px solid #92D639;
                    border-radius: 0.15em;
                    display: grid;
                    place-content: center;
                }
                .custom-scrollbar::-webkit-scrollbar { width: 4px; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background-color: #e5e7eb; border-radius: 4px; }
            `}</style>

            <div className="relative z-10 w-full py-12 lg:py-20 min-h-screen flex items-center bg-[#0a0f13]">
                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[60%] h-[60%] bg-[#92D639]/5 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="text-center max-w-4xl mx-auto mb-16 flex flex-col items-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#92D639]/10 border border-[#92D639]/30 text-[#92D639] text-[11px] font-bold uppercase tracking-wider mb-6">
                            <RefreshCw className="w-3 h-3" /> LUCRO AUTOMÁTICO
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white mb-2">
                            Recupere clientes que não <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#92D639] to-[#baff68]">
                                compraram de primeira.
                            </span>
                        </h1>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                        <div className="space-y-8 text-center lg:text-left">
                            <div className="text-lg text-slate-400 leading-relaxed border-l-4 border-[#92D639] pl-6 text-left space-y-6 max-w-lg mx-auto lg:mx-0">
                                <p>Nem todo mundo compra no primeiro contato. O remarketing traz esses clientes de volta.</p>
                                <p>Configure fluxos que identificam quem demonstrou interesse e envie a mensagem certa para reengajar. Transforme o "talvez depois" em venda fechada, automaticamente.</p>
                            </div>
                            <div className="flex justify-center lg:justify-start gap-4 pt-4">
                                <Button size="lg" className="group w-full sm:w-auto relative px-8 py-4 bg-[#92D639] text-black rounded-lg font-bold text-lg hover:bg-[#82c232] transition-all shadow-[0_0_20px_rgba(146,214,57,0.4)] hover:shadow-[0_0_40px_rgba(146,214,57,0.6)] hover:-translate-y-1 h-auto">
                                    <UserPlus size={20} />
                                    Assinar Agora
                                    <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </div>
                        </div>

                        <div className="relative flex justify-center lg:justify-end h-auto lg:h-[550px] items-center">
                            <div className="relative w-full max-w-[750px] bg-[#11161b] rounded-3xl border border-gray-800 shadow-2xl overflow-hidden flex flex-col z-20 min-h-[480px]">
                                <div className="p-6 pb-4 border-b border-gray-800 bg-[#161b22] z-30">
                                    <div className="bg-black/40 p-1 rounded-lg flex relative cursor-pointer w-64 mx-auto lg:mx-0" onClick={manualToggle}>
                                        <div id="slider-bg" className="absolute top-1 left-1 w-[calc(50%-4px)] h-[calc(100%-8px)] bg-gray-700 rounded-md shadow-md transition-all duration-500 ease-in-out" style={{ transform: currentMode === 'live' ? 'translateX(100%)' : 'translateX(0)' }}></div>
                                        <button className={cn("flex-1 py-2 text-xs font-bold uppercase tracking-wider text-center relative z-10 transition-colors duration-300", currentMode === 'config' ? 'text-white' : 'text-gray-500')}>Configuração</button>
                                        <button className={cn("flex-1 py-2 text-xs font-bold uppercase tracking-wider text-center relative z-10 transition-colors duration-300", currentMode === 'live' ? 'text-white' : 'text-gray-500')}>Jornada Real</button>
                                    </div>
                                </div>

                                <div className="relative flex-1 bg-[#f3f4f6] overflow-x-auto">
                                    <div id="view-config" className={cn("absolute inset-0 flex flex-col transition-custom bg-[#f3f4f6]", currentMode === 'config' ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10 pointer-events-none')}>
                                        <div className="px-6 py-4 flex items-center justify-between min-w-[680px]">
                                            <div className="flex items-center gap-2">
                                                <ChevronLeft className="w-5 h-5 text-gray-600 cursor-pointer font-bold" />
                                                <h2 className="text-gray-800 text-xl font-medium tracking-tight">Recuperação</h2>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="custom-checkbox"></div>
                                                <span className="text-gray-600 text-xs font-medium">Remarketing fixado</span>
                                                <HelpCircle className="w-4 h-4 text-red-500 cursor-help ml-1" />
                                            </div>
                                        </div>

                                        <div className="mx-4 bg-white rounded-lg shadow-sm border border-gray-200 flex-1 relative overflow-hidden mb-4 flex flex-col min-w-[680px]">
                                            <div className="grid grid-cols-12 px-6 py-3 border-b border-gray-100 bg-white items-center">
                                                <span className="col-span-4 text-sm font-medium text-gray-700 pl-8">Executar</span>
                                                <span className="col-span-4 text-sm font-medium text-gray-700 text-center">Fluxo</span>
                                                <span className="col-span-2 text-sm font-medium text-gray-700 text-center">Espera</span>
                                                <span className="col-span-2 text-sm font-medium text-gray-700 text-right pr-4">Ações</span>
                                            </div>

                                            <div className="relative p-0 flex-1 overflow-y-auto custom-scrollbar">
                                                
                                                <div id="row1" className="relative z-10 grid grid-cols-12 px-6 py-4 border-b border-gray-50 bg-white items-center group hover:bg-gray-50 transition-colors">
                                                    <div className="absolute left-[39px] top-full h-[calc(100%-1rem)] w-[2px] bg-[#92D639] z-0 -translate-y-1/2"></div>
                                                    <div className="col-span-4 flex items-center gap-6">
                                                        <div className="w-4 h-4 rounded-full bg-[#92D639] shrink-0 ring-4 ring-white relative z-20"></div>
                                                        <div className="flex flex-col">
                                                            <div className="text-xs text-gray-600 font-medium">Após 1 dia, 21:09 - 21:14</div>
                                                            <div className="text-xs text-gray-400 mt-0.5">Qualquer dia</div>
                                                        </div>
                                                    </div>
                                                    <div className="col-span-4 flex justify-center">
                                                        <div className="flex items-center justify-between w-full px-3 py-2 bg-white hover:bg-gray-50 rounded cursor-pointer transition-colors">
                                                            <span className="text-sm text-gray-800">Apresentação do negócio</span>
                                                            <ChevronDown className="w-3 h-3 text-gray-400" />
                                                        </div>
                                                    </div>
                                                    <div className="col-span-2 text-center text-sm text-gray-600">0</div>
                                                    <div className="col-span-2 flex justify-end pr-4">
                                                        <Trash2 className="w-4 h-4 text-gray-400 hover:text-red-500 cursor-pointer" />
                                                    </div>
                                                </div>

                                                <div id="row2" className={cn("relative z-10 grid grid-cols-12 px-6 py-4 border-b border-gray-50 bg-white items-center transition-all duration-500", confRow2Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")}>
                                                    <div className="absolute left-[39px] bottom-full h-full w-[2px] bg-[#92D639] z-0 translate-y-1/2"></div>
                                                    <div className="absolute left-[39px] top-full h-full w-[2px] bg-[#92D639] z-0 -translate-y-1/2"></div>
                                                    <div className="col-span-4 flex items-center gap-6">
                                                        <div className="w-4 h-4 rounded-full bg-[#92D639] shrink-0 ring-4 ring-white relative z-20"></div>
                                                        <div className="flex flex-col">
                                                            <div className="text-xs text-gray-600 font-medium">Após 1 dia</div>
                                                            <div className="text-xs text-gray-400 mt-0.5">Seg,Qua,Sex</div>
                                                        </div>
                                                    </div>
                                                    <div className="col-span-4 flex justify-center">
                                                        <div className="flex items-center justify-between w-full px-3 py-2 bg-white hover:bg-gray-50 rounded cursor-pointer transition-colors">
                                                            <span className="text-sm text-gray-800">Dia 2</span>
                                                            <ChevronDown className="w-3 h-3 text-gray-400" />
                                                        </div>
                                                    </div>
                                                    <div className="col-span-2 text-center text-sm text-gray-600">0</div>
                                                    <div className="col-span-2 flex justify-end pr-4">
                                                        <Trash2 className="w-4 h-4 text-gray-400 hover:text-red-500 cursor-pointer" />
                                                    </div>
                                                </div>

                                                <div className="relative z-10 flex items-center gap-4 px-6 py-4 cursor-pointer transition-transform duration-200 hover:opacity-80" style={{ transform: `scale(${btnAddScale})` }}>
                                                     <div className="absolute left-[39px] bottom-full h-full w-[2px] bg-[#92D639] z-0 translate-y-1/2"></div>
                                                    <div className="w-4 h-4 rounded-full bg-[#92D639] flex items-center justify-center text-white shrink-0 ring-4 ring-white relative z-20 shadow-sm">
                                                        <Plus className="w-3 h-3 stroke-[3px]" />
                                                    </div>
                                                    <span className="text-sm text-[#92D639] font-medium">Adicionar fluxo à sequência</span>
                                                </div>
                                            </div>

                                            <div id="cursor-mock" className="absolute w-6 h-6 transition-all duration-700 z-50 pointer-events-none drop-shadow-xl" style={{ top: `${cursorState.top}px`, left: `${cursorState.left}px`, opacity: cursorState.opacity, transform: `scale(${cursorState.scale})` }}>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="black" stroke="white" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    <div id="view-live" className={cn("absolute inset-0 bg-[#0a0f13] p-4 sm:p-8 sm:pl-12 flex flex-col transition-custom min-w-[400px]", currentMode === 'live' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10 pointer-events-none')}>
                                        <div className="absolute left-[27px] sm:left-[35px] top-8 bottom-20 w-[2px] bg-gray-800 rounded-full overflow-hidden">
                                            <div id="live-progress" className="w-full bg-[#92D639]" style={{ height: `${progressHeight}%`, transition: 'height 7s linear' }}></div>
                                        </div>
                                        <div className="space-y-6 relative">
                                            <div className="relative transition-opacity duration-500" style={{opacity: stepOpacities[0]}}>
                                                <div className="absolute -left-[22px] sm:-left-[30px] z-10 w-10 h-10 rounded-full bg-[#11161b] border-2 border-red-500/50 text-red-500 flex items-center justify-center">
                                                    <AlertCircle className="w-5 h-5" />
                                                </div>
                                                <div className="pt-1 pl-4">
                                                    <h4 className="text-white font-bold text-sm">Gatilho Inicial</h4>
                                                    <p className="text-xs text-gray-400">Cliente entrou no funil</p>
                                                </div>
                                            </div>
                                            <div className="relative transition-opacity duration-500" style={{opacity: stepOpacities[1]}}>
                                                <div className="absolute -left-[22px] sm:-left-[30px] z-10 w-10 h-10 rounded-full bg-[#11161b] border-2 border-blue-500/50 text-blue-500 flex items-center justify-center">
                                                    <Send className="w-5 h-5 ml-0.5" />
                                                </div>
                                                <div className="pt-1 pl-4">
                                                    <h4 className="text-white font-bold text-sm">Dia 1: Apresentação do Negócio</h4>
                                                    <p className="text-xs text-gray-400">Enviado às 21:12 (Horário Configurado)</p>
                                                </div>
                                            </div>
                                            <div className="relative transition-opacity duration-500" style={{opacity: stepOpacities[2]}}>
                                                <div className="absolute -left-[22px] sm:-left-[30px] z-10 w-10 h-10 rounded-full bg-[#11161b] border-2 border-yellow-500/50 text-yellow-500 flex items-center justify-center">
                                                    <Clock className="w-5 h-5" />
                                                </div>
                                                <div className="pt-1 pl-4">
                                                    <h4 className="text-white font-bold text-sm">Aguardando Dia 2</h4>
                                                    <p className="text-xs text-gray-400">Pausa programada de 1 dia</p>
                                                </div>
                                            </div>
                                            <div className="relative transition-opacity duration-500" style={{opacity: stepOpacities[3]}}>
                                                <div className="absolute -left-[22px] sm:-left-[30px] z-10 w-10 h-10 rounded-full bg-[#11161b] border-2 border-purple-500/50 text-purple-500 flex items-center justify-center">
                                                    <Zap className="w-5 h-5" />
                                                </div>
                                                <div className="pt-1 pl-4">
                                                    <h4 className="text-white font-bold text-sm">Dia 2: Reengajamento</h4>
                                                    <p className="text-xs text-gray-400">Seg, Qua ou Sex (Conforme Regra)</p>
                                                </div>
                                            </div>
                                            <div className="relative transition-all duration-500" style={{opacity: stepOpacities[4], transform: step5Translate ? 'translateY(0.5rem)' : 'translateY(0)'}}>
                                                <div className="absolute -left-[22px] sm:-left-[30px] z-10 w-10 h-10 rounded-full bg-[#92D639] text-white flex items-center justify-center shadow-lg shadow-[#92D639]/20 transform scale-110">
                                                    <CheckCircle2 className="w-6 h-6" />
                                                </div>
                                                <div className="pt-2 pl-4">
                                                    <h4 className="text-[#92D639] font-bold text-sm">Venda Recuperada!</h4>
                                                    <span className="inline-block mt-1 text-xs font-bold text-white bg-[#92D639]/20 px-2 py-0.5 rounded border border-[#92D639]/30">+ R$ 297,00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -z-10 top-10 -right-10 w-full h-full max-w-[400px] max-h-[300px] bg-[#92D639]/10 rounded-[3rem] blur-3xl opacity-50 animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
