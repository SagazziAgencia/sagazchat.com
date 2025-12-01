'use client';

import { Header } from '@/components/landing/header';
import { Hero } from '@/components/landing/hero';
import { FlowBuilderSection } from '@/components/landing/flow-builder-section';
import { FeaturesTicker } from '@/components/landing/features-ticker';
import { MultiWhatsapp } from '@/components/landing/multi-whatsapp';
import { WebhookSection } from '@/components/landing/webhook-section';
import { ShortcutSection } from '@/components/landing/shortcut-section';
import { CrmKanbanSection } from '@/components/landing/crm-kanban-section';
import { RemarketingSection } from '@/components/landing/remarketing-section';
import { GroupManagerSection } from '@/components/landing/group-manager-section';
import { TestimonialsSection } from '@/components/landing/testimonials-section';
import { PricingSection } from '@/components/landing/pricing-section';

export default function RespondeZapLanding() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <FlowBuilderSection />
        <FeaturesTicker />
        <MultiWhatsapp />
        <WebhookSection />
        <ShortcutSection />
        <CrmKanbanSection />
        <RemarketingSection />
        <GroupManagerSection />
        <TestimonialsSection />
        <PricingSection />
      </main>
    </div>
  );
}
