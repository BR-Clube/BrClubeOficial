function formataDataEHorario(dataHora) {
    const dataFormatada = new Date(dataHora);

    const dia = dataFormatada.getDate().toString().padStart(2, '0');
    const mes = (dataFormatada.getMonth() + 1).toString().padStart(2, '0');
    const ano = dataFormatada.getFullYear();
    const hora = dataFormatada.getHours().toString().padStart(2, '0');
    const minuto = dataFormatada.getMinutes().toString().padStart(2, '0');

    return `${dia}/${mes}/${ano} - Horário: ${hora}h:${minuto}`;
}

function enviarFormulario() {
    // Obtenha os valores dos campos do formulário
    const protocolo = document.getElementById('protocolo').value;
    const dataHora = document.getElementById('dataHora').value;
    const placa = document.getElementById('placa').value;
    const modelo = document.getElementById('modelo').value;
    const cor = document.getElementById('cor').value;
    const solicitante = document.getElementById('solicitante').value;
    const telefone = document.getElementById('telefone').value;
    const fatorGerador = document.getElementById('fatorGerador').value;
    const observacaoFatorGerador = document.getElementById('observacaoFatorGerador').value;
    const observacaoResposta = document.getElementById('observacaoResposta').value;
    const observacaoResposta2 = document.getElementById('observacaoResposta2').value;
    const servico = document.getElementById('servico').value;
    const enderecoOrigem = document.getElementById('enderecoOrigem').value;
    const referenciaOrigem = document.getElementById('referenciaOrigem').value;
    const destino = document.getElementById('destino').value;
    const referenciaDestino = document.getElementById('referenciaDestino').value;
    const km = document.getElementById('km').value;
    const kmTotal = document.getElementById('kmTotal').value;


    const generoElement = document.querySelector('input[name="genero"]:checked');
    const genero = generoElement ? generoElement.value : '';

    const genero2Element = document.querySelector('input[name="genero2"]:checked');
    const genero2 = genero2Element ? genero2Element.value : '';

    let informacoes = '';
    let saudacao = '';
    let saudacao2 = '';


    if (genero === 'Sim'|| genero === 'Não') {
      saudacao = `<strong>*Chave e documento no local:*</strong> ${genero}<br><br>`;
    }

    if (genero === 'Sim'|| genero === 'Não') {
      saudacao2 = `<strong>*Veículo de fácil acesso:*</strong> ${genero2}<br><br>`;
    }

    informacoes = `<strong>*Protocolo:*</strong> ${protocolo}<br><br>`;
    informacoes += `<strong>*Data:*</strong> ${formataDataEHorario(dataHora)}<br><br>`;
    informacoes += `<strong>*Placa:*</strong> ${placa}<br><br>`;
    informacoes += `<strong>*Modelo:*</strong> ${modelo}<br><br>`;
    informacoes += `<strong>*Cor:*</strong> ${cor}<br><br>`;
    informacoes += `<strong>*Solicitante:*</strong> ${solicitante}<br><br>`;
    informacoes += `<strong>*Telefone:*</strong> ${telefone}<br><br>`;
    informacoes += `<strong>*Fator Gerador:*</strong> ${fatorGerador}<br><br>`;
    informacoes += `<strong>*Observação do fator gerador:*</strong> ${observacaoFatorGerador}<br><br>`;
    informacoes += saudacao;
    informacoes += `<strong>*Observação:*</strong> ${observacaoResposta}<br><br>`;
    informacoes += saudacao2;
    informacoes += `<strong>*Observação:*</strong> ${observacaoResposta2}<br><br>`;
    informacoes += `<strong>*Serviço:*</strong> ${servico}<br><br>`;
    informacoes += `<strong>*Endereço de Origem:*</strong> ${enderecoOrigem}<br><br>`;
    informacoes += `<strong>*Referência de Origem:*</strong> ${referenciaOrigem}<br><br>`;
    informacoes += `<strong>*Destino:*</strong> ${destino}<br><br>`;
    informacoes += `<strong>*Referência de Destino:*</strong> ${referenciaDestino}<br><br>`;
    informacoes += `<strong>*Quilometragem (km):*</strong> ${km} km<br><br>`;
    informacoes += `<strong>*Quilometragem total (km):*</strong> ${kmTotal} km<br><br>`;
    informacoes += `<strong>*RESPONSÁVEL PELO PAGAMENTO:</strong>* ASSOCIAÇÃO BR CLUBE DE BENEFíCIOS`;

    // Atualize o conteúdo do elemento com id 'texto'
    const elementoTexto = document.getElementById("texto");
    elementoTexto.innerHTML = `${informacoes}`;
}