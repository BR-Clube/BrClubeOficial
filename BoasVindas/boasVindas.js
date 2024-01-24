function enviarFormulario() {
    // Obtenha os valores dos campos do formulário
    const nome = document.getElementById('nome').value;
    const placa = document.getElementById('placa').value;
    const data = document.getElementById('data').value;
    const whatsapp = document.getElementById('whatsapp').value;
    const endereco = document.getElementById('endereco').value;
    const cep = document.getElementById('cep').value;
    const email = document.getElementById('email').value;

    // Obtenha o valor do campo de radio de gênero
    const generoElement = document.querySelector('input[name="genero"]:checked');
    const genero = generoElement ? generoElement.value : '';

    // Crie a saudação e as informações a serem exibidas
    let saudacao = '';
    let informacoes = '';

    if (genero === 'm') {
        saudacao = `<b>Bem-vindo, ${nome}!<br><br> 💥Parabéns, você fez uma ótima escolha ao decidir proteger seu Veículo com a BR CLUBE Proteção Veicular!<br><br> Você é um dos nossos associados e nossa equipe está comprometida em superar suas expectativas.<br><br>`;
    } else if (genero === 'f') {
        saudacao = `<b>Bem-vinda, ${nome}!<br><br> 💥Parabéns, você fez uma ótima escolha ao decidir proteger seu Veículo com a BR CLUBE Proteção Veicular!<br><br> Você é uma das nossas associadas e a equipe está comprometida em superar suas expectativas.<br><br>`;
    }

    informacoes += `É muito importante que você confira todos os dados para que em caso de uma eventual ocorrência, possamos agilizar o processo e garantir a sua tranquilidade.<br><br>`;
    informacoes += `📍 Placa: ${placa}<br><br>`;
    informacoes += `⚠ Vencimento dos seus boletos será todo dia: ${formataData(data)}<br><br>`;
    informacoes += `📭E SERÁ ENVIADO POR WHATSAPP: ${whatsapp}<br><br>`;
    informacoes += `Seu endereço é: ${endereco}<br><br>`;
    informacoes += `CEP: ${cep}<br><br>`;
    informacoes += `📧 E-mail: ${email}<br><br>`;
    informacoes += `Parabéns por você escolher a BR CLUBE!<br>`;
    informacoes += `#UmaNovaExperiência #OsMelhoresBenefícios<br><br>`;
    informacoes += `➡🙋CASO NÃO receba o boleto até 5 dias antes do vencimento favor entrar em contato conosco: <br><br>`;
    informacoes += `NOSSO NÚMERO COMERCIAL:<br><br>☎ (62) 3434-2622<br><br>PARA ASSISTÊNCIA 24H:<br><br>Whatsapp: (62) 3434-2622`;

    // Atualize o conteúdo do elemento com id 'texto'
    const elementoTexto = document.getElementById("texto");
    elementoTexto.innerHTML = `${saudacao}${informacoes}`;
}