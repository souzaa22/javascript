let contador = 1
//while
while( contador <=5){
    console.log("usando while")
contador++
}
//dowhile
do{
    console.log(" usando doehile")
contador2++
} while (contador2 <=5
    
)
//mostrar do 1 ao 3
let numero = 1
do{
console.log(numero)
    numero++
}while(numero<=3)


    let resposta = prompt("deseja continuar?")
    do{
 resposta = prompt("deseja continuar?")
    } while (resposta == "sim")

        
let numero2
let aux = 1
do{
    numero2 = Number(prompt("Diga um numero"))
    if(numero>10){
        console.log("è maior que 10")
    } else{
        console.log("é menor que 10")
    }
    aux++
}while (aux<=10)

let soma = 0
let aux2 = 1
let num
do {
num = Number(prompt("Informe um numero:") )
soma = soma + num
console.log(soma)
aux2++
} while(aux2 <= 3)

let numero4 = 0
do{
console.log(numero4)
    numero4+=3
}while(numero<=99)
