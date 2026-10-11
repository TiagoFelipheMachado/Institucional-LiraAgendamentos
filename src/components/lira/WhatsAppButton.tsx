import React from 'react'
import { Icon } from './Icon'

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
      aria-label="Fale conosco — ir para o formulário de contato"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 min-h-[44px] min-w-[44px] rounded-full bg-[#34E5A0] text-[#070708] flex items-center justify-center shadow-[0_8px_24px_rgba(52,229,160,0.35)] hover:scale-105 active:scale-95 transition-transform"
    >
      <Icon name="chat" size={26} />
    </a>
  )
}
