function enviarFormulario() {
    // Obtenha os valores dos campos do formulário
    const nome = document.getElementById('nome').value;
    const placa = document.getElementById('placa').value;
    const vencimentoBoleto = document.getElementById('vencimentoBoleto').value;
    const whatsapp = document.getElementById('whatsapp').value;
    const endereco = document.getElementById('endereco').value;
    const cep = document.getElementById('cep').value;
    const email = document.getElementById('email').value;
    const sexo = document.getElementById('sexo').value;

    // Crie a saudação e as informações a serem exibidas
    let saudacao = '';
    let informacoes = '';

    if (sexo.toLowerCase() === 'h') {
        saudacao = `Bem-vindo, ${nome}!`;
    } else if (sexo.toLowerCase() === 'm') {
        saudacao = `Bem-vinda, ${nome}!`;
    }

    informacoes += `💥Parabéns, você fez uma ótima escolha ao decidir proteger seu Veículo com a BR CLUBE Proteção Veicular!\n\n`;
    informacoes += `Você é um(a) dos nossos(as) associados(as) e nossa equipe está comprometida em superar suas expectativas.\n`;
    informacoes += `É muito importante que você confira todos os dados para que em caso de uma eventual ocorrência, possamos agilizar o processo e garantir a sua tranquilidade.\n\n`;
    informacoes += `📍 Placa: ${placa}\n`;
    informacoes += `⚠ Vencimento dos seus boletos será todo dia: ${vencimentoBoleto}\n`;
    informacoes += `📭E SERÁ ENVIADO POR WHATSAPP: ${whatsapp}\n`;
    informacoes += `Seu endereço é: ${endereco}\n`;
    informacoes += `CEP: ${cep}\n`;
    informacoes += `📧 E-mail: ${email}\n\n`;
    informacoes += `Parabéns por você escolher a BR CLUBE!\n`;
    informacoes += `#UmaNovaExperiência #OsMelhoresBenefícios\n`;
    informacoes += `➡🙋CASO NÃO receba o boleto até 5 dias antes do vencimento favor entrar em contato conosco.\n\n`;
    informacoes += `NOSSO NÚMERO COMERCIAL:\n(62) 3434-2622\nPARA ASSISTÊNCIA 24H:\n☎ (62) 3434-2622`;

    // Atualize o conteúdo do elemento com id 'texto'
    const elementoTexto = document.getElementById("texto");
    elementoTexto.textContent = `${saudacao}\n${informacoes}`;
}