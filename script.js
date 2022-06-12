    let btnPrato = false;
    let btnBebida = false;
    let btnSobremesa = false;
    let btnFinalizar = false;
    let newprato,newbebida, newsobremesa, total;

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
        btnFinalizar = true;
    }
}

function finalizar(){
    const alterar = document.querySelector(".finalizarPedido");
    if(btnFinalizar === true){
        escolha();
        alterar.classList.remove("escondido");
    }

}

function escolha(){

    let prato = document.querySelector(".selecionadoPrato .item h1");
    newprato = prato.innerHTML;
    let valorPrato = document.querySelector(".selecionadoPrato .item h3");
    let newValorPrato = valorPrato.innerHTML;
    let bebida = document.querySelector(".selecionadoBebida .item h1");
    newbebida = bebida.innerHTML;
    let valorBebida = document.querySelector(".selecionadoBebida .item h3");
    let newValorBebida = valorBebida.innerHTML;
    let sobremesa = document.querySelector(".selecionadoSobremesa .item h1");
    newsobremesa = sobremesa.innerHTML;
    let valorSobremesa = document.querySelector(".selecionadoSobremesa .item h3");
    let newValorSobremesa = valorSobremesa.innerHTML;
    
    newValorPrato = tirarSifrao(newValorPrato);
    newValorBebida = tirarSifrao(newValorBebida);
    newValorSobremesa = tirarSifrao(newValorSobremesa);

    let item = document.querySelector(".prato h1");
    item.innerHTML = `${newprato}`;    
    let Valor = document.querySelector(".prato h2");
    Valor.innerHTML = `${newValorPrato}`;
    item = document.querySelector(".bebida h1");
    item.innerHTML = `${newbebida}`;    
    Valor = document.querySelector(".bebida h2");
    Valor.innerHTML = `${newValorBebida}`;
    item = document.querySelector(".sobremesa h1");
    item.innerHTML = `${newsobremesa}`;    
    Valor = document.querySelector(".sobremesa h2");
    Valor.innerHTML = `${newValorSobremesa}`;

    newValorPrato = TransformaPonto(newValorPrato);
    newValorPrato = TransformaNumero(newValorPrato);
    newValorBebida = TransformaPonto(newValorBebida);
    newValorBebida = TransformaNumero(newValorBebida);
    newValorSobremesa = TransformaPonto(newValorSobremesa);
    newValorSobremesa = TransformaNumero(newValorSobremesa);

    total = newValorPrato + newValorBebida + newValorSobremesa;
    total = total.toFixed(2);
    
    let Total = document.querySelector(".resultado h2");
    Total.innerHTML = `R$ ${total}`;

    
}

function Pedir(){
    let nome = prompt("Digite seu nome:");
    let endereco = prompt("Digite seu endereço:");
    Mensagem(newprato, newbebida, newsobremesa, total, nome, endereco);
}

function voltar(){
    const alterar = document.querySelector(".finalizarPedido");
    alterar.classList.add("escondido");
}

function tirarSifrao (x){
    x = x.replace("R$", "");
    return x;
}

function TransformaPonto(x){
    x = x.replace(",", ".");
    return x;
}

function TransformaNumero(x){
    x = parseFloat(x);
    return x;
}

function Mensagem(prato, bebida, sobremesa, total, nome, endereco){

    let numero = 5562985810096;
    let mensagem = "Olá, gostaria de fazer o pedido:\n- Prato: " + prato + "\n- Bebida: " + bebida + "\n- Sobremesa: " 
    + sobremesa + "\nTotal: " + total + "\n\nNome: " + nome + "\nEndereço: " + endereco + "\n";
    mensagem = encodeURIComponent(mensagem);

    window.open("https://wa.me/"+numero+"?text="+mensagem);
}