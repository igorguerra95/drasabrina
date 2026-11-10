import React from 'react';
import { ShieldCheck, Heart, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0F172A] text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-5">
            <span className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-white block mb-2">
              Dra. Sabrina Krambeck
            </span>
            <p className="text-xs uppercase tracking-widest text-[#E31837] font-semibold mb-4">
              Psicóloga Clínica • CRP 06/158420
            </p>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-md mb-6">
              Consultório de psicoterapia dedicado ao acolhimento humano, rigor ético e base científica. 
              Atendimentos online para todo o Brasil e presencial para adultos e casais.
            </p>
            <div className="flex items-center gap-2 text-xs text-neutral-400 bg-white/5 py-2 px-3.5 rounded-xl border border-white/10 w-fit">
              <ShieldCheck className="w-4 h-4 text-[#E31837]" />
              <span>Cadastro Ativo no e-Psi (Conselho Federal de Psicologia)</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-300 mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">Início</a>
              </li>
              <li>
                <a href="#areas" className="hover:text-white transition-colors">Áreas de Atuação</a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">Sobre a Terapeuta</a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-white transition-colors">Como Funciona</a>
              </li>
              <li>
                <a href="#duvidas" className="hover:text-white transition-colors">Perguntas Frequentes</a>
              </li>
              <li>
                <a href="#contato" className="hover:text-white transition-colors">Contato & Agendamento</a>
              </li>
            </ul>
          </div>

          {/* Specialties Overview */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-300 mb-4">
              Cuidado Especializado
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>• Ansiedade, Pânico e Angústia Constante</li>
              <li>• Depressão, Desânimo e Perda de Sentido</li>
              <li>• Terapia de Casal e Relacionamentos Afetivos</li>
              <li>• Síndrome de Burnout e Esgotamento Profissional</li>
              <li>• Traumas, Autoestima e Autoconhecimento</li>
              <li>• Luto, Rupturas e Transições de Vida</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Ethical Disclaimers */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>
            © {new Date().getFullYear()} Dra. Sabrina Krambeck. Todos os direitos reservados.
          </p>

          <p className="text-center sm:text-right text-[11px] text-neutral-500 max-w-md">
            Atuação ética em estrita conformidade com o Código de Ética Profissional do Psicólogo e a Resolução CFP nº 11/2018.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Voltar ao topo"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
