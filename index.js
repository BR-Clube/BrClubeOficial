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
}
