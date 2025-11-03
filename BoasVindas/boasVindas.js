function enviarFormulario() {
  // Campos do formulário
  const nome = document.getElementById('nome').value;
  const placa = document.getElementById('placa').value;
  const boleto = document.getElementById('boleto').value; // dia (número)
  const telefone = document.getElementById('telefone').value;
  const endereco = document.getElementById('endereco').value;
  const cep = document.getElementById('cep').value;
  const email = document.getElementById('email').value;
  const formaPagamento = document.getElementById('formaPagamento').value;

  // Gênero
  const generoElement = document.querySelector('input[name="genero"]:checked');
  const genero = generoElement ? generoElement.value : '';

  // 1) Saudação (🎉 + 💙💙, com flexão)
  let saudacao = '';
  if (genero === 'm') {
    saudacao = `
      🎉 <b>Bem-vindo, ${nome}!</b><br>
      Você agora faz parte da <b>comunidade BR Clube</b>!<br>
      Nossa missão é <b>cuidar do que é importante para você</b> e estar ao seu lado sempre que precisar.<br>
      Com <b>excelência, solidez e confiança</b>, construímos proteção patrimonial séria e verdadeira para você e sua família. 💙💙
      <br><br>
    `;
  } else if (genero === 'f') {
    saudacao = `
      🎉 <b>Bem-vinda, ${nome}!</b><br>
      Você agora faz parte da <b>comunidade BR Clube</b>!<br>
      Nossa missão é <b>cuidar do que é importante para você</b> e estar ao seu lado sempre que precisar.<br>
      Com <b>excelência, solidez e confiança</b>, construímos proteção patrimonial séria e verdadeira para você e sua família. 💙💙
      <br><br>
    `;
  } else {
    saudacao = `
      🎉 <b>Bem-vindo(a), ${nome}!</b><br>
      Você agora faz parte da <b>comunidade BR Clube</b>!<br>
      Nossa missão é <b>cuidar do que é importante para você</b> e estar ao seu lado sempre que precisar.<br>
      Com <b>excelência, solidez e confiança</b>, construímos proteção patrimonial séria e verdadeira para você e sua família. 💙💙
      <br><br>
    `;
  }

  // 2) Conferência dos dados
  const dados = `
    <b>✅ Confira seus dados cadastrados:</b><br>
    🅿 <b>Placa:</b> ${placa}<br>
    📍 <b>Endereço:</b> ${endereco}<br>
    📬 <b>CEP:</b> ${cep}<br>
    📧 <b>E-mail:</b> ${email}<br>
    📲 <b>Telefone para contato:</b> ${telefone}<br>
    <small><i>Se encontrar algum erro ou houver mudança de endereço, e-mail, telefone ou CEP, por favor nos avise prontamente para mantermos seu cadastro atualizado.</i></small>
    <br><br>
  `;

  // 3) Forma de pagamento (dinâmica)
  let pagamento = `<b>💳 Forma de pagamento da mensalidade:</b> ${formaPagamento === 'cartao' ? 'Cobrança recorrente no cartão' : (formaPagamento === 'boleto' ? 'Boleto' : '')}<br><br>`;

  if (formaPagamento === 'cartao') {
    pagamento += `
      Sua mensalidade será <b>lançada automaticamente</b> no cartão na data combinada. ✅<br>
      ✅ Sem boletos • ✅ Sem fricção • ✅ Mais comodidade<br><br>
    `;
  } else if (formaPagamento === 'boleto') {
    pagamento += `
      <b>Vencimento escolhido:</b> dia <b>${boleto}</b> de cada mês.<br>
      O <b>boleto será enviado pelo WhatsApp</b> até <b>5 dias antes</b> do vencimento.<br>
      Para <b>evitar atraso</b>, o <b>pagamento em dia é impreterível/imprescindível</b> para manter sua <b>proteção ativa</b> — com <b>todos os seus benefícios</b>.<br>
      <b>Não recebeu o boleto até 5 dias antes?</b> Avise-nos com a <b>maior brevidade possível</b> para providenciarmos imediatamente.<br><br>
      <b>Quer mais comodidade?</b><br>
      Você pode optar pela <b>cobrança recorrente no cartão</b> (não usa limite; funciona como assinatura):<br>
      🔗 <a href="https://portal.sivisweb.com.br/loja/012/login" target="_blank" rel="noopener">Cadastrar cartão agora</a>
      <br><br>
    `;
  }

  // 4) Canais oficiais
  const canais = `
    <b>🆘 Canais oficiais</b><br>
    <b>FALE CONOSCO (Comercial):</b> 4020-0164<br>
    <b>ASSISTÊNCIA 24h (Brasil):</b> WhatsApp: 4020-0164 • Telefone: 4020-0164
    <br><br>
  `;

  // 5) Continue com a BR Clube
  const continuar = `
    <b>🚀 Continue com a BR Clube</b><br>
    Fique por dentro de benefícios, descontos e conteúdos exclusivos para associados:<br>
    🌐 <a href="https://www.brclube.org" target="_blank" rel="noopener">www.brclube.org</a><br>
    📸 <a href="https://instagram.com/brclubeoficial" target="_blank" rel="noopener">@brclubeoficial</a>
    <br>
  `;

  // Render
  const elementoTexto = document.getElementById('texto');
  elementoTexto.innerHTML = `${saudacao}${dados}${pagamento}${canais}${continuar}`;

  console.log("Formulário enviado!");
}

function limparFormulario() {
  // Campos de texto
  ['nome','placa','boleto','telefone','endereco','cep','email'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });

  // Select forma de pagamento
  const forma = document.getElementById('formaPagamento');
  if (forma) forma.value = '';

  // Radios de gênero
  const marcado = document.querySelector('input[name="genero"]:checked');
  if (marcado) marcado.checked = false;

  // Mensagem exibida
  const out = document.getElementById('texto');
  if (out) out.innerHTML = '';

  console.log("Formulário limpo!");
}
