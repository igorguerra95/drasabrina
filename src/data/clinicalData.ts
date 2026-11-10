import { AreaAtuacao, DepoimentoEtico, PerguntaFrequente } from '../types.ts';

export const CLINICAL_AREAS: AreaAtuacao[] = [
  {
    id: 'ansiedade',
    titulo: 'Ansiedade & Síndrome do Pânico',
    subtitulo: 'Regulação do sistema nervoso, clareza mental e libertação do medo paralisante',
    tag: 'Alta Demanda',
    descricaoCurta: 'Para quem vive em estado de alerta perpétuo, sofre com taquicardia, pensamentos acelerados e a sensação sufocante de perda de controle.',
    sintomasFrequentes: [
      'Preocupação excessiva e ruminação mental constante',
      'Sintomas físicos: palpitações, falta de ar, aperto no peito e insônia',
      'Medo intenso de passar mal ou de perder o controle em público',
      'Evitação de compromissos sociais, reuniões ou viagens'
    ],
    comoTratamos: 'Integramos técnicas de reestruturação cognitiva da TCC e regulação somática da ACT. Você aprende a desarmar os gatilhos de alerta do cérebro, compreender as raízes do medo e retomar a autonomia sobre seu corpo e decisões.',
    indicacao: 'Adultos enfrentando crises de pânico, ansiedade generalizada (TAG), fobias ou sobrecarga mental.',
    tempoMedio: 'Sessões semanais de 50 minutos',
    iconName: 'Activity'
  },
  {
    id: 'depressao',
    titulo: 'Depressão & Perda de Sentido',
    subtitulo: 'Acolhimento da dor profunda, reconexão com o valor da vida e reconstrução da esperança',
    tag: 'Cuidado Contínuo',
    descricaoCurta: 'Para momentos em que sair da cama parece uma montanha intransponível, o desânimo pesa e o futuro parece vazio de propósito.',
    sintomasFrequentes: [
      'Tristeza persistente, choro frequente ou sensação de apatia',
      'Perda de interesse por atividades que antes traziam prazer (anedonia)',
      'Sentimento de culpa desmedida, desesperança e esgotamento vital',
      'Alterações drásticas no sono e no apetite'
    ],
    comoTratamos: 'Construímos um espaço livre de cobranças onde sua dor é legitimada. Trabalhamos a ativação comportamental gradual, identificação de crenças centrais disfuncionais e resgate dos valores que dão sentido à sua existência.',
    indicacao: 'Pessoas com sintomas depressivos leves a graves, distimia ou em períodos de apatia crônica.',
    tempoMedio: 'Acompanhamento clínico estruturado e empático',
    iconName: 'CloudRain'
  },
  {
    id: 'casal',
    titulo: 'Terapia de Casal & Relações',
    subtitulo: 'Restauração da cumplicidade, comunicação não-violenta e alinhamento de projetos a dois',
    tag: 'Vínculos Afetivos',
    descricaoCurta: 'Um solo neutro e seguro para casais que se amam, mas se perderam em discussões repetitivas, mágoas acumuladas ou quebra de confiança.',
    sintomasFrequentes: [
      'Ciclos intermináveis de conflito que nunca chegam a uma solução',
      'Distanciamento afetivo, ausência de intimidade ou convivência fria',
      'Dificuldade em perdoar mágoas passadas e reconstruir a confiança',
      'Descompasso de expectativas sobre filhos, finanças ou futuro'
    ],
    comoTratamos: 'Não buscamos culpados. Mapeamos a dança relacional do casal, ensinamos escuta ativa e comunicação compassiva, auxiliando ambos a expressarem suas vulnerabilidades sem ataque nem defesa.',
    indicacao: 'Casais (namorados, noivos ou casados) buscando revitalizar o relacionamento ou resolver impasses.',
    tempoMedio: 'Sessões quinzenais ou semanais de 60 a 75 minutos',
    iconName: 'HeartHandshake'
  },
  {
    id: 'burnout',
    titulo: 'Burnout & Esgotamento Profissional',
    subtitulo: 'Recuperação da vitalidade psíquica, estabelecimento de limites e equilíbrio entre vida e carreira',
    tag: 'Saúde Mental no Trabalho',
    descricaoCurta: 'Para profissionais dedicados que ultrapassaram seus próprios limites e agora sentem cinismo, exaustão crônica e sensação de impotência.',
    sintomasFrequentes: [
      'Esgotamento físico e emocional mesmo após finais de semana ou férias',
      'Irritabilidade com colegas e desapego emocional do próprio trabalho',
      'Síndrome do impostor e sensação de insuficiência permanente',
      'Dificuldade de desligar a mente dos prazos fora do expediente'
    ],
    comoTratamos: 'Auxiliamos na reconstrução de limites saudáveis com o trabalho, desconstrução da compulsão por aprovação externa e elaboração de estratégias práticas de sustentabilidade emocional.',
    indicacao: 'Executivos, profissionais da saúde, tecnologia, advogados e pessoas sob alta pressão de entrega.',
    tempoMedio: 'Foco inicial em alívio da crise e reestruturação de rotina',
    iconName: 'Flame'
  },
  {
    id: 'traumas',
    titulo: 'Traumas, Autoestima & Autoconhecimento',
    subtitulo: 'Ressignificação de feridas do passado e fortalecimento de uma identidade autêntica',
    tag: 'Desenvolvimento Pessoal',
    descricaoCurta: 'Para quem carrega cicatrizes de relacionamentos passados, críticas parentais severas ou padrões de autossabotagem difíceis de quebrar.',
    sintomasFrequentes: [
      'Autocrítica implacável e incapacidade de celebrar conquistas',
      'Necessidade constante de agradar aos outros em detrimento de si',
      'Memórias dolorosas que continuam disparando reações emocionais intensas',
      'Dificuldade em dizer "não" e sustentar a própria voz'
    ],
    comoTratamos: 'Trabalho profundo de ressignificação de histórias de vida, integração de memórias difíceis com base em evidências e desenvolvimento de autocompaixão fundamentada.',
    indicacao: 'Pessoas que desejam aprofundar sua autopercepção e construir uma relação gentil consigo mesmas.',
    tempoMedio: 'Processo terapêutico de médio e longo prazo',
    iconName: 'Compass'
  },
  {
    id: 'luto',
    titulo: 'Luto, Perdas & Transições de Vida',
    subtitulo: 'Amparo durante a reconstrução após a perda de pessoas queridas, términos ou mudanças drásticas',
    tag: 'Acolhimento da Dor',
    descricaoCurta: 'O luto não é uma doença a ser curada com pressa, mas uma travessia que merece respeito, tempo e presença qualificada.',
    sintomasFrequentes: [
      'Sensação de vazio insuportável após a partida de um ente querido',
      'Desorientação profunda pós-divórcio ou ruptura afetiva marcante',
      'Dificuldade em lidar com aposentadoria, transição de carreira ou ninho vazio',
      'Sensação de que o mundo continuou girando enquanto o seu parou'
    ],
    comoTratamos: 'Oferecemos continência emocional integral. Ajudamos a processar as fases da perda, ressignificar o vínculo e encontrar novos pilares de sustentação para seguir adiante.',
    indicacao: 'Qualquer pessoa vivenciando perdas afetivas, materiais ou mudanças existenciais agudas.',
    tempoMedio: 'Respeito estrito ao ritmo individual de cada pessoa',
    iconName: 'Feather'
  }
];

