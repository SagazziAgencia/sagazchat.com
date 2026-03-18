'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Rocket, ShoppingCart, Webhook, PlusSquare, ArrowRight, UserPlus } from 'lucide-react';
import React from 'react';

const integrations = [
  { name: 'Pipefy', src: 'https://i.ibb.co/whbJnKVP/Pipefy-logo-black.png', hint: 'pipefy logo', url: '#' },
  { name: 'Hotmart', src: 'https://i.ibb.co/1JTj3ZpR/Logo-hotmart.png', hint: 'hotmart logo', url: '#' },
  { name: 'Meta', src: 'https://i.ibb.co/ZRxZm8cV/meta.png', hint: 'meta logo', url: '#' },
  { name: 'Asaas', src: 'https://i.ibb.co/GQMYLsKQ/348d2c8e-6db8-4acd-a9f9-3605f987e5a2.png', hint: 'asaas logo', url: '#' },
  { name: 'Loqzz', src: 'https://i.ibb.co/nNfp9Kmt/logzz.png', hint: 'loqzz logo', url: '#' },
  { name: 'Kiwify', src: 'https://i.ibb.co/vCCLLmnq/logo-kiwify.png', hint: 'kiwify logo', url: '#' },
  { name: 'n8n', src: 'https://i.ibb.co/9ksTbGtd/N8n-logo-new-svg.png', hint: 'n8n logo', url: '#' },
  { name: 'Cakto', src: 'https://i.ibb.co/TB75t8Fz/Logo-png-name-20230112-29660-e039kf.png', hint: 'cakto logo', url: '#' },
  { name: 'Ticto', src: 'https://i.ibb.co/H0Vf0K9/ticto.png', hint: 'ticto logo', url: '#' },
  { name: 'HubSpot', src: 'https://i.ibb.co/N61xCB5C/Hub-Spot-Logo-svg.png', hint: 'hubspot logo', url: '#' },
  { name: 'OpenAI', src: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg', hint: 'openai logo', url: '#' },
  { name: 'Lastlink', src: 'https://i.ibb.co/twg0vzNx/IE3ht6-SQf2b-ZBWVc-Gi-PA-gz5ryqqcw78ieafxfvaf.png', hint: 'lastlink logo', url: '#' },
  { name: 'Pipedrive', src: 'https://cdn.worldvectorlogo.com/logos/pipedrive.svg', hint: 'pipedrive logo', url: '#' },
  { name: 'Perfect Pay', src: 'https://i.ibb.co/HfL82xyq/payt.png', hint: 'payt logo', url: '#' },
  { name: 'Eduzz', src: 'https://i.ibb.co/W4wcQjhz/eduzz-logo-4.png', hint: 'eduzz logo', url: '#' },
  { name: 'Postman', src: 'https://i.ibb.co/rG98jPrs/images.png', hint: 'postman logo', url: '#' },
  { name: 'Kirvano', src: 'https://i.ibb.co/NdhbQh33/Logo-Kirvano-png-name-20230811-28731-1bw3q5f.png', hint: 'kirvano logo', url: '#' },
  { name: 'Agendor', src: 'https://i.ibb.co/8LjZNGSg/Agendor-logo-500x240-max-500x240.png', hint: 'agendor logo', url: '#' },
  { name: 'Make', src: 'https://i.ibb.co/spZt99Qg/make-logo-freelogovectors-net.png', hint: 'make logo', url: '#' },
  { name: 'Google Sheets', src: 'https://i.ibb.co/Wpf06JDb/google-sheets-full-logo-1-2.png', hint: 'google sheets logo', url: '#' },
];

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.521.074-.792.372c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871-.118.571-.355 1.758-2.153 2.006-2.875.247-.722.247-1.352.173-1.475z" />
  </svg>
);


export default function IntegrationsSection() {
  return (
    <section id="integrations" className="py-20 bg-[#0a0f13] text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary mb-6">
            Integrações
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-[3rem] font-bold tracking-tight leading-[1.15] text-white mb-4">
            Seu Ecossistema de Vendas, Totalmente Integrado via Webhooks.
          </h2>
          <p className="text-base text-slate-400 leading-relaxed max-w-3xl mx-auto">
            De CRMs a plataformas de pagamento, o Sagazchat se integra com as ferramentas que você ama, automatizando seu fluxo de trabalho e centralizando suas operações.
          </p>
        </div>

        <div className="w-full max-w-5xl mx-auto">
          <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-8 lg:grid-cols-10 gap-3">
            {integrations.map((integration) => (
              <Link
                key={integration.name}
                href={integration.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div
                  className="relative bg-gray-50 p-4 rounded-lg flex items-center justify-center h-16 border border-gray-200 shadow-md transition-all duration-300 group-hover:border-primary/50 group-hover:scale-105 group-hover:shadow-primary/10"
                >
                  <Image
                    src={integration.src}
                    alt={`${integration.name} logo`}
                    fill
                    quality={100}
                    sizes="64px"
                    className="object-contain p-2"
                    data-ai-hint={integration.hint}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <Button size="lg" className="group w-full sm:w-auto relative px-8 py-4 bg-primary text-black rounded-lg font-bold text-lg hover:bg-[#82c232] transition-all shadow-[0_0_20px_rgba(146,214,57,0.4)] hover:shadow-[0_0_40px_rgba(146,214,57,0.6)] hover:-translate-y-1 h-auto">
            <UserPlus size={20} />
            Assinar Agora
            <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}



