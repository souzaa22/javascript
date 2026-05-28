let imagens = document.querySelectorAll(".img")
let indice = 0
function mostrarImagens(){
    imagens.forEach(function(img) {
     img.classList.remove("ativa")
    })
imagens[indice].classList.add("ativa")
}
function proximo(){
    indice++
    if(indice >= imagens.length ){
        indice = 0
    }
    mostrarImagens()
} 

function voltar(){
indice--
if(indice < 0){
    indice = imagens.length - 1
}
mostrarImagens()
}
function avancarAutomatico(){
    indice++
    if(indice >= imagens.length){
        indice = 0
    }
    mostrarImagens()
}
setInterval(avancarAutomatico, 3000)

let imagens2 = document.querySelectorAll(".img2")
let indice2 = 0
function mostrarImagens2(){
    imagens2.forEach(function(img2) {
     img2.classList.remove("ativa2")
    })
imagens2[indice2].classList.add("ativa2")
}

function avancarAutomatico(){
    indice2++
    if(indice2 >= imagens2.length){
        indice2 = 0
    }
    mostrarImagens2()
}
setInterval(avancarAutomatico, 3000)