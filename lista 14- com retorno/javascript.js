function div(){
    console.log("----------------------------------------")
}


// 1 - Dobro de Número


function dobro(n1){
    let total = n1 * 2
    return total
}
let n1 = Number(prompt("Informe um número para ver seu dobro"))
let double = dobro(n1)
console.log(double)
div()

// 2 - Somar dois números

function somar(n,n2){
    let result = n + n2
    return result
}
let n = Number(prompt("Informe um número pra soma"))
let n2 = Number(prompt("Informe o segundo número"))
let somaTotal = somar(n,n2)
console.log(somaTotal)
div()

// 3 - Área de um Quadrado 

function areaQuadrado(lado1,lado2){
    area = lado1 * lado2
    return area
}
let lado1 = Number(prompt("Informe o primeiro lado do quadrado: "))
let lado2 = Number(prompt("Informe o segundo lado do quadrado: "))
let areaTotal = areaQuadrado(lado1,lado2) 
consolelog(areaTotal)
div()

// 4 - Antecessor de um Número

function antecessor(num){
    antes = num - 1
    return antes
}
let num = Number(prompt("Informe um número"))
let antecessorMostrar = antecessor(num)
console.log(antecessorMostrar)
div()

// 5 - Tamanho do texto

function palavra(letras){
    let quant = letras.length
    return "Sua palavra contém: "+quant+" letras"
}
let letras = prompt("Informe uma palavra")
let auxi = palavra(letras)
console.log(auxi)
div()

// 6 - Verificar número maior

function maior (num7, num8){
    if(num7 > num8){
        return "O "+num7+ " é maior"
    } else{
        return "O "+ num8+ " é maior ou igual"
    }
}
let num7 = Number(prompt("Informe o primeiro número"))
let num8 = Number(prompt("Informe o segundo número"))
let retorno = maior(num7, num8)
console.log(retorno)
div()

// Verificar Idade

function verificarIdade(idade){
    if(idade >= 18){
        return "Maior de idade"
    } else{
        return "Menor de idade"
    }
}
let idade = Number(prompt("Informe a idade"))
let verificar = verificarIdade(idade)
console.log(verificar)
div()

// 8 - Número Par ou Ímpar 

function parOuImpar(par){
    if( par % 2 == 0  ){
        return "Seu número é par"
    } else {
        return "Seu número é Impar"
    }
}

let par = Number(prompt("Informe um número"))
let resultado = parOuImpar(par)
console.log(resultado)
div()

// 9 - Calcular Média

function media(n4,n5,n6){
    let somarMedia = (n4+n5+n6) / 3
    return somarMedia
}
let n4 = Number(prompt("Informe a primera nota"))
let n5 = Number(prompt("Informe a segunda nota"))
let n6 = Number(prompt("Informe a terceira nota"))
let mediaResultado = media(n4,n5,n6)
console.log(mediaResultado)
div()

// 10 - Desconto em Produto

function calcularDesconto(preco){
    let desc = preco * 0.10
    let final = preco - desc
    return "O preço com desconto é: "+final
}
let preco = Number(prompt("Informe o preço do produto"))
let desconto = calcularDesconto(preco)
console.log(desconto)
div()