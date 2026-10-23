import React from 'react'
import { WHATSAPP_URL } from '@/utilities/lira/pricing'

/** Floating quick-contact button. */
export const LiraWhatsAppButton: React.FC = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco no WhatsApp"
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
