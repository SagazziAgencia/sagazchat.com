'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
    ChevronLeft,
    HelpCircle,
    Trash2,
    ChevronDown,
    Plus,
    Clock,
    Zap,
    CheckCircle2,
    ArrowRight,
    RotateCw,
    AlertCircle,
    Send
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { AnimateIn } from '@/components/ui/animate-in';

type DelayMode = 'immediate' | 'delay';
type WindowMode = 'anytime' | 'defined';
type DaysMode = 'any' | 'defined';
type DelayUnit = 'Minutos' | 'Horas' | 'Dias';

type Row = { id: number; flow: string; wait: string };

const FLOW_OPTIONS = ['teste', 'recuperação', 'boas-vindas', 'carrinho abandonado'];
const UNIT_OPTIONS: DelayUnit[] = ['Minutos', 'Horas', 'Dias'];

/* ---- Radio primitive with tactile feedback ---- */
function Radio({ active, label, onClick }: { active: boolean; label: string; onClick: () => void }) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="group flex items-center gap-1.5 active:scale-95 transition-transform"
        >
            <div
                className={cn(
                    'flex h-3 w-3 items-center justify-center rounded-full border bg-white transition-colors',
                    active ? 'border-primary' : 'border-slate-300 group-hover:border-slate-400'
                )}
            >
                <div
                    className={cn(
                        'h-1.5 w-1.5 rounded-full bg-primary transition-transform',
                        active ? 'scale-100' : 'scale-0'
                    )}
                />
            </div>
            <span className={cn('text-[10px] font-medium transition-colors', active ? 'text-slate-700' : 'text-slate-500 group-hover:text-slate-700')}>
                {label}
            </span>
        </button>
    );
}

