// BASE DE DADOS PADRÃO DO APP (Usada como fallback inicial)
const DADOS_PADRAO = {
  Mídia: {
    requisitos: [
      "⭐ Performance: Nota 'Muito Bom' ou 'Excelente' na Avaliação Trimestral da gestão",
      "📲 Tendências & Redes: Estar antenado(a) nas redes sociais, algoritmos e trends do momento (Reels/TikTok)",
      "🎨 Edição & Design: Domínio prático na criação de artes no Canva e edições dinâmicas no CapCut",
      "🤝 Mentoria Prática: Estar sendo treinada e acompanhada ativamente pela Mídia oficial da loja",
    ],
    apoio: [
      "🎨 Curso Gratuito: Canva Design School (Aulas rápidas de composição visual)",
      "📱 Tutoriais CapCut: Conteúdos no YouTube focados em cortes dinâmicos para Reels/TikTok",
      "📱 Estudo de Tendências: Acompanhamento diário das trends e áudios em alta nas redes",
    ],
  },
  Recepcionista: {
    requisitos: [
      "⭐ Performance: Nota 'Muito Bom' ou 'Excelente' na Avaliação Trimestral da gestão",
      "🎓 Plataforma Twygo: Conclusão de 100% dos módulos da Trilha de Recepcionista no Twygo",
      "💻 Sistema de Recepção: Domínio prático dos procedimentos operacionais de Check-in, Check-out e caixa",
      "🗣️ Comunicatividade & Tom de Voz: Comunicação clara, simpatia constante e tom de voz acolhedor",
      "📖 Português Prático & Atendimento: Expressão verbal correta e estudo constante com os materiais fornecidos",
    ],
    apoio: [
      "📖 Livro Recomendado: 'Escrever Melhor' (Inês Signorini) ou 'Gramática para Apressados' (Sérgio Nogueira)",
      "🤝 Livro Recomendado: 'Comunicação Não-Violenta' (Marshall Rosenberg) — Escuta empática e tom acolhedor",
      "💻 Curso Gratuito: Fundação Bradesco — Comunicação Escrita e Expressão Verbal (com certificado)",
      "📺 Canal de Estudo: 'Nossa Língua Portuguesa' (YouTube) para correções de português do cotidiano",
    ],
  },
  Líder: {
    requisitos: [
      "⭐ Performance: Nota 'Excelente' (5.0) na Avaliação Trimestral da gestão",
      "👶 Condução & Presença: Ter voz ativa, energia e firmeza afetuosa para conduzir e conter grupos de crianças",
      "🕊️ Mediação Infantil: Capacidade comprovada em resolver conflitos e divergências entre crianças na pista",
      "👥 Interpessoal & Equipe: Relacionamento maduro e habilidade para atuar como resolvedor de conflitos internos",
      "📖 Liderança Servidora: Aplicação prática dos conceitos de liderança pelo exemplo",
    ],
    apoio: [
      "📖 Livro Obrigatório: 'O Monge e o Executivo' (James C. Hunter) — Liderança Servidora, paciência e empatia",
      "🎥 Palestra Recomendada: Mário Sérgio Cortella — Liderança, Ética e Exemplo Prático",
    ],
  },
  Supervisor: {
    requisitos: [
      "⭐ Performance: Nota 'Muito Bom' ou 'Excelente' na Avaliação Trimestral da gestão",
      "🎯 Foco em Metas: Acompanhamento diário e direcionamento da equipe para o atingimento das metas",
      "🎈 Gestão de Festas: Condução completa e autônoma da operação de festas e eventos",
      "📦 Controle de Estoque: Domínio de inventário, contagem, recebimento e reposição de insumos",
      "⚖️ Ocorrências & Clima: Gestão assertiva de incidentes operacionais e conflitos internos",
    ],
    apoio: [
      "📖 Livro Recomendado: 'A Única Coisa' (Gary Keller) — Foco nas prioridades que geram resultados",
      "📊 Manual Interno: Guia Prático de Inventário, Curva ABC e Checklist de Festas",
    ],
  },
  Subgerente: {
    requisitos: [
      "⭐ Performance: Nota 'Muito Bom' ou 'Excelente' na Avaliação Trimestral da gestão",
      "⚙️ Visão Operacional 360°: Domínio técnico de absolutamente todas as etapas (Abertura, Pista, Recepção, Fechamento e Caixa)",
      "🎯 Metas & Gestão Estratégica: Acompanhamento de indicadores chave, DRE simplificada e planos de ação",
      "🎈 Gestão Global de Festas & Estoque: Auditoria de qualidade das festas, giro de produtos e compras",
      "🤝 Liderança Avançada: Resolução de ocorrências complexas e formação contínua de novos líderes",
    ],
    apoio: [
      "📖 Livro Recomendado: 'Pipeline de Liderança' (Ram Charan) — A transição de liderar pessoas para processos",
      "📈 Treinamento Interno: Gestão Financeira para Lojas, Escalas de Trabalho e DRE",
    ],
  },
};

