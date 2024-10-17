async function sendToFormspree(participants) {
    const response = await fetch('https://formspree.io/f/xgveerea', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ participants })
    });
  
    if (response.ok) {
      console.log('Dados enviados com sucesso!');
    } else {
      console.error('Erro ao enviar os dados:', response.statusText);
    }
  }
  
  // Limpar lista de participantes
  document.getElementById('clearButton').addEventListener('click', function() {
    const participants = [];
    document.getElementById('output').innerHTML = '';
    console.log('Participantes limpos.');
  });
  