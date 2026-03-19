//1
let contador = 1
while(contador <= 10){
console. log(contador)
contador++
}
//2
let tabuada = Number (prompt ("Escolha um numero") )
for(let i = 1; i <= 10; i++) {
let resultado = tabuada * i
console.log(tabuada,"x", i ,"=",resultado)
}
//3
for(let i = 10; i >= 1; i -- ) {
console.log(i)
}
//4

let senha2 = prompt ("qual a senha?")
while ( senha2 != "12345") {
senha2 = prompt("Errou, qual a senha?")
}
console. log("Acesso liberado")


//5
let contador3 = 50
while(contador3 <= 100){
console. log(contador3)
contador3++
}
//6
let contador4 = 0
while(contador4 <= 100){
console. log(contador4)
contador4+=5
}
//7
let contador5 = 1
while(contador5 <= 5){
console. log("Eu gosto de JavaScript")
contador5++
}

// 8 

let nome = prompt("Digite seu nome:");
let quantidade = Number(prompt("Digite um número:"));

let contadorNome = 0;
while (contadorNome < quantidade) {
  console.log(nome);
  contadorNome++;
}


//9

let nota = Number(prompt("Digite uma nota entre 0 e 10:"));

while (nota < 0 || nota > 10) {
  nota = Number(prompt("Nota inválida! Digite uma nota entre 0 e 10:"));
}

console.log("Nota registrada com sucesso");

//10
let soma = 0;
let numero = Number(prompt("Digite um número positivo:"));

while (numero >= 0) {
  soma += numero;
  numero = Number(prompt("Digite outro número positivo (ou negativo para parar):"));
}

console.log("Soma dos valores digitados:", soma);

//11
let opcao = 0;

while (opcao !== 3) {
  opcao = Number(
    prompt(
      "Menu:\n" +
      "1 - Cadastrar\n" +
      "2 - Consultar\n" +
      "3 - Sair"
    )
  );
}

console.log("Programa encerrado");

//12
let contador7 = 1;

while (contador7 <= 50) {
  if (contador7 % 2 === 0) {
    console.log(contador7);
  }
  contador7++;
}

//13
let usuario = "";
let senha = "";

while (usuario !== "admin" || senha !== "123") {
  usuario = prompt("Digite o usuário:");
  senha = prompt("Digite a senha:");
}

console.log("Bem-vindo ao sistema!");
//14
let numeroSecreto = 7;
let tentativa = Number(prompt("Tente adivinhar o número secreto:"));

while (tentativa !== numeroSecreto) {
  tentativa = Number(prompt("Errou! Tente novamente:"));
}

console.log("Você acertou!");