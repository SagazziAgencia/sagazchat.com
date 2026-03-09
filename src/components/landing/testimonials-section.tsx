'use client';

import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import { PlayCircle, Star, ArrowRight, UserPlus, Quote } from 'lucide-react';
import { Button } from '../ui/button';

const testimonials = [
  {
    name: 'Gabriel Lima',
    company: 'DropShip Inc.',
    videoThumbnailUrl: 'https://picsum.photos/seed/t1/270/480',
    aiHint: 'man portrait',
  },
  {
    name: 'Juliana Alves',
    company: 'E-commerce Experts',
    videoThumbnailUrl: 'https://picsum.photos/seed/t2/270/480',
    aiHint: 'woman portrait',
  },
  {
    name: 'Marcos Rocha',
    company: 'Agência Criativa',
    videoThumbnailUrl: 'https://picsum.photos/seed/t3/270/480',
    aiHint: 'man office',
  },
  {
    name: 'Fernanda Dias',
    company: 'InfoProdutora Digital',
    videoThumbnailUrl: 'https://picsum.photos/seed/t4/270/480',
    aiHint: 'woman smiling',
  },
  {
    name: 'Ricardo Mendes',
    company: 'Consultoria de Vendas',
    videoThumbnailUrl: 'https://picsum.photos/seed/t5/270/480',
    aiHint: 'man talking',
  },
   {
    name: 'Carla Souza',
    company: 'Startup de SaaS',
    videoThumbnailUrl: 'https://picsum.photos/seed/t6/270/480',
    aiHint: 'woman tech',
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 text-white relative section-divider">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-sm font-medium text-white/30 tracking-wide uppercase mb-4">Depoimentos</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Quem usa, confia e <span className="text-gradient">vende mais</span>
          </h2>
          <p className="text-base text-white/40">
            Veja como o RespondeZap está transformando a operação de vendas de centenas de empresas.
          </p>
        </div>

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
                <div className="relative aspect-[9/16] w-full rounded-2xl overflow-hidden border border-white/[0.08] transition-transform duration-300 group-hover:scale-[1.03]">
                  <Image
                    src={testimonial.videoThumbnailUrl}
                    alt={`Depoimento de ${testimonial.name}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
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
          <CarouselPrevious className="absolute left-[-1rem] top-1/2 -translate-y-1/2 z-10 bg-white/10 border-white/20 text-white hover:bg-white/20" />
          <CarouselNext className="absolute right-[-1rem] top-1/2 -translate-y-1/2 z-10 bg-white/10 border-white/20 text-white hover:bg-white/20" />
        </Carousel>

      </div>
    </section>
  );
}
