import { Header } from '@/components/landing/header';
import { Hero } from '@/components/landing/hero';
import { FeaturesTicker } from '@/components/landing/features-ticker';
import { MultiWhatsapp } from '@/components/landing/multi-whatsapp';

export default function RespondeZapLanding() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <FeaturesTicker />
        <MultiWhatsapp />
      </main>
    </div>
  );
}
