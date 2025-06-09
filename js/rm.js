document.getElementById('remove').addEventListener('click', async () => {
  const x = parseFloat(document.getElementById('x1').value);
  const y = parseFloat(document.getElementById('y1').value);

  // Verifica se os valores estão dentro dos limites
  if (isNaN(x) || isNaN(y)) {
    alert('Por favor, preencha ambos os valores.');
    return;
  }

  try {
    const resposta = await fetch('https://graphic-rest-api.onrender.com/points', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ x, y })
    });

    if (!resposta.ok) {
      throw new Error('Erro ao enviar os dados.');
    }

    alert('Ponto apagado com sucesso');
    location.reload(); // recarrega a página para atualizar o gráfico
  } catch (erro) {
    console.error('Erro ao enviar os dados:', erro);
    alert('Falha ao enviar os dados.');
  }
});
document.getElementById('rm').addEventListener('click', async () => {
  const idInput = document.getElementById('id');
  const id = parseInt(idInput.value);

  if (isNaN(id)) {
    alert('Preencha corretamente o campo ID.');
    idInput.focus();
    return;
  }

  try {
    const response = await fetch('https://graphic-rest-api.onrender.com/cows', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id })
    });

    if (!response.ok) {
      throw new Error(`Erro ${response.status}`);
    }

    alert('Vaca removida com sucesso.');
    location.reload();
  } catch (error) {
    console.error('Erro ao enviar os dados:', error);
    alert('Falha ao remover a vaca.');
  }
});