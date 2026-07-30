// ==========================================
// 1. BASES DE DADOS PADRÃO DO SISTEMA
// ==========================================

// Lista padrão de Funcionários com Níveis Animateams
const FUNCIONARIOS_PADRAO = [
  {
    id: 1,
    nome: "Ana Silva",
    cargo: "Recepcionista",
    nivelAnimateams: "Nível 2 - Bronze",
  },
  {
    id: 2,
    nome: "Bruno Souza",
    cargo: "Líder",
    nivelAnimateams: "Nível 3 - Prata",
  },
  {
    id: 3,
    nome: "Carla Lima",
    cargo: "Mídia",
    nivelAnimateams: "Nível 1 - Iniciante",
  },
  {
    id: 4,
    nome: "Diego Santos",
    cargo: "Supervisor",
    nivelAnimateams: "Nível 4 - Ouro",
  },
  {
    id: 5,
    nome: "Elena Costa",
    cargo: "Subgerente",
    nivelAnimateams: "Nível 5 - Diamante",
  },
];

// Base de Trilhas e Perfis dos Cargos
const TRILHAS_PADRAO = {
  Mídia: {
    funcoes: [
      "📸 Cobertura de Conteúdo: Captação diária de fotos e vídeos de festas e rotina da loja",
      "🎨 Edição & Design: Criação de artes institucionais e edições para Reels e TikTok",
      "📈 Presença Digital: Acompanhamento de métricas e tendências das redes",
      "🤝 Alinhamento Interno: Interface direta com a gestão para divulgar campanhas",
    ],
    requisitos: [
      "⭐ Performance: Nota 'Muito Bom' ou 'Excelente' na Avaliação Trimestral",
      "📲 Tendências & Redes: Domínio das redes sociais e áudios em alta",
      "🎨 Edição & Design: Domínio prático em Canva e CapCut",
      "🤝 Mentoria Prática: Treinamento contínuo com a equipe de marketing",
    ],
    apoio: [
      "🎨 Curso Gratuito: Canva Design School",
      "📱 Tutoriais CapCut: Edições dinâmicas para Reels/TikTok",
      "📱 Estudo de Tendências: Análise diária de Reels e TikToks do segmento",
    ],
  },
  Recepcionista: {
    funcoes: [
      "📋 Atendimento de Balcão: Recepção acolhedora de pais e crianças",
      "💻 Operação de Sistema: Check-in, Check-out e cadastro de clientes",
      "💰 Gestão de Caixa: Abertura, fechamento e recebimentos",
      "🗣️ Comunicação Acolhedora: Tom de voz gentil e resolução inicial de dúvidas",
    ],
    requisitos: [
      "⭐ Performance: Nota 'Muito Bom' ou 'Excelente' na Avaliação Trimestral",
      "🎓 Plataforma Twygo: Conclusão de 100% dos módulos no Twygo",
      "💻 Sistema de Recepção: Domínio prático de caixa e atendimento",
      "🗣️ Comunicatividade: Comunicação clara e empatia constante",
      "📖 Português Prático: Expressão verbal e escrita correta",
    ],
    apoio: [
      "📖 Livro Recomendado: 'Comunicação Não-Violenta' (Marshall Rosenberg)",
      "📖 Livro Recomendado: 'Escrever Melhor' (Inês Signorini)",
      "💻 Curso Gratuito: Fundação Bradesco — Comunicação Escrita",
      "📺 Canal YouTube: 'Nossa Língua Portuguesa'",
    ],
  },
  Líder: {
    funcoes: [
      "⚡ Condução da Pista: Animação e coordenação de grupos de crianças",
      "👥 Liderança de Recreação: Apoio e direcionamento dos recreadores na pista",
      "🕊️ Mediação Infantil: Resolução afetuosa de pequenos conflitos",
      "🛡️ Segurança & Padrões: Garantia do uso correto dos brinquedos",
    ],
    requisitos: [
      "⭐ Performance: Nota 'Excelente' (5.0) na Avaliação Trimestral",
      "👶 Condução & Presença: Energia e firmeza afetuosa para liderar a pista",
      "🕊️ Mediação Infantil: Habilidade comprovada em gerenciar conflitos infantis",
      "👥 Interpessoal: Bom relacionamento e postura de liderança pelo exemplo",
    ],
    apoio: [
      "📖 Livro Obrigatório: 'O Monge e o Executivo' (James C. Hunter)",
      "🎥 Palestra Recomendada: Mário Sérgio Cortella — Liderança e Exemplo Prático",
    ],
  },
  Supervisor: {
    funcoes: [
      "📊 Supervisão Operacional: Acompanhamento da pista e ritmo de atendimento",
      "🎯 Gestão de Metas: Direcionamento diário da equipe para metas da loja",
      "🎈 Gestão de Festas: Planejamento e acompanhamento de eventos",
      "📦 Controle de Insumos: Inventário, contagem e pedido de reposição",
    ],
    requisitos: [
      "⭐ Performance: Nota 'Muito Bom' ou 'Excelente' na Avaliação Trimestral",
      "🎯 Foco em Metas: Acompanhamento diário dos resultados",
      "🎈 Gestão de Festas: Condução autônoma da operação de festas",
      "📦 Controle de Estoque: Domínio de inventário e reposição de insumos",
    ],
    apoio: [
      "📖 Livro Recomendado: 'A Única Coisa' (Gary Keller)",
      "📊 Manual Interno: Guia Prático de Inventário e Checklist de Festas",
    ],
  },
  Subgerente: {
    funcoes: [
      "⚙️ Visão Operacional 360°: Atuação em todos os setores (Abertura, Pista, Caixa, Fechamento)",
      "📈 Acompanhamento de DRE & Metas: Análise de indicadores e custos",
      "🔍 Auditoria de Padrões: Fiscalização de limpeza, organização e segurança",
      "🤝 Formação de Lideranças: Desenvolvimento de supervisores e líderes",
    ],
    requisitos: [
      "⭐ Performance: Nota 'Muito Bom' ou 'Excelente' na Avaliação Trimestral",
      "⚙️ Visão Operacional 360°: Domínio técnico de todas as rotinas da loja",
      "🎯 Metas & Gestão Estratégica: Acompanhamento de DRE e planos de ação",
      "🤝 Liderança Avançada: Formação contínua de novas lideranças",
    ],
    apoio: [
      "📖 Livro Recomendado: 'Pipeline de Liderança' (Ram Charan)",
      "📈 Treinamento Interno: Gestão Financeira para Lojas e Escalas de Trabalho",
    ],
  },
};

