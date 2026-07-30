// ==========================================
// 1. BANCO DE DADOS OFICIAL ANIMATEAMS (VIA PARQUE - 18 COLABORADORES)
// ==========================================

const FUNCIONARIOS_PADRAO = [
  {
    id: 1,
    nome: "Patrícia",
    apelido: "Patrícia",
    cargo: "Gerente",
    pin: "1001",
    nivelAnimateams: "Líder Sênior",
    loja: "Via Parque",
    presencas: 22,
    faltas: 0,
    diasEmpresa: 1050,
    elogiosClientes: [
      {
        data: "15/06/2026",
        evento: "Gestão",
        texto: "Equipe extremamente organizada e atenciosa!",
      },
    ],
    treinamentos: {
      progressoMedio: 100,
      notaMedia: 98,
      trilhaObrigatoria: { nome: "Trilha Gerencial", progresso: 100 },
      cursosExtras: [
        { nome: "Liderança de Alta Performance", progresso: 100, nota: 98 },
      ],
    },
  },
  {
    id: 2,
    nome: "Thainá Freires",
    apelido: "Thainá",
    cargo: "Subgerente (Dia)",
    pin: "1002",
    nivelAnimateams: "Líder Pleno",
    loja: "Via Parque",
    presencas: 19,
    faltas: 0,
    diasEmpresa: 520,
    elogiosClientes: [
      {
        data: "03/05/2026",
        evento: "Festa",
        texto: "Tia rose Tio saturno Gerente Tainá Tia Aline",
      },
    ],
    treinamentos: {
      progressoMedio: 100,
      notaMedia: 95,
      trilhaObrigatoria: { nome: "Trilha Subgerência", progresso: 100 },
      cursosExtras: [{ nome: "Gestão de Lojas", progresso: 100, nota: 95 }],
    },
  },
  {
    id: 3,
    nome: "Felipe Mamedes",
    apelido: "Felipe",
    cargo: "Subgerente (Noite)",
    pin: "1003",
    nivelAnimateams: "Líder Pleno",
    loja: "Via Parque",
    presencas: 21,
    faltas: 0,
    diasEmpresa: 480,
    elogiosClientes: [],
    treinamentos: {
      progressoMedio: 95,
      notaMedia: 91,
      trilhaObrigatoria: { nome: "Trilha Subgerência", progresso: 100 },
      cursosExtras: [],
    },
  },
  {
    id: 4,
    nome: "Ana Vitória dos Santos",
    apelido: "Ana",
    cargo: "Supervisora",
    pin: "1004",
    nivelAnimateams: "Líder Junior",
    loja: "Via Parque",
    presencas: 19,
    faltas: 0,
    diasEmpresa: 410,
    elogiosClientes: [
      {
        data: "09/07/2026",
        evento: "Festa",
        texto: "atenção dos tios Saturno, Pink e Ana, E tb",
      },
    ],
    treinamentos: {
      progressoMedio: 92,
      notaMedia: 87,
      trilhaObrigatoria: { nome: "Trilha Supervisão", progresso: 95 },
      cursosExtras: [],
    },
  },
  {
    id: 5,
    nome: "Pâmella dos Santos",
    apelido: "Pâmella",
    cargo: "Recepcionista",
    pin: "1005",
    nivelAnimateams: "Em Desenvolvimento",
    loja: "Via Parque",
    presencas: 18,
    faltas: 0,
    diasEmpresa: 140,
    elogiosClientes: [],
    treinamentos: {
      progressoMedio: 75,
      notaMedia: 80,
      trilhaObrigatoria: { nome: "Trilha Recepção", progresso: 75 },
      cursosExtras: [],
    },
  },
  {
    id: 6,
    nome: "Michelly Barbosa",
    apelido: "Michelly",
    cargo: "Recreadora / Líder em Treinamento",
    pin: "1006",
    nivelAnimateams: "Em Desenvolvimento",
    loja: "Via Parque",
    presencas: 20,
    faltas: 0,
    diasEmpresa: 310,
    elogiosClientes: [],
    treinamentos: {
      progressoMedio: 90,
      notaMedia: 88,
      trilhaObrigatoria: { nome: "Trilha Recreador", progresso: 90 },
      cursosExtras: [],
    },
  },
  {
    id: 7,
    nome: "Vinícius Valente",
    apelido: "Vinícius",
    cargo: "Recreador",
    pin: "1007",
    nivelAnimateams: "Em Desenvolvimento",
    loja: "Via Parque",
    presencas: 18,
    faltas: 0,
    diasEmpresa: 180,
    elogiosClientes: [],
    treinamentos: {
      progressoMedio: 80,
      notaMedia: 82,
      trilhaObrigatoria: { nome: "Trilha Recreador", progresso: 80 },
      cursosExtras: [],
    },
  },
  {
    id: 8,
    nome: "Alex de Oliveira",
    apelido: "Alex",
    cargo: "Recreador",
    pin: "1008",
    nivelAnimateams: "Em Desenvolvimento",
    loja: "Via Parque",
    presencas: 19,
    faltas: 0,
    diasEmpresa: 210,
    elogiosClientes: [],
    treinamentos: {
      progressoMedio: 85,
      notaMedia: 84,
      trilhaObrigatoria: { nome: "Trilha Recreador", progresso: 85 },
      cursosExtras: [],
    },
  },
  {
    id: 9,
    nome: "Aline Ferreira",
    apelido: "Aline",
    cargo: "Recreadora",
    pin: "1009",
    nivelAnimateams: "Em Desenvolvimento",
    loja: "Via Parque",
    presencas: 20,
    faltas: 0,
    diasEmpresa: 240,
    elogiosClientes: [
      {
        data: "03/05/2026",
        evento: "Festa",
        texto: "Tia rose Tio saturno Gerente Tainá Tia Aline",
      },
    ],
    treinamentos: {
      progressoMedio: 88,
      notaMedia: 86,
      trilhaObrigatoria: { nome: "Trilha Recreador", progresso: 90 },
      cursosExtras: [],
    },
  },
  {
    id: 10,
    nome: "Davi Campello",
    apelido: "Davi",
    cargo: "Recepcionista",
    pin: "1010",
    nivelAnimateams: "Em Desenvolvimento",
    loja: "Via Parque",
    presencas: 20,
    faltas: 0,
    diasEmpresa: 260,
    elogiosClientes: [],
    treinamentos: {
      progressoMedio: 85,
      notaMedia: 84,
      trilhaObrigatoria: { nome: "Trilha Recepção", progresso: 85 },
      cursosExtras: [],
    },
  },
  {
    id: 11,
    nome: "Eduarda Gonçalves",
    apelido: "Eduarda",
    cargo: "Recepcionista",
    pin: "1011",
    nivelAnimateams: "Em Desenvolvimento",
    loja: "Via Parque",
    presencas: 20,
    faltas: 0,
    diasEmpresa: 290,
    elogiosClientes: [],
    treinamentos: {
      progressoMedio: 88,
      notaMedia: 86,
      trilhaObrigatoria: { nome: "Trilha Recepção", progresso: 90 },
      cursosExtras: [],
    },
  },
  {
    id: 12,
    nome: "Geovana Isabelly",
    apelido: "Gigi",
    cargo: "Recreadora",
    pin: "1012",
    nivelAnimateams: "Em Desenvolvimento",
    loja: "Via Parque",
    presencas: 18,
    faltas: 0,
    diasEmpresa: 150,
    elogiosClientes: [
      {
        data: "24/05/2026",
        evento: "Festa",
        texto: "muito atenciosa, Gigi e Saturno da animação foram",
      },
    ],
    treinamentos: {
      progressoMedio: 82,
      notaMedia: 83,
      trilhaObrigatoria: { nome: "Trilha Recreador", progresso: 82 },
      cursosExtras: [],
    },
  },
  {
    id: 13,
    nome: "Isabelly Vitória",
    apelido: "Isabelly",
    cargo: "Recreadora",
    pin: "1013",
    nivelAnimateams: "Em Desenvolvimento",
    loja: "Via Parque",
    presencas: 17,
    faltas: 0,
    diasEmpresa: 120,
    elogiosClientes: [],
    treinamentos: {
      progressoMedio: 78,
      notaMedia: 80,
      trilhaObrigatoria: { nome: "Trilha Recreador", progresso: 78 },
      cursosExtras: [],
    },
  },
  {
    id: 14,
    nome: "Kainá Rosendo",
    apelido: "Kainá",
    cargo: "Recreador",
    pin: "1014",
    nivelAnimateams: "Em Desenvolvimento",
    loja: "Via Parque",
    presencas: 19,
    faltas: 0,
    diasEmpresa: 190,
    elogiosClientes: [],
    treinamentos: {
      progressoMedio: 84,
      notaMedia: 85,
      trilhaObrigatoria: { nome: "Trilha Recreador", progresso: 84 },
      cursosExtras: [],
    },
  },
  {
    id: 15,
    nome: "Lohana Pessoa",
    apelido: "Lohana",
    cargo: "Recreadora",
    pin: "1015",
    nivelAnimateams: "Em Desenvolvimento",
    loja: "Via Parque",
    presencas: 18,
    faltas: 0,
    diasEmpresa: 160,
    elogiosClientes: [],
    treinamentos: {
      progressoMedio: 80,
      notaMedia: 81,
      trilhaObrigatoria: { nome: "Trilha Recreador", progresso: 80 },
      cursosExtras: [],
    },
  },
  {
    id: 16,
    nome: "Lucas Cabral",
    apelido: "Saturno",
    cargo: "Recreador",
    pin: "1016",
    nivelAnimateams: "Em Desenvolvimento",
    loja: "Via Parque",
    presencas: 20,
    faltas: 1,
    diasEmpresa: 692,
    elogiosClientes: [
      {
        data: "09/07/2026",
        evento: "Festa",
        texto: "atenção dos tios Saturno, Pink e Ana, E tb",
      },
      {
        data: "24/05/2026",
        evento: "Festa",
        texto: "muito atenciosa, Gigi e Saturno da animação foram",
      },
      {
        data: "03/05/2026",
        evento: "Festa",
        texto: "Tia rose Tio saturno Gerente Tainá Tia Aline",
      },
    ],
    treinamentos: {
      progressoMedio: 100,
      notaMedia: 89,
      trilhaObrigatoria: { nome: "Trilha Recreador", progresso: 100 },
      cursosExtras: [
        { nome: "Liderança na Animasom", progresso: 100, nota: 86 },
      ],
    },
  },
  {
    id: 17,
    nome: "Micaela de Souza",
    apelido: "Micaela",
    cargo: "Recreadora",
    pin: "1017",
    nivelAnimateams: "Em Desenvolvimento",
    loja: "Via Parque",
    presencas: 19,
    faltas: 0,
    diasEmpresa: 175,
    elogiosClientes: [],
    treinamentos: {
      progressoMedio: 82,
      notaMedia: 83,
      trilhaObrigatoria: { nome: "Trilha Recreador", progresso: 82 },
      cursosExtras: [],
    },
  },
  {
    id: 18,
    nome: "Rosenilda Santos",
    apelido: "Rose",
    cargo: "ASG",
    pin: "1018",
    nivelAnimateams: "Em Desenvolvimento",
    loja: "Via Parque",
    presencas: 21,
    faltas: 0,
    diasEmpresa: 730,
    elogiosClientes: [
      {
        data: "03/05/2026",
        evento: "Festa",
        texto: "Tia rose Tio saturno Gerente Tainá Tia Aline",
      },
    ],
    treinamentos: {
      progressoMedio: 90,
      notaMedia: 92,
      trilhaObrigatoria: { nome: "Trilha Manutenção & Higiene", progresso: 90 },
      cursosExtras: [],
    },
  },
];

