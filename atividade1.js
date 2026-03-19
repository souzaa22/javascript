//1
let pizza = prompt("Informe os dias da semana ")
switch(pizza) {
case "1":
console.log("domingo")
break
case "2":
console.log("segunda")
break;
case "3":
console.log("terceira")
break;
case "4":
console.log("quarta")
break;
case "5":
console.log("quinta")
break;
case "6":
console.log("sexta")
break;
case "7":
console.log("sabado")
break;
default:
console.log("Inválido")
}
//2
let idd = prompt("Classificação da idade ")
switch(idd) {
case "5":
console.log("infantil A")
break
case "10":
console.log("Infantil B")
break;
case "15":
console.log("Juvenil A")
break;
case "20":
console.log("Juvenil B")
break;
case "3":
console.log("Adulto")
break;

default:
console.log("Inválido")
}
//3
 let t = prompt("Classificação de turno de trs")
switch(t) {
case "5":
console.log("infantil A")
break
case "10":
console.log("Infantil B")
break;
case "15":
console.log("Juvenil A")
break;
}
//4
let nrmr = prompt("Informe os dias da semana ")
switch(nrmr) {
case "1":
console.log("oii")
break
case "2":
console.log("salve")
break;
case "3":
console.log("forte abraço")
break;
case "4":
console.log("boa")
break;
case "5":
console.log("eae")
break;
default:
console.log("insira um valor entre 1 e 5")

}
//5 
let estacao = prompt("Digite um número de 1 a 4:")
switch (estacao) {
  case "1":
    console.log("Primavera")
    break
  case "2":
    console.log("Verão")
    break
  case "3":
    console.log("Outono")
    break
  case "4":
    console.log("Inverno")
    break
  default:
    console.log("Estação inválida. Insira um número de 1 a 4.")
}

//6
let op = prompt("1-Somar | 2-Subtrair | 3-Multiplicar | 4-Dividir")
let n1 = Number(prompt("Digite o primeiro número"))
let n2 = Number(prompt("Digite o segundo número"))

switch (op) {
  case "1":
    console.log(n1 + n2)
    break
  case "2":
    console.log(n1 - n2)
    break
  case "3":
    console.log(n1 * n2)
    break
  case "4":
    console.log(n1 / n2)
    break
  default:
    console.log("Operação inválida.")
}

//7
let produto = prompt("Digite o código do produto")
switch (produto) {
  case "100":
    console.log("Caneta")
    break
  case "200":
    console.log("Lápis")
    break
  case "300":
    console.log("Borracha")
    break
  case "400":
    console.log("Caderno")
    break
  default:
    console.log("Produto não encontrado.")
}

//8 
let conceito = prompt("Digite a letra da nota").toUpperCase()
switch (conceito) {
  case "A":
    console.log("Excelente")
    break
  case "B":
    console.log("Bom")
    break
  case "C":
    console.log("Regular")
    break
  case "D":
    console.log("Ruim")
    break
  case "F":
    console.log("Reprovado")
    break
  default:
    console.log("Conceito inválido.")
}

//9 
let acao = prompt("1-Atacar | 2-Defender | 3-Curar | 4-Fugir")
switch (acao) {
  case "1":
    console.log("Você atacou!")
    break
  case "2":
    console.log("Você se defendeu!")
    break
  case "3":
    console.log("Você se curou!")
    break
  case "4":
    console.log("Você fugiu!")
    break
  default:
    console.log("Opção inválida. Você perdeu a vez.")
}

// 10
let moeda = prompt("1-Real p/ Dólar | 2-Dólar p/ Real | 3-Real p/ Euro")
let valor = Number(prompt("Digite o valor"))

switch (moeda) {
  case "1":
    console.log(valor * 0.20)
    break
  case "2":
    console.log(valor * 5)
    break
  case "3":
    console.log(valor * 0.18)
    break
  default:
    console.log("Opção inválida.")
}

//11 
let atendimento = prompt("1-Suporte | 2-Financeiro | 3-Comercial | 4-Cancelamento")
switch (atendimento) {
  case "1":
    console.log("Suporte Técnico")
    break
  case "2":
    console.log("Financeiro")
    break
  case "3":
    console.log("Comercial")
    break
  case "4":
    console.log("Cancelamento")
    break
  default:
    console.log("Setor inválido.")
}

//12
let pedido = prompt("1-Hambúrguer | 2-Pizza | 3-Suco | 4-Sorvete")
switch (pedido) {
  case "1":
    console.log("Hambúrguer")
    break
  case "2":
    console.log("Pizza")
    break
  case "3":
    console.log("Suco")
    break
  case "4":
    console.log("Sorvete")
    break
  default:
    console.log("Pedido inválido.")
}

//13
let nota = prompt("Digite uma nota de 1 a 5")
switch (nota) {
  case "1":
    console.log("Péssimo")
    break
  case "2":
    console.log("Ruim")
    break
  case "3":
    console.log("Regular")
    break
  case "4":
    console.log("Bom")
    break
  case "5":
    console.log("Excelente")
    break
  default:
    console.log("Nota inválida.")
}

//14
let usuario = prompt("1-Admin | 2-Professor | 3-Aluno | 4-Visitante")
switch (usuario) {
  case "1":
    console.log("Administrador")
    break
  case "2":
    console.log("Professor")
    break
  case "3":
    console.log("Aluno")
    break
  case "4":
    console.log("Visitante")
    break
  default:
    console.log("Usuário inválido.")
}

//15
let filme = prompt("1-Ação | 2-Comédia | 3-Drama | 4-Terror | 5-Animação")
switch (filme) {
  case "1":
    console.log("Ação")
    break
  case "2":
    console.log("Comédia")
    break
  case "3":
    console.log("Drama")
    break
  case "4":
    console.log("Terror")
    break
  case "5":
    console.log("Animação")
    break
  default:
    console.log("Categoria inválida.")
}
