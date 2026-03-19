let contador = 1
while(contador <= 5){
console. log(contador)
contador++
}

let soma = 0
let aux = 1 
while (aux <=3 ){
    let num = Number(prompt("Informe um número"))

soma = soma + num
aux ++
}
console.log("O resultado é: ",soma)

let senha = prompt("Informe um senha: ")
while (senha != "senai2026") {
senha = prompt("Senha incorreta. Informe um senha: ")

console.log("Acesso liberado")

}
let login = prompt("qual o login?")
let senha2 = prompt ("qual a senha?")

while (login != "TDS2" && senha2 != "senai") {
login = prompt("Errou, qual o login?")
senha2 = prompt("Errou, qual a senha?")
}
console. log("Acesso liberado")