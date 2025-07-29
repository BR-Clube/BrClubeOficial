function enviarFormulario() {
    // Obtenha os valores dos campos do formulário
    const nome = document.getElementById('nome').value;
    const cod_bateria = document.getElementById('cod_bateria').value;
    const marca = document.getElementById('marca').value;
    const amperagem = document.getElementById('amperagem').value;

    // Crie a saudação e as informações a serem exibidas
    let saudacao = `🚙 ⚡ Seja bem-vindo ao BR Power ${nome}!\n\nParabéns! Agora, sua proteção está ainda mais completa.\nQuando a vida útil da bateria ${cod_bateria}, ${marca}, ${amperagem} do seu carro chegar ao fim, e ela não segurar mais carga, a BR Clube vai cuidar de tudo.\n\nVocê não vai precisar desembolsar nada a mais no momento da troca.\n\nNossa equipe técnica vai até você, com rapidez e eficiência, para resolver o problema.\n\n💡 Com o BR Power, você protege seu carro e suas finanças.\n\nQualquer dúvida, conte com a gente.\n\n🤝 BR Clube — Proteja do seu jeito. Inspire uma nova era.`;

    // Atualize o conteúdo do elemento com id 'texto'
    const elementoTexto = document.getElementById("texto");
    elementoTexto.innerText = saudacao;

    console.log("Formulário enviado!");
} 