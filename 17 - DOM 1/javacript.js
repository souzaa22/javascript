// 4
function verificarNome(){
    let nome = document.getElementById("nome2").value
    let res = document.getElementById("resNome")

    if(nome === ""){
        res.innerText = "Digite um nome primeiro!"
    } else {
        res.innerText = "Olá, " + nome
    }
}

// 5
function modoEscuro(){
    document.body.style.backgroundColor = "black"
    document.body.style.color = "white"
}

// 6
function verificarNota(){
    let nota = document.getElementById("nota").value
    let res = document.getElementById("resNota")

    if(nota >= 7){
        res.innerText = "Aluno aprovado"
    } else {
        res.innerText = "Aluno reprovado"
    }
}

// 7
function surpresa(){
    document.getElementById("msgSurpresa").innerText =
    "Você encontrou a mensagem secreta!"
}

// 8
function destacar(){
    let texto = document.getElementById("texto1")
    texto.style.color = "red"
    texto.style.fontWeight = "bold"
}

// 9
function contarCaracteres(){
    let texto = document.getElementById("texto2").value
    document.getElementById("resCaracteres").innerText =
    "Você digitou " + texto.length + " caracteres"
}

// 10
function mudarCor(){
    document.getElementById("texto3").style.color = "blue"
}

// 12
function esconderTexto(){
    document.getElementById("texto4").style.display = "none"
}

// 13
function calcularMeses(){
    let idade = document.getElementById("idadeMeses").value
    let meses = idade * 12

    document.getElementById("resMeses").innerText =
    "Você já viveu " + meses + " meses"
}

// 14
function verificarIdade(){
    let idade = document.getElementById("idadeMaior").value
    let res = document.getElementById("resIdade")

    if(idade >= 18){
        res.innerText = "Você é maior de idade"
    } else {
        res.innerText = "Você é menor de idade"
    }
}