'use client';

import React from 'react';
import { Instagram, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.521.074-.792.372c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871-.118.571-.355 1.758-2.153 2.006-2.875.247-.722.247-1.352.173-1.475z" />
    </svg>
);

const channels = [
    {
        name: 'WhatsApp',
        icon: <WhatsAppIcon className="w-5 h-5 md:w-6 md:h-6" />,
        color: 'bg-[#25D366]',
        active: true,
    },
    {
        name: 'Instagram',
        icon: <Instagram className="w-5 h-5 md:w-6 md:h-6" />,
        color: 'bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]',
        active: false,
        status: 'Em breve',
    },
    {
        name: 'Messenger',
        icon: <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />,
        color: 'bg-[#0084FF]',
        active: false,
        status: 'Em breve',
    },
];

export function MultichannelOrbit() {
    return (
        <div className="relative w-full aspect-square max-w-[500px] flex items-center justify-center">

            {/* Orbit Circles */}
            <div className="absolute inset-0 rounded-full border border-slate-200 opacity-40 scale-105"></div>
            <div className="absolute inset-0 rounded-full border border-slate-100 opacity-40 scale-[0.55]"></div>

            {/* Radar Pulse Effect */}
            <div className="absolute z-10 w-28 h-28 md:w-40 md:h-40 bg-primary/20 rounded-full animate-radar-pulse"></div>
            <div className="absolute z-10 w-28 h-28 md:w-40 md:h-40 bg-primary/10 rounded-full animate-radar-pulse" style={{ animationDelay: '1s' }}></div>

            {/* Center Logo */}
            <div className="relative z-20 w-28 h-28 md:w-40 md:h-40 bg-white rounded-full flex items-center justify-center shadow-[0_0_40px_-5px_rgba(0,0,0,0.1)] border border-slate-50 group transition-shadow duration-500 hover:shadow-[0_0_50px_-10px_rgba(146,214,57,0.4)]">
                <div className="flex flex-col items-center">
                    <span className="text-xl md:text-3xl font-black text-slate-900 tracking-tighter">SAGAZ</span>
                    <span className="text-[10px] md:text-sm font-bold text-primary -mt-1 tracking-[0.2em] uppercase">Chat</span>
                </div>
            </div>

            {/* Floating Particles (Messages traveling to center) */}
            {[0, 1, 2].map((i) => (
                <div
                    key={`particle-${i}`}
                    className="absolute inset-0 animate-orbit pointer-events-none"
                    style={{
                        animationDuration: '35s',
                        animationDelay: `-${i * 10}s`,
                    }}
                >
                    <div
                        className="absolute top-1/2 left-1/2 w-3 h-3 md:w-4 md:h-4 bg-primary rounded-full shadow-lg flex items-center justify-center animate-particle-in opacity-0"
                        style={{
                            animationDelay: `${i * 2}s`,
                        }}
                    >
                        <div className="w-1.5 h-1.5 bg-white rounded-full" />
                    </div>
                </div>
            ))}

            {/* Orbiting Icons */}
            {channels.map((channel, index) => {
                const angle = (index * (360 / channels.length));
                return (
                    <div
                        key={channel.name}
                        className="absolute inset-0 animate-orbit"
                        style={{
                            animationDelay: `-${index * (25 / channels.length)}s`,
                            animationDuration: '25s',
                        }}
                    >
                        <div
                            className={cn(
                                "absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-default",
                                !channel.active && "opacity-60 grayscale-[0.8]"
                            )}
                            style={{
                                transform: `rotate(${angle}deg) translateY(-185px) rotate(-${angle}deg)`,
                            }}
                        >
                            <div className="animate-counter-orbit flex flex-col items-center"
                                style={{ animationDuration: '25s', animationDelay: `-${index * (25 / channels.length)}s` }}>

                                <div className={cn(
                                    "w-10 h-10 md:w-16 md:h-16 rounded-2xl flex items-center justify-center text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl",
                                    channel.color
                                )}>
                                    {channel.icon}
                                </div>

                                <div className="mt-2 text-center bg-white/80 backdrop-blur-sm px-2 py-0.5 rounded-full border border-slate-100 shadow-sm">
                                    <span className="block text-[10px] md:text-xs font-bold text-slate-900 leading-none">
                                        {channel.name}
                                    </span>
                                    {channel.status && (
                                        <span className="text-[8px] md:text-[9px] font-bold text-slate-400 uppercase tracking-tighter">
                                            {channel.status}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}

            {/* Additional Decorative Particles */}
            <div className="absolute inset-0 animate-[spin_40s_linear_infinite] opacity-30 pointer-events-none">
                <div className="absolute top-10 left-20 w-1.5 h-1.5 rounded-full bg-primary"></div>
                <div className="absolute bottom-20 right-10 w-2 h-2 rounded-full bg-blue-400"></div>
                <div className="absolute top-1/2 -right-4 w-1 h-1 rounded-full bg-pink-400"></div>
            </div>
        </div>
    );
}


