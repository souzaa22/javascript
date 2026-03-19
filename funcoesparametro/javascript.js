//1

function dobro(numero) {
    console.log("Dobro:", numero * 2)
}
dobro(10)

//2

function calcularArea(base, altura) {
    console.log("Área do retângulo:", base * altura)
}
calcularArea(5, 4)

//3

function converterParaFahrenheit(celsius) {
    let fahrenheit = celsius * 1.8 + 32  
    console.log ("A temperatura em fahrenheit é de ", fahrenheit)
}
let celsius = Number(prompt("Qual a temperatura em celsius?"))
converterParaFahrenheit(celsius)

//4

function verificarNota(nota){
    if(nota>=7){
        console.log("Aprovado")
    }else if(nota>=5){
        console.log("Recuperação")
    }else {
        console.log("Reprovado")
    }
    }
let nota = Number(prompt("Informe a nota do aluno"))
verificarNota(nota)
//5
function verificarNumero (verificar){
    if(verificar>=1){
        console.log("Positivo")
    }else if(verificar=0){
        console.log("Zero")
    }else {
        console.log("Negativo")
    }
    }
    //6
console.log(" Contar Pares Até o Número;\n")
function contarPares(numero){
    for(let i = 0; i <= numero; i++){
        if(i % 2 === 0){
            console.log(i)
        }
    }
}
let numero3 = Number(prompt("Digite um número:"))
contarPares(numero3)



//7
console.log(" Soma de Intervalo;\n")
function somarIntervalo(num1, num2){
    let soma = 0
    for(let i = num1; i <= num2; i++){
        soma += i
    }
    console.log("A soma do intervalo é:", soma)
}
let inicio = Number(prompt("Digite o primeiro número:"))
let fim = Number(prompt("Digite o segundo número:"))
somarIntervalo(inicio, fim)



//8
console.log(" Repetir Nome;\n")
function repetirNome(nome, quantidade){
    for(let i = 1; i <= quantidade; i++){
        console.log(nome)
    }
}
let nome = prompt("Digite um nome:")
let vezes = Number(prompt("Quantas vezes repetir?"))
repetirNome(nome, vezes)


//9
console.log(" Tabuada;\n")
function tabuada(numero){
    for(let i = 1; i <= 10; i++){
        console.log(numero + " x " + i + " = " + (numero * i))
    }
}
let numero4 = Number(prompt("Digite um número para ver a tabuada:"))
tabuada(numero4)


//10
console.log(" Contagem Decrescente Personalizada;\n")
function contagemPersonalizada(numero){
    for(let i = numero; i >= 0; i--){
        if(i % 2 !== 0){
            console.log(i)
        }
    }
}
let numero5 = Number(prompt("Digite um número para iniciar a contagem:"))
contagemPersonalizada(numero5)


//11
console.log("Média de Três Notas;\n")
function mediaAluno(n1, n2, n3){
    let media = (n1 + n2 + n3) / 3

    console.log("Média:", media)

    if(media >= 7){
        console.log("Aprovado")
    }else if(media > 5){
        console.log("Recuperação")
    }else{
        console.log("Reprovado")
    }
}
let nota1 = Number(prompt("Digite a primeira nota:"))
let nota2 = Number(prompt("Digite a segunda nota:"))
let nota3 = Number(prompt("Digite a terceira nota:"))
mediaAluno(nota1, nota2, nota3)


   