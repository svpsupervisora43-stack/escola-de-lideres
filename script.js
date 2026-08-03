// MATRIZ DE CRITÉRIOS POR CARGO
const CRITERIOS = {
  RECREADOR: {
    perf: [
      "Habilidade para brincar",
      "Fidelização",
      "Animação (festas/recreação)",
    ],
    atit: [
      "Carisma",
      "Proatividade",
      "Energia",
      "Valores da empresa",
      "Relacionamento interpessoal",
      "Pontualidade",
      "Apresentação pessoal",
    ],
  },
  RECEPCIONISTA: {
    perf: ["Controle de Check-in/out", "Comunicação", "Vendas", "Caixa"],
    atit: [
      "Educação e simpatia",
      "Atenção",
      "Valores da empresa",
      "Relacionamento interpessoal",
      "Apresentação pessoal",
      "Pontualidade",
    ],
  },
  SUBGERENTE: {
    perf: [
      "Gestão de ocorrência",
      "Resultado financeiro",
      "Gestão de serviço",
      "Desenvolvimento de pessoas",
    ],
    atit: [
      "Postura em discussões",
      "Pontualidade",
      "Carisma",
      "Apresentação pessoal",
      "Energia",
      "Valores da empresa",
      "Relacionamento interpessoal",
    ],
  },
};

const NOMES_NOTAS = {
  1: "1 (Insatisfatório)",
  2: "2 (Regular)",
  3: "3 (Bom)",
  4: "4 (Muito bom)",
  5: "5 (Excelente)",
};

function obterTipoCargo(cargoStr) {
  if (!cargoStr) return "RECREADOR";
  const c = cargoStr.toLowerCase();
  if (
    c.includes("subgerente") ||
    c.includes("gerente") ||
    c.includes("supervisor") ||
    c.includes("superv")
  )
    return "SUBGERENTE";
  if (c.includes("recep")) return "RECEPCIONISTA";
  return "RECREADOR";
}

function criarAvaliacaoPadrao(tipoCargo, notaPerfDef, notaAtitDef) {
  const struct = CRITERIOS[tipoCargo] || CRITERIOS.RECREADOR;
  const triObj = {};
  ["Q1", "Q2", "Q3", "Q4"].forEach((q) => {
    triObj[q] = { perf: {}, atit: {} };
    struct.perf.forEach((item) => (triObj[q].perf[item] = notaPerfDef));
    struct.atit.forEach((item) => (triObj[q].atit[item] = notaAtitDef));
  });
  return triObj;
}

// CARREGA OS DADOS SINCRONIZADOS DO ANIMATEAMS DO LOCALSTORAGE OU USA FALLBACK
let equipe = JSON.parse(
  localStorage.getItem("viaParque_equipe_animateams"),
) || {
  1001: {
    nome: "Patrícia",
    cargo: "Gerente",
    nivel: 5,
    progresso: 100,
    presenca: "100%",
    cursos: "100%",
    elogios: "12x",
    listaElogios: ["Liderança exemplar na operação"],
    missao: "Capacitar supervisores para autonomia.",
    especializacoes: ["midias", "recep", "lider"],
    feedback: "Liderança executiva da unidade Via Parque.",
    evaluations: criarAvaliacaoPadrao("SUBGERENTE", 5, 5),
  },
};

let pinUsuarioAtual = null;
let pinSendoEditado = null;
let trimestreAtivoPerfil = "Q1";

function autenticar() {
  const pin = document.getElementById("pinInput").value;

  if (pin === "1711") {
    pinUsuarioAtual = "1711";
    trocarTela("screen-manager");
    carregarPainelGestao();
  } else if (equipe[pin]) {
    pinUsuarioAtual = pin;
    carregarPerfil(equipe[pin]);
    trocarTela("screen-profile");
  } else {
    alert(
      "PIN não encontrado! Dica: No painel de gestão ou colaboradores sincronizados, verifique o PIN correspondente.",
    );
  }
}

