function copiarTexto() {
    // Seleciona o elemento de texto
    const elementoTexto = document.getElementById("texto");

    const textoParaCopiar = document.getElementById("texto");
    const textoSelecionado = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(textoParaCopiar);
    textoSelecionado.removeAllRanges();
    textoSelecionado.addRange(range);


    //copia o texto para a área de transferência
    document.execCommand('copy');

    // Rola a página para o topo
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    console.log("Texto copiado."); // Adicione esta linha para verificar se a função está sendo chamada

}

function formatarTelefone(input) {
    // Remove todos os caracteres não numéricos
    let rawValue = input.value.replace(/\D/g, '');

    // Adiciona o hífen entre o DDD e o restante do número
    if (rawValue.length >= 2) {
        rawValue = `(${rawValue.substring(0, 2)}) ${rawValue.substring(2)}`;
        if (rawValue.length > 10) {
            rawValue = `${rawValue.substring(0, 10)}-${rawValue.substring(10)}`;
        }
    }

    // Atualiza o valor do input
    input.value = rawValue;
}
