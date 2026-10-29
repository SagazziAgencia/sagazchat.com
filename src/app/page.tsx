import { Header } from '@/components/landing/header';
import { Hero } from '@/components/landing/hero';

import { IntegrationsTicker } from '@/components/landing/features-ticker';
import { MultiWhatsapp } from '@/components/landing/multi-whatsapp';
import { InstagramSection } from '@/components/landing/instagram-section';
import { WebhookSection } from '@/components/landing/webhook-section';
import { EnterpriseSection } from '@/components/landing/enterprise-section';
import { TestimonialsSection } from '@/components/landing/testimonials-section';
import { PricingSection } from '@/components/landing/pricing-section';
import { FaqSection } from '@/components/landing/faq-section';
import { Footer } from '@/components/landing/footer';
import { AiChatbotSection } from '@/components/landing/ai-chatbot-section';
import { ReactivationSection } from '@/components/landing/reactivation-section';
import { ProductGrid } from '@/components/landing/product-grid';

/*
 * Ordem (upgrade v2): prova e dinheiro primeiro, produto depois, preço no fim.
 * Header, Hero, Feedbacks, Recuperação (webhook), integrações, Conheça por dentro (índice),
 * Canais, Instagram, IA, Vender de novo (Disparos + Remarketing + Kanban), Setup, Planos, FAQ, Footer.
 */
export default function SagazchatLanding() {
  return (
    <div className="min-h-screen bg-white font-sans" style={{ overflowX: 'clip' }}>
      <Header />
      <Hero />

      <main>
        <TestimonialsSection />
        <WebhookSection />
        <IntegrationsTicker />
        <ProductGrid />
        <MultiWhatsapp />
        <InstagramSection />
        <AiChatbotSection />
        <ReactivationSection />
        <EnterpriseSection />
        <PricingSection />
        <FaqSection />
        <Footer />
      </main>
    </div>
  );
}
