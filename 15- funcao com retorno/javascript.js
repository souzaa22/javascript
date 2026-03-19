//function sem parâmetro e retorno
function soma(){
    let num1 = Number(prompt("Informe o primeiro número: "))
        let num2 = Number(prompt("Informe o segundo número: "))
console.log(soma)
}
function soma2(num3, num4){
let soma = num3 + num4
console.log(soma2)

}
let num3 = Number(prompt("Informe o primeiro número: "))
let num4 = Number(prompt("Informe o Segundo número: "))
soma2(num3 , num4)

function soma3(num5,num6){
    let soma3 = num5+num6
    return soma3
}
function dobro(numero){
    let total = numero* 2
    return total
}
let numero =5
let resul = dobro(numero)
console.log(resul)


function aprovacao(nota1,nota2){
    let media = (nota1+nota2)/2
    if(media>= 7){
        return" aprovado" 
    }else{
        return"Reprovado"
    }
}
//let nota1 = 7
//let nota2 = 3
//let situacao = aprovacao(nota1,nota2)
//console.log(situacao)
function maiorNumero(n1,n2){
    if(n1>n2){
        return"O número "+n1+"é maior"
    }else if(n2>n1){
        return "O número "+n2+"é maior"
    }else{
        return "São iguais"
    }
}

//let n1 = 8
//let n2 = 6
//let result = maiorNumero(n1,n2)
//console.log(result)

function triplo(numero2){
    let total2 = numero2* 3
    return total2
}
let n = Number(prompt("Informe um número"))
let mostrar = triplo(n)
console.log(mostrar)

function contar(palavra){
    if(palavr.length > 10){
        console.log("uau")}else{
console.log("existe palavras marios")
    }
} 
let palavra= prompt("Diga uma palavra")
let letras = contar(palavra)
console.log(letras)