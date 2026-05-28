let senha = document.getElementById("senha")
let confirmar = document.getElementById("confirmar")
let mensagem = document.getElementById("mensagem")

function mostrarSenha() {
if (senha.type == "password") {
senha. type = "text"
} else {
senha. type = "password"
}
}
confirmar.addEventListener("input", function() {
let numero = /[0-12]/.test(senha.value)
let minuscula = /[a-z]/.test(senha.value)
let maiuscula = /[A-Z]/.test(senha.value)
let especial = /[!#$%&*]/.test(senha.value)
let tamanho = senha.value.length >= 8

if(senha.value == confirmar.value && numero && minuscula && maiuscula && especial && tamanho) {
mensagem. innerText = "As senhas são iguais"
mensagem.classList. add("certo")
mensagem. classList.remove("errado")
} else {
mensagem. innerText = "As senhas precisam ter números, letras minusculas, letras maiúsculas, caracteres especiais, ter mais de oito caracteres e ser iguais  "
mensagem.classList.remove("certo")
mensagem.classList. add("errado")


}
})