// CARREGA OS DADOS SALVOS NO NAVEGADOR OU USA O PADRÃO
let DADOS_CARGOS =
  JSON.parse(localStorage.getItem("APP_CARGOS_DATA")) || DADOS_PADRAO;

// 1. ATUALIZA A TELA DO COLABORADOR
function atualizarViewColaborador() {
  const select = document.getElementById("selectCargoColaborador");
  if (!select) return;

  const cargo = select.value;
  const dados = DADOS_CARGOS[cargo] || { requisitos: [], apoio: [] };

  document.getElementById("tituloTrilhaReq").innerText =
    `Requisitos para Promoção — ${cargo}`;

  const ulReq = document.getElementById("listaRequisitosColaborador");
  const ulApoio = document.getElementById("listaApoioColaborador");

  if (dados.requisitos.length === 0) {
    ulReq.innerHTML = `<li class="list-group-item text-muted">Nenhum requisito cadastrado para este cargo.</li>`;
  } else {
    ulReq.innerHTML = dados.requisitos
      .map((r) => `<li class="list-group-item py-3">📌 ${r}</li>`)
      .join("");
  }

  if (dados.apoio.length === 0) {
    ulApoio.innerHTML = `<li class="list-group-item bg-transparent text-muted">Nenhum material de apoio cadastrado.</li>`;
  } else {
    ulApoio.innerHTML = dados.apoio
      .map(
        (a) => `<li class="list-group-item bg-transparent py-3">📖 ${a}</li>`,
      )
      .join("");
  }
}

// 2. CARREGA O FORMULÁRIO DO GESTOR
function carregarFormularioCargo() {
  const select = document.getElementById("selectCargoGestor");
  if (!select) return;

  const cargo = select.value;
  const dados = DADOS_CARGOS[cargo] || { requisitos: [], apoio: [] };

  document.getElementById("txtRequisitosGestor").value =
    dados.requisitos.join("\n");
  document.getElementById("txtApoioGestor").value = dados.apoio.join("\n");
}

// 3. SALVA AS ALTERAÇÕES FEITAS PELO GESTOR
function salvarAlteracoesTrilha() {
  const cargo = document.getElementById("selectCargoGestor").value;
  const reqTexto = document.getElementById("txtRequisitosGestor").value.trim();
  const apoioTexto = document.getElementById("txtApoioGestor").value.trim();

  DADOS_CARGOS[cargo] = {
    requisitos: reqTexto
      ? reqTexto.split("\n").filter((i) => i.trim() !== "")
      : [],
    apoio: apoioTexto
      ? apoioTexto.split("\n").filter((i) => i.trim() !== "")
      : [],
  };

  localStorage.setItem("APP_CARGOS_DATA", JSON.stringify(DADOS_CARGOS));
  alert(`✅ As alterações do cargo "${cargo}" foram salvas com sucesso!`);
  atualizarViewColaborador();
}

// 4. RESTAURA OS DADOS PADRÃO ORIGINAIS
function restaurarPadroes() {
  if (
    confirm(
      "Tem certeza de que deseja restaurar as trilhas e materiais originais? Todas as edições personalizadas serão sobrescritas.",
    )
  ) {
    DADOS_CARGOS = JSON.parse(JSON.stringify(DADOS_PADRAO));
    localStorage.setItem("APP_CARGOS_DATA", JSON.stringify(DADOS_CARGOS));
    carregarFormularioCargo();
    atualizarViewColaborador();
    alert("🔄 O aplicativo foi restaurado para as configurações padrão!");
  }
}

// EXECUTA AO CARREGAR A PÁGINA
window.onload = function () {
  atualizarViewColaborador();
};
