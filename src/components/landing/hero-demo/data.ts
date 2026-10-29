/* Dados fictícios da demo do hero. Nomes genéricos, horários fixos (sem datas,
   sem relógio do visitante: o HTML do servidor e o do navegador saem iguais). */

export type Tone = "emerald" | "sky" | "amber" | "violet" | "rose" | "indigo" | "teal" | "slate";

export const AVATAR_BG: Record<Tone, string> = {
  emerald: "bg-emerald-500",
  sky: "bg-sky-500",
  amber: "bg-amber-500",
  violet: "bg-violet-500",
  rose: "bg-rose-500",
  indigo: "bg-indigo-500",
  teal: "bg-teal-500",
  slate: "bg-slate-500",
};

export const PRICE = 297;

export function brl(n: number): string {
  const cents = Math.round(n * 100);
  const int = Math.floor(cents / 100);
  const dec = String(cents % 100).padStart(2, "0");
  const withDots = String(int).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return `R$ ${withDots},${dec}`;
}

/* ─── Caixa de atendimento ─── */
export type Contact = {
  id: string;
  name: string;
  initials: string;
  tone: Tone;
  label: string;
  preview: string;
  by?: string;
  time: string;
  unread?: number;
};

export const CONTACTS: Contact[] = [
  { id: "paulo", name: "Paulo Nogueira", initials: "PN", tone: "teal", label: "Cliente", by: "ana", preview: "Combinado! Agendei pra sábado", time: "2m" },
  { id: "marina", name: "Marina Costa", initials: "MC", tone: "violet", label: "Comercial", preview: "Recebi o boleto?", time: "6m", unread: 2 },
  { id: "felipe", name: "Felipe Andrade", initials: "FA", tone: "sky", label: "Suporte", by: "ana", preview: "Te mando o link agora", time: "11m" },
  { id: "camila", name: "Camila Rocha", initials: "CR", tone: "amber", label: "Cliente", preview: "Preciso atualizar meu cadastro", time: "18m", unread: 1 },
  { id: "renata", name: "Renata Souza", initials: "RS", tone: "rose", label: "Comercial", preview: "Foto", time: "35m", unread: 3 },
  { id: "bruno", name: "Bruno Lima", initials: "BL", tone: "indigo", label: "VIP", by: "ana", preview: "Pode ser amanhã às 14h", time: "1h" },
  { id: "daniel", name: "Daniel Pereira", initials: "DP", tone: "slate", label: "Suporte", preview: "Tudo certo, obrigado!", time: "2h" },
];

export const CARLA = { id: "carla", name: "Carla Mendes", initials: "CM", tone: "emerald" as Tone };

/* Prévia da Carla na lista conforme a conversa avança (indexada por nº de mensagens visíveis). */
export const CARLA_PREVIEW: { by?: string; text: string }[] = [
  { text: "" },
  { text: "Oi! Quanto custa o Kit Premium? Tem pra entrega hoje?" },
  { by: "ana", text: `O Kit Premium sai por ${brl(PRICE)} e tem pronta entrega hoje` },
  { text: "Quero fechar!" },
  { text: "Quero fechar!" },
  { by: "bruno", text: "Perfeito, Carla! Segue o link pra pagar" },
];

/* ─── Conversas ─── */
export type Msg =
  | { id: string; kind: "customer"; text: string; time: string }
  | { id: string; kind: "ai"; text: string; time: string }
  | { id: string; kind: "agent"; text: string; time: string; payment?: boolean }
  | { id: string; kind: "system"; text: string };

export const PAULO_THREAD: Msg[] = [
  { id: "p1", kind: "customer", text: "Boa tarde! Vocês entregam no sábado?", time: "14:21" },
  { id: "p2", kind: "ai", text: "Boa tarde, Paulo! Entregamos sábado até as 18h. Quer que eu já deixe agendado?", time: "14:21" },
  { id: "p3", kind: "customer", text: "Pode ser de manhã mesmo", time: "14:22" },
  { id: "p4", kind: "ai", text: "Combinado! Agendei pra sábado, entre 9h e 12h. Qualquer coisa é só chamar.", time: "14:22" },
];

export const CARLA_THREAD: Msg[] = [
  { id: "c1", kind: "customer", text: "Oi! Quanto custa o Kit Premium? Tem pra entrega hoje?", time: "14:32" },
  { id: "c2", kind: "ai", text: `Oi, Carla! O Kit Premium sai por ${brl(PRICE)} e tem pronta entrega hoje. Quer fechar agora?`, time: "14:32" },
  { id: "c3", kind: "customer", text: "Quero fechar!", time: "14:33" },
  { id: "c4", kind: "system", text: "Transferido para atendente · Vendas" },
  { id: "c5", kind: "agent", text: "Perfeito, Carla! Segue o link pra pagar:", time: "14:34", payment: true },
];

/* Respostas rápidas (menu "/"). */
export const QUICK_REPLIES = [
  { key: "oi", title: "Boas-vindas", code: "/oi" },
  { key: "horario", title: "Horário de atendimento", code: "/horario" },
  { key: "pay", title: "Link de pagamento", code: "/pagar" },
  { key: "pix", title: "Chave Pix", code: "/pix" },
];

/* ─── Kanban ─── */
export type KCard = { id: string; name: string; initials: string; tone: Tone; value: number; tag?: { label: string; cls: string }; age: string };

const HOT = { label: "Lead quente", cls: "bg-rose-50 text-rose-600 ring-rose-100" };
const NEW = { label: "Novo", cls: "bg-sky-50 text-sky-700 ring-sky-100" };
const CUSTOMER = { label: "Cliente", cls: "bg-emerald-50 text-emerald-700 ring-emerald-100" };

export const K_LEAD: KCard[] = [
  { id: "k1", name: "Marcos Vieira", initials: "MV", tone: "sky", value: 420, tag: NEW, age: "1d" },
  { id: "k2", name: "Larissa Prado", initials: "LP", tone: "violet", value: 360, tag: NEW, age: "2d" },
  { id: "k3", name: "Henrique Dias", initials: "HD", tone: "indigo", value: 300, tag: NEW, age: "3d" },
];
export const K_NEG_BEFORE: KCard[] = [{ id: "k4", name: "Silvia Andrade", initials: "SA", tone: "rose", value: 540, tag: HOT, age: "2d" }];
export const K_NEG_AFTER: KCard[] = [{ id: "k5", name: "Rafael Torres", initials: "RT", tone: "amber", value: 410, tag: HOT, age: "4d" }];
export const K_CARLA: KCard = { id: "carla", name: "Carla Mendes", initials: "CM", tone: "emerald", value: PRICE, tag: HOT, age: "0d" };
export const K_FECHADO: KCard[] = [
  { id: "k6", name: "Josiane Prado", initials: "JP", tone: "teal", value: 297, tag: CUSTOMER, age: "5d" },
  { id: "k7", name: "Anderson Lopes", initials: "AL", tone: "slate", value: 594, tag: CUSTOMER, age: "6d" },
];
export const K_PERDIDO: KCard[] = [{ id: "k8", name: "Bruna Teixeira", initials: "BT", tone: "rose", value: 150, age: "9d" }];

export const sum = (cards: KCard[]) => cards.reduce((a, c) => a + c.value, 0);
