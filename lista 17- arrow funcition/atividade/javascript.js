 //1
let dobro = (n1) =>{
    return n1*2
}
let n1 = Number(prompt("Informe o número para ver o dobro dele: "))
console.log(dobro(n1))

//2
let somar = (n2,n3) =>{
    return n2+n3
}
let n2 = Number(prompt("Informe o primeiro número:  "))
let n3 = Number(prompt("Informe o segundo número para saber a soma dos dois: "))
console.log(somar(n2,n3))
//3
let quadrado = (n4) =>{
    return n4*n4
}
let n4 = Number(prompt("Informe o número para ver o quadrado dele: "))
console.log(quadrado(n4))
//4
let sucessor = (n5) =>{
    return n5+1
}
let n5 = Number(prompt("Informe o número para ver o sucessor dele: "))
console.log(sucessor(n5))
//5
let maiornumero = (n6,n7) =>{
    if(n6>n7){
        return "O primeiro número é maior"
    } else if(n6<n7){
        return "O segundo número é maior"
    } else {
        return "Os números são iguais"
}
}
let n6 = Number(prompt("Informe o primeiro número:  "))
let n7 = Number(prompt("Informe o segundo número para saber a qual é maior dos dois: "))
console.log(maiornumero(n6,n7))
//6

let parOuImpar = (par) => {
    if (par % 2 == 0 ) {
        return "Par"
    } else  {
        return "Impar"
    }
}
let par = Number(prompt("Insira um número"))
console.log(parOuImpar(par))

//7

let verificarnumero = (n8) =>{
    if(n8>0){
        return "Positivo"
    } else if(n8<0    ){
        return "Negativo"
    } else {
        return "O número é igual a 0"
}
}
let n8 = Number(prompt("Informe o primeiro número:  "))
console.log(maiornumero(n8))
//8
let media = (m1,m2,m3) =>{
    return (m1+m2+m3)/3
}
let m1 = Number(prompt("Informe o primeiro número:  "))
let m2 = Number(prompt("Informe o segundo número: "))
let m3 = Number(prompt("Informe o segundo terceiro para saber a média dos três: "))

console.log(media(m1,m2,m2))
// 9 
let calcularDesconto = (preco) => {
    return preco * 0.8
}

let preco = Number(prompt("Informe o preço do produto: "))
console.log("Preço com desconto: " + calcularDesconto(preco))


// 10 
let verificarAprovacao = (a1,a2) => {
    let media2 = (a1 + a2) / 2

    if (media2 >= 7) {
        return "Aprovado"
    } else if (media2 >= 5) {
        return "Recuperação"
    } else {
        return "Reprovado"
    }
}

let a1 = Number(prompt("Informe a primeira nota: "))
let a2 = Number(prompt("Informe a segunda nota: "))

console.log(verificarAprovacao(a1, a2))