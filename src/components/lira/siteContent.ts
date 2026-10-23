// Content for the institutional sub-pages (/funcionalidades/* and /segmentos/*).
// Kept in code on purpose: only the blog is editable through Payload.

// Lives here (not in the 'use client' FAQ.tsx) so server components can read it.
export interface FaqItem {
  question: string
  answer: string
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Preciso instalar alguma coisa?',
    answer:
      'Não. O Lira é 100% online e funciona direto no navegador, tanto no computador quanto no celular. Seus clientes agendam pelo link ou WhatsApp sem precisar baixar nenhum aplicativo.',
  },
  {
    question: 'Quanto custa?',
    answer:
      'Temos planos a partir de R$ 69,90/mês (Lira Start, com 1º mês por R$ 59,42 no cupom ou plano anual com 20% off), além dos planos Lira Plus e Lira Vega para operações maiores. Você pode conferir os recursos completos na página de planos.',
  },
  {
    question: 'Como funciona o teste grátis?',
    answer:
      'Você pode experimentar o Lira por 14 dias sem taxa de adesão, sem cartão de crédito e sem fidelidade. Teste todos os recursos de agenda inteligente, lembretes automáticos e gestão de equipe na prática.',
  },
  {
    question: 'Consigo migrar meus dados de outro sistema?',
    answer:
      'Sim! Nossa equipe auxilia na importação da sua base de clientes, histórico de agendamentos e catálogo de serviços durante o setup inicial, sem custo adicional.',
  },
  {
    question: 'O sinal via Pix é obrigatório para todos os agendamentos?',
    answer:
      'Não. A cobrança do sinal antecipado é configurável por serviço e por profissional: você decide quais procedimentos exigem o adiantamento para confirmar o horário e zerar as faltas.',
  },
  {
    question: 'O Clube de Assinaturas está em qual plano?',
    answer:
      'A funcionalidade de planos recorrentes e clube de assinaturas está disponível a partir do plano Avançado, permitindo criar mensalidades automáticas de corte, barba, procedimentos ou estética.',
  },
  {
    question: 'Como funciona o White-Label para agências?',
    answer:
      'A agência configura os 6 tokens de marca (acento, superfície, texto, raio, fonte e contraste) e o sistema deriva automaticamente o restante da interface, mantendo a identidade visual do cliente ou rede.',
  },
]

export interface ContentCard {
  icon: string
  title: string
  desc: string
}

export interface FeatureContent {
  slug: string
  /** Short label used in the navbar dropdown and footer. */
  label: string
  icon: string
  title: string
  highlight: string
  description: string
  metaDescription: string
  benefits: ContentCard[]
  steps: string[]
  faq: FaqItem[]
}

export interface SegmentContent {
  slug: string
  label: string
  icon: string
  image: string
  title: string
  highlight: string
  description: string
  metaDescription: string
  pains: ContentCard[]
  /** Feature slugs (see FEATURES) with the reason each one matters for this segment. */
  solutions: Array<{ feature: string; why: string }>
}

