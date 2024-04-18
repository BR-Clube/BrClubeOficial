function enviarFormulario() {
    const itens = document.getElementById('itens').value;
    const nome = document.getElementById('nome').value;
    const login = document.getElementById('login').value;
    const senha = document.getElementById('senha').value;
    const itens2 = document.getElementById('itens2').value;

    const redelocIphone = `https://apps.apple.com/br/app/logica-monitoramento/id1354154680`;
    const redelocAndroid = `https://play.google.com/store/apps/details?id=org.logica.rastreamento.app`;
    const siteRedeloc = `https://www.redeloc.com.br/`;

    const rastreieBrasilIphone = `https://apps.apple.com/br/app/rastreie-brasil/id1508025177`;
    const rastreieBrasilAndroid = `https://play.google.com/store/apps/details?id=org.logica.rastreiebrasil.app`;
    const siteRastreieBrasil = `https://rastreiebrasil2.rastreiebrasil.com.br/login/login`;

    let informacoes = `<div style="text-align: left; padding-left:40px;">`;

    if (itens === "redeloc" && itens2 === "iphone") {
        informacoes += `Boa tarde, <strong>*${nome}*</strong>. <br><br>O seu equipamento de rastreador já foi instalado, e nós gostaríamos de te orientar sobre o procedimento de monitoramento do seu veículo. É muito simples!<br><br>*1.* O primeiro passo é baixar, na loja de aplicativos do seu celular, o app <strong>REDELOC</strong>.<br><br>Disponível para IOS:<br><strong>*${redelocIphone}*</strong><br><br>Acesse também pelo nosso site:<br><strong>*${siteRedeloc}*</strong><br><br>*2.* Após baixar o app, você poderá entrar no monitoramento do veículo utilizando seu login e senha no primeiro acesso.<br><br>LOGIN: *<strong>${login}</strong>*<br>SENHA: *<strong>${senha}</strong>*<br><br>Pronto!<br><br>Seguindo as orientações acima você poderá usufruir das funcionalidades de rastreamento e monitoramento disponíveis.<br><br>Lembrando que o equipamento está sendo emprestado para prestar o serviço, sendo necessário a devolução e ou autorização para a retirada ao final do contrato, caso não seja autorizado, será cobrado o valor do equipamento conforme assinado no contrato.<br><br>Qualquer dúvida, chama a gente aqui.<br><br>Muito obrigado!<br><br><strong>*Equipe BR Clube!*</strong>`;        
    }

    if (itens === "redeloc" && itens2 === "android") {
        informacoes += `Boa tarde, <strong>*${nome}*</strong>. <br><br>O seu equipamento de rastreador já foi instalado, e nós gostaríamos de te orientar sobre o procedimento de monitoramento do seu veículo. É muito simples!<br><br>*1.* O primeiro passo é baixar, na loja de aplicativos do seu celular, o app <strong>REDELOC</strong>.<br><br>Disponível para Android:<br><strong>*${redelocAndroid}*</strong><br><br>Acesse também pelo nosso site:<br><strong>*${siteRedeloc}*</strong><br><br>*2.* Após baixar o app, você poderá entrar no monitoramento do veículo utilizando seu login e senha no primeiro acesso.<br><br>LOGIN: *<strong>${login}</strong>*<br>SENHA: *<strong>${senha}</strong>*<br><br>Pronto!<br><br>Seguindo as orientações acima você poderá usufruir das funcionalidades de rastreamento e monitoramento disponíveis.<br><br>Lembrando que o equipamento está sendo emprestado para prestar o serviço, sendo necessário a devolução e ou autorização para a retirada ao final do contrato, caso não seja autorizado, será cobrado o valor do equipamento conforme assinado no contrato.<br><br>Qualquer dúvida, chama a gente aqui.<br><br>Muito obrigado!<br><br><strong>*Equipe BR Clube!*</strong>`;        
    }

    if (itens === "rastreieBrasil" && itens2 === "iphone") {
        informacoes += `Boa tarde, <strong>*${nome}*</strong>. <br><br>O seu equipamento de rastreador já foi instalado, e nós gostaríamos de te orientar sobre o procedimento de monitoramento do seu veículo. É muito simples!<br><br>*1.* O primeiro passo é baixar, na loja de aplicativos do seu celular, o app <strong>RASTREIE BRASIL</strong>.<br><br>Disponível para IOS:<br><strong>*${rastreieBrasilIphone}*</strong><br><br>Acesse também pelo nosso site:<br><strong>*${siteRastreieBrasil}*</strong><br><br>*2.* Após baixar o app, você poderá entrar no monitoramento do veículo utilizando seu login e senha no primeiro acesso.<br><br>LOGIN: *<strong>${login}</strong>*<br>SENHA: *<strong>${senha}</strong>*<br><br>Pronto!<br><br>Seguindo as orientações acima você poderá usufruir das funcionalidades de rastreamento e monitoramento disponíveis.<br><br>Lembrando que o equipamento está sendo emprestado para prestar o serviço, sendo necessário a devolução e ou autorização para a retirada ao final do contrato, caso não seja autorizado, será cobrado o valor do equipamento conforme assinado no contrato.<br><br>Qualquer dúvida, chama a gente aqui.<br><br>Muito obrigado!<br><br><strong>*Equipe BR Clube!*</strong>`;        
    }

    if (itens === "rastreieBrasil" && itens2 === "android") {
        informacoes += `Boa tarde, <strong>*${nome}*</strong>. <br><br>O seu equipamento de rastreador já foi instalado, e nós gostaríamos de te orientar sobre o procedimento de monitoramento do seu veículo. É muito simples!<br><br>*1.* O primeiro passo é baixar, na loja de aplicativos do seu celular, o app <strong>RASTREIE BRASIL</strong><br><br>Disponível para IOS:<br><strong>*${rastreieBrasilAndroid}*</strong><br><br>Acesse também pelo nosso site:<br><strong>*${siteRastreieBrasil}*</strong><br><br>*2.* Após baixar o app, você poderá entrar no monitoramento do veículo utilizando seu login e senha no primeiro acesso.<br><br>LOGIN: *<strong>${login}</strong>*<br>SENHA: *<strong>${senha}</strong>*<br><br>Pronto!<br><br>Seguindo as orientações acima você poderá usufruir das funcionalidades de rastreamento e monitoramento disponíveis.<br><br>Lembrando que o equipamento está sendo emprestado para prestar o serviço, sendo necessário a devolução e ou autorização para a retirada ao final do contrato, caso não seja autorizado, será cobrado o valor do equipamento conforme assinado no contrato.<br><br>Qualquer dúvida, chama a gente aqui.<br><br>Muito obrigado!<br><br><strong>*Equipe BR Clube!*</strong>`;        
    }

    if (itens === "redeloc" && itens2 === "indefinido") {
        informacoes += `Boa tarde, <strong>*${nome}*</strong>. <br><br>O seu equipamento de rastreador já foi instalado, e nós gostaríamos de te orientar sobre o procedimento de monitoramento do seu veículo. É muito simples!<br><br>*1.* O primeiro passo é baixar, na loja de aplicativos do seu celular, o app <strong>REDELOC</strong>.<br><br>Disponível para Android:<br><strong>*${redelocAndroid}*</strong><br><br>Disponível para IOS:<br><strong>*${redelocIphone}*</strong><br><br>Acesse também pelo nosso site:<br><strong>*${siteRedeloc}*</strong><br><br>*2.* Após baixar o app, você poderá entrar no monitoramento do veículo utilizando seu login e senha no primeiro acesso.<br><br>LOGIN: *<strong>${login}</strong>*<br>SENHA: *<strong>${senha}</strong>*<br><br>Pronto!<br><br>Seguindo as orientações acima você poderá usufruir das funcionalidades de rastreamento e monitoramento disponíveis.<br><br>Lembrando que o equipamento está sendo emprestado para prestar o serviço, sendo necessário a devolução e ou autorização para a retirada ao final do contrato, caso não seja autorizado, será cobrado o valor do equipamento conforme assinado no contrato.<br><br>Qualquer dúvida, chama a gente aqui.<br><br>Muito obrigado!<br><br><strong>*Equipe BR Clube!*</strong>`;        
    }

    if (itens === "rastreieBrasil" && itens2 === "indefinido") {
        informacoes += `Boa tarde, <strong>*${nome}*</strong>. <br><br>O seu equipamento de rastreador já foi instalado, e nós gostaríamos de te orientar sobre o procedimento de monitoramento do seu veículo. É muito simples!<br><br>*1.* O primeiro passo é baixar, na loja de aplicativos do seu celular, o app <strong>RASTREIE BRASIL</strong>.<br><br>Disponível para Android:<br><strong>*${rastreieBrasilAndroid}*</strong><br><br>Disponível para IOS:<br><strong>*${rastreieBrasilIphone}*</strong><br><br>Acesse também pelo nosso site:<br><strong>*${siteRastreieBrasil}*</strong><br><br>*2.* Após baixar o app, você poderá entrar no monitoramento do veículo utilizando seu login e senha no primeiro acesso.<br><br>LOGIN: *<strong>${login}</strong>*<br>SENHA: *<strong>${senha}</strong>*<br><br>Pronto!<br><br>Seguindo as orientações acima você poderá usufruir das funcionalidades de rastreamento e monitoramento disponíveis.<br><br>Lembrando que o equipamento está sendo emprestado para prestar o serviço, sendo necessário a devolução e ou autorização para a retirada ao final do contrato, caso não seja autorizado, será cobrado o valor do equipamento conforme assinado no contrato.<br><br>Qualquer dúvida, chama a gente aqui.<br><br>Muito obrigado!<br><br><strong>*Equipe BR Clube!*</strong>`;        
    }

    informacoes += `</div>`;

    const elementoTexto = document.getElementById("texto");
    elementoTexto.innerHTML = informacoes;
}
