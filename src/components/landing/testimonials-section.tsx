'use client';

import React from 'react';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import { PlayCircle, Star, ArrowRight, Quote } from 'lucide-react';
import { AnimateIn } from '@/components/ui/animate-in';
import { Button } from '../ui/button';
import { LANDING_CTA } from './cta-links';

const testimonials = [
  {
    name: 'Recuperação de checkout',
    company: 'Fluxo de venda automática',
    videoThumbnailUrl: 'https://picsum.photos/seed/t1/270/480',
    aiHint: 'man portrait',
  },
  {
    name: 'Atendimento com IA',
    company: 'Qualificação e handoff',
    videoThumbnailUrl: 'https://picsum.photos/seed/t2/270/480',
    aiHint: 'woman portrait',
  },
  {
    name: 'Instagram no direct',
    company: 'Captação por comentário',
    videoThumbnailUrl: 'https://picsum.photos/seed/t3/270/480',
    aiHint: 'man office',
  },
  {
    name: 'CRM com valor',
    company: 'Pipeline comercial visível',
    videoThumbnailUrl: 'https://picsum.photos/seed/t4/270/480',
    aiHint: 'woman smiling',
  },
  {
    name: 'Disparos em massa',
    company: 'Campanhas com segmentação',
    videoThumbnailUrl: 'https://picsum.photos/seed/t5/270/480',
    aiHint: 'man talking',
  },
  {
    name: 'Operação multicanal',
    company: 'WhatsApp, Instagram e e-mail',
    videoThumbnailUrl: 'https://picsum.photos/seed/t6/270/480',
    aiHint: 'woman tech',
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-white text-slate-900 relative">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 relative z-10">
        <AnimateIn>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary mb-6">
              Demonstrações
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-[3rem] font-bold tracking-tight leading-[1.15] text-slate-900 mb-4">
              Veja o Sagazchat aplicado nas rotinas que mais travam
              <span className="text-primary"> a operação comercial.</span>
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Em vez de promessa genérica, aqui está o tipo de fluxo que a plataforma
              ajuda a executar no dia a dia.
            </p>
          </div>
        </AnimateIn>

        <AnimateIn from="scale" delay={200} duration={700}>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/5 group">
                <div className="relative aspect-[9/16] w-full rounded-2xl overflow-hidden border border-slate-200 shadow-md transition-shadow duration-300 hover:shadow-lg">
                  <Image
                    src={testimonial.videoThumbnailUrl}
                    alt={`Depoimento de ${testimonial.name}`}
                    fill
                    quality={100}
                    sizes="(min-width: 1280px) 18vw, (min-width: 1024px) 22vw, (min-width: 640px) 44vw, 92vw"
                    className="object-cover"
                    data-ai-hint={testimonial.aiHint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <PlayCircle
                      size={64}
                      className="text-white/60 backdrop-blur-sm rounded-full transition-all duration-300 group-hover:text-white group-hover:scale-110"
                      strokeWidth={1}
                    />
                  </div>

                  <div className="absolute bottom-0 left-0 p-5 text-white">
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-sm text-slate-300">{testimonial.company}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 sm:left-[-1rem] top-1/2 -translate-y-1/2 z-10 bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hidden sm:flex" />
          <CarouselNext className="absolute right-0 sm:right-[-1rem] top-1/2 -translate-y-1/2 z-10 bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hidden sm:flex" />
        </Carousel>
        </AnimateIn>

      </div>
    </section>
  );
}


