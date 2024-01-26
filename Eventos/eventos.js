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
    const veiculoFacilAcesso = document.getElementById('veiculoFacilAcesso').value;
    const observacaoResposta2 = document.getElementById('observacaoResposta2').value;
    const servico = document.getElementById('servico').value;
    const enderecoOrigem = document.getElementById('enderecoOrigem').value;
    const referenciaOrigem = document.getElementById('referenciaOrigem').value;
    const destino = document.getElementById('destino').value;
    const referenciaDestino = document.getElementById('referenciaDestino').value;

    const generoElement = document.querySelector('input[name="genero"]:checked');
    const genero = generoElement ? generoElement.value : '';

    let informacoes = '';
    let saudacao = '';


    if (genero === 'Sim'|| genero === 'Não') {
      saudacao = `Chave e documento no local: ${genero}<br><br>`;
    }

    informacoes = `Protocolo: ${protocolo}<br><br>`;
    informacoes += `Data: ${formataDataEHorario(dataHora)}<br><br>`;
    informacoes += `Placa: ${placa}<br><br>`;
    informacoes += `Modelo: ${modelo}<br><br>`;
    informacoes += `Cor: ${cor}<br><br>`;
    informacoes += `Solicitante: ${solicitante}<br><br>`;
    informacoes += `Telefone: ${telefone}<br><br>`;
    informacoes += `Fator Gerador: ${fatorGerador}<br><br>`;
    informacoes += `Observação do fator gerador: ${observacaoFatorGerador}<br><br>`;
    informacoes += saudacao;
    informacoes += `Observação: ${observacaoResposta}<br><br>`;
    informacoes += `Veículo de Fácil Acesso: ${veiculoFacilAcesso}<br><br>`;
    informacoes += `Observação Resposta 2: ${observacaoResposta2}<br><br>`;
    informacoes += `Serviço: ${servico}<br><br>`;
    informacoes += `Endereço de Origem: ${enderecoOrigem}<br><br>`;
    informacoes += `Referência de Origem: ${referenciaOrigem}<br><br>`;
    informacoes += `Destino: ${destino}<br><br>`;
    informacoes += `Referência de Destino: ${referenciaDestino}<br><br>`;

    console.log("Protocolo:", protocolo);
    console.log("Data/Horário:", dataHora);
    console.log("Placa:", placa);
    console.log("Modelo:", modelo);
    console.log("Cor:", cor);
    console.log("Solicitante:", solicitante);
    console.log("Telefone:", telefone);
    console.log("Fator Gerador:", fatorGerador);
    console.log("Observação do Fator Gerador:", observacaoFatorGerador);
    console.log("Observação:", observacaoResposta);
    console.log("Veículo de Fácil Acesso:", veiculoFacilAcesso);
    console.log("Observação Resposta 2:", observacaoResposta2);
    console.log("Serviço:", servico);
    console.log("Endereço de Origem:", enderecoOrigem);
    console.log("Referência de Origem:", referenciaOrigem);
    console.log("Destino:", destino);
    console.log("Referência de Destino:", referenciaDestino);
    console.log("Chave e documento no local?", genero);

    // Atualize o conteúdo do elemento com id 'texto'
    const elementoTexto = document.getElementById("texto");
    elementoTexto.innerHTML = `${informacoes}`;
}