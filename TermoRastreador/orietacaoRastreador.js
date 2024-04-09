async function downloadPDF() {
    const form = document.getElementById('texto');

    form.innerHTML = '<div style="text-align: center;"><img src="../Images/brclube2.png" alt="Logo da Empresa" width="100px"></div><br><br>' + form.innerHTML;

    // Configuração das opções do html2pdf
    const options = {
        filename: 'termo_rastreamento.pdf', // Nome do arquivo PDF
        image: { type: 'jpeg', quality: 1 }, // Opções de imagem
        html2canvas: { scale: 2 }, // Configurações do html2canvas
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' } // Configurações do jsPDF
    };

    try {
        const { pdf } = await html2pdf().set(options).from(form).toPdf().save();
        console.log(pdf);
    } catch (error) {
        console.error(error);
    }
}

function enviarFormulario() {
    const form = document.getElementById('brClubeForm');

    const nome = document.getElementById('nome').value;
    const login = document.getElementById('login').value;
    const senha = document.getElementById('senha').value;

    let informacoes = '';

    informacoes += `<div style="text-align: center"><strong>*ORIENTAÇÕES PÓS-INSTALAÇÃO DE RASTREADOR*</strong></div><br>`;

    informacoes += `<div style="text-align: left; padding-left:40px;">`;

    informacoes += `Boa tarde, *${nome}*. <br><br>O seu equipamento de rastreador já foi instalado, e nós gostaríamos de te orientar sobre o procedimento de monitoramento do seu veículo. É muito simples!<br><br>1. O primeiro passo é baixar, na loja de aplicativos do seu celular, o app <strong>REDELOC</strong>.<br><br>Disponível para Android:<br>*https://play.google.com/store/apps/details?id=org.logica.rastreamento.app*<br><br>Disponível para IOS:<br>*https://apps.apple.com/br/app/logica-monitoramento/id1354154680*<br><br>Acesse também pelo nosso site:<br>*https://www.redeloc.com.br/*<br><br>2. Após baixar o app, você poderá entrar no monitoramento do veículo utilizando seu login e senha no primeiro acesso.<br><br>LOGIN: *${login}*<br>SENHA: *${senha}*<br><br>Pronto!<br><br>Seguindo as orientações acima você poderá usufruir das funcionalidades de rastreamento e monitoramento disponíveis.<br><br>Lembrando que o equipamento está sendo emprestado para prestar o serviço, sendo necessário a devolução e ou autorização para a retirada ao final do contrato, caso não seja autorizado, será cobrado o valor do equipamento conforme assinado no contrato.<br><br>Qualquer dúvida, chama a gente aqui.<br><br>Muito obrigado!<br><br><strong>*Equipe BR Clube.*</strong>`;

    informacoes += `</div>`;

    const elementoTexto = document.getElementById("texto");
    elementoTexto.innerHTML = `${informacoes}`;
}
