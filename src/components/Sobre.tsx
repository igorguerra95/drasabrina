import React from 'react';
import { motion } from 'motion/react';
import { 
  Award, 
  BookOpen, 
  ShieldCheck, 
  Heart, 
  ArrowRight, 
  Check, 
  Sparkles,
  Lock,
  Layers
} from 'lucide-react';
import { PILARES_CLINICOS, IMAGENS_CURADAS } from '../data/clinicalData.ts';

interface SobreProps {
  onOpenContato: () => void;
}

export const Sobre: React.FC<SobreProps> = ({ onOpenContato }) => {
  return (
    <section id="sobre" className="py-20 sm:py-32 bg-white relative overflow-hidden">
      {/* Decorative ambient subtle circle */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#E31837]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid: Bio & Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20 sm:mb-28">
          
          {/* Visual Column */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Back Accent Shape */}
              <div className="absolute -inset-4 rounded-3xl bg-[#FAF0F2] -rotate-2 -z-10 border border-[#E31837]/15" />

              {/* Image Frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-luxe border border-[#E6E2D8]">
                <img
                  src={IMAGENS_CURADAS.consultorioAcolhedor}
                  alt="Consultório acolhedor da Dra. Sabrina Krambeck com poltronas confortáveis e luz suave"
                  className="w-full h-[480px] sm:h-[540px] object-cover hover:scale-105 transition-transform duration-700"
                />

                {/* Overlaid Bottom Card */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-[#E6E2D8] shadow-md">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#FAF0F2] flex items-center justify-center text-[#E31837] shrink-0">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#0F172A]">CRP 06/158420 • Especialista Clínica</p>
                      <p className="text-[11px] text-[#64748B]">Terapia Cognitivo-Comportamental & Neuropsicologia</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating quote card */}
              <div className="absolute -top-6 -right-4 sm:-right-8 bg-[#0F172A] text-white p-4 rounded-2xl shadow-xl max-w-[220px] border border-white/10 hidden sm:block">
                <p className="font-display italic text-sm leading-snug">
                  "O autoconhecimento não elimina as tempestades da vida, mas ensina a navegar com firmeza."
                </p>
                <p className="text-[10px] text-neutral-400 mt-2 font-medium uppercase tracking-wider">
                  — Dra. Sabrina Krambeck
                </p>
              </div>

            </div>
          </motion.div>

          {/* Copy Column */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF0F2] border border-[#E31837]/20 text-[#E31837] text-xs font-semibold uppercase tracking-widest mb-4">
              <span>Sobre a Terapeuta & Abordagem</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#0F172A] leading-tight mb-6">
              Acolhimento com sensibilidade humana e <span className="text-[#E31837]">rigor científico</span>
            </h2>

            <div className="space-y-4 text-base text-[#475569] leading-relaxed mb-8">
              <p>
                Sou a <strong>Dra. Sabrina Krambeck</strong>, psicóloga clínica com mais de uma década dedicada à escuta profunda e ao tratamento de transtornos emocionais em adultos e casais. Minha trajetória é guiada por uma convicção sólida: <em>a dor emocional não é fraqueza de caráter, mas um sinal de que algo em sua história precisa de cuidado e reorganização.</em>
              </p>
              <p>
                Minha prática combina os avanços mais consistentes da <strong>Terapia Cognitivo-Comportamental (TCC)</strong> e das abordagens contextuais com uma postura humanista, calorosa e empática. Não utilizo roteiros mecânicos nem promessas milagrosas de autoajuda: cada sessão é um diálogo vivo, pensado sob medida para a sua realidade.
              </p>
              <p>
                Seja no formato <strong>online</strong> (que permite acolher pacientes de qualquer estado do Brasil e brasileiros no exterior com máxima conveniência e sigilo) ou no <strong>atendimento presencial</strong>, você encontrará um refúgio de serenidade para recuperar o fôlego e reconstruir sua autonomia.
              </p>
            </div>

            {/* Checklist of Credentials */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mb-8 pt-4 border-t border-[#F0EBE0]">
              <div className="flex items-center gap-2.5 text-sm text-[#0F172A] font-medium">
                <div className="w-5 h-5 rounded-full bg-[#FAF0F2] flex items-center justify-center text-[#E31837] shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Graduação e Pós-Graduação em Psicologia</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-[#0F172A] font-medium">
                <div className="w-5 h-5 rounded-full bg-[#FAF0F2] flex items-center justify-center text-[#E31837] shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Especialização em TCC & Ansiedade</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-[#0F172A] font-medium">
                <div className="w-5 h-5 rounded-full bg-[#FAF0F2] flex items-center justify-center text-[#E31837] shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Supervisão Clínica Permanente</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-[#0F172A] font-medium">
                <div className="w-5 h-5 rounded-full bg-[#FAF0F2] flex items-center justify-center text-[#E31837] shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Cadastro e-Psi no CFP para Atendimento Online</span>
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={onOpenContato}
              className="inline-flex items-center gap-2.5 bg-[#E31837] hover:bg-[#b8122c] text-white text-base font-semibold px-8 py-3.5 rounded-full shadow-luxe hover:shadow-luxe-hover transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Entrar em contato</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

        </div>

        {/* The 4 Clinical Pillars */}
        <div className="pt-12 border-t border-[#E6E2D8]">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#E31837] bg-[#FAF0F2] px-3.5 py-1 rounded-full border border-[#E31837]/20">
              Compromisso com você
            </span>
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-[#0F172A] mt-3 mb-2">
              Os 4 pilares do nosso espaço terapêutico
            </h3>
            <p className="text-sm sm:text-base text-[#475569]">
              Diretrizes éticas e técnicas que sustentam cada encontro clínico.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PILARES_CLINICOS.map((pilar, idx) => (
              <motion.div
                key={pilar.numero}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#FAF8F5] rounded-2xl p-6 sm:p-7 border border-[#E6E2D8] hover:border-[#E31837]/40 transition-all duration-300 flex flex-col justify-between group hover:shadow-md"
              >
                <div>
                  <span className="font-display text-3xl font-bold text-[#E31837] group-hover:scale-110 transition-transform inline-block mb-3">
                    {pilar.numero}
                  </span>
                  <h4 className="font-display text-xl font-bold text-[#0F172A] mb-2 leading-snug">
                    {pilar.titulo}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                    {pilar.descricao}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
