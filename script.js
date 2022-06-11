    let btnPrato = false;
    let btnBebida = false;
    let btnSobremesa = false;

function selecionarPrato(elemento){
    const botao = document.querySelector(".selecionadoPrato");
    const btncheck = document.querySelector(".visivel1");
    if(botao !== null && btncheck !== null) {
        botao.classList.remove("selecionadoPrato");
        btncheck.classList.remove("visivel1");
    }
    elemento.classList.add("selecionadoPrato");
    elemento = document.querySelector(".selecionadoPrato .botaoCheck1");
    elemento.classList.add("visivel1");
    btnPrato = true;
    btnConfirmar();
}

function selecionarBebida(elemento){
    const botao = document.querySelector(".selecionadoBebida");
    const btncheck = document.querySelector(".visivel2");
    if(botao !== null && btncheck !== null) {
        botao.classList.remove("selecionadoBebida");
        btncheck.classList.remove("visivel2");
    }
    elemento.classList.add("selecionadoBebida");
    elemento = document.querySelector(".selecionadoBebida .botaoCheck2");
    elemento.classList.add("visivel2");
    btnBebida = true;
    btnConfirmar();
}

function selecionarSobremesa(elemento){
    const botao = document.querySelector(".selecionadoSobremesa");
    const btncheck = document.querySelector(".visivel3");
    if(botao !== null && btncheck !== null) {
        botao.classList.remove("selecionadoSobremesa");
        btncheck.classList.remove("visivel3");
    }
    elemento.classList.add("selecionadoSobremesa");
    elemento = document.querySelector(".selecionadoSobremesa .botaoCheck3");
    elemento.classList.add("visivel3");
    btnSobremesa = true;
    btnConfirmar();
}

function btnConfirmar(){
    let botao = document.querySelector(".fecharPedido");
    let cor = document.querySelector(".botao");
    if(btnPrato === true && btnBebida === true && btnSobremesa === true) {
        botao.innerHTML = `Fechar pedido`;
        cor.classList.add("colorGreen"); 
    }
}