// ==========================================
// 2. TRILHAS E CARGOS MAPEADOS
// ==========================================

const TRILHAS_PADRAO = {
  Gerente: {
    funcoes: [
      "📊 Gestão Geral da Loja: Liderança das equipes, escala e resultados operacionais",
      "📈 Acompanhamento de Metas & DRE: Controle de custos, receita e auditorias de padrão",
      "🤝 Formação de Lideranças: Desenvolvimento direto dos Subgerentes e Supervisores",
    ],
    requisitos: [
      "⭐ Excelência na Avaliação Trimestral",
      "🎯 Cumprimento constante das metas de loja",
      "📜 Trilha Gerencial 100% concluída",
    ],
    apoio: [
      "📖 'Pipeline de Liderança' — Ram Charan",
      "📈 Treinamento Avançado de Gestão Financeira Animasom",
    ],
  },
  "Subgerente (Dia)": {
    funcoes: [
      "⚙️ Supervisão Operacional Diurna: Garantia da qualidade de atendimento e rotina de pista",
      "📋 Acompanhamento de Checklist: Abertura e manutenção do padrão da loja",
    ],
    requisitos: [
      "⭐ Nota superior a 90 nos treinamentos",
      "📌 Trilha de Subgerência concluída",
    ],
    apoio: ["📖 'O Monge e o Executivo' — James C. Hunter"],
  },
  "Subgerente (Noite)": {
    funcoes: [
      "⚙️ Supervisão Operacional Noturna: Gestão do fechamento de caixa e encerramento da loja",
      "🎉 Acompanhamento de Festas: Garantia da excelência no atendimento Noturno",
    ],
    requisitos: [
      "⭐ Nota superior a 90 nos treinamentos",
      "📌 Trilha de Subgerência concluída",
    ],
    apoio: ["📖 'A Única Coisa' — Gary Keller"],
  },
  Supervisora: {
    funcoes: [
      "📊 Acompanhamento de Pista & Caixa: Suporte direto às equipes operacionais",
      "📦 Gestão de Insumos & Festas: Checklist e controle de estoques",
    ],
    requisitos: [
      "⭐ Avaliação Trimestral Positiva",
      "📌 Trilha de Supervisão concluída",
    ],
    apoio: ["📖 Manual Interno de Inventário e Festas Animasom"],
  },
  "Recreador / Líder em Treinamento": {
    funcoes: [
      "⚡ Condução da Pista e Animação de Brincadeiras",
      "👥 Apoio na coordenação do time de recreadores",
      "🕊️ Mediação Infantil e Gestão de Conflitos na Pista",
    ],
    requisitos: [
      "⭐ Nota média > 85 nos treinamentos",
      "📌 Conclusão dos módulos de liderança no Animateams",
    ],
    apoio: ["🎥 Curso de Liderança na Animasom"],
  },
  Recreador: {
    funcoes: [
      "⚡ Animação de Pista e Participação Ativa em Festas",
      "🛡️ Segurança e Atenção ao Uso dos Brinquedos",
    ],
    requisitos: [
      "⭐ Presença acima de 95%",
      "📌 Trilha Recreador 100% concluída",
    ],
    apoio: ["🎙️ Workshop Interno de Condução de Pista"],
  },
  Recreadora: {
    funcoes: [
      "⚡ Animação de Pista e Participação Ativa em Festas",
      "🛡️ Segurança e Atenção ao Uso dos Brinquedos",
    ],
    requisitos: [
      "⭐ Presença acima de 95%",
      "📌 Trilha Recreador 100% concluída",
    ],
    apoio: ["🎙️ Workshop Interno de Condução de Pista"],
  },
  Recepcionista: {
    funcoes: [
      "📋 Check-in & Check-out de Crianças",
      "💰 Operação de Caixa e Atendimento no Balcão",
    ],
    requisitos: [
      "⭐ Atendimento Acolhedor e Empático",
      "📌 Trilha Recepção 100% concluída",
    ],
    apoio: ["📖 'Comunicação Não-Violenta' — Marshall Rosenberg"],
  },
  ASG: {
    funcoes: [
      "✨ Higienização e Organização da Loja e Brinquedos",
      "📦 Controle e Zeladoria dos Materiais de Limpeza",
    ],
    requisitos: ["⭐ Pontualidade e Cumprimento dos Checklists de Limpeza"],
    apoio: ["📖 Guia de Padrões de Organização e Higiene Animasom"],
  },
};

