import React from 'react'

/**
 * Floating quick-contact button. Deliberately links to #contato instead of a
 * wa.me number — there's no confirmed public WhatsApp line for Lira yet, and
 * a fabricated number would silently break (or reach the wrong inbox) for a
 * real visitor. Swap the href for `https://wa.me/55XXXXXXXXXXX` once a real
 * number is confirmed.
 */
export const LiraWhatsAppButton: React.FC = () => {
  return (
    <a
      href="#contato"
      aria-label="Fale conosco no WhatsApp — ir para o formulário de contato"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-2xl shadow-[0_8px_24px_rgba(37,211,102,0.35)] hover:scale-110 active:scale-95 transition-all duration-200"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/whatsapp.png"
        alt="WhatsApp"
        width={56}
        height={56}
        className="w-full h-full object-contain drop-shadow-sm select-none"
      />
    </a>
  )
}
