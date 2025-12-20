'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Zap, Clock, ShieldCheck, ArrowRight, UserPlus, MoreHorizontal, Play, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const ShortcutSection = () => {
    // --- Chat Simulation State ---
    const [messages, setMessages] = useState<any[]>([
        { id: 1, type: 'received', text: 'Olá! Gostaria de saber mais sobre como funciona a empresa.' },
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    };

    useEffect(() => {
        if (messages.length > 1 || isTyping) {
            scrollToBottom();
        }
    }, [messages, isTyping]);

    const handleSimulateCommand = () => {
        if (inputValue !== '!apresentacao') {
            setInputValue('!apresentacao');
            return;
        }

        // User sends command
        const newMsg = { id: Date.now(), type: 'sent' as const, text: '!apresentacao' };
        setMessages(prev => [...prev, newMsg]);
        setInputValue('');
        setIsTyping(true);

        // System automated response sequence
        setTimeout(() => {
            setIsTyping(true);
            setTimeout(() => {
                setMessages(prev => [...prev, {
                    id: Date.now() + 1,
                    type: 'sent' as const,
                    isSystem: true,
                    text: 'Olá! 👋 Que bom ter você aqui. O Respondechat é especialista em automação...'
                }]);

                setTimeout(() => {
                    setMessages(prev => [...prev, {
                        id: Date.now() + 2,
                        type: 'sent' as const,
                        isSystem: true,
                        media: 'audio' as const,
                        duration: '0:45',
                        text: 'Audio: Explicação do CEO'
                    }]);

                    setTimeout(() => {
                        setMessages(prev => [...prev, {
                            id: Date.now() + 3,
                            type: 'sent' as const,
                            isSystem: true,
                            media: 'image' as const,
                            text: 'PDF: Apresentacao_Institucional.pdf'
                        }]);
                        setIsTyping(false);
                    }, 1000);
                }, 1200);
            }, 800);
        }, 500);
    };

    const resetDemo = () => {
        setMessages([{ id: 1, type: 'received', text: 'Olá! Gostaria de saber mais sobre como funciona a empresa.' }]);
        setInputValue('');
        setIsTyping(false);
    };

    return (
        <div className="min-h-screen font-sans text-white selection:bg-[#92D639] selection:text-black relative overflow-x-hidden flex flex-col justify-center">

            {/* --- Black to Green Gradient Background --- */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#050505] via-[#05100c] to-[#0a2015] z-0"></div>

            {/* --- Grid Pattern Overlay --- */}
            <div className="absolute inset-0 bg-[radial-gradient(rgba(146,214,57,0.08)_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none z-0"></div>

            {/* --- Main Content Section --- */}
            <div className="relative z-10 w-full py-12 lg:py-0">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="grid lg:grid-cols-2 gap-8 items-center">

                        {/* Left Column: Direct Explanation */}
                        <div className="space-y-8 animate-fadeIn text-center lg:text-left">

                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#92D639]/10 border border-[#92D639]/30 text-[#92D639] text-[11px] font-bold uppercase tracking-wider">
                                <Zap size={12} fill="currentColor" /> Novo Recurso
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                                Digite um atalho. <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#92D639] to-[#baff68]">
                                    O robô faz o resto.
                                </span>
                            </h1>

                            <div className="text-lg text-slate-300 leading-relaxed max-w-lg mx-auto lg:mx-0 lg:border-l-4 border-[#92D639] lg:pl-6 text-center lg:text-left">
                                <p>
                                    Para quem vive na correria: configure uma palavra-chave (como <code className="bg-white/10 px-1.5 py-0.5 rounded text-white font-mono text-base">!apresentacao</code>) e dispare funis inteiros de áudio, vídeo e texto instantaneamente.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl sm:bg-transparent sm:p-0">
                                    <div className="w-10 h-10 shrink-0 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                                        <Clock className="w-5 h-5 text-[#92D639]" />
                                    </div>
                                    <div className="text-left">
                                        <p className="font-bold text-white leading-none mb-1">Economia de Tempo</p>
                                        <p className="text-xs text-slate-400">Atendimentos 10x mais rápidos</p>
                                    </div>
                                </div>

                                <div className="hidden sm:block w-px h-12 bg-white/10"></div>

                                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl sm:bg-transparent sm:p-0">
                                    <div className="w-10 h-10 shrink-0 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                                        <ShieldCheck className="w-5 h-5 text-[#92D639]" />
                                    </div>
                                    <div className="text-left">
                                        <p className="font-bold text-white leading-none mb-1">Sem Erros</p>
                                        <p className="text-xs text-slate-400">Envio padronizado sempre</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
                                <Button size="lg" className="group w-full sm:w-auto relative px-8 py-4 h-auto bg-[#92D639] text-black font-bold text-lg hover:bg-[#82c232] transition-all shadow-[0_0_20px_rgba(146,214,57,0.4)] hover:shadow-[0_0_40px_rgba(146,214,57,0.6)] hover:-translate-y-1">
                                    <UserPlus size={20} />
                                    Assinar Agora
                                    <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </div>
                        </div>

                        {/* Right Column: Phone Demo */}
                        <div className="relative flex justify-center lg:justify-center transform scale-[0.85] sm:scale-100 origin-top sm:origin-center -mb-20 sm:mb-0">

                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[600px] bg-[#92D639]/20 rounded-full blur-[100px] -z-10"></div>

                            <div className="relative border-gray-950 bg-gray-950 border-[12px] rounded-[3rem] h-[650px] w-[320px] shadow-2xl shadow-black/50 flex flex-col overflow-hidden ring-1 ring-white/10">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-950 rounded-b-2xl z-30"></div>

                                <div className="bg-gray-900 h-8 w-full flex items-center justify-between px-6 pt-2 z-20">
                                    <span className="text-white text-[10px] font-medium">18:13</span>
                                    <div className="flex gap-1">
                                        <div className="w-3 h-3 bg-white/20 rounded-full"></div>
                                        <div className="w-3 h-3 bg-white/20 rounded-full"></div>
                                    </div>
                                </div>

                                <div className="bg-[#1f2c34] px-4 py-3 flex items-center gap-3 z-20 shadow-md border-b border-white/5">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#92D639] to-[#7ab828] flex items-center justify-center text-white font-bold text-sm">L</div>
                                    <div className="flex-1">
                                        <p className="text-white text-sm font-semibold">Lead Interessado</p>
                                        <p className="text-[#92D639] text-[10px] flex items-center gap-1">
                                            <span className="w-1.5 h-1.5 bg-[#92D639] rounded-full animate-pulse"></span> Online
                                        </p>
                                    </div>
                                    <MoreHorizontal className="text-slate-400 w-5 h-5" />
                                </div>

                                <div className="flex-1 bg-[#0b141a] relative overflow-y-auto p-3 space-y-4 no-scrollbar">
                                    <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")', backgroundSize: '400px' }}></div>

                                    {messages.map((msg: any) => (
                                        <div key={msg.id} className={`flex ${msg.type === 'sent' ? 'justify-end' : 'justify-start'} animate-fadeIn relative z-10`}>
                                            <div className={`max-w-[85%] rounded-lg p-2.5 text-sm shadow-sm relative ${msg.type === 'sent'
                                                ? 'bg-[#005c4b] text-white rounded-tr-none'
                                                : 'bg-[#202c33] text-white rounded-tl-none'
                                                }`}>
                                                {msg.isSystem && (
                                                    <div className="text-[9px] text-[#92D639] font-bold mb-1 uppercase flex items-center gap-1 opacity-80">
                                                        <Zap size={10} /> Auto
                                                    </div>
                                                )}

                                                {msg.media === 'audio' ? (
                                                    <div className="flex items-center gap-3 min-w-[140px] py-1">
                                                        <div className="w-8 h-8 rounded-full bg-slate-700/50 flex items-center justify-center text-slate-300">
                                                            <Play size={14} fill="currentColor" />
                                                        </div>
                                                        <div className="flex-1">
                                                            <div className="h-1 bg-slate-600 rounded-full overflow-hidden w-full">
                                                                <div className="h-full w-1/3 bg-[#92D639]"></div>
                                                            </div>
                                                            <div className="flex justify-between mt-1">
                                                                <span className="text-[10px] text-slate-400">0:18</span>
                                                                <span className="text-[10px] text-slate-400">{msg.duration}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ) : msg.media === 'image' ? (
                                                    <div className="flex items-center gap-3 bg-black/20 p-2 rounded border border-white/5">
                                                        <div className="w-8 h-10 bg-red-500/20 rounded flex items-center justify-center text-red-400 text-[10px] font-bold">PDF</div>
                                                        <div className="text-xs text-slate-200 font-medium overflow-hidden text-ellipsis whitespace-nowrap max-w-[120px]">{msg.text.replace('PDF: ', '')}</div>
                                                    </div>
                                                ) : (
                                                    <p className="leading-relaxed">{msg.text}</p>
                                                )}

                                                <span className="text-[9px] text-white/50 block text-right mt-1 -mb-1">10:42</span>
                                            </div>
                                        </div>
                                    ))}

                                    {isTyping && (
                                        <div className="flex justify-start animate-pulse relative z-10">
                                            <div className="bg-[#202c33] rounded-lg p-3 rounded-tl-none">
                                                <div className="flex gap-1.5">
                                                    <div className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce"></div>
                                                    <div className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce delay-75"></div>
                                                    <div className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce delay-150"></div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    <div ref={messagesEndRef} />
                                </div>

                                <div className="bg-[#1f2c34] p-2 shrink-0 z-20 flex items-center gap-2 relative">
                                    <div className="w-8 h-8 rounded-full bg-slate-700/50 flex items-center justify-center text-slate-400">
                                        <span className="text-lg">+</span>
                                    </div>
                                    <div className="flex-1 bg-[#2a3942] rounded-full px-4 py-2 flex items-center">
                                        <input
                                            type="text"
                                            className="flex-1 bg-transparent outline-none text-sm text-white placeholder:text-slate-400"
                                            placeholder="Mensagem"
                                            value={inputValue}
                                            readOnly
                                        />
                                    </div>

                                    <div className="relative">
                                        <button
                                            onClick={handleSimulateCommand}
                                            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-lg relative z-20 ${inputValue === '!apresentacao' ? 'bg-[#92D639] text-black hover:bg-[#82c232] shadow-[#92D639]/30' : 'bg-[#005c4b] text-white'}`}
                                        >
                                            <Send size={18} />
                                        </button>

                                        {inputValue === '' && messages.length < 2 && (
                                            <div className="absolute bottom-12 right-0 w-max bg-[#92D639] text-black text-[10px] font-bold px-3 py-1.5 rounded-xl shadow-xl shadow-black/50 animate-bounce z-10 border border-green-400/50">
                                                Clique aqui!
                                                <div className="absolute -bottom-1 right-3 w-3 h-3 bg-[#92D639] rotate-45 border-b border-r border-green-400/50"></div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {messages.length > 3 && (
                                    <div className="absolute top-20 left-1/2 -translate-x-1/2 z-50 animate-fadeIn">
                                        <button onClick={resetDemo} className="bg-slate-800/90 text-white text-xs px-3 py-1 rounded-full border border-white/10 hover:bg-slate-700 transition-colors shadow-lg backdrop-blur-sm">
                                            ↺ Reiniciar Demo
                                        </button>
                                    </div>
                                )}

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};
