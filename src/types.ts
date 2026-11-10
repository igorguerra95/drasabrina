export interface AreaAtuacao {
  id: string;
  titulo: string;
  subtitulo: string;
  tag: string;
  descricaoCurta: string;
  sintomasFrequentes: string[];
  comoTratamos: string;
  indicacao: string;
  tempoMedio: string;
  iconName: string;
}

export interface DepoimentoEtico {
  id: string;
  iniciais: string;
  idadeEContexto: string;
  motivoBusca: string;
  relatoTransformacao: string;
  tempoTerapia: string;
  modalidade: 'Online' | 'Presencial';
}

export interface PerguntaFrequente {
  id: string;
  pergunta: string;
  resposta: string;
  categoria: 'Sessões' | 'Valores & Convênios' | 'Terapia Online' | 'Sigilo';
}

export interface AgendamentoForm {
  nome: string;
  email: string;
  whatsapp: string;
  modalidade: 'online' | 'presencial';
  areaInteresse: string;
  periodoPreferencia: 'manha' | 'tarde' | 'noite' | 'indiferente';
  mensagem: string;
}
