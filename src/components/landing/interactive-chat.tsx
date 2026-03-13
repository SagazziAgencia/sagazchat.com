"use client";

import React, { useState, useEffect } from 'react';
import {
  MessageCircle,
  Instagram,
  Mail,
  MessageSquare,
  Terminal,
  Lock,
  Check,
  CheckCheck,
  Bot
} from 'lucide-react';

const channels = [
  { id: 'whatsapp', name: 'WhatsApp', icon: MessageCircle, color: '#17C75A', active: true },
  { id: 'instagram', name: 'Instagram', icon: Instagram, color: '#E1306C', active: false },
  { id: 'messenger', name: 'Messenger', icon: MessageSquare, color: '#0084FF', active: false },
  { id: 'gmail', name: 'Gmail', icon: Mail, color: '#EA4335', active: false },
  { id: 'api', name: 'API', icon: Terminal, color: '#A855F7', active: false },
];

const conversations = [
  {
    lead: { name: 'Maria', message: 'Olá! Vi o anúncio e quero saber o preço.' },
    response: 'Oi Maria! 👋 O plano começa em R$ 97/mês. Quer testar grátis?',
  },
  {
    lead: { name: 'João', message: 'Funciona para loja de roupas?' },
    response: 'Perfeito para moda! 🛍️ Automatiza atendimento 24h.',
  },
  {
    lead: { name: 'Ana', message: 'Quanto tempo leva para configurar?' },
    response: 'Em 5 minutos você já está vendendo! ⚡',
  },
];

export function InteractiveChat() {
  const [activeChannel, setActiveChannel] = useState(0);
  const [activeConversation, setActiveConversation] = useState(0);
  const [showResponse, setShowResponse] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setIsTyping(true), 800);
    const timer2 = setTimeout(() => {
      setIsTyping(false);
      setShowResponse(true);
    }, 1800);

    const interval = setInterval(() => {
      setShowResponse(false);
      setIsTyping(false);
      setActiveConversation((prev) => (prev + 1) % conversations.length);
      setActiveChannel((prev) => (prev + 1) % channels.length);

      setTimeout(() => setIsTyping(true), 800);
      setTimeout(() => {
        setIsTyping(false);
        setShowResponse(true);
      }, 1800);
    }, 5000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearInterval(interval);
    };
  }, []);

  const current = conversations[activeConversation];

  return (
    <div className="w-full max-w-sm mx-auto relative">

      {/* Channel Icons - Barra no topo */}
      <div className="flex items-center justify-center gap-3 mb-4">
        {channels.map((channel, index) => {
          const Icon = channel.icon;
          const isActive = activeChannel === index;
          return (
            <div
              key={channel.id}
              className={`relative transition-all duration-300 ${isActive ? 'scale-110' : 'opacity-40'}`}
            >
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-300 ${isActive
                  ? 'bg-slate-100 border-slate-200'
                  : 'bg-slate-50 border-slate-100'
                  }`}
                style={{ color: isActive ? channel.color : '#64748b' }}
              >
                <Icon size={18} />
              </div>
              {!channel.active && (
                <div className="absolute -top-1 -right-1 bg-white rounded-full p-0.5 border border-slate-200 shadow-sm">
                  <Lock size={8} className="text-slate-400" />
                </div>
              )}
              {isActive && (
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[9px] font-semibold text-slate-500 whitespace-nowrap">
                  {channel.active ? channel.name : 'Em breve'}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Phone Mockup */}
      <div className="relative bg-[#0A0A0A] rounded-[2.5rem] p-1.5 shadow-2xl border border-white/10 mt-6">
        {/* Notch */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-20" />

        {/* Screen */}
        <div className="bg-[#111] rounded-[2rem] overflow-hidden">

          {/* Status Bar */}
          <div className="h-10 flex items-center justify-between px-6 pt-1 text-white text-[11px] font-medium">
            <span>9:41</span>
            <div className="flex items-center gap-1">
              <div className="flex gap-[2px]">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-[3px] bg-white rounded-sm" style={{ height: `${3 + i * 2}px` }} />
                ))}
              </div>
              <span className="text-[9px] ml-0.5">5G</span>
            </div>
          </div>

          {/* Chat Header */}
          <div className="px-3 py-2.5 flex items-center gap-2.5 border-b border-white/5">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-[#6db82d] flex items-center justify-center flex-shrink-0">
              <Bot size={18} className="text-black" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-white text-sm">Sagazchat</h3>
              <p className="text-[11px] text-primary">Online • Automático</p>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="h-[280px] px-3 py-4 flex flex-col justify-end space-y-3">

            {/* Lead Message */}
            <div className="flex items-end gap-2" key={`lead-${activeConversation}`}>
              <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center text-[10px] text-white font-bold flex-shrink-0">
                {current.lead.name.charAt(0)}
              </div>
              <div className="max-w-[80%]">
                <div className="bg-[#1E1E1E] px-3 py-2 rounded-2xl rounded-bl-sm text-white text-[13px] leading-snug">
                  {current.lead.message}
                </div>
                <span className="text-[9px] text-gray-600 ml-1 mt-0.5 block">{current.lead.name}</span>
              </div>
            </div>

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-end">
                <div className="bg-primary/20 px-3 py-2 rounded-2xl rounded-br-sm flex gap-1">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}

            {/* AI Response */}
            {showResponse && (
              <div className="flex justify-end" key={`response-${activeConversation}`}>
                <div className="max-w-[80%]">
                  <div className="bg-primary px-3 py-2 rounded-2xl rounded-br-sm text-black text-[13px] leading-snug font-medium">
                    {current.response}
                  </div>
                  <div className="flex items-center justify-end gap-0.5 mt-0.5 mr-1">
                    <span className="text-[9px] text-gray-600">Agora</span>
                    <CheckCheck size={10} className="text-primary" />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input Bar */}
          <div className="px-3 py-2.5 bg-[#0A0A0A] border-t border-white/5 flex items-center gap-2">
            <div className="flex-1 h-9 px-3 rounded-full bg-[#1A1A1A] border border-white/10 flex items-center text-[12px] text-gray-500">
              Digite uma mensagem...
            </div>
            <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
              <MessageCircle size={16} className="text-black" />
            </div>
          </div>

          {/* Home Indicator */}
          <div className="h-6 flex items-center justify-center">
            <div className="w-28 h-1 bg-white/20 rounded-full" />
          </div>
        </div>
      </div>

      {/* Subtle Glow */}
      <div className="absolute inset-0 -z-10 bg-primary/5 blur-[80px] rounded-full" />
    </div>
  );
}


