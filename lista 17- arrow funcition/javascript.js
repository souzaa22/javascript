// Função com retonro
function somar1(n1, n2){
    return n1+n2
}
// Função Anônima

    let somar2 = function(n3,n4){
    return n3 + n4
}
console.log(somar2(1,2))
// Arrow Function - Função da seta
let somar3 = (n5,n6) => { //=> function
    return n5+n6
}
console.log(somar3(1,2))
console.log("-------------------")
//Peça um número e verifique se é positivo, negativo ou zero
let classificar = (numero) => { // => é igual a "function"
    if(numero<0) {
        return "Negativo"
    } else if (numero>0) {
        return "Positivo"
    } else {
        return "Zero"
    }
}
let numero = Number(prompt("Qual o número?"))
console.log(classificar(numero))

console.log("-------------------")

let imparOuPar = (num) => {
    let aux = num % 2
    if (aux == 0) {
        return "Par"
    } else {
        return "Impar"
    }
}
let num = Number(prompt("Qual o número?"))
console.log(imparOuPar(num))

console.log("-------------------")

let dobro1 = (n) => {
    return n * 2
}
let dobro2 = n => n * 2
console.log(dobro1(5))
console.log(dobro1(5))

console.log("-------------------")

//Peça um número para o usuário, se for menor ou igual a 10, retorne (numero + 3 * 6 - 1) senão, retorne (numero / 2 + 3 * 19)

let user = (num1) => {
    if (num1 <=10) {
        return num1 + 3 * 6 - 1
    } else {
        return num1 / 2 + 3 * 19
    }
}
let userNum = Number(prompt("Informe um número"))
console.log(user(num1))