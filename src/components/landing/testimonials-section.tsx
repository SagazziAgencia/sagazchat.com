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
    <section className="py-20 lg:py-32 bg-[#050505] text-white relative">
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f13] via-[#050505] to-[#050505] z-0"></div>
       <div className="absolute inset-0 bg-[radial-gradient(rgba(146,214,57,0.04)_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none z-0"></div>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#92D639]/10 border border-[#92D639]/30 text-[#92D639] text-[11px] font-bold uppercase tracking-wider mb-6">
                <Quote size={12} fill="currentColor" /> Prova Social
            </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Quem usa, confia e <span className="text-[#92D639]">vende mais.</span>
          </h2>
          <p className="text-lg text-slate-400">
            Veja como o RespondeZap está a transformar a operação de vendas de centenas de empresas no Brasil.
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
                <div className="relative aspect-[9/16] w-full rounded-2xl overflow-hidden border border-white/10 shadow-lg transition-transform duration-300 group-hover:scale-105 group-hover:shadow-[#92D639]/10">
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

        <div className="mt-16 text-center">
            <Button size="lg" className="group w-full sm:w-auto relative px-8 py-4 bg-[#92D639] text-black rounded-lg font-bold text-lg hover:bg-[#82c232] transition-all shadow-[0_0_20px_rgba(146,214,57,0.4)] hover:shadow-[0_0_40px_rgba(146,214,57,0.6)] hover:-translate-y-1 h-auto">
                <UserPlus size={20} />
                Quero vender mais também
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
        </div>
      </div>
    </section>
  );
}
