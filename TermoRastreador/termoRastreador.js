function adicionarEquipamento() {
    const divEquipamento = document.getElementById('equipamento1');
    const novoCampo = document.createElement('div');
    const numeroEquipamento = divEquipamento.querySelectorAll('input[name^="equipamento"]').length + 1;

    novoCampo.innerHTML = `
        <label for="equipamento${numeroEquipamento}">Equipamento ${numeroEquipamento}:</label>
        <input placeholder="Número do EMEI" type="text" id="equipamento${numeroEquipamento}" name="equipamento${numeroEquipamento}" required><br>
    `;

    divEquipamento.appendChild(novoCampo);
}

function downloadPDF() {
    // Atualiza o conteúdo do formulário
    enviarFormulario();

    // Aguarde um curto período de tempo para garantir que o conteúdo seja atualizado
    setTimeout(() => {
        const form = document.getElementById('texto');

        form.innerHTML = '<img src="../Images/brclube2.png" alt="Logo da Empresa" width="60px"><br><br><br>' + form.innerHTML;

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
            image: { type: 'jpeg', quality: 1 }, // Opções de imagem
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

    const data = dadosFormulario.get('data1');
    const dataObj = new Date(data);
    const dataFormatada = dataObj.toLocaleDateString('pt-BR', { timeZone: 'UTC' });

    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const rg = document.getElementById('rg').value;

    const assinatura = `______________________________`;

    let informacoes = '';
    informacoes += `<div style="text-align: center"><strong>TERMO DE RECEBIMENTO E RESPONSABILIDADE COM EQUIPAMENTO DE RASTREAMENTO</strong></div><br><br>`;
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
