import { Header } from '@/components/landing/header';
import { Hero } from '@/components/landing/hero';

import { IntegrationsTicker, FeaturesTicker } from '@/components/landing/features-ticker';
import { MultiWhatsapp } from '@/components/landing/multi-whatsapp';
import { InstagramSection } from '@/components/landing/instagram-section';
import { WebhookSection } from '@/components/landing/webhook-section';
import { EnterpriseSection } from '@/components/landing/enterprise-section';
import { CrmKanbanSection } from '@/components/landing/crm-kanban-section';
import { TestimonialsSection } from '@/components/landing/testimonials-section';
import { PricingSection } from '@/components/landing/pricing-section';
import { FaqSection } from '@/components/landing/faq-section';
import { Footer } from '@/components/landing/footer';
import { AiChatbotSection } from '@/components/landing/ai-chatbot-section';
import { BroadcastSection } from '@/components/landing/broadcast-section';
import { RemarketingSection } from '@/components/landing/remarketing-section';
import { ProductGrid } from '@/components/landing/product-grid';

export default function SagazchatLanding() {
  return (
    <div className="min-h-screen bg-white font-sans" style={{ overflowX: 'clip' }}>
      <Header />
      <Hero />

      <main>
        <IntegrationsTicker />
        <ProductGrid />
        <MultiWhatsapp />
        <InstagramSection />
        <AiChatbotSection />
        <WebhookSection />
        <EnterpriseSection />
        <BroadcastSection />
        <CrmKanbanSection />
        <RemarketingSection />
        <TestimonialsSection />
        <PricingSection />
        <FaqSection />
        <Footer />
      </main>
    </div>
  );
}
