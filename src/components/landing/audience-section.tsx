'use client';

import React from 'react';
import { Users, Upload, Download, UserPlus, ArrowRight, Search, Tag, Phone, Mail, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
    {
        icon: Users,
        title: 'Base Completa',
        description: 'Visualize nome, telefone, data e e-mail de todos os contatos.',
        color: 'text-teal-400',
        bg: 'bg-teal-500/10',
    },
    {
        icon: Upload,
        title: 'Importação em Massa',
        description: 'Traga leads via planilha CSV/XLSX com nome, telefone e etiquetas.',
        color: 'text-blue-400',
        bg: 'bg-blue-500/10',
    },
    {
        icon: Download,
        title: 'Exportação Completa',
        description: 'Gere planilhas com todos os dados para usar onde precisar.',
        color: 'text-violet-400',
        bg: 'bg-violet-500/10',
    },
    {
        icon: Phone,
        title: 'Início Direto',
        description: 'Adicione um contato e inicie o atendimento na hora.',
        color: 'text-amber-400',
        bg: 'bg-amber-500/10',
    },
];

const contacts = [
    { name: 'Maria Silva', phone: '+55 11 9****-1234', email: 'maria@email.com', tags: ['VIP', 'Cliente'], date: '12/01/2025' },
    { name: 'João Santos', phone: '+55 21 9****-5678', email: 'joao@email.com', tags: ['Lead Quente'], date: '18/01/2025' },
    { name: 'Ana Costa', phone: '+55 31 9****-9012', email: 'ana@email.com', tags: ['Promoção', 'Novo'], date: '25/01/2025' },
    { name: 'Carlos Lima', phone: '+55 41 9****-3456', email: 'carlos@email.com', tags: ['Suporte'], date: '02/02/2025' },
];

const tagColors: Record<string, string> = {
    'VIP': 'bg-amber-500/20 text-amber-400 border-amber-500/30',
    'Cliente': 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    'Lead Quente': 'bg-red-500/20 text-red-400 border-red-500/30',
    'Promoção': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    'Novo': 'bg-sky-500/20 text-sky-400 border-sky-500/30',
    'Suporte': 'bg-orange-500/20 text-orange-400 border-orange-500/30',
};

export const AudienceSection = () => {
    return (
        <section className="relative py-20 md:py-28 bg-[#0a0f13] overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-[radial-gradient(rgba(20,184,166,0.04)_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-teal-600/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Left — Copy */}
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-[11px] font-bold uppercase tracking-wider mb-6">
                            <Users size={12} /> Gestão de Público
                        </div>

                        <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-[3rem] font-bold tracking-tight leading-[1.15] text-white mb-6">
                            Sua base de contatos,{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">
                                organizada e acessível.
                            </span>
                        </h2>

                        <p className="text-base text-slate-400 leading-relaxed mb-10 max-w-lg">
                            Todos os leads que entraram em contato ficam armazenados na sua Audiência. Importe, exporte, edite e inicie conversas diretamente.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4 mb-10">
                            {features.map((f, i) => (
                                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-teal-500/20 transition-colors">
                                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${f.bg}`}>
                                        <f.icon size={18} className={f.color} />
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-white mb-0.5">{f.title}</div>
                                        <div className="text-xs text-slate-400 leading-relaxed">{f.description}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Button size="lg" className="group w-full sm:w-auto relative px-8 py-4 bg-primary text-black rounded-lg font-bold text-lg hover:bg-[#82c232] transition-all shadow-[0_0_20px_rgba(146,214,57,0.4)] hover:shadow-[0_0_40px_rgba(146,214,57,0.6)] hover:-translate-y-1 h-auto">
                            <UserPlus size={20} />
                            Assinar Agora
                            <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </div>

                    {/* Right — Contacts Table Mockup */}
                    <div className="flex justify-center">
                        <div className="w-full max-w-[480px]">
                            <div className="bg-[#111921] rounded-2xl border border-gray-800 shadow-2xl overflow-hidden">
                                {/* Header */}
                                <div className="px-5 py-4 border-b border-gray-800 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="text-sm font-bold text-white">Audiência</div>
                                        <div className="px-2 py-0.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-[10px] font-bold text-teal-400">
                                            1.247 contatos
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <button className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] transition-colors" aria-label="Buscar contatos">
                                            <Search size={14} className="text-slate-400" />
                                        </button>
                                        <button className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors" aria-label="Adicionar contato">
                                            <UserPlus size={14} className="text-primary" />
                                        </button>
                                    </div>
                                </div>

                                {/* Action bar */}
                                <div className="px-5 py-2.5 border-b border-gray-800/50 flex items-center gap-2 flex-wrap">
                                    <button className="px-3 py-1.5 rounded-lg bg-white/[0.04] text-[11px] font-medium text-slate-400 hover:bg-white/[0.08] transition-colors flex items-center gap-1.5">
                                        <Upload size={11} /> Importar
                                    </button>
                                    <button className="px-3 py-1.5 rounded-lg bg-white/[0.04] text-[11px] font-medium text-slate-400 hover:bg-white/[0.08] transition-colors flex items-center gap-1.5">
                                        <Download size={11} /> Exportar
                                    </button>
                                    <button className="px-3 py-1.5 rounded-lg bg-white/[0.04] text-[11px] font-medium text-slate-400 hover:bg-white/[0.08] transition-colors flex items-center gap-1.5">
                                        <Tag size={11} /> Filtrar por etiqueta
                                    </button>
                                </div>

                                {/* Contacts List */}
                                <div className="divide-y divide-gray-800/50">
                                    {contacts.map((c, i) => (
                                        <div key={i} className="px-5 py-3.5 flex items-center gap-3 hover:bg-white/[0.02] transition-colors">
                                            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-slate-700 to-slate-600 flex items-center justify-center text-white text-xs font-bold shrink-0">
                                                {c.name.split(' ').map(n => n[0]).join('')}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center gap-2 flex-wrap">
                                                    <span className="text-sm font-medium text-white truncate">{c.name}</span>
                                                    {c.tags.map((tag, ti) => (
                                                        <span key={ti} className={`px-1.5 py-0.5 rounded text-[9px] font-bold border ${tagColors[tag] || 'bg-slate-500/20 text-slate-400 border-slate-500/30'}`}>
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                                <div className="flex items-center gap-3 mt-0.5">
                                                    <span className="text-[11px] text-slate-500 flex items-center gap-1">
                                                        <Phone size={9} /> {c.phone}
                                                    </span>
                                                    <span className="text-[11px] text-slate-600 hidden sm:flex items-center gap-1">
                                                        <Mail size={9} /> {c.email}
                                                    </span>
                                                </div>
                                            </div>
                                            <button className="p-1.5 rounded hover:bg-white/[0.06] transition-colors shrink-0" aria-label="Mais opções">
                                                <MoreHorizontal size={14} className="text-slate-500" />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
