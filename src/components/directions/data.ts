import { getPlan } from '@/components/landing/pricing/plans-data';

/* ── Dados reais (fonte: plans-data + pricing-section) ── */
export const PRO_PLAN = getPlan('pro', 1);
/** Espelho do passo PRO em landing/pricing-section.tsx (lá é módulo client, não dá pra importar em server component). */
export const PRO_STEP = {
  headline: 'Volume e integrações',
  base: 'Tudo do Basic',
  delta: [
    '30.000 webhooks/mês por conexão',
    '15 acessos simultâneos',
    '3 grupos por slot',
    '5 kanbans · agenda nativa',
    'Integração Post/Put/Get',
    '1 call de onboarding',
  ],
};
/** "de R$197 no mês seguinte" -> "R$197" */
export const PRO_REGULAR = (PRO_PLAN.subtext.match(/R\$\s?([\d.]+)/) ?? [])[0]?.replace(/\s/g, '') ?? 'R$197';
export const PRO_PRICE_INT = PRO_PLAN.price.split(',')[0]; // "157"

/** Placeholder: o link da agenda (Calendly) ainda não existe. */
export const AGENDA_URL = '#agenda';
export const PRICING_URL = '#planos';

export const WEBHOOK_STEPS = [
  { kicker: 'Evento', title: 'Evento detectado', desc: 'Checkout, boleto ou pagamento recusado chega em tempo real.' },
  { kicker: 'Recepção', title: 'Dados recebidos', desc: 'Nome, telefone, produto e valor chegam prontos.' },
  { kicker: 'Ação', title: 'Fluxo disparado', desc: 'A mensagem certa vai para o WhatsApp em segundos.' },
  { kicker: 'Resultado', title: 'Venda recuperada', desc: 'O lead responde e volta para o funil sem trabalho manual.' },
];

