function downloadPDF() {
    const form = document.getElementById('texto');

    form.innerHTML = '<img src="../Images/brclube2.png" alt="Logo da Empresa" width="80px"><br><br><br>' + form.innerHTML;

    // Configuração das opções do html2pdf
    const options = {
        margin: 20, // Margens em pixels
        filename: 'termo_cancelamento.pdf', // Nome do arquivo PDF
        image: { type: 'jpeg', quality: 1 }, // Opções de imagem
        html2canvas: { scale: 2 }, // Configurações do html2canvas
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' } // Configurações do jsPDF
    };

    html2pdf().set(options).from(form).save();
}

function enviarFormulario() {
    // Obtenha o formulário pelo ID
    const form = document.getElementById('brClubeForm');

    const dadosFormulario = new FormData(form);

    // Obtenha o valor do campo de data
    const dataInput = document.getElementById('data');
    const dataValue = dataInput.value;

    // Divida a data em partes (dia, mês, ano)
    const partesData = dataValue.split('-');

    // Formate a data no formato desejado (dd/mm/yyyy)
    const dia = partesData[2];
    const mes = partesData[1];
    const anoFormatado = partesData[0];

    const dataFormatada = `${dia}/${mes}/${anoFormatado}`;

    // Obtenha o valor do campo de data 2
    const data2Input = document.getElementById('data2');
    const data2Value = data2Input.value;

    // Divida a data 2 em partes (dia, mês, ano)
    const partesData2 = data2Value.split('-');

    // Formate a data 2 no formato desejado (dd/mm/yyyy)
    const dia2 = partesData2[2];
    const mes2 = partesData2[1];
    const anoFormatado2 = partesData2[0];

    const dataFormatada2 = `${dia2}/${mes2}/${anoFormatado2}`;

    // Obtenha os valores dos campos do formulário
    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const itens = document.getElementById('itens').value;
    const placa = document.getElementById('placa').value;
    const marca = document.getElementById('marca').value;
    const modelo = document.getElementById('modelo').value;
    const chassi = document.getElementById('chassi').value;
    const renavam = document.getElementById('renavam').value;
    const cor = document.getElementById('cor').value;
    const ano = document.getElementById('ano').value;
    const anoF = document.getElementById('anoF').value;
    const fipe = document.getElementById('fipe').value;

    let informacoes = '';

    informacoes += `<div style="text-align: center"><strong>TERMO DE CANCELAMENTO</strong></div><br>`;

    informacoes += `<div style="text-align: justify">Solicito que a partir do dia ${dataFormatada2}, o cancelamento da filiação do veículo abaixo descrito junto a Associação BR CLUBE DE BENEFÍCIOS. Ciente de que meu veículo se encontra a partir desta data, sem qualquer cobertura, portanto, não mais poderei usufruir de qualquer vantagem oferecida pela BR CLUBE.</div><br><br>`;

    informacoes += `<div style="text-align: center"><strong>DADOS DO VEÍCULO</strong></div><br>`;

        // Primeira coluna
        informacoes += `<div>`;
        informacoes += `<strong>Tipo:</strong> ${itens}<br><strong>Placa:</strong> ${placa}<br><strong>Marca:</strong> ${marca}<br><strong>Modelo:</strong> ${modelo}<br><strong>Chassi:</strong> ${chassi}<br>`;
        informacoes += `</div>`;

        // Segunda coluna
        informacoes += `<div>`;
        informacoes += `<strong>Renavam:</strong> ${renavam}<br><strong>Cor:</strong> ${cor}<br><strong>Ano modelo:</strong> ${ano}<br><strong>Ano fabricação:</strong> ${anoF}<br><strong>Código FIPE:</strong> ${fipe}<br>`;
        informacoes += `</div>`;

    informacoes += `<br><br><div style="text-align: right">Goiânia - ${dataFormatada}</div><br><br><div style="text-align: center">________________________________<br>${nome}<br>CPF: ${cpf}</div><br><br>`;

    // Criar e inserir a imagem
    const imagem = document.createElement('img');
    imagem.src = '../Images/assinatura.png'; // Altere o caminho conforme necessário
    imagem.alt = 'Assinatura do Diretor';
    imagem.width = '150'; // Altere o tamanho conforme necessário
    imagem.style.display = 'block'; // Define a imagem como bloco
    imagem.style.margin = '0 auto'; // Define margens automáticas para centralizar horizontalmente

    // Atualize o conteúdo do elemento com id 'texto'
    const elementoTexto = document.getElementById("texto");
    elementoTexto.innerHTML = `${informacoes}`;
    elementoTexto.appendChild(imagem); // Adicione a imagem ao elemento
}
