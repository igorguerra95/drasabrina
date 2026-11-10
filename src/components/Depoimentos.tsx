import React from 'react';
import { motion } from 'motion/react';
import { Quote, ShieldCheck, Heart, Star } from 'lucide-react';
import { DEPOIMENTOS_ETICOS } from '../data/clinicalData.ts';

export const Depoimentos: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#FAF8F5] border-t border-[#E6E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF0F2] border border-[#E31837]/20 text-[#E31837] text-xs font-semibold uppercase tracking-widest mb-4">
            <Heart className="w-3.5 h-3.5" />
            <span>Vozes de Quem Já Percorreu a Jornada</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#0F172A] leading-tight mb-4">
            A transformação que nasce da escuta
          </h2>

          <p className="text-base sm:text-lg text-[#475569]">
            Histórias reais de pessoas que escolheram não enfrentar suas dores sozinhas e reencontraram a clareza e a serenidade.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {DEPOIMENTOS_ETICOS.map((depoimento, idx) => (
            <motion.div
              key={depoimento.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-8 border border-[#E6E2D8] shadow-luxe-sm hover:shadow-luxe transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Quote Icon & Stars */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF0F2] text-[#E31837] flex items-center justify-center">
                    <Quote className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-[#F5F2EB] text-[#475569]">
                    {depoimento.modalidade}
                  </span>
                </div>

                {/* Subtitle / Queixa inicial */}
                <p className="text-xs font-bold text-[#E31837] uppercase tracking-wider mb-2">
                  Demanda: {depoimento.motivoBusca}
                </p>

                {/* Relato */}
                <p className="text-sm sm:text-base text-[#475569] leading-relaxed italic mb-6">
                  "{depoimento.relatoTransformacao}"
                </p>
              </div>

              {/* Bottom Patient Info */}
              <div className="pt-4 border-t border-[#F0EBE0] flex items-center justify-between">
                <div>
                  <p className="font-display text-base font-bold text-[#0F172A]">
                    Paciente {depoimento.iniciais}
                  </p>
                  <p className="text-xs text-[#64748B]">{depoimento.idadeEContexto}</p>
                </div>
                <span className="text-[11px] text-[#64748B] font-medium">
                  {depoimento.tempoTerapia}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Ethical disclaimer footer per CFP guidelines */}
        <div className="max-w-2xl mx-auto text-center text-xs text-[#64748B] flex items-center justify-center gap-2 bg-white/70 py-3 px-6 rounded-full border border-[#E6E2D8]">
          <ShieldCheck className="w-4 h-4 text-[#E31837] shrink-0" />
          <span>
            Em rigoroso respeito ao Código de Ética Profissional do Psicólogo (Art. 20), as identidades foram preservadas com iniciais fictícias e relatos autorizados expressamente para fins ilustrativos da prática clínica.
          </span>
        </div>

      </div>
    </section>
  );
};
