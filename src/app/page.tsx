import { Header } from '@/components/landing/header';
import { Hero } from '@/components/landing/hero';
import { FlowBuilderSection } from '@/components/landing/flow-builder-section';
import { FeaturesTicker } from '@/components/landing/features-ticker';
import { MultiWhatsapp } from '@/components/landing/multi-whatsapp';
import { InstagramSection } from '@/components/landing/instagram-section';
import { WebhookSection } from '@/components/landing/webhook-section';
import { CrmKanbanSection } from '@/components/landing/crm-kanban-section';
import { TestimonialsSection } from '@/components/landing/testimonials-section';
import { PricingSection } from '@/components/landing/pricing-section';
import { FaqSection } from '@/components/landing/faq-section';
import { Footer } from '@/components/landing/footer';
import { AiChatbotSection } from '@/components/landing/ai-chatbot-section';
import { BroadcastSection } from '@/components/landing/broadcast-section';
import { ShortcutSection } from '@/components/landing/shortcut-section';
import { RemarketingSection } from '@/components/landing/remarketing-section';

export default function SagazchatLanding() {
  return (
    <div className="min-h-screen bg-white font-sans" style={{ overflowX: 'clip' }}>
      <Header />
      <Hero />

      <main>
        <FeaturesTicker />
        <FlowBuilderSection />
        <MultiWhatsapp />
        <InstagramSection />
        <AiChatbotSection />
        <WebhookSection />
        <BroadcastSection />
        <CrmKanbanSection />
        <ShortcutSection />
        <RemarketingSection />
        <TestimonialsSection />
        <PricingSection />
        <FaqSection />
        <Footer />
      </main>
    </div>
  );
}