// ==========================================
// 2. ESTADO E ARMAZENAMENTO NO LOCALSTORAGE
// ==========================================
let funcionarios =
  JSON.parse(localStorage.getItem("APP_FUNCIONARIOS")) || FUNCIONARIOS_PADRAO;
let trilhasCargos =
  JSON.parse(localStorage.getItem("APP_CARGOS_DATA")) || TRILHAS_PADRAO;
let funcionarioLogado = null;

// ==========================================
// 3. FUNÇÕES DE AUTENTICAÇÃO E LOGIN
// ==========================================

function popularSelectLogin() {
  const select = document.getElementById("selectFuncionarioLogin");
  if (!select) return;
  select.innerHTML = '<option value="">-- Escolha seu nome --</option>';
  funcionarios.forEach((f) => {
    select.innerHTML += `<option value="${f.id}">${f.nome} (${f.cargo})</option>`;
  });
}

function realizarLogin() {
  const select = document.getElementById("selectFuncionarioLogin");
  const idSelecionado = parseInt(select.value);

  if (!idSelecionado) {
    alert("Por favor, selecione seu nome para entrar.");
    return;
  }

  funcionarioLogado = funcionarios.find((f) => f.id === idSelecionado);

  if (funcionarioLogado) {
    document.getElementById("secaoLogin").classList.add("d-none");
    document.getElementById("secaoAppPrincipal").classList.remove("d-none");
    renderPerfilColaborador();
  }
}

function realizarLogout() {
  funcionarioLogado = null;
  document.getElementById("secaoAppPrincipal").classList.add("d-none");
  document.getElementById("secaoLogin").classList.remove("d-none");
  document.getElementById("selectFuncionarioLogin").value = "";
}

