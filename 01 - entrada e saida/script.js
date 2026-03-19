console.log("Olá mundo")
//alert("Bem vindo ao site")

let idade = 25
let nome = "Juliana"
let chuva = false

console.log(typeof idade)
console.log(typeof nome)
console.log(typeof chuva)

console.log("Meu nome é: "+nome+" e eu tenho "+idade+" anos")

//leitura de dados
let salario = prompt('Qual seu salario')
console.log(salario)

let temperatura = Number (prompt ("Qual a temperatura? ") )
let clima = temperatura >= 30? "Esta calor" : "Nao esta calor"
console.log(clima)


let number = Number (prompt ("Qual a temperatura? ") )
let numero = number >= 0? "Positivo" : "negativo"
console.log(numeros)

let num = Number(prompt("Informe um numero:") )
let resultado2 = num > 0 ? "Positivo" : num < 0 ? "Negativo" :
"Zero"
console.log(resultado2)

/* Peça uma nota para o aluno e classifique,
- "Excelente" para nota maior ou igual a 9
- "Bom" para nota maior ou igual a 7
- "Regular" para nota maior ou igual a 5
"Reprovado" caso contrario*/

let num2 = Number(prompt("Informe um numero:") )
let resultado3 = num2 >= 9? "excelente" : num2 < 7 ? "Bom" :num2>=5 ?"regular":
"reprovado"
console.log(resultado3)
