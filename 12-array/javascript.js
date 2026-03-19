//Array

let frutas2 = ["Maça", "Banana","Laranja"]
console.log(frutas2)
let frutas = ["Maça", "Banana", "Laranja"]
// 0
console.log(frutas)

console.log(frutas[0]) //Maçã
console.log(frutas[1]) //Banana
console.log(frutas[2]) //Laranja

console.log(frutas.length)

frutas.push("Uva") // Adiciona no final
console.log(frutas)

frutas.unshift("Morango") //Adiciona no comeco
console.log(frutas)
//Remover
frutas.pop() //Remove o último
console. log(frutas)
frutas.shift() //Remove no começo
console. log(frutas)
//Editar
frutas[1] = "Abacaxi"
console.log(frutas)
//Encontrar uma posição
console.log(frutas.indexOf("Laranja")) //2
console.log(frutas.indexOf("Maçã")) //0
console.log(frutas.indexOf("Banana")) //-1 é quando nao existe
let amigos =['Felipe','Joana',"Luana",'Whashington',"Rebeca"]
 for(let i = 0; i<amigos.length; i++){
    console.log(amigos[i])
 }
let paises =['Brasil','Holanda',"Gales",'EUA',"Uruguai"]
 for(let i = 0; i<paises.length; i++){
    console.log(paises[i])
 }
 let cores = ["azul", "vermelho", "Laranja"]


console.log(cores[0]) //azul
console.log(cores[1]) //vermelho
console.log(cores[2]) //Laranja

console.log(cores.length)

cores.push("preto")
cores.push("branco") // Adiciona no final
console.log(cores)

cores.unshift("marrom") //Adiciona no comeco
console.log(cores)
cores.shift() //Remove no começo
console. log(cores)
 for(let i = 0; i<cores.length; i++){
    console.log(cores[i])
 }

 let notas = []; 

for (let i = 0; i < 6; i++) {
  notas[i] = Number(prompt("Digite a nota " + (i + 1)));
}

for (let i = 0; i < 6; i++) {
  console.log("Nota " + (i + 1) + ": " + notas[i]);
}

let valores = [];

for (let posicao = 0; posicao < 5; posicao++) {
  valores[posicao] = Number(prompt("Digite a nota " + (i + 1)));
}

for (let posicao = 0; posicao < 6; posicao++) {
  console.log("Nota " + (i + 1) + ": " + valores[posicao]);
}