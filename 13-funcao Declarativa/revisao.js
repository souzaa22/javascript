function saudacao(){
    console.log("boa tarde")
}
saudacao()
saudacao()
saudacao()

function mult(){
let num1 = Number(prompt("informe o numero"))
let num2 = Number(prompt("informe outro numero"))
let multiplicacao = num1*num2
console.log(multiplicacao)
}
mult()
function caixa(){
let num3 = Number(prompt("informe o valor da compra"))
let num4 = Number(prompt("informe o valor pago"))
let troco = num4-num3
if(num4> num3){
    console.log("Tem troco")
}else {
    console.log("Sem troco")
}
}
console.log(caixa)
console.log(caixa)

function restaurante(){
    let menu = Number(prompt("Informe o que deseja. (1 para mostrar cardápio, 2 para chamar garçom,3 para fechar a conta)."))
if(menu = 1){
    console.log("mostrar cardápio")
}else if (menu = 2){
    console.log("chamando gaçom")
} else if(menu = 3){
    console.log("fechar conta")
}else {
    console.log(" Opção inválida")
}
console.log(restaurante)
}