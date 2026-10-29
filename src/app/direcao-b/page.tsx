import type { Metadata } from 'next';
import { Mona_Sans, DM_Mono } from 'next/font/google';
import '@/components/directions/b/b.css';
import { BHero } from '@/components/directions/b/b-hero';
import { BRecovery } from '@/components/directions/b/b-recovery';
import { BPlan } from '@/components/directions/b/b-plan';

const display = Mona_Sans({ subsets: ['latin'], axes: ['wdth'], variable: '--font-dir', display: 'swap' });
const mono = DM_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-dir-mono', display: 'swap' });

export const metadata: Metadata = { title: 'Direção B — Editorial do dinheiro', robots: { index: false } };

export default function DirecaoB() {
  return (
    <div className={`dir-b ${display.variable} ${mono.variable} min-h-screen`} style={{ overflowX: 'clip' }}>
      <BHero />
      <BRecovery />
      <BPlan />
    </div>
  );
}
