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
        filename: 'termo_entrega_de_veiculo.pdf', // Nome do arquivo PDF
        image: { type: 'jpeg', quality: 1 }, // Opções de imagem
        html2canvas: { scale: 2 }, // Configurações do html2canvas
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' } // Configurações do jsPDF
    };

    html2pdf(form, options);
}

function enviarFormulario() {

    const form = document.getElementById('brClubeForm');
    const dadosFormulario = new FormData(form);

    // Obtenha o valor do campo de data
    const data = dadosFormulario.get('data');
    const data2 = dadosFormulario.get('data2');
    const data3 = dadosFormulario.get('data3');

    // Crie um objeto de data com o valor do campo
    const dataObj = new Date(data);
    const dataObj2 = new Date(data2);
    const dataObj3 = new Date(data3);

    // Obtenha a data formatada considerando o fuso horário local
    const dataFormatada = dataObj.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
    const dataFormatada2 = dataObj2.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
    const dataFormatada3 = dataObj3.toLocaleDateString('pt-BR', { timeZone: 'UTC' });

    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const veiculo = document.getElementById('veiculo').value;
    const ano = document.getElementById('ano').value;
    const placa = document.getElementById('placa').value;
    
    let informacoes = '';

    informacoes += `<div style="text-align: center"><strong>TERMO DE ENTREGA DE VEÍCULO</strong></div><br><br>`;
    informacoes += `<strong>Responsável pelo veículo:</strong> ${nome}<br><br>`;
    informacoes += `<strong>CPF/CNPJ:</strong> ${cpf}<br><br>`;
    informacoes += `<strong>Veículo:</strong> ${veiculo}<br><br>`;
    informacoes += `<strong>Ano:</strong> ${ano}<br><br>`;
    informacoes += `<strong>Placa:</strong> ${placa}<br><br>`;
    informacoes += `<strong>Data de início dos reparos:</strong> ${dataFormatada}<br><br>`;
    informacoes += `<strong>Data de conclusão dos reparos:</strong> ${dataFormatada2}<br><br>`;
    informacoes += `Declaração: <br><br>`;
    informacoes += `Recebi o veículo acima identificado, devidamente reparado dos danos sofridos de objeto de acidente de trânsito, outorgando a mais plena, rasa, irrevogável e irretratável quitação, passada, presente e futura, para nada mais reclamar, em Juízo ou fora dele, seja a que título for, renunciando expressamente a todo e qualquer outro direito que possa vir a ter em decorrência do evento. <br><br>`;
    informacoes += `    Sendo este termo assinado, a quitação é dada à Br Clube, oficina reparadora e ao causador do evento. <br><br>`;

    informacoes += `<div style="text-align: right">Goiânia, ${dataFormatada3}</div><br><br><br><br>`;
    informacoes += `<div style="text-align: center">________________________________<br>ASSINATURA DO ASSOCIADO</div>`;

    // Atualize o conteúdo do elemento com id 'texto'
    const elementoTexto = document.getElementById("texto");
    elementoTexto.innerHTML = `${informacoes}`;
}