'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Instagram, Quote } from 'lucide-react';
import { AnimateIn } from '@/components/ui/animate-in';

type Testimonial = {
  name: string;
  handle?: string;
  instagramUrl?: string;
  avatarUrl?: string;
  initials?: string;
  company: string;
  quote: string;
};

// TODO [CONFIRMAR]: autorização de uso dos 3 depoimentos e a fonte do rótulo
// "Múltiplos 6 dígitos faturados" (não achei nota de consentimento no vault).
const testimonials: Testimonial[] = [
  {
    name: 'N. Peixotto',
    handle: '@npeixotto',
    instagramUrl: 'https://www.instagram.com/npeixotto/',
    avatarUrl: '/images/testimonials/npeixotto.jpg',
    initials: 'NP',
    company: 'Múltiplos 6 dígitos faturados',
    quote:
      'Mano, tô gostando bastante do bot. O suporte é muito bom também, isso faz toda a diferença.',
  },
  {
    name: 'Italo',
    handle: '@italomartinus',
    instagramUrl: 'https://www.instagram.com/italomartinus/',
    avatarUrl: '/images/testimonials/italo.jpg',
    initials: 'IS',
    company: 'Múltiplos 6 dígitos faturados',
    quote:
      'Só tenho a agradecer ao Sagaz e time. Consegui escalar minha operação com o suporte. Nem tudo é sobre ferramenta: você ter um suporte de qualidade diretamente pra sua operação me ajudou 1000%.',
  },
  {
    name: 'Gabriel',
    avatarUrl: '/images/testimonials/gabriel.webp',
    initials: 'G',
    company: 'Múltiplos 6 dígitos faturados',
    quote:
      'Suporte bem prestativo, ferramenta boa, 0 reclamações! Recomendo.',
  },
];

function ProfilePhoto({ testimonial }: { testimonial: Testimonial }) {
  const [hasError, setHasError] = useState(false);

  if (!testimonial.avatarUrl || hasError) {
    return (
      <div
        className="flex h-[64px] w-[64px] shrink-0 items-center justify-center rounded-[18px] bg-primary/10 sm:h-[88px] sm:w-[88px] sm:rounded-[24px] text-xl font-extrabold text-primary shadow-[0_18px_44px_rgb(15_23_42/0.12)] ring-4 ring-white"
        aria-label={`Foto de ${testimonial.name} pendente`}
      >
        {testimonial.initials}
      </div>
    );
  }

  return (
    <span className="feedback-photo-frame">
      <Image
        src={testimonial.avatarUrl}
        alt={`Foto de ${testimonial.name}`}
        width={88}
        height={88}
        sizes="88px"
        onError={() => setHasError(true)}
        className="h-[64px] w-[64px] shrink-0 rounded-[18px] object-cover sm:h-[88px] sm:w-[88px] sm:rounded-[24px]"
      />
    </span>
  );
}

function FeedbackCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="feedback-card flex h-full w-full flex-col rounded-[22px] border border-slate-200/80 bg-white p-5 shadow-[0_22px_70px_rgb(15_23_42/0.08)] sm:p-6">
      <figcaption className="flex items-center gap-4">
        <ProfilePhoto testimonial={testimonial} />

        <div className="min-w-0 flex-1">
          <p className="text-base font-extrabold text-slate-950">{testimonial.name}</p>
          <p className="text-xs font-medium leading-snug text-slate-600">{testimonial.company}</p>
          {testimonial.handle && testimonial.instagramUrl ? (
            <Link
              href={testimonial.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-1 inline-flex text-xs font-bold text-primary hover:text-primary-dark"
            >
              {testimonial.handle}
            </Link>
          ) : null}
        </div>

        {testimonial.instagramUrl ? (
          <Link
            href={testimonial.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-600 transition-colors hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
            aria-label={`Abrir Instagram de ${testimonial.name}: ${testimonial.handle}`}
          >
            <Instagram className="h-4 w-4" />
          </Link>
        ) : null}
      </figcaption>

      <div className="mt-4 flex flex-1 items-start gap-3 border-t border-slate-100 pt-4 sm:mt-5 sm:pt-5">
        <Quote className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={2.25} />
        <blockquote className="text-[15px] leading-relaxed text-slate-700">
          “{testimonial.quote}”
        </blockquote>
      </div>
    </figure>
  );
}

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-white py-10 text-slate-900 sm:py-14 lg:py-24"
    >
      <div className="relative z-10 mx-auto max-w-[1360px] px-4 sm:px-6">
        <AnimateIn>
          <div className="mx-auto mb-10 max-w-3xl text-center lg:mb-14">
            <p className="mb-5 font-[family-name:var(--font-sans)] text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
              Feedbacks
            </p>
            <h2 className="mb-5 font-[family-name:var(--font-sans)] text-3xl font-extrabold leading-[1.1] tracking-[-0.02em] text-slate-950 sm:text-4xl lg:text-[3rem]">
              Feedbacks de quem já usa{' '}
              <span className="font-extrabold text-primary">o Sagazchat no atendimento.</span>
            </h2>
            <p className="mx-auto hidden max-w-xl text-[15px] leading-relaxed text-slate-600 sm:block">
              Comentários diretos de quem colocou o Sagazchat para rodar no atendimento do dia a dia.
            </p>
          </div>
        </AnimateIn>

        <div className="mx-auto grid max-w-[1120px] grid-cols-1 gap-5 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <AnimateIn key={testimonial.name} from="scale" delay={140 + index * 120} duration={780} className="h-full">
              <FeedbackCard testimonial={testimonial} />
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
