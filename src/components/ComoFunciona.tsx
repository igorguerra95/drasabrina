import React from 'react';
import { motion } from 'motion/react';
import { Video, ShieldCheck, Calendar, ArrowRight, Laptop, Headphones } from 'lucide-react';
import { PASSO_A_PASSO } from '../data/clinicalData.ts';

interface ComoFuncionaProps {
  onOpenContato: () => void;
}

export const ComoFunciona: React.FC<ComoFuncionaProps> = ({ onOpenContato }) => {
  return (
    <section id="como-funciona" className="py-20 sm:py-32 bg-[#FAF8F5] border-t border-[#E6E2D8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF0F2] border border-[#E31837]/20 text-[#E31837] text-xs font-semibold uppercase tracking-widest mb-4">
            <span>Passo a Passo Transparente</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#0F172A] leading-tight mb-4">
            Como funciona a jornada terapêutica
          </h2>

          <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
            Iniciar a terapia não precisa gerar ansiedade ou incertezas. Veja como estruturamos cada etapa 
            para que você se sinta seguro e no controle do seu próprio processo.
          </p>
        </div>

        {/* 4 Steps Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative mb-16">
          {PASSO_A_PASSO.map((item, idx) => (
            <motion.div
              key={item.passo}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="bg-white rounded-3xl p-7 border border-[#E6E2D8] shadow-luxe-sm hover:shadow-luxe transition-all duration-300 relative group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="w-10 h-10 rounded-xl bg-[#FAF0F2] text-[#E31837] font-display text-xl font-bold flex items-center justify-center group-hover:bg-[#E31837] group-hover:text-white transition-colors">
                    {item.passo}
                  </span>
                  <span className="text-[11px] font-bold text-[#64748B] tracking-wider uppercase">
                    Etapa {idx + 1}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-[#0F172A] mb-2 leading-snug">
                  {item.titulo}
                </h3>

                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {item.descricao}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#F0EBE0] text-[11px] font-semibold text-[#E31837]">
                Acolhimento contínuo
              </div>
            </motion.div>
          ))}
        </div>

        {/* Online Therapy Highlight Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E6E2D8] shadow-luxe grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 text-xs font-bold text-[#E31837] uppercase tracking-wider mb-2">
              <Laptop className="w-4 h-4" />
              <span>Modalidade Online com Criptografia de Ponta a Ponta</span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#0F172A] mb-3">
              Cuidado psicológico onde quer que você esteja
            </h3>

            <p className="text-sm sm:text-base text-[#475569] leading-relaxed mb-6">
              A terapia online elimina o trânsito, o tempo de deslocamento e os custos de transporte. 
              Você só precisa de uma conexão estável à internet, fones de ouvido e um ambiente privativo 
              onde possa falar com tranquilidade. Regulamentada pelo Conselho Federal de Psicologia (Resolução CFP nº 11/2018).
            </p>

            <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-[#0F172A] font-medium">
              <span className="flex items-center gap-1.5 bg-[#FAF8F5] px-3.5 py-1.5 rounded-full border border-[#E6E2D8]">
                <ShieldCheck className="w-4 h-4 text-[#E31837]" />
                Sigilo Absoluto
              </span>
              <span className="flex items-center gap-1.5 bg-[#FAF8F5] px-3.5 py-1.5 rounded-full border border-[#E6E2D8]">
                <Calendar className="w-4 h-4 text-[#E31837]" />
                Horários Flexíveis
              </span>
              <span className="flex items-center gap-1.5 bg-[#FAF8F5] px-3.5 py-1.5 rounded-full border border-[#E6E2D8]">
                <Headphones className="w-4 h-4 text-[#E31837]" />
                Ambiente Protegido
              </span>
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <button
              onClick={onOpenContato}
              className="inline-flex items-center gap-2 bg-[#0F172A] hover:bg-[#E31837] text-white text-base font-semibold px-8 py-4 rounded-full shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <span>Entrar em contato</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
