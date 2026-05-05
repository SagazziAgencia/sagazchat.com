export type Plan = {
  id: string;
  connections: number;
  name: string;
  price: string;
  priceSuffix: string;
  subtext: string;
  link: string;
  savings: string | null;
};

export const basicPlansData: Plan[] = [
  { id: 'basic', connections: 1, name: 'Basic - 1 slot', price: '117,00', priceSuffix: '/1º mês', subtext: 'de R$147 no mês seguinte', link: '#enterprise', savings: null },
  { id: 'basic2', connections: 2, name: 'Basic - 2 slots', price: '197,00', priceSuffix: '/1º mês', subtext: 'de R$247 no mês seguinte', link: '#enterprise', savings: null },
  { id: 'basic3', connections: 3, name: 'Basic - 3 slots', price: '257,00', priceSuffix: '/1º mês', subtext: 'de R$317 no mês seguinte', link: '#enterprise', savings: null },
  { id: 'basic4', connections: 4, name: 'Basic - 4 slots', price: '317,00', priceSuffix: '/1º mês', subtext: 'de R$397 no mês seguinte', link: '#enterprise', savings: null },
  { id: 'basic5', connections: 5, name: 'Basic - 5 slots', price: '377,00', priceSuffix: '/1º mês', subtext: 'de R$467 no mês seguinte', link: '#enterprise', savings: null },
  { id: 'basic6', connections: 6, name: 'Basic - 6 slots', price: '427,00', priceSuffix: '/1º mês', subtext: 'de R$537 no mês seguinte', link: '#enterprise', savings: null },
  { id: 'basic7', connections: 7, name: 'Basic - 7 slots', price: '477,00', priceSuffix: '/1º mês', subtext: 'de R$597 no mês seguinte', link: '#enterprise', savings: null },
  { id: 'basic8', connections: 8, name: 'Basic - 8 slots', price: '537,00', priceSuffix: '/1º mês', subtext: 'de R$667 no mês seguinte', link: '#enterprise', savings: null },
  { id: 'basic9', connections: 9, name: 'Basic - 9 slots', price: '587,00', priceSuffix: '/1º mês', subtext: 'de R$737 no mês seguinte', link: '#enterprise', savings: null },
  { id: 'basic10', connections: 10, name: 'Basic - 10 slots', price: '637,00', priceSuffix: '/1º mês', subtext: 'de R$797 no mês seguinte', link: '#enterprise', savings: null },
  { id: 'basic11', connections: 11, name: 'Basic - 11 slots', price: '687,00', priceSuffix: '/1º mês', subtext: 'de R$857 no mês seguinte', link: '#enterprise', savings: null },
  { id: 'basic12', connections: 12, name: 'Basic - 12 slots', price: '737,00', priceSuffix: '/1º mês', subtext: 'de R$917 no mês seguinte', link: '#enterprise', savings: null },
  { id: 'basic13', connections: 13, name: 'Basic - 13 slots', price: '777,00', priceSuffix: '/1º mês', subtext: 'de R$967 no mês seguinte', link: '#enterprise', savings: null },
  { id: 'basic14', connections: 14, name: 'Basic - 14 slots', price: '817,00', priceSuffix: '/1º mês', subtext: 'de R$1.027 no mês seguinte', link: '#enterprise', savings: null },
  { id: 'basic15', connections: 15, name: 'Basic - 15 slots', price: '867,00', priceSuffix: '/1º mês', subtext: 'de R$1.087 no mês seguinte', link: '#enterprise', savings: null },
  { id: 'basic16', connections: 16, name: 'Basic - 16 slots', price: '917,00', priceSuffix: '/1º mês', subtext: 'de R$1.147 no mês seguinte', link: '#enterprise', savings: null },
  { id: 'basic17', connections: 17, name: 'Basic - 17 slots', price: '957,00', priceSuffix: '/1º mês', subtext: 'de R$1.197 no mês seguinte', link: '#enterprise', savings: null },
  { id: 'basic18', connections: 18, name: 'Basic - 18 slots', price: '1.007,00', priceSuffix: '/1º mês', subtext: 'de R$1.257 no mês seguinte', link: '#enterprise', savings: null },
  { id: 'basic19', connections: 19, name: 'Basic - 19 slots', price: '1.057,00', priceSuffix: '/1º mês', subtext: 'de R$1.317 no mês seguinte', link: '#enterprise', savings: null },
  { id: 'basic20', connections: 20, name: 'Basic - 20 slots', price: '1.097,00', priceSuffix: '/1º mês', subtext: 'de R$1.367 no mês seguinte', link: '#enterprise', savings: null },
];

