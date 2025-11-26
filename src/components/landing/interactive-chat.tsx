"use client";

import React, { useState, useEffect } from 'react';
import { 
  MessageCircle, 
  Instagram, 
  Mail, 
  MessageSquare, 
  CheckCircle2, 
  Zap,
  Send,
  MoreVertical,
  Check,
  Terminal,
  Lock,
  FileText
} from 'lucide-react';

const channels = [
    { 
      id: 'whatsapp',
      name: 'WhatsApp', 
      icon: <MessageCircle className="w-5 h-5" />, 
      color: 'text-[#92D639]', 
      bg: 'bg-[#92D639]/10', 
      border: 'border-[#92D639]', 
      status: 'active',
      messages: [
        { type: 'incoming', text: 'Olá! Vi o anúncio no Instagram e quero saber o preço.', time: '10:00' },
        { type: 'outgoing', text: 'Olá! 👋 O RespondeZap automatiza tudo por apenas R$ 97/mês. Quer testar?', time: '10:00', status: 'read' },
      ]
    },
    { 
      id: 'instagram',
      name: 'Instagram', 
      icon: <Instagram className="w-5 h-5" />, 
      color: 'text-pink-500', 
      bg: 'bg-pink-500/10', 
      border: 'border-pink-500/30', 
      status: 'coming_soon',
      messages: [
        { type: 'incoming', text: '🔥 Amei essa nova função! Funciona pra lojas?', time: '14:20' },
        { type: 'outgoing', text: 'Funciona sim! 🚀 Ideal para e-commerce. Posso te enviar um vídeo?', time: '14:21', status: 'read' },
      ]
    },
    { 
      id: 'messenger',
      name: 'Messenger', 
      icon: <MessageSquare className="w-5 h-5" />, 
      color: 'text-blue-500', 
      bg: 'bg-blue-500/10', 
      border: 'border-blue-500/30', 
      status: 'coming_soon',
      messages: [
        { type: 'incoming', text: 'Tem alguém disponível para suporte?', time: '09:15' },
        { type: 'outgoing', text: 'Oi! Sou a IA do RespondeZap. Em que posso ajudar hoje?', time: '09:15', status: 'read' },
      ]
    },
    { 
      id: 'gmail',
      name: 'Gmail', 
      icon: <Mail className="w-5 h-5" />, 
      color: 'text-red-500', 
      bg: 'bg-red-500/10', 
      border: 'border-red-500/30', 
      status: 'coming_soon',
      messages: [
        { type: 'incoming', text: 'Solicitação de Orçamento - Empresa X', time: '11:00', icon: <FileText size={14}/> },
        { type: 'outgoing', text: 'Recebemos sua solicitação. Segue nossa proposta em anexo. 📄', time: '11:05', status: 'sent' },
      ]
    },
    { 
      id: 'api',
      name: 'API', 
      icon: <Terminal className="w-5 h-5" />, 
      color: 'text-purple-500', 
      bg: 'bg-purple-500/10', 
      border: 'border-purple-500/30', 
      status: 'coming_soon',
      messages: [
        { type: 'system', text: '⚡ Webhook Recebido: Pagamento Aprovado', time: '16:45' },
        { type: 'outgoing', text: '[AUTO] Seu pagamento foi confirmado! Liberando acesso...', time: '16:45', status: 'sent' },
      ]
    },
  ];