// ==========================================
// 3. PERSISTÊNCIA & VARIÁVEIS GLOBAIS
// ==========================================

let funcionarios =
  JSON.parse(localStorage.getItem("ANIMATEAMS_FUNCIONARIOS")) ||
  FUNCIONARIOS_PADRAO;
let trilhasCargos =
  JSON.parse(localStorage.getItem("ANIMATEAMS_TRILHAS")) || TRILHAS_PADRAO;
let funcionarioLogado = null;

// ==========================================
// 4. AUTENTICAÇÃO E LOGIN (COM VALIDAÇÃO DE PIN)
// ==========================================

function popularSelectLogin() {
  const select = document.getElementById("selectFuncionarioLogin");
  if (!select) return;
  select.innerHTML = '<option value="">-- Selecione seu nome --</option>';
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

  const func = funcionarios.find((f) => f.id === idSelecionado);

  if (func) {
    // Validação por PIN individual
    const pinIngressado = prompt(`🔒 Digite o PIN de acesso de ${func.nome}:`);

    if (pinIngressado !== func.pin) {
      alert("❌ PIN incorreto! Acesso negado.");
      return;
    }

    funcionarioLogado = func;
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
// 5. ÁREA DO COLABORADOR (RENDERIZAR PERFIL)
// ==========================================

function renderPerfilColaborador() {
  if (!funcionarioLogado) return;

  const f = funcionarioLogado;

  // Atualizar Dados Pessoais
  const elNome = document.getElementById("nomeColaboradorPerfil");
  const elApelido = document.getElementById("apelidoColaboradorPerfil");
  const elCargo = document.getElementById("cargoColaboradorPerfil");
  const elLoja = document.getElementById("lojaColaboradorPerfil");
  const elNivel = document.getElementById("nivelAnimateamsPerfil");

  if (elNome) elNome.innerText = f.nome;
  if (elApelido) elApelido.innerText = f.apelido ? `"${f.apelido}"` : "";
  if (elCargo) elCargo.innerText = f.cargo;
  if (elLoja) elLoja.innerText = f.loja || "Via Parque";
  if (elNivel) elNivel.innerText = f.nivelAnimateams;

  // Atualizar Métricas Operacionais
  const elPresencas = document.getElementById("presencasColaborador");
  const elFaltas = document.getElementById("faltasColaborador");
  const elDias = document.getElementById("diasEmpresaColaborador");

  if (elPresencas) elPresencas.innerText = f.presencas || 0;
  if (elFaltas) elFaltas.innerText = f.faltas || 0;
  if (elDias) elDias.innerText = f.diasEmpresa || 0;

  // Atualizar Treinamentos
  if (f.treinamentos) {
    const elProgresso = document.getElementById("progressoTreinamento");
    const elNota = document.getElementById("notaMediaTreinamento");
    const elTrilhaNome = document.getElementById("trilhaObrigatoriaNome");
    const elTrilhaBarra = document.getElementById("trilhaObrigatoriaBarra");

    if (elProgresso)
      elProgresso.innerText = `${f.treinamentos.progressoMedio}%`;
    if (elNota) elNota.innerText = f.treinamentos.notaMedia;

    if (elTrilhaNome && f.treinamentos.trilhaObrigatoria) {
      elTrilhaNome.innerText = f.treinamentos.trilhaObrigatoria.nome;
    }

    if (elTrilhaBarra && f.treinamentos.trilhaObrigatoria) {
      elTrilhaBarra.style.width = `${f.treinamentos.trilhaObrigatoria.progresso}%`;
      elTrilhaBarra.innerText = `${f.treinamentos.trilhaObrigatoria.progresso}%`;
    }

    const containerExtras = document.getElementById("listaCursosExtras");
    if (containerExtras) {
      if (
        f.treinamentos.cursosExtras &&
        f.treinamentos.cursosExtras.length > 0
      ) {
        containerExtras.innerHTML = f.treinamentos.cursosExtras
          .map(
            (c) => `
          <div class="mb-2">
            <small class="fw-bold d-block">${c.nome} — ${c.progresso}% (Nota ${c.nota})</small>
            <div class="progress" style="height: 10px;">
              <div class="progress-bar bg-success" style="width: ${c.progresso}%"></div>
            </div>
          </div>
        `,
          )
          .join("");
      } else {
        containerExtras.innerHTML = `<small class="text-muted">Nenhum curso extra cadastrado.</small>`;
      }
    }
  }

  // Atualizar Elogios dos Clientes
  const containerElogios = document.getElementById("listaElogiosClientes");
  if (containerElogios) {
    if (f.elogiosClientes && f.elogiosClientes.length > 0) {
      containerElogios.innerHTML = f.elogiosClientes
        .map(
          (e) => `
        <div class="p-2 border-bottom">
          <small class="text-muted fw-bold">${e.evento} • ${e.data}</small>
          <p class="mb-0 text-dark fs-6">"${e.texto}"</p>
        </div>
      `,
        )
        .join("");
    } else {
      containerElogios.innerHTML = `<p class="text-muted mb-0">Nenhum elogio registrado até o momento.</p>`;
    }
  }

  // Atualizar Trilhas e Requisitos do Cargo
  const dadosCargo = trilhasCargos[f.cargo] || {
    funcoes: [],
    requisitos: [],
    apoio: [],
  };

  const elTituloCargo = document.getElementById("tituloCargoView");
  if (elTituloCargo)
    elTituloCargo.innerText = `Trilha & Requisitos — ${f.cargo}`;

  const ulFuncoes = document.getElementById("listaFuncoesColaborador");
  if (ulFuncoes) {
    ulFuncoes.innerHTML =
      dadosCargo.funcoes && dadosCargo.funcoes.length > 0
        ? dadosCargo.funcoes
            .map((item) => `<li class="list-group-item py-2">👤 ${item}</li>`)
            .join("")
        : `<li class="list-group-item text-muted">Nenhuma função informada.</li>`;
  }

  const ulRequisitos = document.getElementById("listaRequisitosColaborador");
  if (ulRequisitos) {
    ulRequisitos.innerHTML =
      dadosCargo.requisitos && dadosCargo.requisitos.length > 0
        ? dadosCargo.requisitos
            .map((item) => `<li class="list-group-item py-2">📌 ${item}</li>`)
            .join("")
        : `<li class="list-group-item text-muted">Nenhum requisito cadastrado.</li>`;
  }

  const ulApoio = document.getElementById("listaApoioColaborador");
  if (ulApoio) {
    ulApoio.innerHTML =
      dadosCargo.apoio && dadosCargo.apoio.length > 0
        ? dadosCargo.apoio
            .map(
              (item) =>
                `<li class="list-group-item bg-transparent py-2">📚 ${item}</li>`,
            )
            .join("")
        : `<li class="list-group-item bg-transparent text-muted">Nenhum material de apoio.</li>`;
  }
}

// ==========================================
// 6. PAINEL DO GESTOR (GERENCIAMENTO)
// ==========================================

function renderTabelaGestorFuncionarios() {
  const tbody = document.getElementById("tbodyFuncionariosGestor");
  if (!tbody) return;

  tbody.innerHTML = funcionarios
    .map(
      (f) => `
    <tr>
      <td>
        <strong>${f.nome}</strong> 
        <br><small class="text-muted">PIN: ${f.pin}</small>
      </td>
      <td>
        <select class="form-select form-select-sm" onchange="atualizarCargoFuncionario(${f.id}, this.value)">
          <option value="Gerente" ${f.cargo === "Gerente" ? "selected" : ""}>Gerente</option>
          <option value="Subgerente (Dia)" ${f.cargo === "Subgerente (Dia)" ? "selected" : ""}>Subgerente (Dia)</option>
          <option value="Subgerente (Noite)" ${f.cargo === "Subgerente (Noite)" ? "selected" : ""}>Subgerente (Noite)</option>
          <option value="Supervisora" ${f.cargo === "Supervisora" ? "selected" : ""}>Supervisora</option>
          <option value="Recepcionista" ${f.cargo === "Recepcionista" ? "selected" : ""}>Recepcionista</option>
          <option value="Recreador / Líder em Treinamento" ${f.cargo === "Recreador / Líder em Treinamento" ? "selected" : ""}>Recreador / Líder em Treinamento</option>
          <option value="Recreador" ${f.cargo === "Recreador" ? "selected" : ""}>Recreador</option>
          <option value="Recreadora" ${f.cargo === "Recreadora" ? "selected" : ""}>Recreadora</option>
          <option value="ASG" ${f.cargo === "ASG" ? "selected" : ""}>ASG</option>
        </select>
      </td>
      <td>
        <input type="text" class="form-control form-control-sm" value="${f.nivelAnimateams}" onchange="atualizarNivelAnimateams(${f.id}, this.value)">
      </td>
      <td>
        <button class="btn btn-sm btn-outline-danger" onclick="excluirFuncionario(${f.id})">🗑️ Rem</button>
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
    "Em Desenvolvimento";

  if (!nome) {
    alert("Digite o nome do funcionário!");
    return;
  }

  const novoPin = (1000 + funcionarios.length + 1).toString();

  const novo = {
    id: Date.now(),
    nome: nome,
    cargo: cargo,
    pin: novoPin,
    nivelAnimateams: nivel,
    loja: "Via Parque",
    presencas: 0,
    faltas: 0,
    diasEmpresa: 1,
    elogiosClientes: [],
    treinamentos: {
      progressoMedio: 0,
      notaMedia: 0,
      trilhaObrigatoria: { nome: `Trilha ${cargo}`, progresso: 0 },
      cursosExtras: [],
    },
  };

  funcionarios.push(novo);
  salvarFuncionarios();

  document.getElementById("novoNomeFuncionario").value = "";
  document.getElementById("novoNivelAnimateams").value = "";

  renderTabelaGestorFuncionarios();
  popularSelectLogin();
  alert(`✅ Colaborador cadastrado! PIN gerado: ${novoPin}`);
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
  if (confirm("Tem certeza que deseja remover este colaborador?")) {
    funcionarios = funcionarios.filter((f) => f.id !== id);
    salvarFuncionarios();
    renderTabelaGestorFuncionarios();
    popularSelectLogin();
  }
}

function salvarFuncionarios() {
  localStorage.setItem("ANIMATEAMS_FUNCIONARIOS", JSON.stringify(funcionarios));
}

// EDITAR TRILHAS DE CARGOS NO PAINEL DO GESTOR

function carregarFormularioCargoGestor() {
  const select = document.getElementById("selectCargoGestor");
  if (!select) return;

  const cargo = select.value;
  const dados = trilhasCargos[cargo] || {
    funcoes: [],
    requisitos: [],
    apoio: [],
  };

  const txtFuncoes = document.getElementById("txtFuncoesGestor");
  const txtRequisitos = document.getElementById("txtRequisitosGestor");
  const txtApoio = document.getElementById("txtApoioGestor");

  if (txtFuncoes) txtFuncoes.value = (dados.funcoes || []).join("\n");
  if (txtRequisitos) txtRequisitos.value = (dados.requisitos || []).join("\n");
  if (txtApoio) txtApoio.value = (dados.apoio || []).join("\n");
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

  localStorage.setItem("ANIMATEAMS_TRILHAS", JSON.stringify(trilhasCargos));
  alert(`✅ Trilha do cargo "${cargo}" salva com sucesso!`);

  if (funcionarioLogado && funcionarioLogado.cargo === cargo) {
    renderPerfilColaborador();
  }
}

function restaurarPadroes() {
  if (
    confirm("Tem certeza que deseja restaurar as configurações de fábrica?")
  ) {
    funcionarios = JSON.parse(JSON.stringify(FUNCIONARIOS_PADRAO));
    trilhasCargos = JSON.parse(JSON.stringify(TRILHAS_PADRAO));

    localStorage.setItem(
      "ANIMATEAMS_FUNCIONARIOS",
      JSON.stringify(funcionarios),
    );
    localStorage.setItem("ANIMATEAMS_TRILHAS", JSON.stringify(trilhasCargos));

    popularSelectLogin();
    renderTabelaGestorFuncionarios();
    carregarFormularioCargoGestor();
    if (funcionarioLogado) renderPerfilColaborador();

    alert("🔄 Dados restaurados para o padrão original com sucesso!");
  }
}

// ==========================================
// 7. INICIALIZAÇÃO DA APLICAÇÃO
// ==========================================

window.onload = function () {
  popularSelectLogin();
  renderTabelaGestorFuncionarios();
  carregarFormularioCargoGestor();
};
