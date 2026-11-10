import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Calendar, MessageCircle, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  onOpenAgendamento: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAgendamento }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Áreas de Atuação', href: '#areas' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'Dúvidas', href: '#duvidas' },
    { label: 'Contato', href: '#contato' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-luxe-sm border-b border-[#E6E2D8]/80 py-3.5'
          : 'bg-transparent py-5 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Editorial */}
          <a
            href="#inicio"
            onClick={(e) => handleNavClick(e, '#inicio')}
            className="group flex flex-col focus:outline-none"
          >
            <span className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-[#0F172A] group-hover:text-[#E31837] transition-colors">
              Dra. Sabrina Krambeck
            </span>
            <span className="text-[11px] uppercase tracking-widest text-[#64748B] font-medium -mt-1 flex items-center gap-1.5">
              <span>Psicologia Clínica</span>
              <span className="inline-block w-1 h-1 rounded-full bg-[#E31837]" />
              <span className="text-[#0F172A] font-semibold">CRP 06/158420</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-[#475569] hover:text-[#E31837] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#E31837] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <span className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#E31837]/10 text-[#E31837] border border-[#E31837]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E31837] animate-pulse" />
              Online & Presencial
            </span>

            <button
              onClick={onOpenAgendamento}
              className="inline-flex items-center gap-2 bg-[#E31837] hover:bg-[#b8122c] text-white text-sm font-medium px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar Consulta</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenAgendamento}
              className="p-2 rounded-full bg-[#E31837] text-white cursor-pointer"
              aria-label="Agendar consulta"
            >
              <Calendar className="w-4 h-4" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#0F172A] hover:text-[#E31837] focus:outline-none cursor-pointer"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-[#FAF8F5] border-b border-[#E6E2D8] overflow-hidden px-4 pt-3 pb-6 shadow-xl"
          >
            <div className="flex flex-col space-y-3 pt-2">
              <div className="pb-2 border-b border-[#E6E2D8] flex items-center justify-between text-xs text-[#64748B]">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#E31837]" />
                  Registro Profissional Ativo: CRP 06/158420
                </span>
                <span className="font-medium text-[#E31837]">Online & Presencial</span>
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-base font-medium text-[#0F172A] hover:text-[#E31837] py-2 transition-colors border-b border-[#F0EBE0]/60"
                >
                  {link.label}
                </a>
              ))}

              <div className="pt-3 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAgendamento();
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-[#E31837] text-white py-3 rounded-xl font-medium shadow-sm"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Agendar Consulta</span>
                </button>
                <a
                  href="#contato"
                  onClick={(e) => handleNavClick(e, '#contato')}
                  className="w-full flex items-center justify-center gap-2 bg-[#0F172A] text-white py-3 rounded-xl font-medium"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Entrar em Contato</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