export const PILARES_CLINICOS = [
  {
    numero: '01',
    titulo: 'Escuta Atenta e Livre de Julgamento',
    descricao: 'Tudo o que você trouxer para a sessão será acolhido com respeito irrestrito. Aqui não há censura, tabus ou expectativas pré-moldadas sobre quem você deveria ser.'
  },
  {
    numero: '02',
    titulo: 'Base Científica e Evidências Sólidas',
    descricao: 'Nossa prática fundamenta-se na Terapia Cognitivo-Comportamental (TCC) e terapias contextuais de terceira onda, aliando sensibilidade humana com rigor metodológico.'
  },
  {
    numero: '03',
    titulo: 'Sigilo Profissional Rigoroso',
    descricao: 'Conformidade irrestrita com o Código de Ética do Psicólogo (Art. 9º). Seus relatos, emoções e registros permanecem estritamente confidenciais e protegidos.'
  },
  {
    numero: '04',
    titulo: 'Autonomia para a Vida Real',
    descricao: 'A psicoterapia não visa criar dependência da terapeuta. Nosso foco é fornecer ferramentas psicológicas para que você se torne seu próprio ponto de apoio seguro.'
  }
];

export const PASSO_A_PASSO = [
  {
    passo: '01',
    titulo: 'Primeiro Contato & Alinhamento',
    descricao: 'Você envia uma mensagem informando sua preferência (online ou presencial) e disponibilidade de horários. Respondemos com atenção para esclarecer dúvidas e agendar a 1ª sessão.'
  },
  {
    passo: '02',
    titulo: 'Sessão Inicial de Acolhimento',
    descricao: 'Um encontro de 50 minutos dedicado a compreender o que motivou sua busca, suas urgências e o histórico da sua queixa, em um ambiente seguro e calmo.'
  },
  {
    passo: '03',
    titulo: 'Plano Terapêutico Colaborativo',
    descricao: 'Definimos juntos os objetivos centrais do processo. Você tem total clareza sobre como iremos trabalhar e quais metas emocionais iremos perseguir.'
  },
  {
    passo: '04',
    titulo: 'Evolução Contínua & Autonomia',
    descricao: 'Encontros semanais onde aplicamos estratégias práticas e aprofundamos reflexões. Avaliamos periodicamente os progressos rumo à sua alta terapêutica.'
  }
];