/* --- Modal Component (interactive) --- */
function ConfigModal({ onSave }: { onSave: () => void }) {
    const [delayMode, setDelayMode] = useState<DelayMode>('delay');
    const [delayValue, setDelayValue] = useState(1);
    const [delayUnit, setDelayUnit] = useState<DelayUnit>('Minutos');
    const [windowMode, setWindowMode] = useState<WindowMode>('defined');
    const [daysMode, setDaysMode] = useState<DaysMode>('any');
    const [unitOpen, setUnitOpen] = useState(false);

    return (
        <div
            className="absolute top-[110px] left-4 z-40 w-[250px] rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl ring-1 ring-slate-900/5 animate-in fade-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
        >
            <div className="space-y-4">
                <div>
                    <p className="mb-2 text-[10.5px] font-bold text-slate-700 leading-tight">Quando iniciar o fluxo após a última ação</p>
                    <div className="flex gap-4">
                        <Radio active={delayMode === 'immediate'} label="Imediatamente" onClick={() => setDelayMode('immediate')} />
                        <Radio active={delayMode === 'delay'} label="Atraso" onClick={() => setDelayMode('delay')} />
                    </div>
                </div>

                <div className={cn('flex gap-2 transition-opacity', delayMode === 'delay' ? 'opacity-100' : 'opacity-40 pointer-events-none')}>
                    <button
                        type="button"
                        onClick={() => setDelayValue((v) => (v >= 60 ? 1 : v + 1))}
                        className="flex flex-1 items-center justify-between rounded-md border border-slate-200 bg-slate-50/30 px-2.5 py-1.5 transition-colors hover:border-slate-300 hover:bg-slate-100 active:scale-[0.97]"
                    >
                        <span className="text-[11px] font-bold text-slate-700">{delayValue}</span>
                        <ChevronDown className="h-3 w-3 text-slate-400" />
                    </button>
                    <div className="relative flex-[1.5]">
                        <button
                            type="button"
                            onClick={() => setUnitOpen((o) => !o)}
                            className="flex w-full items-center justify-between rounded-md border border-slate-200 bg-slate-50/30 px-2.5 py-1.5 transition-colors hover:border-slate-300 hover:bg-slate-100 active:scale-[0.97]"
                        >
                            <span className="text-[11px] font-medium text-slate-700">{delayUnit}</span>
                            <ChevronDown className={cn('h-3 w-3 text-slate-400 transition-transform', unitOpen && 'rotate-180')} />
                        </button>
                        {unitOpen && (
                            <div className="absolute top-full left-0 right-0 mt-1 rounded-md border border-slate-200 bg-white shadow-lg animate-in fade-in zoom-in duration-150 z-10">
                                {UNIT_OPTIONS.map((u) => (
                                    <button
                                        key={u}
                                        type="button"
                                        onClick={() => { setDelayUnit(u); setUnitOpen(false); }}
                                        className={cn(
                                            'block w-full px-2.5 py-1.5 text-left text-[11px] font-medium transition-colors',
                                            delayUnit === u ? 'bg-primary/10 text-primary' : 'text-slate-700 hover:bg-slate-50'
                                        )}
                                    >
                                        {u}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                <div className="border-t border-slate-100 pt-3">
                    <div className="mb-2 flex items-center gap-1">
                        <p className="text-[10.5px] font-bold text-slate-700">Iniciar entre</p>
                        <HelpCircle className="h-2.5 w-2.5 text-slate-400" />
                    </div>
                    <div className="flex gap-4">
                        <Radio active={windowMode === 'anytime'} label="A qualquer momento" onClick={() => setWindowMode('anytime')} />
                        <Radio active={windowMode === 'defined'} label="Definir hora" onClick={() => setWindowMode('defined')} />
                    </div>
                </div>

                <div className={cn('flex gap-2 transition-opacity', windowMode === 'defined' ? 'opacity-100' : 'opacity-40 pointer-events-none')}>
                    <div className="flex flex-1 items-center justify-between rounded-md border border-slate-200 bg-slate-50/30 px-2.5 py-1.5 cursor-pointer transition-colors hover:border-slate-300 hover:bg-slate-100 active:scale-[0.97]">
                        <span className="text-[11px] font-bold text-slate-700">De: 11:30</span>
                        <Clock className="h-3 w-3 text-slate-400" />
                    </div>
                    <div className="flex flex-1 items-center justify-between rounded-md border border-slate-200 bg-slate-50/30 px-2.5 py-1.5 cursor-pointer transition-colors hover:border-slate-300 hover:bg-slate-100 active:scale-[0.97]">
                        <span className="text-[11px] font-bold text-slate-700">Até: 11:35</span>
                        <Clock className="h-3 w-3 text-slate-400" />
                    </div>
                </div>

                <div className="border-t border-slate-100 pt-3">
                    <p className="mb-2 text-[10.5px] font-bold text-slate-700">Em quais dias</p>
                    <div className="flex gap-4">
                        <Radio active={daysMode === 'any'} label="Quaisquer dias" onClick={() => setDaysMode('any')} />
                        <Radio active={daysMode === 'defined'} label="Definir dias" onClick={() => setDaysMode('defined')} />
                    </div>
                </div>

                <button
                    type="button"
                    onClick={onSave}
                    className="w-full rounded-xl border border-primary/30 bg-primary py-2 text-[11px] font-bold text-white shadow-sm transition-all hover:bg-primary/90 active:scale-[0.98]"
                >
                    Salvar
                </button>
            </div>
        </div>
    );
}

/* --- Flow Dropdown --- */
function FlowDropdown({ value, onChange }: { value: string; onChange: (v: string) => void }) {
    const [open, setOpen] = useState(false);
    const isEmpty = !value;

    return (
        <div
            className="relative w-full"
            onClick={(e) => e.stopPropagation()}
        >
            <button
                type="button"
                onClick={() => setOpen((o) => !o)}
                className="flex w-full items-center justify-between px-2 py-1.5 rounded-lg border border-transparent hover:border-slate-200 hover:bg-slate-50 transition-all active:scale-[0.98] group"
            >
                <span className={cn('text-[11px]', isEmpty ? 'text-slate-400 italic font-medium' : 'font-bold text-slate-700')}>
                    {value || 'Escolha um fluxo'}
                </span>
                <ChevronDown className={cn('w-3 h-3 text-slate-300 group-hover:text-slate-500 transition-transform', open && 'rotate-180')} />
            </button>
            {open && (
                <div className="absolute top-full left-0 right-0 mt-1 rounded-md border border-slate-200 bg-white shadow-lg animate-in fade-in zoom-in duration-150 z-20">
                    {FLOW_OPTIONS.map((f) => (
                        <button
                            key={f}
                            type="button"
                            onClick={() => { onChange(f); setOpen(false); }}
                            className={cn(
                                'block w-full px-2.5 py-1.5 text-left text-[11px] font-medium transition-colors',
                                value === f ? 'bg-primary/10 text-primary font-bold' : 'text-slate-700 hover:bg-slate-50'
                            )}
                        >
                            {f}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

export function RemarketingMockup() {
    const [currentMode, setCurrentMode] = useState<'config' | 'live'>('config');
    const [progressHeight, setProgressHeight] = useState(0);
    const [animKey, setAnimKey] = useState(0);
    const [stepOpacities, setStepOpacities] = useState([0.4, 0.3, 0.3, 0.3, 0.3]);
    const [step5Translate, setStep5Translate] = useState(true);
    const [hovered, setHovered] = useState(false);
    const [modalVisible, setModalVisible] = useState(true);
    const [rows, setRows] = useState<Row[]>([
        { id: 1, flow: 'teste', wait: '0' },
        { id: 2, flow: '', wait: '-' },
    ]);
    const nextRowId = useRef(3);

    const timeoutsRef = useRef<NodeJS.Timeout[]>([]);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const cycleDuration = 10000;

    const clearAllAnimations = () => {
        timeoutsRef.current.forEach(clearTimeout);
        timeoutsRef.current = [];
    };

    const safeTimeout = (fn: () => void, delay: number) => {
        const id = setTimeout(fn, delay);
        timeoutsRef.current.push(id);
    };

    const runLiveAnimation = useCallback(() => {
        setAnimKey((k) => k + 1);
        setStepOpacities([0.4, 0.3, 0.3, 0.3, 0.3]);
        setStep5Translate(true);
        setProgressHeight(0);

        safeTimeout(() => {
            setStepOpacities([1, 0.3, 0.3, 0.3, 0.3]);
            setProgressHeight(100);
        }, 100);

        safeTimeout(() => setStepOpacities((p) => [p[0], 1, p[2], p[3], p[4]]), 1200);
        safeTimeout(() => setStepOpacities((p) => [p[0], p[1], 1, p[3], p[4]]), 2800);
        safeTimeout(() => setStepOpacities((p) => [p[0], p[1], p[2], 1, p[4]]), 4500);
        safeTimeout(() => {
            setStepOpacities((p) => [p[0], p[1], p[2], p[3], 1]);
            setStep5Translate(false);
        }, 6000);
    }, []);

    const updateView = useCallback((mode: 'config' | 'live') => {
        clearAllAnimations();
        setCurrentMode(mode);
        if (mode === 'live') runLiveAnimation();
    }, [runLiveAnimation]);

    const startAutoCycle = useCallback(() => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setCurrentMode((prev) => {
                const next = prev === 'config' ? 'live' : 'config';
                updateView(next);
                return next;
            });
        }, cycleDuration);
    }, [updateView]);

    const stopAutoCycle = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    const manualToggle = () => {
        stopAutoCycle();
        updateView(currentMode === 'config' ? 'live' : 'config');
    };

    const jumpToStep = (index: number) => {
        stopAutoCycle();
        clearAllAnimations();
        setCurrentMode('live');
        const newOpacities = [0.3, 0.3, 0.3, 0.3, 0.3];
        for (let i = 0; i <= index; i++) newOpacities[i] = 1;
        setStepOpacities(newOpacities);
        setProgressHeight(((index + 1) / 5) * 100);
        setStep5Translate(index < 4);
    };

    const restartAnimation = () => {
        stopAutoCycle();
        if (currentMode === 'live') {
            updateView('live');
        } else {
            setModalVisible(true);
            setRows([
                { id: nextRowId.current++, flow: 'teste', wait: '0' },
                { id: nextRowId.current++, flow: '', wait: '-' },
            ]);
        }
    };

    const addRow = () => {
        setRows((r) => [...r, { id: nextRowId.current++, flow: '', wait: '-' }]);
    };

    const removeRow = (id: number) => {
        setRows((r) => (r.length <= 1 ? r : r.filter((row) => row.id !== id)));
    };

    const updateRowFlow = (id: number, flow: string) => {
        setRows((r) => r.map((row) => (row.id === id ? { ...row, flow } : row)));
    };

    useEffect(() => {
        updateView('config');
        startAutoCycle();
        return () => {
            stopAutoCycle();
            clearAllAnimations();
        };
    }, [startAutoCycle, updateView]);

    useEffect(() => {
        if (hovered) stopAutoCycle();
        else startAutoCycle();
    }, [hovered, startAutoCycle]);

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={() => setModalVisible(false)}
            className="relative w-full bg-[#F5F6F8] rounded-[24px] border border-slate-200 shadow-2xl overflow-hidden flex flex-col min-h-[580px] ring-1 ring-slate-200 select-none"
        >

                                {/* Panel Header with Toggle */}
                                <div className="p-4 border-b border-slate-200 bg-white flex justify-between items-center">
                                    <div
                                        className="bg-slate-100 p-1 rounded-xl flex relative cursor-pointer w-56 active:scale-[0.98] transition-transform"
                                        onClick={(e) => { e.stopPropagation(); manualToggle(); }}
                                    >
                                        <div className="absolute top-1 left-1 w-[calc(50%-4px)] h-[calc(100%-8px)] bg-white rounded-lg shadow-sm transition-all duration-500 ease-in-out" style={{ transform: currentMode === 'live' ? 'translateX(100%)' : 'translateX(0)' }}></div>
                                        <button className={cn("flex-1 py-1.5 text-[10px] font-bold uppercase tracking-wider text-center relative z-10 transition-colors duration-300", currentMode === 'config' ? 'text-slate-900' : 'text-slate-400')}>Configuração</button>
                                        <button className={cn("flex-1 py-1.5 text-[10px] font-bold uppercase tracking-wider text-center relative z-10 transition-colors duration-300", currentMode === 'live' ? 'text-slate-900' : 'text-slate-400')}>Jornada Real</button>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <button
                                            type="button"
                                            onClick={(e) => { e.stopPropagation(); restartAnimation(); }}
                                            className="flex h-7 w-7 items-center justify-center rounded-md bg-white shadow-sm ring-1 ring-slate-200 hover:ring-primary/40 hover:text-primary text-slate-400 transition-all active:scale-90 group"
                                            aria-label="Reiniciar"
                                        >
                                            <RotateCw className="h-3 w-3 group-active:-rotate-180 transition-transform duration-500" />
                                        </button>
                                    </div>
                                </div>

                                {/* Panel Content */}
                                <div className="relative flex-1 bg-[#F5F6F8] overflow-hidden">

                                    {/* Config View */}
                                    <div className={cn("absolute inset-0 flex flex-col transition-all duration-500 ease-out", currentMode === 'config' ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10 pointer-events-none')}>

                                        {/* Header Internal */}
                                        <div className="px-6 py-4 flex items-center justify-between bg-white border-b border-slate-100">
                                            <div className="flex items-center gap-2">
                                                <ChevronLeft className="w-4 h-4 text-slate-800 stroke-[3px]" />
                                                <h3 className="text-slate-900 text-sm font-bold tracking-tight uppercase">RMKT JOAO</h3>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="w-3.5 h-3.5 rounded border border-slate-300 bg-white"></div>
                                                <span className="text-slate-600 text-[11px] font-medium">Remarketing fixado</span>
                                                <div className="w-2 h-2 rounded-full bg-red-500 ml-1"></div>
                                            </div>
                                        </div>

                                        <div className="flex flex-col flex-1 p-0">
                                            {/* Table Header */}
                                            <div className="grid grid-cols-12 px-6 py-3 border-b border-slate-200 bg-white/50 items-center">
                                                <span className="col-span-5 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Executar</span>
                                                <span className="col-span-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider text-center">Fluxo</span>
                                                <span className="col-span-2 text-[10px] font-bold text-slate-500 uppercase tracking-wider text-center">Espera</span>
                                                <span className="col-span-2 text-[10px] font-bold text-slate-500 uppercase tracking-wider text-right">Ações</span>
                                            </div>

                                            <div className="relative p-0 flex-1 overflow-y-auto">
                                              <div className="relative">
                                                {/* Vertical Connector Line */}
                                                <div className="absolute left-[31px] top-6 bottom-6 w-[2px] bg-primary/20 z-0"></div>

                                                {rows.map((row) => (
                                                    <div
                                                        key={row.id}
                                                        onClick={(e) => { e.stopPropagation(); setModalVisible(true); }}
                                                        className="relative z-10 grid grid-cols-12 px-6 py-4 border-b border-slate-100 bg-white hover:bg-slate-50/60 transition-colors items-center cursor-pointer animate-in fade-in slide-in-from-top-2 duration-300"
                                                    >
                                                        <div className="col-span-5 flex items-center gap-4">
                                                            <div className="w-3 h-3 rounded-full bg-primary shrink-0 ring-[6px] ring-white relative z-20"></div>
                                                            <div className="flex flex-col">
                                                                <div className="text-[11px] text-slate-800 font-bold">Executar imediatamente</div>
                                                                <div className="text-[10px] text-slate-400">Qualquer dia</div>
                                                            </div>
                                                        </div>
                                                        <div className="col-span-3 flex justify-center">
                                                            <FlowDropdown value={row.flow} onChange={(v) => updateRowFlow(row.id, v)} />
                                                        </div>
                                                        <div className="col-span-2 text-center text-[11px] font-bold text-slate-700">{row.wait}</div>
                                                        <div className="col-span-2 flex justify-end">
                                                            <button
                                                                type="button"
                                                                onClick={(e) => { e.stopPropagation(); removeRow(row.id); }}
                                                                className="p-1 rounded-md text-slate-300 hover:text-red-500 hover:bg-red-50 transition-all active:scale-90"
                                                                aria-label="Remover fluxo"
                                                            >
                                                                <Trash2 className="w-3.5 h-3.5" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                ))}

                                                {/* Add Button */}
                                                <button
                                                    type="button"
                                                    onClick={(e) => { e.stopPropagation(); addRow(); }}
                                                    className="relative z-10 w-full flex items-center gap-3 px-6 py-5 cursor-pointer hover:bg-primary/5 transition-colors active:scale-[0.99] group"
                                                >
                                                    <div className="w-3 h-3 rounded-full bg-slate-300 group-hover:bg-primary shrink-0 ring-[6px] ring-white relative z-20 transition-colors"></div>
                                                    <Plus className="w-3 h-3 text-slate-400 group-hover:text-primary stroke-[3px] transition-colors" />
                                                    <span className="text-[11px] text-slate-400 group-hover:text-primary font-bold transition-colors">Adicionar fluxo à sequência</span>
                                                </button>
                                              </div>
                                            </div>
                                        </div>

                                        {/* Configuration Modal Overlay */}
                                        {modalVisible && <ConfigModal onSave={() => setModalVisible(false)} />}
                                    </div>

                                    {/* Live Journey View */}
                                    <div className={cn("absolute inset-0 bg-white p-8 sm:pl-12 flex flex-col transition-all duration-500 ease-out", currentMode === 'live' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10 pointer-events-none')}>
                                        <div className="space-y-8">
                                            <div className="relative space-y-8">
                                                <div className="absolute top-5 bottom-5 w-[3px] overflow-hidden rounded-full" style={{ left: '-11px' }}>
                                                    <div key={animKey} className="w-full bg-primary shadow-[0_0_10px_rgba(23,199,90,0.35)] rounded-full" style={{ height: `${progressHeight}%`, transition: 'height 7s linear' }}></div>
                                                </div>
                                                {[
                                                    { icon: <AlertCircle className="w-5 h-5" />, title: 'Gatilho Inicial', desc: 'Cliente não respondeu em 24h' },
                                                    { icon: <Send className="w-5 h-5 ml-0.5" />, title: 'Dia 1: Recuperação', desc: 'Enviado automaticamente' },
                                                    { icon: <Clock className="w-5 h-5" />, title: 'Aguardando Dia 2', desc: 'Pausa programada (inteligente)' },
                                                    { icon: <Zap className="w-5 h-5" />, title: 'Dia 2: Reengajamento', desc: 'Executando conforme regra' },
                                                ].map((s, i) => {
                                                    const isActive = stepOpacities[i] === 1;
                                                    return (
                                                        <button
                                                            key={i}
                                                            type="button"
                                                            onClick={(e) => { e.stopPropagation(); jumpToStep(i); }}
                                                            className="relative transition-all duration-500 text-left w-full cursor-pointer group active:scale-[0.99]"
                                                            style={{ opacity: stepOpacities[i] }}
                                                        >
                                                            <div className={cn(
                                                                'absolute -left-[32px] z-10 w-11 h-11 rounded-full bg-white border-2 flex items-center justify-center shadow-sm transition-all group-hover:scale-110',
                                                                isActive ? 'border-primary/40 text-primary' : 'border-slate-200 text-slate-400'
                                                            )}>
                                                                {s.icon}
                                                            </div>
                                                            <div className="pt-1.5 pl-6">
                                                                <h4 className={cn('font-bold text-sm transition-colors', isActive ? 'text-slate-900' : 'text-slate-500')}>{s.title}</h4>
                                                                <p className="text-[11px] text-slate-500">{s.desc}</p>
                                                            </div>
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                            <button
                                                type="button"
                                                onClick={(e) => { e.stopPropagation(); jumpToStep(4); }}
                                                className="relative transition-all duration-500 text-left w-full cursor-pointer group active:scale-[0.99]"
                                                style={{ opacity: stepOpacities[4], transform: step5Translate ? 'translateY(1rem)' : 'translateY(0)' }}
                                            >
                                                <div className="absolute -left-[32px] z-10 w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(23,199,90,0.6)]">
                                                    <CheckCircle2 className="w-6 h-6" strokeWidth={3} />
                                                </div>
                                                <div className="pt-2 pl-6">
                                                    <h4 className="text-primary font-bold text-sm">Venda Recuperada</h4>
                                                    <span className="inline-block mt-1.5 text-[11px] font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-lg border border-primary/20">+ R$ 297,00</span>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
        </div>
    );
}

export const RemarketingSection = () => {
    return (
        <section className="py-24 bg-white text-slate-900 relative overflow-hidden">
            <div className="mx-auto grid max-w-[1360px] grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">

                {/* Left Content */}
                <div className="space-y-8">
                    <AnimateIn from="left" delay={0}>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary font-[family-name:var(--font-display)]">
                            Remarketing
                        </p>
                    </AnimateIn>

                    <AnimateIn from="left" delay={100}>
                        <h2 className="font-[family-name:var(--font-display)] text-[2rem] sm:text-[2.5rem] lg:text-[2.5rem] font-bold tracking-[-0.02em] leading-[1.1] text-slate-950">
                            Lead frio ainda pode voltar.<br/>
                            <span className="italic font-medium text-primary">No timing certo.</span>
                        </h2>
                    </AnimateIn>

                    <AnimateIn from="left" delay={200}>
                        <p className="max-w-xl text-[15px] text-slate-600 leading-relaxed">
                            Configure a sequência uma vez. O Sagazchat cobra, espera e reativa sem depender da memória do time.
                        </p>
                    </AnimateIn>

                    <AnimateIn from="left" delay={300}>
                        <ul className="space-y-4">
                            {[
                                "Sequência automática após a última ação.",
                                "Dias e horários definidos por regra.",
                                "O “depois eu vejo” volta para o funil."
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-slate-700">
                                    <div className="w-5 h-5 mt-0.5 rounded-full bg-primary flex items-center justify-center text-white shrink-0">
                                        <CheckCircle2 size={12} strokeWidth={3} />
                                    </div>
                                    <span className="text-[15px]">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </AnimateIn>

                    <AnimateIn from="left" delay={400}>
                        <div className="pt-4">
                            <a href="#pricing" className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-[15px] font-bold text-white transition-all hover:bg-primary/90 active:scale-[0.98]">
                                Ver planos
                                <ArrowRight className="w-5 h-5 ml-1" strokeWidth={2.5} />
                            </a>
                        </div>
                    </AnimateIn>
                </div>

                {/* Right Content - Mockup Panel */}
                <AnimateIn from="right" delay={200} duration={700}>
                    <div className="flex justify-center lg:justify-end">
                        <RemarketingMockup />
                    </div>
                </AnimateIn>
            </div>
        </section>
    );
};
