import {
  Bot,
  GitBranch,
  Kanban,
  MessagesSquare,
  Repeat2,
  Send,
} from 'lucide-react';
import { AnimateIn } from '@/components/ui/animate-in';

const BENTO_ROWS = [
  {
    modules: [
      {
        icon: MessagesSquare,
        title: 'Bate-papo ao Vivo',
        description:
          'Atendimento em equipe com histórico, etiquetas, transferências e chat interno entre atendentes.',
        mockup: 'Chat',
        large: true,
      },
      {
        icon: GitBranch,
        title: 'Criador de Fluxos',
        description:
          'Editor visual drag-and-drop com 20+ blocos: menus, condições, IA, integrações e handoff.',
        mockup: 'Fluxos',
        large: false,
      },
    ],
  },
  {
    modules: [
      {
        icon: Kanban,
        title: 'CRM Kanban',
        description:
          'Pipeline visual com valor monetário por lead, etapas personalizáveis e automação de colunas.',
        mockup: 'CRM',
        large: false,
      },
      {
        icon: Bot,
        title: 'Agentes IA',
        description:
          'Base de conhecimento treinável, múltiplos agentes com personalidade, transcrição de áudio e contexto longo.',
        mockup: 'IA',
        large: true,
      },
    ],
  },
  {
    modules: [
      {
        icon: Send,
        title: 'Disparos em Massa',
        description:
          'Campanhas segmentadas com anti-bloqueio, intervalo randômico, pausa por lote e importação de planilha.',
        mockup: 'Disparos',
        large: true,
      },
      {
        icon: Repeat2,
        title: 'Remarketing',
        description:
          'Sequências automáticas espaçadas por tempo para reengajar leads frios e nutrir oportunidades.',
        mockup: 'Remarketing',
        large: false,
      },
    ],
  },
];

export function ProductGrid() {
  let moduleIndex = 0;

  return (
    <section className="bg-white py-20 lg:py-[80px]">
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6">
        {/* Header */}
        <div className="mx-auto max-w-[768px] text-center">
          <AnimateIn>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary font-[family-name:var(--font-display)]">
              Conheça por dentro
            </p>
          </AnimateIn>
          <AnimateIn delay={80}>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-[3rem] font-bold leading-[1.1] tracking-[-0.02em] text-slate-950">
              Tudo que sua operação precisa{' '}
              <span className="italic font-medium text-primary">em uma plataforma.</span>
            </h2>
          </AnimateIn>
          <AnimateIn delay={160}>
            <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-slate-600">
              Cada módulo resolve um problema real da operação. Sem firula, sem feature fantasma.
            </p>
          </AnimateIn>
        </div>

        {/* Bento Grid */}
        <div className="mt-16 flex flex-col gap-6">
          {BENTO_ROWS.map((row, rowIdx) => (
            <div
              key={rowIdx}
              className="grid grid-cols-1 gap-6 sm:grid-cols-5"
            >
              {row.modules.map((mod) => {
                const Icon = mod.icon;
                const i = moduleIndex++;
                return (
                  <AnimateIn
                    key={mod.title}
                    delay={i * 80}
                    className={
                      mod.large
                        ? 'sm:col-span-3'
                        : 'sm:col-span-2'
                    }
                  >
                    <div className="flex h-full flex-col overflow-hidden rounded-2xl bg-[#F7F9FC] shadow-[0_1px_4px_rgba(0,0,0,0.04)]">
                      <div className="flex flex-col gap-3 p-7 pb-0">
                        <div className="flex items-center gap-2">
                          <Icon className="h-[18px] w-[18px] text-primary" />
                          <h3 className="text-[18px] font-bold text-slate-900">
                            {mod.title}
                          </h3>
                        </div>
                        <p className="max-w-[500px] text-[14px] leading-[1.5] text-slate-500">
                          {mod.description}
                        </p>
                      </div>
                      <div className="mt-4 flex flex-1 items-center justify-center bg-[#EDF2F7] px-6 py-16">
                        <span className="text-[12px] text-slate-400">
                          [Mockup {mod.mockup}]
                        </span>
                      </div>
                    </div>
                  </AnimateIn>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
