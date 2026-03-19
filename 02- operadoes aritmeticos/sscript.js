let numero1 = 5
let numero2 = 7
let soma = numero1 + numero2
let subtracao = numero1 - numero2
let divisao = numero1 / numero2
let multiplicacao = numero1 + numero2
let modulo = numero1 % numero2  

console.log(soma)
console.log(subtracao)
console.log(divisao)
console.log(multiplicacao)
console.log(modulo)

let preco = Number (prompt("Qual o valor do produto?") )
let quantidade = Number (prompt ("Qual a quantidade do produto?") )
let total = preco * quantidade
console.log("0 total a pagar é: R$"+ total)


/*Um grupo de amigos foi a um restaurante, e no final decidiram
dividir a conta, faça um programa que pergunte a quantidade de
amigos e o total da conta e mostre quanto cada um deve pagar*/

let qntd = Number (prompt ("Qual a quantidade de amigos?") )

let prc = Number (prompt ("Quanto custou?") )

let div = prc / qntd
console.log("0 total a pagar é: R$"+ div)

/* Três amigos decidiram juntos comprar uma pizza, cada amigo irá
contribuir com uma quantidade de valor. Faça um programa que
receba o valor que cada amigo contribuiu e mostre quantos eles ten
juntos */

let amigos = 3
let ajuda = Number (prompt  ("Quanto  o 1 você ajudou ?") )
let ajuda2 = Number (prompt ("Quanto o 2 você ajudou ?") )
let ajuda3 = Number (prompt ("Quanto o 3 você ajudou ?") )
let somar = ajuda + ajuda2 + ajuda3
console.log("0 total ajudado é: R$"+ somar)

let contador = 0
contador++ //++ = +1
console.log(contador) //1
contador -- // -- =-1
console.log(contador) //0
contador+=5
console.log(contador) //5
contador -= 3
console.log(contador) //2

