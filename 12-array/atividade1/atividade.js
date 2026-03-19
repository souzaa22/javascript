//1
let filme = []; 

for (let i = 0; i < 3; i++) {
 let aux =(prompt("Digite o filme preferido "));
filme.push(aux)
}
console.log(filme[0])

//2
let frutas = []; 

for (let i = 0; i < 5; i++) {
 let aux =(prompt("Digite o nome da sua fruta preferida"));
frutas.push(aux)
}
console.log(frutas[2])
//3
let cores = []; 

for (let i = 0; i < 5; i++) {
 let aux =(prompt("Digite o nome de três cores"));
cores.push(aux)
}
console.log(cores)
cores.push("branco") // Adiciona no final
console.log(cores)
//4
let cores2 = []; 

for (let i = 0; i < 5; i++) {
 let aux =(prompt("Digite o nome de quatro cores"));
cores2.push(aux)
}
console.log(cores2)
cores2.push("branco") // Adiciona no final
console.log(cores2)
cores2.pop() //Remove o último
console. log(cores2)
//5
let cidades = ["São Paulo", "Rio de Janeiro"];

cidades.unshift("Guarulhos"); // adiciona no início

for (let i = 0; i < cidades.length; i++) {
  console.log(cidades[i]);
}

//6
let animais = ["Cachorro", "Gato", "Pássaro"];

animais.shift(); // remove o primeiro

for (let i = 0; i < animais.length; i++) {
  console.log(animais[i]);
}

//7
let carros = ["Gol", "Civic", "Corolla", "Onix"];

console.log("Quantidade de carros: " + carros.length);

//8
let numeros = [];

numeros.push(10);
numeros.push(20);
numeros.push(30);

numeros.unshift(5); // adiciona no início
numeros.pop(); // remove o último
numeros.shift(); // remove o primeiro

for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}

console.log("Tamanho do array: " + numeros.length);

//9
let notas = [];

for (let i = 0; i < 6; i++) {
  notas[i] = Number(prompt("Digite a nota " + (i + 1)));
}

for (let i = 0; i < 6; i++) {
  console.log("Nota " + (i + 1) + ": " + notas[i]);
}
