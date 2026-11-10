import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Activity, 
  CloudRain, 
  HeartHandshake, 
  Flame, 
  Compass, 
  Feather, 
  ArrowRight, 
  CheckCircle2, 
  Clock,
  Sparkles,
  ChevronDown
} from 'lucide-react';
import { CLINICAL_AREAS } from '../data/clinicalData.ts';
import { AreaAtuacao } from '../types.ts';

interface AreasAtuacaoProps {
  onSelectArea: (areaId: string, areaTitulo: string) => void;
  onOpenContato: () => void;
}

const getIcon = (name: string) => {
  switch (name) {
    case 'Activity':
      return <Activity className="w-6 h-6 text-[#E31837]" />;
    case 'CloudRain':
      return <CloudRain className="w-6 h-6 text-[#E31837]" />;
    case 'HeartHandshake':
      return <HeartHandshake className="w-6 h-6 text-[#E31837]" />;
    case 'Flame':
      return <Flame className="w-6 h-6 text-[#E31837]" />;
    case 'Compass':
      return <Compass className="w-6 h-6 text-[#E31837]" />;
    case 'Feather':
      return <Feather className="w-6 h-6 text-[#E31837]" />;
    default:
      return <Sparkles className="w-6 h-6 text-[#E31837]" />;
  }
};

