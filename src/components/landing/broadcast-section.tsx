'use client';

import React, { useEffect, useState } from 'react';
import { Send, Clock, ShieldCheck, FileSpreadsheet, ArrowRight, Megaphone, CheckCircle2, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimateIn } from '@/components/ui/animate-in';

const features = [
    {
        icon: Send,
        title: 'Envio Personalizado',
        description: 'Escolha o fluxo, a lista de contatos e o número de WhatsApp que vai disparar.',
        color: 'text-primary',
        bg: 'bg-primary/10',
    },
    {
        icon: Clock,
        title: 'Agendamento Inteligente',
        description: 'Programe data e hora exata para os disparos. Envie no momento certo.',
        color: 'text-emerald-600',
        bg: 'bg-emerald-500/10',
    },
    {
        icon: ShieldCheck,
        title: 'Sistema Anti-Bloqueio',
        description: 'Intervalo randômico entre mensagens e pausa entre lotes protegem seu número.',
        color: 'text-green-600',
        bg: 'bg-emerald-500/10',
    },
    {
        icon: FileSpreadsheet,
        title: 'Importação de Planilha',
        description: 'Importe listas CSV/XLSX com nome, telefone, e-mail e etiquetas.',
        color: 'text-lime-600',
        bg: 'bg-lime-500/10',
    },
];

const progressSteps = [
    { label: 'Fluxo selecionado', state: 'done' as const },
    { label: 'Lista importada (847 leads)', state: 'done' as const },
    { label: 'Agendado: Hoje às 14:00', state: 'done' as const },
    { label: 'Disparando... 423/847', state: 'active' as const },
];

export const BroadcastSection = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress(prev => (prev >= 100 ? 0 : prev + 1));
        }, 80);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative py-20 md:py-28 bg-white overflow-hidden">

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Left — Mockup */}
                    <AnimateIn from="left" delay={150} duration={700}>
                    <div className="order-2 lg:order-1 flex justify-center">
                        <div className="w-full max-w-[420px]">
                            <div className="bg-slate-50 rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
                                {/* Header */}
                                <div className="px-6 py-4 bg-white border-b border-slate-100 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                                            <Megaphone size={18} className="text-primary" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-slate-800">Black Friday 2025</div>
                                            <div className="text-[11px] text-slate-400">Transmissão ativa</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200">
                                        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                        <span className="text-[10px] text-emerald-600 font-bold">AO VIVO</span>
                                    </div>
                                </div>

                                {/* Config Summary */}
                                <div className="p-5 space-y-3">
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="bg-white rounded-xl p-3 border border-slate-100">
                                            <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider mb-1">Fluxo</div>
                                            <div className="text-sm font-bold text-slate-700 flex items-center gap-1.5">
                                                <Zap size={12} className="text-primary" /> Oferta Relâmpago
                                            </div>
                                        </div>
                                        <div className="bg-white rounded-xl p-3 border border-slate-100">
                                            <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider mb-1">Público</div>
                                            <div className="text-sm font-bold text-slate-700 flex items-center gap-1.5">
                                                <Users size={12} className="text-emerald-600" /> 847 leads
                                            </div>
                                        </div>
                                    </div>

                                    {/* Progress */}
                                    <div className="bg-white rounded-xl p-4 border border-slate-100">
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="text-xs font-bold text-slate-600">Progresso</span>
                                            <span className="text-xs font-bold text-primary">{Math.round(progress / 2)}%</span>
                                        </div>
                                        <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-gradient-to-r from-primary to-[#baff68] rounded-full transition-all duration-300"
                                                style={{ width: `${progress / 2}%` }}
                                            />
                                        </div>
                                    </div>

                                    {/* Steps */}
                                    <div className="space-y-2">
                                        {progressSteps.map((step, i) => (
                                            <div key={i} className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-white border border-slate-100">
                                                {step.state === 'done' ? (
                                                    <CheckCircle2 size={16} className="text-primary shrink-0" />
                                                ) : (
                                                    <div className="w-4 h-4 rounded-full border-2 border-primary border-t-transparent animate-spin shrink-0" />
                                                )}
                                                <span className={`text-xs font-medium ${step.state === 'done' ? 'text-slate-500' : 'text-slate-800 font-bold'}`}>
                                                    {step.label}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </AnimateIn>

                    {/* Right — Copy */}
                    <div className="order-1 lg:order-2">
                        <AnimateIn from="right" delay={0}>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary mb-6">
                            Disparos em Massa
                        </p>
                        </AnimateIn>

                        <AnimateIn from="right" delay={100}>
                        <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-[3rem] font-bold tracking-tight leading-[1.15] text-slate-900 mb-6">
                            Alcance{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-600">
                                milhares de leads
                            </span>{' '}
                            com um clique.
                        </h2>
                        </AnimateIn>

                        <AnimateIn from="right" delay={200}>
                        <p className="text-base text-slate-500 leading-relaxed mb-10 max-w-lg">
                            Envie transmissões personalizadas com agendamento inteligente e proteção anti-bloqueio. Importe planilhas, escolha o fluxo e deixe o sistema trabalhar.
                        </p>
                        </AnimateIn>

                        <AnimateIn from="right" delay={300}>
                        <div className="grid sm:grid-cols-2 gap-4 mb-10">
                            {features.map((f, i) => (
                                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-primary/20 transition-colors">
                                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${f.bg}`}>
                                        <f.icon size={18} className={f.color} />
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-slate-800 mb-0.5">{f.title}</div>
                                        <div className="text-xs text-slate-500 leading-relaxed">{f.description}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        </AnimateIn>

                        <AnimateIn from="right" delay={400}>
                        <a href="#pricing" className="inline-flex items-center gap-2.5 rounded-xl bg-primary px-8 py-3.5 text-[15px] font-bold text-white shadow-[0_4px_14px_rgba(23,199,90,0.3)] hover:bg-primary/90 hover:shadow-[0_6px_20px_rgba(23,199,90,0.4)] transition-all">
                            Ver planos
                            <ArrowRight className="w-5 h-5" />
                        </a>
                        </AnimateIn>
                    </div>
                </div>
            </div>
        </section>
    );
};