export const proPlansData: Plan[] = [
  { id: 'pro', connections: 1, name: 'PRO - 1 slot', price: '157,00', priceSuffix: '/1º mês', subtext: 'de R$197 no mês seguinte', link: '#enterprise', savings: null },
  { id: 'pro2', connections: 2, name: 'PRO - 2 slots', price: '237,00', priceSuffix: '/1º mês', subtext: 'de R$297 no mês seguinte', link: '#enterprise', savings: null },
  { id: 'pro3', connections: 3, name: 'PRO - 3 slots', price: '297,00', priceSuffix: '/1º mês', subtext: 'de R$377 no mês seguinte', link: '#enterprise', savings: null },
  { id: 'pro4', connections: 4, name: 'PRO - 4 slots', price: '377,00', priceSuffix: '/1º mês', subtext: 'de R$467 no mês seguinte', link: '#enterprise', savings: null },
  { id: 'pro5', connections: 5, name: 'PRO - 5 slots', price: '437,00', priceSuffix: '/1º mês', subtext: 'de R$547 no mês seguinte', link: '#enterprise', savings: null },
  { id: 'pro6', connections: 6, name: 'PRO - 6 slots', price: '497,00', priceSuffix: '/1º mês', subtext: 'de R$617 no mês seguinte', link: '#enterprise', savings: null },
  { id: 'pro7', connections: 7, name: 'PRO - 7 slots', price: '537,00', priceSuffix: '/1º mês', subtext: 'de R$677 no mês seguinte', link: '#enterprise', savings: null },
  { id: 'pro8', connections: 8, name: 'PRO - 8 slots', price: '597,00', priceSuffix: '/1º mês', subtext: 'de R$747 no mês seguinte', link: '#enterprise', savings: null },
  { id: 'pro9', connections: 9, name: 'PRO - 9 slots', price: '657,00', priceSuffix: '/1º mês', subtext: 'de R$817 no mês seguinte', link: '#enterprise', savings: null },
  { id: 'pro10', connections: 10, name: 'PRO - 10 slots', price: '697,00', priceSuffix: '/1º mês', subtext: 'de R$877 no mês seguinte', link: '#enterprise', savings: null },
  { id: 'pro11', connections: 11, name: 'PRO - 11 slots', price: '747,00', priceSuffix: '/1º mês', subtext: 'de R$937 no mês seguinte', link: '#enterprise', savings: null },
  { id: 'pro12', connections: 12, name: 'PRO - 12 slots', price: '797,00', priceSuffix: '/1º mês', subtext: 'de R$997 no mês seguinte', link: '#enterprise', savings: null },
  { id: 'pro13', connections: 13, name: 'PRO - 13 slots', price: '837,00', priceSuffix: '/1º mês', subtext: 'de R$1.047 no mês seguinte', link: '#enterprise', savings: null },
  { id: 'pro14', connections: 14, name: 'PRO - 14 slots', price: '887,00', priceSuffix: '/1º mês', subtext: 'de R$1.107 no mês seguinte', link: '#enterprise', savings: null },
  { id: 'pro15', connections: 15, name: 'PRO - 15 slots', price: '937,00', priceSuffix: '/1º mês', subtext: 'de R$1.167 no mês seguinte', link: '#enterprise', savings: null },
  { id: 'pro16', connections: 16, name: 'PRO - 16 slots', price: '977,00', priceSuffix: '/1º mês', subtext: 'de R$1.227 no mês seguinte', link: '#enterprise', savings: null },
  { id: 'pro17', connections: 17, name: 'PRO - 17 slots', price: '1.017,00', priceSuffix: '/1º mês', subtext: 'de R$1.277 no mês seguinte', link: '#enterprise', savings: null },
  { id: 'pro18', connections: 18, name: 'PRO - 18 slots', price: '1.067,00', priceSuffix: '/1º mês', subtext: 'de R$1.337 no mês seguinte', link: '#enterprise', savings: null },
  { id: 'pro19', connections: 19, name: 'PRO - 19 slots', price: '1.117,00', priceSuffix: '/1º mês', subtext: 'de R$1.397 no mês seguinte', link: '#enterprise', savings: null },
  { id: 'pro20', connections: 20, name: 'PRO - 20 slots', price: '1.157,00', priceSuffix: '/1º mês', subtext: 'de R$1.447 no mês seguinte', link: '#enterprise', savings: null },
];

