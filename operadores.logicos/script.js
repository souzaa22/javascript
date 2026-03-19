//Operadores Lógicos
// && - e - tudo tem que ser verdadeiro
// || - ou - apenas um precisa ser verdadeiro
// ! - não - inverte o true para false e vice-versa

let idade = 20
let convite = true
console.log(idade >= 18 && convite == true) //true


let ingresso = "não"
let nomeLista = "não"
console.log(ingresso == "sim")
//falso OU falso = false

let calor = true
console.log(calor) //true
console.log(!calor) //false

nomeLista == ("sim") //false

/* Para assistir um filme de terror no cinema é preciso ter idade
maior ou igual a 14 ou estar acompanhado do responsavel */

let idade1 = Number (prompt("Qual sua idade?"))
let responsavel = prompt("esta acompanhado?")

console.log(idade1 >= 14 || responsavel == "sim")

/* Para ser aprovado no Senai o aluno precisa ter nota maior ou
igual a 50 e ter frequência maior ou igual a 75 */


let nota = Number (prompt ("Qual sua nota?") )
let frequencia = Number (prompt("Qual sua frequencia?") )
console.log(nota >= 50 && frequencia >= 75)

/* Para fazer login no computador, o aluno deve colocar o usuário
igual a TDS2 e a senha igual a senai2026 */


let login = (prompt("qual o usuario?"))
let resenhasponsavel = prompt("qual a senha?")

console.log(login == TD2 || resenhasponsavel == "senai2026")