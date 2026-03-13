'use client';

import React, { useState, useEffect } from 'react';
import { MessageSquare, Mic, Video, FileText, GitBranch, ArrowRight, CheckCircle2, Plus, Search, MoreVertical } from 'lucide-react';
import { AnimateIn } from '@/components/ui/animate-in';

const quickReplies = [
    {
        icon: MessageSquare,
        iconColor: 'text-primary',
        iconBg: 'bg-primary/10',
        name: 'Boas-vindas',
        trigger: '/boasvindas',
        type: 'Texto',
        preview: 'Olá! Seja bem-vindo(a) ao Sagazchat! Como posso te ajudar hoje?',
    },
    {
        icon: Mic,
        iconColor: 'text-emerald-600',
        iconBg: 'bg-emerald-50',
        name: 'Apresentação da empresa',
        trigger: '/apresentacao',
        type: 'Áudio',
        preview: 'audio_apresentacao.mp3 · 0:45',
    },
    {
        icon: Video,
        iconColor: 'text-lime-700',
        iconBg: 'bg-lime-100',
        name: 'Tour do produto',
        trigger: '/tour',
        type: 'Vídeo',
        preview: 'tour_plataforma.mp4 · 2:30',
    },
    {
        icon: FileText,
        iconColor: 'text-green-700',
        iconBg: 'bg-green-50',
        name: 'Tabela de preços',
        trigger: '/precos',
        type: 'PDF',
        preview: 'Tabela_Precos_2025.pdf',
    },
    {
        icon: GitBranch,
        iconColor: 'text-primary',
        iconBg: 'bg-primary/10',
        name: 'Qualificação de lead',
        trigger: '/qualificar',
        type: 'Fluxo',
        preview: 'Fluxo: Qualificação Automática',
    },
];

export const ShortcutSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % quickReplies.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-24 bg-white text-slate-900 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Left Content */}
                    <div className="space-y-6 lg:space-y-8">
                        <AnimateIn delay={0}>
                            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
                                Resposta Rápida
                            </p>
                        </AnimateIn>

                        <AnimateIn delay={100}>
                            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-[3rem] font-bold tracking-tight leading-[1.15] text-slate-900">
                                Atenda em <span className="text-primary">segundos</span>, não em minutos.
                            </h2>
                        </AnimateIn>

                        <AnimateIn delay={200}>
                            <p className="text-base text-slate-600 leading-relaxed">
                                Sua equipe não precisa digitar a mesma resposta pela centésima vez. Com respostas rápidas, qualquer atendente envia texto, áudio, vídeo, PDF ou até um fluxo inteiro — com um único clique.
                            </p>
                        </AnimateIn>

                        <AnimateIn delay={300}>
                            <ul className="space-y-4">
                                {[
                                    "Envio instantâneo de mídia: áudio, vídeo e PDF sem buscar arquivos.",
                                    "Dispare fluxos completos direto da conversa, sem trocar de tela.",
                                    "Toda a equipe respondendo com a mesma qualidade e agilidade."
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-700">
                                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                                            <CheckCircle2 size={14} />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </AnimateIn>

                        <AnimateIn delay={400}>
                            <div className="pt-4">
                                <a href="#pricing" className="inline-flex items-center gap-2.5 rounded-xl bg-primary px-8 py-3.5 text-[15px] font-bold text-white shadow-[0_4px_14px_rgba(23,199,90,0.3)] hover:bg-primary/90 hover:shadow-[0_6px_20px_rgba(23,199,90,0.4)] transition-all">
                                    Ver planos
                                    <ArrowRight className="w-5 h-5" />
                                </a>
                            </div>
                        </AnimateIn>
                    </div>

                    {/* Right Content - Settings Panel Mockup */}
                    <AnimateIn delay={200} duration={700}>
                        <div className="lg:order-2 flex justify-center lg:justify-end">
                            <div className="relative w-full max-w-[480px] bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">

                                {/* Panel Header */}
                                <div className="px-5 py-4 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
                                    <div>
                                        <h3 className="text-sm font-bold text-slate-900">Respostas Rápidas</h3>
                                        <p className="text-xs text-slate-500 mt-0.5">{quickReplies.length} respostas configuradas</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-600 cursor-pointer">
                                            <Search size={14} />
                                        </div>
                                        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white cursor-pointer">
                                            <Plus size={14} strokeWidth={3} />
                                        </div>
                                    </div>
                                </div>

                                {/* Quick Reply List */}
                                <div className="divide-y divide-slate-100">
                                    {quickReplies.map((reply, index) => {
                                        const Icon = reply.icon;
                                        const isActive = index === activeIndex;

                                        return (
                                            <div
                                                key={index}
                                                className={`px-5 py-3.5 flex items-center gap-4 transition-all duration-500 cursor-pointer ${isActive ? 'bg-primary/5 border-l-2 border-l-primary' : 'border-l-2 border-l-transparent hover:bg-slate-50'}`}
                                            >
                                                <div className={`w-10 h-10 rounded-lg ${reply.iconBg} flex items-center justify-center shrink-0 transition-transform duration-300 ${isActive ? 'scale-110' : ''}`}>
                                                    <Icon size={18} className={reply.iconColor} />
                                                </div>

                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-sm font-semibold text-slate-900">{reply.name}</span>
                                                        <span className="text-[10px] font-medium text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">{reply.type}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2 mt-0.5">
                                                        <code className="text-[11px] text-primary font-mono">{reply.trigger}</code>
                                                        <span className="text-[10px] text-slate-300">·</span>
                                                        <span className="text-xs text-slate-500 truncate">{reply.preview}</span>
                                                    </div>
                                                </div>

                                                <div className="shrink-0 text-slate-300 hover:text-slate-500">
                                                    <MoreVertical size={16} />
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* Panel Footer */}
                                <div className="px-5 py-3 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
                                    <span className="text-xs text-slate-400">Configurações → Respostas Rápidas</span>
                                    <span className="text-xs text-primary font-medium cursor-pointer hover:text-primary/80">Ver todas</span>
                                </div>
                            </div>
                        </div>
                    </AnimateIn>
                </div>
            </div>
        </section>
    );
};
