function enviarFormulario() {
    // Obtenha os valores dos campos do formulário
    const destinatario = document.getElementById('destinatario').value;
    const endereco = document.getElementById('endereco').value;
    const cep = document.getElementById('cep').value;
    const referencia = document.getElementById('referencia').value;

    let informacoes = '';

    informacoes += `<div style="border: 1px solid black; padding: 10px;">`;
    informacoes += `<img src="../Images/logo-3.png" alt="Logo Destinatário" style="width: 80px; height: auto;"><br>`;
    informacoes += `<strong>Destinatário:</strong> ${destinatario}<br>`;
    informacoes += `<strong>Endereço: </strong> ${endereco}<br>`;
    informacoes += `<strong>CEP:</strong> ${cep}<br>`;
    informacoes += `<strong>Ponto de referência:</strong> ${referencia}<br>`;
    informacoes += `</div>`;

    informacoes += `<br>`; 

    informacoes += `<div style="border: 1px solid black; padding: 10px;">`;
    informacoes += `<img src="../Images/logo-3.png" alt="Logo Destinatário" style="width: 80px; height: auto;"><br>`;
    informacoes += `<strong>Remetente:</strong> ASSOCIAÇÃO BR CLUBE DE BENEFÍCIOS<br>`;
    informacoes += `<strong>Endereço:</strong> Edifício New Business Style: Sala 141-A | Av. Dep. Jamel Cecílio, 2496 - Jardim Goiás, Goiânia-GO.<br>`;
    informacoes += `<strong>CEP:</strong> 74810-100<br>`;
    informacoes += `<strong>Telefone:</strong> 4020-0164<br>`;
    informacoes += `</div>`;

    // Atualize o conteúdo do elemento com id 'texto'
    const elementoTexto = document.getElementById("texto");
    elementoTexto.innerHTML = `${informacoes}`;

    console.log("Formulário enviado!");
}

function downloadPDF() {
    // Atualiza o conteúdo do formulário
    enviarFormulario();

    // Aguarde um curto período de tempo para garantir que o conteúdo seja atualizado
    setTimeout(() => {
        const form = document.getElementById('texto');

        //Justifique o conteúdo para o PDF
        const containerDiv = document.createElement('div');
        containerDiv.style.textAlign = 'left';
        containerDiv.innerHTML = form.innerHTML;
        form.innerHTML = '';
        form.appendChild(containerDiv);

        // Configuração das opções do html2pdf
        const options = {
            margin: 20, // Margens em pixels
            filename: 'protocolo_correios.pdf', // Nome do arquivo PDF
            image: { type: 'jpeg', quality: 1 }, // Opções de imagem
            html2canvas: { scale: 2 }, // Configurações do html2canvas
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' } // Configurações do jsPDF
        };

        // Gere o PDF
        html2pdf(form, options);
    }, 500); // Aguarde meio segundo para garantir a atualização do conteúdo
}
