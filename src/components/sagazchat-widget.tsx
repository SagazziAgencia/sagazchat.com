'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';

// Widget Chat do Sagazchat (conta principal, fila Sagazchat — Comercial).
// Fora da /consultiva, que já tem o próprio botão de chat no mesmo canto.
export function SagazchatWidget() {
  const pathname = usePathname();
  if (pathname?.startsWith('/consultiva')) return null;

  return (
    <Script
      src="https://backend.sagazchat.com/public/widget.js"
      data-widget-token="0e170fbb-f3d2-48c6-af75-2aa475e85be1"
      strategy="afterInteractive"
    />
  );
}
