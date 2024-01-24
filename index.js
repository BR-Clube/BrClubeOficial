function copiarTexto() {
    const textoParaCopiar = document.getElementById("texto");
    const textoSelecionado = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(textoParaCopiar);
    textoSelecionado.removeAllRanges();
    textoSelecionado.addRange(range);
    document.execCommand("copy");
}

function formataDataEHorario(){
    let data = new Date(),
    dia = data.getDate().toString().padStart(2, '0'),
    mes = (data.getMonth()+1).toString().padStart(2, '0'),
    ano = data.getFullYear();
    hora = data.getHours().toString().padStart(2, '0'),
    minuto = data.getMinutes().toString().padStart(2, '0');
return `${dia}/${mes}/${ano} - Horário: ${hora}h:${minuto}`;
}

function formataData(){
    let data = new Date(),
    dia = data.getDate().toString().padStart(2, '0'),
    mes = (data.getMonth()+1).toString().padStart(2, '0'),
    ano = data.getFullYear();
return `${dia}/${mes}/${ano}`;
}

function formataMes(){
    let data = new Date(),
    mes = (data.getMonth()+1).toString().padStart(2, '0'),
    ano = data.getFullYear();
return `${mes}/${ano}`;
}