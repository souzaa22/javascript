for(let i=1; i <= 4; i++) {
console. log("Boa tarde usando for")
}
numero++


//incremento e decremento
let numero = 10
console.log(numero)
 numero ++ 
console.log(numero)
numero -- 
console.log(numero)
numero +=5
console.log(numero)
numero -=2

for(let i=1; i <= 5; i++) {
console. log(i)
}
for(let i = 5; i >= 1; i -- ) {
console.log(i)
}
for(let i = 1; i <= 5; i++) {
let num = Number(prompt("Informe um numero") )
if(num > 10) {
console.log("é maior que 10")
} else {
console.log("é menor que 10")

}
}

let soma = 0
for(let i = 1; i <= 3; i++) {
let num = Number (prompt("Informe um numero") )
soma = soma + num
console. log (soma)
}

/* Peca um numero para o usuario e mostre a tabuada dele*/
let tabuada = Number (prompt ("Escolha um numero") )
for(let i = 1; i <= 10; i++) {
let resultado = tabuada * i
console.log(tabuada,"x", i ,"=",resultado)
}


for(let i = 1; i <= 5; i++) {
let num = Number(prompt("Informe um numero") )
if(num >= 10) {
console.log("Grupo A")
} else {
console.log("Grupo B")

}
}

for(let i = 1; i <= 3; i++) {
let num2 = Number(prompt("Informe sua idade") )
if(num2 >= 18) {
console.log("Maior de idade")
} else {
console.log(" Menor de idade")

}
}