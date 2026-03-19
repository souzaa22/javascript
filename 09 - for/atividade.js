//1
for(let i=1; i <= 30; i++) {
console. log(i)
}
//2
for(let i = 30; i >= 1; i -- ) {
console.log(i)
}
//3
for(let i = 1; i <= 5; i++) {
let num = Number(prompt("Informe um numero") )
if(num >= 50) {
console.log("ACIMA DA MÉDIA")
} else {
console.log("ABAIXO DA MÉDIA")
}
}
//4
let tabuada = Number (prompt ("Escolha um numero") )
for(let i = 1; i <= 10; i++) {
let resultado = tabuada * i
console.log(tabuada,"x", i ,"=",resultado)
}
//5
let n = patinho(prompt("Digite a quantidade de patinhos:"));

for (let i = n; i > 0; i--) {
  console.log(i + " patinhos foram passear");
  console.log("Além das montanhas para brincar");
  console.log("A mamãe gritou:");
  console.log("Quá, quá, quá, quá");
}

//6
for(let i = 1; i <= 10; i++) {
let num4 = Number(prompt("Informe sua idade") )
if(num4 >= 18) {
console.log("é maior de idade")
} else {
console.log("é menor de idade")

}
}
//7
for(let i = 1; i <= 5; i++) {
let num5 = Number(prompt("Informe seu voto ") )
if(num5 <= 4) {
console.log("Seu voto foi para algum candidato")
} else if (num5 = 5 ){
console.log("voto nulo")}
else {
console.log("voto em branco")
}
}
//8
let soma = 0
for(let i = 1; i <= 5; i++) {
let num = Number (prompt("Informe um numero") )
soma = soma + num
console. log (soma)
}
//9 
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}   

//10 

let n1 = Number(prompt("Digite o numero inicial:"));
let n2 = Number(prompt("Digite o numero final:"));

for (let i = n1; i <= n2; i++) {
    console.log(i);
}