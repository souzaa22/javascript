// 01 - Pode Dirigir
let idade = Number(prompt("Digite sua idade:"));
let cnh = prompt("Possui CNH? (sim/nao)");

if (idade >= 18 && cnh === "sim") {
  console.log("Pode dirigir.");
} else {
  console.log("Não pode dirigir.");
}

// 02 - Aprovação Escolar
let nota = Number(prompt("Digite a nota:"));
let faltas = Number(prompt("Digite a quantidade de faltas:"));

if (nota >= 6 && faltas <= 10) {
  console.log("Aluno aprovado.");
} else {
  console.log("Aluno reprovado.");
}

// 03 - Acesso ao Evento
idade = Number(prompt("Digite sua idade:"));
let conviteEvento = prompt("Tem convite? (sim/nao)");

if (idade >= 18 && conviteEvento === "sim") {
  console.log("Entrada liberada no evento.");
} else {
  console.log("Entrada negada no evento.");
}

// 04 - Empréstimo Bancário
let salario = Number(prompt("Digite seu salário:"));
let nomeLimpo = prompt("Seu nome está limpo? (sim/nao)");

if (salario >= 2500 && nomeLimpo === "sim") {
  console.log("Empréstimo aprovado.");
} else {
  console.log("Empréstimo negado.");
}

// 05 - Entrada no Casamento
let conviteCasamento = prompt("Você tem convite? (sim/nao)");
let lista = prompt("Seu nome está na lista? (sim/nao)");

if (conviteCasamento === "sim" || lista === "sim") {
  console.log("Pode entrar no casamento.");
} else {
  console.log("Entrada não permitida.");
}

// 06 - Desconto na Barbearia
let valorCompra = Number(prompt("Digite o valor da compra:"));
let vip = prompt("Você é cliente VIP? (sim/nao)");

if (valorCompra > 80 || vip === "sim") {
  console.log("Desconto aplicado.");
} else {
  console.log("Sem desconto.");
}

// 07 - Recuperação Escolar
let notaRec = Number(prompt("Digite a nota:"));
let trabalho = prompt("Fez trabalho extra? (sim/nao)");

if (notaRec > 5 && trabalho === "sim") {
  console.log("Aprovado na recuperação.");
} else {
  console.log("Reprovado na recuperação.");
}

// 08 - Liberação de Sistema
let senha = prompt("Digite a senha:");
let digital = prompt("Digital reconhecida? (sim/nao)");

if (senha === "1234" && digital === "sim") {
  console.log("Acesso liberado.");
} else {
  console.log("Acesso negado.");
}

// 09 - Conta Bloqueada
let bloqueado = false;

if (bloqueado) {
  console.log("Conta bloqueada.");
} else {
  console.log("Conta liberada.");
}

// 10 - Cadastro Incompleto
let temCadastro = false;

if (temCadastro) {
  console.log("Cadastro completo.");
} else {
  console.log("Precisa fazer cadastro.");
}

// 11 - Acesso Completo
let login = prompt("Digite o login:");
let senhaLogin = prompt("Digite a senha:");

if (login === "ADMIN" && senhaLogin === "senai2026") {
  console.log("Login realizado com sucesso.");
} else {
  console.log("Login ou senha incorretos.");
}

// 12 - Compra Parcelada
let valorParcelado = Number(prompt("Digite o valor da compra:"));
let cartao = prompt("Possui cartão da loja? (sim/nao)");
let nomeLimpoCompra = prompt("Nome limpo? (sim/nao)");

if (valorParcelado > 300 && cartao === "sim" && nomeLimpoCompra === "sim") {
  console.log("Compra parcelada aprovada.");
} else {
  console.log("Não é possível parcelar.");
}

// 13 - Matrícula
idade = Number(prompt("Digite sua idade:"));
let documentos = prompt("Entregou os documentos? (sim/nao)");
let pagamento = prompt("Pagou a matrícula? (sim/nao)");

if (idade >= 17 && documentos === "sim" && pagamento === "sim") {
  console.log("Matrícula realizada.");
} else {
  console.log("Matrícula não realizada.");
}

// 14 - Entrada no Clube
idade = Number(prompt("Digite sua idade:"));
let socio = prompt("É sócio? (sim/nao)");
let convidado = prompt("É convidado? (sim/nao)");

if (idade >= 15 && (socio === "sim" || convidado === "sim")) {
  console.log("Entrada permitida no clube.");
} else {
  console.log("Entrada não permitida no clube.");
}
