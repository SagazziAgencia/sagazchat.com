'use client';

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ComponentPropsWithoutRef,
  type ElementType,
  type ReactNode,
} from 'react';

type ScrollStoryProps<T extends ElementType = 'div'> = {
  as?: T;
  children: ReactNode;
  className?: string;
  rootMargin?: string;
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'children' | 'className'>;

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function ScrollStory<T extends ElementType = 'div'>({
  as,
  children,
  className = '',
  rootMargin = '-12% 0px -18% 0px',
  style,
  ...props
}: ScrollStoryProps<T>) {
  const Tag = (as || 'div') as ElementType;
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(motionQuery.matches);

    const onMotionChange = () => setPrefersReducedMotion(motionQuery.matches);
    motionQuery.addEventListener('change', onMotionChange);
    return () => motionQuery.removeEventListener('change', onMotionChange);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion) return;

    let frame = 0;

    const updateProgress = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const viewport = window.innerHeight || document.documentElement.clientHeight;
      const start = viewport * 0.88;
      const end = -rect.height * 0.18;
      const progress = clamp((start - rect.top) / (start - end), 0, 1);
      el.style.setProperty('--scroll-progress', progress.toFixed(4));
      el.style.setProperty('--scroll-lift', `${((1 - progress) * 32).toFixed(2)}px`);
      el.style.setProperty('--scroll-drift', `${((progress - 0.5) * 28).toFixed(2)}px`);
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateProgress);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        if (entry.isIntersecting) requestUpdate();
      },
      { threshold: [0, 0.12, 0.28, 0.5, 0.72], rootMargin }
    );

    observer.observe(el);
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);
    updateProgress();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [prefersReducedMotion, rootMargin]);

  return (
    <Tag
      ref={ref as any}
      className={`scroll-story ${isInView ? 'is-in-view' : ''} ${className}`}
      style={{
        ...style,
        '--scroll-progress': prefersReducedMotion ? 1 : 0,
        '--scroll-lift': prefersReducedMotion ? '0px' : '32px',
        '--scroll-drift': prefersReducedMotion ? '0px' : '-14px',
      } as CSSProperties}
      {...props}
    >
      {children}
    </Tag>
  );
}
