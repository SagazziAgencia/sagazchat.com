'use client';

import React from 'react';
import { 
  Workflow, 
  Zap, 
  MessageSquare, 
  LayoutGrid, 
  Users, 
  Repeat, 
  Rocket, 
  Star, 
  Shuffle, 
  Bookmark, 
  MessageCircle, 
  Briefcase, 
  Save, 
  Power, 
  Filter, 
  Link, 
  Timer, 
  Bell, 
  Wrench, 
  Share2, 
  Globe, 
  Bot, 
  Calendar, 
  Coins, 
  Sparkles, 
  Copy, 
  Trash2, 
  Scissors, 
  RotateCcw, 
  Share,
  CheckCircle2,
  MousePointer2,
  UserPlus,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export const FlowBuilderSection = () => {

  const features = [
    "Interface visual de arrastar e soltar",
    "Automações poderosas sem código",
    "Teste A/B nativo",
    "Integração com ChatGPT",
    "Disparo de Webhooks",
    "Agendamento Inteligente"
  ];

  const sidebarItems = [
    { icon: Rocket, label: "Início", color: "text-green-600 bg-green-50 border-green-200" },
    { icon: Star, label: "Conteúdo", color: "text-red-500 bg-red-50 border-red-200" },
    { icon: LayoutGrid, label: "Menu", color: "text-purple-600 bg-purple-50 border-purple-200" },
    { icon: Shuffle, label: "Randomizador", color: "text-cyan-600 bg-cyan-50 border-cyan-200" },
    { icon: Bookmark, label: "Etiqueta", color: "text-pink-500 bg-pink-50 border-pink-200" },
    { icon: MessageCircle, label: "Controlador de Chat", color: "text-blue-600 bg-blue-50 border-blue-200" },
    { icon: Briefcase, label: "Departamentos", color: "text-orange-700 bg-orange-50 border-orange-200" },
    { icon: Save, label: "Salvar", color: "text-emerald-600 bg-emerald-50 border-emerald-200" },
    { icon: Power, label: "Integração", color: "text-blue-800 bg-blue-50 border-blue-200" },
    { icon: Repeat, label: "Remarketing", color: "text-orange-500 bg-orange-50 border-orange-200" },
    { icon: Filter, label: "Condição", color: "text-sky-600 bg-sky-50 border-sky-200" },
    { icon: Link, label: "Conexão de fluxo", color: "text-violet-600 bg-violet-50 border-violet-200" },
    { icon: Timer, label: "Atraso inteligente", color: "text-lime-600 bg-lime-50 border-lime-200" },
    { icon: Bell, label: "Notificação", color: "text-teal-600 bg-teal-50 border-teal-200" },
    { icon: Wrench, label: "Manipulador", color: "text-yellow-600 bg-yellow-50 border-yellow-200" },
    { icon: Share2, label: "Distribuidor", color: "text-cyan-500 bg-cyan-50 border-cyan-200" },
    { icon: Globe, label: "Variável global", color: "text-green-700 bg-green-50 border-green-200" },
    { icon: Bot, label: "OpenAI", color: "text-gray-700 bg-gray-50 border-gray-200" },
    { icon: Calendar, label: "Agenda", color: "text-purple-800 bg-purple-50 border-purple-200" },
    { icon: Coins, label: "Pixel", color: "text-yellow-500 bg-yellow-50 border-yellow-200" },
    { icon: Sparkles, label: "Assistente IA", color: "text-fuchsia-600 bg-fuchsia-50 border-fuchsia-200" },
  ];

  return (
    <div className="min-h-screen font-sans text-white selection:bg-[#92D639] selection:text-black relative overflow-x-hidden flex flex-col justify-center bg-[#0a0f13] py-20">
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(146,214,57,0.03)_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none z-0"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#92D639]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* CABEÇALHO */}
        <div className="text-center max-w-4xl mx-auto mb-12 animate-fadeIn">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#92D639]/10 border border-[#92D639]/30 text-[#92D639] text-[11px] font-bold uppercase tracking-wider mb-6">
                <Workflow size={12} /> Construtor Visual
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white mb-6">
                O Criador de Fluxos Mais <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#92D639] to-[#baff68]">
                    Completo e Intuitivo do Brasil.
                </span>
            </h1>

            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto mb-10">
                Dê vida às suas estratégias com uma ferramenta de arrastar e soltar. Crie desde um simples "Olá" até funis de vendas complexos com integrações, tudo em uma única tela.
            </p>

            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 max-w-4xl mx-auto">
                {features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-[#92D639] shrink-0" />
                        <span className="text-sm text-slate-300 font-medium">{feature}</span>
                    </div>
                ))}
            </div>

            <div className="mt-10">
                <Button size="lg" className="group w-full sm:w-auto relative px-8 py-4 bg-[#92D639] text-black rounded-lg font-bold text-lg hover:bg-[#82c232] transition-all shadow-[0_0_20px_rgba(146,214,57,0.4)] hover:shadow-[0_0_40px_rgba(146,214,57,0.6)] hover:-translate-y-1 h-auto">
                    <UserPlus size={20} />
                    Assinar Agora
                    <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
            </div>
        </div>

        {/* ÁREA VISUAL DO FLUXO */}
        <div className="relative w-full max-w-[1100px] h-[650px] bg-[#11161b] rounded-3xl border border-gray-800 shadow-2xl overflow-hidden flex flex-col z-20 group">
            
            {/* Header */}
            <div className="h-16 border-b border-gray-200 bg-white flex items-center px-6 justify-between z-20 shrink-0">
                <div className="flex items-center gap-4">
                    <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
                    </div>
                    <div className="h-6 w-[1px] bg-gray-200"></div>
                    <div className="flex items-center gap-2 text-gray-500 text-sm font-bold uppercase tracking-wider">
                        <Rocket size={16} className="text-[#92D639]" />
                        <span>Fluxo Principal</span>
                    </div>
                </div>

                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-4 pr-6 border-r border-gray-200">
                        <button className="text-[#92D639] hover:bg-green-50 p-1.5 rounded transition-colors"><Scissors size={20} strokeWidth={2.5} /></button>
                        <button className="text-[#92D639] hover:bg-green-50 p-1.5 rounded transition-colors"><RotateCcw size={20} strokeWidth={2.5} /></button>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full text-xs font-bold transition-colors border border-gray-200">
                            Compartilhar fluxo <Share size={14} />
                        </button>
                        <button className="px-6 py-2 bg-[#92D639] hover:bg-[#82c232] text-black rounded-full text-xs font-bold transition-colors shadow-sm shadow-green-200">
                            Salvar
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex-1 flex overflow-hidden">
                
                {/* Sidebar */}
                <div className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col z-30 shrink-0">
                    <div className="p-4 border-b border-gray-100">
                        <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Ferramentas</div>
                    </div>
                    <div className="flex-1 overflow-y-auto no-scrollbar p-3 space-y-2">
                        {sidebarItems.map((item, i) => (
                            <div key={i} className={`p-2.5 rounded-lg border flex items-center gap-3 text-xs font-bold cursor-grab hover:shadow-sm transition-all bg-white ${item.color.replace('bg-', 'hover:bg-').split(' ')[2] ? item.color : 'border-gray-200 text-gray-600 hover:bg-gray-50'}`}>
                                <item.icon size={16} className={item.color.split(' ')[0]} />
                                <span className="text-gray-700">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Canvas Area */}
                <div className="flex-1 bg-[#f0f2f5] relative overflow-auto no-scrollbar cursor-grab active:cursor-grabbing">
                    <div className="relative min-w-[1200px] min-h-[800px]">
                        
                        {/* Grid */}
                        <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>

                        <div className="absolute top-10 left-10 scale-100 origin-top-left">
                            
                            {/* Lines (SVG) - Conexões Ajustadas e Visíveis */}
                            <svg className="absolute inset-0 pointer-events-none z-0 w-full h-full overflow-visible">
                                {/* 1. Início (242, 195) -> Conteúdo (300, 195) */}
                                <path d="M 242 195 L 300 195" fill="none" stroke="#94a3b8" strokeWidth="4" strokeDasharray="8,8" strokeLinecap="round" className="opacity-100" />
                                
                                {/* 2. Conteúdo (460, 195) -> Menu (520, 135) */}
                                <path d="M 460 195 C 490 195, 490 135, 520 135" fill="none" stroke="#94a3b8" strokeWidth="4" strokeDasharray="8,8" strokeLinecap="round" className="opacity-100" />

                                {/* 3. Menu Opt1 (744, 160) -> Vendas (800, 160) */}
                                <path d="M 744 160 L 800 160" fill="none" stroke="#94a3b8" strokeWidth="4" strokeDasharray="8,8" strokeLinecap="round" className="opacity-100" />

                                {/* 4. Menu Opt2 (744, 210) -> Suporte (800, 270) */}
                                <path d="M 744 210 C 770 210, 770 270, 800 270" fill="none" stroke="#94a3b8" strokeWidth="4" strokeDasharray="8,8" strokeLinecap="round" className="opacity-100" />

                                {/* 5. Menu Inact (744, 260) -> Remarketing (800, 380) */}
                                <path d="M 744 260 C 760 260, 760 380, 800 380" fill="none" stroke="#94a3b8" strokeWidth="4" strokeDasharray="8,8" strokeLinecap="round" className="opacity-100" />
                            </svg>

                            {/* --- NÓS (Coordenadas Fixas para alinhamento) --- */}

                            {/* 1. Início - Top 150 */}
                            <div className="absolute top-[150px] left-[50px] w-48 bg-[#e6fffa] border-l-4 border-l-[#38b2ac] border-y border-r border-[#e2e8f0] rounded-r-lg shadow-sm p-4 z-10">
                                <div className="flex items-center gap-2 mb-2 text-[#2c7a7b]">
                                    <Rocket size={18} />
                                    <span className="text-sm font-bold">Início do fluxo</span>
                                </div>
                                <div className="text-[11px] text-gray-600 leading-tight">Este bloco marca o início do seu fluxo!</div>
                                {/* Saída */}
                                <div className="absolute top-1/2 -right-1.5 w-3 h-3 bg-[#38b2ac] rounded-full border-2 border-white translate-y-[-50%]"></div>
                            </div>

                            {/* 2. Conteúdo - Top 150 */}
                            <div className="absolute top-[150px] left-[300px] w-40 bg-[#fff5f5] border-t-4 border-t-[#fc8181] border-x border-b border-[#e2e8f0] rounded-b-lg shadow-sm p-2 z-10">
                                <div className="flex justify-between items-start mb-2 px-1">
                                    <div className="flex items-center gap-1 text-[#c53030]">
                                        <Star size={14} />
                                        <span className="text-xs font-bold">Conteúdo</span>
                                    </div>
                                    <div className="flex gap-1 text-gray-400"><Copy size={12} /> <Trash2 size={12} /></div>
                                </div>
                                <div className="bg-[#fed7d7] text-[#c53030] text-[11px] p-2 rounded text-center font-medium shadow-sm">Oi tudo bem?</div>
                                {/* Entrada */}
                                <div className="absolute top-1/2 -left-1.5 w-3 h-3 bg-[#c53030] rounded-full border-2 border-white translate-y-[-50%]"></div>
                                {/* Saída */}
                                <div className="absolute top-1/2 -right-1.5 w-3 h-3 bg-[#c53030] rounded-full border-2 border-white translate-y-[-50%]"></div>
                            </div>

                            {/* 3. Menu - Top 50 */}
                            <div className="absolute top-[50px] left-[520px] w-56 bg-[#f3e8ff] border border-[#9f7aea] rounded-lg shadow-md z-20">
                                <div className="bg-[#d6bcfa] px-3 py-2 rounded-t-lg flex justify-between items-center text-[#553c9a]">
                                    <div className="flex items-center gap-2"><LayoutGrid size={16} /><span className="text-xs font-bold">Menu (Lista)</span></div>
                                    <div className="flex gap-2 opacity-60"><Copy size={12} /> <Trash2 size={12} /></div>
                                </div>
                                <div className="flex text-center py-2 border-b border-purple-200 bg-white">
                                    <div className="flex-1 border-r border-purple-100"><div className="text-[12px] font-bold text-[#553c9a]">0</div><div className="text-[9px] text-gray-400 font-bold uppercase">Enviado</div></div>
                                    <div className="flex-1"><div className="text-[12px] font-bold text-[#553c9a]">0%</div><div className="text-[9px] text-gray-400 font-bold uppercase">Clicada</div></div>
                                </div>
                                <div className="p-3 space-y-3 bg-white rounded-b-lg">
                                    <div className="text-[10px] text-[#553c9a] font-bold uppercase">Texto da pergunta</div>
                                    <div className="text-xs text-gray-600 font-medium">O que você deseja?</div>
                                    
                                    {/* Opção 1 (Y Absoluto aprox 160) */}
                                    <div className="relative group">
                                        <div className="bg-[#e9d8fd] text-[#553c9a] text-[10px] px-2 py-1.5 rounded font-bold flex justify-between items-center shadow-sm">
                                            <span>Resposta 1</span>
                                            <span className="bg-white px-1.5 py-0.5 rounded text-[8px] border border-purple-200 text-gray-500 font-bold">CTR 0%</span>
                                        </div>
                                        <div className="text-[9px] text-gray-500 mt-1 ml-1 font-medium">Falar com vendas</div>
                                        <div className="absolute top-2.5 -right-4 w-2.5 h-2.5 bg-[#805ad5] rounded-full border-2 border-white ring-2 ring-purple-100"></div>
                                    </div>

                                    {/* Opção 2 (Y Absoluto aprox 210) */}
                                    <div className="relative group">
                                        <div className="bg-[#e9d8fd] text-[#553c9a] text-[10px] px-2 py-1.5 rounded font-bold flex justify-between items-center shadow-sm">
                                            <span>Resposta 2</span>
                                            <span className="bg-white px-1.5 py-0.5 rounded text-[8px] border border-purple-200 text-gray-500 font-bold">CTR 0%</span>
                                        </div>
                                        <div className="text-[9px] text-gray-500 mt-1 ml-1 font-medium">Falar com suporte</div>
                                        <div className="absolute top-2.5 -right-4 w-2.5 h-2.5 bg-[#805ad5] rounded-full border-2 border-white ring-2 ring-purple-100"></div>
                                    </div>

                                    {/* Inatividade (Y Absoluto aprox 260) */}
                                    <div className="relative mt-2 pt-2 border-t border-purple-100">
                                        <div className="bg-[#fed7d7] text-[#c53030] text-[10px] px-2 py-1.5 rounded font-bold flex justify-between items-center shadow-sm">
                                            <span>Saída por inativid...</span>
                                            <span className="bg-white px-1.5 py-0.5 rounded text-[8px] border border-red-200 text-gray-500 font-bold">2 Horas</span>
                                        </div>
                                        <div className="text-[9px] text-gray-400 mt-1 leading-tight px-1">Fluxo disparado quando o usuário não responde em 2 Horas.</div>
                                        <div className="absolute top-4 -right-4 w-2.5 h-2.5 bg-[#c53030] rounded-full border-2 border-white ring-2 ring-red-100"></div>
                                    </div>
                                </div>
                                {/* Entrada */}
                                <div className="absolute top-[85px] -left-1.5 w-3 h-3 bg-[#805ad5] rounded-full border-2 border-white"></div>
                            </div>

                            {/* 4. Depto Vendas - Top 120 */}
                            <div className="absolute top-[120px] left-[800px] w-48 bg-white border border-[#dd6b20] rounded-lg shadow-sm z-10">
                                <div className="bg-[#431407] px-3 py-2 rounded-t-lg flex justify-between items-center text-[#ffedd5]">
                                    <div className="flex items-center gap-2"><Briefcase size={14} /><span className="text-xs font-bold">Departamentos</span></div>
                                    <div className="flex gap-2 opacity-60"><Copy size={10} /> <Trash2 size={10} /></div>
                                </div>
                                <div className="p-4 text-center">
                                    <div className="text-[10px] text-[#9c4221] mb-2 font-bold uppercase tracking-wide">Atribuir departamento</div>
                                    <div className="bg-[#ffedd5] text-[#c05621] text-xs font-bold py-2 px-3 rounded border border-[#fed7aa] shadow-sm">Venda</div>
                                </div>
                                <div className="absolute top-[40px] -left-1.5 w-2.5 h-2.5 bg-[#c05621] rounded-full border-2 border-white"></div>
                                 {/* Saída */}
                                <div className="absolute top-[40px] -right-1.5 w-2.5 h-2.5 bg-[#c05621] rounded-full border-2 border-white"></div>
                            </div>

                            {/* 5. Depto Suporte - Top 230 */}
                            <div className="absolute top-[230px] left-[800px] w-48 bg-white border border-[#dd6b20] rounded-lg shadow-sm z-10">
                                <div className="bg-[#431407] px-3 py-2 rounded-t-lg flex justify-between items-center text-[#ffedd5]">
                                    <div className="flex items-center gap-2"><Briefcase size={14} /><span className="text-xs font-bold">Departamentos</span></div>
                                    <div className="flex gap-2 opacity-60"><Copy size={10} /> <Trash2 size={10} /></div>
                                </div>
                                <div className="p-4 text-center">
                                    <div className="text-[10px] text-[#9c4221] mb-2 font-bold uppercase tracking-wide">Atribuir departamento</div>
                                    <div className="bg-[#ffedd5] text-[#c05621] text-xs font-bold py-2 px-3 rounded border border-[#fed7aa] shadow-sm">Suporte</div>
                                </div>
                                <div className="absolute top-[40px] -left-1.5 w-2.5 h-2.5 bg-[#c05621] rounded-full border-2 border-white"></div>
                            </div>

                            {/* 6. Remarketing - Top 340 */}
                            <div className="absolute top-[340px] left-[800px] w-48 bg-white border border-[#ed8936] rounded-lg shadow-sm z-10">
                                <div className="px-3 py-2 bg-[#fff7ed] rounded-t-lg border-b border-[#ed8936]/20 flex justify-between items-center text-[#ed8936]">
                                    <div className="flex items-center gap-2"><Repeat size={16} /><span className="text-xs font-bold">Remarketing</span></div>
                                    <div className="flex gap-2 opacity-60"><Copy size={12} /> <Trash2 size={12} /></div>
                                </div>
                                <div className="p-3 text-center space-y-1.5">
                                    <div className="bg-[#ffedd5] text-[#c05621] text-[10px] py-1.5 rounded font-medium">Inscrever</div>
                                    <div className="text-[10px] text-gray-400 font-bold uppercase">em</div>
                                    <div className="bg-[#ffedd5] text-[#c05621] text-xs font-bold py-2 rounded border border-[#fed7aa] shadow-sm">Recuperação</div>
                                </div>
                                <div className="absolute top-[40px] -left-1.5 w-2.5 h-2.5 bg-[#ed8936] rounded-full border-2 border-white"></div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

        </div>

      </div>
       <style jsx>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};
