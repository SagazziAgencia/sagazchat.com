import type { Metadata } from 'next';
import { Host_Grotesk, JetBrains_Mono } from 'next/font/google';
import '@/components/directions/a/a.css';
import { AHero } from '@/components/directions/a/a-hero';
import { ARecovery } from '@/components/directions/a/a-recovery';
import { APlan } from '@/components/directions/a/a-plan';

const display = Host_Grotesk({ subsets: ['latin'], variable: '--font-dir', display: 'swap' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-dir-mono', display: 'swap' });

export const metadata: Metadata = { title: 'Direção A — Produto como palco', robots: { index: false } };

export default function DirecaoA() {
  return (
    <div className={`dir-a ${display.variable} ${mono.variable} min-h-screen`} style={{ overflowX: 'clip' }}>
      <AHero />
      <ARecovery />
      <APlan />
    </div>
  );
}