function carregarPerfil(user) {
  document.getElementById("userName").innerText = user.nome;
  document.getElementById("userLevelTag").innerText =
    `Nível ${user.nivel} • ${user.cargo}`;
  document.getElementById("userAvatar").innerText = user.nome
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");

  document.getElementById("attRate").innerText = user.presenca || "100%";
  document.getElementById("trainRate").innerText = user.cursos || "100%";
  document.getElementById("reviewsCount").innerText = user.elogios || "0x";

  document.getElementById("userMissao").innerText =
    user.missao || "Nenhuma missão definida no momento.";
  document.getElementById("progressText").innerText =
    (user.progresso || 0) + "%";
  document.getElementById("progressBar").style.width =
    (user.progresso || 0) + "%";
  document.getElementById("feedbackText").innerText =
    `"${user.feedback || "Sem feedback registrado."}"`;

  // Atualizar Trilha
  for (let i = 1; i <= 5; i++) {
    const step = document.getElementById(`step-lvl${i}`);
    if (step) {
      step.className = "level-step";
      if (i < user.nivel) step.classList.add("completed");
      else if (i === user.nivel) step.classList.add("active");
    }
  }

  ["midias", "recep", "lider"].forEach((spec) => {
    const el = document.getElementById(`spec-${spec}`);
    if (el) {
      if (user.especializacoes && user.especializacoes.includes(spec))
        el.classList.add("unlocked");
      else el.classList.remove("unlocked");
    }
  });

  renderizarAvaliacaoPerfil(user, trimestreAtivoPerfil);
}

function selecionarTrimestreAba(q) {
  trimestreAtivoPerfil = q;
  const btns = document.querySelectorAll(".tri-btn");
  btns.forEach((b) => b.classList.remove("active"));
  event.target.classList.add("active");

  const user = equipe[pinUsuarioAtual];
  if (user) renderizarAvaliacaoPerfil(user, q);
}

function renderizarAvaliacaoPerfil(user, q) {
  const tipo = obterTipoCargo(user.cargo);
  const struct = CRITERIOS[tipo] || CRITERIOS.RECREADOR;

  if (!user.evaluations) {
    user.evaluations = criarAvaliacaoPadrao(tipo, 4, 4);
  }
  const dataTri = user.evaluations[q] || { perf: {}, atit: {} };

  const perfContainer = document.getElementById("perfCriteriaList");
  const atitContainer = document.getElementById("atitCriteriaList");

  if (!perfContainer || !atitContainer) return;

  perfContainer.innerHTML = "";
  atitContainer.innerHTML = "";

  let somaPerf = 0,
    qtdPerf = 0;
  struct.perf.forEach((item) => {
    const val = dataTri.perf[item] || Math.round(user.avaliacaoAnimateams) || 4;
    somaPerf += val;
    qtdPerf++;
    perfContainer.innerHTML += `
          <div class="eval-item">
            <span class="label">${item}</span>
            <span class="val">${val} / 5</span>
          </div>
        `;
  });

  let somaAtit = 0,
    qtdAtit = 0;
  struct.atit.forEach((item) => {
    const val = dataTri.atit[item] || Math.round(user.avaliacaoAnimateams) || 4;
    somaAtit += val;
    qtdAtit++;
    atitContainer.innerHTML += `
          <div class="eval-item">
            <span class="label">${item}</span>
            <span class="val">${val} / 5</span>
          </div>
        `;
  });

  const mediaP = qtdPerf > 0 ? (somaPerf / qtdPerf).toFixed(1) : "-";
  const mediaA = qtdAtit > 0 ? (somaAtit / qtdAtit).toFixed(1) : "-";

  const elPerf = document.getElementById("mediaPerfText");
  const elAtit = document.getElementById("mediaAtitText");
  if (elPerf) elPerf.innerText = `Média: ${mediaP} / 5`;
  if (elAtit) elAtit.innerText = `Média: ${mediaA} / 5`;
}

