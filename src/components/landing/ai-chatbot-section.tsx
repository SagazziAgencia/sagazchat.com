'use client';

import React, { useEffect, useState } from 'react';
import { Bot, Brain, ShieldCheck, MessageSquare, Sparkles, ArrowRight, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimateIn } from '@/components/ui/animate-in';

const chatMessages = [
    { role: 'user' as const, text: 'Oi! Quero saber sobre o plano Pro.', delay: 0 },
    { role: 'ai' as const, text: 'Olá! 😊 O Plano Pro inclui 3 conexões de WhatsApp, CRM Kanban, fluxos ilimitados e 500 mil tokens de IA. O investimento é de R$ 197/mês. Quer que eu detalhe algum recurso?', delay: 1500 },
    { role: 'user' as const, text: 'Qual a diferença pro Business?', delay: 3500 },
    { role: 'ai' as const, text: 'Ótima pergunta! O Business adiciona 5 conexões, Instagram DM, webhooks ilimitados e 1 milhão de tokens. Ideal se você já tem uma equipe de vendas. 🚀', delay: 5000 },
];

const features = [
    {
        icon: Brain,
        title: 'Base de Conhecimento',
        description: 'Treine a IA com preços, políticas e FAQs. Ela responde com precisão.',
        color: 'text-primary',
        bg: 'bg-primary/10',
    },
    {
        icon: MessageSquare,
        title: 'Múltiplos Agentes',
        description: 'Crie personas diferentes: "Ana do Suporte", "Beto de Vendas".',
        color: 'text-emerald-500',
        bg: 'bg-emerald-500/10',
    },
    {
        icon: Sparkles,
        title: 'Memória de Contexto',
        description: 'Lembra de toda a conversa. Nunca perde o fio da meada.',
        color: 'text-lime-600',
        bg: 'bg-lime-500/10',
    },
    {
        icon: ShieldCheck,
        title: 'Privacidade Absoluta',
        description: 'Cada conversa é isolada. Zero vazamento entre clientes.',
        color: 'text-green-600',
        bg: 'bg-emerald-500/10',
    },
];

export const AiChatbotSection = () => {
    const [visibleMessages, setVisibleMessages] = useState(0);

    useEffect(() => {
        const timers = chatMessages.map((msg, index) =>
            setTimeout(() => setVisibleMessages(index + 1), msg.delay)
        );
        return () => timers.forEach(clearTimeout);
    }, []);

    return (
        <section className="relative py-20 md:py-28 bg-white overflow-hidden">

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Left — Copy */}
                    <div>
                        <AnimateIn from="left" delay={0}>
                            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary mb-6">
                                Inteligência Artificial
                            </p>
                        </AnimateIn>

                        <AnimateIn from="left" delay={100}>
                            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-[3rem] font-bold tracking-tight leading-[1.15] text-slate-900 mb-6">
                                Um Agente de IA que{' '}
                                <span className="text-primary">
                                    nunca dorme.
                                </span>
                            </h2>
                        </AnimateIn>

                        <AnimateIn from="left" delay={200}>
                            <p className="text-base text-slate-600 leading-relaxed mb-10 max-w-lg">
                                Treine a IA com os dados da sua empresa e deixe ela atender, negociar e vender 24h por dia. Cada conversa é isolada e segura.
                            </p>
                        </AnimateIn>

                        <AnimateIn from="left" delay={300}>
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

                        <AnimateIn from="left" delay={400}>
                            <a href="#pricing" className="inline-flex items-center gap-2.5 rounded-xl bg-primary px-8 py-3.5 text-[15px] font-bold text-white shadow-[0_4px_14px_rgba(23,199,90,0.3)] hover:bg-primary/90 hover:shadow-[0_6px_20px_rgba(23,199,90,0.4)] transition-all">
                                Ver planos com IA
                                <ArrowRight className="w-5 h-5" />
                            </a>
                        </AnimateIn>
                    </div>

                    {/* Right — Chat Mockup */}
                    <AnimateIn from="right" delay={200} duration={700}>
                    <div className="lg:order-2 flex justify-center">
                        <div className="w-full max-w-[380px]">
                            <div className="bg-[#111921] rounded-2xl border border-gray-800 shadow-2xl overflow-hidden">
                                {/* Chat Header */}
                                <div className="px-5 py-4 border-b border-gray-800 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-emerald-500 flex items-center justify-center">
                                        <Bot size={20} className="text-white" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-white">Ana — Vendas</div>
                                        <div className="flex items-center gap-1.5">
                                            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                            <span className="text-[11px] text-emerald-400 font-medium">Online agora</span>
                                        </div>
                                    </div>
                                    <div className="ml-auto">
                                        <Zap size={16} className="text-primary" />
                                    </div>
                                </div>

                                {/* Chat Messages */}
                                <div className="p-4 space-y-3 min-h-[280px]">
                                    {chatMessages.slice(0, visibleMessages).map((msg, i) => (
                                        <div
                                            key={i}
                                            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fadeIn`}
                                        >
                                            <div
                                                className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-[13px] leading-relaxed ${msg.role === 'user'
                                                        ? 'bg-primary/20 text-primary rounded-br-md'
                                                        : 'bg-white/[0.06] text-slate-300 rounded-bl-md'
                                                    }`}
                                            >
                                                {msg.text}
                                            </div>
                                        </div>
                                    ))}

                                    {/* Typing indicator */}
                                    {visibleMessages < chatMessages.length && (
                                        <div className="flex justify-start animate-fadeIn">
                                            <div className="bg-white/[0.06] px-4 py-3 rounded-2xl rounded-bl-md flex gap-1.5">
                                                <span className="w-2 h-2 rounded-full bg-slate-500 animate-bounce" style={{ animationDelay: '0ms' }} />
                                                <span className="w-2 h-2 rounded-full bg-slate-500 animate-bounce" style={{ animationDelay: '150ms' }} />
                                                <span className="w-2 h-2 rounded-full bg-slate-500 animate-bounce" style={{ animationDelay: '300ms' }} />
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Input */}
                                <div className="px-4 py-3 border-t border-gray-800">
                                    <div className="flex items-center gap-2 bg-white/[0.04] rounded-xl px-4 py-2.5">
                                        <span className="text-sm text-slate-500 flex-1">Digite sua mensagem...</span>
                                        <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                                            <ArrowRight size={14} className="text-primary" />
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
