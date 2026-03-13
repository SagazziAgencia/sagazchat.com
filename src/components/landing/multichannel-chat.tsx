'use client';

import React, { useState, useEffect } from 'react';
import { Send, CheckCheck, Instagram, MessageCircle, Phone, Video, MoreVertical, Smile } from 'lucide-react';
import { cn } from '@/lib/utils';

// Types for our chat states
type ChannelType = 'whatsapp' | 'instagram' | 'messenger';

interface MultichannelChatProps {
    lockedChannelId?: ChannelType;
    className?: string;
    pauseOnHover?: boolean;
}

interface Message {
    id: string;
    text: string;
    sender: 'user' | 'bot';
    timestamp: string;
}

// Custom WhatsApp Icon Component
const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.521.074-.792.372c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871-.118.571-.355 1.758-2.153 2.006-2.875.247-.722.247-1.352.173-1.475z" />
    </svg>
);

const channels: { id: ChannelType; name: string; color: string; icon: React.ReactNode; active: boolean }[] = [
    {
        id: 'whatsapp',
        name: 'WhatsApp Business',
        color: 'bg-[#00a884]', // WhatsApp default green
        icon: <WhatsAppIcon className="w-5 h-5 text-white" />, // Placeholder for WA icon if needed
        active: true,
    },
    {
        id: 'instagram',
        name: 'Instagram Direct',
        color: 'bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045]',
        icon: <Instagram className="w-5 h-5 text-white" />,
        active: false,
    },
    {
        id: 'messenger',
        name: 'Messenger',
        color: 'bg-[#0084FF]',
        icon: <MessageCircle className="w-5 h-5 text-white" />,
        active: false,
    },
];

// Conversation logic script
const conversationSequence: Message[] = [
    { id: '1', text: 'Quero vender mais por aqui!', sender: 'user', timestamp: '10:00' },
    { id: '2', text: 'A Sagaz Chat automatiza tudo 24/7. 🚀', sender: 'bot', timestamp: '10:00' },
    { id: '3', text: 'E funciona em quais canais?', sender: 'user', timestamp: '10:01' },
    { id: '4', text: 'WhatsApp, Insta e Messenger integrados!', sender: 'bot', timestamp: '10:01' },
];

const CHANNEL_ROTATION_MS = 8000;

