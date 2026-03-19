// FUNCOES DECLARATIVAS
let a = 10
let b = 5
console.log(a+b)

let c = 54
let d = 14
console.log(c+d)

function mensagem() {
    console.log("Primeira função")
}
mensagem()
mensagem()
mensagem()
mensagem()

function saudacao() {
    let nome = prompt("Qual seu nome?")
    console.log("olá",nome)
}
saudacao()
function soma () {
let n1 = Number (prompt("Digite um número") )
let n2 = Number (prompt("Digite um numero") )
let soma = n1+n2
console.log(soma)
}
soma()
function nota () {
let n3 = Number (prompt("Digite a primeira nota") )
let n4 = Number (prompt("Digite a segunda nota") )
if((n3+n4)/2>7){
console.log("aprovado")
} else{
    console.log("reprovado")
}
}
 
function jogo() {
let pontuacao = Number (prompt("Qual a pontuacao?") )
if (pontuacao >= 3000) {
console.log("Vencedor")
} else if (pontuacao >= 2200) {
console.log("Segundo Lugar")
} else if (pontuacao >= 1800) {
console.log("Terceiro Lugar")
} else {
console.log("Não foi dessa vez")
}}
jogo ()