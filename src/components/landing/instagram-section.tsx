'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, Heart, Send, Bookmark, MoreHorizontal, ArrowRight, Instagram, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import { AnimateIn } from '@/components/ui/animate-in';

export function InstagramSection() {
    const [step, setStep] = useState(0);

    // Animation sequence
    useEffect(() => {
        const interval = setInterval(() => {
            setStep((prev) => (prev + 1) % 4); // 0: Idle, 1: Comment, 2: Reply, 3: DM
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-24 bg-slate-50 text-slate-900 relative overflow-hidden">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <div className="order-2 lg:order-1 space-y-8">
                        <AnimateIn from="left" delay={0}>
                            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#C13584]">
                                Automação para Instagram
                            </p>
                        </AnimateIn>

                        <AnimateIn from="left" delay={100}>
                            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-[3rem] font-bold tracking-tight leading-[1.15]">
                                Do <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500">Comentário</span> ao <span className="text-primary">Direct</span> em segundos.
                            </h2>
                        </AnimateIn>

                        <AnimateIn from="left" delay={200}>
                            <p className="text-base text-slate-600 leading-relaxed">
                                Não deixe seus seguidores esperando. Nossa IA monitora seus posts 24 horas por dia. Quando alguém comenta uma palavra-chave, a mágica acontece:
                            </p>
                        </AnimateIn>

                        <AnimateIn from="left" delay={300}>
                            <ul className="space-y-4">
                                {[
                                    "Resposta automática e personalizada no comentário.",
                                    "Envio imediato de mensagem no Direct (DM).",
                                    "Captação do lead e envio para o CRM."
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
                                    Ver planos com Instagram
                                    <ArrowRight className="w-5 h-5" />
                                </a>
                            </div>
                        </AnimateIn>
                    </div>

                    {/* Right Content - Visual Demo */}
                    <AnimateIn from="right" delay={200} duration={700}>
                    <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                        <div className="relative w-fit">
                            {/* Phone Frame */}
                            <div className="relative border-slate-300 bg-white border-[8px] rounded-[2.5rem] h-[600px] w-[320px] shadow-2xl flex flex-col overflow-hidden">
                                {/* Instagram Header Mockup */}
                                <div className="bg-white px-3 py-4 flex justify-between items-center border-b border-slate-200 z-10">
                                    <span className="font-bold text-sm text-slate-900">Sagazchat</span>
                                    <div className="flex gap-4 text-slate-900">
                                        <Heart size={20} />
                                        <div className="relative">
                                            <MessageCircle size={20} />
                                            <span className={`absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white transition-opacity duration-300 ${step >= 3 ? 'opacity-100' : 'opacity-0'}`}></span>
                                        </div>
                                    </div>
                                </div>

                                {/* Post Content */}
                                <div className="flex-1 overflow-y-auto no-scrollbar bg-white relative">
                                    {/* The Post Image */}
                                    <div className="w-full h-64 bg-gradient-to-br from-emerald-100 to-emerald-200 flex items-center justify-center relative group">
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-emerald-300/30"></div>
                                    </div>

                                    {/* Post Actions */}
                                    <div className="p-3 flex justify-between text-slate-900">
                                        <div className="flex gap-4">
                                            <Heart size={24} className="text-red-500 fill-red-500" />
                                            <MessageCircle size={24} />
                                            <Send size={24} />
                                        </div>
                                        <Bookmark size={24} />
                                    </div>

                                    {/* Comments Section */}
                                    <div className="px-3 pb-20 space-y-4">
                                        <p className="text-sm font-bold text-slate-900">1.248 curtidas</p>

                                        {/* Caption */}
                                        <div className="text-sm text-slate-900">
                                            <span className="font-bold mr-2">Sagazchat</span>
                                            🚀 Aumente suas vendas! Comente &quot;EU QUERO&quot; abaixo 👇
                                        </div>

                                        {/* User Comment */}
                                        <div className={`flex items-start gap-2 transition-all duration-500 ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                                            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-xs font-bold text-white">L</div>
                                            <div className="flex-1">
                                                <p className="text-sm text-slate-900"><span className="font-bold mr-1">lead_curioso</span>EU QUERO!</p>
                                                <p className="text-[10px] text-slate-400 mt-0.5">Agora mesmo</p>
                                            </div>
                                        </div>

                                        {/* AI Reply */}
                                        <div className={`flex items-start gap-2 pl-4 transition-all duration-500 delay-300 ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                                            <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-[10px] font-bold text-white">
                                                S
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-sm text-slate-900"><span className="font-bold mr-1">Sagazchat</span>Te chamei no direct! 🚀</p>
                                                <p className="text-[10px] text-slate-400 mt-0.5">Agora mesmo</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating DM Notification */}
                                <div className={`absolute top-20 left-1/2 -translate-x-1/2 w-[90%] bg-white rounded-xl p-3 shadow-2xl border border-slate-200 transition-all duration-500 ${step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">S</div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-bold text-slate-900">Sagazchat</p>
                                            <p className="text-xs text-slate-500 truncate">Olá! Vi que comentou no nosso post. Aqui estão os detalhes...</p>
                                        </div>
                                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                    </div>
                                </div>

                            </div>

                            {/* Decorational Elements */}
                            <div className="absolute top-1/2 -right-8 lg:-right-16 transform -translate-y-1/2 hidden md:block">
                                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-lg max-w-[200px]">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                        <span className="text-xs font-bold text-slate-500">Status</span>
                                    </div>
                                    <p className="text-primary font-bold text-lg">Lead Capturado</p>
                                    <p className="text-[10px] text-slate-500">Enviado para CRM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </AnimateIn>
                </div>
            </div>
        </section>
    );
}


