console.log(5>10) //false
console.log(10.5) //true
//1 - Comparando Dois Números
let idade = Number(prompt("qual sua idade?"))
console.log(idade)
console.log(idade >= 18)
//2 - Idade para Votar
let salario = Number (prompt ("Qual seu salario?") )
let aumento = salario <= 2500
console.log(aumento)
3 - Maioridade

let numero1 = Number (prompt ("Informe um numero") )
let numero2 = Number (prompt ("Informe um numero" ) )
console. log(numero1 > numero2)
console.log(numero1 < numero2)
console.log(numero1 == numero2)


/* Uma loja da descontos nos produtos direto no caixa. Faça um
programa que receba o valor pago pelo usuário, dê R$20 de
desconto e mostre se o valor que será pago é maior ou igual a
R$50 */

let caixa = Number (prompt ("Informe o valor pago") )
let desconto = valor - 20
console.log(desconto >= 50)

/* Pergunte o NIF de um funcionário, e verifique se:
- é igual a SN1081475
- é diferente de SN1048630 */

let nif = Number (prompt("Qual seu NIF?"))
console.log(nif == SN1081475)


let gabtriel = Number(prompt("qual sua idade?"))
console.log(gabriel)
console.log >gabtriel
// 4 - Verificação de Login
let usuario = prompt("Digite o nome de usuário:");
alert(usuario === "admin" ? "Login correto!" : "Usuário incorreto!");

// 5 - Saldo Bancário
let saldo = Number(prompt("Digite o saldo da conta:"));
let saque = Number(prompt("Digite o valor do saque:"));
alert(saldo >= saque ? "Saque permitido!" : "Saldo insuficiente!");
(saldo - saque > 100) && alert("O saldo ficará acima de R$100");

// 6 - Média do Aluno
let n1 = Number(prompt("Digite a primeira nota:"));
let n2 = Number(prompt("Digite a segunda nota:"));
let media = (n1 + n2) / 2;
alert(media >= 6 ? "Aprovado!" : "Reprovado!");

// 7 - Preço do Produto
let preco = Number(prompt("Digite o preço do produto:"));
(preco > 50) && alert("Produto caro");
(preco <= 20) && alert("Produto barato");

// 8 - Velocidade da Via
let velocidade = Number(prompt("Digite a velocidade do carro:"));
(velocidade > 80) && alert("Acima do limite permitido");
(velocidade > 120) && alert("Velocidade extremamente alta!");

// 9 - Altura para Brinquedo
let altura = Number(prompt("Digite sua altura em metros:"));
alert(altura >= 1.40 ? "Pode entrar no brinquedo!" : "Altura insuficiente!");

// 10 - Nome Cadastrado
let nome = prompt("Digite seu nome:");
(nome === "Maria") && alert("Nome é Maria");
(nome !== "João") && alert("Nome é diferente de João");

// 11 - Senha Simples
let senha = prompt("Digite a senha:");
alert(senha === "1234" ? "Senha correta!" : "Senha incorreta!");

// 12 - Parcelamento
let valorParcela = Number(prompt("Digite o valor da parcela:"));
alert(valorParcela <= 200 ? "Parcelamento aprovado!" : "Parcela muito alta!");

// 13 - Idade em Meses
let idadeAnos = Number(prompt("Digite sua idade em anos:"));
let idadeMeses = idadeAnos * 12;
alert(idadeMeses > 200 ? "Você tem mais de 200 meses de vida" : "Você tem 200 meses ou menos de vida");