export const FEATURES: FeatureContent[] = [
  {
    slug: 'agendamento',
    label: 'Agendamento online',
    icon: 'calendar_month',
    title: 'Agenda online que',
    highlight: 'trabalha por você.',
    description:
      'Um link exclusivo com a identidade do seu espaço: o cliente escolhe serviço, profissional e horário em poucos toques pelo celular, sem baixar aplicativo e sem esperar resposta da recepção.',
    metaDescription:
      'Link personalizado de agendamento online com a identidade do seu negócio, agenda por profissional e prevenção de conflitos de horário.',
    benefits: [
      { icon: 'link', title: 'Link com a sua marca', desc: 'Página de agendamento com logo, cores e serviços do seu espaço, pronta para a bio do Instagram e o WhatsApp.' },
      { icon: 'groups', title: 'Agenda por profissional', desc: 'Cada profissional com seus horários, folgas e serviços. A recepção enxerga o dia inteiro em uma única tela.' },
      { icon: 'event_busy', title: 'Zero horário duplicado', desc: 'O horário é bloqueado no instante da reserva, eliminando conflitos entre recepção, WhatsApp e link.' },
      { icon: 'notifications_active', title: 'Lembretes automáticos', desc: 'O cliente recebe confirmação e lembrete antes do horário, sem ninguém da equipe precisar mandar mensagem.' },
    ],
    steps: [
      'Cadastre serviços, duração, preços e a equipe.',
      'Compartilhe o seu link no Instagram, Google e WhatsApp.',
      'Acompanhe as reservas chegando direto na agenda do dia ou do mês.',
    ],
    faq: [
      { question: 'O cliente precisa baixar algum aplicativo?', answer: 'Não. O agendamento funciona direto no navegador do celular ou do computador.' },
      { question: 'Posso integrar com o meu site?', answer: 'Sim. A página de agendamento pode ser integrada a sites, inclusive WordPress.' },
    ],
  },
  {
    slug: 'atendimento-ia',
    label: 'Atendimento com IA',
    icon: 'smart_toy',
    title: 'Atendimento no WhatsApp',
    highlight: '24 horas por dia.',
    description:
      'A inteligência artificial responde dúvidas, confere a agenda em tempo real e marca horários pelo WhatsApp — mesmo com as portas fechadas. Quando precisar, sua equipe assume a conversa na hora.',
    metaDescription:
      'Atendimento com inteligência artificial no WhatsApp: tira dúvidas, agenda horários 24h e transfere para a equipe humana quando necessário.',
    benefits: [
      { icon: 'schedule', title: 'Atendimento 24/7', desc: 'Nenhum cliente fica sem resposta à noite, no fim de semana ou no horário de pico.' },
      { icon: 'forum', title: 'Central de mensagens', desc: 'Todas as conversas em uma fila organizada, com histórico do cliente ao lado.' },
      { icon: 'support_agent', title: 'Transbordo humano', desc: 'A equipe assume qualquer conversa com um clique, e a IA para de responder naquele atendimento.' },
      { icon: 'event_available', title: 'Agenda em tempo real', desc: 'A IA só oferece horários livres de verdade e confirma a reserva na hora.' },
    ],
    steps: [
      'Conecte o número de WhatsApp Business do seu negócio.',
      'Configure serviços, regras e o tom de voz do assistente.',
      'A IA atende e agenda; sua equipe acompanha e assume quando quiser.',
    ],
    faq: [
      { question: 'A IA pode errar?', answer: 'Pode, como qualquer IA. Por isso todas as conversas ficam visíveis na central e sua equipe pode assumir a qualquer momento.' },
      { question: 'Preciso de um número novo?', answer: 'Não necessariamente. A integração usa a WhatsApp Business Platform da Meta com o número do seu negócio.' },
    ],
  },
  {
    slug: 'pix-no-show',
    label: 'Sinal via Pix',
    icon: 'qr_code_2',
    title: 'Sinal via Pix e',
    highlight: 'adeus ao no-show.',
    description:
      'O cliente garante o horário pagando um sinal antecipado via Pix. A vaga só é confirmada com o pagamento — e quem paga, aparece. Reduza em até 68% as faltas da sua agenda.',
    metaDescription:
      'Cobrança automática de sinal via Pix para confirmar agendamentos e reduzir em até 68% o no-show do seu negócio.',
    benefits: [
      { icon: 'payments', title: 'Cobrança automática', desc: 'O Pix é gerado no momento da reserva, sem a recepção precisar cobrar ninguém.' },
      { icon: 'tune', title: 'Configurável por serviço', desc: 'Você decide quais serviços e profissionais exigem sinal, e de quanto.' },
      { icon: 'verified', title: 'Confirmação instantânea', desc: 'Pagamento validado, vaga bloqueada. Sem comprovante por print, sem conferência manual.' },
      { icon: 'trending_down', title: 'Menos faltas', desc: 'Cadeira vazia custa caro. Com o sinal, o compromisso do cliente aumenta e a agenda fica previsível.' },
    ],
    steps: [
      'Defina o valor ou percentual do sinal em cada serviço.',
      'O cliente agenda e paga o Pix na mesma tela.',
      'O valor entra no seu caixa e o horário fica garantido.',
    ],
    faq: [
      { question: 'O sinal é obrigatório?', answer: 'Não. A cobrança é configurável por serviço e por profissional.' },
      { question: 'Quem processa o pagamento?', answer: 'Provedores de pagamento parceiros. A Lira não armazena dados de cartão.' },
    ],
  },
  {
    slug: 'comissoes',
    label: 'Comissões e repasse',
    icon: 'percent',
    title: 'Comissões calculadas',
    highlight: 'sem planilha.',
    description:
      'Ao finalizar cada atendimento, o Lira calcula a comissão do profissional e o lucro da casa. Relatórios transparentes que acabam com a discussão no fim do mês.',
    metaDescription:
      'Rateio automático de comissões por profissional, produção individual em tempo real e relatórios de repasse transparentes.',
    benefits: [
      { icon: 'calculate', title: 'Rateio automático', desc: 'Percentuais por profissional e por serviço, aplicados sozinhos a cada atendimento.' },
      { icon: 'monitoring', title: 'Produção em tempo real', desc: 'Faturamento, atendimentos e comissão de cada profissional atualizados ao longo do dia.' },
      { icon: 'receipt_long', title: 'Relatório de repasse', desc: 'Extrato claro para cada profissional, pronto para o pagamento.' },
      { icon: 'handshake', title: 'Equipe mais confiante', desc: 'Transparência no cálculo evita conflitos e retrabalho no fechamento.' },
    ],
    steps: [
      'Configure o percentual de comissão de cada profissional.',
      'Finalize os atendimentos normalmente na agenda.',
      'Consulte o repasse de cada um a qualquer momento.',
    ],
    faq: [
      { question: 'Posso ter percentuais diferentes por serviço?', answer: 'Sim. A comissão pode variar por profissional e por serviço.' },
      { question: 'Funciona para várias unidades?', answer: 'Sim, a gestão multi-unidade está disponível nos planos para operações maiores.' },
    ],
  },
  {
    slug: 'caixa',
    label: 'Fechamento de caixa',
    icon: 'point_of_sale',
    title: 'Fechamento de caixa',
    highlight: 'em um clique.',
    description:
      'Finalize o expediente sabendo exatamente quanto entrou, por qual meio e quanto sobrou. Volume de clientes, entradas via Pix e lucro líquido sem horas de conta manual.',
    metaDescription:
      'Fechamento de caixa automático com entradas por meio de pagamento, volume de atendimentos e lucro líquido do dia.',
    benefits: [
      { icon: 'account_balance_wallet', title: 'Entradas organizadas', desc: 'Pix, cartão e dinheiro separados automaticamente, incluindo os sinais pagos antecipadamente.' },
      { icon: 'insights', title: 'Lucro do dia', desc: 'Faturamento bruto, comissões e lucro líquido da casa em uma única visão.' },
      { icon: 'credit_card', title: 'Maquininhas', desc: 'Registre as vendas das maquininhas de cartão junto ao restante do caixa.' },
      { icon: 'task_alt', title: 'Sem retrabalho', desc: 'O que foi lançado na agenda já está no caixa. Nada de digitar duas vezes.' },
    ],
    steps: [
      'Os atendimentos finalizados alimentam o caixa automaticamente.',
      'Confira as entradas por meio de pagamento.',
      'Feche o dia com um clique e acompanhe o histórico.',
    ],
    faq: [
      { question: 'Preciso lançar os pagamentos manualmente?', answer: 'Os pagamentos online entram sozinhos. Pagamentos presenciais são registrados ao finalizar o atendimento.' },
      { question: 'Consigo ver o histórico de fechamentos?', answer: 'Sim, todos os fechamentos ficam salvos para consulta.' },
    ],
  },
  {
    slug: 'white-label',
    label: 'White-label para agências',
    icon: 'palette',
    title: 'Sua marca na frente,',
    highlight: 'o Lira por trás.',
    description:
      'Agências e redes oferecem a plataforma completa com a identidade visual do cliente. Configure 6 tokens de marca e o sistema deriva o restante da interface automaticamente.',
    metaDescription:
      'Modelo white-label do Lira para agências e redes: plataforma completa de agendamento com a identidade visual do seu cliente.',
    benefits: [
      { icon: 'format_paint', title: '6 tokens de marca', desc: 'Acento, superfície, texto, raio, fonte e contraste definem toda a interface.' },
      { icon: 'domain', title: 'Identidade do cliente', desc: 'O cliente final vê a marca da agência ou da rede, não a do Lira.' },
      { icon: 'hub', title: 'Gestão multi-unidade', desc: 'Administre vários estabelecimentos a partir de uma única operação.' },
      { icon: 'rocket_launch', title: 'Nova fonte de receita', desc: 'Ofereça agendamento, IA e financeiro como parte do seu pacote de serviços.' },
    ],
    steps: [
      'Escolha os tokens de marca no simulador.',
      'Ative os estabelecimentos dos seus clientes.',
      'Entregue a plataforma com a sua marca.',
    ],
    faq: [
      { question: 'O cliente final vê a marca Lira?', answer: 'Não. A interface usa a identidade configurada pela agência ou rede.' },
      { question: 'Como começo como parceiro?', answer: 'Fale com nosso time comercial pelo formulário de contato para avaliarmos o modelo ideal.' },
    ],
  },
]

