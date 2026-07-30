const equipeViaParque = [
  {
    id: 1,
    nome: "Patrícia",
    cargo: "Gerente",
    pin: "1001",
    nivel: "Líder Sênior",
  },
  {
    id: 2,
    nome: "Thainá Freires",
    cargo: "Subgerente (Dia)",
    pin: "1002",
    nivel: "Líder Pleno",
  },
  {
    id: 3,
    nome: "Felipe Mamedes",
    cargo: "Subgerente (Noite)",
    pin: "1003",
    nivel: "Líder Pleno",
  },
  {
    id: 4,
    nome: "Ana Vitória dos Santos",
    cargo: "Supervisora",
    pin: "1004",
    nivel: "Líder Junior",
  },
  {
    id: 5,
    nome: "Pâmella dos Santos",
    cargo: "Recepcionista",
    pin: "1005",
    nivel: "Em Desenvolvimento",
  },
  {
    id: 6,
    nome: "Michelly Barbosa",
    cargo: "Recreadora / Líder em Treinamento",
    pin: "1006",
    nivel: "Em Desenvolvimento",
  },
  {
    id: 7,
    nome: "Vinícius Valente",
    cargo: "Recreador",
    pin: "1007",
    nivel: "Em Desenvolvimento",
  },
  {
    id: 8,
    nome: "Alex de Oliveira",
    cargo: "Recreador",
    pin: "1008",
    nivel: "Em Desenvolvimento",
  },
  {
    id: 9,
    nome: "Aline Ferreira",
    cargo: "Recreadora",
    pin: "1009",
    nivel: "Em Desenvolvimento",
  },
  {
    id: 10,
    nome: "Davi Campello",
    cargo: "Recreador",
    pin: "1010",
    nivel: "Em Desenvolvimento",
  },
  {
    id: 11,
    nome: "Eduarda Gonçalves",
    cargo: "Recreadora",
    pin: "1011",
    nivel: "Em Desenvolvimento",
  },
  {
    id: 12,
    nome: "Geovana Isabelly",
    cargo: "Recreadora",
    pin: "1012",
    nivel: "Em Desenvolvimento",
  },
  {
    id: 13,
    nome: "Isabelly Vitória",
    cargo: "Recreadora",
    pin: "1013",
    nivel: "Em Desenvolvimento",
  },
  {
    id: 14,
    nome: "Kainá Rosendo",
    cargo: "Recreador",
    pin: "1014",
    nivel: "Em Desenvolvimento",
  },
  {
    id: 15,
    nome: "Lohana Pessoa",
    cargo: "Recreadora",
    pin: "1015",
    nivel: "Em Desenvolvimento",
  },
  {
    id: 16,
    nome: "Lucas Cabral",
    cargo: "Recreador",
    pin: "1016",
    nivel: "Em Desenvolvimento",
  },
  {
    id: 17,
    nome: "Micaela de Souza",
    cargo: "Recreadora",
    pin: "1017",
    nivel: "Em Desenvolvimento",
  },
  {
    id: 18,
    nome: "Rosenilda Santos",
    cargo: "ASG",
    pin: "1018",
    nivel: "Em Desenvolvimento",
  },
];
// Substitua ou insira a estrutura de dados atualizada
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
      "📖 Liderança Servidora: Leitura e aplicação prática dos conceitos do livro 'O Monge e o Executivo' (James C. Hunter)",
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
// 1. Carrega os dados do cargo selecionado nos campos do formulário do Gestor
function carregarFormularioCargo() {
  const cargo = document.getElementById("selectCargoGestor").value;
  const dados = DADOS_CARGOS[cargo] || { requisitos: [], apoio: [] };

  document.getElementById("txtRequisitosGestor").value =
    dados.requisitos.join("\n");
  document.getElementById("txtApoioGestor").value = dados.apoio.join("\n");
}

// 2. Salva as edições do gestor
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

  alert(`✅ Trilha e Material de Apoio do cargo "${cargo}" foram salvos!`);
}

// 3. Exibe a trilha + material na tela do colaborador
function renderizarTrilhaColaborador(cargoAlvo) {
  const conteiner = document.getElementById("areaTrilhaColaborador");
  if (!conteiner) return;

  const dados = DADOS_CARGOS[cargoAlvo] || { requisitos: [], apoio: [] };

  let htmlReq = dados.requisitos
    .map((item) => `<li class="mb-2">${item}</li>`)
    .join("");
  let htmlApoio = dados.apoio
    .map((item) => `<li class="mb-2">${item}</li>`)
    .join("");

  conteiner.innerHTML = `
    <div class="card border-primary mb-3 shadow-sm">
      <div class="card-header bg-primary text-white fw-bold">
        🎯 Requisitos para Promoção — ${cargoAlvo}
      </div>
      <div class="card-body">
        <ul class="mb-0">
          ${htmlReq || "<li>Nenhum requisito cadastrado.</li>"}
        </ul>
      </div>
    </div>

    <div class="card border-success shadow-sm">
      <div class="card-header bg-success text-white fw-bold">
        📚 Material de Apoio & Guia de Estudos (Indicações da Gestão)
      </div>
      <div class="card-body bg-light">
        <ul class="mb-0">
          ${htmlApoio || "<li>Nenhum material de apoio cadastrado.</li>"}
        </ul>
      </div>
    </div>
  `;
}
