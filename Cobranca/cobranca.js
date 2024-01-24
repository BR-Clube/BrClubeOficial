function enviarFormulario() {
    // Obtenha os valores dos campos do formulário
    const nome = document.getElementById('nome').value;
    const placa = document.getElementById('placa').value;
    const mes = document.getElementById('mes').value;
    const data = document.getElementById('data').value;
    const dinheiroTotal = document.getElementById('dinheiroTotal').value;

    const generoElement = document.querySelector('input[name="genero"]:checked');
    const genero = generoElement ? generoElement.value : '';

    // Crie a saudação e as informações a serem exibidas
    let saudacao = '';
    let informacoes = '';

    if (genero === 'm') {
        saudacao = `<b><br>Olá, ${nome}! <br><br> Tudo bem com você? <br><br> Sr. ${nome}, até o presente momento nosso sistema não identificou o pagamento de sua mensalidade referente ao mês de ${formataMes(mes)}. <br><br> Vencimento: ${formataData(data)}  <br><br> Plava/Veículo: ${placa} <br><br>`;
    } else if (genero === 'f') {
        saudacao = `<b><br>Olá, ${nome}! <br><br> Tudo bem com você? <br><br> Sra. ${nome}, até o presente momento nosso sistema não identificou o pagamento de sua mensalidade referente ao mês de ${formataMes(mes)}. <br><br> Vencimento: ${formataData(data)}  <br><br> Plava/Veículo: ${placa} <br><br>`;
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