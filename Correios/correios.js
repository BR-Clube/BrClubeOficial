function enviarFormulario() {
    // Obtenha os valores dos campos do formulário
    const destinatario = document.getElementById('destinatario').value;
    const endereco = document.getElementById('endereco').value;
    const cep = document.getElementById('cep').value;

    let informacoes = '';

    informacoes += `<strong>*Destinatário:*</strong> ${destinatario} <br><br>`;
    informacoes += `<strong>*Endereço:* </strong> ${endereco}<br><br>`;
    informacoes += `<strong>*CEP:*</strong> ${cep}<br><br>`;

    informacoes += `<br><br><br><strong>*Remetente:*</strong> ASSOCIAÇÃO BR CLUBE DE BENEFÍCIOS<br><br>`;
    informacoes += `<strong>*Endereço:*</strong> Av. Dep. Jamel Cecílio, 2496 - Jardim Goiás, Goiânia - GO SALA 141-A<br><br>`;
    informacoes += `<strong>*CEP:*</strong> 74810-100<br><br>`;
    informacoes += `<strong>*Telefone:*</strong> (62) 3434-2622<br><br>`;

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

        // Configuração das opções do html2pdf
        const options = {
            margin: 20, // Margens em pixels
            filename: 'protocolo_correios.pdf', // Nome do arquivo PDF
            image: { type: 'jpeg', quality: 0.98 }, // Opções de imagem
            html2canvas: { scale: 2 }, // Configurações do html2canvas
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' } // Configurações do jsPDF
        };

        // Gere o PDF
        html2pdf(form, options);
    }, 500); // Aguarde meio segundo para garantir a atualização do conteúdo
}
