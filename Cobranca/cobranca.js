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

function adicionarBoleto() {
    const boletosContainer = document.getElementById('boletos-container');

    const novoBoleto = document.createElement('div');
    novoBoleto.classList.add('boleto');
    novoBoleto.innerHTML = `
        <label for="data">Data de Vencimento:</label>
        <input type="date" class="data" required><br>

        <label for="valor">Valor:</label>
        <input type="number" class="valor" required><br>
    `;
    boletosContainer.appendChild(novoBoleto);
}

function enviarFormulario() {
    const nome = document.getElementById('nome').value;
    const placa = document.getElementById('placa').value;
    
    // Pega o valor do campo select de gênero
    const generoElement = document.getElementById('genero');
    const genero = generoElement.value;

    const boletos = document.querySelectorAll('.boleto');
    let totalValor = 0;
    let boletosInfo = '';

    boletos.forEach(boleto => {
        const dataElement = boleto.querySelector('.data').value;
        const valorElement = boleto.querySelector('.valor').value;
        totalValor += parseFloat(valorElement);

        boletosInfo += `<strong>Vencimento:</strong> ${formataData(dataElement)} <br>`;
        boletosInfo += `<strong>Valor:</strong> R$ ${parseFloat(valorElement).toFixed(2)} <br><br>`;
    });

    let saudacao = '';
    if (genero === 'm') {
        saudacao = `<b><br>Olá, ${nome}! <br><br> Tudo bem com você? <br><br> Sr. ${nome}, até o presente momento nosso sistema não identificou o pagamento dos seguintes boletos vencidos.  <br><br> <strong>Placa/Veículo:</strong> ${placa} <br><br>`;
    } else if (genero === 'f') {
        saudacao = `<b><br>Olá, ${nome}! <br><br> Tudo bem com você? <br><br> Sra. ${nome}, até o presente momento nosso sistema não identificou o pagamento dos seguintes boletos vencidos.  <br><br> <strong>Placa/Veículo:</strong> ${placa} <br><br>`;
    }

    let informacoes = '';
    informacoes += boletosInfo;
    informacoes += `<strong>TOTAL:</strong> R$ ${totalValor.toFixed(2)}<br><br>`;
    informacoes += `Neste caso, informamos que o pagamento AINDA poderá ser feito via PIX, sem ocorrência de juros por atraso.<br><br>`;
    informacoes += `<strong>Nosso código pix é CNPJ:</strong><br><br>`;
    informacoes += `40.410.992/0001-40 <br><br>`;
    informacoes += `Após o pagamento, compartilhe o comprovante por aqui, por gentileza, para informarmos a baixa no sistema.<br><br>`;
    informacoes += `Caso o pagamento já tenha sido realizado, por favor desconsiderar essa mensagem.<br><br>`;
    informacoes += `De já, externamos nossa gratidão!<br><br>`;
    informacoes += `<strong>Equipe BrClube!<strong>`;

    const elementoTexto = document.getElementById("texto");
    elementoTexto.innerHTML = `${saudacao}${informacoes}`;
}

function copiarTexto() {
    const texto = document.getElementById("texto").innerText; // Pega o texto sem HTML
    navigator.clipboard.writeText(texto).then(() => {
        alert("Texto copiado para a área de transferência!");
    }).catch(err => {
        alert("Erro ao copiar o texto: " + err);
    });
}