export function InteractiveChat() {
    const [activeChannel, setActiveChannel] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setActiveChannel((prev) => (prev + 1) % channels.length);
        }, 4000);
        return () => clearInterval(interval);
      }, []);

    return (
        <div className="w-full max-w-xl relative perspective-1000 mx-auto mt-12 flex flex-col items-center">
            
            {/* 1. TOP BAR: CHANNELS (Horizontal Hub) */}
            <div className="flex items-center gap-4 mb-6 relative z-20">
              {channels.map((channel, index) => (
                <div 
                  key={channel.id}
                  className={`
                    relative group transition-all duration-500 cursor-default
                    ${activeChannel === index 
                      ? 'scale-110 -translate-y-1' 
                      : 'scale-95 opacity-60 hover:opacity-100'}
                  `}
                >
                  {/* Channel Icon Container */}
                  <div className={`
                    w-12 h-12 rounded-2xl flex items-center justify-center border backdrop-blur-md shadow-lg transition-colors duration-300
                    ${activeChannel === index 
                      ? `${channel.bg} ${channel.border} ${channel.color} shadow-[0_0_15px_rgba(146,214,57,0.3)]` 
                      : 'bg-[#1A1A1A] border-white/5 text-gray-500 hover:border-white/10'}
                  `}>
                    {channel.icon}
                  </div>

                  {/* Status Label for Inactive/Coming Soon */}
                  {channel.status === 'coming_soon' && (
                    <div className="absolute -top-2 -right-2 bg-[#1A1A1A] border border-white/10 rounded-full p-1 shadow-md z-10">
                      <Lock size={10} className="text-gray-500" />
                    </div>
                  )}

                  {/* Connecting Beam Animation (Only for Active) */}
                  {activeChannel === index && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-[2px] h-8 bg-gradient-to-b from-[#92D639] to-transparent animate-pulse z-0"></div>
                  )}

                   {/* Label Tooltip */}
                   <div className={`
                     absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-wider whitespace-nowrap px-2 py-1 rounded bg-black/80 backdrop-blur border border-white/10 transition-opacity z-20
                     ${activeChannel === index ? 'opacity-100' : 'opacity-0'}
                     ${channel.status === 'coming_soon' ? 'text-gray-500' : 'text-[#92D639]'}
                   `}>
                     {channel.status === 'coming_soon' ? 'Em Breve' : channel.name}
                   </div>
                </div>
              ))}
            </div>

            {/* 2. MAIN STAGE: CHAT WINDOW */}
            <div className="relative w-full bg-[#111111] border border-white/10 rounded-3xl shadow-2xl backdrop-blur-xl animate-float overflow-hidden flex flex-col h-[480px] z-10 mt-2">
              
              {/* Chat Header */}
              <div className="bg-[#1A1A1A] p-4 flex items-center justify-between border-b border-white/5 z-20">
                <div className="flex items-center gap-3">
                  <div className="relative transition-all duration-300">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br from-[#92D639] to-[#7ab828] flex items-center justify-center shadow-lg`}>
                       <Zap size={20} className="text-black" fill="currentColor" />
                    </div>
                    {/* Pulsing Dot indicating live connection to active channel */}
                    <div className="absolute -top-1 -right-1">
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#92D639] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-[#92D639] border-2 border-[#1A1A1A]"></span>
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm">RespondeZap AI</h3>
                    <div className="flex items-center gap-1.5 overflow-hidden">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#92D639]"></span>
                      <p className="text-xs text-gray-300">
                        Conectado: <span className="text-[#92D639] font-medium transition-all duration-300">{channels[activeChannel].name}</span>
                      </p>
                    </div>
                  </div>
                </div>
                <MoreVertical className="text-gray-500 w-5 h-5" />
              </div>

              {/* Chat Body (Messages) */}
              <div className="flex-1 p-6 space-y-6 overflow-y-auto flex flex-col justify-end relative bg-gradient-to-b from-[#111111] to-[#0A0A0B]">
                
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>

                {channels[activeChannel].messages.map((msg, index) => (
                  <div 
                    key={`${activeChannel}-${index}`}
                    className={`transition-all duration-500 ease-out transform animate-fade-in-up
                      ${msg.type === 'system' ? 'w-full flex justify-center' : ''}
                      ${msg.type === 'incoming' ? 'self-start' : ''}
                      ${msg.type === 'outgoing' ? 'self-end' : ''}
                    `}
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    {/* System Message */}
                    {msg.type === 'system' && (
                      <div className="bg-[#92D639]/10 border border-[#92D639]/30 text-[#92D639] px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 shadow-[0_0_15px_rgba(146,214,57,0.1)]">
                        <CheckCircle2 size={14} />
                        {msg.text}
                      </div>
                    )}

                    {/* Chat Bubble Incoming (Lead) */}
                    {msg.type === 'incoming' && (
                      <div className="flex flex-col gap-1 max-w-[85%]">
                         <div className="bg-[#2A2A2A] p-3 rounded-2xl rounded-tl-none text-gray-200 text-sm shadow-md border border-white/5 relative group">
                            {msg.text}
                            {/* Source Icon Bubble - Dynamic */}
                            <div className={`absolute -left-3 -top-3 bg-[#1A1A1A] border ${channels[activeChannel].border} p-1.5 rounded-full shadow-lg`}>
                               {React.cloneElement(channels[activeChannel].icon as React.ReactElement, { size: 12, className: channels[activeChannel].color})}
                            </div>
                         </div>
                         <span className="text-[10px] text-gray-600 ml-1">{msg.time}</span>
                      </div>
                    )}

                    {/* Chat Bubble Outgoing (AI) */}
                    {msg.type === 'outgoing' && (
                      <div className="flex flex-col gap-1 items-end max-w-[85%]">
                         <div className="bg-[#92D639] p-3 rounded-2xl rounded-tr-none text-black text-sm shadow-lg shadow-[#92D639]/20 font-medium">
                            {msg.text}
                         </div>
                         <div className="flex items-center gap-1">
                           <span className="text-[10px] text-gray-600">{msg.time}</span>
                           <Check size={12} className="text-[#92D639]" />
                         </div>
                      </div>
                    )}
                  </div>
                ))}

              </div>

              {/* Chat Input (Footer) */}
              <div className="p-4 bg-[#1A1A1A] border-t border-white/5 flex items-center gap-3 z-20">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400">
                  <span className="text-xl">+</span>
                </div>
                <div className="flex-1 bg-black/40 h-10 rounded-full px-4 flex items-center text-xs text-gray-500 border border-white/5">
                  RespondeZap AI está digitando...
                </div>
                <div className="w-10 h-10 rounded-full bg-[#92D639] flex items-center justify-center text-black shadow-lg shadow-[#92D639]/30">
                  <Send size={18} className="ml-0.5" />
                </div>
              </div>

            </div>

            {/* Background Glow behind the Chat */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#92D639]/20 to-[#92D639]/5 rounded-3xl blur-3xl opacity-40 -z-10 transform translate-y-4"></div>
            
          </div>
    )
}
