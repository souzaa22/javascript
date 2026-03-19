//1

function dobro(numero){
    let total = numero* 2
    return total
}
let numero =Number(prompt("Informe o número para saber o dobro dele: "))
let resul = dobro(numero)
console.log(resul)

//2
function soma(num1){
    let tot = num1+num2
    return tot
}
let num1 =Number(prompt("Informe o primeiro número: "))
let num2 =Number(prompt("Informe o segundo número: "))
let resultado = soma(num1)
console.log(resultado)
//3
function calcularDobro(valor){
    let dobroNumero = valor * valor
    return dobroNumero
}

let entrada = Number(prompt("Informe o número para saber a área do quadrado: "))
let resposta = calcularDobro(entrada)

console.log(resposta)
//4
function dobro(num){
    let dobroNumero = num -1
    return dobroNumero
}

let valorUsuario = Number(prompt("Informe o número para saber o antecessor dele: "))
let resultadoFinal = dobro(valorUsuario)

console.log(resultadoFinal)
//5
function tamanhoTexto(texto){
    let quantidade = texto.length
    return quantidade
}

let frase = prompt("Digite um texto:")
let resultado2 = tamanhoTexto(frase)

console.log(resultado2)
//6
 function maiorNumero(n1,n2){
    if(n1>n2){
        return"O número "+n1+"é maior"
    }else if(n2>n1){
        return "O número "+n2+"é maior"
    }else{
        return "São iguais"
    }
}
let maior = prompt("Digite sua idade:")
let ttl = (maiorNumero)
//7
 function maiorIdade(idd){
    if(idd>=18){
        return"'Maior de idade"
    }else if(n1<=17){
        return "Menor de idade"
    }else{
        return "Idade inválida"
    }
}