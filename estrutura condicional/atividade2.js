//1
let nota = Number(prompt("Informe a nota do aluno"))
if(nota>=9){
    console.log("Excelente")
}else if(nota>=7){
    console.log("Bom")
}else if(nota>=5){
    console.log("Regular")
}else if(nota<5){
    console.log(" Insuficiente")
}
//2
let nota2 = Number (prompt("informe as notas do aluno"))
let falta = Number(prompt("Informe as faltas do aluno"))
if(nota2>=7 && falta<=10){
    console.log("Aprovado")
}else if(nota2 >=5 && falta <=10){
    console.log("recuperação")
}else {
    console.log(" Reprovado")
}
//3
let idd = Number (prompt("Digite a idade"))
if(idd<12){
    console.log("crianca")
}else if(idd>12 && idd<=17){
    console.log(" adolescente")
} else if(idd>18 && idd<=59){
    console.log("adulto")
}else if(idd>60){
    console.log("idoso")
}
//4
let temp = Number (prompt("digite a temperatura da sua cidade"))
if(temp<= 35){
    console.log("muito quente")
}else if(temp>=25)
{
    console.log("quente")
}else if(temp>=15){
    console.log("agradavel")
}else if(temp<15){
    console.log("frio")
}
//5
let compra = Number(prompt("Informe o valor da compra"))
if(compra >= 500){
    console.log("20% de desconto")
} else if (compra>= 300){
    console.log("15%")
}else if(compra >=100){
    console.log("10%")
}else if(compra<100){
    console.log("sem desconto")
}
//6
let vel = Number(prompt("Informe a velociade"))
if (vel<= 60){
    console.log("Dentro do limite")
}else if(vel<=80){
    console.log("atenção")
}else if(vel<=100){
    console.log("multa leve")
}else if(vel>=100){
    console.log("multa grava")
}


//7
let tur = (prompt("Informe o turno"))
if( tur == M){
    console.log("matuino")
}else if (tur == V){
    console.log("vespertino")
}
else if (tur == N){
    console.log("noturno")
}else {
    console.log("invalido")
}

//8
let imc = Number("Informe o IMC")
if(imc <18,5){
console.log("abaixo do peso")
}else if(imc <25){
console.log(" peso normal")
}
else if(imc <30){
console.log("sobrepeso")
}
//9
let pontos = Number (prompt("Digite a pontuação"))
if(pontos>=1000){
    console.log("Nivel mestre")
}else if(idd>700){
    console.log(" Nivel Avançado")
} else if(idd>400){
    console.log("Nivel Intermediário")
}else{
    console.log("Iniciante")
}
// 10 - Verificação de Horário
let hora = Number(prompt("Digite a hora (0 a 23)"))

if (hora >= 6 && hora <= 11) {
    console.log("Bom dia")
} else if (hora >= 12 && hora <= 17) {
    console.log("Boa tarde")
} else if (hora >= 18 && hora <= 23) {
    console.log("Boa noite")
} else if (hora >= 0 && hora <= 5) {
    console.log("Boa madrugada")
} else {
    console.log("Hora inválida")
}


// 11 - Categoria de Produto
let codigo = Number(prompt("Digite o código do produto"))

if (codigo == 1) {
    console.log("Alimento")
} else if (codigo == 2) {
    console.log("Eletrônico")
} else if (codigo == 3) {
    console.log("Roupas")
} else if (codigo == 4) {
    console.log("Livros")
} else {
    console.log("Categoria inválida")
}


// 12 - Situação Financeira
let saldo = Number(prompt("Digite o saldo"))

if (saldo >= 2000) {
    console.log("Ótima")
} else if (saldo >= 1000) {
    console.log("Boa")
} else if (saldo >= 0) {
    console.log("Regular")
} else {
    console.log("Endividado")
}


// 13 - Classificação de Idade para CNH
let idade = Number(prompt("Digite a idade"))

if (idade < 18) {
    console.log("Não pode dirigir")
} else if (idade < 65) {
    console.log("Pode dirigir")
} else {
    console.log("Renovação especial")
}


// 14 - Avaliação de Atendimento
let nota = Number(prompt("Digite a nota (0 a 10)"))

if (nota >= 9) {
    console.log("Excelente")
} else if (nota >= 7) {
    console.log("Bom")
} else if (nota >= 5) {
    console.log("Regular")
} else {
    console.log("Ruim")
}