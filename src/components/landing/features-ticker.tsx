export function FeaturesTicker() {
  const stats = [
    { value: '24/7', label: 'Vendas automáticas' },
    { value: '+30%', label: 'Conversão média' },
    { value: 'Zero', label: 'Leads perdidos' },
    { value: '10min', label: 'Setup inicial' },
  ];

  return (
    <div className="relative z-20 py-12 section-divider">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <span className="text-2xl md:text-3xl font-bold text-white tracking-tight">{stat.value}</span>
              <span className="block text-xs text-white/30 mt-1 font-medium">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
