function formataDataEHorario(dataHora) {
    const dataFormatada = new Date(dataHora);

    const dia = dataFormatada.getDate().toString().padStart(2, '0');
    const mes = (dataFormatada.getMonth() + 1).toString().padStart(2, '0');
    const ano = dataFormatada.getFullYear();
    const hora = dataFormatada.getHours().toString().padStart(2, '0');
    const minuto = dataFormatada.getMinutes().toString().padStart(2, '0');

    return `${dia}/${mes}/${ano} - Horário: ${hora}h:${minuto}`;
}

function downloadPDF() {
    const form = document.getElementById('texto');

    form.innerHTML = '<div  text-align="center"><img src="/Images/brclube2.png" alt="Logo da Empresa" width="100px"></div><br><br>' + form.innerHTML;


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
        html2canvas: { scale: 1 }, // Configurações do html2canvas
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' } // Configurações do jsPDF
    };

    html2pdf(form, options);
}

function enviarFormulario() {

     // Obtenha o formulário pelo ID
     const form = document.getElementById('brClubeForm');

     // Obtenha o valor do campo de radio de gênero
    const generoElement = document.querySelector('input[name="genero"]:checked');
    const genero = generoElement ? generoElement.value : '';

    const dadosFormulario = new FormData(form);

    // Obtenha o valor do campo de data
    const data = dadosFormulario.get('data');

    // Crie um objeto de data com o valor do campo
    const dataObj = new Date(data);

    // Obtenha a data formatada considerando o fuso horário local
    const dataFormatada = dataObj.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
 

    // Obtenha os valores dos campos do formulário
    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const placa = document.getElementById('placa').value;
    const veiculo = document.getElementById('veiculo').value;
    const cor = document.getElementById('cor').value;
    const ano = document.getElementById('ano').value;
    const renavam = document.getElementById('renavam').value;
    const chassi = document.getElementById('chassi').value;
    const emei = document.getElementById('emei').value;
    const endereco = document.getElementById('endereco').value;
    const dataHora = document.getElementById('dataHora').value;

    let informacoes = '';

    informacoes += `<strong>*Nome completo:*</strong> ${nome}<br><br>`;
    informacoes += `<strong>*CPF/CNPJ:*</strong> ${cpf}<br><br>`;
    informacoes += `<strong>*Data de nascimento:*</strong> ${dataFormatada}<br><br>`;
    informacoes += `<strong>*E-mail:*</strong> ${email}<br><br>`;
    informacoes += `<strong>*Telefone:*</strong> ${telefone}<br><br>`;
    informacoes += `<strong>*Gênero: *</strong> ${genero}<br><br>`;
    informacoes += `<strong>*Placa:*</strong> ${placa}<br><br>`;
    informacoes += `<strong>*Modelo:*</strong> ${veiculo}<br><br>`;
    informacoes += `<strong>*Modelo:*</strong> ${cor}<br><br>`;
    informacoes += `<strong>*Ano:*</strong> ${ano}<br><br>`;
    informacoes += `<strong>*Renavam:*</strong> ${renavam}<br><br>`;
    informacoes += `<strong>*Chassi:*</strong> ${chassi}<br><br>`;
    informacoes += `<strong>*N.º do EMEI:*</strong> ${emei}<br><br>`;
    informacoes += `<strong>*Endereço:*</strong> ${endereco}<br><br>`;
    informacoes += `<strong>*Data:*</strong> ${formataDataEHorario(dataHora)}<br><br>`;

    // Atualize o conteúdo do elemento com id 'texto'
    const elementoTexto = document.getElementById("texto");
    elementoTexto.innerHTML = `${informacoes}`;
}