function abrirModalElogios() {
  const user =
    equipe[pinUsuarioAtual] ||
    (pinSendoEditado ? equipe[pinSendoEditado] : null);
  if (!user) return;

  const container = document.getElementById("listaElogiosContent");
  container.innerHTML = "";

  if (!user.listaElogios || user.listaElogios.length === 0) {
    container.innerHTML = `<p style="font-size:0.85rem; color:var(--text-muted); text-align:center; padding:12px;">Nenhum elogio registrado ainda.</p>`;
  } else {
    user.listaElogios.forEach((item) => {
      container.innerHTML += `
            <div style="background:var(--bg-main); padding:12px; border-radius:10px; border:1px solid var(--border); margin-bottom:8px; font-size:0.85rem; color:var(--text-main); line-height:1.4;">
              👏 "${item}"
            </div>
          `;
    });
  }
  document.getElementById("modalElogios").classList.add("active");
}

function carregarPainelGestao() {
  const container = document.getElementById("staffList");
  container.innerHTML = "";

  const pins = Object.keys(equipe);
  document.getElementById("totalStaff").innerText = pins.length;

  pins.forEach((pin) => {
    const colab = equipe[pin];
    container.innerHTML += `
          <div class="staff-item">
            <div>
              <strong style="font-size:0.9rem;">${colab.nome}</strong><br>
              <span style="font-size:0.75rem; color:var(--text-muted);">${colab.cargo} • Nível ${colab.nivel} (PIN: ${pin})</span>
            </div>
            <div class="action-btns">
              <button class="btn-sm btn-view" onclick="verPerfilDirect('${pin}')">Perfil</button>
              <button class="btn-sm btn-edit" onclick="abrirModalEdicao('${pin}')">Editar</button>
            </div>
          </div>
        `;
  });
}

function verPerfilDirect(pin) {
  pinUsuarioAtual = pin;
  carregarPerfil(equipe[pin]);
  trocarTela("screen-profile");
}

function abrirModalEdicao(pin) {
  pinSendoEditado = pin;
  const user = equipe[pin];

  document.getElementById("editNome").value = user.nome;
  document.getElementById("editCargo").value = user.cargo;
  document.getElementById("editNivel").value = user.nivel;
  document.getElementById("editProgresso").value = user.progresso;
  document.getElementById("editPresenca").value = user.presenca;
  document.getElementById("editCursos").value = user.cursos;
  document.getElementById("editMissao").value = user.missao || "";
  document.getElementById("editFeedback").value = user.feedback || "";
  document.getElementById("editNovoElogio").value = "";
  document.getElementById("editTrimestreSelect").value = "Q1";

  carregarCamposTrimestreModal();
  document.getElementById("modalEdit").classList.add("active");
}

function atualizarFormularioAvaliacao() {
  carregarCamposTrimestreModal();
}

function carregarCamposTrimestreModal() {
  if (!pinSendoEditado || !equipe[pinSendoEditado]) return;
  const cargoStr = document.getElementById("editCargo").value;
  const tipoCargo = obterTipoCargo(cargoStr);
  const struct = CRITERIOS[tipoCargo] || CRITERIOS.RECREADOR;
  const q = document.getElementById("editTrimestreSelect").value;

  const user = equipe[pinSendoEditado];
  if (!user.evaluations)
    user.evaluations = criarAvaliacaoPadrao(tipoCargo, 4, 4);
  if (!user.evaluations[q]) user.evaluations[q] = { perf: {}, atit: {} };

  const perfContainer = document.getElementById("modalPerfInputs");
  const atitContainer = document.getElementById("modalAtitInputs");
  perfContainer.innerHTML = "";
  atitContainer.innerHTML = "";

  struct.perf.forEach((item, idx) => {
    const valAtual =
      user.evaluations[q].perf[item] ||
      Math.round(user.avaliacaoAnimateams) ||
      4;
    perfContainer.innerHTML += `
          <div class="eval-field">
            <label>${item}</label>
            <select id="perf_input_${idx}" class="form-select">
              ${[1, 2, 3, 4, 5].map((n) => `<option value="${n}" ${n == valAtual ? "selected" : ""}>${n}</option>`).join("")}
            </select>
          </div>
        `;
  });

  struct.atit.forEach((item, idx) => {
    const valAtual =
      user.evaluations[q].atit[item] ||
      Math.round(user.avaliacaoAnimateams) ||
      4;
    atitContainer.innerHTML += `
          <div class="eval-field">
            <label>${item}</label>
            <select id="atit_input_${idx}" class="form-select">
              ${[1, 2, 3, 4, 5].map((n) => `<option value="${n}" ${n == valAtual ? "selected" : ""}>${n}</option>`).join("")}
            </select>
          </div>
        `;
  });
}

