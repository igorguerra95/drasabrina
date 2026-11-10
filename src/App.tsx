import React, { useState } from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { AreasAtuacao } from './components/AreasAtuacao.tsx';
import { Sobre } from './components/Sobre.tsx';
import { ComoFunciona } from './components/ComoFunciona.tsx';
import { Depoimentos } from './components/Depoimentos.tsx';
import { FAQ } from './components/FAQ.tsx';
import { Contato } from './components/Contato.tsx';
import { Footer } from './components/Footer.tsx';
import { WhatsAppFloating } from './components/WhatsAppFloating.tsx';
import { ModalAgendamento } from './components/ModalAgendamento.tsx';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedArea, setSelectedArea] = useState<string>('ansiedade');

  const handleOpenAgendamento = (areaId?: string) => {
    if (areaId) {
      setSelectedArea(areaId);
    }
    setIsModalOpen(true);
  };

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectArea = (areaId: string) => {
    setSelectedArea(areaId);
    handleScrollToSection('contato');
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#0F172A] selection:bg-[#E31837] selection:text-white font-body relative">
      {/* Fixed Luxury Navigation */}
      <Header onOpenAgendamento={() => handleOpenAgendamento()} />

      {/* Main Content Area */}
      <main>
        {/* Seção 1: Início (Hero) */}
        <Hero
          onOpenContato={() => handleScrollToSection('contato')}
          onExploreAreas={() => handleScrollToSection('areas')}
        />

        {/* Seção 2: Áreas de Atuação */}
        <AreasAtuacao
          onSelectArea={handleSelectArea}
          onOpenContato={() => handleScrollToSection('contato')}
        />

        {/* Seção 3: Sobre a Terapeuta & Abordagem Clínica */}
        <Sobre onOpenContato={() => handleScrollToSection('contato')} />

        {/* Como Funciona a Psicoterapia */}
        <ComoFunciona onOpenContato={() => handleScrollToSection('contato')} />

        {/* Depoimentos Éticos & Relatos Clínicos */}
        <Depoimentos />

        {/* FAQ - Perguntas Frequentes */}
        <FAQ onOpenContato={() => handleScrollToSection('contato')} />

        {/* Seção 4: Contato & Agendamento Online */}
        <Contato preselectedArea={selectedArea} />
      </main>

      {/* Footer Editorial */}
      <Footer />

      {/* Botão Flutuante de WhatsApp com Pulse Discreto */}
      <WhatsAppFloating />

      {/* Modal de Agendamento Rápido */}
      <ModalAgendamento
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialArea={selectedArea}
      />
    </div>
  );
}
