'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, Heart, Send, Bookmark, MoreHorizontal, ArrowRight, Instagram, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

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
        <section className="py-24 bg-[#050505] text-white relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-pink-600/10 to-purple-600/10 rounded-full blur-[120px] -z-10"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#92D639]/5 rounded-full blur-[120px] -z-10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <div className="order-2 lg:order-1 space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-purple-500/20 text-pink-500 text-[11px] font-bold uppercase tracking-wider">
                            <Instagram size={12} /> Automação para Instagram
                        </div>

                        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                            Do <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500">Comentário</span> ao <span className="text-[#92D639]">Direct</span> em segundos.
                        </h2>

                        <p className="text-lg text-gray-400 leading-relaxed">
                            Não deixe seus seguidores esperando. Nossa IA monitora seus posts 24 horas por dia. Quando alguém comenta uma palavra-chave, a mágica acontece:
                        </p>

                        <ul className="space-y-4">
                            {[
                                "Resposta automática e personalizada no comentário.",
                                "Envio imediato de mensagem no Direct (DM).",
                                "Captação do lead e envio para o CRM."
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-300">
                                    <div className="w-6 h-6 rounded-full bg-[#92D639]/10 flex items-center justify-center text-[#92D639]">
                                        <CheckCircle2 size={14} />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className="pt-4">
                            <Button className="group w-full sm:w-auto relative px-8 py-4 h-auto bg-[#92D639] text-black font-bold text-lg hover:bg-[#82c232] transition-all shadow-[0_0_20px_rgba(146,214,57,0.4)] hover:shadow-[0_0_40px_rgba(146,214,57,0.6)] hover:-translate-y-1">
                                <Instagram size={20} className="mr-2" />
                                Testar no Meu Instagram
                                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </div>
                    </div>

                    {/* Right Content - Visual Demo */}
                    <div className="order-1 lg:order-2 relative">
                        {/* Phone Frame */}
                        <div className="relative mx-auto border-gray-800 bg-gray-950 border-[8px] rounded-[2.5rem] h-[600px] w-[320px] shadow-2xl flex flex-col overflow-hidden">
                            {/* Instagram Header Mockup */}
                            <div className="bg-black p-4 flex justify-between items-center border-b border-white/10 z-10">
                                <span className="font-bold text-sm">Respondechat.ai</span>
                                <div className="flex gap-4">
                                    <Heart size={20} />
                                    <MessageCircle size={20} className="relative">
                                        {/* Notification Badge */}
                                        <span className={`absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-black transition-opacity duration-300 ${step >= 3 ? 'opacity-100' : 'opacity-0'}`}></span>
                                    </MessageCircle>
                                </div>
                            </div>

                            {/* Post Content */}
                            <div className="flex-1 overflow-y-auto no-scrollbar bg-black relative">
                                {/* The Post Image */}
                                <div className="w-full h-64 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#92D639]/20 to-emerald-900/40 opacity-50"></div>
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#92D639]/20 to-emerald-900/40 opacity-50"></div>
                                </div>

                                {/* Post Actions */}
                                <div className="p-3 flex justify-between">
                                    <div className="flex gap-4">
                                        <Heart size={24} className="text-red-500 fill-red-500" />
                                        <MessageCircle size={24} />
                                        <Send size={24} />
                                    </div>
                                    <Bookmark size={24} />
                                </div>

                                {/* Comments Section */}
                                <div className="px-3 pb-20 space-y-4">
                                    <p className="text-sm font-bold">1.248 curtidas</p>

                                    {/* Caption */}
                                    <div className="text-sm">
                                        <span className="font-bold mr-2">Respondechat.ai</span>
                                        🚀 Aumente suas vendas! Comente "EU QUERO" abaixo 👇
                                    </div>

                                    {/* User Comment */}
                                    <div className={`flex items-start gap-2 transition-all duration-500 ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                                        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-xs font-bold">L</div>
                                        <div className="flex-1">
                                            <p className="text-sm"><span className="font-bold mr-1">lead_curioso</span>EU QUERO!</p>
                                            <p className="text-[10px] text-gray-500 mt-0.5">Agora mesmo</p>
                                        </div>
                                    </div>

                                    {/* AI Reply */}
                                    <div className={`flex items-start gap-2 pl-4 transition-all duration-500 delay-300 ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                                        <div className="w-6 h-6 rounded-full bg-[#92D639] flex items-center justify-center text-[10px] font-bold text-black overflow-hidden relative">
                                            <div className="absolute inset-0 bg-gradient-to-tr from-[#92D639] to-white opacity-50"></div>
                                            R
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm"><span className="font-bold mr-1">Respondechat</span>Te chamei no direct! 🚀</p>
                                            <p className="text-[10px] text-gray-500 mt-0.5">Agora mesmo</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating DM Notification */}
                            <div className={`absolute top-20 left-1/2 -translate-x-1/2 w-[90%] bg-[#262626] rounded-xl p-3 shadow-2xl border border-white/10 transition-all duration-500 ${step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-[#92D639] flex items-center justify-center text-black font-bold">R</div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-bold text-white">Respondechat</p>
                                        <p className="text-xs text-gray-400 truncate">Olá! Vi que comentou no nosso post. Aqui estão os detalhes...</p>
                                    </div>
                                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                </div>
                            </div>

                        </div>

                        {/* Decorational Elements */}
                        <div className="absolute top-1/2 -right-12 lg:-right-24 transform -translate-y-1/2 hidden md:block">
                            <div className="bg-[#1A1A1A] p-4 rounded-xl border border-white/10 shadow-xl max-w-[200px] animate-float" style={{ animationDelay: '1s' }}>
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                    <span className="text-xs font-bold text-gray-300">Status</span>
                                </div>
                                <p className="text-[#92D639] font-bold text-lg">Lead Capturado</p>
                                <p className="text-[10px] text-gray-500">Enviado para CRM</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
