import { Zap, Users, UserCog, ArrowRight } from 'lucide-react';
import { AnimateIn } from '@/components/ui/animate-in';

const features = [
  {
    icon: Zap,
    title: 'Atalhos Inteligentes',
    description: 'Comandos rápidos que disparam funis completos de vendas com uma palavra.',
  },
  {
    icon: Users,
    title: 'Gestão de Grupos',
    description: 'Exporte membros, envie conteúdo direcionado e gerencie comunidades.',
  },
  {
    icon: UserCog,
    title: 'Audiência Centralizada',
    description: 'Base de contatos unificada com tags, filtros e importação em massa.',
  },
];

export function ConsolidatedFeatures() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <div className="text-center mb-12">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary mb-4">
              E muito mais
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Tudo para escalar sua operação
            </h2>
          </div>
        </AnimateIn>

        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((f, index) => (
            <AnimateIn key={f.title} from="scale" delay={100 + index * 80}>
              <div className="flex items-start gap-4 p-5 rounded-xl border border-slate-200 bg-slate-50 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <f.icon size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1">{f.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{f.description}</p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={400}>
          <div className="mt-8 text-center">
            <a href="#pricing" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
              Ver todos os recursos nos planos
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
