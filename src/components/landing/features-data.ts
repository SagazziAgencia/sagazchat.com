/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  FEATURE SHOWCASE - CONFIGURAÇÃO                            ║
 * ║                                                              ║
 * ║  Para adicionar/trocar imagens:                              ║
 * ║  1. Edite o campo "imageUrl" de cada slide abaixo            ║
 * ║  2. Você pode usar caminho local OU URL completa             ║
 * ║                                                              ║
 * ║  Exemplo local: '/images/features/minha-tela.webp'           ║
 * ║  Exemplo externo: 'https://cdn.seudominio.com/tela.webp'     ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

export type FeatureSlide = {
  label: string;
  title: string;
  description: string;
  imageUrl: string;
};

export const features: FeatureSlide[] = [
  {
    label: 'Automações',
    title: 'Automatize a jornada inteira, do primeiro contato ao pós-venda',
    description:
      'Dispare mensagens por evento, recupere leads que esfriaram, responda comentários no Instagram e mantenha o atendimento rodando sem depender de tarefas manuais.',
    imageUrl: 'https://i.ibb.co/270YPZs0/Group-1.png',
  },
  {
    label: 'Criador de Fluxos',
    title: 'Monte fluxos visuais sem depender de programador',
    description:
      'Crie menus, condições, respostas automáticas, handoff para humanos e integrações em um editor drag and drop que sua equipe entende rápido.',
    imageUrl: 'https://i.ibb.co/zWB2VBfR/Captura-de-tela-2026-03-18-123058.png',
  },
  {
    label: 'Visão Completa',
    title: 'Acompanhe atendimento, funil e performance em uma única visão',
    description:
      'Veja o que entrou, o que está em negociação, onde o time trava e quais oportunidades precisam de ação para a operação escalar com previsibilidade.',
    imageUrl: 'https://i.ibb.co/BVRqmkZf/Captura-de-tela-2026-03-18-110447.png',
  },

  // ── Adicione mais features aqui ──────────────────────────
  // {
  //   label: 'Nome da Feature',
  //   title: 'Título que aparece à esquerda',
  //   description: 'Texto descritivo.',
  //   imageUrl: '/images/features/nome-do-arquivo.webp',
  //   imageUrl: 'https://cdn.seudominio.com/slides/nome-do-arquivo.webp',
  // },
];
