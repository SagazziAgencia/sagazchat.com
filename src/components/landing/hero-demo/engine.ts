/* Relógio pausável da demo do hero.
   Uma linha do tempo só (eventos + interpolações) avançada por requestAnimationFrame.
   Pausar = parar o rAF: o tempo para junto e continua de onde estava. Sem libs. */

export type Pt = { x: number; y: number };

export const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
export const easeInOutCubic = (p: number) => (p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2);
export const easeOutCubic = (p: number) => 1 - Math.pow(1 - p, 3);

/* Arco quadrático: o ponteiro curva em vez de andar em linha reta. */
export function arc(from: Pt, to: Pt, p: number, bend: number): Pt {
  const mx = (from.x + to.x) / 2;
  const my = (from.y + to.y) / 2;
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const cx = mx - dy * bend;
  const cy = my + dx * bend;
  const q = 1 - p;
  return {
    x: q * q * from.x + 2 * q * p * cx + p * p * to.x,
    y: q * q * from.y + 2 * q * p * cy + p * p * to.y,
  };
}

type Ev = { at: number; fn: () => void; fired: boolean };
type Tw = { at: number; dur: number; begin?: () => void; tick: (p: number) => void; started: boolean; ended: boolean };

export class Timeline {
  private events: Ev[] = [];
  private tweens: Tw[] = [];
  end = 0;

  ev(at: number, fn: () => void) {
    this.events.push({ at, fn, fired: false });
  }

  tween(at: number, dur: number, tick: (p: number) => void, begin?: () => void) {
    this.tweens.push({ at, dur, tick, begin, started: false, ended: false });
  }

  reset() {
    this.events.forEach((e) => (e.fired = false));
    this.tweens.forEach((w) => {
      w.started = false;
      w.ended = false;
    });
  }

  /* Avança até o instante t. Eventos e interpolações disparam na ordem em que o tempo cruza. */
  run(t: number) {
    for (const e of this.events) {
      if (!e.fired && t >= e.at) {
        e.fired = true;
        e.fn();
      }
    }
    for (const w of this.tweens) {
      if (w.ended || t < w.at) continue;
      if (!w.started) {
        w.started = true;
        w.begin?.();
      }
      const p = clamp((t - w.at) / w.dur);
      w.tick(p);
      if (p >= 1) w.ended = true;
    }
  }
}
