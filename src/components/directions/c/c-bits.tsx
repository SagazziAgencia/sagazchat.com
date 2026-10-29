import type { ReactNode } from 'react';
import { CheckCheck } from 'lucide-react';

export function Ticks({ time, out }: { time: string; out?: boolean }) {
  return (
    <span className="ml-2 inline-flex translate-y-[3px] items-center gap-1 text-[11px] text-[var(--c-mute)]">
      {time}
      {out && <CheckCheck className="h-3.5 w-3.5 text-[#1d8fe0]" aria-hidden />}
    </span>
  );
}

export function Typing({ out }: { out?: boolean }) {
  return (
    <div className={`${out ? 'c-out ml-auto' : 'c-in'} c-pop inline-flex w-fit items-center gap-1 px-4 py-3`} aria-label="digitando">
      {[0, 150, 300].map((d) => (
        <span key={d} className="c-dot h-[7px] w-[7px] rounded-full bg-[#7b8c82]" style={{ animationDelay: `${d}ms` }} />
      ))}
    </div>
  );
}

/** Marca de data/sistema no meio da conversa — também faz o papel de título de seção. */
export function Chip({ children, tone = 'plain' }: { children: ReactNode; tone?: 'plain' | 'green' | 'ink' }) {
  const t =
    tone === 'green'
      ? 'bg-[#c9f2d4] text-[#0b4d24]'
      : tone === 'ink'
        ? 'bg-[var(--c-ink)] text-white'
        : 'bg-white/90 text-[var(--c-mute)] shadow-[0_1px_0_rgba(11,26,18,0.1)]';
  return (
    <div className="flex justify-center">
      <span className={`c-pop inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[12px] font-bold uppercase tracking-[0.08em] ${t}`}>{children}</span>
    </div>
  );
}

export function Avatar({ label, tone = 'bg-[var(--c-green)] text-[var(--c-ink)]', size = 36 }: { label: string; tone?: string; size?: number }) {
  return (
    <span className={`inline-flex shrink-0 items-center justify-center rounded-full text-[13px] font-extrabold ${tone}`} style={{ width: size, height: size }}>
      {label}
    </span>
  );
}
