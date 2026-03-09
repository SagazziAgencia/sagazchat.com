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
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
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
                text: 'Olá! 👋 Que bom ter você aqui. O RespondeZap é especialista em automação...' 
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
    <div className="font-sans text-white relative overflow-x-hidden flex flex-col justify-center py-24 section-divider">

      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            
            {/* Left Column: Direct Explanation */}
            <div className="space-y-6 text-center lg:text-left">

                <p className="text-sm font-medium text-white/30 tracking-wide uppercase">Atalhos Inteligentes</p>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                    Digite um atalho.{' '}
                    <span className="text-gradient">O robô faz o resto.</span>
                </h2>

                <p className="text-base text-white/40 leading-relaxed max-w-lg mx-auto lg:mx-0">
                    Configure uma palavra-chave (como <code className="bg-white/[0.08] px-1.5 py-0.5 rounded text-white/70 font-mono text-sm">!apresentacao</code>) e dispare funis inteiros de áudio, vídeo e texto instantaneamente.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 pt-4 justify-center lg:justify-start">
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 shrink-0 rounded-lg bg-white/[0.06] flex items-center justify-center">
                            <Clock className="w-4 h-4 text-[#92D639]/60" />
                        </div>
                        <div className="text-left">
                            <p className="font-medium text-white/80 text-sm leading-none mb-0.5">10x mais rápido</p>
                            <p className="text-xs text-white/30">Economia de tempo</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 shrink-0 rounded-lg bg-white/[0.06] flex items-center justify-center">
                            <ShieldCheck className="w-4 h-4 text-[#92D639]/60" />
                        </div>
                        <div className="text-left">
                            <p className="font-medium text-white/80 text-sm leading-none mb-0.5">Zero erros</p>
                            <p className="text-xs text-white/30">Envio padronizado</p>
                        </div>
                    </div>
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
                        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{backgroundImage: 'url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")', backgroundSize: '400px'}}></div>

                        {messages.map((msg: any) => (
                        <div key={msg.id} className={`flex ${msg.type === 'sent' ? 'justify-end' : 'justify-start'} animate-fadeIn relative z-10`}>
                            <div className={`max-w-[85%] rounded-lg p-2.5 text-sm shadow-sm relative ${
                                msg.type === 'sent' 
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
