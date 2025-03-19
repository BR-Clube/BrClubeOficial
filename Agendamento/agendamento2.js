// Função para enviar o formulário (exemplo de captura dos dados)
// Função para enviar o formulário (exemplo de captura dos dados)
function enviarFormulario() {
    // Capturando os valores dos campos do formulário
    var nomeOficina = document.getElementById('nomeOficina').value;
    var responsavel = document.getElementById('responsavel').value;
    var servico = document.getElementById('servico').value;
    var dataHora = document.getElementById('dataHora').value;
    var endereco = document.getElementById('endereco').value;

    // Formatando a data e hora do agendamento
    var dataFormatada = new Date(dataHora);
    var dataFormatadaStr = `${dataFormatada.getDate()}/${dataFormatada.getMonth() + 1}/${dataFormatada.getFullYear()} ${dataFormatada.getHours()}:${dataFormatada.getMinutes()}`;

    // Construindo o texto de confirmação em HTML formatado
    var textoConfirmacao = `<strong>*Confirmação do seu agendamento na*</strong> ${nomeOficina}<strong> *com o responsável*</strong> ${responsavel}<strong>.</strong><br>`;
    textoConfirmacao += `<strong>*Data e horário do agendamento:*</strong> ${dataFormatadaStr}<br>`;
    textoConfirmacao += `<strong>*Serviço agendado:*</strong> ${servico}<br>`;
    textoConfirmacao += `<strong>*Local:*</strong> ${endereco}<br><br>`;
    textoConfirmacao += `Recomendamos a retirada dos objetos de valor de dentro de seu veículo antes do atendimento.<br><br>`;
    textoConfirmacao += `*Obs.:* Muito importante a sua pontualidade para que possam também ser pontuais no seu atendimento.<br><br>`;
    textoConfirmacao += `Caso não possa comparecer, por gentileza nos informar através desse canal ou no telefone 4020-0164<br><br>`;
    textoConfirmacao += `Cordialmente,<br><br>`;
    textoConfirmacao += `Central de Agendamento<br><br>`;
    textoConfirmacao += `*BR Clube.*`;

    // Exibindo o texto formatado no elemento #texto
    document.getElementById('texto').innerHTML = textoConfirmacao;
}


// Função para copiar o texto para a área de transferência (exemplo)
function copiarTexto() {
    var texto = document.getElementById('texto').innerText;

    // Copiando para a área de transferência
    navigator.clipboard.writeText(texto)
        .then(() => {
            alert('Texto copiado para a área de transferência!');
        })
        .catch(err => {
            console.error('Erro ao copiar o texto: ', err);
        });
}