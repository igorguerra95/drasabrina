import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Video, Send, CheckCircle2, ShieldCheck, Lock } from 'lucide-react';
import { CLINICAL_AREAS } from '../data/clinicalData.ts';

interface ModalAgendamentoProps {
  isOpen: boolean;
  onClose: () => void;
  initialArea?: string;
}

export const ModalAgendamento: React.FC<ModalAgendamentoProps> = ({
  isOpen,
  onClose,
  initialArea = 'ansiedade'
}) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [modalidade, setModalidade] = useState<'online' | 'presencial'>('online');
  const [area, setArea] = useState(initialArea);
  const [periodo, setPeriodo] = useState('tarde');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 800);
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleResetAndClose}
          className="fixed inset-0 bg-[#0F172A]/70 backdrop-blur-sm cursor-pointer"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#E6E2D8] z-10 max-h-[90vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={handleResetAndClose}
            className="absolute top-5 right-5 p-2 rounded-full text-[#64748B] hover:text-[#0F172A] hover:bg-[#FAF8F5] transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>

          {isSuccess ? (
            <div className="py-8 text-center">
              <div className="w-16 h-16 rounded-full bg-[#FAF0F2] text-[#E31837] flex items-center justify-center mx-auto mb-5">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#0F172A] mb-2">
                Solicitação Recebida!
              </h3>
              <p className="text-sm text-[#475569] mb-6 leading-relaxed max-w-md mx-auto">
                Obrigado pelo contato, <strong>{nome || 'Paciente'}</strong>. Retornaremos via WhatsApp no número <strong>{whatsapp}</strong> para confirmar a data e o horário da sua primeira sessão.
              </p>
              <button
                onClick={handleResetAndClose}
                className="bg-[#0F172A] hover:bg-[#E31837] text-white text-sm font-semibold px-8 py-3 rounded-full transition-colors cursor-pointer"
              >
                Concluir
              </button>
            </div>
          ) : (
            <div>
              <div className="mb-6">
                <span className="text-[11px] font-bold tracking-wider uppercase text-[#E31837] bg-[#FAF0F2] px-3 py-1 rounded-full border border-[#E31837]/20">
                  Agendamento Rápido
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#0F172A] mt-2 mb-1">
                  Agende sua primeira consulta
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B]">
                  Dra. Sabrina Krambeck • CRP 06/158420
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Seu nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className="w-full bg-[#FAF8F5] border border-[#E6E2D8] rounded-xl px-4 py-2.5 text-sm text-[#0F172A] focus:outline-none focus:border-[#E31837] focus:ring-1 focus:ring-[#E31837]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1">
                      WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(11) 99999-9999"
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      className="w-full bg-[#FAF8F5] border border-[#E6E2D8] rounded-xl px-4 py-2.5 text-sm text-[#0F172A] focus:outline-none focus:border-[#E31837] focus:ring-1 focus:ring-[#E31837]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="seu@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-[#FAF8F5] border border-[#E6E2D8] rounded-xl px-4 py-2.5 text-sm text-[#0F172A] focus:outline-none focus:border-[#E31837] focus:ring-1 focus:ring-[#E31837]"
                    />
                  </div>
                </div>

                {/* Modalidade */}
                <div>
                  <label className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1.5">
                    Modalidade
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setModalidade('online')}
                      className={`p-3 rounded-xl border text-left text-xs font-semibold flex items-center gap-2 cursor-pointer transition-all ${
                        modalidade === 'online'
                          ? 'border-[#E31837] bg-[#FAF0F2] text-[#E31837]'
                          : 'border-[#E6E2D8] bg-[#FAF8F5] text-[#475569]'
                      }`}
                    >
                      <Video className="w-4 h-4 shrink-0" />
                      <span>Online (Google Meet)</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setModalidade('presencial')}
                      className={`p-3 rounded-xl border text-left text-xs font-semibold flex items-center gap-2 cursor-pointer transition-all ${
                        modalidade === 'presencial'
                          ? 'border-[#E31837] bg-[#FAF0F2] text-[#E31837]'
                          : 'border-[#E6E2D8] bg-[#FAF8F5] text-[#475569]'
                      }`}
                    >
                      <Calendar className="w-4 h-4 shrink-0" />
                      <span>Presencial</span>
                    </button>
                  </div>
                </div>

                {/* Área e Turno */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1">
                      Área de Atenção
                    </label>
                    <select
                      value={area}
                      onChange={(e) => setArea(e.target.value)}
                      className="w-full bg-[#FAF8F5] border border-[#E6E2D8] rounded-xl px-3 py-2.5 text-xs text-[#0F172A] focus:outline-none focus:border-[#E31837]"
                    >
                      <option value="ansiedade">Ansiedade & Pânico</option>
                      <option value="depressao">Depressão & Humor</option>
                      <option value="casal">Terapia de Casal</option>
                      <option value="burnout">Burnout & Esgotamento</option>
                      <option value="traumas">Traumas & Autoestima</option>
                      <option value="luto">Luto & Transições</option>
                      <option value="outro">Outro tema</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1">
                      Turno Preferido
                    </label>
                    <select
                      value={periodo}
                      onChange={(e) => setPeriodo(e.target.value)}
                      className="w-full bg-[#FAF8F5] border border-[#E6E2D8] rounded-xl px-3 py-2.5 text-xs text-[#0F172A] focus:outline-none focus:border-[#E31837]"
                    >
                      <option value="manha">Manhã</option>
                      <option value="tarde">Tarde</option>
                      <option value="noite">Noite</option>
                      <option value="indiferente">Indiferente</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#E31837] hover:bg-[#b8122c] disabled:bg-neutral-400 text-white font-semibold py-3.5 rounded-xl text-sm transition-all duration-200 cursor-pointer shadow-md flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Confirmar e Enviar Pedido</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#64748B]">
                  <Lock className="w-3.5 h-3.5 text-[#E31837]" />
                  <span>Sigilo ético inegociável nos termos do Art. 9º do CFP</span>
                </div>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
