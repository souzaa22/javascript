//1 
function mensagemInicial(){
console.log("Aprendendo funções com Js")
}
mensagemInicial()

//2
function boasVindas(){
    console.log("Densenvolvimento de Sistemas")
    
}
boasVindas()
boasVindas()
//3
function contarAteDez(){
let soma = 0
for(let i = 1; i <= 10; i++) {    
console.log (i)
}}
contarAteDez()
//4
function contagemRegressiva(){
for(let i = 10; i >= 1; i -- ) {
console.log(i)
}
 
}
contagemRegressiva()
//5
function mensagemRepetida (){
let contador = 1
while(contador <= 5){
console. log("Eu gosto de JavaScript")
contador++
}}
mensagemRepetida ()
//6
function numerosPares(){
let soma = 0
for(let i = 0; i <= 20; i+=2) {    
console.log (i)
}}
numerosPares()
//7
function tabuada(){
 let tabuada = 18
for(let i = 1; i <= 10; i++) {
let resultado = tabuada * i
console.log(tabuada,"x", i ,"=",resultado)
}
}
tabuada()
//8
function mostrarSoma (){
 let somar = Number(prompt("Informe o valor do primeiro numero"))
 let somar2 = Number(prompt("Informe o valor do segundo numero"))
let resultar = somar+somar2
console.log(resultar)
}
 mostrarSoma ()
 //9
 function alertaSistema (){
    console.log("Densenvolvimento de Sistemas")
    
}
alertaSistema ()
alertaSistema ()
alertaSistema ()
//10
function Juliana(){
    console.log("Minha professora é a Juliana")
}
Juliana()
function Whashintong(){
    console.log("Meu professor é o Whashintong")
}
Whashintong()
function Densenvolvimento(){
    console.log("Eu estudo Desenvolvimento de Sistemas")
}
Densenvolvimento()
//11
function calcularSoma() {
  let total = 0;

  for (let contador = 1; contador <= 5; contador++) {
    let valor = Number(prompt("Digite o número " + contador + ":"));
    total = total + valor;
  }

  console.log("A soma dos números é: " + total);
}

calcularSoma();
// 12 - Cálculo de aumento
function aumentoSalario() {
  let salario = Number(prompt("Digite o salário do funcionário"));

  if (salario <= 3500) {
    let novoSalario = salario + 500;
    console.log("Novo salário: " + novoSalario);
  } else {
    console.log("Não terá aumento");
  }
}

aumentoSalario();


// 13 - Aprovação Escolar
function aprovacaoAluno() {
  let nota1 = Number(prompt("Digite a primeira nota"));
  let nota2 = Number(prompt("Digite a segunda nota"));
  let nota3 = Number(prompt("Digite a terceira nota"));

  let media = (nota1 + nota2 + nota3) / 3;

  if (media > 6) {
    console.log("Aprovado");
  } else if (media >= 5) {
    console.log("Recuperação");
  } else {
    console.log("Reprovado");
  }
}

aprovacaoAluno();


// 14 - Avaliação de atendimento
function avaliacaoAtendimento() {
  let nota = Number(prompt("Dê uma nota para o atendimento"));

  if (nota == 9 || nota == 10) {
    console.log("Excelente");
  } else if (nota == 8) {
    console.log("Ótimo");
  } else if (nota == 7 || nota == 6) {
    console.log("Bom");
  } else if (nota == 5) {
    console.log("Regular");
  } else {
    console.log("Ruim");
  }
}

avaliacaoAtendimento();