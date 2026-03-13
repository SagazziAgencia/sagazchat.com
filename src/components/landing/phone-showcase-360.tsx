'use client';

import { MultichannelChat } from './multichannel-chat';

const showcasePhones = [
  { channel: 'whatsapp' as const, angle: 0 },
  { channel: 'instagram' as const, angle: 90 },
  { channel: 'messenger' as const, angle: 180 },
  { channel: 'instagram' as const, angle: 270 },
];

export function PhoneShowcase360() {
  return (
    <div className="phone360-root relative h-[540px] w-full max-w-[440px] sm:h-[620px]">
      <div className="pointer-events-none absolute inset-x-10 top-12 h-[72%] rounded-[2.75rem] bg-gradient-to-br from-emerald-50 via-white to-slate-100 shadow-[0_34px_100px_-48px_rgba(2,6,23,0.35)]" />
      <div className="pointer-events-none absolute inset-x-14 top-16 h-[64%] rounded-[2.25rem] bg-white/65 backdrop-blur-[1px]" />
      <div className="pointer-events-none absolute -left-2 top-24 h-36 w-36 rounded-full bg-emerald-100/70 blur-3xl" />
      <div className="pointer-events-none absolute -right-2 bottom-20 h-40 w-40 rounded-full bg-slate-200/70 blur-3xl" />
      <div className="pointer-events-none absolute inset-x-10 bottom-8 h-16 rounded-full bg-slate-900/12 blur-2xl" />

      <div className="absolute inset-0 flex items-center justify-center [perspective:1400px]">
        <div className="phone360-stage relative h-full w-full [transform-style:preserve-3d]">
          {showcasePhones.map((phone, index) => (
            <div
              key={`${phone.channel}-${index}`}
              className="absolute left-1/2 top-1/2 [transform-style:preserve-3d]"
              style={{
                transform: `translate(-50%, -50%) rotateY(${phone.angle}deg) translateZ(var(--ring-radius)) rotateX(-6deg)`,
              }}
            >
              <div className="origin-center scale-[0.46] sm:scale-[0.56] md:scale-[0.62]">
                <div className="relative h-[600px] w-[300px] [transform-style:preserve-3d]">
                  <div
                    className="absolute inset-0"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <MultichannelChat
                      lockedChannelId={phone.channel}
                      pauseOnHover={false}
                      className="pointer-events-none mx-0"
                    />
                  </div>

                  <div
                    className="absolute inset-0 [transform:rotateY(180deg)]"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <div className="relative h-full w-full overflow-hidden rounded-[3rem] border-[8px] border-slate-900 bg-gradient-to-b from-slate-900 to-slate-800 shadow-2xl ring-1 ring-white/10">
                      <div className="absolute inset-[10px] rounded-[2.2rem] bg-gradient-to-b from-slate-800 via-slate-900 to-black" />
                      <div className="absolute left-1/2 top-10 h-8 w-20 -translate-x-1/2 rounded-2xl bg-black/85 ring-1 ring-white/5" />
                      <div className="absolute left-1/2 top-[46%] h-20 w-20 -translate-x-1/2 rounded-[1.75rem] border border-white/10 bg-white/[0.04] shadow-inner">
                        <div className="absolute left-1/2 top-1/2 h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-white/[0.03]" />
                      </div>
                      <div className="absolute right-6 top-20 h-14 w-14 rounded-full border border-white/10 bg-slate-700/30 backdrop-blur-sm">
                        <div className="absolute inset-2 rounded-full border border-white/10 bg-slate-900/60" />
                      </div>
                      <div className="absolute left-1/2 bottom-5 h-1.5 w-28 -translate-x-1/2 rounded-full bg-white/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .phone360-root {
          --ring-radius: 128px;
        }

        .phone360-stage {
          animation: sagaz-phone-showcase-spin 22s linear infinite;
          transform: rotateX(8deg) rotateY(0deg);
          transform-style: preserve-3d;
          will-change: transform;
        }

        @keyframes sagaz-phone-showcase-spin {
          from {
            transform: rotateX(8deg) rotateY(0deg);
          }
          to {
            transform: rotateX(8deg) rotateY(360deg);
          }
        }

        @media (min-width: 640px) {
          .phone360-root {
            --ring-radius: 154px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .phone360-stage {
            animation: none;
            transform: rotateX(6deg) rotateY(24deg);
          }
        }
      `}</style>
    </div>
  );
}
