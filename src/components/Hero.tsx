import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, ArrowRight, Video, MapPin, Sparkles, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { IMAGENS_CURADAS } from '../data/clinicalData.ts';

interface HeroProps {
  onOpenContato: () => void;
  onExploreAreas: () => void;
}

// Simple CountUp helper component
const CountUp: React.FC<{ end: number; prefix?: string; suffix?: string; duration?: number }> = ({
  end,
  prefix = '',
  suffix = '',
  duration = 1800
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * end));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [end, duration]);

  return (
    <span>
      {prefix}
      {count.toLocaleString('pt-BR')}
      {suffix}
    </span>
  );
};

export const Hero: React.FC<HeroProps> = ({ onOpenContato, onExploreAreas }) => {
  return (
    <section id="inicio" className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden bg-grain">
      {/* Background soft ambient glow */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#E31837]/6 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#FAF0F2] border border-[#E31837]/25 text-[#E31837] text-xs sm:text-sm font-semibold tracking-wide mb-6 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[#E31837] animate-pulse" />
              <span>Psicoterapia Clínica Baseada em Evidências</span>
              <span className="text-neutral-300">|</span>
              <span className="text-[#0F172A] font-medium">CRP 06/158420</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#0F172A] leading-[1.08] mb-6 text-balance"
            >
              Onde a sua dor encontra <span className="italic font-normal text-[#E31837]">escuta genuína</span> e o seu futuro, clareza.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-lg sm:text-xl text-[#475569] font-normal leading-relaxed mb-8 max-w-2xl"
            >
              Um espaço seguro, livre de julgamentos, para você desacelerar o ruído externo, 
              compreender suas emoções e construir uma relação gentil consigo mesmo. 
              Atendimentos clínicos para adultos e casais na modalidade <strong className="text-[#0F172A] font-semibold">online em todo o Brasil</strong> e <strong className="text-[#0F172A] font-semibold">presencial</strong>.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10"
            >
              <button
                onClick={onOpenContato}
                className="inline-flex items-center justify-center gap-3 bg-[#E31837] hover:bg-[#b8122c] text-white text-base font-semibold px-8 py-4 rounded-full shadow-luxe hover:shadow-luxe-hover transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer group"
              >
                <span>Entrar em contato</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreAreas}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#F5F2EB] text-[#0F172A] text-base font-medium px-7 py-4 rounded-full border border-[#E6E2D8] hover:border-[#0F172A]/30 transition-all duration-200 cursor-pointer shadow-sm"
              >
                <span>Conhecer Áreas de Atuação</span>
              </button>
            </motion.div>

            {/* Trust Markers Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full pt-6 border-t border-[#E6E2D8]"
            >
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#475569]">
                <ShieldCheck className="w-4 h-4 text-[#E31837] shrink-0" />
                <span>Sigilo Absoluto (CFP Art. 9º)</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#475569]">
                <Video className="w-4 h-4 text-[#E31837] shrink-0" />
                <span>Online (Google Meet Criptografado)</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#475569]">
                <CheckCircle2 className="w-4 h-4 text-[#E31837] shrink-0" />
                <span>Recibo para Reembolso Médico</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Editorial Visual Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative border frame */}
              <div className="absolute -inset-3 rounded-3xl border border-[#E31837]/15 -rotate-1 pointer-events-none" />
              
              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-luxe bg-[#F5F2EB] border border-[#E6E2D8]">
                <img
                  src={IMAGENS_CURADAS.terapeutaHero}
                  alt="Dra. Sabrina Krambeck em seu consultório acolhedor"
                  className="w-full h-[460px] sm:h-[520px] object-cover object-top hover:scale-[1.02] transition-transform duration-700"
                />

                {/* Bottom Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/20 to-transparent" />

                {/* Overlaid Card Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-xs font-medium tracking-wider uppercase text-emerald-300">
                      Agenda aberta para este mês
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-white leading-tight">
                    Dra. Sabrina Krambeck
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 mt-1">
                    Especialista em Terapia Cognitivo-Comportamental e Saúde Mental do Adulto
                  </p>
                </div>
              </div>

              {/* Floating Badge 1 - Top Right */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute -top-4 -right-3 sm:-right-6 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-luxe border border-[#E6E2D8] flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FAF0F2] flex items-center justify-center text-[#E31837]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-medium text-[#64748B] uppercase tracking-wider">Metodologia</p>
                  <p className="text-xs sm:text-sm font-semibold text-[#0F172A]">TCC & Humanismo</p>
                </div>
              </motion.div>

              {/* Floating Badge 2 - Bottom Left */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="absolute -bottom-5 -left-3 sm:-left-6 bg-[#0F172A] text-white px-4 py-3 rounded-2xl shadow-luxe border border-white/10 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-[#E31837] flex items-center justify-center text-white">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-neutral-400 uppercase tracking-wider">Acolhimento</p>
                  <p className="text-xs sm:text-sm font-semibold text-white">Espaço 100% Neutro</p>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>

        {/* Animated Metrics / Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 sm:mt-24 bg-white rounded-3xl p-6 sm:p-10 border border-[#E6E2D8] shadow-luxe grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-[#E6E2D8]"
        >
          <div className="pt-4 lg:pt-0 lg:px-4 text-center lg:text-left">
            <div className="font-display text-4xl sm:text-5xl font-bold text-[#E31837] tracking-tight">
              +<CountUp end={10} duration={1500} />
            </div>
            <p className="text-sm font-semibold text-[#0F172A] mt-1">Anos de Prática Clínica</p>
            <p className="text-xs text-[#64748B] mt-0.5">Dedicação exclusiva ao cuidado da mente</p>
          </div>

          <div className="pt-4 lg:pt-0 lg:px-6 text-center lg:text-left">
            <div className="font-display text-4xl sm:text-5xl font-bold text-[#0F172A] tracking-tight">
              +<CountUp end={4800} duration={2000} />
            </div>
            <p className="text-sm font-semibold text-[#0F172A] mt-1">Horas de Escuta Terapêutica</p>
            <p className="text-xs text-[#64748B] mt-0.5">Sessões conduzidas com ética e profundidade</p>
          </div>

          <div className="pt-4 lg:pt-0 lg:px-6 text-center lg:text-left">
            <div className="font-display text-4xl sm:text-5xl font-bold text-[#E31837] tracking-tight">
              <CountUp end={98} suffix="%" duration={1800} />
            </div>
            <p className="text-sm font-semibold text-[#0F172A] mt-1">Alívio & Clareza Relatados</p>
            <p className="text-xs text-[#64748B] mt-0.5">Percepção de melhora nas primeiras 8 semanas</p>
          </div>

          <div className="pt-4 lg:pt-0 lg:px-6 text-center lg:text-left">
            <div className="font-display text-4xl sm:text-5xl font-bold text-[#0F172A] tracking-tight">
              <CountUp end={100} suffix="%" duration={1200} />
            </div>
            <p className="text-sm font-semibold text-[#0F172A] mt-1">Confidencialidade Estrita</p>
            <p className="text-xs text-[#64748B] mt-0.5">Segurança segundo o Artigo 9º do CFP</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
