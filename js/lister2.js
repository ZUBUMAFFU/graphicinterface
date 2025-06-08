console.log("listagem 2 carregada");

function showgraphic(){
  
}
// Aguarda 100ms após o clique para garantir que os elementos existam
setTimeout(() => {
  const lista = document.getElementById('list-individual');
  const inputPesquisa = document.getElementById('search-individual');
  let vacas = [];

  if (!lista || !inputPesquisa) {
    console.warn("Elementos da aba 'individual' não encontrados.");
    return;
  }

  // Buscar vacas da API
  async function carregarVacas() {
    try {
      const response = await fetch(apiUrl);
      vacas = await response.json();
      renderizarLista(vacas);
    } catch (error) {
      console.error('Erro ao buscar vacas:', error);
      lista.innerHTML = '<li>Erro ao carregar dados.</li>';
    }
  }

  // Renderizar lista com vacas filtradas
  function renderizarLista(vacasFiltradas) {
    lista.innerHTML = '';

    if (vacasFiltradas.length === 0) {
      lista.innerHTML = '<li>Nenhuma vaca encontrada.</li>';
      return;
    }

    vacasFiltradas.forEach(vaca => {
      const li = document.createElement('li');
      li.innerHTML = `
        <strong>ID:</strong> ${vaca.id}<br>
        <strong>Tag:</strong> ${vaca.tag_code}<br>
        <button onclick=printaalgo()>Peso e Informações</button>
        <hr>
      `;
      lista.appendChild(li);
    });
  }

  // Filtrar vacas pelo input
inputPesquisa.addEventListener('input', () => {
  const termo = inputPesquisa.value.toLowerCase();

  const filtradas = vacas.filter(vaca => {
    const tag = vaca.tag_code?.toLowerCase() || '';
    const id = String(vaca.id).toLowerCase();
    return tag.includes(termo) || id.includes(termo);
  });

  renderizarLista(filtradas);
});

  carregarVacas();
}, 100);

