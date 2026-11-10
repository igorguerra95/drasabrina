import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export const WhatsAppFloating: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const defaultMessage = encodeURIComponent(
    'Olá, Dra. Sabrina Krambeck! Gostaria de saber mais informações sobre os atendimentos e disponibilidade de horários para consulta.'
  );
  const whatsappUrl = `https://wa.me/5511999999999?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      
      {/* Friendly Tooltip Balloon */}
      {showTooltip && (
        <div className="mb-3 mr-1 bg-white/95 backdrop-blur-md text-[#0F172A] p-3.5 rounded-2xl shadow-xl border border-[#E6E2D8] max-w-[240px] pointer-events-auto relative animate-fade-in text-xs">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-[#94A3B8] hover:text-[#0F172A] cursor-pointer"
            aria-label="Fechar mensagem"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-bold text-[#0F172A]">Atendimento Online</span>
          </div>
          <p className="text-[#475569] leading-snug">
            Olá! Precisa de ajuda para tirar dúvidas ou agendar sua sessão?
          </p>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar no WhatsApp com a Dra. Sabrina Krambeck"
        className="pointer-events-auto w-14 h-14 rounded-full bg-[#E31837] hover:bg-[#b8122c] text-white flex items-center justify-center shadow-2xl transition-all duration-300 transform hover:scale-110 animate-soft-pulse cursor-pointer group"
      >
        <MessageCircle className="w-7 h-7 group-hover:rotate-6 transition-transform" />
      </a>
    </div>
  );
};
