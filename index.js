function pulaLinha() {
    console.log(``);
};

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Nome do associado(a):  ', (resposta) => {

    rl.question('Placa: ', (respostaPlaca) => {

        rl.question('Vencimento do boleto (dia/mês): ', (respostaVencimentoBoleto) => {

            rl.question('Whatsapp: ', (respostaWhatsapp) => {

                rl.question('Endereço: ', (respostaEndereco) => {

                    rl.question('CEP: ', (respostaCep) => {

                        rl.question('E-mail: ', (respostaEmail) => {

                            rl.question('Digite h se homem ou m para mulher: ', (respostaHomemOuMulher) => {

                                if (respostaHomemOuMulher == 'h' | respostaHomemOuMulher == 'H') {
                                    console.log(`\nBem-vindo, ${resposta}`);

                                    pulaLinha();

                                    console.log(`💥Parabéns, você fez uma ótima escolha ao decidir proteger seu Veículo com a BR CLUBE Proteção Veicular!`);

                                    pulaLinha();

                                    console.log(`Você é um dos nossos associados e nossa equipe está comprometida em superar suas expectativas.`);

                                    console.log(`É muito importante que você confira todos os dados para que em caso de uma eventual ocorrência, possamos agilizar o processo e garantir a sua tranquilidade.`);

                                    pulaLinha();

                                    console.log(`📍 Placa: ${respostaPlaca}`);

                                    pulaLinha();

                                    console.log(`⚠ Vencimento dos seus boletos será todo dia: ${respostaVencimentoBoleto}`);

                                    pulaLinha();

                                    console.log(`📭E SERÁ ENVIADO POR WHATSAPP: ${respostaWhatsapp}`);

                                    pulaLinha();

                                    console.log(`Seu endereço é: ${respostaEndereco}`);

                                    pulaLinha();

                                    console.log(`CEP: ${respostaCep}`);

                                    pulaLinha();

                                    console.log(`📧 E-mail: ${respostaEmail}`);

                                    pulaLinha();

                                    console.log(`Parabéns por você escolher a BR CLUBE!`);
                                    console.log(`#UmaNovaExperiência #OsMelhoresBenefícios`);
                                    console.log(`➡🙋CASO NÃO receba o boleto até 5 dias antes do vencimento favor entrar em contato conosco.`);

                                    pulaLinha();

                                    console.log(`NOSSO NÚMERO COMERCIAL:`);
                                    console.log(`(62) 3434-2622`);
                                    console.log(`PARA ASSISTÊNCIA 24H: `);
                                    console.log(`☎ (62) 3434-2622`);

                                } else {
                                    console.log(`\nBem-vinda, ${resposta}`);

                                    pulaLinha();

                                    console.log(`💥Parabéns, você fez uma ótima escolha ao decidir proteger seu Veículo com a BR CLUBE Proteção Veicular!`);

                                    pulaLinha();

                                    console.log(`Você é uma das nossas associadas e nossa equipe está comprometida em superar suas expectativas.`);

                                    console.log(`É muito importante que você confira todos os dados para que em caso de uma eventual ocorrência, possamos agilizar o processo e garantir a sua tranquilidade.`);

                                    pulaLinha();

                                    console.log(`📍 Placa: ${respostaPlaca}`);

                                    pulaLinha();

                                    console.log(`⚠ Vencimento dos seus boletos será todo dia: ${respostaVencimentoBoleto}`);

                                    pulaLinha();

                                    console.log(`📭E SERÁ ENVIADO POR WHATSAPP: ${respostaWhatsapp}`);

                                    pulaLinha();

                                    console.log(`Seu endereço é: ${respostaEndereco}`);

                                    pulaLinha();

                                    console.log(`CEP: ${respostaCep}`);

                                    pulaLinha();

                                    console.log(`📧 E-mail: ${respostaEmail}`);

                                    pulaLinha();

                                    console.log(`Parabéns por você escolher a BR CLUBE!`);
                                    console.log(`#UmaNovaExperiência #OsMelhoresBenefícios`);
                                    console.log(`➡🙋CASO NÃO receba o boleto até 5 dias antes do vencimento favor entrar em contato conosco.`);

                                    pulaLinha();

                                    console.log(`NOSSO NÚMERO COMERCIAL:`);
                                    console.log(`(62) 3434-2622`);
                                    console.log(`PARA ASSISTÊNCIA 24H: `);
                                    console.log(`☎ (62) 3434-2622`);
                                }
                            });
                        });
                    });
                });
            });
        });
    });
});