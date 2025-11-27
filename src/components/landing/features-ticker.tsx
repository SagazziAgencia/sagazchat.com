export function FeaturesTicker() {
  return (
    <div className="border-y border-[#92D639]/20 bg-[#92D639]/10 backdrop-blur-sm py-8 relative z-20">
       <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-[#92D639]/20">
             <div className="flex flex-col items-center gap-2 group cursor-default">
                <span className="text-3xl font-bold text-white group-hover:text-white/80 transition-colors">24/7</span>
                <span className="text-xs text-[#92D639] uppercase tracking-widest">Vendas Automáticas</span>
             </div>
             <div className="flex flex-col items-center gap-2 group cursor-default">
                <span className="text-3xl font-bold text-white group-hover:text-white/80 transition-colors">+30%</span>
                <span className="text-xs text-[#92D639] uppercase tracking-widest">Conversão Média</span>
             </div>
             <div className="flex flex-col items-center gap-2 group cursor-default">
                <span className="text-3xl font-bold text-white group-hover:text-white/80 transition-colors">Zero</span>
                <span className="text-xs text-[#92D639] uppercase tracking-widest">Leads Perdidos</span>
             </div>
             <div className="flex flex-col items-center gap-2 group cursor-default">
                <span className="text-3xl font-bold text-white group-hover:text-white/80 transition-colors">Breve</span>
                <span className="text-xs text-[#92D639] uppercase tracking-widest">API Oficial</span>
             </div>
          </div>
       </div>
    </div>
  );
}
