import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, MessageCircle, ArrowRight } from 'lucide-react';
import { FAQS } from '../data/clinicalData.ts';

interface FAQProps {
  onOpenContato: () => void;
}

export const FAQ: React.FC<FAQProps> = ({ onOpenContato }) => {
  const [openId, setOpenId] = useState<string | null>('online-funciona');

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="duvidas" className="py-20 sm:py-32 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF0F2] border border-[#E31837]/20 text-[#E31837] text-xs font-semibold uppercase tracking-widest mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Perguntas Frequentes</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#0F172A] leading-tight mb-4">
            Dúvidas comuns sobre a psicoterapia
          </h2>

          <p className="text-base sm:text-lg text-[#475569]">
            Transparência e clareza para que você tome sua decisão com total segurança e tranquilidade.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openId === faq.id;

            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-[#E31837]/40 bg-[#FAF8F5] shadow-luxe-sm'
                    : 'border-[#E6E2D8] bg-white hover:border-[#E31837]/30'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full py-5 px-6 sm:px-8 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#E31837]" />
                    <span className="font-display text-lg sm:text-xl font-bold text-[#0F172A]">
                      {faq.pergunta}
                    </span>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? 'bg-[#E31837] text-white' : 'bg-[#FAF0F2] text-[#E31837]'
                    }`}
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 sm:px-8 pb-6 pt-1 text-sm sm:text-base text-[#475569] leading-relaxed border-t border-[#F0EBE0]/80">
                        <p>{faq.resposta}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Small Bottom Assistance Box */}
        <div className="mt-12 text-center bg-[#FAF8F5] p-6 rounded-2xl border border-[#E6E2D8] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="font-display text-lg font-bold text-[#0F172A]">Tem alguma dúvida que não foi listada aqui?</p>
            <p className="text-xs sm:text-sm text-[#64748B]">Nossa equipe está pronta para responder qualquer pergunta sem nenhum compromisso.</p>
          </div>
          <button
            onClick={onOpenContato}
            className="inline-flex items-center gap-2 bg-[#0F172A] hover:bg-[#E31837] text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-full transition-colors cursor-pointer shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Fazer uma pergunta</span>
          </button>
        </div>

      </div>
    </section>
  );
};
