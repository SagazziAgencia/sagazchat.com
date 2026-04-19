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

export const proPlansData: Plan[] = [
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

export const basicIaPlansData: Plan[] = [
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

export const proIaPlansData: Plan[] = [
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

export const basicInstaPlansData: Plan[] = [
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

export const proInstaPlansData: Plan[] = [
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

export const basicIaInstaPlansData: Plan[] = [
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

export const proIaInstaPlansData: Plan[] = [
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

export type Tier = 'basic' | 'pro' | 'basicIa' | 'proIa';

export function getPlanArray(tier: Tier, instagram: boolean): Plan[] {
  if (instagram) {
    switch (tier) {
      case 'basic': return basicInstaPlansData;
      case 'pro': return proInstaPlansData;
      case 'basicIa': return basicIaInstaPlansData;
      case 'proIa': return proIaInstaPlansData;
    }
  }
  switch (tier) {
    case 'basic': return basicPlansData;
    case 'pro': return proPlansData;
    case 'basicIa': return basicIaPlansData;
    case 'proIa': return proIaPlansData;
  }
}

export function getPlan(tier: Tier, connections: number, instagram: boolean): Plan {
  const arr = getPlanArray(tier, instagram);
  return arr[Math.min(Math.max(connections, 1), 10) - 1];
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
      { label: 'Conexões de WhatsApp', basic: 'variável', pro: 'variável', basicIa: 'variável', proIa: 'variável' },
      { label: 'Webhooks por mês', basic: '15.000 por conexão', pro: '30.000 por conexão', basicIa: '15.000 por conexão', proIa: '30.000 por conexão' },
      { label: 'Acessos simultâneos', basic: '10', pro: '20', basicIa: '10', proIa: '20' },
      { label: 'Mensagens e robôs', basic: 'ilimitado', pro: 'ilimitado', basicIa: 'ilimitado', proIa: 'ilimitado' },
    ],
  },
  {
    category: 'Automação',
    rows: [
      { label: 'Disparos em massa', basic: true, pro: true, basicIa: true, proIa: true },
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