export const basicIaPlansData: Plan[] = [
  { id: 'basic_5M', connections: 1, name: 'Basic + IA - 1 slot', price: '167,00', priceSuffix: '/1º mês', subtext: 'de R$207 no mês seguinte', link: '#enterprise', savings: null },
  { id: 'basic2_5M', connections: 2, name: 'Basic + IA - 2 slots', price: '247,00', priceSuffix: '/1º mês', subtext: 'de R$307 no mês seguinte', link: '#enterprise', savings: null },
  { id: 'basic3_5M', connections: 3, name: 'Basic + IA - 3 slots', price: '297,00', priceSuffix: '/1º mês', subtext: 'de R$377 no mês seguinte', link: '#enterprise', savings: null },
  { id: 'basic4_5M', connections: 4, name: 'Basic + IA - 4 slots', price: '367,00', priceSuffix: '/1º mês', subtext: 'de R$457 no mês seguinte', link: '#enterprise', savings: null },
  { id: 'basic5_5M', connections: 5, name: 'Basic + IA - 5 slots', price: '417,00', priceSuffix: '/1º mês', subtext: 'de R$527 no mês seguinte', link: '#enterprise', savings: null },
];

export const proIaPlansData: Plan[] = [
  { id: 'pro_10M', connections: 1, name: 'PRO + IA - 1 slot', price: '297,00', priceSuffix: '/1º mês', subtext: 'de R$377 no mês seguinte', link: '#enterprise', savings: null },
  { id: 'pro2_10M', connections: 2, name: 'PRO + IA - 2 slots', price: '377,00', priceSuffix: '/1º mês', subtext: 'de R$467 no mês seguinte', link: '#enterprise', savings: null },
  { id: 'pro3_10M', connections: 3, name: 'PRO + IA - 3 slots', price: '447,00', priceSuffix: '/1º mês', subtext: 'de R$557 no mês seguinte', link: '#enterprise', savings: null },
  { id: 'pro4_10M', connections: 4, name: 'PRO + IA - 4 slots', price: '517,00', priceSuffix: '/1º mês', subtext: 'de R$647 no mês seguinte', link: '#enterprise', savings: null },
  { id: 'pro5_10M', connections: 5, name: 'PRO + IA - 5 slots', price: '577,00', priceSuffix: '/1º mês', subtext: 'de R$717 no mês seguinte', link: '#enterprise', savings: null },
];

export type Tier = 'basic' | 'pro' | 'basicIa' | 'proIa';

export function getPlanArray(tier: Tier): Plan[] {
  switch (tier) {
    case 'basic': return basicPlansData;
    case 'pro': return proPlansData;
    case 'basicIa': return basicIaPlansData;
    case 'proIa': return proIaPlansData;
  }
}

export function getPlan(tier: Tier, connections: number): Plan {
  const arr = getPlanArray(tier);
  return arr[Math.min(Math.max(connections, 1), arr.length) - 1];
}

export const tierMeta: Record<Tier, { label: string; short: string }> = {
  basic: { label: 'Basic', short: 'Basic' },
  pro: { label: 'PRO', short: 'PRO' },
  basicIa: { label: 'Basic + IA', short: 'Basic+IA' },
  proIa: { label: 'PRO + IA', short: 'PRO+IA' },
};

export const featureMatrix: Array<{
  category: string;
  rows: Array<{
    label: string;
    basic: string | boolean;
    pro: string | boolean;
    basicIa: string | boolean;
    proIa: string | boolean;
  }>;
}> = [
  {
    category: 'Volume',
    rows: [
      { label: 'Slots de canal', basic: '1 a 20', pro: '1 a 20', basicIa: '1 a 5', proIa: '1 a 5' },
      { label: 'Webhooks por mês', basic: '15.000 por conexão', pro: '30.000 por conexão', basicIa: '15.000 por conexão', proIa: '30.000 por conexão' },
      { label: 'Acessos simultâneos', basic: '5', pro: '15', basicIa: '5', proIa: '15' },
      { label: 'Mensagens e robôs', basic: 'ilimitado', pro: 'ilimitado', basicIa: 'ilimitado', proIa: 'ilimitado' },
    ],
  },
  {
    category: 'Automação',
    rows: [
      { label: 'Disparos em massa', basic: true, pro: true, basicIa: true, proIa: true },
      { label: 'Grupos', basic: '1 por slot', pro: '3 por slot', basicIa: '1 por slot', proIa: '3 por slot' },
      { label: 'Kanbans', basic: '2', pro: '5', basicIa: '2', proIa: '5' },
      { label: 'Integração (Post, Put, Get)', basic: false, pro: true, basicIa: false, proIa: true },
      { label: 'Agenda', basic: false, pro: '1', basicIa: false, proIa: '1' },
    ],
  },
  {
    category: 'Inteligência',
    rows: [
      { label: 'Agentes IA', basic: false, pro: false, basicIa: '1', proIa: '2' },
      { label: 'Tokens por mês', basic: false, pro: false, basicIa: '5MM', proIa: '10MM' },
    ],
  },
  {
    category: 'Suporte',
    rows: [
      { label: 'Suporte humanizado', basic: true, pro: true, basicIa: true, proIa: true },
      { label: 'Call de onboarding', basic: false, pro: '1', basicIa: false, proIa: '1' },
    ],
  },
];
