function adicionarEquipamento() {

    const divEquipamento = document.getElementById('equipamento1');
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
    // Atualiza o conteúdo do formulário
    enviarFormulario();

    // Aguarde um curto período de tempo para garantir que o conteúdo seja atualizado
    setTimeout(() => {
        const form = document.getElementById('texto');

        // Crie um div para a imagem e adicione-a ao início do formulário
        const logoDiv = document.createElement('div');
        logoDiv.style.textAlign = 'left'; // Ajuste o alinhamento conforme necessário
        const logoImg = document.createElement('img');
        logoImg.src = '/images/brclube2.png';
        logoImg.alt = 'Logo da Empresa';
        logoImg.style.width = 'auto'; // Defina a largura da imagem como "auto" para manter suas proporções originais
        logoImg.style.maxWidth = '5%'; // Define a largura máxima da imagem para "100%" para evitar que ela ultrapasse o espaço disponível
        logoDiv.appendChild(logoImg);
        form.insertBefore(logoDiv, form.firstChild);

        //Justifique o conteúdo para o PDF
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

        // Gere o PDF
        html2pdf(form, options);
    }, 500); // Aguarde meio segundo para garantir a atualização do conteúdo
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
    let data = dadosFormulario.get('data1');

    // Crie um objeto de data com o valor do campo
    let dataObj = new Date(data);

    // Obtenha a data formatada considerando o fuso horário local
    let dataFormatada = dataObj.toLocaleDateString('pt-BR', { timeZone: 'UTC' });

    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const rg = document.getElementById('rg').value;

    let informacoes = '';

    const assinatura = `______________________________`;

    informacoes += `<br><div style="text-align: center"><strong>TERMO DE RECEBIMENTO E RESPONSABILIDADE COM EQUIPAMENTO DE RASTREAMENTO</strong></div><br><br>`;
    informacoes += `Por meio deste documento, eu, ${nome}, com cadastro no CPF de nº ${cpf}, RG ${rg}, técnico de instalação de rastreadores, declaro que recebi os equipamentos correspondentes aos seguintes códigos:<br><br>`;
    informacoes += `${equipamentos}<br>`;
    informacoes += `Me responsabilizo pelo seu bom uso e, caso o material não seja utilizado, asseguro devolvê-lo na sede da Associação BR CLUBE. Ao preencher assinar o presente termo, demonstro estar ciente das condições estabelecidas pela BR CLUBE. Declaro também estar ciente de que não há vínculo empregatício entre as partes, e que minha atuação se dará de forma independente, não caracterizando relação de emprego nos termos da legislação trabalhista vigente.<br><br><br>`;
    informacoes += `<div style="text-align: right">Goiânia, ${dataFormatada}</div><br><br>`;
    informacoes += `<div style="text-align: center">${assinatura}</div>`;
    informacoes += `<div style="text-align: center">Assinatura do(a) prestador(a)</div>`;

    // Atualize o conteúdo do elemento com id 'texto'
    const elementoTexto = document.getElementById("texto");
    elementoTexto.innerHTML = `${informacoes}`;
}

document.getElementById('buttonEquipamento').addEventListener('click', adicionarEquipamento);
document.getElementById('buttonEnviar').addEventListener('click', enviarFormulario);
document.getElementById('buttonDownloadPDF').addEventListener('click', downloadPDF);