export const FAQS: PerguntaFrequente[] = [
  {
    id: 'online-funciona',
    categoria: 'Terapia Online',
    pergunta: 'A psicoterapia online é tão eficaz quanto a presencial?',
    resposta: 'Sim. Dezenas de estudos científicos internacionais e as diretrizes do Conselho Federal de Psicologia (Resolução CFP nº 11/2018) comprovam que a psicoterapia online possui a mesma eficácia clínica da modalidade presencial. Os atendimentos acontecem por videochamada criptografada em ambiente privativo, oferecendo a mesma profundidade com a comodidade de você estar no conforto do seu próprio espaço, sem estresse com deslocamentos.'
  },
  {
    id: 'quando-procurar',
    categoria: 'Sessões',
    pergunta: 'Como saber se realmente preciso de psicoterapia?',
    resposta: 'Você não precisa esperar um colapso emocional ou uma crise insuportável para buscar ajuda. A psicoterapia é indicada sempre que sintomas como ansiedade, tristeza, conflitos de relacionamento, angústia ou indecisões estiverem drenando sua energia, prejudicando seu sono ou impedindo que você viva com plenitude. Buscar ajuda é um ato de maturidade e autocuidado.'
  },
  {
    id: 'frequencia-duracao',
    categoria: 'Sessões',
    pergunta: 'Quanto tempo dura cada sessão e qual a frequência recomendada?',
    resposta: 'As sessões individuais têm duração de 50 minutos. A frequência recomendada é semanal, especialmente no início do processo, para que possamos consolidar a aliança terapêutica e promover mudanças reais e duradouras. Casos de terapia de casal podem ter sessões de 60 a 75 minutos com frequência semanal ou quinzenal.'
  },
  {
    id: 'sigilo-privacidade',
    categoria: 'Sigilo',
    pergunta: 'O que eu falar na sessão é realmente confidencial?',
    resposta: 'Absolutamente. O sigilo é um dever ético legal inegociável regulamentado pelo Artigo 9º do Código de Ética Profissional do Psicólogo. Nenhuma informação compartilhada na sessão é repassada a familiares, cônjuges, chefes ou terceiros. O consultório (físico ou virtual) é um território inviolável de confidencialidade.'
  },
  {
    id: 'convenio-reembolso',
    categoria: 'Valores & Convênios',
    pergunta: 'Você atende por convênio médico ou fornece recibo para reembolso?',
    resposta: 'Os atendimentos são particulares, o que permite manter tempo dedicado de estudo para o seu caso e ausência de limites arbitrários impostos por operadoras. Emitimos recibos e notas fiscais com CRP detalhado, os quais a maioria dos planos de saúde (Bradesco Saúde, SulAmérica, Amil, Care Plus, Porto Seguro, entre outros) aceita para reembolso integral ou parcial conforme as regras da sua apólice.'
  },
  {
    id: 'formas-pagamento',
    categoria: 'Valores & Convênios',
    pergunta: 'Quais são as formas de pagamento disponíveis?',
    resposta: 'O pagamento pode ser realizado por sessão avulsa ou por pacote mensal, via Pix, transferência bancária ou cartão de crédito. As condições são alinhadas com clareza e transparência antes do primeiro encontro.'
  }
];

export const DEPOIMENTOS_ETICOS: DepoimentoEtico[] = [
  {
    id: 'relato-1',
    iniciais: 'M. C.',
    idadeEContexto: '34 anos • Arquiteta',
    motivoBusca: 'Crises agudas de pânico e medo paralisante',
    relatoTransformacao: 'Cheguei à primeira sessão sem conseguir dirigir ou entrar em elevadores. A Dra. Sabrina teve uma paciência infinita e uma escuta que nunca encontrei antes. Hoje voltei a viajar a trabalho e sei exatamente como acolher minha ansiedade sem me desesperar.',
    tempoTerapia: '8 meses de acompanhamento',
    modalidade: 'Online'
  },
  {
    id: 'relato-2',
    iniciais: 'R. e F.',
    idadeEContexto: 'Casados há 11 anos • Advogados',
    motivoBusca: 'Conflitos diários e desgaste na comunicação',
    relatoTransformacao: 'A terapia de casal foi o divisor de águas da nossa família. Aprendemos a parar de tentar vencer discussões e passamos a nos ouvir de verdade. O ambiente que a Sabrina cria é neutro, seguro e extremamente lúcido.',
    tempoTerapia: '6 meses de processo',
    modalidade: 'Presencial'
  },
  {
    id: 'relato-3',
    iniciais: 'G. L.',
    idadeEContexto: '41 anos • Engenheiro de Software',
    motivoBusca: 'Burnout severo e perda de sentido no trabalho',
    relatoTransformacao: 'Estava acordando de madrugada com o coração disparado pensando em reuniões. A terapia me deu rédeas para impor limites sem culpa e redescobrir quem eu sou fora do crachá da empresa. Sou imensamente grato pela condução ética e precisa.',
    tempoTerapia: '1 ano de acompanhamento',
    modalidade: 'Online'
  }
];

export const IMAGENS_CURADAS = {
  // Retrato acolhedor e profissional com estética clínica serena
  terapeutaHero: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop',
  terapeutaPerfil: 'https://images.unsplash.com/photo-1594824813593-9c869911e38b?q=80&w=900&auto=format&fit=crop',
  consultorioAcolhedor: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop',
  ambienteSereno: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop',
  leituraEscuta: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1200&auto=format&fit=crop',
  calmariaLuz: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=1200&auto=format&fit=crop'
};