export const AreasAtuacao: React.FC<AreasAtuacaoProps> = ({ onSelectArea, onOpenContato }) => {
  const [activeFilter, setActiveFilter] = useState<'todos' | 'emocional' | 'relacoes' | 'carreira'>('todos');
  const [expandedId, setExpandedId] = useState<string | null>('ansiedade');

  const filteredAreas = CLINICAL_AREAS.filter((area) => {
    if (activeFilter === 'todos') return true;
    if (activeFilter === 'emocional') return ['ansiedade', 'depressao', 'traumas', 'luto'].includes(area.id);
    if (activeFilter === 'relacoes') return ['casal', 'traumas'].includes(area.id);
    if (activeFilter === 'carreira') return ['burnout', 'ansiedade'].includes(area.id);
    return true;
  });

  return (
    <section id="areas" className="py-20 sm:py-32 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF0F2] border border-[#E31837]/20 text-[#E31837] text-xs font-semibold uppercase tracking-widest mb-4"
          >
            <span>Áreas de Cuidado Clínico</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#0F172A] leading-tight mb-4"
          >
            Acolhimento qualificado para cada dimensão da sua dor
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-[#475569] leading-relaxed"
          >
            Cada pessoa traz consigo uma bagagem única. Nossas intervenções respeitam o seu momento de vida, 
            combinando rigor técnico, acolhimento sem julgamentos e ferramentas práticas para o dia a dia.
          </motion.p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-8">
            <button
              onClick={() => setActiveFilter('todos')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeFilter === 'todos'
                  ? 'bg-[#0F172A] text-white shadow-sm'
                  : 'bg-white text-[#475569] hover:bg-[#F5F2EB] border border-[#E6E2D8]'
              }`}
            >
              Todas as Áreas ({CLINICAL_AREAS.length})
            </button>
            <button
              onClick={() => setActiveFilter('emocional')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeFilter === 'emocional'
                  ? 'bg-[#0F172A] text-white shadow-sm'
                  : 'bg-white text-[#475569] hover:bg-[#F5F2EB] border border-[#E6E2D8]'
              }`}
            >
              Ansiedade, Humor & Luto
            </button>
            <button
              onClick={() => setActiveFilter('relacoes')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeFilter === 'relacoes'
                  ? 'bg-[#0F172A] text-white shadow-sm'
                  : 'bg-white text-[#475569] hover:bg-[#F5F2EB] border border-[#E6E2D8]'
              }`}
            >
              Casal & Relacionamentos
            </button>
            <button
              onClick={() => setActiveFilter('carreira')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeFilter === 'carreira'
                  ? 'bg-[#0F172A] text-white shadow-sm'
                  : 'bg-white text-[#475569] hover:bg-[#F5F2EB] border border-[#E6E2D8]'
              }`}
            >
              Trabalho & Burnout
            </button>
          </div>
        </div>

        {/* 12-Column Responsive Asymmetrical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredAreas.map((area, index) => {
            const isExpanded = expandedId === area.id;

            return (
              <motion.div
                key={area.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`group bg-white rounded-3xl p-6 sm:p-8 border transition-all duration-300 flex flex-col justify-between ${
                  isExpanded
                    ? 'border-[#E31837]/40 shadow-luxe-hover ring-1 ring-[#E31837]/20'
                    : 'border-[#E6E2D8] hover:border-[#E31837]/30 shadow-luxe-sm hover:shadow-luxe'
                }`}
              >
                <div>
                  {/* Top Row: Icon + Tag */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#FAF0F2] flex items-center justify-center group-hover:scale-105 transition-transform">
                      {getIcon(area.iconName)}
                    </div>
                    <span className="text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-[#F5F2EB] text-[#475569] border border-[#E6E2D8]">
                      {area.tag}
                    </span>
                  </div>

                  {/* Title & Short description */}
                  <h3 className="font-display text-2xl font-bold text-[#0F172A] mb-2 leading-snug group-hover:text-[#E31837] transition-colors">
                    {area.titulo}
                  </h3>
                  <p className="text-sm text-[#E31837] font-medium mb-3 italic">
                    {area.subtitulo}
                  </p>
                  <p className="text-sm text-[#475569] leading-relaxed mb-5">
                    {area.descricaoCurta}
                  </p>

                  {/* Expandable Details Container */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden pt-2 border-t border-[#F0EBE0] space-y-4 text-xs sm:text-sm text-[#475569]"
                      >
                        {/* Common Symptoms */}
                        <div>
                          <p className="font-semibold text-[#0F172A] mb-2 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#E31837]" />
                            Sinais frequentes observados:
                          </p>
                          <ul className="space-y-1.5 pl-3">
                            {area.sintomasFrequentes.map((sintoma, sIdx) => (
                              <li key={sIdx} className="flex items-start gap-2">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#E31837] shrink-0 mt-0.5" />
                                <span>{sintoma}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* How we treat */}
                        <div className="bg-[#FAF8F5] p-3.5 rounded-xl border border-[#E6E2D8]">
                          <p className="font-semibold text-[#0F172A] mb-1">Como conduzimos o cuidado:</p>
                          <p className="text-xs text-[#64748B] leading-relaxed">{area.comoTratamos}</p>
                        </div>

                        {/* Session duration */}
                        <div className="flex items-center gap-2 text-xs text-[#64748B]">
                          <Clock className="w-3.5 h-3.5 text-[#E31837]" />
                          <span>{area.tempoMedio}</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Bottom Actions */}
                <div className="pt-6 mt-6 border-t border-[#F0EBE0] flex items-center justify-between gap-3">
                  <button
                    onClick={() => setExpandedId(isExpanded ? null : area.id)}
                    className="text-xs font-semibold text-[#475569] hover:text-[#0F172A] inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>{isExpanded ? 'Ocultar detalhes' : 'Ver sintomas e abordagem'}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                  </button>

                  <button
                    onClick={() => {
                      onSelectArea(area.id, area.titulo);
                      onOpenContato();
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E31837] hover:text-[#b8122c] cursor-pointer group/btn"
                  >
                    <span>Cuidar disso</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-[#0F172A] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-luxe"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#E31837]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#E31837] bg-[#E31837]/15 px-3 py-1 rounded-full border border-[#E31837]/30">
                Não tem certeza do que está sentindo?
              </span>
              <h3 className="font-display text-2xl sm:text-4xl font-bold mt-4 mb-3 leading-snug">
                Você não precisa rotular sua dor para começar a ser acolhido.
              </h3>
              <p className="text-sm sm:text-base text-neutral-300 max-w-2xl leading-relaxed">
                Na primeira consulta, dedicamos 50 minutos para escutar sua história com calma e ajudá-lo a organizar o que parece confuso. O primeiro passo é apenas permitir-se falar.
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <button
                onClick={onOpenContato}
                className="inline-flex items-center gap-2 bg-[#E31837] hover:bg-[#b8122c] text-white text-base font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer"
              >
                <span>Entrar em contato</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
