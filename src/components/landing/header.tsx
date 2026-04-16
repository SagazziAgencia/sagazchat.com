"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Menu, X } from 'lucide-react';

import { Logo } from '../brand/logo';
import { LANDING_CTA } from './cta-links';

const navItems = [
  { href: '#hero', label: 'Início' },
  { href: LANDING_CTA.featuresAnchor, label: 'Produto' },
  { href: LANDING_CTA.pricingAnchor, label: 'Planos' },
  { href: LANDING_CTA.testimonialsAnchor, label: 'Demonstrações' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className="mx-auto max-w-7xl px-4 pt-3 sm:px-6">
        <div
          className={`relative mx-auto flex h-[60px] items-center justify-between rounded-[14px] border px-5 transition-all duration-300 ${
            scrolled
              ? 'border-slate-200 bg-white/95 shadow-sm backdrop-blur-xl'
              : 'border-slate-200/60 bg-white/80 backdrop-blur-md'
          }`}
        >
          <Link href="/" className="flex shrink-0 items-center" aria-label="Sagazchat - página inicial">
            <Logo height={20} variant="black" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3.5 py-1.5 text-[13px] font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop actions */}
          <div className="hidden items-center gap-3 lg:flex">
            <div className="h-6 w-px bg-slate-200" />

            <Link
              href={LANDING_CTA.app}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-slate-300 px-4 py-1.5 text-[13px] font-medium text-slate-600 transition-colors hover:border-slate-400 hover:text-slate-900"
            >
              Entrar
            </Link>

            <Link
              href={LANDING_CTA.pricingAnchor}
              className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-primary px-4 text-[13px] font-semibold text-white transition-colors hover:bg-primary/90"
            >
              Começar agora
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-landing-menu"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 lg:hidden"
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="px-4 pt-2 sm:px-6 lg:hidden">
          <div
            id="mobile-landing-menu"
            className="overflow-hidden rounded-[14px] border border-slate-200 bg-white/95 p-2 shadow-lg backdrop-blur-xl"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleLinkClick}
                className="block rounded-lg px-4 py-3 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900"
              >
                {item.label}
              </Link>
            ))}

            <div className="mt-2 border-t border-slate-100 pt-3 px-1 pb-1">
              <Link
                href={LANDING_CTA.pricingAnchor}
                onClick={handleLinkClick}
                className="flex h-11 items-center justify-center gap-1.5 rounded-lg bg-primary text-sm font-semibold text-white transition-colors hover:bg-primary/90"
              >
                Começar agora
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>

              <a
                href={LANDING_CTA.app}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className="mt-1 flex items-center justify-center gap-1 py-2.5 text-sm text-slate-400 transition-colors hover:text-slate-600"
              >
                Área do cliente
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
