const apiUrl = 'https://graphic-rest-api.onrender.com/cows'; // essa url também é carregada no lister2

    document.addEventListener('DOMContentLoaded', () => {
      const lista = document.getElementById('list');
      const inputPesquisa = document.getElementById('search');
      let vacas = [];

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
            <strong>Peso:</strong> ${parseFloat(vaca.cow_weight).toFixed(2)} kg
            <hr>
          `;
          lista.appendChild(li);
        });
      }

      // Filtrar vacas pelo input
      inputPesquisa.addEventListener('input', () => {
        const termo = inputPesquisa.value.toLowerCase();
        const filtradas = vacas.filter(vaca =>
          vaca.tag_code.toLowerCase().includes(termo)
        );
        renderizarLista(filtradas);
      });

      carregarVacas();
    });
