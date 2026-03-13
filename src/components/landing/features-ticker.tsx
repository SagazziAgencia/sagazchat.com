import { AnimateIn } from '@/components/ui/animate-in';

const metrics = [
  {
    label: 'Atendimento',
    title: 'Equipe em paralelo no mesmo numero',
    value: 'Multiatendimento',
  },
  {
    label: 'Automação',
    title: 'Fluxos, tags e webhooks no mesmo painel',
    value: 'Operação integrada',
  },
  {
    label: 'CRM',
    title: 'Pipeline para acompanhar lead até o fechamento',
    value: 'Visibilidade real',
  },
  {
    label: 'Escala',
    title: 'Base pronta para campanhas e remarketing',
    value: 'Crescimento previsível',
  },
];

export function FeaturesTicker() {
  return (
    <section className="relative z-20 border-y border-slate-200 bg-slate-50 py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {metrics.map((item, index) => (
            <AnimateIn key={item.label} delay={index * 80}>
              <div className="rounded-2xl border border-slate-200 bg-white px-4 py-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
                  {item.label}
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-900">{item.value}</p>
                <p className="mt-1 text-xs leading-5 text-slate-500">{item.title}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
