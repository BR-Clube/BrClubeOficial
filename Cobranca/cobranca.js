function enviarFormulario() {
    // Obtenha os valores dos campos do formulário
    const nome = document.getElementById('nome').value;
    const mes = document.getElementById('mes').value;
    const data = document.getElementById('data').value;
    const ano = document.getElementById('ano').value;
    const dinheiro = document.getElementById('dinheiro').value;
    const dinheiroTotal = document.getElementById('dinheiroTotal').value;
    const sexo = document.getElementById('sexo').value;


    // Crie a saudação e as informações a serem exibidas
    let saudacao = '';
    let informacoes = '';

    if (sexo.toLowerCase() === 'h') {
        saudacao = `<b><br>Olá, ${nome}! <br><br> Tudo bem com você? <br><br> Sr. ${nome}, até o presente momento nosso sistema não identificou o pagamento de sua mensalidade referente ao mês de ${mes} de ${ano}. <br><br> Vencimento: <br><br>`;
    } else if (sexo.toLowerCase() === 'm') {
        saudacao = `<b><br>Olá, ${nome}! <br><br> Tudo bem com você? <br><br> Sra. ${nome}, até o presente momento nosso sistema não identificou o pagamento de sua mensalidade referente aos mês de ${mes} de ${ano}. <br><br> Vencimento: <br><br>`;
    }

    informacoes += `${data} - R$ ${dinheiro}<br><br>`;
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