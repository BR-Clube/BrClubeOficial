function enviarFormulario() {
    const name = document.getElementById('name').value.trim();
    const received = document.getElementById('received').value;
    const responseMessage = document.getElementById('responseMessage');

    if (!name) {
        // Se o nome não for preenchido, não exibir mensagem.
        responseMessage.textContent = 'Por favor, preencha o nome.';
        return;
    }

    if (!received) {
        // Se apenas o nome for preenchido e nenhuma seleção, exibir mensagem padrão.
        responseMessage.innerHTML = `<p>Olá ${name}, consta em nosso sistema que você recebeu o seu Kit do associado, um envelope contendo um lixocar BR CLUBE, cheirinho, um adesivo automotivo e seus manuais das assistências e coberturas contratadas. Você confirma o recebimento?</p>`;
        return;
    }

    // Se o nome e a resposta forem preenchidos, exibir a mensagem correspondente.
    if (received === 'sim') {
        responseMessage.innerHTML = `<p>${name}, somos felizes por ter você com a gente. Nesse kit contém todas as nossas informações para que você possa utilizar bem a nossa proteção BR CLUBE. Mas se ficar alguma dúvida, é só chamar a gente aqui, que teremos o maior prazer em atender. Lembre-se: Se é importante pra você, é importante pra nós!</p>`;
    } else if (received === 'nao') {
        responseMessage.innerHTML = `<p>${name}, lamentamos saber que ainda não recebeu o seu kit. Iremos verificar o que houve e, se for o caso, faremos o envio de um novo kit para você. Mas se ficar alguma dúvida, é só chamar a gente aqui, que teremos o maior prazer em atender. Lembre-se: Se é importante pra você, é importante pra nós!</p>`;
    }
}

function copiarTexto() {
    const responseMessage = document.getElementById('responseMessage');
    const range = document.createRange();
    range.selectNode(responseMessage);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    try {
        document.execCommand('copy');
        alert('Texto copiado para a área de transferência!');
    } catch (err) {
        alert('Não foi possível copiar o texto.');
    }

    window.getSelection().removeAllRanges();
}
