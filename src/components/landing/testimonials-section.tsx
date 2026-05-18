'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Instagram, Quote } from 'lucide-react';
import { AnimateIn } from '@/components/ui/animate-in';

type Testimonial = {
  name: string;
  handle: string;
  instagramUrl: string;
  avatarUrl?: string;
  initials?: string;
  company: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    name: 'N. Peixotto',
    handle: '@npeixotto',
    instagramUrl: 'https://www.instagram.com/npeixotto/',
    avatarUrl: '/images/testimonials/npeixotto.jpg',
    initials: 'NP',
    company: 'Cliente Sagazchat',
    quote:
      'Mano, tô gostando bastante do bot. O suporte é muito bom também, isso faz toda a diferença.',
  },
];

const rows = [
  testimonials,
  [...testimonials.slice(3), ...testimonials.slice(0, 3)],
];

function ProfilePhoto({ testimonial }: { testimonial: Testimonial }) {
  const [hasError, setHasError] = useState(false);

  if (!testimonial.avatarUrl || hasError) {
    return (
      <div
        className="flex h-[88px] w-[88px] shrink-0 items-center justify-center rounded-[24px] bg-primary/10 text-xl font-extrabold text-primary shadow-[0_18px_44px_rgb(15_23_42/0.12)] ring-4 ring-white"
        aria-label={`Foto de ${testimonial.name} pendente`}
      >
        {testimonial.initials}
      </div>
    );
  }

  return (
    <span className="feedback-photo-frame">
      <img
        src={testimonial.avatarUrl}
        alt={`Foto de ${testimonial.name}`}
        width={88}
        height={88}
        loading="lazy"
        referrerPolicy="no-referrer"
        onError={() => setHasError(true)}
        className="h-[88px] w-[88px] shrink-0 rounded-[24px] object-cover"
      />
    </span>
  );
}

function FeedbackCard({
  testimonial,
  duplicate = false,
}: {
  testimonial: Testimonial;
  duplicate?: boolean;
}) {
  return (
    <figure
      className="feedback-card w-[300px] shrink-0 rounded-[22px] border border-slate-200/80 bg-white p-5 shadow-[0_22px_70px_rgb(15_23_42/0.08)] sm:w-[350px]"
      aria-hidden={duplicate || undefined}
    >
      <figcaption className="flex items-center gap-4">
        <ProfilePhoto testimonial={testimonial} />

        <div className="min-w-0 flex-1">
          <p className="truncate text-base font-extrabold text-slate-950">
            {testimonial.name}
          </p>
          <p className="truncate text-xs font-medium text-slate-500">
            {testimonial.company}
          </p>
          <Link
            href={testimonial.instagramUrl}
            target="_blank"
            rel="noreferrer"
            tabIndex={duplicate ? -1 : undefined}
            className="mt-1 inline-flex text-xs font-bold text-primary hover:text-primary/80"
          >
            {testimonial.handle}
          </Link>
        </div>

        <Link
          href={testimonial.instagramUrl}
          target="_blank"
          rel="noreferrer"
          tabIndex={duplicate ? -1 : undefined}
          className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-600 transition-colors hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
          aria-label={`Abrir Instagram de ${testimonial.name}: ${testimonial.handle}`}
        >
          <Instagram className="h-4 w-4" />
        </Link>
      </figcaption>

      <div className="mt-5 flex items-start gap-3 border-t border-slate-100 pt-5">
        <Quote className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={2.25} />
        <blockquote className="min-h-[118px] text-[15px] leading-relaxed text-slate-700">
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
      className="relative overflow-hidden bg-white py-20 text-slate-900 lg:py-32"
    >
      <div className="relative z-10 mx-auto max-w-[1360px] px-4 sm:px-6">
        <AnimateIn>
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-5 font-[family-name:var(--font-sans)] text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
              Feedbacks
            </p>
            <h2 className="mb-5 font-[family-name:var(--font-sans)] text-3xl font-extrabold leading-[1.1] tracking-[-0.02em] text-slate-950 sm:text-4xl lg:text-[3rem]">
              Feedbacks de quem já usa{' '}
              <span className="font-extrabold text-primary">o Sagazchat no atendimento.</span>
            </h2>
            <p className="mx-auto max-w-xl text-[15px] leading-relaxed text-slate-600">
              Comentários diretos de quem colocou o Sagazchat para rodar no atendimento do dia a dia.
            </p>
          </div>
        </AnimateIn>

        <AnimateIn from="scale" delay={180} duration={780}>
          {testimonials.length > 1 ? (
            <div className="feedback-marquee-shell relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent sm:w-28" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent sm:w-28" />

              {rows.map((row, rowIndex) => (
                <div
                  key={rowIndex}
                  className={`feedback-marquee-row ${
                    rowIndex === 0 ? 'feedback-marquee-row-left' : 'feedback-marquee-row-right mt-5'
                  }`}
                >
                  <div className="feedback-marquee-track">
                    {row.map((testimonial) => (
                      <FeedbackCard
                        key={`${rowIndex}-${testimonial.handle}`}
                        testimonial={testimonial}
                      />
                    ))}
                    {row.map((testimonial) => (
                      <FeedbackCard
                        key={`${rowIndex}-${testimonial.handle}-duplicate`}
                        testimonial={testimonial}
                        duplicate
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex justify-center">
              <FeedbackCard testimonial={testimonials[0]} />
            </div>
          )}
        </AnimateIn>
      </div>
    </section>
  );
}
