//1
let num2 = Number(prompt("Informe sua idade:") )
let resultado3 = num2 >= 18? "maior de idade" : 
"menor de idade"
console.log(resultado3)
//2
let par = Number(prompt("Informe um numero:") )
let resultado = num2 >= 18? "maior de idade" : 
"menor de idade"
console.log(resultado3)
//3
let nota = Number(prompt("Informe sua nota:") )
let res = nota >= 6 ? "Aprovado" : 
"Negativo"
//4
let saldo = Number(prompt("Informe um numero:") )
let valor = saldo >= 0 ? "Saldo positivo" : 
"saldo negativo"
//5
let compra = Number(prompt("Informe o valor da compra:") )
let desc = compra >= 100 ? "Você vai receber 10% de desconto" : 
compra
//6 
let nota2 = Number(prompt("Informe um numero:") )
let abc = nota2 >= 18? "maior de idade" : 
"menor de idade"
console.log(resultado3)
//7 - Login Simples
let usuario = prompt("Informe o usuário:")
let resultado7 = usuario === "admin" ? "Acesso liberado" : "Acesso negado"
console.log(resultado7)


//8 - Temperatura
let temperatura = Number(prompt("Informe a temperatura:"))
let resultado8 = temperatura > 30 ? "Está quente" : "Temperatura normal"
console.log(resultado8)


//9 - Número Positivo ou Negativo
let numero = Number(prompt("Informe um número:"))
let resultado9 = numero > 0 ? "Número positivo" : "Número negativo ou zero"
console.log(resultado9)


//10 - Faixa Etária
let idade = Number(prompt("Informe a idade:"))
let resultado10 =
    idade < 12 ? "Criança" :
    idade < 18 ? "Adolescente" :
    idade < 60 ? "Adulto" :
    "Idoso"
console.log(resultado10)


//11 - Velocidade do Veículo
let velocidade = Number(prompt("Informe a velocidade:"))
let resultado11 = velocidade > 80 ? "Multado" : "Dentro do limite"
console.log(resultado11)


//12 - Compra Aprovada
let valor2 = Number(prompt("Informe o valor da compra:"))
let limite = Number(prompt("Informe o limite do cartão:"))
let resultado12 = valor2 <= limite ? "Compra aprovada" : "Compra recusada"
console.log(resultado12)


//13 - Sistema de Pontuação de Jogo
let pontuacao = Number(prompt("Informe a pontuação do jogador:"))
let resultado13 =
    pontuacao < 100 ? "Iniciante" :
    pontuacao < 500 ? "Intermediário" :
    pontuacao < 1000 ? "Avançado" :
    "Mestre"
console.log(resultado13)