export const SEGMENTS: SegmentContent[] = [
  {
    slug: 'barbearia',
    label: 'Barbearia',
    icon: 'content_cut',
    image: '/segmentos/barbearia.jpg',
    title: 'Barbearia com agenda cheia e',
    highlight: 'cadeira girando.',
    description:
      'Alto volume, atendimentos rápidos e cliente que marca pelo WhatsApp a qualquer hora. O Lira agenda sozinho, cobra o sinal e calcula a comissão de cada barbeiro.',
    metaDescription:
      'Sistema de agendamento para barbearias premium: agenda online, IA no WhatsApp, sinal via Pix, clube de assinaturas e comissão dos barbeiros.',
    pains: [
      { icon: 'chat', title: 'WhatsApp que não para', desc: 'Horas por dia respondendo “tem horário hoje?” em vez de atender.' },
      { icon: 'person_off', title: 'Cliente que não aparece', desc: 'Cada falta em um corte de 30 minutos é faturamento que não volta.' },
      { icon: 'calculate', title: 'Comissão na mão', desc: 'Fechar a produção de cada barbeiro no fim do mês gera conta e discussão.' },
    ],
    solutions: [
      { feature: 'atendimento-ia', why: 'A IA responde e agenda pelo WhatsApp enquanto o time está na cadeira.' },
      { feature: 'pix-no-show', why: 'Sinal via Pix para garantir os horários mais disputados.' },
      { feature: 'comissoes', why: 'Produção e comissão de cada barbeiro calculadas automaticamente.' },
      { feature: 'agendamento', why: 'Link de agendamento na bio do Instagram, com a cara da sua barbearia.' },
    ],
  },
  {
    slug: 'salao-de-beleza',
    label: 'Salão de Beleza',
    icon: 'styler',
    image: '/segmentos/salao.jpg',
    title: 'Salão organizado, equipe',
    highlight: 'no mesmo ritmo.',
    description:
      'Muitos profissionais, serviços de durações diferentes e comissões variadas. O Lira coloca todas as cadeiras, repasses e o caixa sob controle em uma única tela.',
    metaDescription:
      'Sistema para salões de beleza: agenda por profissional, comissões automáticas, fechamento de caixa e atendimento com IA no WhatsApp.',
    pains: [
      { icon: 'view_week', title: 'Agenda fragmentada', desc: 'Cada profissional com um caderno ou planilha, e a recepção tentando encaixar.' },
      { icon: 'percent', title: 'Repasses complexos', desc: 'Percentuais diferentes por serviço e profissional tornam o fechamento demorado.' },
      { icon: 'point_of_sale', title: 'Caixa sem clareza', desc: 'No fim do dia, ninguém sabe ao certo quanto entrou e quanto é lucro.' },
    ],
    solutions: [
      { feature: 'agendamento', why: 'Agenda de toda a equipe em uma visão só, sem horários duplicados.' },
      { feature: 'comissoes', why: 'Rateio automático por profissional e por serviço.' },
      { feature: 'caixa', why: 'Fechamento do dia com entradas por meio de pagamento e lucro líquido.' },
      { feature: 'atendimento-ia', why: 'A recepção para de viver no WhatsApp.' },
    ],
  },
  {
    slug: 'clinica-de-estetica',
    label: 'Clínica de Estética',
    icon: 'spa',
    image: '/segmentos/estetica.jpg',
    title: 'Clínica de estética com',
    highlight: 'agenda impecável.',
    description:
      'Ticket médio alto, procedimentos longos e pacotes de sessões. Cada horário vazio pesa no resultado — o Lira protege a agenda com sinal via Pix e atendimento ágil.',
    metaDescription:
      'Sistema para clínicas de estética premium: agenda online, sinal via Pix, pacotes de sessões, atendimento com IA e controle financeiro.',
    pains: [
      { icon: 'event_busy', title: 'Faltas caras', desc: 'Um procedimento longo cancelado em cima da hora deixa um buraco grande no dia.' },
      { icon: 'inventory_2', title: 'Pacotes de sessões', desc: 'Controlar quantas sessões cada cliente já usou consome tempo da equipe.' },
      { icon: 'support_agent', title: 'Dúvidas antes de agendar', desc: 'Clientes querem tirar dúvidas antes de marcar, e a demora faz perder a venda.' },
    ],
    solutions: [
      { feature: 'pix-no-show', why: 'Sinal antecipado para procedimentos de maior valor.' },
      { feature: 'atendimento-ia', why: 'Respostas rápidas sobre procedimentos, com transbordo para a equipe.' },
      { feature: 'agendamento', why: 'Agenda por profissional e sala, sem conflitos.' },
      { feature: 'caixa', why: 'Visão clara do faturamento e do lucro da clínica.' },
    ],
  },
  {
    slug: 'podologia',
    label: 'Podologia',
    icon: 'healing',
    image: '/segmentos/podologia.jpg',
    title: 'Podologia com retorno',
    highlight: 'sempre em dia.',
    description:
      'Atendimentos recorrentes e clientes que precisam voltar no tempo certo. O Lira lembra o cliente, organiza a agenda e mantém o histórico de cada atendimento.',
    metaDescription:
      'Sistema de agendamento para podologia: lembretes automáticos, agenda online, atendimento no WhatsApp e controle financeiro.',
    pains: [
      { icon: 'update', title: 'Retornos esquecidos', desc: 'O cliente precisa voltar, mas sem lembrete o retorno fica para depois.' },
      { icon: 'call', title: 'Agendamento por telefone', desc: 'Atender ligação no meio de um procedimento atrapalha o atendimento.' },
      { icon: 'person_off', title: 'Faltas na agenda', desc: 'Horários vagos sem aviso prévio reduzem o faturamento do dia.' },
    ],
    solutions: [
      { feature: 'agendamento', why: 'O cliente marca o retorno sozinho pelo link, com lembrete automático.' },
      { feature: 'atendimento-ia', why: 'O WhatsApp atendido mesmo durante os procedimentos.' },
      { feature: 'pix-no-show', why: 'Sinal para garantir os horários reservados.' },
      { feature: 'caixa', why: 'Fechamento do dia sem conta manual.' },
    ],
  },
  {
    slug: 'manicure-e-pedicure',
    label: 'Manicure e Pedicure',
    icon: 'clean_hands',
    image: '/segmentos/esmalteria.jpg',
    title: 'Esmalteria com agenda',
    highlight: 'sem buracos.',
    description:
      'Atendimentos curtos, muitos clientes por dia e encaixes constantes. O Lira automatiza o agendamento e o atendimento para a equipe focar no que faz de melhor.',
    metaDescription:
      'Sistema de agendamento para manicure, pedicure e esmalterias: agenda online, IA no WhatsApp, sinal via Pix e comissões automáticas.',
    pains: [
      { icon: 'chat', title: 'Mensagens o dia todo', desc: 'Encaixes e remarcações chegam pelo WhatsApp a cada minuto.' },
      { icon: 'schedule', title: 'Agenda apertada', desc: 'Um atraso ou falta desorganiza todos os horários seguintes.' },
      { icon: 'percent', title: 'Produção da equipe', desc: 'Saber quanto cada profissional produziu exige anotar tudo.' },
    ],
    solutions: [
      { feature: 'atendimento-ia', why: 'A IA cuida dos encaixes e remarcações pelo WhatsApp.' },
      { feature: 'agendamento', why: 'Link online com horários livres em tempo real.' },
      { feature: 'pix-no-show', why: 'Sinal via Pix para reduzir as faltas.' },
      { feature: 'comissoes', why: 'Produção e comissão de cada profissional automáticas.' },
    ],
  },
  {
    slug: 'sobrancelhas-e-cilios',
    label: 'Sobrancelhas e Cílios',
    icon: 'visibility',
    image: '/segmentos/cilios.jpg',
    title: 'Studio de sobrancelhas e cílios',
    highlight: 'com cliente fiel.',
    description:
      'Manutenções periódicas e procedimentos detalhados. O Lira lembra a cliente da manutenção, protege o horário com sinal e organiza o financeiro do studio.',
    metaDescription:
      'Sistema de agendamento para studios de sobrancelhas e cílios: lembretes de manutenção, sinal via Pix, IA no WhatsApp e financeiro.',
    pains: [
      { icon: 'update', title: 'Manutenção esquecida', desc: 'Sem lembrete, a cliente perde o tempo ideal da manutenção.' },
      { icon: 'event_busy', title: 'Procedimentos longos', desc: 'Uma falta em uma extensão de cílios deixa horas vagas na agenda.' },
      { icon: 'chat', title: 'Atendimento no meio do procedimento', desc: 'Parar para responder mensagem atrapalha o trabalho detalhado.' },
    ],
    solutions: [
      { feature: 'pix-no-show', why: 'Sinal antecipado para os procedimentos mais longos.' },
      { feature: 'agendamento', why: 'Lembretes automáticos para as manutenções.' },
      { feature: 'atendimento-ia', why: 'Mensagens respondidas enquanto você atende.' },
      { feature: 'caixa', why: 'Entradas e lucro do studio sempre claros.' },
    ],
  },
]

export const findFeature = (slug: string) => FEATURES.find((f) => f.slug === slug)
export const findSegment = (slug: string) => SEGMENTS.find((s) => s.slug === slug)