// ==========================================
// 4. ÁREA DO COLABORADOR (PERFIL + TRILHA)
// ==========================================

function renderPerfilColaborador() {
  if (!funcionarioLogado) return;

  // Atualiza os dados do perfil do usuário logado
  document.getElementById("nomeColaboradorPerfil").innerText =
    funcionarioLogado.nome;
  document.getElementById("cargoColaboradorPerfil").innerText =
    funcionarioLogado.cargo;
  document.getElementById("nivelAnimateamsPerfil").innerText =
    funcionarioLogado.nivelAnimateams;

  const cargo = funcionarioLogado.cargo;
  const dados = trilhasCargos[cargo] || {
    funcoes: [],
    requisitos: [],
    apoio: [],
  };

  document.getElementById("tituloCargoView").innerText =
    `Trilha & Requisitos — ${cargo}`;

  // Renderiza Funções
  const ulFuncoes = document.getElementById("listaFuncoesColaborador");
  ulFuncoes.innerHTML =
    dados.funcoes && dados.funcoes.length > 0
      ? dados.funcoes
          .map((f) => `<li class="list-group-item py-2">👤 ${f}</li>`)
          .join("")
      : `<li class="list-group-item text-muted">Nenhuma função descrita.</li>`;

  // Renderiza Requisitos
  const ulReq = document.getElementById("listaRequisitosColaborador");
  ulReq.innerHTML =
    dados.requisitos && dados.requisitos.length > 0
      ? dados.requisitos
          .map((r) => `<li class="list-group-item py-2">📌 ${r}</li>`)
          .join("")
      : `<li class="list-group-item text-muted">Nenhum requisito cadastrado.</li>`;

  // Renderiza Apoio
  const ulApoio = document.getElementById("listaApoioColaborador");
  ulApoio.innerHTML =
    dados.apoio && dados.apoio.length > 0
      ? dados.apoio
          .map(
            (a) =>
              `<li class="list-group-item bg-transparent py-2">📖 ${a}</li>`,
          )
          .join("")
      : `<li class="list-group-item bg-transparent text-muted">Nenhum material de apoio.</li>`;
}

// ==========================================
// 5. PAINEL DO GESTOR (GERENCIAR EQUIPE & TRILHAS)
// ==========================================

function renderTabelaGestorFuncionarios() {
  const tbody = document.getElementById("tbodyFuncionariosGestor");
  if (!tbody) return;

  tbody.innerHTML = funcionarios
    .map(
      (f) => `
    <tr>
      <td class="fw-bold">${f.nome}</td>
      <td>
        <select class="form-select form-select-sm" onchange="atualizarCargoFuncionario(${f.id}, this.value)">
          <option value="Mídia" ${f.cargo === "Mídia" ? "selected" : ""}>Mídia</option>
          <option value="Recepcionista" ${f.cargo === "Recepcionista" ? "selected" : ""}>Recepcionista</option>
          <option value="Líder" ${f.cargo === "Líder" ? "selected" : ""}>Líder</option>
          <option value="Supervisor" ${f.cargo === "Supervisor" ? "selected" : ""}>Supervisor</option>
          <option value="Subgerente" ${f.cargo === "Subgerente" ? "selected" : ""}>Subgerente</option>
        </select>
      </td>
      <td>
        <input type="text" class="form-control form-control-sm" value="${f.nivelAnimateams}" onchange="atualizarNivelAnimateams(${f.id}, this.value)">
      </td>
      <td>
        <button class="btn btn-sm btn-outline-danger" onclick="excluirFuncionario(${f.id})">🗑️ Excluir</button>
      </td>
    </tr>
  `,
    )
    .join("");
}

