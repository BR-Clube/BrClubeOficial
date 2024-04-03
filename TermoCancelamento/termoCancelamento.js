function downloadPDF() {
    const form = document.getElementById('texto');

    form.innerHTML = '<div  text-align="center"><img src="../Images/brclube2.png" alt="Logo da Empresa" width="80px"></div><br><br>' + form.innerHTML;


    //Justificando PDF
    const containerDiv = document.createElement('div');
    containerDiv.style.textAlign = 'justify';
    containerDiv.innerHTML = form.innerHTML;
    form.innerHTML = '';
    form.appendChild(containerDiv);


    // Configuração das opções do html2pdf
    const options = {
        margin: 20, // Margens em pixels
        filename: 'termo_cancelamento.pdf', // Nome do arquivo PDF
        image: { type: 'jpeg', quality: 1 }, // Opções de imagem
        html2canvas: { scale: 2 }, // Configurações do html2canvas
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' } // Configurações do jsPDF
    };

    html2pdf(form, options);
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
    const itens = document.getElementById('itens').value;
    const placa = document.getElementById('placa').value;
    const marca = document.getElementById('marca').value;
    const modelo = document.getElementById('modelo').value;
    const cor = document.getElementById('cor').value;
    const ano = document.getElementById('ano').value;
    const anoF = document.getElementById('anoF').value;
    const renavam = document.getElementById('renavam').value;
    const chassi = document.getElementById('chassi').value;

    let informacoes = '';

    informacoes += `<div style="text-align: center"><strong>TERMO DE CANCELAMENTO</strong></div><br><br>`;

    informacoes += `Solicito que a partir do dia ${dataFormatada2}, o cancelamento da filiação do veículo abaixo descrito junto a Associação BR CLUBE DE BENEFÍCIOS. Ciente de que meu veículo se encontra a partir desta data, sem qualquer cobertura, portanto, não mais poderei usufruir de qualquer vantagem oferecida pela BR CLUBE.<br><br>`;

    informacoes += `<div style="text-align: center"><strong>DADOS DO VEÍCULO</strong></div><br><br>`;

    informacoes += `<div style="text-align: center"><strong>Tipo:</strong> ${itens} | `;
    informacoes += `<strong>Placa:</strong> ${placa} | `;
    informacoes += `<strong>Marca:</strong> ${marca}<br>`;

    informacoes += `<strong>Modelo:</strong> ${modelo} | `;
    informacoes += `<strong>Cor:</strong> ${cor} | `;
    informacoes += `<strong>Ano modelo:</strong> ${ano}<br>`;

    informacoes += `<strong>Ano de fabricação:</strong> ${anoF} | `;
    informacoes += `<strong>Renavam:</strong> ${renavam} | `;
    informacoes += `<strong>Chassi:</strong> ${chassi}</div>`;
    informacoes += `Goiânia - ${dataFormatada}<br><br>`;

    // Atualize o conteúdo do elemento com id 'texto'
    const elementoTexto = document.getElementById("texto");
    elementoTexto.innerHTML = `${informacoes}`;
}
