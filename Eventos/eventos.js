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
    const chaveLocal = document.getElementById('chaveLocal').value;
    const observacaoResposta = document.getElementById('observacaoResposta').value;
    const veiculoFacilAcesso = document.getElementById('veiculoFacilAcesso').value;
    const observacaoResposta2 = document.getElementById('observacaoResposta2').value;
    const servico = document.getElementById('servico').value;
    const enderecoOrigem = document.getElementById('enderecoOrigem').value;
    const referenciaOrigem = document.getElementById('referenciaOrigem').value;
    const destino = document.getElementById('destino').value;
    const referenciaDestino = document.getElementById('referenciaDestino').value;

    let informacoes = '';

    informacoes = `Protocolo: ${protocolo}<br><br>`;
    informacoes += `Data e Hora: ${dataHora}<br><br>`;
    informacoes += `Placa: ${placa}<br><br>`;
    informacoes += `Modelo: ${modelo}<br><br>`;
    informacoes += `Cor: ${cor}<br><br>`;
    informacoes += `Solicitante: ${solicitante}<br><br>`;
    informacoes += `Telefone: ${telefone}<br><br>`;
    informacoes += `Fator Gerador: ${fatorGerador}<br><br>`;
    informacoes += `Observação Fator Gerador: ${observacaoFatorGerador}<br><br>`;
    informacoes += `Chave Local: ${chaveLocal}<br><br>`;
    informacoes += `Observação Resposta: ${observacaoResposta}<br><br>`;
    informacoes += `Veículo de Fácil Acesso: ${veiculoFacilAcesso}<br><br>`;
    informacoes += `Observação Resposta 2: ${observacaoResposta2}<br><br>`;
    informacoes += `Serviço: ${servico}<br><br>`;
    informacoes += `Endereço de Origem: ${enderecoOrigem}<br><br>`;
    informacoes += `Referência de Origem: ${referenciaOrigem}<br><br>`;
    informacoes += `Destino: ${destino}<br><br>`;
    informacoes += `Referência de Destino: ${referenciaDestino}<br><br>`;

    // Atualize o conteúdo do elemento com id 'texto'
    const elementoTexto = document.getElementById("texto");
    elementoTexto.innerHTML = `${informacoes}`;
}

function copiarTexto() {
    const textoParaCopiar = document.getElementById("texto");
    const textoSelecionado = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(textoParaCopiar);
    textoSelecionado.removeAllRanges();
    textoSelecionado.addRange(range);
    document.execCommand("copy");
}