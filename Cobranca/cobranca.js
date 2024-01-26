function formataData(data) {
    const [ano, mes, dia] = data.split('-');
    const dataFormatada = new Date(parseInt(ano), parseInt(mes) - 1, parseInt(dia));

    const diaFormatado = dataFormatada.getDate().toString().padStart(2, '0');
    const mesFormatado = (dataFormatada.getMonth() + 1).toString().padStart(2, '0');
    const anoFormatado = dataFormatada.getFullYear();

    return `${diaFormatado}/${mesFormatado}/${anoFormatado}`;
}

function formataMes(mesAtual) {
    const [ano, mes] = mesAtual.split('-');
    const dataFormatada = new Date(parseInt(ano), parseInt(mes) - 1);

    const mesFormatado = (dataFormatada.getMonth() + 1).toString().padStart(2, '0');
    const anoFormatado = dataFormatada.getFullYear();

    return `${mesFormatado}/${anoFormatado}`;
}

function enviarFormulario() {
    // Obtenha os valores dos campos do formulário
    const nome = document.getElementById('nome').value;
    const placa = document.getElementById('placa').value;
    const dinheiroTotal = document.getElementById('dinheiroTotal').value;

    // Obtenha o valor do campo de radio de gênero
    const generoElement = document.querySelector('input[name="genero"]:checked');
    const genero = generoElement ? generoElement.value : '';

    // Obtenha a data atual
    const dataElement = document.getElementById('data');
    const mesAtualElement = document.getElementById('mes');
    const data = dataElement.value;
    const mesAtual = mesAtualElement.value;

    // Crie a saudação e as informações a serem exibidas
    let saudacao = '';
    let informacoes = '';

    if (genero === 'm') {
        saudacao = `<b><br>Olá, ${nome}! <br><br> Tudo bem com você? <br><br> Sr. ${nome}, até o presente momento nosso sistema não identificou o pagamento de sua mensalidade referente ao mês de ${formataMes(mesAtual)}. <br><br> Vencimento: ${formataData(data)}  <br><br> Placa/Veículo: ${placa} <br><br>`;
    } else if (genero === 'f') {
        saudacao = `<b><br>Olá, ${nome}! <br><br> Tudo bem com você? <br><br> Sra. ${nome}, até o presente momento nosso sistema não identificou o pagamento de sua mensalidade referente ao mês de ${formataMes(mesAtual)}. <br><br> Vencimento: ${formataData(data)}  <br><br> Placa/Veículo: ${placa} <br><br>`;
    }

    informacoes += `TOTAL: R$ ${dinheiroTotal}<br><br>`;
    informacoes += `Neste caso, informamos que o pagamento AINDA poderá ser feito via PIX, sem ocorrência de juros por atraso.<br><br>`;
    informacoes += `Nosso código pix é CNPJ: <br><br>`;
    informacoes += `40.410.992/0001-40 <br><br>`;
    informacoes += `Após o pagamento, compartilhe o comprovante por aqui, por gentileza, para informarmos a baixa no sistema.<br><br>`;
    informacoes += `Caso o pagamento já tenha sido realizado, por favor desconsiderar essa mensagem.<br><br>`;
    informacoes += `De já, externamos nossa gratidão!<br><br>`;
    informacoes += `Equipe BrClube!`;

    // Atualize o conteúdo do elemento com id 'texto'
    const elementoTexto = document.getElementById("texto");
    elementoTexto.innerHTML = `${saudacao}${informacoes}`;
}
