'use client';

import { CheckCircle, Zap, ArrowRight, UserPlus, DollarSign, Sparkles, Crown, Bot, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import React, { useState, useMemo } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const basicPlansData = [
  { id: 'basic1', connections: 1, name: 'Plano Basic', price: '117,00', priceSuffix: '/1º mês', subtext: 'de R$147 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/OB58ED24A', savings: null },
  { id: 'basic2', connections: 2, name: 'Basic - 2 Conexões', price: '194,00', priceSuffix: '/1º mês', subtext: 'de R$244 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/OFB41DC15', savings: 'ECONOMIA: R$ 50,00/mês' },
  { id: 'basic3', connections: 3, name: 'Basic - 3 Conexões', price: '255,00', priceSuffix: '/1º mês', subtext: 'de R$321 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/O2E96CAB8', savings: 'ECONOMIA: R$ 120,00/mês' },
  { id: 'basic4', connections: 4, name: 'Basic - 4 Conexões', price: '316,00', priceSuffix: '/1º mês', subtext: 'de R$398 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/O46C49D66', savings: 'ECONOMIA: R$ 190,00/mês' },
  { id: 'basic5', connections: 5, name: 'Basic - 5 Conexões', price: '370,00', priceSuffix: '/1º mês', subtext: 'de R$465 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/O93D60F58', savings: 'ECONOMIA: R$ 270,00/mês' },
  { id: 'basic6', connections: 6, name: 'Basic - 6 Conexões', price: '423,00', priceSuffix: '/1º mês', subtext: 'de R$532 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/O8ACD3E19', savings: 'ECONOMIA: R$ 350,00/mês' },
  { id: 'basic7', connections: 7, name: 'Basic - 7 Conexões', price: '476,00', priceSuffix: '/1º mês', subtext: 'de R$599 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/O37D3E178', savings: 'ECONOMIA: R$ 430,00/mês' },
  { id: 'basic8', connections: 8, name: 'Basic - 8 Conexões', price: '530,00', priceSuffix: '/1º mês', subtext: 'de R$666 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/O5AF4CEB8', savings: 'ECONOMIA: R$ 510,00/mês' },
  { id: 'basic9', connections: 9, name: 'Basic - 9 Conexões', price: '583,00', priceSuffix: '/1º mês', subtext: 'de R$733 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/O4B825F56', savings: 'ECONOMIA: R$ 590,00/mês' },
  { id: 'basic10', connections: 10, name: 'Basic - 10 Conexões', price: '636,00', priceSuffix: '/1º mês', subtext: 'de R$800 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/OFCE07F45', savings: 'ECONOMIA: R$ 670,00/mês' },
];

const proPlansData = [
  { id: 'pro1', connections: 1, name: 'Plano PRO', price: '157,00', priceSuffix: '/1º mês', subtext: 'de R$197 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/O3491F181', savings: null },
  { id: 'pro2', connections: 2, name: 'PRO - 2 Conexões', price: '274,00', priceSuffix: '/1º mês', subtext: 'de R$344 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/PRO2', savings: 'ECONOMIA: R$ 50,00/mês' },
  { id: 'pro3', connections: 3, name: 'PRO - 3 Conexões', price: '375,00', priceSuffix: '/1º mês', subtext: 'de R$471 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/PRO3', savings: 'ECONOMIA: R$ 120,00/mês' },
  { id: 'pro4', connections: 4, name: 'PRO - 4 Conexões', price: '476,00', priceSuffix: '/1º mês', subtext: 'de R$598 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/PRO4', savings: 'ECONOMIA: R$ 190,00/mês' },
  { id: 'pro5', connections: 5, name: 'PRO - 5 Conexões', price: '570,00', priceSuffix: '/1º mês', subtext: 'de R$715 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/PRO5', savings: 'ECONOMIA: R$ 270,00/mês' },
  { id: 'pro6', connections: 6, name: 'PRO - 6 Conexões', price: '663,00', priceSuffix: '/1º mês', subtext: 'de R$832 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/PRO6', savings: 'ECONOMIA: R$ 350,00/mês' },
  { id: 'pro7', connections: 7, name: 'PRO - 7 Conexões', price: '756,00', priceSuffix: '/1º mês', subtext: 'de R$949 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/PRO7', savings: 'ECONOMIA: R$ 430,00/mês' },
  { id: 'pro8', connections: 8, name: 'PRO - 8 Conexões', price: '850,00', priceSuffix: '/1º mês', subtext: 'de R$1066 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/PRO8', savings: 'ECONOMIA: R$ 510,00/mês' },
  { id: 'pro9', connections: 9, name: 'PRO - 9 Conexões', price: '943,00', priceSuffix: '/1º mês', subtext: 'de R$1183 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/PRO9', savings: 'ECONOMIA: R$ 590,00/mês' },
  { id: 'pro10', connections: 10, name: 'PRO - 10 Conexões', price: '1036,00', priceSuffix: '/1º mês', subtext: 'de R$1300 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/PRO10', savings: 'ECONOMIA: R$ 670,00/mês' },
];

const basicIaPlansData = [
  { id: 'basicia1', connections: 1, name: 'Plano Basic + IA', price: '217,00', priceSuffix: '/1º mês', subtext: 'de R$267 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/OC9149ECD', savings: null },
  { id: 'basicia2', connections: 2, name: 'Basic + IA - 2 Conexões', price: '394,00', priceSuffix: '/1º mês', subtext: 'de R$484 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/BASICIA2', savings: 'ECONOMIA: R$ 50,00/mês' },
  { id: 'basicia3', connections: 3, name: 'Basic + IA - 3 Conexões', price: '555,00', priceSuffix: '/1º mês', subtext: 'de R$681 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/BASICIA3', savings: 'ECONOMIA: R$ 120,00/mês' },
  { id: 'basicia4', connections: 4, name: 'Basic + IA - 4 Conexões', price: '716,00', priceSuffix: '/1º mês', subtext: 'de R$878 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/BASICIA4', savings: 'ECONOMIA: R$ 190,00/mês' },
  { id: 'basicia5', connections: 5, name: 'Basic + IA - 5 Conexões', price: '870,00', priceSuffix: '/1º mês', subtext: 'de R$1065 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/BASICIA5', savings: 'ECONOMIA: R$ 270,00/mês' },
  { id: 'basicia6', connections: 6, name: 'Basic + IA - 6 Conexões', price: '1023,00', priceSuffix: '/1º mês', subtext: 'de R$1252 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/BASICIA6', savings: 'ECONOMIA: R$ 350,00/mês' },
  { id: 'basicia7', connections: 7, name: 'Basic + IA - 7 Conexões', price: '1176,00', priceSuffix: '/1º mês', subtext: 'de R$1439 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/BASICIA7', savings: 'ECONOMIA: R$ 430,00/mês' },
  { id: 'basicia8', connections: 8, name: 'Basic + IA - 8 Conexões', price: '1330,00', priceSuffix: '/1º mês', subtext: 'de R$1626 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/BASICIA8', savings: 'ECONOMIA: R$ 510,00/mês' },
  { id: 'basicia9', connections: 9, name: 'Basic + IA - 9 Conexões', price: '1483,00', priceSuffix: '/1º mês', subtext: 'de R$1813 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/BASICIA9', savings: 'ECONOMIA: R$ 590,00/mês' },
  { id: 'basicia10', connections: 10, name: 'Basic + IA - 10 Conexões', price: '1636,00', priceSuffix: '/1º mês', subtext: 'de R$2000 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/BASICIA10', savings: 'ECONOMIA: R$ 670,00/mês' },
];

const proIaPlansData = [
  { id: 'proia1', connections: 1, name: 'Plano PRO + IA', price: '297,00', priceSuffix: '/mês', subtext: 'de R$347 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/OE75E3464', savings: null },
  { id: 'proia2', connections: 2, name: 'PRO + IA - 2 Conexões', price: '554,00', priceSuffix: '/mês', subtext: 'de R$644 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/PROIA2', savings: 'ECONOMIA: R$ 50,00/mês' },
  { id: 'proia3', connections: 3, name: 'PRO + IA - 3 Conexões', price: '795,00', priceSuffix: '/mês', subtext: 'de R$921 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/PROIA3', savings: 'ECONOMIA: R$ 120,00/mês' },
  { id: 'proia4', connections: 4, name: 'PRO + IA - 4 Conexões', price: '1036,00', priceSuffix: '/mês', subtext: 'de R$1198 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/PROIA4', savings: 'ECONOMIA: R$ 190,00/mês' },
  { id: 'proia5', connections: 5, name: 'PRO + IA - 5 Conexões', price: '1270,00', priceSuffix: '/mês', subtext: 'de R$1465 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/PROIA5', savings: 'ECONOMIA: R$ 270,00/mês' },
  { id: 'proia6', connections: 6, name: 'PRO + IA - 6 Conexões', price: '1503,00', priceSuffix: '/mês', subtext: 'de R$1732 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/PROIA6', savings: 'ECONOMIA: R$ 350,00/mês' },
  { id: 'proia7', connections: 7, name: 'PRO + IA - 7 Conexões', price: '1736,00', priceSuffix: '/mês', subtext: 'de R$1999 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/PROIA7', savings: 'ECONOMIA: R$ 430,00/mês' },
  { id: 'proia8', connections: 8, name: 'PRO + IA - 8 Conexões', price: '1970,00', priceSuffix: '/mês', subtext: 'de R$2266 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/PROIA8', savings: 'ECONOMIA: R$ 510,00/mês' },
  { id: 'proia9', connections: 9, name: 'PRO + IA - 9 Conexões', price: '2203,00', priceSuffix: '/mês', subtext: 'de R$2533 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/PROIA9', savings: 'ECONOMIA: R$ 590,00/mês' },
  { id: 'proia10', connections: 10, name: 'PRO + IA - 10 Conexões', price: '2436,00', priceSuffix: '/mês', subtext: 'de R$2800 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/PROIA10', savings: 'ECONOMIA: R$ 670,00/mês' },
];

// Recursos resumidos do Basic
const basicPlanFeatures = [
  { text: 'Número(s) de WhatsApp', key: 'connections' },
  { text: '{value} Webhooks/mês', key: 'webhooks', base: 15000 },
  { text: '{value} Acessos simultâneos', key: 'access', base: 10 },
  { text: '2 Kanbans', key: 'kanbans' },
  { text: 'Disparos em massa ilimitados', key: 'mass-shooting' },
  { text: 'Mensagens e robôs ilimitados', key: 'messages' },
  { text: 'Suporte humanizado', key: 'support' },
];

// PRO: Extras em relação ao Basic
const proPlanExtras = {
  basePlan: 'Plano Basic',
  features: [
    '30.000 Webhooks/mês',
    'Função Integração (Post, Put, Get)',
    '20 Acessos simultâneos',
    '5 Kanbans',
    '1 Agenda',
    '1 Call de onboarding',
  ],
};

// Basic + IA: Extras em relação ao Basic
const basicIaExtras = {
  basePlan: 'Plano Basic',
  features: [
    '1 Agente IA',
    '5MM Tokens/mês',
  ],
};

// PRO + IA: Extras em relação ao PRO
const proIaExtras = {
  basePlan: 'Plano PRO',
  features: [
    '2 Agentes IA',
    '10MM Tokens/mês',
  ],
};

// ==================== PLANOS COM INSTAGRAM ====================

// Basic + Instagram
const basicInstaPlansData = [
  { id: 'basicinsta1', connections: 1, name: 'Basic + Instagram', price: '197,00', priceSuffix: '/1º mês', subtext: 'de R$247 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/BASICINSTA1', savings: null },
  { id: 'basicinsta2', connections: 2, name: 'Basic + Instagram - 2 Conexões', price: '354,00', priceSuffix: '/1º mês', subtext: 'de R$444 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/BASICINSTA2', savings: 'ECONOMIA: R$ 50,00/mês' },
  { id: 'basicinsta3', connections: 3, name: 'Basic + Instagram - 3 Conexões', price: '495,00', priceSuffix: '/1º mês', subtext: 'de R$621 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/BASICINSTA3', savings: 'ECONOMIA: R$ 120,00/mês' },
  { id: 'basicinsta4', connections: 4, name: 'Basic + Instagram - 4 Conexões', price: '636,00', priceSuffix: '/1º mês', subtext: 'de R$798 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/BASICINSTA4', savings: 'ECONOMIA: R$ 190,00/mês' },
  { id: 'basicinsta5', connections: 5, name: 'Basic + Instagram - 5 Conexões', price: '770,00', priceSuffix: '/1º mês', subtext: 'de R$965 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/BASICINSTA5', savings: 'ECONOMIA: R$ 270,00/mês' },
  { id: 'basicinsta6', connections: 6, name: 'Basic + Instagram - 6 Conexões', price: '903,00', priceSuffix: '/1º mês', subtext: 'de R$1132 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/BASICINSTA6', savings: 'ECONOMIA: R$ 350,00/mês' },
  { id: 'basicinsta7', connections: 7, name: 'Basic + Instagram - 7 Conexões', price: '1036,00', priceSuffix: '/1º mês', subtext: 'de R$1299 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/BASICINSTA7', savings: 'ECONOMIA: R$ 430,00/mês' },
  { id: 'basicinsta8', connections: 8, name: 'Basic + Instagram - 8 Conexões', price: '1170,00', priceSuffix: '/1º mês', subtext: 'de R$1466 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/BASICINSTA8', savings: 'ECONOMIA: R$ 510,00/mês' },
  { id: 'basicinsta9', connections: 9, name: 'Basic + Instagram - 9 Conexões', price: '1303,00', priceSuffix: '/1º mês', subtext: 'de R$1633 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/BASICINSTA9', savings: 'ECONOMIA: R$ 590,00/mês' },
  { id: 'basicinsta10', connections: 10, name: 'Basic + Instagram - 10 Conexões', price: '1436,00', priceSuffix: '/1º mês', subtext: 'de R$1800 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/BASICINSTA10', savings: 'ECONOMIA: R$ 670,00/mês' },
];

// PRO + Instagram
const proInstaPlansData = [
  { id: 'proinsta1', connections: 1, name: 'PRO + Instagram', price: '237,00', priceSuffix: '/1º mês', subtext: 'de R$297 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/PROINSTA1', savings: null },
  { id: 'proinsta2', connections: 2, name: 'PRO + Instagram - 2 Conexões', price: '434,00', priceSuffix: '/1º mês', subtext: 'de R$544 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/PROINSTA2', savings: 'ECONOMIA: R$ 50,00/mês' },
  { id: 'proinsta3', connections: 3, name: 'PRO + Instagram - 3 Conexões', price: '615,00', priceSuffix: '/1º mês', subtext: 'de R$771 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/PROINSTA3', savings: 'ECONOMIA: R$ 120,00/mês' },
  { id: 'proinsta4', connections: 4, name: 'PRO + Instagram - 4 Conexões', price: '796,00', priceSuffix: '/1º mês', subtext: 'de R$998 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/PROINSTA4', savings: 'ECONOMIA: R$ 190,00/mês' },
  { id: 'proinsta5', connections: 5, name: 'PRO + Instagram - 5 Conexões', price: '970,00', priceSuffix: '/1º mês', subtext: 'de R$1215 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/PROINSTA5', savings: 'ECONOMIA: R$ 270,00/mês' },
  { id: 'proinsta6', connections: 6, name: 'PRO + Instagram - 6 Conexões', price: '1143,00', priceSuffix: '/1º mês', subtext: 'de R$1432 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/PROINSTA6', savings: 'ECONOMIA: R$ 350,00/mês' },
  { id: 'proinsta7', connections: 7, name: 'PRO + Instagram - 7 Conexões', price: '1316,00', priceSuffix: '/1º mês', subtext: 'de R$1649 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/PROINSTA7', savings: 'ECONOMIA: R$ 430,00/mês' },
  { id: 'proinsta8', connections: 8, name: 'PRO + Instagram - 8 Conexões', price: '1490,00', priceSuffix: '/1º mês', subtext: 'de R$1866 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/PROINSTA8', savings: 'ECONOMIA: R$ 510,00/mês' },
  { id: 'proinsta9', connections: 9, name: 'PRO + Instagram - 9 Conexões', price: '1663,00', priceSuffix: '/1º mês', subtext: 'de R$2083 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/PROINSTA9', savings: 'ECONOMIA: R$ 590,00/mês' },
  { id: 'proinsta10', connections: 10, name: 'PRO + Instagram - 10 Conexões', price: '1836,00', priceSuffix: '/1º mês', subtext: 'de R$2300 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/PROINSTA10', savings: 'ECONOMIA: R$ 670,00/mês' },
];

// Basic + IA + Instagram
const basicIaInstaPlansData = [
  { id: 'basiciainsta1', connections: 1, name: 'Basic + IA + Instagram', price: '297,00', priceSuffix: '/1º mês', subtext: 'de R$367 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/BASICIAINSTA1', savings: null },
  { id: 'basiciainsta2', connections: 2, name: 'Basic + IA + Instagram - 2 Conexões', price: '554,00', priceSuffix: '/1º mês', subtext: 'de R$684 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/BASICIAINSTA2', savings: 'ECONOMIA: R$ 50,00/mês' },
  { id: 'basiciainsta3', connections: 3, name: 'Basic + IA + Instagram - 3 Conexões', price: '795,00', priceSuffix: '/1º mês', subtext: 'de R$981 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/BASICIAINSTA3', savings: 'ECONOMIA: R$ 120,00/mês' },
  { id: 'basiciainsta4', connections: 4, name: 'Basic + IA + Instagram - 4 Conexões', price: '1036,00', priceSuffix: '/1º mês', subtext: 'de R$1278 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/BASICIAINSTA4', savings: 'ECONOMIA: R$ 190,00/mês' },
  { id: 'basiciainsta5', connections: 5, name: 'Basic + IA + Instagram - 5 Conexões', price: '1270,00', priceSuffix: '/1º mês', subtext: 'de R$1565 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/BASICIAINSTA5', savings: 'ECONOMIA: R$ 270,00/mês' },
  { id: 'basiciainsta6', connections: 6, name: 'Basic + IA + Instagram - 6 Conexões', price: '1503,00', priceSuffix: '/1º mês', subtext: 'de R$1852 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/BASICIAINSTA6', savings: 'ECONOMIA: R$ 350,00/mês' },
  { id: 'basiciainsta7', connections: 7, name: 'Basic + IA + Instagram - 7 Conexões', price: '1736,00', priceSuffix: '/1º mês', subtext: 'de R$2139 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/BASICIAINSTA7', savings: 'ECONOMIA: R$ 430,00/mês' },
  { id: 'basiciainsta8', connections: 8, name: 'Basic + IA + Instagram - 8 Conexões', price: '1970,00', priceSuffix: '/1º mês', subtext: 'de R$2426 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/BASICIAINSTA8', savings: 'ECONOMIA: R$ 510,00/mês' },
  { id: 'basiciainsta9', connections: 9, name: 'Basic + IA + Instagram - 9 Conexões', price: '2203,00', priceSuffix: '/1º mês', subtext: 'de R$2713 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/BASICIAINSTA9', savings: 'ECONOMIA: R$ 590,00/mês' },
  { id: 'basiciainsta10', connections: 10, name: 'Basic + IA + Instagram - 10 Conexões', price: '2436,00', priceSuffix: '/1º mês', subtext: 'de R$3000 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/BASICIAINSTA10', savings: 'ECONOMIA: R$ 670,00/mês' },
];

// PRO + IA + Instagram
const proIaInstaPlansData = [
  { id: 'proiainsta1', connections: 1, name: 'PRO + IA + Instagram', price: '377,00', priceSuffix: '/mês', subtext: 'de R$447 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/PROIAINSTA1', savings: null },
  { id: 'proiainsta2', connections: 2, name: 'PRO + IA + Instagram - 2 Conexões', price: '714,00', priceSuffix: '/mês', subtext: 'de R$844 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/PROIAINSTA2', savings: 'ECONOMIA: R$ 50,00/mês' },
  { id: 'proiainsta3', connections: 3, name: 'PRO + IA + Instagram - 3 Conexões', price: '1035,00', priceSuffix: '/mês', subtext: 'de R$1221 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/PROIAINSTA3', savings: 'ECONOMIA: R$ 120,00/mês' },
  { id: 'proiainsta4', connections: 4, name: 'PRO + IA + Instagram - 4 Conexões', price: '1356,00', priceSuffix: '/mês', subtext: 'de R$1598 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/PROIAINSTA4', savings: 'ECONOMIA: R$ 190,00/mês' },
  { id: 'proiainsta5', connections: 5, name: 'PRO + IA + Instagram - 5 Conexões', price: '1670,00', priceSuffix: '/mês', subtext: 'de R$1965 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/PROIAINSTA5', savings: 'ECONOMIA: R$ 270,00/mês' },
  { id: 'proiainsta6', connections: 6, name: 'PRO + IA + Instagram - 6 Conexões', price: '1983,00', priceSuffix: '/mês', subtext: 'de R$2332 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/PROIAINSTA6', savings: 'ECONOMIA: R$ 350,00/mês' },
  { id: 'proiainsta7', connections: 7, name: 'PRO + IA + Instagram - 7 Conexões', price: '2296,00', priceSuffix: '/mês', subtext: 'de R$2699 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/PROIAINSTA7', savings: 'ECONOMIA: R$ 430,00/mês' },
  { id: 'proiainsta8', connections: 8, name: 'PRO + IA + Instagram - 8 Conexões', price: '2610,00', priceSuffix: '/mês', subtext: 'de R$3066 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/PROIAINSTA8', savings: 'ECONOMIA: R$ 510,00/mês' },
  { id: 'proiainsta9', connections: 9, name: 'PRO + IA + Instagram - 9 Conexões', price: '2923,00', priceSuffix: '/mês', subtext: 'de R$3433 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/PROIAINSTA9', savings: 'ECONOMIA: R$ 590,00/mês' },
  { id: 'proiainsta10', connections: 10, name: 'PRO + IA + Instagram - 10 Conexões', price: '3236,00', priceSuffix: '/mês', subtext: 'de R$3800 no mês seguinte', link: 'https://checkout.sagazchatbot.com.br/PROIAINSTA10', savings: 'ECONOMIA: R$ 670,00/mês' },
];

// Features do Basic com Instagram
const basicInstaFeatures = [
  { text: 'Número(s) de WhatsApp', key: 'connections' },
  { text: 'Conta(s) de Instagram', key: 'instagram' },
  { text: '{value} Webhooks/mês', key: 'webhooks', base: 15000 },
  { text: '{value} Acessos simultâneos', key: 'access', base: 10 },
  { text: 'DMs e comentários automáticos', key: 'dms' },
  { text: 'Mensagens e robôs ilimitados', key: 'messages' },
  { text: 'Suporte humanizado', key: 'support' },
];

// Extras dos planos Instagram
const proInstaExtras = {
  basePlan: 'Basic + Instagram',
  features: [
    '30.000 Webhooks/mês',
    'Função Integração (Post, Put, Get)',
    '20 Acessos simultâneos',
    '5 Kanbans',
    '1 Agenda',
    '1 Call de onboarding',
  ],
};

const basicIaInstaExtras = {
  basePlan: 'Basic + Instagram',
  features: [
    '1 Agente IA',
    '5MM Tokens/mês',
  ],
};

const proIaInstaExtras = {
  basePlan: 'PRO + Instagram',
  features: [
    '2 Agentes IA',
    '10MM Tokens/mês',
  ],
};


export function PricingSection() {
  // Toggle para WhatsApp vs WhatsApp + Instagram
  const [includeInstagram, setIncludeInstagram] = useState(false);

  // Estados para planos WhatsApp
  const [selectedBasicId, setSelectedBasicId] = useState(basicPlansData[0].id);
  const [selectedProId, setSelectedProId] = useState(proPlansData[0].id);
  const [selectedBasicIaId, setSelectedBasicIaId] = useState(basicIaPlansData[0].id);
  const [selectedProIaId, setSelectedProIaId] = useState(proIaPlansData[0].id);

  // Estados para planos WhatsApp + Instagram
  const [selectedBasicInstaId, setSelectedBasicInstaId] = useState(basicInstaPlansData[0].id);
  const [selectedProInstaId, setSelectedProInstaId] = useState(proInstaPlansData[0].id);
  const [selectedBasicIaInstaId, setSelectedBasicIaInstaId] = useState(basicIaInstaPlansData[0].id);
  const [selectedProIaInstaId, setSelectedProIaInstaId] = useState(proIaInstaPlansData[0].id);

  // Planos WhatsApp selecionados
  const selectedBasicPlan = useMemo(() => {
    return basicPlansData.find(p => p.id === selectedBasicId) || basicPlansData[0];
  }, [selectedBasicId]);

  const selectedProPlan = useMemo(() => {
    return proPlansData.find(p => p.id === selectedProId) || proPlansData[0];
  }, [selectedProId]);

  const selectedBasicIaPlan = useMemo(() => {
    return basicIaPlansData.find(p => p.id === selectedBasicIaId) || basicIaPlansData[0];
  }, [selectedBasicIaId]);

  const selectedProIaPlan = useMemo(() => {
    return proIaPlansData.find(p => p.id === selectedProIaId) || proIaPlansData[0];
  }, [selectedProIaId]);

  // Planos Instagram selecionados
  const selectedBasicInstaPlan = useMemo(() => {
    return basicInstaPlansData.find(p => p.id === selectedBasicInstaId) || basicInstaPlansData[0];
  }, [selectedBasicInstaId]);

  const selectedProInstaPlan = useMemo(() => {
    return proInstaPlansData.find(p => p.id === selectedProInstaId) || proInstaPlansData[0];
  }, [selectedProInstaId]);

  const selectedBasicIaInstaPlan = useMemo(() => {
    return basicIaInstaPlansData.find(p => p.id === selectedBasicIaInstaId) || basicIaInstaPlansData[0];
  }, [selectedBasicIaInstaId]);

  const selectedProIaInstaPlan = useMemo(() => {
    return proIaInstaPlansData.find(p => p.id === selectedProIaInstaId) || proIaInstaPlansData[0];
  }, [selectedProIaInstaId]);

  const formatNumber = (num: number) => new Intl.NumberFormat('pt-BR').format(num);

  const PlanCard = ({
    plan,
    selectValue,
    onSelectChange,
    plansData,
    features,
    icon: Icon,
    isRecommended = false,
  }: {
    plan: typeof basicPlansData[0];
    selectValue: string;
    onSelectChange: (value: string) => void;
    plansData: typeof basicPlansData;
    features: typeof basicPlanFeatures;
    icon: typeof Sparkles;
    isRecommended?: boolean;
  }) => (
    <div
      className={cn(
        'group relative rounded-xl flex flex-col h-full transition-all duration-500',
        'bg-gradient-to-b from-[#0d0d0d] to-[#0a0a0a]',
        'border border-white/[0.08]',
        'hover:border-[#92D639]/30 hover:shadow-[0_0_60px_-15px_rgba(146,214,57,0.3)]',
        isRecommended && 'border-[#92D639]/50 shadow-[0_0_80px_-20px_rgba(146,214,57,0.4)] scale-[1.02] lg:scale-105'
      )}
    >
      {/* Subtle glow effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-[#92D639]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Recommended badge */}
      {isRecommended && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
          <div className="relative">
            <div className="absolute inset-0 bg-[#92D639] blur-lg opacity-50" />
            <span className="relative flex items-center gap-1.5 bg-gradient-to-r from-[#92D639] to-[#7BC62B] text-black text-xs font-bold py-2 px-5 rounded-full shadow-lg">
              <Crown size={14} className="animate-pulse" />
              RECOMENDADO
            </span>
          </div>
        </div>
      )}

      <div className="relative p-7 flex flex-col h-full">
        {/* Icon badge */}
        <div className={cn(
          "w-12 h-12 rounded-2xl flex items-center justify-center mb-5",
          "bg-gradient-to-br from-[#92D639]/20 to-[#92D639]/5",
          "border border-[#92D639]/20"
        )}>
          <Icon className="w-6 h-6 text-[#92D639]" />
        </div>

        {/* Plan name */}
        <h3 className="text-xl font-bold text-white mb-1 tracking-tight">{plan.name}</h3>

        {/* Price */}
        <div className="mb-5">
          <div className="flex items-baseline gap-1">
            <span className="text-sm font-medium text-gray-500">R$</span>
            <span className="text-4xl font-extrabold text-white tracking-tight">{plan.price.split(',')[0]}</span>
            <span className="text-xl font-bold text-white">,{plan.price.split(',')[1]}</span>
            <span className="text-sm font-medium text-gray-500">{plan.priceSuffix}</span>
          </div>
          <p className="text-xs text-gray-600 mt-1">{plan.subtext}</p>
        </div>

        {/* Connection selector */}
        <div className="mb-5">
          <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-2">
            Número de Conexões
          </label>
          <Select value={selectValue} onValueChange={onSelectChange}>
            <SelectTrigger className="w-full bg-[#111111] border-white/10 hover:border-[#92D639]/30 transition-colors rounded-xl h-11">
              <SelectValue placeholder="Selecione..." />
            </SelectTrigger>
            <SelectContent className="bg-[#111111] border-white/10">
              {plansData.map(p => (
                <SelectItem key={p.id} value={p.id} className="hover:bg-[#92D639]/10">
                  {p.connections} Conexão(ões)
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Savings badge */}
        {plan.savings && (
          <div className="mb-5 p-3 bg-[#92D639]/10 rounded-xl border border-[#92D639]/20">
            <p className="font-bold text-[#92D639] flex items-center justify-center gap-2 text-sm">
              <Zap className="h-4 w-4 fill-current" />
              {plan.savings}
            </p>
          </div>
        )}

        {/* CTA Button */}
        <Button
          asChild
          size="lg"
          className={cn(
            "group/btn w-full relative font-bold text-sm h-11 mb-5 rounded-lg overflow-hidden",
            "bg-gradient-to-r from-[#92D639] to-[#7BC62B] text-black",
            "hover:shadow-[0_0_30px_rgba(146,214,57,0.5)]",
            "transition-all duration-300"
          )}
        >
          <a href={plan.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
            <UserPlus size={18} />
            <span>Assinar Agora</span>
            <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
          </a>
        </Button>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-5" />

        {/* Features list */}
        <ul className="space-y-3 text-sm flex-grow">
          {features.map((feature) => {
            let featureText: React.ReactNode;
            if (feature.key === 'connections') {
              featureText = `${plan.connections} ${feature.text}`;
            } else if ((feature as { base?: number }).base) {
              const totalValue = (feature as { base: number }).base * plan.connections;
              featureText = feature.text.replace('{value}', formatNumber(totalValue));
            } else {
              featureText = feature.text;
            }

            return (
              <li key={feature.key} className="flex items-start gap-3 group/item">
                <div className="w-5 h-5 rounded-full bg-[#92D639]/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-[#92D639]/20 transition-colors">
                  <CheckCircle className="h-3 w-3 text-[#92D639]" />
                </div>
                <span className="text-gray-400 group-hover/item:text-gray-300 transition-colors">{featureText}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );

  // Card para planos que mostram extras
  const ExtrasCard = ({
    plan,
    selectValue,
    onSelectChange,
    plansData,
    extras,
    icon: Icon,
    isRecommended = false,
  }: {
    plan: typeof basicPlansData[0];
    selectValue: string;
    onSelectChange: (value: string) => void;
    plansData: typeof basicPlansData;
    extras: typeof proPlanExtras;
    icon: typeof Sparkles;
    isRecommended?: boolean;
  }) => (
    <div
      className={cn(
        'group relative rounded-xl flex flex-col h-full transition-all duration-500',
        'bg-gradient-to-b from-[#0d0d0d] to-[#0a0a0a]',
        'border border-white/[0.08]',
        'hover:border-[#92D639]/30 hover:shadow-[0_0_60px_-15px_rgba(146,214,57,0.3)]',
        isRecommended && 'border-[#92D639]/50 shadow-[0_0_80px_-20px_rgba(146,214,57,0.4)] scale-[1.02] lg:scale-105'
      )}
    >
      {/* Subtle glow effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-[#92D639]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Recommended badge */}
      {isRecommended && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
          <div className="relative">
            <div className="absolute inset-0 bg-[#92D639] blur-lg opacity-50" />
            <span className="relative flex items-center gap-1.5 bg-gradient-to-r from-[#92D639] to-[#7BC62B] text-black text-xs font-bold py-2 px-5 rounded-full shadow-lg">
              <Crown size={14} className="animate-pulse" />
              RECOMENDADO
            </span>
          </div>
        </div>
      )}

      <div className="relative p-7 flex flex-col h-full">
        {/* Icon badge */}
        <div className={cn(
          "w-12 h-12 rounded-2xl flex items-center justify-center mb-5",
          "bg-gradient-to-br from-[#92D639]/20 to-[#92D639]/5",
          "border border-[#92D639]/20"
        )}>
          <Icon className="w-6 h-6 text-[#92D639]" />
        </div>

        {/* Plan name */}
        <h3 className="text-xl font-bold text-white mb-1 tracking-tight">{plan.name}</h3>

        {/* Price */}
        <div className="mb-5">
          <div className="flex items-baseline gap-1">
            <span className="text-sm font-medium text-gray-500">R$</span>
            <span className="text-4xl font-extrabold text-white tracking-tight">{plan.price.split(',')[0]}</span>
            <span className="text-xl font-bold text-white">,{plan.price.split(',')[1]}</span>
            <span className="text-sm font-medium text-gray-500">{plan.priceSuffix}</span>
          </div>
          <p className="text-xs text-gray-600 mt-1">{plan.subtext}</p>
        </div>

        {/* Connection selector */}
        <div className="mb-5">
          <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-2">
            Número de Conexões
          </label>
          <Select value={selectValue} onValueChange={onSelectChange}>
            <SelectTrigger className="w-full bg-[#111111] border-white/10 hover:border-[#92D639]/30 transition-colors rounded-xl h-11">
              <SelectValue placeholder="Selecione..." />
            </SelectTrigger>
            <SelectContent className="bg-[#111111] border-white/10">
              {plansData.map(p => (
                <SelectItem key={p.id} value={p.id} className="hover:bg-[#92D639]/10">
                  {p.connections} Conexão(ões)
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Savings badge */}
        {plan.savings && (
          <div className="mb-5 p-3 bg-[#92D639]/10 rounded-xl border border-[#92D639]/20">
            <p className="font-bold text-[#92D639] flex items-center justify-center gap-2 text-sm">
              <Zap className="h-4 w-4 fill-current" />
              {plan.savings}
            </p>
          </div>
        )}

        {/* CTA Button */}
        <Button
          asChild
          size="lg"
          className={cn(
            "group/btn w-full relative font-bold text-sm h-11 mb-5 rounded-lg overflow-hidden",
            "bg-gradient-to-r from-[#92D639] to-[#7BC62B] text-black",
            "hover:shadow-[0_0_30px_rgba(146,214,57,0.5)]",
            "transition-all duration-300"
          )}
        >
          <a href={plan.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
            <UserPlus size={18} />
            <span>Assinar Agora</span>
            <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
          </a>
        </Button>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-5" />

        {/* Base plan indicator */}
        <div className="mb-4 p-3 bg-white/5 rounded-xl border border-white/10">
          <p className="text-sm font-semibold text-white flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-[#92D639]" />
            Tudo do {extras.basePlan} +
          </p>
        </div>

        {/* Extra features list */}
        <ul className="space-y-3 text-sm flex-grow">
          {extras.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3 group/item">
              <div className="w-5 h-5 rounded-full bg-[#92D639]/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-[#92D639]/30 transition-colors">
                <Sparkles className="h-3 w-3 text-[#92D639]" />
              </div>
              <span className="text-white font-medium group-hover/item:text-[#92D639] transition-colors">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <section id="pricing" className="py-24 bg-[#050505] text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(146,214,57,0.03)_1px,transparent_1px)] [background-size:40px_40px] pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#92D639]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#92D639]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#92D639]/10 border border-[#92D639]/20 text-[#92D639] text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
            <DollarSign size={14} />
            Invista no seu Crescimento
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Escolha o plano ideal e<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#92D639] to-[#B8E86C]">comece a vender mais</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-xl mx-auto">
            Todos os planos incluem acesso completo à plataforma. Cancele quando quiser, sem fidelidade.
          </p>
        </div>

        {/* Toggle WhatsApp vs WhatsApp + Instagram */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center p-1 rounded-xl bg-[#111111] border border-white/10">
            <button
              onClick={() => setIncludeInstagram(false)}
              className={cn(
                "flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300",
                !includeInstagram
                  ? "bg-[#92D639] text-black shadow-lg"
                  : "text-gray-400 hover:text-white"
              )}
            >
              <Sparkles size={16} />
              Só WhatsApp
            </button>
            <button
              onClick={() => setIncludeInstagram(true)}
              className={cn(
                "flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300",
                includeInstagram
                  ? "bg-gradient-to-r from-[#E1306C] to-[#F77737] text-white shadow-lg"
                  : "text-gray-400 hover:text-white"
              )}
            >
              <Instagram size={16} />
              WhatsApp + Instagram
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch max-w-7xl mx-auto">

          {!includeInstagram ? (
            <>
              {/* === PLANOS SÓ WHATSAPP === */}

              {/* Basic Plan */}
              <PlanCard
                plan={selectedBasicPlan}
                selectValue={selectedBasicId}
                onSelectChange={setSelectedBasicId}
                plansData={basicPlansData}
                features={basicPlanFeatures}
                icon={Sparkles}
              />

              {/* PRO Plan */}
              <ExtrasCard
                plan={selectedProPlan}
                selectValue={selectedProId}
                onSelectChange={setSelectedProId}
                plansData={proPlansData}
                extras={proPlanExtras}
                icon={Crown}
                isRecommended={true}
              />

              {/* Basic + IA Plan */}
              <ExtrasCard
                plan={selectedBasicIaPlan}
                selectValue={selectedBasicIaId}
                onSelectChange={setSelectedBasicIaId}
                plansData={basicIaPlansData}
                extras={basicIaExtras}
                icon={Bot}
              />

              {/* PRO + IA Plan */}
              <ExtrasCard
                plan={selectedProIaPlan}
                selectValue={selectedProIaId}
                onSelectChange={setSelectedProIaId}
                plansData={proIaPlansData}
                extras={proIaExtras}
                icon={Bot}
              />
            </>
          ) : (
            <>
              {/* === PLANOS WHATSAPP + INSTAGRAM === */}

              {/* Basic + Instagram Plan */}
              <PlanCard
                plan={selectedBasicInstaPlan}
                selectValue={selectedBasicInstaId}
                onSelectChange={setSelectedBasicInstaId}
                plansData={basicInstaPlansData}
                features={basicInstaFeatures}
                icon={Instagram}
              />

              {/* PRO + Instagram Plan */}
              <ExtrasCard
                plan={selectedProInstaPlan}
                selectValue={selectedProInstaId}
                onSelectChange={setSelectedProInstaId}
                plansData={proInstaPlansData}
                extras={proInstaExtras}
                icon={Crown}
                isRecommended={true}
              />

              {/* Basic + IA + Instagram Plan */}
              <ExtrasCard
                plan={selectedBasicIaInstaPlan}
                selectValue={selectedBasicIaInstaId}
                onSelectChange={setSelectedBasicIaInstaId}
                plansData={basicIaInstaPlansData}
                extras={basicIaInstaExtras}
                icon={Bot}
              />

              {/* PRO + IA + Instagram Plan */}
              <ExtrasCard
                plan={selectedProIaInstaPlan}
                selectValue={selectedProIaInstaId}
                onSelectChange={setSelectedProIaInstaId}
                plansData={proIaInstaPlansData}
                extras={proIaInstaExtras}
                icon={Bot}
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
}
