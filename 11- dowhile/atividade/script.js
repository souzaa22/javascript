// 1 
let numero = 1;
do {
  console.log(numero);
  numero++;
} while (numero <= 20);


// 2 
let resposta;
do {
  resposta = prompt("Deseja continuar?");
} while (resposta !== "s" && resposta !== "n");


// 3 
let numero4 = Number(prompt("Informe um número"));
let aux = 1;

do {
  console.log(aux);
  aux++;
} while (aux <= numero4);


// 4 
let numero2 = 1;
do {
  console.log(numero2);
  numero2 += 2;
} while (numero2 <= 31);


// 5 
let numero3;
let aux2 = 1;

do {
  numero3 = Number(prompt("Diga um número"));

  if (numero3 > 0) {
    console.log("Número positivo");
  } else if (numero3 === 0) {
    console.log("O número é 0");
  } else {
    console.log("Número negativo");
  }

  aux2++;
} while (aux2 <= 5);


// 6 
let resposta2;
do {
  resposta2 = prompt("Deseja fazer uma conta?");
  if (resposta2 === "s") {
    let num1 = Number(prompt("Digite o primeiro número:"));
    let num2 = Number(prompt("Digite o segundo número:"));
    let soma = num1 + num2;
    console.log("A soma dos números é: " + soma);
  }
} while (resposta2 === "s");


// 7 
let aux3 = 1;
do {
  console.log("Estudando JavaScript");
  aux3++;
} while (aux3 <= 10);


// 8 
let numero5;
do {
  numero5 = Number(prompt("Digite um número positivo"));
} while (numero5 <= 0);

console.log("Valor válido");


// 9 
let senha;
do {
  senha = prompt("Digite a senha");
} while (senha !== "senai2026");

console.log("Acesso liberado");


// 10 
let total = 0;
let continuar;

do {
  let valor = Number(prompt("Digite um número inteiro"));
  total += valor;

  continuar = prompt("Deseja continuar?");
} while (continuar === "s");

console.log("Soma total: " + total);