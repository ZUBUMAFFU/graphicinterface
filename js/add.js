document.getElementById('add').addEventListener('click', async () => {
  const x = parseFloat(document.getElementById('x').value);
  const y = parseFloat(document.getElementById('y').value);

  // Verifica se os valores estão dentro dos limites
  if (isNaN(x) || isNaN(y)) {
    alert('Por favor, preencha ambos os valores.');
    return;
  }

  if (x < 0 || x > 100) {
    alert('X deve estar entre 0 e 100.');
    return;
  }

  if (y < 0 || y > 500) {
    alert('Y deve estar entre 0 e 500.');
    return;
  }

  try {
    const resposta = await fetch('https://graphic-rest-api.onrender.com/points', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ x, y })
    });

    if (!resposta.ok) {
      throw new Error('Erro ao enviar os dados.');
    }

    alert('Ponto enviado com sucesso!');
    location.reload(); // recarrega a página para atualizar o gráfico
  } catch (erro) {
    console.error('Erro ao enviar os dados:', erro);
    alert('Falha ao enviar os dados.');
  }
});
document.getElementById('add2').addEventListener('click', async () => {
  const tag_code = document.getElementById('tag_code').value.trim();
  const cow_weight = parseFloat(document.getElementById('cow_weight').value);

  if (!tag_code || isNaN(cow_weight)) {
    alert('Por favor, preencha o código e o peso corretamente.');
    return;
  }

  try {
    const resposta = await fetch('https://graphic-rest-api.onrender.com/cows', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ tag_code, cow_weight })
    });

    if (!resposta.ok) {
      throw new Error('Erro ao enviar os dados.');
    }

    alert('Vaca adicionada com sucesso!');
    location.reload(); // recarrega a página para atualizar o gráfico ou lista
  } catch (erro) {
    console.error('Erro ao enviar os dados:', erro);
    alert('Falha ao enviar os dados.');
  }
});