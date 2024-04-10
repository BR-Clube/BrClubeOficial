function enviarFormulario() {
    const form = document.getElementById('brClubeForm');

    const itens = document.getElementById('itens').value;
    const nome = document.getElementById('nome').value;
    const login = document.getElementById('login').value;
    const senha = document.getElementById('senha').value;
    
    const link1 = document.getElementById('link1').value;
    const link2 = document.getElementById('link2').value;
    const link3 = document.getElementById('link3').value;

    let informacoes = '';

    informacoes += `<div style="text-align: center"><strong>*ORIENTAÇÕES PÓS-INSTALAÇÃO DE RASTREADOR*</strong></div><br>`;

    informacoes += `<div style="text-align: left; padding-left:40px;">`;

    informacoes += `Boa tarde, <strong>*${nome}*</strong>. <br><br>O seu equipamento de rastreador já foi instalado, e nós gostaríamos de te orientar sobre o procedimento de monitoramento do seu veículo. É muito simples!<br><br>1. O primeiro passo é baixar, na loja de aplicativos do seu celular, o app <strong>${itens}</strong>.<br><br>Disponível para Android:<br><strong>*${link1}*</strong><br><br>Disponível para IOS:<br><strong>*${link2}*</strong><br><br>Acesse também pelo nosso site:<br><strong>*${link3}*</strong><br><br>2. Após baixar o app, você poderá entrar no monitoramento do veículo utilizando seu login e senha no primeiro acesso.<br><br>LOGIN: *<strong>${login}</strong>*<br>SENHA: *<strong>${senha}</strong>*<br><br>Pronto!<br><br>Seguindo as orientações acima você poderá usufruir das funcionalidades de rastreamento e monitoramento disponíveis.<br><br>Lembrando que o equipamento está sendo emprestado para prestar o serviço, sendo necessário a devolução e ou autorização para a retirada ao final do contrato, caso não seja autorizado, será cobrado o valor do equipamento conforme assinado no contrato.<br><br>Qualquer dúvida, chama a gente aqui.<br><br>Muito obrigado!<br><br><strong>*Equipe BR Clube.*</strong>`;

    informacoes += `</div>`;

    const elementoTexto = document.getElementById("texto");
    elementoTexto.innerHTML = `${informacoes}`;
}