function adicionarNovoFuncionario() {
  const nome = document.getElementById("novoNomeFuncionario").value.trim();
  const cargo = document.getElementById("novoCargoFuncionario").value;
  const nivel =
    document.getElementById("novoNivelAnimateams").value.trim() ||
    "Nível 1 - Iniciante";

  if (!nome) {
    alert("Digite o nome do funcionário!");
    return;
  }

  const novo = {
    id: Date.now(),
    nome: nome,
    cargo: cargo,
    nivelAnimateams: nivel,
  };

  funcionarios.push(novo);
  salvarFuncionarios();

  document.getElementById("novoNomeFuncionario").value = "";
  document.getElementById("novoNivelAnimateams").value = "";

  renderTabelaGestorFuncionarios();
  popularSelectLogin();
  alert("✅ Funcionário cadastrado com sucesso!");
}

function atualizarCargoFuncionario(id, novoCargo) {
  const f = funcionarios.find((item) => item.id === id);
  if (f) {
    f.cargo = novoCargo;
    salvarFuncionarios();
  }
}

function atualizarNivelAnimateams(id, novoNivel) {
  const f = funcionarios.find((item) => item.id === id);
  if (f) {
    f.nivelAnimateams = novoNivel;
    salvarFuncionarios();
  }
}

function excluirFuncionario(id) {
  if (confirm("Deseja realmente remover este colaborador?")) {
    funcionarios = funcionarios.filter((f) => f.id !== id);
    salvarFuncionarios();
    renderTabelaGestorFuncionarios();
    popularSelectLogin();
  }
}

function salvarFuncionarios() {
  localStorage.setItem("APP_FUNCIONARIOS", JSON.stringify(funcionarios));
}

// --- EDITAR TRILHAS NO GESTOR ---

function carregarFormularioCargoGestor() {
  const select = document.getElementById("selectCargoGestor");
  if (!select) return;

  const cargo = select.value;
  const dados = trilhasCargos[cargo] || {
    funcoes: [],
    requisitos: [],
    apoio: [],
  };

  document.getElementById("txtFuncoesGestor").value = (
    dados.funcoes || []
  ).join("\n");
  document.getElementById("txtRequisitosGestor").value = (
    dados.requisitos || []
  ).join("\n");
  document.getElementById("txtApoioGestor").value = (dados.apoio || []).join(
    "\n",
  );
}

function salvarAlteracoesTrilha() {
  const cargo = document.getElementById("selectCargoGestor").value;
  const funcoesTexto = document.getElementById("txtFuncoesGestor").value.trim();
  const reqTexto = document.getElementById("txtRequisitosGestor").value.trim();
  const apoioTexto = document.getElementById("txtApoioGestor").value.trim();

  trilhasCargos[cargo] = {
    funcoes: funcoesTexto
      ? funcoesTexto.split("\n").filter((i) => i.trim() !== "")
      : [],
    requisitos: reqTexto
      ? reqTexto.split("\n").filter((i) => i.trim() !== "")
      : [],
    apoio: apoioTexto
      ? apoioTexto.split("\n").filter((i) => i.trim() !== "")
      : [],
  };

  localStorage.setItem("APP_CARGOS_DATA", JSON.stringify(trilhasCargos));
  alert(`✅ O perfil e a trilha do cargo "${cargo}" foram salvos com sucesso!`);

  if (funcionarioLogado && funcionarioLogado.cargo === cargo) {
    renderPerfilColaborador();
  }
}

function restaurarPadroes() {
  if (
    confirm("Tem certeza de que deseja restaurar as configurações originais?")
  ) {
    funcionarios = JSON.parse(JSON.stringify(FUNCIONARIOS_PADRAO));
    trilhasCargos = JSON.parse(JSON.stringify(TRILHAS_PADRAO));

    localStorage.setItem("APP_FUNCIONARIOS", JSON.stringify(funcionarios));
    localStorage.setItem("APP_CARGOS_DATA", JSON.stringify(trilhasCargos));

    popularSelectLogin();
    renderTabelaGestorFuncionarios();
    carregarFormularioCargoGestor();
    if (funcionarioLogado) renderPerfilColaborador();

    alert("🔄 O aplicativo foi restaurado para o padrão original!");
  }
}

// ==========================================
// 6. INICIALIZAÇÃO DO APLICATIVO
// ==========================================
window.onload = function () {
  popularSelectLogin();
  renderTabelaGestorFuncionarios();
  carregarFormularioCargoGestor();
};
