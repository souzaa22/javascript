// 1 - Comparando dois números

let num1 = Number(prompt("Qual o primeiro numero?"))
let num2 = Number(prompt("Qual o segundo numero?"))
console.log(num1 > num2)
console.log(num1 <= num2)
console.log(num1 == num2)


// 2 - Idade para votar
let idadeVoto = Number(prompt("Qual a sua idade?"))
console.log(idadeVoto >= 16)


// 3 - Maioridade
let idadePessoa = Number(prompt("Digite a idade da pessoa"))
console.log(idadePessoa >= 18)
console.log(idadePessoa >= 60)


// 4 - Verificação de login
let usuario = prompt("Digite o nome de usuário")
console.log(usuario == "admin")


// 5 - Saldo bancário
let saldo = Number(prompt("Digite o saldo da conta"))
let saque = Number(prompt("Digite o valor do saque"))

console.log(saldo >= saque)
console.log(saldo - saque > 100)


// 6 - Média do aluno
let nota1 = Number(prompt("Digite a primeira nota"))
let nota2 = Number(prompt("Digite a segunda nota"))
let media = (nota1 + nota2) / 2

console.log(media >= 6)


// 7 - Preço do produto
let preco = Number(prompt("Digite o preço do produto"))

console.log(preco > 50)
console.log(preco <= 20)


// 8 - Velocidade da via
let velocidade = Number(prompt("Digite a velocidade do carro"))

console.log(velocidade > 80)
console.log(velocidade > 120)


// 9 - Altura para brinquedo
let altura = Number(prompt("Digite sua altura em metros"))

console.log(altura >= 1.40)


// 10 - Nome cadastrado
let nome = prompt("Digite seu nome")

console.log(nome == "Maria")
console.log(nome != "João")


// 11 - Senha simples
let senha = prompt("Digite a senha")

console.log(senha == "1234")


// 12 - Parcelamento
let valorCompra = Number(prompt("Digite o valor da compra"))
let valorParcela = Number(prompt("Digite o valor da parcela"))

console.log(valorParcela <= 200)


// 13 - Idade em meses
let idadeAnos = Number(prompt("Digite sua idade em anos"))
let idadeMeses = idadeAnos * 12

console.log(idadeMeses > 200)
