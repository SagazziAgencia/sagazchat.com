'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  Layers,
  BarChart,
  Briefcase,
  Eye,
  ArrowRight,
  Check,
  PanelLeft,
  MessageSquare,
  EllipsisVertical,
  Bot,
  User,
  Users,
  Megaphone,
  Network,
  GitBranch,
  Play,
  Settings,
  ShieldCheck,
  Search,
  Filter,
  ChevronLeft,
  ChevronRight,
  Columns,
  LayoutGrid
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const sidebarItems = [
    { icon: <LayoutGrid size={20} />, title: "Dashboard", id: 'nav-dashboard'},
    { icon: <MessageSquare size={20} />, title: "Bate Papo", id: 'nav-chat'},
    { icon: <Columns size={20} />, title: "Kanban" },
    { icon: <Bot size={20} />, title: "Atendimento IA" },
    { icon: <GitBranch size={20} />, title: "Fluxos" },
    { icon: <Megaphone size={20} />, title: "Transmissão" },
    { icon: <Users size={20} />, title: "Audiência" },
    { icon: <Briefcase size={20} />, title: "Gerente" },
    { icon: <Play size={20} />, title: "Automação" },
];

const connectionCards = [
    { name: "Iarley", role: "Gerente Comercial", phone: "+55 (31) 86...950", timestamp: "26/11/25 13:21" },
    { name: "Ana", role: "Suporte N1", phone: "+55 (11) 99...123", timestamp: "26/11/25 14:05" },
    { name: "Pedro", role: "Vendas", phone: "+55 (21) 97...888", timestamp: "26/11/25 12:45" },
    { name: "Sofia", role: "Financeiro", phone: "+55 (41) 96...555", timestamp: "26/11/25 10:30" },
];

const chatItems = [
    {
        name: "Carlos Mendes",
        lastMessage: "Fico no aguardo, Carlos!",
        author: "Iarley",
        time: "15:21",
        tags: [
            { name: "Comercial", color: "bg-[#4ade80]" },
            { name: "Iarley", color: "bg-[#22c55e]" }
        ],
        active: true
    },
    {
        name: "Julia Pereira",
        lastMessage: "Já abri seu chamado.",
        author: "Ana",
        time: "14:30",
        tags: [
            { name: "Suporte", color: "bg-[#facc15]" },
            { name: "Ana", color: "bg-[#22c55e]" }
        ]
    },
    {
        name: "Ricardo Silva",
        lastMessage: "Qual o valor do plano anual?",
        author: null,
        time: "12:45",
        tags: [
            { name: "Vendas", color: "bg-[#f87171]" },
            { name: "Pedro", color: "bg-[#22c55e]" }
        ]
    },
    {
        name: "Tech Solutions",
        lastMessage: "Boleto enviado!",
        author: "Sofia",
        time: "10:15",
        tags: [
            { name: "Financeiro", color: "bg-[#a78bfa]" },
            { name: "Sofia", color: "bg-[#22c55e]" }
        ]
    },
]


