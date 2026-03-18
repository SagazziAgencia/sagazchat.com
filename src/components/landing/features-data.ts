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
    title: 'Automatize webhook, remarketing e Instagram',
    description:
      'Crie automações para webhook, remarketing, Instagram e outras jornadas com gatilhos inteligentes. Dispare mensagens, recupere oportunidades e mantenha sua operação rodando sem depender de ações manuais.',
    imageUrl: 'https://i.ibb.co/270YPZs0/Group-1.png',
  },
  {
    label: 'Criador de Fluxos',
    title: 'Crie automações visuais sem código',
    description:
      'Monte fluxos de atendimento inteligentes com nosso editor visual drag & drop. Conecte condições, respostas automáticas e integrações em minutos.',
    imageUrl: 'https://i.ibb.co/zWB2VBfR/Captura-de-tela-2026-03-18-123058.png',
  },
  {
    label: 'Visão Completa',
    title: 'Tenha controle total da operação',
    description:
      'Acompanhe cada conversa, analise performance da equipe e identifique gargalos. Tudo que você precisa para escalar seu atendimento.',
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
