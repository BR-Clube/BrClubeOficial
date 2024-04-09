function enviarFormulario() {
    const dataInput = document.getElementById('data');
    const dataValue = dataInput.value;
    const partesData = dataValue.split('-');
    const dia = partesData[2];
    const mes = partesData[1];
    const anoFormatado = partesData[0];
    const dataFormatada = `${dia}/${mes}/${anoFormatado}`;

    const data2Input = document.getElementById('data2');
    const data2Value = data2Input.value;
    const partesData2 = data2Value.split('-');
    const dia2 = partesData2[2];
    const mes2 = partesData2[1];
    const anoFormatado2 = partesData2[0];
    const dataFormatada2 = `${dia2}/${mes2}/${anoFormatado2}`;

    var numero = document.getElementById('numero').value;
    var nome = document.getElementById('nome').value;
    var rg = document.getElementById('rg').value;
    var cpf = document.getElementById('cpf').value;
    var endereco = document.getElementById('endereco').value;
    var debito = document.getElementById('debito').value;
    var entrada = document.getElementById('entrada').value;
    var parcelas = document.getElementById('parcelas').value;
    var valorParcela = document.getElementById('valorParcela').value;

    var texto = `<div style="text-align: justify; font-size: 10px">`;

    texto += `<div style="text-align: center"><p><strong>TERMO ADITIVO N.º ${numero} AO INSTRUMENTO DE CONFISSÃO DE DÍVIDA N.º ${numero}.</strong></p></div>`;
    texto += `<p><strong>CREDOR(A):</strong> ASSOCIAÇÃO BR CLUBE DE BENEFÍCIOS, pessoa jurídica de direito privado, sem fins lucrativos, inscrita no CNPJ nº `;
    texto += `40.410.992.0001/40 com sede na Av. Deputado Jamel Cecílio, nº 2496, andar 14 sala 141, Jardim Goiás, nesta capital, mentora da Associação Br `;
    texto += `clube de benefícios, sem fins lucrativos.</p>`;
    texto += `<p><strong>DEVEDOR(A): ${nome} Brasileira, Portador(a) do RG ${rg} e do CPF: ${cpf}, Residente e Domiciliado À ${endereco}.</p>`;
    texto += `<p>As partes acima qualificadas querem retificar, como de fato RETIFICAM as cláusulas da Confissão de Dívida nº ${numero} referente oriunda da `;
    texto += `proteção veicular, nos termos que se seguem:</p>`;
    texto += `<p>As partes celebram a presente renegociação de forma livre e consciente, sendo a mesma decorrente do inadimplemento do(a) `;
    texto += `Devedor(a), referente parcelas em atraso, com valor total de R$ ${debito}. O devedor solicitou o primeiro pagamento no valor de R$ ${entrada} `;
    texto += `e o pagamento posterior do saldo devedor remanescente em ${parcelas} vezes de R$ ${valorParcela}. A proposta foi acatada pelo credor, que executou a `;
    texto += `cobrança da entrada, que deverá ser paga até o dia ${dataFormatada}, e fará cobrança do valor remanescente nos meses subsequentes, até `;
    texto += `completa quitação.</strong></p>`;
    texto += `<p>As parcelas decorrentes do presente acordo são representadas por boletos bancários, entregues ao <strong>DEVEDOR(A)</strong> em datas próximas ao vencimento.</p>`;
    texto += `<p>Cumprida a condição de validade supracitada, o não pagamento de quaisquer das parcelas do presente acordo redundará no vencimento `;
    texto += `antecipado da dívida, facultando ao credor, imediato ajuizamento da Execução Judicial do Acordo, ficando ajustado uma multa de 10% (dez por `;
    texto += `cento), juros de 1% ao mês, honorários advocatícios de 05% (cinco) sobre o valor das parcelas não quitadas, além do pagamento de despesas `;
    texto += `administrativas e custas processuais, caso haja, independentemente de interpelação. Facultar-se-á à Credora, imediato ajuizamento da execução `;
    texto += `judicial do acordo, pois, a presente confissão de dívida é título executivo extrajudicial, nos exatos termos do artigo 784, inciso III, do Código de `;
    texto += `Processo Civil.</p>`;
    texto += `</div>`;

    texto += `<br><br><div style="text-align: right">Goiânia, ${dataFormatada2}</div><br><br><div style="text-align: center">________________________________<br>${nome}<br>CPF: ${cpf}</div><br><br>`;

    // Criar e inserir a imagem
    const imagem = document.createElement('img');
    imagem.src = '../Images/assinatura.png'; // Altere o caminho conforme necessário
    imagem.alt = 'Assinatura do Diretor';
    imagem.width = '120'; // Altere o tamanho conforme necessário
    imagem.style.display = 'block'; // Define a imagem como bloco
    imagem.style.margin = '0 auto'; // Define margens automáticas para centralizar horizontalmente


    // Atualize o conteúdo do elemento com id 'texto'
    const elementoTexto = document.getElementById("texto");
    elementoTexto.innerHTML = `${texto}`;
    elementoTexto.appendChild(imagem); // Adicione a imagem ao elemento
}

function downloadPDF() {
    const form = document.getElementById('texto');

    form.innerHTML = '<img src="../Images/brclube2.png" alt="Logo da Empresa" width="60px"><br><br>' + form.innerHTML;

    // Configuração das opções do html2pdf
    const options = {
        margin: 15, // Margens em pixels
        filename: 'termo_negociacao.pdf', // Nome do arquivo PDF
        image: { type: 'jpeg', quality: 1 }, // Opções de imagem
        html2canvas: { scale: 2 }, // Configurações do html2canvas
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' } // Configurações do jsPDF
    };

    html2pdf().set(options).from(form).save();
}