export function MultiWhatsapp() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const appWindowRef = useRef<HTMLDivElement>(null);

    const stopAutoplay = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
    };

    const startAutoplay = () => {
        stopAutoplay();
        intervalRef.current = setInterval(() => {
            setCurrentSlide(prev => (prev === 0 ? 1 : 0));
        }, 3000);
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
        // Reset autoplay timer on manual interaction
        startAutoplay();
    };

    useEffect(() => {
        startAutoplay();
        const appWindow = appWindowRef.current;
        if (appWindow) {
            appWindow.addEventListener('mouseenter', stopAutoplay);
            appWindow.addEventListener('mouseleave', startAutoplay);
        }
        return () => {
            stopAutoplay();
             if (appWindow) {
                appWindow.removeEventListener('mouseenter', stopAutoplay);
                appWindow.removeEventListener('mouseleave', startAutoplay);
            }
        };
    }, []);


  return (
    <section className="py-20 lg:py-32 bg-white text-gray-800 relative bg-pattern">
      <div className="pattern-mask"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center gap-12">
        
        {/* TOPO: Texto Centralizado */}
        <div className="text-center max-w-4xl mx-auto mb-8 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-4 text-gray-900">
                Múltiplos WhatsApps.<br/>
                <span className="text-green-600">Uma única tela.</span>
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                Centralize seu <span className="font-bold text-gray-800">time comercial</span> em uma <span className="font-bold text-gray-800">única tela</span>. Monitore atendimentos, elimine gargalos e transforme seu WhatsApp em uma <span className="font-bold text-gray-800">máquina de lucro previsível</span>.
            </p>
        </div>

        {/* ABAIXO: Grid de 2 Colunas */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-6 items-center justify-center">

            {/* COLUNA 1 (ESQUERDA): Mockup do App com SLIDER */}
            <div className="relative w-full flex justify-center lg:justify-end order-2 lg:order-1 animate-fade-in-up" style={{animationDelay: '150ms'}}>
                <div ref={appWindowRef} id="app-window" className="bg-white border border-gray-200 rounded-2xl shadow-soft hover:shadow-lg transition-shadow duration-300 h-[580px] w-full max-w-[500px] flex flex-col overflow-hidden">
                    
                    {/* Barra de Título */}
                    <div className="flex justify-between items-center px-4 py-3 bg-gray-50 border-b border-gray-200 h-12 flex-shrink-0">
                        <div className="flex gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-[#ef4444] border border-red-200"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-[#eab308] border border-yellow-200"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-[#22c55e] border border-green-200"></div>
                        </div>
                        <div className="flex gap-1.5 cursor-pointer">
                            <div onClick={() => goToSlide(0)} className={cn("w-2 h-2 rounded-full transition-all duration-300 hover:scale-125", currentSlide === 0 ? 'bg-green-600' : 'bg-gray-300')}></div>
                            <div onClick={() => goToSlide(1)} className={cn("w-2 h-2 rounded-full transition-all duration-300 hover:scale-125", currentSlide === 1 ? 'bg-green-600' : 'bg-gray-300')}></div>
                        </div>
                    </div>

                     {/* Corpo do App */}
                    <div className="flex flex-1 overflow-hidden">
                        
                        {/* SIDEBAR FIXA */}
                        <div className="w-16 bg-white border-r border-gray-200 flex flex-col items-center py-4 gap-4 z-10 flex-shrink-0 text-gray-400">
                           {sidebarItems.map((item, index) => (
                               <div key={index} id={item.id} className={cn("w-full flex justify-center py-3 relative", ( (currentSlide === 0 && item.id === 'nav-dashboard') || (currentSlide === 1 && item.id === 'nav-chat') ) && 'active-sidebar-item')}>
                                   <div className="active-bar"></div>
                                   <i className="sidebar-icon" title={item.title}>{item.icon}</i>
                               </div>
                           ))}
                           <div className="w-full flex justify-center py-3 relative mt-auto">
                                <div className="relative">
                                    <i className="sidebar-icon" title="Configurações"><Settings size={20} /></i>
                                    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
                                </div>
                            </div>
                        </div>
                        
                        {/* SLIDER DE CONTEÚDO */}
                        <div className="flex-1 overflow-hidden relative">
                            <div className="slider-container h-full" style={{ transform: `translateX(-${currentSlide * 50}%)` }} onClick={() => setCurrentSlide(s => s === 0 ? 1 : 0)}>
                                
                                {/* SLIDE 1: Conexões Ativas */}
                                <div className="slide p-6 bg-gray-50 flex flex-col justify-center">
                                    <div className="mb-8 pointer-events-none">
                                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Conexões Ativas</h2>
                                        <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full border border-green-200">
                                            Gerencie os números da sua equipe
                                        </span>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pointer-events-none">
                                        {connectionCards.map((card) => (
                                            <div key={card.name} className="bg-white border border-gray-200 rounded-2xl p-4 flex flex-col items-center text-center shadow-sm">
                                                <div className="w-full flex justify-between items-start mb-1">
                                                    <Bot className="text-gray-400 text-sm" size={16}/>
                                                    <div className="flex items-center gap-1">
                                                        <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
                                                        <EllipsisVertical className="text-gray-400 text-xs ml-1" size={14}/>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2 mb-3 justify-center w-full"> 
                                                    <MessageSquare className="text-gray-800" size={16} />
                                                    <span className="font-bold text-gray-800 text-base">{card.name}</span>
                                                </div>
                                                <Button variant="outline" className="w-full py-1.5 mb-3 border-red-300 text-red-500 text-[11px] rounded-full font-medium hover:bg-red-50 h-auto bg-transparent transition-colors">
                                                    Desconectar
                                                </Button>
                                                <div className="text-center">
                                                    <div className="font-bold text-sm text-gray-800">{card.role}</div>
                                                    <div className="text-[10px] text-gray-500 mt-0.5 font-mono">{card.phone}</div>
                                                    <div className="text-[9px] text-gray-400 mt-0.5">{card.timestamp}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* SLIDE 2: Bate Papo */}
                                <div className="slide bg-white h-full flex flex-col">
                                    <div className="px-5 pt-5 pb-2 pointer-events-none">
                                        <h2 className="text-xl font-bold text-gray-900 mb-1">Bate Papo ao Vivo</h2>
                                        <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full border border-green-200">
                                            Conversas separadas por conexão
                                        </span>
                                    </div>
                                    <div className="px-3 py-3 border-b border-gray-100 flex flex-col gap-2 pointer-events-none">
                                        <div className="flex items-center gap-2">
                                            <div className="relative flex-1">
                                                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"/>
                                                <input type="text" placeholder="Buscar atendimento e mensagens" className="w-full bg-[#f3f4f6] rounded-full py-2 pl-9 pr-3 text-xs text-gray-600 focus:outline-none placeholder-gray-500"/>
                                            </div>
                                            <Filter size={18} className="text-blue-500"/>
                                        </div>
                                    </div>
                                    <div className="flex-1 overflow-y-auto chat-scroll pointer-events-none pb-6">
                                        {chatItems.map((item, index) => (
                                             <div key={index} className={cn("flex flex-col p-3 border-b border-gray-100 hover:bg-gray-50", item.active && "bg-gray-200/30 border-l-4 border-l-transparent hover:border-l-gray-300")}>
                                                 <div className="flex items-start gap-3 w-full">
                                                     <div className="w-10 h-10 rounded-full bg-[#bdbdbd] flex items-center justify-center flex-shrink-0 mt-1">
                                                         <User size={20} className="text-white"/>
                                                     </div>
                                                     <div className="flex-1 min-w-0">
                                                         <div className="flex justify-between items-start mb-1">
                                                             <span className="text-sm font-medium text-gray-800">{item.name}</span>
                                                             <div className="flex items-center gap-1 flex-wrap justify-end">
                                                                {item.tags.map(tag => (
                                                                    <span key={tag.name} className={`text-[9px] font-bold text-white px-2 py-0.5 rounded-full shadow-sm ${tag.color}`}>{tag.name}</span>
                                                                ))}
                                                             </div>
                                                         </div>
                                                         <div className="flex justify-between items-center">
                                                             <p className="text-xs text-gray-600 truncate max-w-[150px]">
                                                                {item.author ? <span className="font-bold text-gray-800">{item.author}:</span> : ''} {item.lastMessage}
                                                             </p>
                                                             <div className="flex items-center gap-1.5 text-gray-500 text-[10px]">
                                                                 <span>{item.time}</span>
                                                                 <ChevronLeft size={12} className="text-gray-400" />
                                                                 <ChevronRight size={12} className="text-gray-400" />
                                                             </div>
                                                         </div>
                                                     </div>
                                                 </div>
                                             </div>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                     <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[10px] text-gray-400 pointer-events-none opacity-50">
                        Clique para alternar a tela
                    </div>
                </div>
            </div>

            {/* COLUNA 2 (DIREITA): 4 Benefícios em Grid + CTA */}
            <div className="flex flex-col gap-8 order-1 lg:order-2 w-full max-w-[500px] lg:max-w-none mx-auto lg:pl-2 animate-fade-in-up" style={{animationDelay: '300ms'}}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4"> 
                    <BenefitCard icon={<Layers />} title="Fim da Mistura de Conversas" iconBg="bg-green-100" iconColor="text-green-600">
                        Cada departamento tem seu espaço. Separe vendas de suporte e mantenha tudo organizado.
                    </BenefitCard>
                    <BenefitCard icon={<BarChart />} title="Decisões Baseadas em Dados" iconBg="bg-gray-100" iconColor="text-gray-600">
                        Com tudo centralizado, veja gargalos, tempos de resposta e performance real da equipe.
                    </BenefitCard>
                    <BenefitCard icon={<Briefcase />} title="Profissionalismo Total" iconBg="bg-emerald-100" iconColor="text-emerald-600">
                        Transmita confiança. Uma operação organizada reflete profissionalismo e aumenta o fechamento.
                    </BenefitCard>
                    <BenefitCard icon={<Eye />} title="Auditoria em Tempo Real" iconBg="bg-purple-100" iconColor="text-purple-600">
                        Monitore o que sua equipe fala. Corrija erros na hora e garanta o padrão de qualidade do seu atendimento.
                    </BenefitCard>
                </div>
                <div className="w-full">
                     <Button size="lg" className="w-full group relative h-auto px-8 py-4 bg-green-600 text-white rounded-xl font-bold text-base hover:bg-green-700 transition-all shadow-lg shadow-green-500/20 hover:shadow-xl hover:shadow-green-500/30 hover:-translate-y-1">
                        Começar Agora
                        <ArrowRight className="inline-block ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <p className="text-gray-500 text-xs mt-3 text-center flex items-center justify-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-green-600" /> 7 dias de garantia.
                    </p>
                </div>
            </div>

        </div>
      </div>
       <style jsx>{`
        .bg-pattern {
            background-image: radial-gradient(#e5e7eb 1.5px, transparent 1.5px);
            background-size: 24px 24px;
        }
        .pattern-mask {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle at center, transparent 0%, white 70%);
            pointer-events: none;
            z-index: 0;
        }
        .slider-container {
            display: flex;
            transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1);
            width: 200%; /* 2 slides */
            cursor: pointer;
        }
        .slide {
            width: 50%; 
            flex-shrink: 0;
        }
        .chat-scroll::-webkit-scrollbar {
            width: 4px;
        }
        .chat-scroll::-webkit-scrollbar-track {
            background: transparent;
        }
        .chat-scroll::-webkit-scrollbar-thumb {
            background: #d1d5db;
            border-radius: 2px;
        }
        .sidebar-icon {
            @apply text-gray-400 hover:text-green-600 text-lg transition-colors cursor-pointer; 
        }
        .active-sidebar-item .sidebar-icon {
            color: #16a34a;
        }
        .active-sidebar-item .active-bar {
            display: block;
        }
        .active-bar {
            display: none;
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            width: 4px; 
            background-color: #16a34a;
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;
        }
       `}</style>
    </section>
  );
}


const BenefitCard = ({
  icon,
  title,
  children,
  iconBg,
  iconColor,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  iconBg: string;
  iconColor: string;
}) => (
    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all hover:border-green-200 group h-full">
        <div className={`w-10 h-10 rounded-lg ${iconBg} flex items-center justify-center ${iconColor} mb-3`}>
            {icon}
        </div>
        <h4 className="font-bold text-gray-900 text-base mb-1">{title}</h4>
        <p className="text-xs text-gray-500 leading-relaxed">{children}</p>
    </div>
);