export function MultichannelChat({
    lockedChannelId,
    className,
    pauseOnHover = true,
}: MultichannelChatProps) {
    const [currentChannelIndex, setCurrentChannelIndex] = useState(0);
    const [messages, setMessages] = useState<Message[]>([]);
    const [isTyping, setIsTyping] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
    const lockedChannelIndex = lockedChannelId
        ? channels.findIndex((channel) => channel.id === lockedChannelId)
        : -1;
    const isChannelLocked = lockedChannelIndex >= 0;

    const currentChannel = channels[isChannelLocked ? lockedChannelIndex : currentChannelIndex];

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

        const updateMotionPreference = () => {
            setPrefersReducedMotion(mediaQuery.matches);
        };

        updateMotionPreference();
        mediaQuery.addEventListener('change', updateMotionPreference);

        return () => mediaQuery.removeEventListener('change', updateMotionPreference);
    }, []);

    // Cycle channels more slowly and pause on hover/focus
    useEffect(() => {
        if (isPaused || prefersReducedMotion || isChannelLocked) {
            return;
        }

        const interval = setInterval(() => {
            setCurrentChannelIndex((prev) => (prev + 1) % channels.length);
            setMessages([]); // Reset messages on switch
        }, CHANNEL_ROTATION_MS);

        return () => clearInterval(interval);
    }, [isPaused, prefersReducedMotion, isChannelLocked]);

    // Simulate typing flow when channel changes or resets
    useEffect(() => {
        let timeouts: NodeJS.Timeout[] = [];

        // Only animate messages if the channel is "active" (WhatsApp for now, based on user request to distinguish)
        // Actually, making them all animate is cooler, but "Coming Soon" ones might have overlay.
        // Let's animate all for the visual effect, but add "Coming Soon" overlay for others.

        const runSequence = () => {
            if (prefersReducedMotion) {
                setIsTyping(false);
                setMessages(conversationSequence);
                return;
            }

            setMessages([]);
            setIsTyping(false);

            let delay = 500;

            conversationSequence.forEach((msg) => {
                // Typing indicator before bot messages
                if (msg.sender === 'bot') {
                    timeouts.push(setTimeout(() => setIsTyping(true), delay));
                    delay += 1200;
                    timeouts.push(setTimeout(() => {
                        setIsTyping(false);
                        setMessages(prev => [...prev, msg]);
                    }, delay));
                    delay += 500;
                } else {
                    // User messages appear "sent"
                    timeouts.push(setTimeout(() => {
                        setMessages(prev => [...prev, msg]);
                    }, delay));
                    delay += 1000;
                }
            });
        };

        runSequence();

        return () => timeouts.forEach(clearTimeout);
    }, [currentChannelIndex, prefersReducedMotion]);

    return (
        <div
            className={cn(
                "relative mx-auto h-[600px] w-[300px] overflow-hidden rounded-[3rem] border-[8px] border-slate-900 bg-slate-900 shadow-2xl ring-1 ring-white/10",
                className,
            )}
            onMouseEnter={() => {
                if (pauseOnHover) setIsPaused(true);
            }}
            onMouseLeave={() => {
                if (pauseOnHover) setIsPaused(false);
            }}
            onFocusCapture={() => {
                if (pauseOnHover) setIsPaused(true);
            }}
            onBlurCapture={(event) => {
                if (pauseOnHover && !event.currentTarget.contains(event.relatedTarget as Node | null)) {
                    setIsPaused(false);
                }
            }}
        >

            {/* Dynamic Island / Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-1/3 bg-slate-950 rounded-b-xl z-50 flex items-center justify-center space-x-2">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-800"></div>
                <div className="w-8 h-1.5 rounded-full bg-slate-800"></div>
            </div>

            {/* Screen Content */}
            <div className="relative h-full w-full bg-[#EFE7DD] flex flex-col font-sans">
                {/* Background Image/Color depends on channel */}
                <div className={cn(
                    "absolute inset-0 transition-colors duration-500",
                    currentChannel.id === 'whatsapp' ? "bg-[#EFE7DD] opacity-100" : "bg-white"
                )}>
                    {/* Subtle pattern for WA if we wanted, for now plain color or default texture */}
                    {currentChannel.id === 'whatsapp' && (
                        <div className="absolute inset-0 opacity-[0.06] bg-[url('https://camo.githubusercontent.com/854b9f7127926b479f626db9fc0c2794348578652cc23851b4c95f0828773950/68747470733a2f2f7765622e77686174736170702e636f6d2f696d672f62672d636861742d74696c652d6461726b5f61346265353132653731393562366237333364393131303234323539366166642e706e67')] bg-repeat" style={{ backgroundSize: '400px' }}></div>
                    )}
                </div>

                {/* Dynamic Header */}
                <div className={cn(
                    "relative z-20 px-4 pt-10 pb-3 flex items-center justify-between text-white shadow-sm transition-colors duration-500",
                    currentChannel.color
                )}>
                    <div className="flex items-center gap-3">
                        {/* Profile/Logo Area */}
                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm border border-white/20 shadow-md">
                            {/* Brand LOGO */}
                            {currentChannel.id === 'whatsapp' && <WhatsAppIcon className="w-6 h-6 fill-current" />}
                            {currentChannel.id === 'instagram' && <Instagram className="w-6 h-6" />}
                            {currentChannel.id === 'messenger' && <MessageCircle className="w-6 h-6 fill-current" />}
                        </div>
                        <div>
                            <h3 className="font-bold text-xs leading-none drop-shadow-sm whitespace-nowrap">{currentChannel.name}</h3>
                            <p className="text-[9px] opacity-90 mt-0.5 font-medium">
                                {isTyping ? 'digitando...' : 'online'}
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-4 opacity-80">
                        <Video className="w-5 h-5" />
                        <Phone className="w-5 h-5" />
                        <MoreVertical className="w-5 h-5" />
                    </div>
                </div>

                {/* Current Channel Indicator Badge (if not active/ready) */}
                {!currentChannel.active && (
                    <div className="absolute top-24 left-1/2 z-30 -translate-x-1/2 rounded-full border border-white/10 bg-slate-900/80 px-3 py-1 text-xs font-bold text-white shadow-xl backdrop-blur">
                        EM BREVE
                    </div>
                )}

                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-4 space-y-3 z-10">
                    {messages.map((msg) => (
                        <div
                            key={msg.id}
                            className={cn(
                                "flex w-full animate-fade-in-up motion-reduce:animate-none",
                                msg.sender === 'user' ? "justify-end" : "justify-start"
                            )}
                        >
                            <div className={cn(
                                "max-w-[80%] px-3 py-2 rounded-lg text-sm shadow-sm relative",
                                msg.sender === 'user'
                                    ? (currentChannel.id === 'whatsapp' ? "bg-[#d9fdd3] text-slate-800 rounded-tr-none"
                                        : currentChannel.id === 'messenger' ? "bg-[#0084FF] text-white rounded-br-none"
                                            : "bg-slate-100 text-slate-900 rounded-br-none border border-slate-200")
                                    : (currentChannel.id === 'whatsapp' ? "bg-white text-slate-800 rounded-tl-none"
                                        : "bg-white text-slate-800 border border-slate-100 rounded-bl-none")
                            )}>
                                <p>{msg.text}</p>
                                <span className={cn(
                                    "text-[9px] float-right mt-1 ml-2 flex items-center gap-0.5",
                                    msg.sender === 'user' && currentChannel.id === 'messenger' ? "text-blue-100" : "text-slate-400"
                                )}>
                                    {msg.timestamp}
                                    {msg.sender === 'user' && (
                                        <CheckCheck className={cn("w-3 h-3", currentChannel.id === 'whatsapp' ? "text-blue-500" : "currentColor")} />
                                    )}
                                </span>
                            </div>
                        </div>
                    ))}
                    {isTyping && (
                        <div className="flex justify-start animate-fade-in-up motion-reduce:animate-none">
                            <div className="bg-white px-4 py-3 rounded-lg rounded-tl-none shadow-sm flex gap-1">
                                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce motion-reduce:animate-none [animation-delay:-0.3s]"></span>
                                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce motion-reduce:animate-none [animation-delay:-0.15s]"></span>
                                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce motion-reduce:animate-none"></span>
                            </div>
                        </div>
                    )}
                </div>

                {/* Input Area */}
                <div className="p-3 bg-white z-20 flex items-center gap-2 border-t border-slate-100">
                    <div className="p-2 rounded-full hover:bg-slate-50 transition-colors text-slate-500">
                        <Smile className="w-5 h-5" />
                    </div>
                    <div className="flex-1 bg-slate-100 rounded-full px-4 py-2 text-sm text-slate-400">
                        Mensagem...
                    </div>
                    <div className={cn(
                        "p-2.5 rounded-full text-white shadow-sm transition-colors duration-300",
                        currentChannel.color
                    )}>
                        <Send className="w-4 h-4 fill-current" />
                    </div>
                </div>

                {/* Home Indicator */}
                <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-slate-800/20 rounded-full z-50"></div>

            </div>
        </div>
    );
}


