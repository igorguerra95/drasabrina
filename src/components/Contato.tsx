import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Send, 
  MessageCircle, 
  Calendar, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles, 
  AlertCircle,
  Video,
  Lock
} from 'lucide-react';
import { AgendamentoForm } from '../types.ts';
import { CLINICAL_AREAS } from '../data/clinicalData.ts';

interface ContatoProps {
  preselectedArea?: string;
}

export const Contato: React.FC<ContatoProps> = ({ preselectedArea }) => {
  const [formData, setFormData] = useState<AgendamentoForm>({
    nome: '',
    email: '',
    whatsapp: '',
    modalidade: 'online',
    areaInteresse: preselectedArea || 'ansiedade',
    periodoPreferencia: 'tarde',
    mensagem: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedArea) {
      setFormData((prev) => ({ ...prev, areaInteresse: preselectedArea }));
    }
  }, [preselectedArea]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate polite clinical scheduling confirmation
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  const generateWhatsAppMessage = () => {
    const area = CLINICAL_AREAS.find((a) => a.id === formData.areaInteresse)?.titulo || 'Psicoterapia Clínica';
    const modalidadeTexto = formData.modalidade === 'online' ? 'Atendimento Online' : 'Atendimento Presencial';
    const periodoTexto = 
      formData.periodoPreferencia === 'manha' ? 'Manhã' : 
      formData.periodoPreferencia === 'tarde' ? 'Tarde' : 
      formData.periodoPreferencia === 'noite' ? 'Noite' : 'Qualquer horário';

    const texto = `Olá, Dra. Sabrina Krambeck! Gostaria de agendar uma consulta inicial de psicoterapia.%0A%0A*Nome:* ${encodeURIComponent(formData.nome || 'Interessado(a)')}%0A*Modalidade:* ${encodeURIComponent(modalidadeTexto)}%0A*Área de Interesse:* ${encodeURIComponent(area)}%0A*Turno de Preferência:* ${encodeURIComponent(periodoTexto)}%0A${formData.mensagem ? `*Mensagem:* ${encodeURIComponent(formData.mensagem)}` : ''}`;
    
    // Default safe WhatsApp bridge for Brazilian audience
    return `https://wa.me/5511999999999?text=${texto}`;
  };

  return (
    <section id="contato" className="py-20 sm:py-32 bg-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-b from-[#FAF0F2] to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF0F2] border border-[#E31837]/20 text-[#E31837] text-xs font-semibold uppercase tracking-widest mb-4">
            <Calendar className="w-3.5 h-3.5" />
            <span>Agendamento & Contato</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#0F172A] leading-tight mb-4">
            Dê o primeiro passo para o seu bem-estar
          </h2>

          <p className="text-base sm:text-lg text-[#475569]">
            Envie sua solicitação para combinarmos o melhor dia e horário para a sua primeira consulta. 
            Todas as mensagens são recebidas com total sigilo profissional.
          </p>
        </div>

        {/* 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-[#FAF8F5] rounded-3xl p-6 sm:p-10 border border-[#E6E2D8] shadow-luxe"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="sucesso"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[#FAF0F2] text-[#E31837] flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#0F172A] mb-3">
                    Solicitação enviada com sucesso!
                  </h3>
                  <p className="text-sm sm:text-base text-[#475569] max-w-md mx-auto mb-8 leading-relaxed">
                    Obrigado pelo contato, <strong className="text-[#0F172A]">{formData.nome || 'Paciente'}</strong>. 
                    Nossa equipe responderá em até poucas horas via WhatsApp ou e-mail com as opções de horários disponíveis para a sua sessão.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={generateWhatsAppMessage()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#E31837] hover:bg-[#b8122c] text-white px-6 py-3 rounded-full text-sm font-semibold shadow-md transition-all"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Falar no WhatsApp agora mesmo</span>
                    </a>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          nome: '',
                          email: '',
                          whatsapp: '',
                          modalidade: 'online',
                          areaInteresse: 'ansiedade',
                          periodoPreferencia: 'tarde',
                          mensagem: ''
                        });
                      }}
                      className="text-xs font-semibold text-[#64748B] hover:text-[#0F172A] py-2"
                    >
                      Enviar outro agendamento
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form key="formulario" onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-[#0F172A] mb-1">
                      Solicitar Consulta
                    </h3>
                    <p className="text-xs sm:text-sm text-[#64748B]">
                      Preencha os campos abaixo. Retornamos com discrição e rapidez.
                    </p>
                  </div>

                  {/* Nome Completo */}
                  <div>
                    <label className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      name="nome"
                      required
                      placeholder="Como gostaria de ser chamado(a)?"
                      value={formData.nome}
                      onChange={handleChange}
                      className="w-full bg-white border border-[#E6E2D8] rounded-xl px-4 py-3 text-sm text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#E31837] focus:ring-1 focus:ring-[#E31837] transition-all"
                    />
                  </div>

                  {/* Grid: E-mail & WhatsApp */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-2">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="seuemail@exemplo.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-white border border-[#E6E2D8] rounded-xl px-4 py-3 text-sm text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#E31837] focus:ring-1 focus:ring-[#E31837] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-2">
                        WhatsApp / Celular *
                      </label>
                      <input
                        type="tel"
                        name="whatsapp"
                        required
                        placeholder="(11) 99999-9999"
                        value={formData.whatsapp}
                        onChange={handleChange}
                        className="w-full bg-white border border-[#E6E2D8] rounded-xl px-4 py-3 text-sm text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#E31837] focus:ring-1 focus:ring-[#E31837] transition-all"
                      />
                    </div>
                  </div>

                  {/* Modalidade de Atendimento */}
                  <div>
                    <label className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-2">
                      Modalidade Preferida *
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, modalidade: 'online' })}
                        className={`p-3.5 rounded-xl border text-left flex items-center gap-3 transition-all cursor-pointer ${
                          formData.modalidade === 'online'
                            ? 'bg-white border-[#E31837] ring-1 ring-[#E31837] text-[#0F172A]'
                            : 'bg-white border-[#E6E2D8] text-[#64748B] hover:border-neutral-300'
                        }`}
                      >
                        <Video className={`w-5 h-5 shrink-0 ${formData.modalidade === 'online' ? 'text-[#E31837]' : 'text-neutral-400'}`} />
                        <div>
                          <p className="text-xs font-bold">Online (Google Meet)</p>
                          <p className="text-[10px] text-neutral-500">De onde você estiver</p>
                        </div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, modalidade: 'presencial' })}
                        className={`p-3.5 rounded-xl border text-left flex items-center gap-3 transition-all cursor-pointer ${
                          formData.modalidade === 'presencial'
                            ? 'bg-white border-[#E31837] ring-1 ring-[#E31837] text-[#0F172A]'
                            : 'bg-white border-[#E6E2D8] text-[#64748B] hover:border-neutral-300'
                        }`}
                      >
                        <Calendar className={`w-5 h-5 shrink-0 ${formData.modalidade === 'presencial' ? 'text-[#E31837]' : 'text-neutral-400'}`} />
                        <div>
                          <p className="text-xs font-bold">Presencial</p>
                          <p className="text-[10px] text-neutral-500">Consultório acolhedor</p>
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Grid: Área de Interesse & Turno */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-2">
                        Principal Demanda
                      </label>
                      <select
                        name="areaInteresse"
                        value={formData.areaInteresse}
                        onChange={handleChange}
                        className="w-full bg-white border border-[#E6E2D8] rounded-xl px-4 py-3 text-sm text-[#0F172A] focus:outline-none focus:border-[#E31837] focus:ring-1 focus:ring-[#E31837] transition-all cursor-pointer"
                      >
                        <option value="ansiedade">Ansiedade & Pânico</option>
                        <option value="depressao">Depressão & Desânimo</option>
                        <option value="casal">Terapia de Casal & Relações</option>
                        <option value="burnout">Burnout & Carreira</option>
                        <option value="traumas">Traumas & Autoconhecimento</option>
                        <option value="luto">Luto & Crises Existenciais</option>
                        <option value="outro">Ainda não sei ao certo / Outro</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-2">
                        Turno de Preferência
                      </label>
                      <select
                        name="periodoPreferencia"
                        value={formData.periodoPreferencia}
                        onChange={handleChange}
                        className="w-full bg-white border border-[#E6E2D8] rounded-xl px-4 py-3 text-sm text-[#0F172A] focus:outline-none focus:border-[#E31837] focus:ring-1 focus:ring-[#E31837] transition-all cursor-pointer"
                      >
                        <option value="manha">Manhã (08h às 12h)</option>
                        <option value="tarde">Tarde (13h às 18h)</option>
                        <option value="noite">Noite (18h às 21h)</option>
                        <option value="indiferente">Indiferente / Qualquer horário</option>
                      </select>
                    </div>
                  </div>

                  {/* Mensagem Opcional */}
                  <div>
                    <label className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-2">
                      Quer adiantar algo sobre o seu momento? (Opcional)
                    </label>
                    <textarea
                      name="mensagem"
                      rows={3}
                      placeholder="Fique à vontade para relatar um resumo do que tem sentido ou suas dúvidas..."
                      value={formData.mensagem}
                      onChange={handleChange}
                      className="w-full bg-white border border-[#E6E2D8] rounded-xl px-4 py-3 text-sm text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#E31837] focus:ring-1 focus:ring-[#E31837] transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2.5 bg-[#E31837] hover:bg-[#b8122c] disabled:bg-neutral-400 text-white font-semibold py-4 rounded-xl shadow-luxe hover:shadow-luxe-hover transition-all duration-200 cursor-pointer text-base"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Enviando solicitação...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Entrar em contato</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-[#64748B] flex items-center justify-center gap-1.5 pt-1">
                    <Lock className="w-3.5 h-3.5 text-[#E31837]" />
                    <span>Seus dados são confidenciais e protegidos pela LGPD e pelo Código de Ética do Psicólogo.</span>
                  </p>
                </form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Right Column: Instant WhatsApp Card & Clinical Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Direct WhatsApp Box */}
            <div className="bg-[#0F172A] text-white rounded-3xl p-8 border border-white/10 shadow-luxe relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#E31837]/15 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-[#E31837] text-white flex items-center justify-center mb-5">
                  <MessageCircle className="w-6 h-6" />
                </div>

                <h3 className="font-display text-2xl font-bold mb-2">
                  Prefere conversar diretamente via WhatsApp?
                </h3>

                <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                  Se você deseja agilidade para tirar dúvidas sobre valores, formas de pagamento, recibo de reembolso ou horários livres para esta semana, envie uma mensagem direta.
                </p>

                <a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-white hover:bg-[#F5F2EB] text-[#0F172A] font-bold py-3.5 px-6 rounded-xl transition-all shadow-md cursor-pointer text-sm"
                >
                  <MessageCircle className="w-4 h-4 text-[#E31837]" />
                  <span>Iniciar conversa no WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Practical Information Card (Omit Map, as requested) */}
            <div className="bg-white rounded-3xl p-8 border border-[#E6E2D8] shadow-luxe-sm space-y-5">
              <h4 className="font-display text-xl font-bold text-[#0F172A]">
                Informações Úteis para a sua Sessão
              </h4>

              <div className="space-y-4 text-xs sm:text-sm text-[#475569]">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-[#E31837] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#0F172A] block">Ambiente 100% Criptografado</strong>
                    <span>Para consultas online, utilizamos links privados e seguros com criptografia ponta a ponta.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#E31837] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#0F172A] block">Duração & Pontualidade</strong>
                    <span>Cada sessão possui 50 minutos de duração com tolerância e pontualidade rigorosas.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#E31837] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#0F172A] block">Nota Fiscal e Recibo com CRP</strong>
                    <span>Documentação completa para você solicitar reembolso no seu plano de saúde.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency & Mental Health Helpline Box */}
            <div className="bg-[#FAF0F2] rounded-2xl p-5 border border-[#E31837]/30 text-xs text-[#475569] flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-[#E31837] shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-[#0F172A] mb-1">Apoio em Situações de Emergência:</p>
                <p className="leading-relaxed">
                  A psicoterapia em consultório não se destina ao atendimento de emergências psiquiátricas imediatas. Se você ou alguém próximo estiver em crise aguda, ligue gratuitamente para o <strong>CVV no 188</strong> (Centro de Valorização da Vida) ou procure o pronto-atendimento médico mais próximo.
                </p>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
