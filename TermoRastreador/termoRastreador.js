function adicionarEquipamento() {
    const divEquipamento = document.getElementById('equipamento');
    const novoCampo = document.createElement('input');
    const numeroEquipamento = divEquipamento.getElementsByTagName('input').length + 1;

    novoCampo.type = 'text';
    novoCampo.name = `equipamento ${numeroEquipamento}`;
    novoCampo.id = `equipamento ${numeroEquipamento}`;
    novoCampo.required = true;

    const label = document.createElement('label');
    label.for = `equipamento ${numeroEquipamento}`;
    label.innerHTML = `equipamento ${numeroEquipamento}:`;

    divEquipamento.appendChild(label);
    divEquipamento.appendChild(novoCampo);
    divEquipamento.appendChild(document.createElement('br'));
}

function downloadPDF() {
    const form = document.getElementById('texto');

    //Justificando PDF
    const containerDiv = document.createElement('div');
    containerDiv.style.textAlign = 'justify';
    containerDiv.innerHTML = form.innerHTML;
    form.innerHTML = '';
    form.appendChild(containerDiv);

    // Configuração das opções do html2pdf
    const options = {
        margin: 20, // Margens em pixels
        filename: 'termo_rastreamento.pdf', // Nome do arquivo PDF
        image: { type: 'jpeg', quality: 0.98 }, // Opções de imagem
        html2canvas: { scale: 2 }, // Configurações do html2canvas
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' } // Configurações do jsPDF


    };

    html2pdf(form, options);
}

function enviarFormulario() {
    const form = document.getElementById('brClubeForm');
    const dadosFormulario = new FormData(form);

    // Obtenha os valores dos campos do formulário
    const equipamentosInputs = document.querySelectorAll('[name^="equipamento"]');
    let equipamentos = '';

    equipamentosInputs.forEach((input, index) => {
        equipamentos += `Equipamento ${index + 1}: ${input.value}<br>`;
    });

    // Obtenha o valor do campo de data
    const data = dadosFormulario.get('data');

    // Crie um objeto de data com o valor do campo
    const dataObj = new Date(data);

    // Obtenha a data formatada considerando o fuso horário local
    const dataFormatada = dataObj.toLocaleDateString('pt-BR', { timeZone: 'UTC' });

    let informacoes = '';

    informacoes += `<div style="text-align: center">TERMO DE RECEBIMENTO E RESPONSABILIDADE COM EQUIPAMENTO DE RASTREAMENTO</div><br><br><br><br>`;
    informacoes += `Por meio deste documento, eu, _______________________________, com cadastro no CPF de nº ____________________, RG _______________, técnico de instalação de rastreadores, declaro que recebi os equipamentos correspondentes aos seguintes códigos:<br><br>`;
    informacoes += `${equipamentos}<br>`;
    informacoes += `Me responsabilizo pelo seu bom uso e, caso o material não seja utilizado, asseguro devolvê-lo na sede da Associação BR CLUBE. Ao preencher assinar o presente termo, demonstro estar ciente das condições estabelecidas pela BR CLUBE. Declaro também estar ciente de que não há vínculo empregatício entre as partes, e que minha atuação se dará de forma independente, não caracterizando relação de emprego nos termos da legislação trabalhista vigente.<br><br><br><br>`;
    informacoes += `<div style="text-align: right">Goiânia, ${dataFormatada}</div><br><br><br><br><br><br>`;
    informacoes += `<div style="text-align: center">________________________________<br>Assinatura do(a) prestador(a)</div>`;

    // Atualize o conteúdo do elemento com id 'texto'
    const elementoTexto = document.getElementById("texto");
    elementoTexto.innerHTML = `${informacoes}`;
}