import type { Metadata } from 'next';
import { Gabarito } from 'next/font/google';
import '@/components/directions/c/c.css';
import { CShell } from '@/components/directions/c/c-shell';
import { CHero } from '@/components/directions/c/c-hero';
import { CRecovery } from '@/components/directions/c/c-recovery';
import { CPlan } from '@/components/directions/c/c-plan';

const display = Gabarito({ subsets: ['latin'], variable: '--font-dir', display: 'swap' });

export const metadata: Metadata = { title: 'Direção C — Conversa é a página', robots: { index: false } };

export default function DirecaoC() {
  return (
    <div className={`dir-c ${display.variable} min-h-screen`} style={{ overflowX: 'clip' }}>
      <CShell>
        <CHero />
        <CRecovery />
        <CPlan />
      </CShell>
    </div>
  );
}
