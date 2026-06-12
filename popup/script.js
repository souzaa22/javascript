// Popup Login

function abrirLogin(){
    document.getElementById("popupLogin").style.display="block";
}

function fecharLogin(){
    document.getElementById("popupLogin").style.display="none";
}

function entrar(){
    alert("Login realizado!");
    fecharLogin();
}


// Popup Confirmação

function abrirConfirmacao(){

    let resposta = confirm("Deseja realmente excluir este item?");

    if(resposta){
        alert("Item excluído!");
    }else{
        alert("Operação cancelada!");
    }

}


// Popup Imagem

function abrirImagem(img){

    document.getElementById("popupImagem").style.display="block";

    document.getElementById("imagemGrande").src=img.src;

}

function fecharImagem(){

    document.getElementById("popupImagem").style.display="none";

}


// Popup Curiosidade

function mostrarCuriosidade(){

    const frases=[
        "O polvo possui três corações.",
        "O mel nunca estraga.",
        "A Lua está se afastando da Terra cerca de 3,8 cm por ano.",
        "O Brasil possui seis biomas principais.",
        "Os golfinhos possuem nomes próprios para se identificar."
    ];

    let numero=Math.floor(Math.random()*frases.length);

    alert(frases[numero]);

}


// Popup Aviso

function verificarSenha(){

    const senhaCorreta="1234";

    let senha=prompt("Digite a senha:");

    if(senha===senhaCorreta){
        alert("🎉 Parabéns! Senha correta.");
    }
    else{
        alert("❌ Erro! Senha incorreta.");
    }

}