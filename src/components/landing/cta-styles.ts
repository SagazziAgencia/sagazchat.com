const ctaBase =
  'inline-flex h-[54px] min-h-[54px] items-center justify-center gap-2.5 whitespace-nowrap rounded-[10px] px-8 text-[15px] font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 active:scale-[0.98]';

const ctaCompactBase =
  'inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-[10px] px-4 text-[13px] font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 active:scale-[0.98]';

export const ctaPrimary =
  `${ctaBase} min-w-[220px] bg-primary text-white shadow-[0_4px_14px_rgba(23,199,90,0.25)] hover:bg-primary/90 hover:shadow-[0_6px_20px_rgba(23,199,90,0.35)]`;

export const ctaSecondary =
  `${ctaBase} min-w-[160px] border border-slate-300 bg-white text-slate-900 hover:border-slate-400 hover:bg-slate-50 hover:text-slate-900`;

export const ctaSecondaryDark =
  `${ctaBase} min-w-[160px] border border-slate-600 bg-transparent text-white hover:bg-white/5 focus-visible:ring-offset-slate-900`;

export const ctaHeaderPrimary =
  `${ctaCompactBase} h-9 min-h-9 bg-primary text-white hover:bg-primary/90`;

export const ctaHeaderSecondary =
  `${ctaCompactBase} h-9 min-h-9 border border-slate-300 bg-white text-slate-600 hover:border-slate-400 hover:text-slate-900`;

export const ctaHeaderMobilePrimary =
  `${ctaCompactBase} h-11 min-h-11 w-full bg-primary text-sm text-white hover:bg-primary/90`;

export const ctaDesktopInline = 'mt-2 hidden w-fit lg:inline-flex lg:self-start';

const ctaPlanBase =
  'group flex h-11 min-h-11 w-full items-center justify-between rounded-[10px] px-4 text-[13px] font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 active:scale-[0.98]';

export const ctaPlanPrimary =
  `${ctaPlanBase} bg-primary text-white hover:bg-primary/90`;

export const ctaPlanDark =
  `${ctaPlanBase} bg-slate-950 text-white hover:bg-slate-800`;

export const ctaRow = 'flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center';

export const ctaMobileFull = 'w-full sm:w-auto';
