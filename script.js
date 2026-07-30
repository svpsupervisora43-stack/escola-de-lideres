// ESTRUTURA GLOBAL EDITÁVEL PELO GESTOR (com salvamento no navegador/servidor)
let DADOS_CARGOS = JSON.parse(localStorage.getItem("APP_CARGOS_DATA")) || {
  Mídia: {
    requisitos: [
      "⭐ Performance: Nota 'Muito Bom' ou 'Excelente' na Avaliação Trimestral da gestão",
      "📲 Tendências & Redes: Estar antenado(a) nas redes sociais, algoritmos e trends do momento (Reels/TikTok)",
      "🎨 Edição & Design: Domínio prático na criação de artes no Canva e edições dinâmicas no CapCut",
      "🤝 Mentoria Prática: Estar em processo ativo de treinamento e acompanhamento junto à Mídia oficial da loja",
    ],
    apoio: [
      "🎨 Curso Gratuito: Canva Design School (Aulas rápidas de composição visual)",
      "📱 Tutoriais CapCut: Canais oficiais no YouTube para cortes dinâmicos e ritmados para Reels/TikTok",
    ],
  },
  Recepcionista: {
    requisitos: [
      "⭐ Performance: Nota 'Muito Bom' ou 'Excelente' na Avaliação Trimestral da gestão",
      "🎓 Plataforma Twygo: Conclusão de 100% dos módulos da Trilha de Recepcionista no Twygo",
      "💻 Sistema de Recepção: Domínio prático dos procedimentos operacionais de Check-in, Check-out e caixa",
      "🗣️ Dicção & Tom de Voz: Comunicação verbal fluida, simpatia constante e adequação ao tom de voz acolhedor da marca",
      "📖 Português & Atendimento: Prática de fala correta e estudo constante com o material de apoio fornecido",
    ],
    apoio: [
      "📖 Livro Recomendado: 'Escrever Melhor' (Inês Signorini) ou 'Gramática para Apressados' (Sérgio Nogueira)",
      "🤝 Livro Recomendado: 'Comunicação Não-Violenta' (Marshall Rosenberg) - Escuta empática e tom acolhedor",
      "💻 Curso Gratuito: Fundação Bradesco - Comunicação Escrita e Expressão Verbal (Online com certificado)",
      "📺 Exercícios/Dúvidas: Canal 'Nossa Língua Portuguesa' (YouTube) para correções rápidas de concordância e ortografia",
    ],
  },
  Líder: {
    requisitos: [
      "⭐ Performance: Nota 'Excelente' (5.0) na Avaliação Trimestral da gestão",
      "👶 Condução & Presença: Ter voz ativa, energia e firmeza afetuosa para conduzir e reter a atenção de grandes grupos de crianças",
      "🕊️ Mediação Infantil: Capacidade comprovada em contornar e resolver conflitos e divergências entre crianças na pista",
      "👥 Interpessoal & Equipe: Relacionamento maduro com os colegas e habilidade para atuar como resolvedor de conflitos internos",
      "📖 Liderança Servidora: Estudo e aplicação dos conceitos de liderança pelo exemplo",
    ],
    apoio: [
      "📖 Livro Obrigatório: 'O Monge e o Executivo' (James C. Hunter) - Liderança Servidora, paciência e autoridade com empatia",
      "🎥 Vídeo/Palestra: Mário Sérgio Cortella - A Importância do Liderar pelo Exemplo",
    ],
  },
  Supervisor: {
    requisitos: [
      "⭐ Performance: Nota 'Muito Bom' ou 'Excelente' na Avaliação Trimestral da gestão",
      "🎯 Foco em Metas: Acompanhamento diário e direcionamento da equipe para o atingimento das metas operacionais e de vendas",
      "🎈 Gestão de Festas: Condução completa e autônoma da operação de festas e eventos, do planejamento ao encerramento",
      "📦 Controle de Estoque: Domínio dos processos de inventário, contagem, recebimento e reposição de insumos da unidade",
      "⚖️ Ocorrências & Clima: Gestão assertiva de incidentes da operação e mediação madura de conflitos internos da equipe",
    ],
    apoio: [
      "📖 Livro Recomendado: 'A Única Coisa' (Gary Keller) - Foco no atingimento das metas prioritárias",
      "📊 Manual Prático: Guia interno de Inventário, Contagem de Curva ABC e Gestão de Festas",
    ],
  },
  Subgerente: {
    requisitos: [
      "⭐ Performance: Nota 'Muito Bom' ou 'Excelente' na Avaliação Trimestral da gestão",
      "⚙️ Visão Operacional 360°: Domínio técnico e autônomo de absolutamente todas as etapas da operação (Abertura, Pista, Recepção, Fechamento e Caixa)",
      "🎯 Metas & Gestão Estratégica: Acompanhamento de indicadores chave, DRE simplificada e planos de ação para alcance de metas",
      "🎈 Gestão Global de Festas & Estoque: Supervisão rigorosa da qualidade das festas, auditoria de estoque e giro de produtos",
      "🤝 Mediação & Liderança Avançada: Resolução de ocorrências complexas com clientes/equipe e formação contínua de novos líderes",
    ],
    apoio: [
      "📖 Livro Recomendado: 'Pipeline de Liderança' (Ram Charan) - A transição de liderar pessoas para liderar processos",
      "📈 Manual Financeiro: Treinamento de Gestão de DRE, DSR e Escalas Operacionais",
    ],
  },
};

// Função para renderizar as informações na tela
function renderizarCargo(nomeCargo) {
  const container = document.getElementById("conteudo-cargo");
  const cargo = DADOS_CARGOS[nomeCargo];

  if (!cargo) return;

  const htmlRequisitos = cargo.requisitos
    .map((item) => `<li>${item}</li>`)
    .join("");

  const htmlApoio = cargo.apoio.map((item) => `<li>${item}</li>`).join("");

  container.innerHTML = `
    <h2 class="titulo-cargo">${nomeCargo}</h2>
    
    <div class="secao-detalhes">
      <h3>📋 Requisitos para o Cargo</h3>
      <ul>${htmlRequisitos}</ul>
    </div>

    <div class="secao-detalhes">
      <h3>📚 Material de Apoio & Guia de Estudos</h3>
      <ul class="apoio-lista">${htmlApoio}</ul>
    </div>
  `;
}

// Salva no localStorage na primeira execução para garantir a persistência
localStorage.setItem("APP_CARGOS_DATA", JSON.stringify(DADOS_CARGOS));
