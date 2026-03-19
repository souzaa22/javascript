let idade = 14
console.log(idade >=14)
console.log(" o aluno tem idade maior ou igual a 14/" ,idade >= 14)
if (dade>=14){
    console.log("o aluno pode fazer senai ")
}
let salario =  Number(prompt("Qual seu salario?"))
if (salario >=1500){
    console.log("você terá um aumento")
}
let numero = Number(prompt("Informe um numero:"))
let resto = numer % 2
if (resto== 0){
  console.log("O número é par")
} else {
console. log("O numero é impar")
}

/* Para fazer o curso de panificação do Senai o aluno deve ter
conhecimento de boas práticas na cozinha, verifique se ele tem
esse conheimento e mostre se ele pode ou nao fazer o curso */


let cozinha =prompt(("Você é bom na cozinha?"))
if (cozinha == sim){
    console.log("voce pode fazer o curso")
} else {
    console.log("vc nao pode fazer o curso ")
}
let nota =  Number(prompt("Qual sua nota?"))
if (nota >=50){
    console.log("Você foi aprovado")
} else{
    console.log("Você foi reprovado ")
}

/* Pergunte o dia da semana, se for sábado ou domingo, mostre
"fim de semana", senao, mostre "dia util" */

let semana= (prompt("Qual o dia da semana?"))
if(semana ==sabado ){
    console.log("fim de semana")
}else if (semana == domingo)
{
console.log("fim de semana")  
} else{
    console.log("dia util")
}

/* Pergunte a temperatura para o usuário e mostre um destino com
base nisso.
Se for maior ou igual a 30, "Praia",
Se for maior ou igual a 22, "Parque",
Se for maior ou igual a 15 "Shopping",
Se for menor que 15, "Ficar em Casa" */

let temperatura = (prompt("Qual a temperatura"))
if(tempetratura >=30){
    console.log("Praia")
}else if (temperatura>=22){
    console.log("Parque")
} else if(temperatura>= 15){
    console.log("shopping")
}else {
    console.log("Ficar em casa")
}

/* Ao comprar um ingresso, o usuário deve informar a idade dele e
será direcionado para o filme com base nisso.
Se a idade for menor que 10, pode ver filmes com a classificação
"Livre"
Se a idade for maior ou igual a 10 e menor ou igual a 13, pode
ver filmes com a classificação "10+"
Se a idade for maior ou igual a 14 e menor ou igual a 17, pode
ver filmes com a classificação "14+"
Se a idade for maior ou igual a 18, pode ver qualquer categoria
de filme*/

let usu = Number(prompt("Informe a idade do usuario;"))
if(usu<=10){
    console.log("classificação (livre)")
} else if(usu>= 10 && usu<=13){
    console.log("+10")
} else if(usu >=14 && usu<=17){
    console.log("+14")
}else if(usu>= 18){
    console.log(" Pode ver qualquer categoria")
}