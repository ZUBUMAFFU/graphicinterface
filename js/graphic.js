let grafico;

// Função para carregar os dados do gráfico a partir da API
async function carregarGrafico() {
  try {
    const resposta = await fetch('https://graphic-rest-api.onrender.com/points');
    const pontos = await resposta.json();

    const labels = pontos.map(p => p.x);
    const data = pontos.map(p => p.y);

    const ctx = document.getElementById('grafico').getContext('2d');
    if (grafico) {
      grafico.destroy();
    }

    grafico = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Valores',
          data: data,
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          tension: 0.4,
          fill: true,
          pointBackgroundColor: 'white',
          pointBorderColor: 'rgba(75, 192, 192, 1)',
          pointRadius: 5
        }]
      },
      options: {
        responsive: true,
        
        plugins: {
          legend: {
            position: 'top'
          },
          title: {
            display: true,
            text: 'Gráfico de Linhas Interativo'
          }
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Eixo X'
            }
          },
          y: {
            title: {
              display: true,
              text: 'Eixo Y'
            },
            beginAtZero: true
          }
        }
      }
    });

  } catch (error) {
    console.error('Erro ao carregar dados do gráfico:', error);
    alert('Falha ao carregar os dados do gráfico.');
  }
}

// Carrega o gráfico ao iniciar a página
window.addEventListener('DOMContentLoaded', carregarGrafico);
