'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
    Workflow,
    ArrowRight,
    Zap,
    GitBranch,
    Bot,
    MousePointerClick,
    MessageSquare,
    Settings,
} from 'lucide-react';
import { AnimateIn } from '@/components/ui/animate-in';
import { cn } from '@/lib/utils';

// ─── Adicione aqui as imagens do criador de fluxo ────────────────────────────
// Coloque os arquivos em /public/images/ e atualize os caminhos abaixo.
// Enquanto as imagens não existirem, um placeholder visual será exibido.
const screenshots = [
    {
        label: 'Criador de Fluxo',
        src: '/images/flow-builder-1.png',
        alt: 'Criador de fluxo visual do Sagazchat',
        placeholderIcon: MousePointerClick,
        placeholderTitle: 'Criador de Fluxo Visual',
        placeholderDesc: 'Arraste e solte blocos para montar seu funil de atendimento.',
    },
    {
        label: 'Bloco de Menu',
        src: '/images/flow-builder-2.png',
        alt: 'Bloco de menu interativo do criador de fluxo',
        placeholderIcon: MessageSquare,
        placeholderTitle: 'Menus Interativos',
        placeholderDesc: 'Crie opções de resposta e ramificações com um clique.',
    },
    {
        label: 'Integrações',
        src: '/images/flow-builder-3.png',
        alt: 'Integrações disponíveis no criador de fluxo',
        placeholderIcon: Settings,
        placeholderTitle: 'Integrações Nativas',
        placeholderDesc: 'Conecte ChatGPT, Webhooks, CRM e muito mais.',
    },
];
// ─────────────────────────────────────────────────────────────────────────────

function ScreenshotPlaceholder({ icon: Icon, title, desc }: { icon: React.ElementType; title: string; desc: string }) {
    return (
        <div className="w-full aspect-[16/10] bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col items-center justify-center gap-4 p-8 text-center">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Icon size={28} className="text-primary" />
            </div>
            <div>
                <p className="text-lg font-bold text-slate-800">{title}</p>
                <p className="text-sm text-slate-500 mt-1 max-w-xs">{desc}</p>
            </div>
            <p className="text-[10px] text-slate-400 mt-2">Adicione screenshots em /public/images/</p>
        </div>
    );
}

function SafeImage({ src, alt, placeholder }: { src: string; alt: string; placeholder: React.ReactNode }) {
    const [error, setError] = useState(false);

    if (error) return <>{placeholder}</>;

    return (
        <Image
            src={src}
            alt={alt}
            width={1280}
            height={800}
            className="w-full h-auto block"
            onError={() => setError(true)}
        />
    );
}

export const FlowBuilderSection = () => {
    const [active, setActive] = useState(0);

    return (
        <section id="features" className="py-24 bg-white text-slate-900 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 xl:gap-16 items-center">

                    {/* LEFT: Text content */}
                    <div className="flex flex-col gap-7">
                        <AnimateIn delay={0}>
                            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
                                Construtor Visual
                            </p>
                        </AnimateIn>

                        <AnimateIn delay={100}>
                            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-[3rem] font-bold tracking-tight leading-[1.15] text-slate-900">
                                Crie fluxos de atendimento{' '}
                                <span className="text-primary">sem escrever código.</span>
                            </h2>
                        </AnimateIn>

                        <AnimateIn delay={200}>
                            <p className="text-base text-slate-600 leading-relaxed max-w-md">
                                Interface de arrastar e soltar com mais de 20 blocos — de mensagens simples a funis de vendas com integrações e IA.
                            </p>
                        </AnimateIn>

                        <AnimateIn delay={300}>
                            <ul className="space-y-3.5">
                                {[
                                    { icon: GitBranch, text: 'Fluxos com condições, menus e ramificações' },
                                    { icon: Bot,       text: 'Integração nativa com ChatGPT e IA' },
                                    { icon: Zap,       text: 'Webhooks, agendamentos e remarketing' },
                                ].map(({ icon: Icon, text }, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-slate-600">
                                        <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                            <Icon size={14} className="text-primary" />
                                        </div>
                                        {text}
                                    </li>
                                ))}
                            </ul>
                        </AnimateIn>

                        <AnimateIn delay={400}>
                            <a href="#pricing" className="inline-flex items-center gap-2.5 rounded-xl bg-primary px-8 py-3.5 text-[15px] font-bold text-white shadow-[0_4px_14px_rgba(23,199,90,0.3)] hover:bg-primary/90 hover:shadow-[0_6px_20px_rgba(23,199,90,0.4)] transition-all">
                                Ver planos
                                <ArrowRight className="w-5 h-5" />
                            </a>
                        </AnimateIn>
                    </div>

                    {/* RIGHT: Screenshot showcase */}
                    <AnimateIn delay={200} duration={700}>
                    <div className="flex flex-col gap-4">

                        {/* Tab pills */}
                        <div className="flex gap-2 flex-wrap">
                            {screenshots.map((s, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActive(i)}
                                    className={cn(
                                        'px-3.5 py-2 rounded-full text-xs font-semibold transition-all border min-h-[44px]',
                                        active === i
                                            ? 'bg-primary text-black border-primary'
                                            : 'text-slate-500 border-slate-200 hover:border-slate-300 hover:text-slate-900'
                                    )}
                                >
                                    {s.label}
                                </button>
                            ))}
                        </div>

                        {/* Image container */}
                        <div className="relative w-full rounded-xl overflow-hidden border border-slate-200 shadow-lg bg-slate-50">
                            {screenshots.map((s, i) => (
                                <div
                                    key={i}
                                    className={cn(
                                        'transition-opacity duration-300',
                                        active === i ? 'opacity-100' : 'opacity-0 absolute inset-0'
                                    )}
                                >
                                    <SafeImage
                                        src={s.src}
                                        alt={s.alt}
                                        placeholder={
                                            <ScreenshotPlaceholder
                                                icon={s.placeholderIcon}
                                                title={s.placeholderTitle}
                                                desc={s.placeholderDesc}
                                            />
                                        }
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Dot indicators */}
                        <div className="flex justify-center gap-2 mt-1">
                            {screenshots.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActive(i)}
                                    aria-label={`Slide ${i + 1}`}
                                    className={cn(
                                        'h-2.5 rounded-full transition-all',
                                        active === i ? 'bg-primary w-5' : 'bg-slate-300 hover:bg-slate-400 w-2.5'
                                    )}
                                />
                            ))}
                        </div>
                    </div>
                    </AnimateIn>

                </div>
            </div>
        </section>
    );
};
