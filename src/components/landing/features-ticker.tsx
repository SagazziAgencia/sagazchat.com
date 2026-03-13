import Image from 'next/image';

const integrations = [
  { name: 'Asaas', src: 'https://i.ibb.co/GQMYLsKQ/348d2c8e-6db8-4acd-a9f9-3605f987e5a2.png' },
  { name: 'Kiwify', src: 'https://i.ibb.co/vCCLLmnq/logo-kiwify.png' },
  { name: 'Ticto', src: 'https://i.ibb.co/H0Vf0K9/ticto.png' },
  { name: 'Google Sheets', src: 'https://i.ibb.co/Wpf06JDb/google-sheets-full-logo-1-2.png' },
  { name: 'Hotmart', src: 'https://i.ibb.co/1JTj3ZpR/Logo-hotmart.png' },
  { name: 'n8n', src: 'https://i.ibb.co/9ksTbGtd/N8n-logo-new-svg.png' },
  { name: 'HubSpot', src: 'https://i.ibb.co/N61xCB5C/Hub-Spot-Logo-svg.png' },
  { name: 'Meta', src: 'https://i.ibb.co/ZRxZm8cV/meta.png' },
  { name: 'Pipedrive', src: 'https://cdn.worldvectorlogo.com/logos/pipedrive.svg' },
  { name: 'Make', src: 'https://i.ibb.co/spZt99Qg/make-logo-freelogovectors-net.png' },
  { name: 'Perfect Pay', src: 'https://i.ibb.co/HfL82xyq/payt.png' },
  { name: 'Eduzz', src: 'https://i.ibb.co/W4wcQjhz/eduzz-logo-4.png' },
  { name: 'Kirvano', src: 'https://i.ibb.co/NdhbQh33/Logo-Kirvano-png-name-20230811-28731-1bw3q5f.png' },
  { name: 'Cakto', src: 'https://i.ibb.co/TB75t8Fz/Logo-png-name-20230112-29660-e039kf.png' },
  { name: 'OpenAI', src: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg' },
  { name: 'Lastlink', src: 'https://i.ibb.co/twg0vzNx/IE3ht6-SQf2b-ZBWVc-Gi-PA-gz5ryqqcw78ieafxfvaf.png' },
  { name: 'Agendor', src: 'https://i.ibb.co/8LjZNGSg/Agendor-logo-500x240-max-500x240.png' },
  { name: 'Pipefy', src: 'https://i.ibb.co/whbJnKVP/Pipefy-logo-black.png' },
  { name: 'Loqzz', src: 'https://i.ibb.co/nNfp9Kmt/logzz.png' },
];

export function FeaturesTicker() {
  return (
    <section className="relative z-20 border-y border-slate-200 bg-white py-5 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-3">
        <p className="text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">
          Integra com suas ferramentas favoritas
        </p>
      </div>

      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Scrolling track */}
        <div className="flex animate-marquee w-max">
          {[...integrations, ...integrations].map((item, i) => (
            <div
              key={`${item.name}-${i}`}
              className="flex items-center justify-center mx-5 sm:mx-7 shrink-0"
            >
              <div className="relative h-8 w-20 sm:h-9 sm:w-24 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <Image
                  src={item.src}
                  alt={item.name}
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