function adicionarElogioNaEdicao() {
  const input = document.getElementById("editNovoElogio");
  const texto = input.value.trim();

  if (!texto) {
    alert("Digite o texto do elogio!");
    return;
  }

  if (pinSendoEditado && equipe[pinSendoEditado]) {
    if (!equipe[pinSendoEditado].listaElogios)
      equipe[pinSendoEditado].listaElogios = [];
    equipe[pinSendoEditado].listaElogios.push(texto);
    equipe[pinSendoEditado].elogios =
      equipe[pinSendoEditado].listaElogios.length + "x";
    input.value = "";
    alert("Elogio registrado com sucesso!");
  }
}

function salvarEdicao() {
  if (!pinSendoEditado || !equipe[pinSendoEditado]) return;

  const user = equipe[pinSendoEditado];
  user.nome = document.getElementById("editNome").value;
  user.cargo = document.getElementById("editCargo").value;
  user.nivel = parseInt(document.getElementById("editNivel").value) || 1;
  user.progresso =
    parseInt(document.getElementById("editProgresso").value) || 0;
  user.presenca = document.getElementById("editPresenca").value;
  user.cursos = document.getElementById("editCursos").value;
  user.missao = document.getElementById("editMissao").value;
  user.feedback = document.getElementById("editFeedback").value;

  const q = document.getElementById("editTrimestreSelect").value;
  const tipoCargo = obterTipoCargo(user.cargo);
  const struct = CRITERIOS[tipoCargo] || CRITERIOS.RECREADOR;

  if (!user.evaluations) user.evaluations = {};
  if (!user.evaluations[q]) user.evaluations[q] = { perf: {}, atit: {} };

  struct.perf.forEach((item, idx) => {
    const selectEl = document.getElementById(`perf_input_${idx}`);
    if (selectEl) user.evaluations[q].perf[item] = parseInt(selectEl.value);
  });

  struct.atit.forEach((item, idx) => {
    const selectEl = document.getElementById(`atit_input_${idx}`);
    if (selectEl) user.evaluations[q].atit[item] = parseInt(selectEl.value);
  });

  // Salva no localStorage para persistir a alteração junto com os dados do Animateams
  localStorage.setItem("viaParque_equipe_animateams", JSON.stringify(equipe));

  fecharModal("modalEdit");

  if (document.getElementById("screen-manager").classList.contains("active")) {
    carregarPainelGestao();
  }
  if (pinUsuarioAtual === pinSendoEditado) {
    carregarPerfil(user);
  }

  alert("Perfil e avaliação salvos com sucesso!");
}

function fecharModal(modalId) {
  document.getElementById(modalId).classList.remove("active");
}

function trocarTela(screenId) {
  document
    .querySelectorAll(".screen")
    .forEach((s) => s.classList.remove("active"));
  document.getElementById(screenId).classList.add("active");
}

function sair() {
  document.getElementById("pinInput").value = "";
  pinUsuarioAtual = null;
  trocarTela("screen-login");
}
